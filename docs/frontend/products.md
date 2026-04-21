---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Products

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/products/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.4.9-2563eb.svg)](https://git.xtelecom.ro/enso-ui/products/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/products)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/products/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/products/-/merge_requests)
## Description
Product management pages and editor helpers for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
- ships reusable page-specific building blocks through deep-import component paths
## Usage
```vue
<script setup>
import Create from '@enso-ui/products/src/bulma/pages/products/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/products/Create.vue`
- `src/bulma/pages/products/Edit.vue`
- `src/bulma/pages/products/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/products/components/BaseForm.vue`
- `src/bulma/pages/products/components/Bundle.vue`
- `src/bulma/pages/products/components/Documents.vue`
- `src/bulma/pages/products/components/Gallery.vue`
- `src/bulma/pages/products/components/StoredPicture.vue`
- `src/bulma/pages/products/components/Supplier.vue`
- `src/bulma/pages/products/components/TemporaryPicture.vue`
## Routes

Products ships the following named route entries:

- `products.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/products/create.js`
- `products.edit`
  Path fragment: `:product/edit`
  Route file: `src/bulma/routes/products/edit.js`
- `products.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/products/index.js`
## Companion Backend Package

- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/products/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/products/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:12:38 PM</div>
</div>
