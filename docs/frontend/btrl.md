---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# BTRL

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/btrl/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.0-2563eb.svg)](https://git.xtelecom.ro/enso-ui/btrl/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/btrl)
## Description
BTRL provides the Vue 3 admin surface for configuring the Banca Transilvania iPay integration inside the Enso application shell.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- exposes the BTRL Settings page backed by an Enso form
- registers the BTRL route group under the shared `integrations` area
- ships the `money-check` and `user-gear` icons used by the integration menu and settings page
## Usage
```vue
<script setup>
import Index from '@enso-ui/btrl/src/bulma/pages/integrations/btrl/settings/Index.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/integrations/btrl/settings/Index.vue`
## Routes

BTRL ships the following named route entries:

- `integrations.btrl.settings.index`
  Path fragment: `settings`
  Route file: `src/bulma/routes/integrations/btrl/settings.js`

The parent route group is registered at:

- `src/bulma/routes/integrations/btrl.js` → path: `btrl/`
- `src/bulma/routes/integrations.js` → registers the `btrl` group under `integrations/`
## Companion Backend Package

- [`laravel-enso/btrl`](https://git.xtelecom.ro/laravel-enso/btrl)

## Depends On
- `@enso-ui/forms` `^4.1.0` — Enso form renderer used by the Settings page
- `@enso-ui/ui` `^7.1.0` — router shell used by the integration route group
- `vue` `^3.x`
- `@fortawesome/fontawesome-svg-core` + `@fortawesome/free-solid-svg-icons`
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/btrl/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/btrl/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/26/2026, 8:41:40 AM</div>
</div>
