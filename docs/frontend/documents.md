---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Documents

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/documents/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.2.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/documents)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/documents.svg)](https://www.npmjs.com/package/@enso-ui/documents)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/documents)
[![Issues](https://img.shields.io/github/issues/enso-ui/documents.svg)](https://github.com/enso-ui/documents/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/documents.svg)](https://github.com/enso-ui/documents/pulls)

## Description

Documents provides reusable document-list widgets for Enso UI, including a standalone list component and a card wrapper with refresh and badge controls.

The package is backend-driven and is typically embedded in edit pages where users need to upload, filter, preview, and remove files attached to another resource.

## Installation

Install the package:

```bash
yarn add @enso-ui/documents
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports `Documents` for inline document lists with upload and filter controls
- exports `DocumentsCard` for dashboard-style card integration with count badges
- supports custom toolbar rendering through the `controls` slot
- delegates file preview and deletion to the shared files package

## Usage

```vue
<script>
import { Documents, DocumentsCard } from '@enso-ui/documents/bulma';

export default {
    components: { Documents, DocumentsCard },
};
</script>
```

## API

### `Documents`

Inline document list widget.

Import: `@enso-ui/documents/bulma`

Props:
- `id: string | number` required
- `type: string` required
- `query: string` default `''`
- `compact: boolean` default `false`
- `disableControls: boolean` default `false`
- `disableUpload: boolean` default `false`
- `fileSizeLimit: number` default `20971520`

Events:
- `update` after fetches, uploads, and deletions

Slots:
- `controls` with `{ id, type, uploadLink, fetch, internalQuery }`

### `DocumentsCard`

Card wrapper around `Documents`.

Import: `@enso-ui/documents/bulma`

Props:
- `icon: string | array | object`
- `collapsed: boolean` default `false`
- `id: string | number` required
- `type: string` required
- `title: string` default `''`

Events:
- No public emits.

## Companion Backend Package

- [`laravel-enso/documents`](https://docs.laravel-enso.com/backend/documents.html) [↗](https://github.com/laravel-enso/documents)

The backend companion provides the `core.documents.*` routes and payloads used to list, upload, and destroy document records.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/files`](https://docs.laravel-enso.com/frontend/files.html) [↗](https://github.com/enso-ui/files)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/documents/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/documents/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:21 AM</div>
</div>
