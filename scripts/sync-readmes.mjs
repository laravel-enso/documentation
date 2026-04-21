import { access, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const marker = '<!-- AUTO-GENERATED: do not edit by hand -->'
const cacheRoot = path.join(root, '.cache', 'readmes')
const validationReportPath = path.join(root, '.cache', 'readme-validation.json')
const validationSummaryPath = path.join(root, '.cache', 'readme-validation-summary.txt')
const mode = process.argv[2] ?? 'sync'
const targetArg = process.argv[3] ?? null
const lastRequestAt = new Map()
const githubInterval = process.env.GITHUB_TOKEN ? 30 : 250
const hostIntervals = new Map([
    ['api.github.com', githubInterval],
    ['github.com', githubInterval],
    ['raw.githubusercontent.com', githubInterval],
    ['git.xtelecom.ro', 50],
])
const sectionMeta = {
    backend: {
        title: 'Backend Repositories',
        description: 'README pages pulled from Laravel Enso backend repositories.',
        root: 'docs/backend',
    },
    frontend: {
        title: 'Front-End Repositories',
        description: 'README pages pulled from Enso UI repositories.',
        root: 'docs/frontend',
    },
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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const paceHost = async (url) => {
    const hostname = new URL(url).hostname
    const interval = hostIntervals.get(hostname) ?? 0

    if (!interval) {
        return
    }

    const now = Date.now()
    const last = lastRequestAt.get(hostname) ?? 0
    const wait = interval - (now - last)

    if (wait > 0) {
        await sleep(wait)
    }

    lastRequestAt.set(hostname, Date.now())
}

const fetchWithPacing = async (url, options = {}, attempt = 0) => {
    await paceHost(url)

    const response = await fetch(url, options)

    if ((response.status === 403 || response.status === 429) && attempt < 2) {
        const retryAfter = Number.parseInt(response.headers.get('retry-after') ?? '', 10)
        const backoff = Number.isFinite(retryAfter) ? retryAfter * 1000 : 1500 * (attempt + 1)

        await sleep(backoff)

        return fetchWithPacing(url, options, attempt + 1)
    }

    return response
}

const isAbsoluteUrl = (value) => /^[a-z][a-z0-9+.-]*:/i.test(value)
const isAnchor = (value) => value.startsWith('#')
const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, '')
const normalizeSlug = (value) => value.toLowerCase()

const parseRepositoryUrl = (value) => {
    const url = new URL(value)
    const pathname = trimSlashes(url.pathname.replace(/\.git$/, ''))
    const [owner, repo] = pathname.split('/')

    if (!owner || !repo) {
        throw new Error(`Unsupported repository URL: ${value}`)
    }

    if (url.hostname === 'github.com') {
        return { provider: 'github', owner, repo, baseUrl: `https://github.com/${owner}/${repo}` }
    }

    if (url.hostname === 'git.xtelecom.ro') {
        return { provider: 'gitlab', owner, repo, baseUrl: `https://git.xtelecom.ro/${owner}/${repo}` }
    }

    throw new Error(`Unsupported repository host: ${url.hostname}`)
}

const buildSourceUrl = (repository, branch, readmePath = 'README.md') => (
    `${repository.baseUrl}${repository.provider === 'github' ? '/blob/' : '/-/blob/'}${branch}/${readmePath}`
)

const buildEditUrl = (repository, branch, readmePath = 'README.md') => (
    `${repository.baseUrl}${repository.provider === 'github' ? '/edit/' : '/-/edit/'}${branch}/${readmePath}`
)

const encodePathSegments = (value) => value
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')

const ensureRepositoryContent = (content, provider, repository, branch, readmePath) => {
    const sample = content.trimStart().slice(0, 256).toLowerCase()

    if (sample.startsWith('<!doctype html') || sample.startsWith('<html')) {
        throw new Error(`${provider} returned HTML instead of README for ${repository.owner}/${repository.repo}@${branch}:${readmePath}`)
    }

    return content
}

const loadSections = async () => {
    const entries = await readdir(root)
    const sourceFiles = entries
        .filter((entry) => /^sources\.[^.]+\.json$/u.test(entry))
        .sort()

    if (sourceFiles.length === 0) {
        throw new Error('No sources.<section>.json files found')
    }

    return Promise.all(sourceFiles.map(async (file) => {
        const content = JSON.parse(await readFile(path.join(root, file), 'utf8'))
        const [id] = Object.keys(content)

        if (!id || !Array.isArray(content[id]) || !(id in sectionMeta)) {
            throw new Error(`Invalid source file: ${file}`)
        }

        return {
            id,
            filePath: path.join(root, file),
            ...sectionMeta[id],
            sources: content[id],
        }
    }))
}

await loadEnvFile('.env')
await loadEnvFile('.env.local')

const fetchGithubReadme = async ({ owner, repo, branch, readmePath }) => {
    const token = process.env.GITHUB_TOKEN?.trim()

    if (token) {
        const response = await fetchWithPacing(
            `https://api.github.com/repos/${owner}/${repo}/contents/${encodePathSegments(readmePath)}?ref=${encodeURIComponent(branch)}`,
            {
                headers: {
                    Accept: 'application/vnd.github.raw+json',
                    Authorization: `Bearer ${token}`,
                    'User-Agent': 'laravel-enso-documentation-sync',
                },
            },
        )

        if (response.ok) {
            return {
                content: ensureRepositoryContent(
                    await response.text(),
                    'GitHub',
                    { owner, repo },
                    branch,
                    readmePath,
                ),
                lastModified: response.headers.get('last-modified'),
            }
        }
    }

    const response = await fetchWithPacing(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${readmePath}`)

    if (!response.ok) {
        throw new Error(`GitHub fetch failed (${response.status}) for ${owner}/${repo}@${branch}:${readmePath}`)
    }

    return {
        content: ensureRepositoryContent(
            await response.text(),
            'GitHub',
            { owner, repo },
            branch,
            readmePath,
        ),
        lastModified: response.headers.get('last-modified'),
    }
}

const fetchGithubLastModified = async ({ owner, repo, branch, readmePath }) => {
    const token = process.env.GITHUB_TOKEN?.trim()
    const response = await fetchWithPacing(
        `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodePathSegments(readmePath)}&sha=${encodeURIComponent(branch)}&per_page=1`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                'User-Agent': 'laravel-enso-documentation-sync',
            },
        },
    )

    if (!response.ok) {
        return null
    }

    const [latestCommit] = await response.json()

    return latestCommit?.commit?.committer?.date ?? latestCommit?.commit?.author?.date ?? null
}

const fetchGitlabReadme = async ({ owner, repo, branch, readmePath }) => {
    const token = process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim()
    const project = encodeURIComponent(`${owner}/${repo}`)
    const filePath = encodeURIComponent(readmePath)

    if (token) {
        const response = await fetchWithPacing(
            `https://git.xtelecom.ro/api/v4/projects/${project}/repository/files/${filePath}/raw?ref=${encodeURIComponent(branch)}`,
            {
                headers: {
                    'PRIVATE-TOKEN': token,
                    'User-Agent': 'laravel-enso-documentation-sync',
                },
            },
        )

        if (response.ok) {
            return {
                content: ensureRepositoryContent(
                    await response.text(),
                    'GitLab',
                    { owner, repo },
                    branch,
                    readmePath,
                ),
                lastModified: response.headers.get('last-modified'),
            }
        }
    }

    const response = await fetchWithPacing(`https://git.xtelecom.ro/${owner}/${repo}/-/raw/${branch}/${readmePath}`)

    if (!response.ok) {
        throw new Error(`GitLab fetch failed (${response.status}) for ${owner}/${repo}@${branch}:${readmePath}`)
    }

    return {
        content: ensureRepositoryContent(
            await response.text(),
            'GitLab',
            { owner, repo },
            branch,
            readmePath,
        ),
        lastModified: response.headers.get('last-modified'),
    }
}

