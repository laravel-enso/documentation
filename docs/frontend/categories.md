---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Categories

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/categories/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.3.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/categories.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/categories)
[![Issues](https://img.shields.io/github/issues/enso-ui/categories.svg)](https://github.com/enso-ui/categories/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/categories.svg)](https://github.com/enso-ui/categories/pulls)

## Description

Categories administration pages for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/categories
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the categories index page used by the administration router
- ships the route modules for category listing, creation, and edit flows
- combines Enso table slots with a dedicated level filter
- renders picture previews and flattened parent labels through table slots

## Usage

```js
import CategoriesIndex from '@enso-ui/categories';
import CategoryCreate from '@enso-ui/categories/src/bulma/pages/administration/categories/Create.vue';
import CategoryEdit from '@enso-ui/categories/src/bulma/pages/administration/categories/Edit.vue';
```

## API

### `Index`

Default export for the categories administration index page.

Import: `@enso-ui/categories`

Props:
- No public props.

Events:
- No public emits.

### `Create`

Create page for a category record.

Import: `@enso-ui/categories/src/bulma/pages/administration/categories/Create.vue`

### `Edit`

Edit page for an existing category record.

Import: `@enso-ui/categories/src/bulma/pages/administration/categories/Edit.vue`

## Routes

### `administration/categories`

Route group:
- `administration.categories.index`
- `administration.categories.create`
- `administration.categories.edit`

Pages:
- `src/bulma/pages/administration/categories/Index.vue`
- `src/bulma/pages/administration/categories/Create.vue`
- `src/bulma/pages/administration/categories/Edit.vue`

The package ships a nested administration route group that exposes the full list/create/edit workflow for categories.

## Companion Backend Package

- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)

The backend companion provides the category table definition, form contracts, image handling, and CRUD endpoints used by these pages.

## Depends On

- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/categories/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/categories/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:04 AM</div>
</div>
