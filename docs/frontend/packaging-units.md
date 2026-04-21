---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Packaging Units

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/packaging-units/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.2.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/packaging-units)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/packaging-units.svg)](https://www.npmjs.com/package/@enso-ui/packaging-units)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/packaging-units)
[![Issues](https://img.shields.io/github/issues/enso-ui/packaging-units.svg)](https://github.com/enso-ui/packaging-units/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/packaging-units.svg)](https://github.com/enso-ui/packaging-units/pulls)

## Description

Packaging Units provides the administration pages used to list, create, and edit packaging units in Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/packaging-units
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/administration/packagingUnits` route group
- ships `index`, `create`, and `edit` page modules
- combines `EnsoTable` and `EnsoForm` in the standard administration flow
- pairs with the backend packaging-units package for tables, forms, and permissions

## Usage

```js
import administrationRoutes from '@enso-ui/packaging-units/src/bulma/routes/administration.js';
import PackagingUnitsIndex from '@enso-ui/packaging-units/src/bulma/pages/packagingUnits/Index.vue';
```

## API

### Route modules

Common imports:
- `src/bulma/routes/administration.js`
- `src/bulma/routes/administration/packaging.js`

### Page modules

- `src/bulma/pages/packagingUnits/Index.vue`
- `src/bulma/pages/packagingUnits/Create.vue`
- `src/bulma/pages/packagingUnits/Edit.vue`

The package is page-oriented. The routed pages are the public surface.

## Routes

### `/administration/packagingUnits`
- `administration.packagingUnits.index`
- `administration.packagingUnits.create`
- `administration.packagingUnits.edit`

## Companion Backend Package

- [`laravel-enso/packaging-units`](https://docs.laravel-enso.com/backend/packaging-units.html) [↗](https://github.com/laravel-enso/packaging-units)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/packaging-units/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/packaging-units/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:04:44 PM</div>
</div>
