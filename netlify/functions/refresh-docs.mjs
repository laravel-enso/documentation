export default async () => {
    const buildHookUrl = process.env.DOCS_REFRESH_BUILD_HOOK_URL?.trim()

    if (!buildHookUrl) {
        throw new Error('DOCS_REFRESH_BUILD_HOOK_URL is not configured')
    }

    const response = await fetch(buildHookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refresh: true,
            source: 'netlify-scheduled-function',
        }),
    })

    if (!response.ok) {
        throw new Error(`Build hook request failed with status ${response.status}`)
    }
}

export const config = {
    schedule: '0 3 * * *',
}
