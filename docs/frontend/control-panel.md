---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Control Panel

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/control-panel/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/control-panel)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/control-panel.svg)](https://www.npmjs.com/package/@enso-ui/control-panel)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/control-panel)
[![Issues](https://img.shields.io/github/issues/enso-ui/control-panel.svg)](https://github.com/enso-ui/control-panel/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/control-panel.svg)](https://github.com/enso-ui/control-panel/pulls)

## Description

Dashboard and application administration pages for the Enso control panel.

## Installation

Install the package:

```bash
yarn add @enso-ui/control-panel
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships the dashboard page that aggregates application cards and summary statistics
- ships application administration pages for listing, creating, and editing managed apps
- exposes reusable dashboard widgets such as `Application`, `Top`, `Stats`, and `Stat`

## Usage

```js
import DashboardIndex from '@enso-ui/control-panel';
import ApplicationsIndex from '@enso-ui/control-panel/src/bulma/pages/applications/Index.vue';
```

## API

### `Index`

Default export for the dashboard page.

Import: `@enso-ui/control-panel`

### Application administration pages

Deep imports:
- `src/bulma/pages/applications/Index.vue`
- `src/bulma/pages/applications/Create.vue`
- `src/bulma/pages/applications/Edit.vue`

### Dashboard widgets

Deep imports:
- `Application.vue`
- `Top.vue`
- `Stats.vue`
- `Stat.vue`
- `Action.vue`
- `FooterAction.vue`
- `FooterLink.vue`
- `Indicator.vue`

## Routes

### `/dashboard`

Route name:
- `dashboard.index`

Page:
- `src/bulma/pages/controlPanel/Index.vue`

### `administration/applications`

Route names:
- `administration.applications.index`
- `administration.applications.create`
- `administration.applications.edit`

Pages:
- `src/bulma/pages/applications/Index.vue`
- `src/bulma/pages/applications/Create.vue`
- `src/bulma/pages/applications/Edit.vue`

## Companion Backend Packages

- `laravel-enso/control-panel-api`
- `laravel-enso/control-panel-common`

The frontend pages depend on the control-panel backend services for dashboard aggregates, application CRUD, and the route contracts used by the shell.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/divider`](https://docs.laravel-enso.com/frontend/divider.html) [↗](https://github.com/enso-ui/divider)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/control-panel/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/control-panel/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:06:21 AM</div>
</div>
