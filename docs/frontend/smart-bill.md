---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Smart Bill

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/smart-bill/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.2.3-2563eb.svg)](https://git.xtelecom.ro/enso-ui/smart-bill/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/smart-bill)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/smart-bill/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/smart-bill/-/merge_requests)
## Description
Smart Bill integration settings page for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Index from '@enso-ui/smart-bill/src/bulma/pages/integrations/settings/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/integrations/settings/Index.vue`
## Routes

Smart Bill ships the following named route entries:

- `integrations.smartBill.settings.index`
  Path fragment: `settings`
  Route file: `src/bulma/routes/integrations/smartBill/settings.js`
## Companion Backend Package

- [`laravel-enso/smart-bill`](https://docs.laravel-enso.com/backend/smart-bill.html) [↗](https://git.xtelecom.ro/laravel-enso/smart-bill)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/smart-bill/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/smart-bill/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:39 PM</div>
</div>