const fetchGitlabLastModified = async ({ owner, repo, branch, readmePath }) => {
    const token = process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim()
    const project = encodeURIComponent(`${owner}/${repo}`)
    const filePath = encodeURIComponent(readmePath)
    const response = await fetchWithPacing(
        `https://git.xtelecom.ro/api/v4/projects/${project}/repository/commits?path=${filePath}&ref_name=${encodeURIComponent(branch)}&per_page=1`,
        {
            headers: {
                ...(token ? { 'PRIVATE-TOKEN': token } : {}),
                'User-Agent': 'laravel-enso-documentation-sync',
            },
        },
    )

    if (!response.ok) {
        return null
    }

    const [latestCommit] = await response.json()

    return latestCommit?.committed_date ?? latestCommit?.created_at ?? null
}

const githubHeaders = () => ({
    Accept: 'application/vnd.github+json',
    ...(process.env.GITHUB_TOKEN?.trim() ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN.trim()}` } : {}),
    'User-Agent': 'laravel-enso-documentation-sync',
})

const gitlabHeaders = () => ({
    ...(process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim()
        ? { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim() }
        : {}),
    'User-Agent': 'laravel-enso-documentation-sync',
})

const fetchGithubRepoMetadataFromHtml = async ({ owner, repo }) => {
    const response = await fetchWithPacing(`https://github.com/${owner}/${repo}`)

    if (!response.ok) {
        throw new Error(`GitHub HTML repository lookup failed (${response.status}) for ${owner}/${repo}`)
    }

    const html = await response.text()
    const defaultBranchMatch = html.match(/defaultBranch":"([^"]+)"/u)
    const escapedOwner = owner.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')
    const escapedRepo = repo.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')
    const issuesPatterns = [
        new RegExp(`href="/${escapedOwner}/${escapedRepo}/issues"[^>]*>[\\s\\S]{0,300}?(\\d[\\d,]*)`, 'iu'),
        /"issues":[^}]*"count":(\d+)/iu,
        /aria-label="Issues[^"]*?(\d[\d,]*)[^"]*"/iu,
    ]
    const mergeRequestsPatterns = [
        new RegExp(`href="/${escapedOwner}/${escapedRepo}/pulls"[^>]*>[\\s\\S]{0,300}?(\\d[\\d,]*)`, 'iu'),
        /"pullRequests":[^}]*"count":(\d+)/iu,
        /aria-label="Pull requests[^"]*?(\d[\d,]*)[^"]*"/iu,
    ]
    const openIssuesCount = issuesPatterns
        .map((pattern) => html.match(pattern)?.[1] ?? null)
        .find(Boolean)
    const openMergeRequestsCount = mergeRequestsPatterns
        .map((pattern) => html.match(pattern)?.[1] ?? null)
        .find(Boolean)

    if (!defaultBranchMatch) {
        throw new Error(`Unable to detect default branch from GitHub HTML for ${owner}/${repo}`)
    }

    return {
        archived: /This repository was archived by the owner/i.test(html),
        branch: defaultBranchMatch[1],
        url: `https://github.com/${owner}/${repo}`,
        openIssuesCount: openIssuesCount ? Number.parseInt(String(openIssuesCount).replace(/,/gu, ''), 10) : null,
        openMergeRequestsCount: openMergeRequestsCount ? Number.parseInt(String(openMergeRequestsCount).replace(/,/gu, ''), 10) : null,
    }
}

const fetchGithubOpenIssueCount = async ({ owner, repo }) => {
    const response = await fetchWithPacing(`https://img.shields.io/github/issues/${owner}/${repo}.svg`)

    if (!response.ok) {
        return null
    }

    const svg = await response.text()
    const matches = [...svg.matchAll(/>(\d[\d,]*)\s+open</giu)]
    const count = matches.at(-1)?.[1] ?? null

    return count ? Number.parseInt(String(count).replace(/,/gu, ''), 10) : null
}

const fetchGithubOpenPullRequestCount = async ({ owner, repo }) => {
    const response = await fetchWithPacing(`https://img.shields.io/github/issues-pr/${owner}/${repo}.svg`)

    if (!response.ok) {
        return null
    }

    const svg = await response.text()
    const matches = [...svg.matchAll(/>(\d[\d,]*)\s+open</giu)]
    const count = matches.at(-1)?.[1] ?? null

    return count ? Number.parseInt(String(count).replace(/,/gu, ''), 10) : null
}

const fetchGithubRepoMetadata = async ({ owner, repo }) => {
    const response = await fetchWithPacing(`https://api.github.com/repos/${owner}/${repo}`, {
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
        openIssuesCount: null,
        openMergeRequestsCount: null,
    }
}

const fetchGitlabRepoMetadata = async ({ owner, repo }) => {
    const response = await fetchWithPacing(`https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(`${owner}/${repo}`)}`, {
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
        openIssuesCount: payload.open_issues_count ?? 0,
        openMergeRequestsCount: payload.open_merge_requests_count ?? null,
    }
}

const fetchGitlabOpenMergeRequestCount = async ({ owner, repo }) => {
    const response = await fetchWithPacing(
        `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(`${owner}/${repo}`)}/merge_requests?state=opened&scope=all&view=simple&per_page=1`,
        { headers: gitlabHeaders() },
    )

    if (!response.ok) {
        return null
    }

    const total = response.headers.get('x-total')

    if (total && /^\d+$/u.test(total)) {
        return Number.parseInt(total, 10)
    }

    const payload = await response.json()

    return Array.isArray(payload) ? payload.length : null
}

const fetchRepoMetadata = async (source) => {
    const repository = parseRepositoryUrl(source.url)

    return repository.provider === 'github'
        ? fetchGithubRepoMetadata(repository)
        : fetchGitlabRepoMetadata(repository)
}

const resolveCandidates = (source) => {
    if (source.branches?.length) {
        return source.branches
    }

    if (source.branch) {
        return [source.branch]
    }

    return ['main', 'master']
}

const fetchReadme = async (source) => {
    const repository = parseRepositoryUrl(source.url)
    const readmePath = source.readmePath ?? 'README.md'
    const branches = resolveCandidates(source)
    let lastError

    for (const branch of branches) {
        try {
            const content = repository.provider === 'github'
                ? await fetchGithubReadme({ ...repository, branch, readmePath })
                : await fetchGitlabReadme({ ...repository, branch, readmePath })
            const lastModified = repository.provider === 'github'
                ? await fetchGithubLastModified({ ...repository, branch, readmePath })
                : await fetchGitlabLastModified({ ...repository, branch, readmePath })

            return {
                branch,
                content: {
                    ...content,
                    lastModified: lastModified ?? content.lastModified ?? null,
                },
                repository,
                readmePath,
            }
        } catch (error) {
            lastError = error
        }
    }

    throw lastError
}

const toPosixPath = (value) => value.split(path.sep).join('/')

const rewriteRelativeUrls = (content, branch, repository, readmePath) => {
    const basePath = path.posix.dirname(readmePath)
    const blobBase = repository.provider === 'github'
        ? `${repository.baseUrl}/blob/${branch}`
        : `${repository.baseUrl}/-/blob/${branch}`
    const rawBase = repository.provider === 'github'
        ? `https://raw.githubusercontent.com/${repository.owner}/${repository.repo}/${branch}`
        : `${repository.baseUrl}/-/raw/${branch}`

    const resolveTarget = (target, kind) => {
        if (!target || isAbsoluteUrl(target) || isAnchor(target)) {
            return target
        }

        const normalized = toPosixPath(path.posix.normalize(path.posix.join(basePath, target)))

        if (kind === 'image') {
            return `${rawBase}/${normalized}`
        }

        if (normalized.toLowerCase().endsWith('.md')) {
            return `${blobBase}/${normalized}`
        }

        return `${blobBase}/${normalized}`
    }

    return content
        .replace(/\[(\!\[[^\]]*?\]\([^)]+\))\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (match, image, target, titlePart = '') => {
            return `[${image}](${resolveTarget(target, 'link')}${titlePart})`
        })
        .replace(/(!?\[[^\]]*?\])\(([^)\s]+)(\s+"[^"]*")?\)/g, (match, label, target, titlePart = '') => {
            const kind = label.startsWith('!') ? 'image' : 'link'
            return `${label}(${resolveTarget(target, kind)}${titlePart})`
        })
        .replace(/(<img[^>]+src=")([^"]+)(")/g, (match, start, target, end) => {
            return `${start}${resolveTarget(target, 'image')}${end}`
        })
        .replace(/(<a[^>]+href=")([^"]+)(")/g, (match, start, target, end) => {
            return `${start}${resolveTarget(target, 'link')}${end}`
        })
}

