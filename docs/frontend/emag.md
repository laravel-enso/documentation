---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Emag

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/emag/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-6.3.7-2563eb.svg)](https://git.xtelecom.ro/enso-ui/emag/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/emag)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/emag/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/emag/-/merge_requests)

## Description

Emag provides the Enso UI pages and widgets used for Emag integration settings, product publishing, offer management, and order triage.

The package mixes routed settings pages with deep-import catalog and commercial modules that surface Emag-specific filters, offer actions, product matches, and quarantined orders.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- exports the Emag settings page as the package main entry
- ships the `/integrations/emag/settings` route module
- provides deep-import pages for product listing, product editing, and commercial sales with Emag-specific tooling
- exposes reusable offer widgets such as `Emag` and `QuarantinedOrders`

## Usage

```js
import EmagSettings from '@enso-ui/emag';
import EmagProductsIndex from '@enso-ui/emag/src/bulma/pages/products/Index.vue';
import EmagProductEdit from '@enso-ui/emag/src/bulma/pages/products/Edit.vue';
import QuarantinedOrders from '@enso-ui/emag/src/bulma/components/QuarantinedOrders.vue';
```

The package is primarily page-oriented. Applications usually consume the routed settings page plus deep-import product and sales modules under `src/bulma`.

## API

### `Index`

Default export for the integration settings page.

Import: `@enso-ui/emag`

Props:
- No public props.

Events:
- No public emits.

### `Emag`

Offer-status dropdown and action widget used in product tables.

Import: `@enso-ui/emag/src/bulma/components/Emag.vue`

Props:
- `product: object` required

### `QuarantinedOrders`

Popover widget that loads and resolves quarantined Emag orders.

Import: `@enso-ui/emag/src/bulma/components/QuarantinedOrders.vue`

Props:
- No public props.

### Additional page modules

- `src/bulma/pages/products/Index.vue`
- `src/bulma/pages/products/Edit.vue`
- `src/bulma/pages/commercial/sales/Index.vue`

## Routes

### `/integrations/emag/settings`

Route name:
- `integrations.emag.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

### Deep-import page modules

- `src/bulma/pages/products/Index.vue` adds Emag offer filters and widgets on top of the products table
- `src/bulma/pages/products/Edit.vue` extends the product edit flow with stock, comments, and documents tabs
- `src/bulma/pages/commercial/sales/Index.vue` adds channel, status, user, product, and quarantined-order controls for Emag sales monitoring

## Companion Backend Package

- [`laravel-enso/emag`](https://docs.laravel-enso.com/backend/emag.html) [↗](https://git.xtelecom.ro/laravel-enso/emag)

The backend companion provides the routes, forms, product tables, integration settings, offer actions, and order endpoints consumed by the frontend package.

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/commercial`](https://docs.laravel-enso.com/frontend/commercial.html) [↗](https://git.xtelecom.ro/enso-ui/commercial)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/inventory`](https://docs.laravel-enso.com/frontend/inventory.html) [↗](https://git.xtelecom.ro/enso-ui/inventory)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/products`](https://docs.laravel-enso.com/frontend/products.html) [↗](https://github.com/enso-ui/products)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/emag/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/emag/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:43:48 AM</div>
</div>
