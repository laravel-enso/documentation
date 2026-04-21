---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Users

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/users/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.10-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/users)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/users.svg)](https://www.npmjs.com/package/@enso-ui/users)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/users)
[![Issues](https://img.shields.io/github/issues/enso-ui/users.svg)](https://github.com/enso-ui/users/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/users.svg)](https://github.com/enso-ui/users/pulls)
## Description
User administration pages and profile panels for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/users
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
import Create from '@enso-ui/users/src/bulma/pages/users/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/users/Create.vue`
- `src/bulma/pages/users/Edit.vue`
- `src/bulma/pages/users/Index.vue`
- `src/bulma/pages/users/Show.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/users/components/Avatar.vue`
- `src/bulma/pages/users/components/Session.vue`
- `src/bulma/pages/users/components/Sessions.vue`
- `src/bulma/pages/users/components/Token.vue`
- `src/bulma/pages/users/components/TokenForm.vue`
- `src/bulma/pages/users/components/Tokens.vue`
- `src/bulma/pages/users/components/Url.vue`
- `src/bulma/pages/users/components/UserProfile.vue`
## Routes

Users ships the following named route entries:

- `administration.users.create`
  Path fragment: `create/:person`
  Route file: `src/bulma/routes/administration/users/create.js`
- `administration.users.edit`
  Path fragment: `:user/edit`
  Route file: `src/bulma/routes/administration/users/edit.js`
- `administration.users.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/administration/users/index.js`
- `administration.users.show`
  Path fragment: `:user`
  Route file: `src/bulma/routes/administration/users/show.js`
## Companion Backend Package

- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/users/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/users/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:21:38 PM</div>
</div>