const stripFrontmatter = (content) => {
    if (!content.startsWith('---\n')) {
        return content
    }

    const closingIndex = content.indexOf('\n---\n', 4)

    if (closingIndex === -1) {
        return content
    }

    return content.slice(closingIndex + 5)
}

const stripLeadingHeading = (content) => {
    return content.replace(/^\s*#\s+.+?\n+/, '')
}

const extractHeadingTitle = (content, fallback) => {
    const value = typeof content === 'string' ? content : content.content
    const sanitized = stripFrontmatter(value).trim()
    const match = sanitized.match(/^#\s+(.+?)\s*$/mu)

    if (!match) {
        return fallback
    }

    return match[1]
        .replace(/`/g, '')
        .replace(/!\[[^\]]*]\([^)]+\)/g, '')
        .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
        .trim() || fallback
}

const sortSources = (sources) => [...sources].sort((first, second) => first.title.localeCompare(second.title))

const persistSection = async (section) => {
    section.sources = sortSources(section.sources)
    await writeFile(section.filePath, `${JSON.stringify({ [section.id]: section.sources }, null, 4)}\n`)
}

const cachePath = (sectionId, slug) => path.join(cacheRoot, sectionId, `${slug}.json`)

const formatLastUpdated = (value) => {
    if (!value) {
        return null
    }

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
        return null
    }

    return date.toLocaleString('en-US')
}

const buildFrontmatter = () => `---\nsidebarDepth: 3\neditLink: false\nlastUpdated: false\n---`

const buildStaticBadgeUrl = (label, value, color = 'lightgrey') => {
    return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(String(value))}-${color}.svg`
}

const rewriteDocsMetricBadges = (content, source, repository) => {
    if (repository?.provider !== 'gitlab') {
        return content
    }

    const issueCount = source.openIssuesCount
    const mergeRequestCount = source.openMergeRequestsCount

    return content
        .replace(/\[!\[Issues\]\([^)]+\)\]\([^)]+\)\n?/gu, () => {
            if (issueCount === null || issueCount === undefined) {
                return ''
            }

            return `[![Issues](${buildStaticBadgeUrl('issues', issueCount)})](${source.url}${source.url.includes('github.com') ? '/issues' : '/-/issues'})\n`
        })
        .replace(/\[!\[Merge Requests\]\([^)]+\)\]\([^)]+\)\n?/gu, () => {
            if (mergeRequestCount === null || mergeRequestCount === undefined) {
                return ''
            }

            return `[![Merge Requests](${buildStaticBadgeUrl('merge requests', mergeRequestCount)})](${source.url}${source.url.includes('github.com') ? '/pulls' : '/-/merge_requests'})\n`
        })
}

const buildPage = ({ source, repository, branch, content, readmePath }) => {
    const readmeContent = typeof content === 'string' ? content : content.content
    const lastUpdated = formatLastUpdated(
        typeof content === 'string'
            ? null
            : (content.lastModified ?? content.syncedAt ?? null),
    )
    const sanitized = stripLeadingHeading(stripFrontmatter(readmeContent).trim())
    const rewritten = rewriteRelativeUrls(sanitized, branch, repository, readmePath)
    const docsRewritten = rewriteDocsMetricBadges(rewritten, source, repository)
    const editUrl = buildEditUrl(repository, branch, readmePath)
    const meta = [
        '<div class="package-page-meta-row">',
        `  <a class="package-page-edit" href="${editUrl}" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>`,
        `  <div class="package-page-last-updated">${lastUpdated ? `<span class="label">Last Updated:</span> ${lastUpdated}` : ''}</div>`,
        '</div>',
    ].join('\n')

    return `${buildFrontmatter()}\n\n${marker}\n\n# ${source.title}\n\n${docsRewritten}\n\n${meta}\n`
}

const buildUnavailablePage = ({ source, repository, branch, readmePath, error }) => {
    const sourceUrl = branch
        ? buildSourceUrl(repository, branch, readmePath)
        : repository.baseUrl

    return `${buildFrontmatter()}\n\n${marker}\n\n# ${source.title}\n\n> Repository: [${repository.owner}/${repository.repo}](${repository.baseUrl})\n\nREADME sync is currently unavailable for this repository.\n\n- Source URL: [${readmePath}](${sourceUrl})\n- Reason: \`${String(error.message ?? error)}\`\n`
}

