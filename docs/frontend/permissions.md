---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Permissions

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/permissions/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/permissions)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/permissions.svg)](https://www.npmjs.com/package/@enso-ui/permissions)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/permissions)
[![Issues](https://img.shields.io/github/issues/enso-ui/permissions.svg)](https://github.com/enso-ui/permissions/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/permissions.svg)](https://github.com/enso-ui/permissions/pulls)

## Description

Permissions provides the administration pages used to list, create, and edit permission records in Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/permissions
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/system/permissions` route group
- ships `index`, `create`, and `edit` page modules
- includes a small helper for mapping permission types to Bulma color classes
- pairs with the backend permissions package for forms, tables, and policy data

## Usage

```js
import systemRoutes from '@enso-ui/permissions/src/bulma/routes/system.js';
import permissionCssClass from '@enso-ui/permissions/src/bulma/modules/permission';
```

## API

### Route modules

Common imports:
- `src/bulma/routes/system.js`
- `src/bulma/routes/system/permissions.js`

### Page modules

- `src/bulma/pages/permissions/Index.vue`
- `src/bulma/pages/permissions/Create.vue`
- `src/bulma/pages/permissions/Edit.vue`

### Helper module

`src/bulma/modules/permission.js`
- maps permission enum members such as read, write, delete, link, and menu to Bulma color classes

## Routes

### `/system/permissions`
- `system.permissions.index`
- `system.permissions.create`
- `system.permissions.edit`

## Companion Backend Package

- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/permissions/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/permissions/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:07:40 PM</div>
</div>
