---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Ticketing

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/ticketing/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.6.3-2563eb.svg)](https://git.xtelecom.ro/enso-ui/ticketing/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/ticketing)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/ticketing/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/ticketing/-/merge_requests)
## Description
Ticketing pages and reusable ticket list components for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Create from '@enso-ui/ticketing/src/bulma/pages/ticketing/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/ticketing/Create.vue`
- `src/bulma/pages/ticketing/Index.vue`
- `src/bulma/pages/ticketing/Show.vue`
## Routes

Ticketing ships the following named route entries:

- `ticketing.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/ticketing/create.js`
- `ticketing.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/ticketing/index.js`
- `ticketing.show`
  Path fragment: `:ticket`
  Route file: `src/bulma/routes/ticketing/show.js`
## Companion Backend Package

- [`laravel-enso/ticketing`](https://docs.laravel-enso.com/backend/ticketing.html) [↗](https://git.xtelecom.ro/laravel-enso/ticketing)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/ticketing/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/ticketing/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:14:07 PM</div>
</div>
