---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Typesense

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/typesense/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.3.2-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/typesense)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/typesense.svg)](https://www.npmjs.com/package/@enso-ui/typesense)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/typesense)
[![Issues](https://img.shields.io/github/issues/enso-ui/typesense.svg)](https://github.com/enso-ui/typesense/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/typesense.svg)](https://github.com/enso-ui/typesense/pulls)
## Description
Typesense integration settings page for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/typesense
```
## Features
- ships route-aware page modules consumed by the Enso application shell
- includes index/list pages backed by Enso tables, forms, or integration settings
## Usage
```vue
<script setup>
import Index from '@enso-ui/typesense/src/bulma/pages/integrations/settings/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/integrations/settings/Index.vue`
## Routes

Typesense ships the following named route entries:

- `integrations.typesense.settings.index`
  Path fragment: `settings`
  Route file: `src/bulma/routes/integrations/typesense/settings.js`
## Companion Backend Package

- [`laravel-enso/typesense`](https://docs.laravel-enso.com/backend/typesense.html) [↗](https://github.com/laravel-enso/typesense)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/typesense/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/typesense/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:24:50 PM</div>
</div>
