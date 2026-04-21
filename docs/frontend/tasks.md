---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tasks

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/tasks/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.7-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/tasks)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/tasks.svg)](https://www.npmjs.com/package/@enso-ui/tasks)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/tasks)
[![Issues](https://img.shields.io/github/issues/enso-ui/tasks.svg)](https://github.com/enso-ui/tasks/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/tasks.svg)](https://github.com/enso-ui/tasks/pulls)
## Description
Task management pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/tasks
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
import BaseForm from '@enso-ui/tasks/src/bulma/pages/tasks/BaseForm.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/tasks/BaseForm.vue`
- `src/bulma/pages/tasks/Create.vue`
- `src/bulma/pages/tasks/Edit.vue`
- `src/bulma/pages/tasks/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/tasks/components/Filters.vue`
- `src/bulma/pages/tasks/components/Flags.vue`
## Routes

Tasks ships the following named route entries:

- `tasks.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/tasks/create.js`
- `tasks.edit`
  Path fragment: `:task/edit`
  Route file: `src/bulma/routes/tasks/edit.js`
- `tasks.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/tasks/index.js`
## Companion Backend Package

- [`laravel-enso/tasks`](https://docs.laravel-enso.com/backend/tasks.html) [↗](https://github.com/laravel-enso/tasks)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/tasks/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/tasks/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:16:49 PM</div>
</div>
