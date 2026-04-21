import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const cacheRoot = path.join(root, '.cache')
const scanJsonPath = path.join(cacheRoot, 'source-scan.json')
const scanSummaryPath = path.join(cacheRoot, 'source-scan-summary.txt')
const mode = process.argv[2]
const input = process.argv[3] ?? null

const organizations = [
    { provider: 'github', owner: 'laravel-enso', section: 'backend' },
    { provider: 'github', owner: 'enso-ui', section: 'frontend' },
    { provider: 'gitlab', owner: 'laravel-enso', section: 'backend' },
    { provider: 'gitlab', owner: 'enso-ui', section: 'frontend' },
]

const sourceFiles = {
    backend: path.join(root, 'sources.backend.json'),
    frontend: path.join(root, 'sources.frontend.json'),
}

const loadEnvFile = async (filename) => {
    const filePath = path.join(root, filename)

    try {
        const content = await readFile(filePath, 'utf8')

        for (const line of content.split(/\r?\n/u)) {
            const trimmed = line.trim()

            if (!trimmed || trimmed.startsWith('#')) {
                continue
            }

            const separatorIndex = trimmed.indexOf('=')

            if (separatorIndex === -1) {
                continue
            }

            const key = trimmed.slice(0, separatorIndex).trim()
            let value = trimmed.slice(separatorIndex + 1).trim()

            if (
                (value.startsWith('"') && value.endsWith('"'))
                || (value.startsWith("'") && value.endsWith("'"))
            ) {
                value = value.slice(1, -1)
            }

            if (key && process.env[key] === undefined) {
                process.env[key] = value
            }
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            return
        }

        throw error
    }
}

await loadEnvFile('.env')
await loadEnvFile('.env.local')

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, '')

const parseRepositoryUrl = (value) => {
    const url = new URL(value)
    const pathname = trimSlashes(url.pathname.replace(/\.git$/, ''))
    const [owner, repo] = pathname.split('/')

    if (!owner || !repo) {
        throw new Error(`Unsupported repository URL: ${value}`)
    }

    if (url.hostname === 'github.com') {
        return {
            provider: 'github',
            owner,
            repo,
            section: owner === 'enso-ui' ? 'frontend' : owner === 'laravel-enso' ? 'backend' : null,
            url: `https://github.com/${owner}/${repo}`,
        }
    }

    if (url.hostname === 'git.xtelecom.ro') {
        return {
            provider: 'gitlab',
            owner,
            repo,
            section: owner === 'enso-ui' ? 'frontend' : owner === 'laravel-enso' ? 'backend' : null,
            url: `https://git.xtelecom.ro/${owner}/${repo}`,
        }
    }

    throw new Error(`Unsupported repository host: ${url.hostname}`)
}

const sortSources = (sources) => [...sources].sort((first, second) => first.title.localeCompare(second.title))

const readSourceFile = async (section) => {
    const filePath = sourceFiles[section]
    const content = JSON.parse(await readFile(filePath, 'utf8'))
    const entries = content[section]

    if (!Array.isArray(entries)) {
        throw new Error(`Invalid source file for ${section}`)
    }

    return entries
}

const writeSourceFile = async (section, entries) => {
    const filePath = sourceFiles[section]
    await writeFile(filePath, `${JSON.stringify({ [section]: sortSources(entries) }, null, 4)}\n`)
}

const encodePathSegments = (value) => value
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')

const githubHeaders = () => ({
    Accept: 'application/vnd.github+json',
    ...(process.env.GITHUB_TOKEN?.trim() ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN.trim()}` } : {}),
    'User-Agent': 'laravel-enso-documentation-registry',
})

const gitlabHeaders = () => ({
    ...(process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim()
        ? { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim() }
        : {}),
    'User-Agent': 'laravel-enso-documentation-registry',
})

const titleCase = (value) => value
    .split('-')
    .map((chunk) => chunk ? chunk.charAt(0).toUpperCase() + chunk.slice(1) : chunk)
    .join(' ')

const normalizeSlug = (value) => value.toLowerCase()

const parseSectionTarget = (value, command) => {
    if (!value || !value.includes('/')) {
        throw new Error(`Provide a target in the form section/slug for ${command}.`)
    }

    const [section, ...slugParts] = value.split('/')
    const slug = normalizeSlug(slugParts.join('/'))

    if (!section || !slug || !(section in sourceFiles)) {
        throw new Error(`Invalid target for ${command}: ${value}`)
    }

    return { section, slug }
}

const extractReadmeTitle = (content, fallback) => {
    const match = content.match(/^#\s+(.+?)\s*$/mu)

    return match?.[1]?.trim() || fallback
}

const fetchGithubOrgRepos = async (owner) => {
    const repos = []
    let page = 1

    while (true) {
        const response = await fetch(`https://api.github.com/orgs/${owner}/repos?per_page=100&page=${page}&sort=full_name&direction=asc`, {
            headers: githubHeaders(),
        })

        if (!response.ok) {
            if (response.status === 403) {
                return fetchGithubOrgReposFromHtml(owner)
            }

            throw new Error(`GitHub org fetch failed (${response.status}) for ${owner}`)
        }

        const batch = await response.json()

        repos.push(...batch.map((repo) => ({
            archived: Boolean(repo.archived),
            branch: repo.default_branch ?? 'main',
            provider: 'github',
            repo: repo.name,
            section: owner === 'enso-ui' ? 'frontend' : 'backend',
            slug: normalizeSlug(repo.name),
            url: repo.html_url,
        })))

        if (batch.length < 100) {
            break
        }

        page += 1
    }

    return repos
}

