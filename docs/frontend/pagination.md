---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Pagination

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/pagination/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/pagination)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/pagination.svg)](https://www.npmjs.com/package/@enso-ui/pagination)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/pagination)
[![Issues](https://img.shields.io/github/issues/enso-ui/pagination.svg)](https://github.com/enso-ui/pagination/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/pagination.svg)](https://github.com/enso-ui/pagination/pulls)

## Description

Pagination provides classic and simple pagination controls, plus Enso-aware wrappers that inject translation automatically.

## Installation

Install the package:

```bash
yarn add @enso-ui/pagination
```

The components can be used inside or outside the Enso ecosystem.

## Features

- exports `Pagination`, `EnsoPagination`, `SimplePagination`, and `EnsoSimplePagination`
- supports full page-number navigation and lightweight previous/next navigation
- exposes slot payloads for record info customization
- injects `i18n` automatically in the Enso wrappers

## Usage

```vue
<script setup>
import { Pagination } from '@enso-ui/pagination/bulma';
</script>

<Pagination
    :length="length"
    :page="page"
    :page-size="pageSize"
    @page-changed="page = $event" />
```

## API

### Bulma exports

Import: `@enso-ui/pagination/bulma`

#### `Pagination`

Props:
- `i18n: Function = value => value`
- `length: number`
- `loading: boolean = false`
- `page: number`
- `pageSize: number`

Emits:
- `page-changed`

Slots:
- `info` receives `{ from, page, pageSize, to, total, totalPages }`

#### `SimplePagination`

Props:
- `i18n: Function = value => value`
- `length: number | null = null`
- `loading: boolean = false`
- `page: number`
- `pageSize: number`

Emits:
- `page-changed`

Slots:
- `info` receives `{ from, page, pageSize, to, total, totalPages }`

#### Enso wrappers

- `EnsoPagination` wraps `Pagination` and injects `i18n`
- `EnsoSimplePagination` wraps `SimplePagination` and injects `i18n`

## Depends On

- `vue` as the component runtime.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/pagination/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/pagination/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:07:18 PM</div>
</div>
