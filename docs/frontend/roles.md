---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Roles

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/roles/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/roles)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/roles.svg)](https://www.npmjs.com/package/@enso-ui/roles)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/roles)
[![Issues](https://img.shields.io/github/issues/enso-ui/roles.svg)](https://github.com/enso-ui/roles/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/roles.svg)](https://github.com/enso-ui/roles/pulls)
## Description
Role administration pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/roles
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Configure from '@enso-ui/roles/src/bulma/pages/roles/Configure.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/roles/Configure.vue`
- `src/bulma/pages/roles/Create.vue`
- `src/bulma/pages/roles/Edit.vue`
- `src/bulma/pages/roles/Index.vue`
## Routes

Roles ships the following named route entries:

- `system.roles.configure`
  Path fragment: `:role/configure`
  Route file: `src/bulma/routes/system/roles/configure.js`
- `system.roles.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/system/roles/create.js`
- `system.roles.edit`
  Path fragment: `:role/edit`
  Route file: `src/bulma/routes/system/roles/edit.js`
- `system.roles.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/system/roles/index.js`
## Companion Backend Package

- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/roles/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/roles/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:08 PM</div>
</div>
