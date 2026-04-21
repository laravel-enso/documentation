---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Data Import

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/data-import/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.6.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/data-import)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/data-import.svg)](https://www.npmjs.com/package/@enso-ui/data-import)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/data-import)
[![Issues](https://img.shields.io/github/issues/enso-ui/data-import.svg)](https://github.com/enso-ui/data-import/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/data-import.svg)](https://github.com/enso-ui/data-import/pulls)

## Description

Data-import dashboard and upload workflow for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/data-import
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the data-import dashboard page consumed by the import route
- lets users choose an import type, resolve parameter definitions, and upload files with extra params
- renders import summaries and historical imports through Enso tables and filters
- ships reusable parameter field components and the import uploader wrapper

## Usage

```js
import DataImportIndex from '@enso-ui/data-import';
```

## API

### `Index`

Default export for the data-import page.

Import: `@enso-ui/data-import`

### `ImportUploader`

Uploader wrapper used by the page to submit import files and template downloads.

Import: `@enso-ui/data-import/src/bulma/pages/dataImport/components/ImportUploader.vue`

### Parameter components

Deep imports:
- `Param.vue`
- `params/Input.vue`
- `params/Checkbox.vue`
- `params/Date.vue`
- `params/Select.vue`

## Routes

### `/import`

Route name: `import.index`

Page:
- `src/bulma/pages/dataImport/Index.vue`

## Companion Backend Package

- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)

The backend companion provides the import type options, parameter contracts, file-processing pipeline, rejected-download endpoint, and history table consumed by the page.

## Depends On

- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)
- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/data-import/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/data-import/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:00:48 AM</div>
</div>
