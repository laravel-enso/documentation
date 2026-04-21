---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Departments

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/departments/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.2-2563eb.svg)](https://git.xtelecom.ro/enso-ui/departments/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/departments)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/departments/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/departments/-/merge_requests)

## Description

Departments administration pages for Enso UI.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- ships department list, create, and edit pages for the administration module
- builds the create/edit flows on top of backend-driven Enso forms
- exposes the route group used by the Enso administration shell

## Usage

```js
import DepartmentsIndex from '@enso-ui/departments';
import DepartmentCreate from '@enso-ui/departments/src/bulma/pages/departments/Create.vue';
import DepartmentEdit from '@enso-ui/departments/src/bulma/pages/departments/Edit.vue';
```

## API

### `Index`

Default export for the departments table page.

Import: `@enso-ui/departments`

### `Create`

Create page for one department record.

Import: `@enso-ui/departments/src/bulma/pages/departments/Create.vue`

### `Edit`

Edit page for one department record.

Import: `@enso-ui/departments/src/bulma/pages/departments/Edit.vue`

## Routes

### `administration/departments`

Route names:
- `administration.departments.index`
- `administration.departments.create`
- `administration.departments.edit`

Pages:
- `src/bulma/pages/departments/Index.vue`
- `src/bulma/pages/departments/Create.vue`
- `src/bulma/pages/departments/Edit.vue`

## Backend Integration

The package expects the host application to expose the departments table definition, form contracts, and CRUD routes used by the administration pages.

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/departments/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/departments/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:06:21 AM</div>
</div>
