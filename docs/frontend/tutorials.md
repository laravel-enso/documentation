---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tutorials

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/tutorials/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/tutorials)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/tutorials.svg)](https://www.npmjs.com/package/@enso-ui/tutorials)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/tutorials)
[![Issues](https://img.shields.io/github/issues/enso-ui/tutorials.svg)](https://github.com/enso-ui/tutorials/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/tutorials.svg)](https://github.com/enso-ui/tutorials/pulls)
## Description
Tutorial administration pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/tutorials
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Create from '@enso-ui/tutorials/src/bulma/pages/tutorials/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/tutorials/Create.vue`
- `src/bulma/pages/tutorials/Edit.vue`
- `src/bulma/pages/tutorials/Index.vue`
## Routes

Tutorials ships the following named route entries:

- `system.tutorials.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/system/tutorials/create.js`
- `system.tutorials.edit`
  Path fragment: `:tutorial/edit`
  Route file: `src/bulma/routes/system/tutorials/edit.js`
- `system.tutorials.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/system/tutorials/index.js`
## Companion Backend Package

- [`laravel-enso/tutorials`](https://docs.laravel-enso.com/backend/tutorials.html) [↗](https://github.com/laravel-enso/tutorials)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/tutorials/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/tutorials/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:14:23 PM</div>
</div>
