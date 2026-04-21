---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Menus

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/menus/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.18-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/menus)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/menus.svg)](https://www.npmjs.com/package/@enso-ui/menus)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/menus)
[![Issues](https://img.shields.io/github/issues/enso-ui/menus.svg)](https://github.com/enso-ui/menus/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/menus.svg)](https://github.com/enso-ui/menus/pulls)

## Description

Menus provides the administration pages and reusable menu/sidebar components used to render and organize Enso navigation.

## Installation

Install the package:

```bash
yarn add @enso-ui/menus
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/system/menus` index, create, and edit routes
- exports menu and sidebar components in both Bulma and core variants
- ships organizer utilities and the `register.js` hook used to wire menu state into the app shell
- pairs backend-driven menu records with sidebar rendering and drag-and-drop organization

## Usage

```js
import systemRoutes from '@enso-ui/menus/src/bulma/routes/system.js';
import Menus from '@enso-ui/menus/src/bulma/components/menu/Menus.vue';
import registerMenus from '@enso-ui/menus/src/bulma/register.js';
```

## API

### Page modules

Common imports:
- `pages/menus/Index.vue`
- `pages/menus/Create.vue`
- `pages/menus/Edit.vue`

### Menu components

Bulma and core variants are shipped for:
- `Menus`
- `MenuItem`
- `MenuOrganizer`
- `SidebarState`
- `Sidebar` (core)

### Utilities

- `src/plugins/utils.js` exports `hasActiveChild` and `organize`.
- `src/bulma/register.js` registers the menu helpers inside the host app.

## Routes

### `/system/menus`
- `system.menus.index`
- `system.menus.create`
- `system.menus.edit`

## Companion Backend Package

- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/dropdown-indicator`](https://docs.laravel-enso.com/frontend/dropdown-indicator.html) [↗](https://github.com/enso-ui/dropdown-indicator)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/menus/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/menus/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:27:06 PM</div>
</div>
