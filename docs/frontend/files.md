---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Files

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/files/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.4.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/files)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/files.svg)](https://www.npmjs.com/package/@enso-ui/files)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/files)
[![Issues](https://img.shields.io/github/issues/enso-ui/files.svg)](https://github.com/enso-ui/files/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/files.svg)](https://github.com/enso-ui/files/pulls)

## Description

Files bundles the Enso file browser, file-type administration pages, and the reusable visual pieces used by file-centric workflows.

## Installation

Install the package:

```bash
yarn add @enso-ui/files
```

The package is also available through the full `enso-ui` workspace bundle.

## Features

- ships the `/files` browser page and the `/administration/fileTypes` CRUD pages
- includes reusable file-browser components such as `Top`, `Actions`, `Item`, `File`, `Folder`, and `Thumbnail`
- integrates uploads, tabbed previews, confirmation flows, and table-driven file-type management
- keeps the page layer aligned with backend file permissions, tabs, and upload contracts

## Usage

```js
import filesIndex from '@enso-ui/files/src/bulma/routes/files.js';
import fileTypes from '@enso-ui/files/src/bulma/routes/administration/fileTypes.js';
import FilesPage from '@enso-ui/files/src/bulma/pages/files/Index.vue';
```

## API

### Page modules

Common imports:
- `@enso-ui/files/src/bulma/pages/files/Index.vue`
- `@enso-ui/files/src/bulma/pages/fileTypes/Index.vue`
- `@enso-ui/files/src/bulma/pages/fileTypes/Create.vue`
- `@enso-ui/files/src/bulma/pages/fileTypes/Edit.vue`

### File-browser building blocks

Stable deep imports used by other Enso packages:
- `Top.vue`
- `Actions.vue`
- `Item.vue`
- `File.vue`
- `Folder.vue`
- `Thumbnail.vue`

The root entrypoint also re-exports a `Url` helper intended for file-link rendering in higher-level integrations.

## Routes

### `/files`

Route name:
- `core.files.index`

Page:
- `src/bulma/pages/files/Index.vue`

### `/administration/fileTypes`

Route names:
- `administration.fileTypes.index`
- `administration.fileTypes.create`
- `administration.fileTypes.edit`

Pages:
- `src/bulma/pages/fileTypes/Index.vue`
- `src/bulma/pages/fileTypes/Create.vue`
- `src/bulma/pages/fileTypes/Edit.vue`

## Companion Backend Package

- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)

## Depends On

- [`@enso-ui/clipboard`](https://docs.laravel-enso.com/frontend/clipboard.html) [↗](https://github.com/enso-ui/clipboard)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/files/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/files/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:25:57 PM</div>
</div>
