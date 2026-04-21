---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Frisbo

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/frisbo/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.5-2563eb.svg)](https://git.xtelecom.ro/enso-ui/frisbo/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/frisbo)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/frisbo/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/frisbo/-/merge_requests)

## Description

Frisbo provides the integration settings page and the order-side widgets used to inspect Frisbo stock and refresh order state.

## Installation

This package is distributed through the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- registers the `/integrations/frisbo/settings` route module
- ships the backend-driven settings form page
- includes reusable `Action`, `Actions`, and `Order` components for Frisbo-aware product and order flows
- integrates stock checks and order refresh actions into higher-level commercial pages

## Usage

```js
import frisboRoutes from '@enso-ui/frisbo/src/bulma/routes/integrations/frisbo.js';
import Order from '@enso-ui/frisbo/src/bulma/components/Order.vue';
import Actions from '@enso-ui/frisbo/src/bulma/components/Actions.vue';
```

## API

### Route modules

Common imports:
- `@enso-ui/frisbo/src/bulma/routes/integrations.js`
- `@enso-ui/frisbo/src/bulma/routes/integrations/frisbo.js`
- `@enso-ui/frisbo/src/bulma/routes/integrations/frisbo/settings.js`
- `@enso-ui/frisbo/src/bulma/pages/integrations/settings/Index.vue`

### Reusable components

- `Action.vue` renders the shared loading/disabled button shell.
- `Actions.vue` shows the stock/status action popover for Frisbo-linked products.
- `Order.vue` refreshes Frisbo order state from a commercial order editor.

## Routes

### `/integrations/frisbo/settings`

Route name:
- `integrations.frisbo.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

## Companion Backend Package

- [`laravel-enso/frisbo`](https://docs.laravel-enso.com/backend/frisbo.html) [↗](https://git.xtelecom.ro/laravel-enso/frisbo)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/mixins`](https://docs.laravel-enso.com/frontend/mixins.html) [↗](https://github.com/enso-ui/mixins)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/frisbo/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/frisbo/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:34:45 PM</div>
</div>
