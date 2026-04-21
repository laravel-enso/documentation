---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Webshop

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/webshop/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.3-2563eb.svg)](https://git.xtelecom.ro/enso-ui/webshop/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/webshop)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/webshop/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/webshop/-/merge_requests)
## Description
Webshop administration pages for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
- ships reusable page-specific building blocks through deep-import component paths
## Usage
```vue
<script setup>
import Index from '@enso-ui/webshop/src/bulma/pages/brands/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/brands/Index.vue`
- `src/bulma/pages/carousel/Index.vue`
- `src/bulma/pages/menus/Index.vue`
- `src/bulma/pages/reviews/Edit.vue`
- `src/bulma/pages/reviews/Index.vue`
- `src/bulma/pages/settings/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/brands/components/Brand.vue`
- `src/bulma/pages/brands/components/Controls.vue`
- `src/bulma/pages/brands/components/Form.vue`
- `src/bulma/pages/carousel/components/Slide.vue`
- `src/bulma/pages/carousel/components/SlideTree.vue`
- `src/bulma/pages/carousel/components/Slides.vue`
- `src/bulma/pages/menus/components/MenuItem.vue`
- `src/bulma/pages/menus/components/MenuTree.vue`
- `src/bulma/pages/menus/components/Menus.vue`
- `src/bulma/pages/reviews/components/Filters.vue`
## Routes

Webshop ships the following named route entries:

- `webshop.brands.index`
  Path fragment: `brands`
  Route file: `src/bulma/routes/webshop/brands.js`
- `webshop.carousel.index`
  Path fragment: `carousel`
  Route file: `src/bulma/routes/webshop/carousel.js`
- `webshop.menus.index`
  Path fragment: `menus`
  Route file: `src/bulma/routes/webshop/menus.js`
- `webshop.reviews.edit`
  Path fragment: `:review/edit`
  Route file: `src/bulma/routes/webshop/reviews/edit.js`
- `webshop.reviews.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/webshop/reviews/index.js`
- `webshop.settings.index`
  Path fragment: `settings`
  Route file: `src/bulma/routes/webshop/settings.js`
## Companion Backend Package

- [`laravel-enso/webshop`](https://docs.laravel-enso.com/backend/webshop.html) [↗](https://git.xtelecom.ro/laravel-enso/webshop)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/webshop/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/webshop/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:15:01 PM</div>
</div>
