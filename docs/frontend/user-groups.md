---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# User Groups

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/user-groups/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/user-groups)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/user-groups.svg)](https://www.npmjs.com/package/@enso-ui/user-groups)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/user-groups)
[![Issues](https://img.shields.io/github/issues/enso-ui/user-groups.svg)](https://github.com/enso-ui/user-groups/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/user-groups.svg)](https://github.com/enso-ui/user-groups/pulls)
## Description
User group administration pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/user-groups
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Create from '@enso-ui/user-groups/src/bulma/pages/userGroups/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/userGroups/Create.vue`
- `src/bulma/pages/userGroups/Edit.vue`
- `src/bulma/pages/userGroups/Index.vue`
## Routes

User Groups ships the following named route entries:

- `administration.userGroups.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/administration/userGroups/create.js`
- `administration.userGroups.edit`
  Path fragment: `:userGroup/edit`
  Route file: `src/bulma/routes/administration/userGroups/edit.js`
- `administration.userGroups.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/administration/userGroups/index.js`
## Companion Backend Package

- [`laravel-enso/user-groups`](https://docs.laravel-enso.com/backend/user-groups.html) [↗](https://github.com/laravel-enso/user-groups)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/user-groups/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/user-groups/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:14:46 PM</div>
</div>
