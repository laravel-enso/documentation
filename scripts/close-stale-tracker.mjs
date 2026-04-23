import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const sourceFiles = [
    path.join(root, 'sources.backend.json'),
    path.join(root, 'sources.frontend.json'),
]

const issueMessage = (cutoff) => [
    'Closing this issue as part of the Laravel Enso major framework update cleanup.',
    `This thread has been inactive since before ${cutoff}.`,
    'If this is still relevant on the current release line, please reopen it or open a new issue with updated context.',
].join('\n\n')

const mergeRequestMessage = (cutoff) => [
    'Closing this change as part of the Laravel Enso major framework update cleanup.',
    `This thread has been inactive since before ${cutoff}.`,
    'The codebase has moved to a new baseline, so this branch likely needs to be rebased or reworked.',
    'If this work is still relevant on the current release line, please reopen it and update it against the latest codebase.',
].join('\n\n')

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

const parseRepositoryUrl = (value) => {
    const url = new URL(value)
    const pathname = url.pathname.replace(/^\/+|\/+$/gu, '').replace(/\.git$/u, '')
    const [owner, repo] = pathname.split('/')

    if (!owner || !repo) {
        throw new Error(`Unsupported repository URL: ${value}`)
    }

    if (url.hostname === 'github.com') {
        return {
            provider: 'github',
            owner,
            repo,
            key: `${owner}/${repo}`,
            url: `https://github.com/${owner}/${repo}`,
        }
    }

    if (url.hostname === 'git.xtelecom.ro') {
        return {
            provider: 'gitlab',
            owner,
            repo,
            key: `${owner}/${repo}`,
            url: `https://git.xtelecom.ro/${owner}/${repo}`,
        }
    }

    throw new Error(`Unsupported repository host: ${url.hostname}`)
}

const githubHeaders = () => ({
    Accept: 'application/vnd.github+json',
    ...(process.env.GITHUB_TOKEN?.trim() ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN.trim()}` } : {}),
    'User-Agent': 'laravel-enso-documentation-tracker-cleanup',
})

const gitlabHeaders = () => ({
    ...(process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim()
        ? { 'PRIVATE-TOKEN': process.env.GITLAB_TOKEN?.trim() || process.env.GIT_XTELECOM_TOKEN?.trim() }
        : {}),
    'User-Agent': 'laravel-enso-documentation-tracker-cleanup',
})

const fetchJson = async (url, options = {}) => {
    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(`${options.method ?? 'GET'} ${url} failed with ${response.status}`)
    }

    return response.json()
}

const postWithoutBody = async (url, options = {}) => {
    const response = await fetch(url, options)

    if (!response.ok) {
        throw new Error(`${options.method ?? 'POST'} ${url} failed with ${response.status}`)
    }
}

const patchJson = async (url, payload, options = {}) => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers ?? {}),
        },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        throw new Error(`PATCH ${url} failed with ${response.status}`)
    }

    return response.json()
}

const putForm = async (url, payload, options = {}) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: options.headers ?? {},
        body: new URLSearchParams(payload),
    })

    if (!response.ok) {
        throw new Error(`PUT ${url} failed with ${response.status}`)
    }
}

const parseArgs = (argv) => {
    const options = {
        before: null,
        apply: false,
        type: 'all',
        repo: null,
        excludeLabels: ['security', 'planned', 'keep-open', 'pinned'],
    }

    for (const arg of argv) {
        if (arg === '--apply') {
            options.apply = true
            continue
        }

        if (arg.startsWith('--before=')) {
            options.before = arg.slice('--before='.length)
            continue
        }

        if (arg.startsWith('--type=')) {
            options.type = arg.slice('--type='.length)
            continue
        }

        if (arg.startsWith('--repo=')) {
            options.repo = arg.slice('--repo='.length)
            continue
        }

        if (arg.startsWith('--exclude-labels=')) {
            options.excludeLabels = arg.slice('--exclude-labels='.length)
                .split(',')
                .map((label) => label.trim().toLowerCase())
                .filter(Boolean)
            continue
        }

        if (arg === '--help') {
            console.log('Usage: node scripts/close-stale-tracker.mjs --before=ISO_TIMESTAMP [--type=issues|merge-requests|all] [--repo=owner/repo|section/slug] [--exclude-labels=a,b] [--apply]')
            process.exit(0)
        }

        throw new Error(`Unknown argument: ${arg}`)
    }

    if (!options.before) {
        throw new Error('Missing required argument: --before=ISO_TIMESTAMP')
    }

    if (!['issues', 'merge-requests', 'all'].includes(options.type)) {
        throw new Error(`Invalid --type value: ${options.type}`)
    }

    return options
}

const options = parseArgs(process.argv.slice(2))
const cutoff = new Date(options.before)

if (Number.isNaN(cutoff.getTime())) {
    throw new Error(`Invalid cutoff timestamp: ${options.before}`)
}

const loadRepositories = async () => {
    const entries = []

    for (const file of sourceFiles) {
        const payload = JSON.parse(await readFile(file, 'utf8'))
        const [section] = Object.keys(payload)

        if (!section || !Array.isArray(payload[section])) {
            throw new Error(`Invalid source file: ${file}`)
        }

        for (const source of payload[section]) {
            if (!source?.url || !source?.slug) {
                continue
            }

            const repository = parseRepositoryUrl(source.url)

            entries.push({
                section,
                slug: source.slug,
                title: source.title,
                ...repository,
            })
        }
    }

    return entries
}

const matchesRepoFilter = (repository) => {
    if (!options.repo) {
        return true
    }

    return options.repo === `${repository.section}/${repository.slug}`
        || options.repo === repository.key
}

const hasExcludedLabel = (labels) => labels.some((label) => options.excludeLabels.includes(label.toLowerCase()))

const normalizeGithubLabels = (item) => Array.isArray(item.labels)
    ? item.labels.map((label) => typeof label === 'string' ? label : label?.name).filter(Boolean)
    : []

const normalizeGitlabLabels = (item) => Array.isArray(item.labels)
    ? item.labels.filter((label) => typeof label === 'string')
    : []

const fetchGithubIssues = async (repository) => {
    const payload = await fetchJson(`https://api.github.com/repos/${repository.owner}/${repository.repo}/issues?state=open&per_page=100`, {
        headers: githubHeaders(),
    })

    return payload
        .filter((item) => !item.pull_request)
        .map((item) => ({
            kind: 'issue',
            number: item.number,
            title: item.title,
            author: item.user?.login ?? null,
            labels: normalizeGithubLabels(item),
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            url: item.html_url,
        }))
}

