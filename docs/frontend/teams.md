---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Teams

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/teams/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.5-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/teams)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/teams.svg)](https://www.npmjs.com/package/@enso-ui/teams)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/teams)
[![Issues](https://img.shields.io/github/issues/enso-ui/teams.svg)](https://github.com/enso-ui/teams/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/teams.svg)](https://github.com/enso-ui/teams/pulls)
## Description
Team overview pages for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/teams
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- includes index/list pages backed by Enso tables, forms, or integration settings
- ships reusable page-specific building blocks through deep-import component paths
## Usage
```vue
<script setup>
import Index from '@enso-ui/teams/src/bulma/pages/teams/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/teams/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/teams/components/AvatarList.vue`
- `src/bulma/pages/teams/components/Team.vue`
## Routes

Teams ships the following named route entries:

- `administration.teams.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/administration/teams.js`
## Companion Backend Package

- [`laravel-enso/teams`](https://docs.laravel-enso.com/backend/teams.html) [↗](https://github.com/laravel-enso/teams)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/teams/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/teams/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:17:10 PM</div>
</div>
