---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Inventory

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/inventory/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.6-2563eb.svg)](https://git.xtelecom.ro/enso-ui/inventory/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/inventory)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/inventory/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/inventory/-/merge_requests)

## Description

Inventory ships the frontend route tree for warehouse, position, and label administration together with reusable stock-management components.

## Installation

This package is distributed through the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- registers route groups for warehouse, position, and label management under `/inventory`
- ships `index`, `create`, and `edit` pages for positions and warehouses, plus the labels listing page
- includes reusable stock-management components such as `ProductLocations`, `PositionsManager`, `Editor`, `EditorLine`, `Lines`, `MoveLine`, and `Mover`
- adds product-side integrations such as `pages/products/Index.vue`, `pages/products/Edit.vue`, and the `Suppliers` helper

## Usage

```js
import inventoryRoutes from '@enso-ui/inventory/src/bulma/routes/inventory.js';
import WarehousesIndex from '@enso-ui/inventory/src/bulma/pages/inventory/warehouses/Index.vue';
import PositionsManager from '@enso-ui/inventory/src/bulma/components/PositionsManager.vue';
```

## API

### Route modules

Common imports:
- `@enso-ui/inventory/src/bulma/routes/inventory.js`
- `@enso-ui/inventory/src/bulma/routes/inventory/warehouses.js`
- `@enso-ui/inventory/src/bulma/routes/inventory/positions.js`
- `@enso-ui/inventory/src/bulma/routes/inventory/labels.js`

### Page modules

Warehouse pages:
- `pages/inventory/warehouses/Index.vue`
- `pages/inventory/warehouses/Create.vue`
- `pages/inventory/warehouses/Edit.vue`

Position pages:
- `pages/inventory/positions/Index.vue`
- `pages/inventory/positions/Create.vue`
- `pages/inventory/positions/Edit.vue`

Label pages:
- `pages/inventory/labels/Index.vue`

Product integrations:
- `pages/products/Index.vue`
- `pages/products/Edit.vue`
- `pages/products/components/Suppliers.vue`

### Reusable components

Stable deep imports used by higher-level packages:
- `ProductLocations.vue`
- `PositionsManager.vue`
- `Editor.vue`
- `EditorLine.vue`
- `Lines.vue`
- `MoveLine.vue`
- `Mover.vue`

## Routes

### `/inventory/warehouses`
- `inventory.warehouses.index`
- `inventory.warehouses.create`
- `inventory.warehouses.edit`

### `/inventory/positions`
- `inventory.positions.index`
- `inventory.positions.create`
- `inventory.positions.edit`

### `/inventory/labels`
- `inventory.labels.index`

## Companion Backend Package

- [`laravel-enso/inventory`](https://docs.laravel-enso.com/backend/inventory.html) [↗](https://git.xtelecom.ro/laravel-enso/inventory)

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/addresses`](https://docs.laravel-enso.com/frontend/addresses.html) [↗](https://github.com/enso-ui/addresses)
- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/data-import`](https://docs.laravel-enso.com/frontend/data-import.html) [↗](https://github.com/enso-ui/data-import)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/inventory/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/inventory/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:34:45 PM</div>
</div>
