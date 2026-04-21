---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Comments

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/comments/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.2.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/comments)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/comments.svg)](https://www.npmjs.com/package/@enso-ui/comments)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/comments)
[![Issues](https://img.shields.io/github/issues/enso-ui/comments.svg)](https://github.com/enso-ui/comments/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/comments.svg)](https://github.com/enso-ui/comments/pulls)

## Description

Comments cards and inline comment threads for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/comments
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports `Comments` and `CommentsCard` through the Bulma entrypoint
- loads comment threads, supports optimistic create/delete/update flows, and keeps tagged users in sync
- ships inline edit and delete actions with the Enso confirmation popper
- surfaces comment counts through the card wrapper used on entity detail pages

## Usage

```vue
<script setup>
import { CommentsCard } from '@enso-ui/comments/bulma';
</script>

<CommentsCard
    :id="companyId"
    type="company"
    title="Comments"
/>
```

## API

### `Comments`

Thread component that manages the comment list for one model.

Import: `@enso-ui/comments/bulma`

Props:
- `id: string | number` target model id.
- `type: string` backend commentable type.
- `query: string | null = null` initial filter.
- `compact: boolean = false` toggles compact toolbar labels.

Events:
- `update` after fetch, create, or delete operations.

Slots:
- `controls` receives `{ create, internalQuery, fetch }`.

### `CommentsCard`

Card wrapper around `Comments` with badge and refresh controls.

Import: `@enso-ui/comments/bulma`

Props:
- `collapsed: boolean = false`
- `id: string | number`
- `type: string`
- `title: string = ""`
- `icon: string | array | object`

Events:
- No direct emits.

## Companion Backend Package

- [`laravel-enso/comments`](https://docs.laravel-enso.com/backend/comments.html) [↗](https://github.com/laravel-enso/comments)

The frontend widgets depend on the backend companion for comment thread endpoints, tagged-user support, and the model-type contracts used by the card.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/comments/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/comments/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:09 AM</div>
</div>
