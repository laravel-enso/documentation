import { viteBundler } from '@vuepress/bundler-vite'
import { removePwaPlugin } from '@vuepress/plugin-remove-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { defineUserConfig } from 'vuepress'

const analyticsHead = process.env.VUEPRESS_GA_ID?.trim()?.startsWith('G-')
    ? [[
        'script',
        { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${process.env.VUEPRESS_GA_ID?.trim()}` },
    ], [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${process.env.VUEPRESS_GA_ID?.trim()}');`,
    ]]
    : []

const repositorySectionMeta = {
    backend: {
        title: 'Back End',
    },
    frontend: {
        title: 'Front End',
    },
} as const

const guideSidebar = [
    {
        text: 'Guide',
        collapsible: false,
        children: [
            '/guide/',
            '/guide/getting-started.md',
            '/guide/usage.md',
            '/guide/development.md',
            '/guide/core-building-blocks.md',
            '/guide/under-the-hood.md',
            '/guide/thanks.md',
            '/guide/license.md',
        ],
    },
]

const repositorySections = readdirSync(process.cwd())
    .filter((entry) => /^sources\.[^.]+\.json$/u.test(entry))
    .sort()
    .map((entry) => {
        const content = JSON.parse(readFileSync(path.resolve(process.cwd(), entry), 'utf8')) as Record<string, Array<{ slug: string, title: string, url?: string, updated?: boolean, documentationStatus?: 'red' | 'yellow' | 'green' | 'blue' }>>
        const [id] = Object.keys(content)

        if (!id || !(id in repositorySectionMeta) || !Array.isArray(content[id])) {
            throw new Error(`Invalid repository source file: ${entry}`)
        }

        return {
            id,
            title: repositorySectionMeta[id as keyof typeof repositorySectionMeta].title,
            sources: content[id].sort((first, second) => first.title.localeCompare(second.title)),
        }
    })

const repositoryCounts = Object.fromEntries(
    repositorySections.map((section) => [section.id, section.sources.length]),
) as Record<'backend' | 'frontend', number>

const visibilityBadgeRules = repositorySections
    .flatMap((section) => section.sources.map((source) => {
        const visibility = source.url?.includes('git.xtelecom.ro') ? 'Private' : 'Public'
        const background = visibility === 'Private' ? 'rgba(94, 114, 228, 0.08)' : 'rgba(62, 175, 124, 0.08)'
        const border = visibility === 'Private' ? 'rgba(94, 114, 228, 0.16)' : 'rgba(62, 175, 124, 0.16)'
        const color = visibility === 'Private' ? '#5b6fd6' : '#2d8f6f'
        const statusColor = source.documentationStatus === 'green'
            ? '#22c55e'
            : source.documentationStatus === 'blue'
                ? '#3b82f6'
            : source.documentationStatus === 'yellow'
                ? '#facc15'
                : '#ef4444'
        const hasStatus = Boolean(source.documentationStatus)

        return `
.vp-sidebar a[href="/${section.id}/${source.slug}.html"]::after {
    content: "${visibility}";
    display: inline-flex;
    order: 1;
    align-items: center;
    justify-content: center;
    margin-left: 0.45rem;
    margin-right: ${hasStatus ? '0.25rem' : '0'};
    padding: 0.04rem 0.34rem;
    border: 1px solid ${border};
    border-radius: 999px;
    background: ${background};
    color: ${color};
    font-size: 0.58rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: 0.01em;
    vertical-align: middle;
}

.vp-sidebar a[href="/${section.id}/${source.slug}.html"] {
    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    align-items: center;
    gap: 0;
}

.vp-sidebar a[href="/${section.id}/${source.slug}.html"]::before {
    content: "";
    display: ${hasStatus ? 'inline-block' : 'none'};
    order: 2;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 999px;
    background: ${statusColor};
    flex: 0 0 auto;
}
`
    }))
    .join('\n')

const siteStyles = `
:root {
    --search-input-width: 12rem;
    --search-result-width: 22rem;
}

.vp-navbar-items-wrapper {
    flex: 1;
}

.vp-navbar-items {
    margin-left: auto;
}

.vp-navbar .search-box {
    order: -1;
    margin-left: 1.5rem;
    margin-right: 3.5rem;
}

.vp-sidebar .vp-sidebar-heading {
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.vp-sidebar:has(a.route-link-active[href="/frontend/"]) .vp-sidebar-heading::after,
.vp-sidebar:has(a.route-link-active[href="/backend/"]) .vp-sidebar-heading::after {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.9rem;
    padding: 0.08rem 0.42rem;
    border: 1px solid rgba(62, 175, 124, 0.16);
    border-radius: 999px;
    background: rgba(62, 175, 124, 0.08);
    color: #2d8f6f;
    font-size: 0.68rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.01em;
}

.vp-sidebar:has(a.route-link-active[href="/frontend/"]) .vp-sidebar-heading::after {
    content: "${repositoryCounts.frontend}";
}

.vp-sidebar:has(a.route-link-active[href="/backend/"]) .vp-sidebar-heading::after {
    content: "${repositoryCounts.backend}";
}

.package-page-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2.75rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--vp-c-border);
    color: var(--vp-c-text-mute);
    font-size: 1rem;
}

.package-page-edit {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #4f6f95;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none !important;
}

.package-page-edit:hover {
    text-decoration: none !important;
}

.package-page-last-updated {
    text-align: right;
    color: #a0a0a7;
    font-size: 1rem;
}

.package-page-last-updated .label {
    color: #4f6f95;
    font-weight: 400;
}

.external-link-icon [vp-content] li > a.route-link + a[target="_blank"]::after {
    content: none !important;
    display: none !important;
}

.external-link-icon [vp-content] li > a[target="_blank"] + a[target="_blank"]::after {
    content: none !important;
    display: none !important;
}

.external-link-icon [vp-content] li > a[target="_blank"]:has(+ a[target="_blank"])::after {
    content: none !important;
    display: none !important;
}

.external-link-icon [vp-content] a[target="_blank"]:has(img)::after {
    content: none !important;
    display: none !important;
}

.external-link-icon [vp-content] p > a:has(img) {
    display: inline-flex;
    align-items: center;
    margin-right: 0.45rem;
    margin-bottom: 0.35rem;
}

@media (max-width: 959px) {
    :root {
        --search-input-width: 10rem;
        --search-result-width: min(20rem, calc(100vw - 2rem));
    }
}

@media (max-width: 719px) {
    .vp-navbar .search-box {
        margin-left: 0;
        margin-right: 0;
    }

    .package-page-meta-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .package-page-last-updated {
        text-align: left;
    }
}

${visibilityBadgeRules}
`

const repositorySidebar = Object.fromEntries(
    repositorySections.map((section) => [
        `/${section.id}/`,
        [
            {
                text: section.title,
                collapsible: false,
                children: section.sources.map((source) => `/${section.id}/${source.slug}.md`),
            },
        ],
    ]),
)

export default defineUserConfig({
    base: '/',
    title: 'Laravel Enso',
    description: 'Full featured Single Page Application boilerplate',
    head: [
        ...analyticsHead,
        ['style', {}, siteStyles],
        ['link', { rel: 'icon', href: '/enso.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ],
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/enso.svg',
        repo: 'laravel-enso/documentation',
        docsDir: 'docs',
        docsBranch: 'master',
        editLink: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: true,
        contributors: false,
        navbar: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Back End', link: '/backend/' },
            { text: 'Front End', link: '/frontend/' },
        ],
        sidebar: {
            '/guide/': guideSidebar,
            ...repositorySidebar,
        },
    }),
    plugins: [
        removePwaPlugin({}),
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
            hotKeys: ['/'],
            maxSuggestions: 10,
        }),
    ],
})
