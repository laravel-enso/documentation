---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Contracts

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/contracts/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.1-2563eb.svg)](https://git.xtelecom.ro/enso-ui/contracts/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/contracts)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/contracts/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/contracts/-/merge_requests)

## Description

Contracts administration pages and contract-form workflows for Enso UI.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- ships contracts index, create, and edit routes under the contracts module
- reuses a single form page for both create and edit workflows
- embeds additional acts and documents inside tabbed accessories when editing a contract
- combines Enso tables, filters, forms, tabs, and documents around the backend-driven contract workflow

## Usage

```js
import ContractsIndex from '@enso-ui/contracts';
import ContractForm from '@enso-ui/contracts/src/bulma/pages/contracts/Form.vue';
```

## API

### `Index`

Default export for the contracts table page.

Import: `@enso-ui/contracts`

### `Form`

Create and edit page for one contract.

Import: `@enso-ui/contracts/src/bulma/pages/contracts/Form.vue`

### Additional acts modules

Deep imports:
- `additionalActs/List.vue`
- `additionalActs/Card.vue`
- `additionalActs/BaseForm.vue`

These modules drive the edit-only additional-acts workflow shown inside the accessories tabs.

## Routes

### `/contracts`

Route names:
- `contracts.index`
- `contracts.create`
- `contracts.edit`

Pages:
- `src/bulma/pages/contracts/Index.vue`
- `src/bulma/pages/contracts/Form.vue`

## Backend Integration

The package expects the host application to expose the contracts CRUD routes, form contracts, enums, and document/additional-act endpoints used by the index and form pages.

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/contracts/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/contracts/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:06:21 AM</div>
</div>
