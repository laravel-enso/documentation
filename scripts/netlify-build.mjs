import { execSync } from 'node:child_process'

const parseHookPayload = () => {
    const incoming = process.env.INCOMING_HOOK_BODY?.trim()

    if (!incoming) {
        return null
    }

    try {
        return JSON.parse(incoming)
    } catch {
        return null
    }
}

const hookPayload = parseHookPayload()
const refreshRequested = process.env.DOCS_REFRESH_BUILD === 'true'
    || hookPayload?.refresh === true

const run = (command) => {
    execSync(command, {
        stdio: 'inherit',
        env: process.env,
    })
}

if (refreshRequested) {
    process.stdout.write('Running scheduled docs refresh build\n')
    run('yarn sync')
    run('yarn build:generator')
    run('yarn refresh:status')
    run('yarn build:assets')
} else {
    process.stdout.write('Running standard docs build\n')
    run('yarn build:assets')
}