const fetchGithubPulls = async (repository) => {
    const payload = await fetchJson(`https://api.github.com/repos/${repository.owner}/${repository.repo}/pulls?state=open&per_page=100`, {
        headers: githubHeaders(),
    })

    return payload.map((item) => ({
        kind: 'merge-request',
        number: item.number,
        title: item.title,
        author: item.user?.login ?? null,
        labels: normalizeGithubLabels(item),
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        url: item.html_url,
        draft: Boolean(item.draft),
    }))
}

const fetchGitlabIssues = async (repository) => {
    const payload = await fetchJson(`https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/issues?state=opened&per_page=100`, {
        headers: gitlabHeaders(),
    })

    return payload.map((item) => ({
        kind: 'issue',
        number: item.iid,
        title: item.title,
        author: item.author?.username ?? null,
        labels: normalizeGitlabLabels(item),
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        url: item.web_url,
    }))
}

const fetchGitlabMergeRequests = async (repository) => {
    const payload = await fetchJson(`https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/merge_requests?state=opened&scope=all&per_page=100`, {
        headers: gitlabHeaders(),
    })

    return payload.map((item) => ({
        kind: 'merge-request',
        number: item.iid,
        title: item.title,
        author: item.author?.username ?? null,
        labels: normalizeGitlabLabels(item),
        createdAt: item.created_at,
        updatedAt: item.updated_at,
        url: item.web_url,
        draft: Boolean(item.draft),
    }))
}

const shouldClose = (item) => {
    if (new Date(item.updatedAt).getTime() >= cutoff.getTime()) {
        return false
    }

    if (hasExcludedLabel(item.labels)) {
        return false
    }

    if (options.type === 'issues' && item.kind !== 'issue') {
        return false
    }

    if (options.type === 'merge-requests' && item.kind !== 'merge-request') {
        return false
    }

    return true
}

const closeGithubIssue = async (repository, item) => {
    await postWithoutBody(`https://api.github.com/repos/${repository.owner}/${repository.repo}/issues/${item.number}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...githubHeaders(),
        },
        body: JSON.stringify({
            body: item.kind === 'issue'
                ? issueMessage(options.before)
                : mergeRequestMessage(options.before),
        }),
    })

    if (item.kind === 'issue') {
        await patchJson(`https://api.github.com/repos/${repository.owner}/${repository.repo}/issues/${item.number}`, {
            state: 'closed',
        }, {
            headers: githubHeaders(),
        })

        return
    }

    await patchJson(`https://api.github.com/repos/${repository.owner}/${repository.repo}/pulls/${item.number}`, {
        state: 'closed',
    }, {
        headers: githubHeaders(),
    })
}

const closeGitlabItem = async (repository, item) => {
    const notesUrl = item.kind === 'issue'
        ? `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/issues/${item.number}/notes`
        : `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/merge_requests/${item.number}/notes`

    await postWithoutBody(notesUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...gitlabHeaders(),
        },
        body: new URLSearchParams({
            body: item.kind === 'issue'
                ? issueMessage(options.before)
                : mergeRequestMessage(options.before),
        }),
    })

    const closeUrl = item.kind === 'issue'
        ? `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/issues/${item.number}`
        : `https://git.xtelecom.ro/api/v4/projects/${encodeURIComponent(repository.key)}/merge_requests/${item.number}`

    await putForm(closeUrl, { state_event: 'close' }, {
        headers: gitlabHeaders(),
    })
}

const repositories = (await loadRepositories()).filter(matchesRepoFilter)
const candidates = []

for (const repository of repositories) {
    const items = []

    if (options.type !== 'merge-requests') {
        items.push(...(
            repository.provider === 'github'
                ? await fetchGithubIssues(repository)
                : await fetchGitlabIssues(repository)
        ))
    }

    if (options.type !== 'issues') {
        items.push(...(
            repository.provider === 'github'
                ? await fetchGithubPulls(repository)
                : await fetchGitlabMergeRequests(repository)
        ))
    }

    for (const item of items) {
        if (!shouldClose(item)) {
            continue
        }

        candidates.push({
            repository,
            item,
        })
    }
}

console.log(`Mode: ${options.apply ? 'apply' : 'dry-run'}`)
console.log(`Cutoff: ${options.before}`)
console.log(`Type: ${options.type}`)
console.log(`Candidates: ${candidates.length}`)

for (const { repository, item } of candidates) {
    console.log(`[${repository.provider}] ${repository.section}/${repository.slug} ${item.kind} #${item.number} | updated ${item.updatedAt} | ${item.title}`)
}

if (!options.apply) {
    process.exit(0)
}

for (const { repository, item } of candidates) {
    if (repository.provider === 'github') {
        await closeGithubIssue(repository, item)
    } else {
        await closeGitlabItem(repository, item)
    }

    console.log(`Closed ${repository.section}/${repository.slug} ${item.kind} #${item.number}`)
}