const parseGithubEmbeddedData = (html) => {
    const match = html.match(/<script type="application\/json" data-target="react-app\.embeddedData">(.+?)<\/script>/su)

    if (!match) {
        throw new Error('Unable to extract GitHub embedded repository data from HTML')
    }

    return JSON.parse(match[1])
}

const fetchGithubOrgReposFromHtml = async (owner) => {
    const repos = []
    let page = 1
    let pageCount = 1

    while (page <= pageCount) {
        const response = await fetch(`https://github.com/orgs/${owner}/repositories?q=archived%3Afalse&page=${page}`)

        if (!response.ok) {
            throw new Error(`GitHub HTML org fetch failed (${response.status}) for ${owner}`)
        }

        const html = await response.text()
        const payload = parseGithubEmbeddedData(html).payload?.orgReposPageRoute

        if (!payload || !Array.isArray(payload.repositories)) {
            throw new Error(`GitHub HTML org payload missing repositories for ${owner}`)
        }

        pageCount = payload.pageCount ?? pageCount

        repos.push(...payload.repositories.map((repo) => ({
            archived: false,
            branch: null,
            provider: 'github',
            repo: repo.name,
            section: owner === 'enso-ui' ? 'frontend' : 'backend',
            slug: normalizeSlug(repo.name),
            url: `https://github.com/${owner}/${repo.name}`,
        })))

        page += 1
    }

    return repos
}

const fetchGitlabGroupRepos = async (owner) => {
    const repos = []
    let page = 1

    while (true) {
        const response = await fetch(`https://git.xtelecom.ro/api/v4/groups/${encodeURIComponent(owner)}/projects?per_page=100&page=${page}&order_by=path&sort=asc&include_subgroups=false`, {
            headers: gitlabHeaders(),
        })

        if (!response.ok) {
            throw new Error(`GitLab group fetch failed (${response.status}) for ${owner}`)
        }

        const batch = await response.json()

        repos.push(...batch.map((repo) => ({
            archived: Boolean(repo.archived),
            branch: repo.default_branch ?? 'main',
            provider: 'gitlab',
            repo: repo.path,
            section: owner === 'enso-ui' ? 'frontend' : 'backend',
            slug: normalizeSlug(repo.path),
            url: repo.web_url,
        })))

        if (batch.length < 100) {
            break
        }

        page += 1
    }

    return repos
}

const fetchOrganizationRepos = async ({ owner, provider }) => provider === 'github'
    ? fetchGithubOrgRepos(owner)
    : fetchGitlabGroupRepos(owner)

const resolveRepoCandidate = async (value) => {
    if (/^https?:\/\//u.test(value)) {
        const parsed = parseRepositoryUrl(value)

        if (!parsed.section) {
            throw new Error(`Unsupported repository owner for add-package: ${parsed.owner}`)
        }

        return parsed
    }

    if (value.includes('/')) {
        const [owner, repo] = value.split('/')

        if (!owner || !repo) {
            throw new Error(`Invalid repository reference: ${value}`)
        }

        const gitlabResponse = await fetch(`https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(`${owner}/${repo}`)}`, {
            headers: gitlabHeaders(),
        })

        if (gitlabResponse.ok) {
            return {
                provider: 'gitlab',
                owner,
                repo,
                section: owner === 'enso-ui' ? 'frontend' : owner === 'laravel-enso' ? 'backend' : null,
                url: `https://git.xtelecom.ro/${owner}/${repo}`,
            }
        }

        const githubResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: githubHeaders(),
        })

        if (githubResponse.ok) {
            return {
                provider: 'github',
                owner,
                repo,
                section: owner === 'enso-ui' ? 'frontend' : owner === 'laravel-enso' ? 'backend' : null,
                url: `https://github.com/${owner}/${repo}`,
            }
        }
    }

    throw new Error('Use a full repository URL or an owner/repo reference for add-package.')
}

