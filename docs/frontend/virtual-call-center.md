---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Virtual Call Center

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/virtual-call-center/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.2.3-2563eb.svg)](https://git.xtelecom.ro/enso-ui/virtual-call-center/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/virtual-call-center)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/virtual-call-center/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/virtual-call-center/-/merge_requests)
## Description
Virtual call center overview page for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Index from '@enso-ui/virtual-call-center/src/bulma/pages/virtualCallCenter/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/virtualCallCenter/Index.vue`
## Routes

Virtual Call Center ships the following named route entries:

- `virtualCallCenter.index`
  Path fragment: `/virtualCallCenter`
  Route file: `src/bulma/routes/index.js`
## Companion Backend Package

- [`laravel-enso/virtual-call-center`](https://docs.laravel-enso.com/backend/virtual-call-center.html) [↗](https://git.xtelecom.ro/laravel-enso/virtual-call-center)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/virtual-call-center/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/virtual-call-center/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:08:57 PM</div>
</div>
