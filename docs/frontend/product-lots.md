---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Product Lots

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/product-lots/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.4-2563eb.svg)](https://git.xtelecom.ro/enso-ui/product-lots/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/product-lots)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/product-lots/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/product-lots/-/merge_requests)
## Description
Product lot administration pages for Enso UI.
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
import Create from '@enso-ui/product-lots/src/bulma/pages/administration/productLots/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/administration/productLots/Create.vue`
- `src/bulma/pages/administration/productLots/Edit.vue`
- `src/bulma/pages/administration/productLots/Index.vue`
## Routes

Product Lots ships the following named route entries:

- `administration.productLots.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/administration/productLots/create.js`
- `administration.productLots.edit`
  Path fragment: `:lot/edit`
  Route file: `src/bulma/routes/administration/productLots/edit.js`
- `administration.productLots.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/administration/productLots/index.js`
## Companion Backend Package

- [`laravel-enso/product-lots`](https://docs.laravel-enso.com/backend/product-lots.html) [↗](https://git.xtelecom.ro/laravel-enso/product-lots)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/product-lots/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/product-lots/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:12:37 PM</div>
</div>
