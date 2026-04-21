---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Services

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/services/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.3.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/services)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/services.svg)](https://www.npmjs.com/package/@enso-ui/services)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/services)
[![Issues](https://img.shields.io/github/issues/enso-ui/services.svg)](https://github.com/enso-ui/services/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/services.svg)](https://github.com/enso-ui/services/pulls)
## Description
Service administration pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/services
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
- ships reusable page-specific building blocks through deep-import component paths
## Usage
```vue
<script setup>
import Create from '@enso-ui/services/src/bulma/pages/services/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/services/Create.vue`
- `src/bulma/pages/services/Edit.vue`
- `src/bulma/pages/services/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/services/components/Supplier.vue`
## Routes

Services ships the following named route entries:

- `services.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/services/create.js`
- `services.edit`
  Path fragment: `:service/edit`
  Route file: `src/bulma/routes/services/edit.js`
- `services.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/services/index.js`
## Companion Backend Package

- [`laravel-enso/services`](https://docs.laravel-enso.com/backend/services.html) [↗](https://github.com/laravel-enso/services)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/services/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/services/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:35 PM</div>
</div>