const buildMissingCachePage = ({ source }) => `${buildFrontmatter()}\n\n${marker}\n\n# ${source.title}\n\nREADME content is not available locally yet.\n\nRun \`yarn sync\` first, then rebuild the generated pages.\n`

const smallTitleWords = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'of', 'on', 'or', 'the', 'to', 'with'])
const approvedBadges = {
    backend: ['license', 'stable', 'downloads', 'php', 'issues', 'merge_requests'],
    frontend: ['license', 'stable', 'downloads', 'vue', 'javascript', 'scss', 'npm', 'issues', 'merge_requests'],
}

const isInfrastructureBackendRepo = (sectionId, source) => sectionId === 'backend' && source?.slug === 'cicd'
const staleDescriptions = new Set([
    'main requirement & dependency aggregator for laravel enso',
    'soon...',
])

const toExpectedTitleCase = (value) => value
    .split(/(\s+|[-/])/u)
    .map((segment, index) => {
        if (/^(\s+|[-/])$/u.test(segment) || segment === '') {
            return segment
        }

        if (/^[A-Z0-9]{2,}$/u.test(segment)) {
            return segment
        }

        const lower = segment.toLowerCase()

        if (index !== 0 && smallTitleWords.has(lower)) {
            return lower
        }

        return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join('')

const normalizeHeading = (value) => value
    .replace(/`/g, '')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/[*_~]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .toLowerCase()

const canonicalSectionName = (value) => {
    const normalized = normalizeHeading(value)

    if (normalized === 'description') {
        return 'Description'
    }

    if (normalized === 'installation') {
        return 'Installation'
    }

    if (normalized === 'features') {
        return 'Features'
    }

    if (normalized === 'usage') {
        return 'Usage'
    }

    if (normalized === 'api') {
        return 'API'
    }

    if (normalized === 'depends on' || normalized === 'dependencies') {
        return 'Depends On'
    }

    if (normalized === 'contributions') {
        return 'Contributions'
    }

    if (normalized === 'note') {
        return 'Note'
    }

    if (normalized === 'tip') {
        return 'Tip'
    }

    return null
}

const extractSectionBodies = (content) => {
    const lines = stripFrontmatter(content).split('\n')
    const sections = []
    let active = null

    for (const line of lines) {
        const match = line.match(/^##\s+(.+)$/u)

        if (match) {
            if (active) {
                sections.push(active)
            }

            active = {
                canonical: canonicalSectionName(match[1]),
                heading: match[1].trim(),
                lines: [],
            }
            continue
        }

        if (active) {
            active.lines.push(line)
        }
    }

    if (active) {
        sections.push(active)
    }

    return sections
}

const isBadgeLine = (line) => /shields\.io|badge|!\[[^\]]*\]\([^)]+\)|<img\b/iu.test(line)

const isStableBadge = (value) => {
    const normalized = value.toLowerCase()

    return normalized.includes('stable')
        || normalized.includes('/tag/')
        || normalized.includes('/tags')
        || /badge\/stable[-/]/iu.test(normalized)
        || /badge\/tag[-/]/iu.test(normalized)
        || /poser\.pugx\.org\/.+\/v(?:ersion)?\b/iu.test(normalized)
}

const extractBadgeBlock = (content) => {
    const lines = stripFrontmatter(content).split('\n')
    const headingIndex = lines.findIndex((line) => /^#\s+.+$/u.test(line))

    if (headingIndex === -1) {
        return []
    }

    let index = headingIndex + 1

    while (index < lines.length && !lines[index].trim()) {
        index += 1
    }

    const badgeLines = []

    while (index < lines.length && isBadgeLine(lines[index])) {
        badgeLines.push(lines[index].trim())
        index += 1
    }

    return badgeLines
}

const classifyBadge = (line) => {
    const normalized = line.toLowerCase()

    if (normalized.includes('codacy')) {
        return 'codacy'
    }

    if (normalized.includes('styleci')) {
        return 'styleci'
    }

    if (normalized.includes('license')) {
        return 'license'
    }

    if (normalized.includes('image')) {
        return 'image'
    }

    if (isStableBadge(normalized)) {
        return 'stable'
    }

    if (normalized.includes('download')) {
        return 'downloads'
    }

    if (normalized.includes('javascript')) {
        return 'javascript'
    }

    if (normalized.includes('scss')) {
        return 'scss'
    }

    if (normalized.includes('php')) {
        return 'php'
    }

    if (normalized.includes('npm')) {
        return 'npm'
    }

    if (
        /github\/issues-pr\//iu.test(normalized)
        || normalized.includes('pull request')
        || normalized.includes('merge request')
        || normalized.includes('/pulls')
        || normalized.includes('/merge_requests')
    ) {
        return 'merge_requests'
    }

    if (normalized.includes('issue') || normalized.includes('/issues')) {
        return 'issues'
    }

    if (normalized.includes('vue')) {
        return 'vue'
    }

    return 'unknown'
}

const hasBadge = (badgeText, badge) => {
    const normalized = badgeText.toLowerCase()

    switch (badge) {
        case 'license':
            return normalized.includes('license')
        case 'issues':
            return /github\/issues\/|!\[issues\]|\/issues(?:\)|$)/iu.test(normalized)
        case 'merge_requests':
            return /github\/issues-pr\//iu.test(normalized)
                || normalized.includes('pull request')
                || normalized.includes('merge request')
                || normalized.includes('/pulls')
                || normalized.includes('/merge_requests')
        case 'stable':
            return isStableBadge(normalized)
        case 'image':
            return normalized.includes('image')
        case 'downloads':
            return normalized.includes('download')
        case 'vue':
            return normalized.includes('vue')
        case 'javascript':
            return normalized.includes('javascript')
        case 'scss':
            return normalized.includes('scss')
        case 'php':
            return normalized.includes('php')
        case 'npm':
            return normalized.includes('npm')
        default:
            return false
    }
}

const countScreenshots = (content) => {
    const markdownImages = content.match(/!\[[^\]]*\]\([^)]+\)/gu) ?? []
    const htmlImages = content.match(/<img\b[^>]*>/giu) ?? []

    return markdownImages.length + htmlImages.length
}

const inferFrontendTechnologies = (content) => ({
    javascript: /\bjavascript\b|\.js\b|import\s+.+\s+from\s+/iu.test(content),
    scss: /\.scss\b|\bscss\b/iu.test(content),
    vue: /\.vue\b|<template\b|<script\b|\bvue\b/iu.test(content),
})

const documentationRoot = path.resolve(root)
const workspaceRoot = path.resolve(documentationRoot, '..')

const localPackageRoot = (sectionId, source) => {
    if (sectionId === 'backend') {
        if (source.slug === 'cicd') {
            return path.join(workspaceRoot, 'cicd')
        }

        return path.join(workspaceRoot, 'solarlink', 'vendor', 'laravel-enso', source.slug)
    }

    if (sectionId === 'frontend') {
        return path.join(workspaceRoot, 'enso-ui', source.slug)
    }

    return null
}

const fileExists = async (filePath) => {
    try {
        await access(filePath)
        return true
    } catch {
        return false
    }
}

const readJsonIfExists = async (filePath) => {
    if (!await fileExists(filePath)) {
        return null
    }

    return JSON.parse(await readFile(filePath, 'utf8'))
}

const normalizeDescription = (value) => value.trim().replace(/\s+/gu, ' ').toLowerCase()

const expectedLicenseCopyright = (manifest, source = null, sectionId = null) => {
    if (isInfrastructureBackendRepo(sectionId, source)) {
        return 'Copyright (c) 2026 Earthlink SRL'
    }

    const license = typeof manifest?.license === 'string'
        ? manifest.license.trim().toLowerCase()
        : ''

    return license === 'proprietary'
        ? 'Copyright (c) 2026 Earthlink SRL'
        : 'Copyright (c) 2026 Laravel Enso'
}

const validateLocalPackageMetadata = async ({ sectionId, source, repository }) => {
    const packageRoot = localPackageRoot(sectionId, source)

    if (!packageRoot || !await fileExists(packageRoot)) {
        return []
    }

    const findings = []
    const isInfrastructureRepo = isInfrastructureBackendRepo(sectionId, source)
    const manifestName = sectionId === 'backend' ? 'composer.json' : 'package.json'
    const manifestPath = path.join(packageRoot, manifestName)
    const manifest = await readJsonIfExists(manifestPath)

    if (!manifest && !isInfrastructureRepo) {
        findings.push({
            level: 'warning',
            code: `missing_${manifestName.replace('.', '_')}`,
            message: `Local package is present, but ${manifestName} is missing.`,
        })
    } else if (manifest) {
        if (!manifest.license || typeof manifest.license !== 'string' || !manifest.license.trim()) {
            findings.push({
                level: 'warning',
                code: `missing_${sectionId}_license_field`,
                message: `${manifestName} should declare an explicit license field.`,
            })
        }

        const description = typeof manifest.description === 'string' ? manifest.description.trim() : ''

        if (!description) {
            findings.push({
                level: 'warning',
                code: `missing_${sectionId}_description_field`,
                message: `${manifestName} should declare a non-empty description.`,
            })
        } else if (staleDescriptions.has(normalizeDescription(description))) {
            findings.push({
                level: 'warning',
                code: `stale_${sectionId}_description_field`,
                message: `${manifestName} description still looks legacy or placeholder-like.`,
            })
        }
    }

    const licensePath = path.join(packageRoot, 'LICENSE')

    if (await fileExists(licensePath)) {
        const license = await readFile(licensePath, 'utf8')
        const expectedCopyright = expectedLicenseCopyright(manifest, source, sectionId)

        if (!license.includes(expectedCopyright)) {
            findings.push({
                level: 'warning',
                code: 'license_copyright_mismatch',
                message: `LICENSE should include "${expectedCopyright}".`,
            })
        }
    }

    return findings
}

const isLikelyUiPackage = (sectionId, content) => sectionId === 'frontend'
    && (/\.vue\b|<template\b|<script\b|<\w[\w-]*/iu.test(content))

const isLikelyApiPackage = (sectionId, content) => sectionId === 'backend'
    || /\bprops?\b|\bevents?\b|\bmethods?\b|\bemit\b|\bendpoint\b|\broute\b|\bapi\b/iu.test(content)

const effectiveBadgeOrder = ({ sectionId, repository }) => {
    if (sectionId === 'backend' && repository?.baseUrl === 'https://git.xtelecom.ro/laravel-enso/cicd') {
        return ['license', 'image', 'issues', 'merge_requests']
    }

    const badges = [...approvedBadges[sectionId]]

    if (repository?.provider === 'gitlab') {
        return badges.filter((badge) => badge !== 'downloads')
    }

    return badges
}

const validateReadme = async ({ sectionId, source, repository, content, cached }) => {
    const findings = []

    if (!cached) {
        findings.push({
            level: 'error',
            code: 'missing_cache',
            message: 'README content is not available locally. Run `yarn sync` first.',
        })

        return findings
    }

    if (!cached.ok) {
        findings.push({
            level: 'error',
            code: 'sync_unavailable',
            message: `README sync failed: ${cached.error}`,
        })

        return findings
    }

    const readmeContent = typeof content === 'string' ? content : content.content
    const sanitized = stripFrontmatter(readmeContent).trim()
    const titleMatch = sanitized.match(/^#\s+(.+?)\s*$/mu)
    const sections = extractSectionBodies(readmeContent)
    const sectionOrder = sections
        .map(({ canonical }) => canonical)
        .filter(Boolean)
    const sectionSet = new Set(sectionOrder)
    const badgeLines = extractBadgeBlock(readmeContent)
    const badgeText = badgeLines.join(' ').toLowerCase()
    const requiredSections = ['Description', 'Installation', 'Features', 'Usage', 'Depends On']
    const expectedOrder = ['Description', 'Installation', 'Features', 'Usage', 'API', 'Depends On', 'Contributions']
    const isPublicPackage = repository?.provider === 'github'
    const isInfrastructureRepo = isInfrastructureBackendRepo(sectionId, source)

    if (!titleMatch) {
        findings.push({
            level: 'error',
            code: 'missing_title',
            message: 'README should start with a single H1 title.',
        })
    } else {
        const title = titleMatch[1].trim()
        const expectedTitle = toExpectedTitleCase(title)

        if (title !== expectedTitle) {
            findings.push({
                level: 'warning',
                code: 'title_not_title_case',
                message: `Title should use Title Case. Expected "${expectedTitle}".`,
            })
        }
    }

    for (const section of requiredSections) {
        if (!sectionSet.has(section)) {
            findings.push({
                level: 'error',
                code: `missing_${section.toLowerCase().replace(/\s+/gu, '_')}`,
                message: `Missing required section: ${section}.`,
            })
        }
    }

    let previousIndex = -1

    for (const section of sectionOrder) {
        const index = expectedOrder.indexOf(section)

        if (index === -1) {
            continue
        }

        if (index < previousIndex) {
            findings.push({
                level: 'error',
                code: 'section_order',
                message: `Section order is invalid around "${section}". Expected the standard README section order.`,
            })
            break
        }

        previousIndex = index
    }

    const supportedBadges = effectiveBadgeOrder({ sectionId, repository })
    const classifiedBadges = badgeLines.map(classifyBadge)
    const allowedBadges = isInfrastructureRepo
        ? ['codacy', 'styleci', ...approvedBadges[sectionId], 'image']
        : ['codacy', 'styleci', ...approvedBadges[sectionId]]
    const extraBadges = classifiedBadges.filter((badge) => !allowedBadges.includes(badge))

    const requiredBadges = isInfrastructureRepo
        ? ['license', 'image', 'issues', 'merge_requests']
        : ['license', 'issues', 'merge_requests', 'stable', ...(supportedBadges.includes('downloads') ? ['downloads'] : [])]

    for (const badge of requiredBadges) {
        if (!hasBadge(badgeText, badge)) {
            findings.push({
                level: 'warning',
                code: `missing_badge_${badge}`,
                message: `Missing recommended header badge: ${badge}.`,
            })
        }
    }

    if (classifiedBadges.includes('codacy') || classifiedBadges.includes('styleci')) {
        findings.push({
            level: 'warning',
            code: 'legacy_badges_present',
            message: 'README should not include Codacy or StyleCI badges.',
        })
    }

    if (extraBadges.length > 0) {
        findings.push({
            level: 'warning',
            code: 'extra_badges_present',
            message: `README contains non-standard badges: ${[...new Set(extraBadges)].join(', ')}.`,
        })
    }

    const orderedRecognizedBadges = classifiedBadges.filter((badge) => supportedBadges.includes(badge))
    const expectedBadgeOrder = supportedBadges.filter((badge) => orderedRecognizedBadges.includes(badge))

    if (orderedRecognizedBadges.join('|') !== expectedBadgeOrder.join('|')) {
        findings.push({
            level: 'warning',
            code: 'badge_order',
            message: `Header badges should follow the standard ${sectionId} order.`,
        })
    }

    if (sectionId === 'backend' && !isInfrastructureRepo && !hasBadge(badgeText, 'php')) {
        findings.push({
            level: 'warning',
            code: 'missing_badge_php',
            message: 'Backend package should expose a PHP badge in the README header.',
        })
    }

    if (sectionId === 'frontend') {
        if (!hasBadge(badgeText, 'npm')) {
            findings.push({
                level: 'warning',
                code: 'missing_badge_npm',
                message: 'Frontend package should expose an npm badge in the README header.',
            })
        }

        const technologies = inferFrontendTechnologies(sanitized)

        if (technologies.vue && !hasBadge(badgeText, 'vue')) {
            findings.push({
                level: 'warning',
                code: 'missing_badge_vue',
                message: 'README looks Vue-based but the Vue badge is missing.',
            })
        }

        if (technologies.javascript && !hasBadge(badgeText, 'javascript')) {
            findings.push({
                level: 'warning',
                code: 'missing_badge_javascript',
                message: 'README looks JavaScript-based but the JavaScript badge is missing.',
            })
        }

        if (technologies.scss && !hasBadge(badgeText, 'scss')) {
            findings.push({
                level: 'warning',
                code: 'missing_badge_scss',
                message: 'README looks SCSS-based but the SCSS badge is missing.',
            })
        }
    }

    if (isLikelyUiPackage(sectionId, sanitized) && countScreenshots(sanitized) === 0) {
        findings.push({
            level: 'warning',
            code: 'missing_screenshots',
            message: 'UI package README should include one or more screenshots.',
        })
    }

    if (isLikelyApiPackage(sectionId, sanitized) && !sectionSet.has('API')) {
        findings.push({
            level: 'warning',
            code: 'missing_api',
            message: 'Package appears to expose a public API surface, but no API section was found.',
        })
    }

    if (isPublicPackage) {
        const contributionsSection = sections.find(({ canonical }) => canonical === 'Contributions')
        const contributionsText = contributionsSection?.lines.join('\n').trim() ?? ''
        const expectedContributionsText = 'are welcome. Pull requests are great, but issues are good too.\n\nThank you to all the people who already contributed to Enso!'

        if (!contributionsSection) {
            findings.push({
                level: 'warning',
                code: 'missing_contributions',
                message: 'Public packages should include a Contributions section.',
            })
        } else if (contributionsText !== expectedContributionsText) {
            findings.push({
                level: 'info',
                code: 'contributions_copy',
                message: 'Contributions section exists but does not match the standard Enso copy.',
            })
        }
    }

    findings.push(...await validateLocalPackageMetadata({ sectionId, source, repository }))

    return findings
}

const summarizeValidation = (report) => {
    const totals = {
        error: 0,
        warning: 0,
        info: 0,
    }

    for (const entry of report) {
        for (const finding of entry.findings) {
            totals[finding.level] += 1
        }
    }

    const lines = [
        `Validation totals: ${totals.error} errors, ${totals.warning} warnings, ${totals.info} infos`,
        '',
    ]

    for (const entry of report.filter(({ findings }) => findings.length > 0)) {
        const counts = entry.findings.reduce((summary, finding) => {
            summary[finding.level] += 1
            return summary
        }, { error: 0, warning: 0, info: 0 })

        lines.push(`${entry.section}/${entry.slug}: ${counts.error} errors, ${counts.warning} warnings, ${counts.info} infos`)

        for (const finding of entry.findings) {
            lines.push(`- [${finding.level}] ${finding.message}`)
        }

        lines.push('')
    }

    return {
        totals,
        text: lines.join('\n').trim() + '\n',
    }
}

const isUpdatedPackage = (findings) => findings.every(({ level }) => level === 'info')

const resolveDocumentationStatus = ({ updated, openIssuesCount, openMergeRequestsCount }) => {
    if (!updated) {
        return 'red'
    }

    if ((openIssuesCount ?? 0) > 0) {
        return 'yellow'
    }

    if ((openMergeRequestsCount ?? 0) > 0) {
        return 'blue'
    }

    return 'green'
}

const readCacheEntry = async (sectionId, slug) => {
    try {
        return JSON.parse(await readFile(cachePath(sectionId, slug), 'utf8'))
    } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            return null
        }

        throw error
    }
}

const evaluateSource = async ({ section, source }) => {
    const cached = await readCacheEntry(section.id, source.slug)

    let content = null
    let findings

    if (!cached) {
        findings = await validateReadme({
            sectionId: section.id,
            source,
            repository: null,
            content: null,
            cached,
        })
    } else if (cached.ok) {
        source.title = cached.source?.title ?? source.title
        content = {
            ...cached.content,
            syncedAt: cached.syncedAt ?? null,
        }
        findings = await validateReadme({
            sectionId: section.id,
            source,
            repository: cached.repository,
            content,
            cached,
        })
    } else {
        findings = await validateReadme({
            sectionId: section.id,
            source,
            repository: cached.repository,
            content: null,
            cached,
        })
    }

    return { cached, content, findings }
}

const refreshSourceStatus = async ({ section, source, findings }) => {
    source.updated = isUpdatedPackage(findings)

    try {
        const metadata = await fetchRepoMetadata(source)
        const repository = parseRepositoryUrl(source.url)

        if (repository.provider === 'github') {
            const [openIssuesCount, openMergeRequestsCount] = await Promise.all([
                fetchGithubOpenIssueCount(repository),
                fetchGithubOpenPullRequestCount(repository),
            ])
            const htmlMetadata = openIssuesCount === null || openMergeRequestsCount === null
                ? await fetchGithubRepoMetadataFromHtml(repository).catch(() => metadata)
                : metadata

            source.openIssuesCount = openIssuesCount
                ?? htmlMetadata.openIssuesCount
                ?? source.openIssuesCount
                ?? null
            source.openMergeRequestsCount = openMergeRequestsCount
                ?? htmlMetadata.openMergeRequestsCount
                ?? source.openMergeRequestsCount
                ?? null
        } else {
            source.openIssuesCount = metadata.openIssuesCount ?? source.openIssuesCount ?? null
            source.openMergeRequestsCount = await fetchGitlabOpenMergeRequestCount(repository)
                ?? metadata.openMergeRequestsCount
                ?? source.openMergeRequestsCount
                ?? null
        }
    } catch {
        source.openIssuesCount = source.openIssuesCount ?? null
        source.openMergeRequestsCount = source.openMergeRequestsCount ?? null
    }

    source.documentationStatus = resolveDocumentationStatus({
        updated: source.updated,
        openIssuesCount: source.openIssuesCount,
        openMergeRequestsCount: source.openMergeRequestsCount,
    })

    return {
        section: section.id,
        slug: source.slug,
        title: source.title,
        updated: source.updated,
        openIssuesCount: source.openIssuesCount,
        openMergeRequestsCount: source.openMergeRequestsCount,
        documentationStatus: source.documentationStatus,
        findings,
    }
}

const findTargetSources = (sections, target) => {
    if (!target) {
        throw new Error('Missing package target. Use a slug, section/slug, owner/repo, or repository URL.')
    }

    if (target.includes('://')) {
        const repository = parseRepositoryUrl(target)

        return sections.flatMap((section) => section.sources
            .filter((source) => {
                const candidate = parseRepositoryUrl(source.url)

                return section.id === repository.owner.replace('laravel-enso', 'backend').replace('enso-ui', 'frontend')
                    && candidate.owner === repository.owner
                    && candidate.repo.toLowerCase() === repository.repo.toLowerCase()
            })
            .map((source) => ({ section, source })))
    }

    const sectionScoped = target.match(/^(backend|frontend)\/(.+)$/u)

    if (sectionScoped) {
        const [, sectionId, slug] = sectionScoped
        const section = sections.find((candidate) => candidate.id === sectionId)

        if (!section) {
            return []
        }

        return section.sources
            .filter((source) => source.slug === normalizeSlug(slug))
            .map((source) => ({ section, source }))
    }

    if (target.includes('/')) {
        const [owner, repo] = target.split('/')
        const sectionId = owner === 'laravel-enso'
            ? 'backend'
            : owner === 'enso-ui'
                ? 'frontend'
                : null

        return sections.flatMap((section) => section.sources
            .filter((source) => {
                const candidate = parseRepositoryUrl(source.url)

                return (!sectionId || section.id === sectionId)
                    && candidate.owner === owner
                    && candidate.repo.toLowerCase() === repo.toLowerCase()
            })
            .map((source) => ({ section, source })))
    }

    const slug = normalizeSlug(target)

    return sections.flatMap((section) => section.sources
        .filter((source) => source.slug === slug)
        .map((source) => ({ section, source })))
}

const clearGeneratedPages = async (sectionRoot) => {
    try {
        const entries = await readdir(path.join(root, sectionRoot), { withFileTypes: true })

        for (const entry of entries) {
            if (!entry.isFile()) {
                continue
            }

            if (entry.name === 'README.md' || !entry.name.endsWith('.md')) {
                continue
            }

            await rm(path.join(root, sectionRoot, entry.name), { force: true })
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            await mkdir(path.join(root, sectionRoot), { recursive: true })
            return
        }

        throw error
    }
}

const listLocalGeneratedSlugs = async (sectionRoot) => {
    try {
        const entries = await readdir(path.join(root, sectionRoot), { withFileTypes: true })

        return new Set(entries
            .filter((entry) => entry.isFile() && entry.name !== 'README.md' && entry.name.endsWith('.md'))
            .map((entry) => entry.name.replace(/\.md$/u, '')))
    } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            return new Set()
        }

        throw error
    }
}

const syncLocalPackage = async ({ section, source, reason }) => {
    const packageRoot = localPackageRoot(section.id, source)
    const readmeFile = path.join(packageRoot, 'README.md')

    if (!packageRoot || !await fileExists(readmeFile)) {
        throw reason
    }

    const content = await readFile(readmeFile, 'utf8')
    const lastModified = (await stat(readmeFile)).mtime.toISOString()
    const repository = parseRepositoryUrl(source.url)

    await writeFile(cachePath(section.id, source.slug), `${JSON.stringify({
        ok: true,
        syncedAt: new Date().toISOString(),
        source,
        branch: source.branch,
        repository,
        readmePath: 'README.md',
        content: {
            content: ensureRepositoryContent(
                content,
                repository.provider === 'gitlab' ? 'GitLab' : 'GitHub',
                { owner: repository.owner, repo: repository.repo },
                source.branch,
                'README.md',
            ),
            lastModified,
        },
    }, null, 4)}\n`)

    process.stdout.write(`synced local fallback ${section.id}/${source.slug}: ${String(reason.message ?? reason)}\n`)

    return { retained: true, synced: true, deferred: false, pruned: false }
}

const isTransientSyncError = (error) => {
    const message = String(error?.message ?? error).toLowerCase()

    return message.includes('(429)')
        || message.includes(' 429 ')
        || message.includes('rate limit')
        || message.includes('timed out')
        || message.includes('econnreset')
        || message.includes('enotfound')
        || message.includes('eai_again')
}

const syncSource = async ({ section, source, localSlugs = null, force = false }) => {
    if (!force && localSlugs && !localSlugs.has(source.slug)) {
        process.stdout.write(`skipped ${section.id}/${source.slug}\n`)

        return { retained: true, synced: false, deferred: false, pruned: false }
    }

    try {
        const metadata = await fetchRepoMetadata(source)

        if (metadata.archived) {
            await rm(cachePath(section.id, source.slug), { force: true })
            await rm(path.join(root, section.root, `${source.slug}.md`), { force: true })
            process.stdout.write(`pruned archived ${section.id}/${source.slug}\n`)

            return { retained: false, synced: false, deferred: false, pruned: true }
        }

        source.branch = metadata.branch
        source.url = metadata.url
        const result = await fetchReadme(source)
        source.title = extractHeadingTitle(result.content, source.title)

        await writeFile(cachePath(section.id, source.slug), `${JSON.stringify({
            ok: true,
            syncedAt: new Date().toISOString(),
            source,
            ...result,
        }, null, 4)}\n`)

        process.stdout.write(`synced ${section.id}/${source.slug}\n`)

        return { retained: true, synced: true, deferred: false, pruned: false }
    } catch (error) {
        try {
            return await syncLocalPackage({ section, source, reason: error })
        } catch {
            // continue with normal error handling
        }

        if (isTransientSyncError(error)) {
            process.stdout.write(`deferred ${section.id}/${source.slug}: ${String(error.message ?? error)}\n`)

            return { retained: true, synced: false, deferred: true, pruned: false }
        }

        await rm(cachePath(section.id, source.slug), { force: true })
        await rm(path.join(root, section.root, `${source.slug}.md`), { force: true })
        process.stdout.write(`pruned unavailable ${section.id}/${source.slug}: ${String(error.message ?? error)}\n`)

        return { retained: false, synced: false, deferred: false, pruned: true }
    }
}

const syncSections = async (sections) => {
    for (const section of sections) {
        await mkdir(path.join(cacheRoot, section.id), { recursive: true })
        const localSlugs = await listLocalGeneratedSlugs(section.root)
        const retainedSources = []

        for (const source of section.sources) {
            const result = await syncSource({ section, source, localSlugs })

            if (result.retained) {
                retainedSources.push(source)
            }
        }

        section.sources = retainedSources
        await persistSection(section)
    }
}

const syncTargetSources = async (sections, matches) => {
    const grouped = new Map()

    for (const match of matches) {
        const bucket = grouped.get(match.section.id) ?? []
        bucket.push(match)
        grouped.set(match.section.id, bucket)
    }

    for (const section of sections.filter((candidate) => grouped.has(candidate.id))) {
        await mkdir(path.join(cacheRoot, section.id), { recursive: true })

        for (const { source } of grouped.get(section.id) ?? []) {
            const result = await syncSource({ section, source, force: true })

            if (!result.retained) {
                section.sources = section.sources.filter((candidate) => candidate.slug !== source.slug)
            }
        }

        await persistSection(section)
    }
}

const generateSource = async ({ section, source }) => {
    const { cached, content, findings } = await evaluateSource({ section, source })
    const outputPath = path.join(root, section.root, `${source.slug}.md`)

    let page

    if (!cached) {
        page = buildMissingCachePage({ source })
    } else if (cached.ok) {
        page = buildPage({
            source,
            repository: cached.repository,
            branch: cached.branch,
            content,
            readmePath: cached.readmePath,
        })
    } else {
        page = buildUnavailablePage({
            source,
            repository: cached.repository,
            branch: cached.branch,
            readmePath: cached.readmePath,
            error: cached.error,
        })
    }

    await writeFile(outputPath, page)
    const reportItem = await refreshSourceStatus({ section, source, findings })

    process.stdout.write(`generated ${section.id}/${source.slug}\n`)

    return reportItem
}

const generateSections = async (sections) => {
    const report = []

    for (const section of sections) {
        await mkdir(path.join(root, section.root), { recursive: true })
        await clearGeneratedPages(section.root)

        for (const source of section.sources) {
            report.push(await generateSource({ section, source }))
        }

        await persistSection(section)
    }

    const summary = summarizeValidation(report)

    await writeFile(validationReportPath, `${JSON.stringify({
        generatedAt: new Date().toISOString(),
        summary: summary.totals,
        packages: report,
    }, null, 4)}\n`)
    await writeFile(validationSummaryPath, summary.text)

    process.stdout.write(`validation: ${summary.totals.error} errors, ${summary.totals.warning} warnings, ${summary.totals.info} infos\n`)
    process.stdout.write(`validation report: ${path.relative(root, validationReportPath)}\n`)
    process.stdout.write(`validation summary: ${path.relative(root, validationSummaryPath)}\n`)
}

const generateTargetSections = async (sections, matches) => {
    const report = []
    const grouped = new Map()

    for (const match of matches) {
        const bucket = grouped.get(match.section.id) ?? []
        bucket.push(match)
        grouped.set(match.section.id, bucket)
    }

    for (const section of sections.filter((candidate) => grouped.has(candidate.id))) {
        await mkdir(path.join(root, section.root), { recursive: true })

        for (const { source } of grouped.get(section.id) ?? []) {
            report.push(await generateSource({ section, source }))
        }

        await persistSection(section)
    }

    const summary = summarizeValidation(report)

    await writeFile(validationReportPath, `${JSON.stringify({
        generatedAt: new Date().toISOString(),
        mode: 'generate',
        scope: 'targeted',
        summary: summary.totals,
        packages: report,
    }, null, 4)}\n`)
    await writeFile(validationSummaryPath, summary.text)

    process.stdout.write(`validation: ${summary.totals.error} errors, ${summary.totals.warning} warnings, ${summary.totals.info} infos\n`)
    process.stdout.write(`validation report: ${path.relative(root, validationReportPath)}\n`)
    process.stdout.write(`validation summary: ${path.relative(root, validationSummaryPath)}\n`)
}

const refreshStatusSections = async (sections, matches = null) => {
    const report = []
    const scopedMatches = matches ?? sections.flatMap((section) => section.sources.map((source) => ({ section, source })))
    const touchedSections = new Set(scopedMatches.map(({ section }) => section.id))

    for (const { section, source } of scopedMatches) {
        const { findings } = await evaluateSource({ section, source })
        report.push(await refreshSourceStatus({ section, source, findings }))
        process.stdout.write(`refreshed ${section.id}/${source.slug}: ${source.documentationStatus}\n`)
    }

    for (const section of sections.filter((candidate) => touchedSections.has(candidate.id))) {
        await persistSection(section)
    }

    const summary = summarizeValidation(report)

    await writeFile(validationReportPath, `${JSON.stringify({
        generatedAt: new Date().toISOString(),
        mode: 'refresh-status',
        summary: summary.totals,
        packages: report,
    }, null, 4)}\n`)
    await writeFile(validationSummaryPath, summary.text)

    process.stdout.write(`validation: ${summary.totals.error} errors, ${summary.totals.warning} warnings, ${summary.totals.info} infos\n`)
    process.stdout.write(`validation report: ${path.relative(root, validationReportPath)}\n`)
    process.stdout.write(`validation summary: ${path.relative(root, validationSummaryPath)}\n`)
}

const sections = await loadSections()

if (mode === 'sync') {
    if (!targetArg) {
        await syncSections(sections)
    } else {
        const matches = findTargetSources(sections, targetArg)

        if (matches.length === 0) {
            throw new Error(`Package not found in sources: ${targetArg}`)
        }

        if (matches.length > 1) {
            throw new Error(`Package target is ambiguous: ${targetArg}. Use backend/<slug> or frontend/<slug>.`)
        }

        await syncTargetSources(sections, matches)
    }
} else if (mode === 'generate') {
    if (!targetArg) {
        await generateSections(sections)
    } else {
        const matches = findTargetSources(sections, targetArg)

        if (matches.length === 0) {
            throw new Error(`Package not found in sources: ${targetArg}`)
        }

        if (matches.length > 1) {
            throw new Error(`Package target is ambiguous: ${targetArg}. Use backend/<slug> or frontend/<slug>.`)
        }

        await generateTargetSections(sections, matches)
    }
} else if (mode === 'refresh-status') {
    if (!targetArg) {
        await refreshStatusSections(sections)
    } else {
        const matches = findTargetSources(sections, targetArg)

        if (matches.length === 0) {
            throw new Error(`Package not found in sources: ${targetArg}`)
        }

        if (matches.length > 1) {
            throw new Error(`Package target is ambiguous: ${targetArg}. Use backend/<slug> or frontend/<slug>.`)
        }

        await refreshStatusSections(sections, matches)
    }
} else {
    throw new Error(`Unsupported mode: ${mode}`)
}