const fetchGithubRepoMetadata = async ({ owner, repo }) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: githubHeaders(),
    })

    if (!response.ok) {
        if (response.status === 403) {
            return fetchGithubRepoMetadataFromHtml({ owner, repo })
        }

        throw new Error(`GitHub repository lookup failed (${response.status}) for ${owner}/${repo}`)
    }

    const payload = await response.json()

    return {
        archived: Boolean(payload.archived),
        branch: payload.default_branch ?? 'main',
        url: payload.html_url,
    }
}

const fetchGithubRepoMetadataFromHtml = async ({ owner, repo }) => {
    const response = await fetch(`https://github.com/${owner}/${repo}`)

    if (!response.ok) {
        throw new Error(`GitHub HTML repository lookup failed (${response.status}) for ${owner}/${repo}`)
    }

    const html = await response.text()
    const defaultBranchMatch = html.match(/defaultBranch":"([^"]+)"/u)

    if (!defaultBranchMatch) {
        throw new Error(`Unable to detect default branch from GitHub HTML for ${owner}/${repo}`)
    }

    return {
        archived: /This repository was archived by the owner/i.test(html),
        branch: defaultBranchMatch[1],
        url: `https://github.com/${owner}/${repo}`,
    }
}

const fetchGitlabRepoMetadata = async ({ owner, repo }) => {
    const response = await fetch(`https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(`${owner}/${repo}`)}`, {
        headers: gitlabHeaders(),
    })

    if (!response.ok) {
        throw new Error(`GitLab repository lookup failed (${response.status}) for ${owner}/${repo}`)
    }

    const payload = await response.json()

    return {
        archived: Boolean(payload.archived),
        branch: payload.default_branch ?? 'main',
        url: payload.web_url,
    }
}

const fetchReadmeTitleForRepo = async ({ owner, repo, provider, branch }) => {
    if (provider === 'github') {
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/${encodePathSegments('README.md')}?ref=${encodeURIComponent(branch)}`,
            { headers: { ...githubHeaders(), Accept: 'application/vnd.github.raw+json' } },
        )

        if (response.ok) {
            return extractReadmeTitle(await response.text(), titleCase(repo))
        }

        const rawResponse = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(branch)}/README.md`)

        if (rawResponse.ok) {
            return extractReadmeTitle(await rawResponse.text(), titleCase(repo))
        }
    } else {
        const response = await fetch(
            `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(`${owner}/${repo}`)}/repository/files/${encodeURIComponent('README.md')}/raw?ref=${encodeURIComponent(branch)}`,
            { headers: gitlabHeaders() },
        )

        if (response.ok) {
            return extractReadmeTitle(await response.text(), titleCase(repo))
        }
    }

    return titleCase(repo)
}

const scanForMissingPackages = async () => {
    const current = {
        backend: await readSourceFile('backend'),
        frontend: await readSourceFile('frontend'),
    }
    const currentSlugs = {
        backend: new Set(current.backend.map(({ slug }) => normalizeSlug(slug))),
        frontend: new Set(current.frontend.map(({ slug }) => normalizeSlug(slug))),
    }
    const discovered = new Map()

    for (const organization of organizations) {
        const repos = await fetchOrganizationRepos(organization)

        for (const repo of repos.filter(({ archived }) => !archived)) {
            const key = `${repo.section}:${repo.slug}`
            const existing = discovered.get(key)

            if (!existing || repo.provider === 'gitlab') {
                discovered.set(key, repo)
            }
        }
    }

    const missing = [...discovered.values()]
        .filter((repo) => !currentSlugs[repo.section].has(repo.slug))
        .sort((first, second) => first.section.localeCompare(second.section) || first.slug.localeCompare(second.slug))

    await mkdir(cacheRoot, { recursive: true })
    await writeFile(scanJsonPath, `${JSON.stringify({
        generatedAt: new Date().toISOString(),
        missing,
        summary: {
            backend: missing.filter(({ section }) => section === 'backend').length,
            frontend: missing.filter(({ section }) => section === 'frontend').length,
            total: missing.length,
        },
    }, null, 4)}\n`)

    const lines = [
        `Missing packages: ${missing.length}`,
        `- backend: ${missing.filter(({ section }) => section === 'backend').length}`,
        `- frontend: ${missing.filter(({ section }) => section === 'frontend').length}`,
        '',
    ]

    for (const repo of missing) {
        lines.push(`${repo.section}/${repo.slug} -> ${repo.url}${repo.branch ? ` [${repo.branch}]` : ''}`)
    }

    const summary = lines.join('\n').trim() + '\n'

    await writeFile(scanSummaryPath, summary)
    process.stdout.write(summary)
    process.stdout.write(`scan report: ${path.relative(root, scanJsonPath)}\n`)
    process.stdout.write(`scan summary: ${path.relative(root, scanSummaryPath)}\n`)
}

const addPackage = async (value) => {
    if (!value) {
        throw new Error('Provide a repository URL or owner/repo to add-package.')
    }

    const candidate = await resolveRepoCandidate(value)

    if (!candidate.section) {
        throw new Error(`Cannot infer section for repository owner "${candidate.owner}".`)
    }

    const metadata = candidate.provider === 'github'
        ? await fetchGithubRepoMetadata(candidate)
        : await fetchGitlabRepoMetadata(candidate)

    if (metadata.archived) {
        throw new Error('Refusing to add an archived repository.')
    }

    const entries = await readSourceFile(candidate.section)

    const slug = normalizeSlug(candidate.repo)

    if (entries.some(({ slug: existingSlug }) => normalizeSlug(existingSlug) === slug)) {
        process.stdout.write(`already present: ${candidate.section}/${slug}\n`)
        return
    }

    const title = await fetchReadmeTitleForRepo({
        ...candidate,
        branch: metadata.branch,
    })

    entries.push({
        slug,
        title,
        url: metadata.url,
        branch: metadata.branch,
    })

    await writeSourceFile(candidate.section, entries)
    process.stdout.write(`added ${candidate.section}/${slug}\n`)
    process.stdout.write(`title: ${title}\n`)
    process.stdout.write(`url: ${metadata.url}\n`)
    process.stdout.write(`branch: ${metadata.branch}\n`)
}

const addMissingPackages = async () => {
    const current = {
        backend: await readSourceFile('backend'),
        frontend: await readSourceFile('frontend'),
    }
    const currentSlugs = {
        backend: new Set(current.backend.map(({ slug }) => normalizeSlug(slug))),
        frontend: new Set(current.frontend.map(({ slug }) => normalizeSlug(slug))),
    }
    const discovered = new Map()

    for (const organization of organizations) {
        const repos = await fetchOrganizationRepos(organization)

        for (const repo of repos.filter(({ archived }) => !archived)) {
            const key = `${repo.section}:${repo.slug}`
            const existing = discovered.get(key)

            if (!existing || repo.provider === 'gitlab') {
                discovered.set(key, repo)
            }
        }
    }

    const missing = [...discovered.values()]
        .filter((repo) => !currentSlugs[repo.section].has(repo.slug))
        .sort((first, second) => first.section.localeCompare(second.section) || first.slug.localeCompare(second.slug))

    if (missing.length === 0) {
        process.stdout.write('no missing packages to add\n')
        return
    }

    for (const repo of missing) {
        const entries = current[repo.section]
        const title = await fetchReadmeTitleForRepo({
            owner: repo.owner,
            repo: repo.repo,
            provider: repo.provider,
            branch: repo.branch ?? 'main',
        })

        entries.push({
            slug: repo.slug,
            title,
            url: repo.url,
            branch: repo.branch ?? 'main',
        })
        currentSlugs[repo.section].add(repo.slug)
        process.stdout.write(`added ${repo.section}/${repo.slug}\n`)
    }

    await writeSourceFile('backend', current.backend)
    await writeSourceFile('frontend', current.frontend)
    process.stdout.write(`added total: ${missing.length}\n`)
}

const removePackage = async (value) => {
    const { section, slug } = parseSectionTarget(value, 'remove-package')
    const entries = await readSourceFile(section)
    const nextEntries = entries.filter(({ slug: existingSlug }) => normalizeSlug(existingSlug) !== slug)

    if (entries.length === nextEntries.length) {
        process.stdout.write(`not present: ${section}/${slug}\n`)
        return
    }

    await writeSourceFile(section, nextEntries)
    process.stdout.write(`removed ${section}/${slug}\n`)
}

if (mode === 'scan') {
    await scanForMissingPackages()
} else if (mode === 'add-package') {
    await addPackage(input)
} else if (mode === 'remove-package') {
    await removePackage(input)
} else if (mode === 'add-missing') {
    await addMissingPackages()
} else {
    throw new Error('Supported commands: scan, add-package, remove-package, add-missing')
}
