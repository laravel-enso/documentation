---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Documents

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://git.xtelecom.ro/enso-ui/documents/-/blob/main/LICENSE)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)

## Description

Custom frontend package for managing **Documents**, **Document Types**, and **Document Type Categories** within the Enso UI ecosystem.

This package provides Vue pages and Vue Router route definitions for the full CRUD administration of document types and their associated categories, as well as viewing documents attached to profiles.

It is backend-driven and works in tandem with the `laravel-enso/documents` backend companion package.

## Structure

```
src/
├── pages/
│   ├── administration/
│   │   ├── documentTypeCategories/   # Create, Edit, Index
│   │   └── documentTypes/            # Create, Edit, Index + fields/
│   └── documents/                    # Document pages
└── routes/
    ├── administration/
    │   ├── documentTypeCategories.js
    │   └── documentTypes.js
    └── documents.js
```

## Features

- Full CRUD pages for **Document Type Categories**
- Full CRUD pages for **Document Types** with support for **Document Type Fields**
- Document listing pages linked to profiles
- Vue Router route definitions ready to be registered in the app router

## Usage

Import and register the routes in your Vue Router configuration:

```js
import documentTypes from '@enso-ui/documents-custom/src/routes/administration/documentTypes';
import documentTypeCategories from '@enso-ui/documents-custom/src/routes/administration/documentTypeCategories';
import documents from '@enso-ui/documents-custom/src/routes/documents';
```

## Companion Backend Package

- [`laravel-enso/documents`](https://git.xtelecom.ro/laravel-enso/documents)

The backend companion provides the route definitions, controllers, models, form builders, and table builders used by these frontend pages.

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html)
- [`vue`](https://vuejs.org/) `^3.x`
- [`vue-router`](https://router.vuejs.org/) `^4.x`

## License

[MIT](https://git.xtelecom.ro/enso-ui/documents/-/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/documents/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/12/2026, 6:22:01 PM</div>
</div>
