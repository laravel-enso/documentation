---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sale Channels

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/sale-channels/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.4-2563eb.svg)](https://git.xtelecom.ro/enso-ui/sale-channels/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/sale-channels)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/sale-channels/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/sale-channels/-/merge_requests)
## Description
Sale channel administration pages for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Create from '@enso-ui/sale-channels/src/bulma/pages/saleChannels/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/saleChannels/Create.vue`
- `src/bulma/pages/saleChannels/Edit.vue`
- `src/bulma/pages/saleChannels/Index.vue`
## Routes

Sale Channels ships the following named route entries:

- `administration.saleChannels.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/administration/saleChannels/create.js`
- `administration.saleChannels.edit`
  Path fragment: `:saleChannel/edit`
  Route file: `src/bulma/routes/administration/saleChannels/edit.js`
- `administration.saleChannels.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/administration/saleChannels/index.js`
## Companion Backend Package

- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/sale-channels/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/sale-channels/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:16 PM</div>
</div>
