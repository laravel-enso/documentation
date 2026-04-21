---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Commercial

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/commercial/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-8.0.12-2563eb.svg)](https://git.xtelecom.ro/enso-ui/commercial/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/commercial)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/commercial/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/commercial/-/merge_requests)

## Description

Commercial operations pages and reusable inventory components for Enso UI.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- ships the route modules for sales, sale returns, purchases, purchase returns, audit, and settings
- exposes page modules for list and edit flows across the main commercial documents
- includes reusable deep-import building blocks such as `DetailedStock`, `PositionsManager`, and document-specific editor components
- coordinates large backend-driven forms, tables, filters, comments, documents, quick views, charts, and state transitions inside the Enso shell

## Usage

```js
import SalesIndex from '@enso-ui/commercial/src/bulma/pages/sales/Index.vue';
import SaleEdit from '@enso-ui/commercial/src/bulma/pages/sales/Edit.vue';
import DetailedStock from '@enso-ui/commercial/src/bulma/components/DetailedStock.vue';
import PositionsManager from '@enso-ui/commercial/src/bulma/components/inventory/PositionsManager.vue';
```

The package is page-oriented. Enso applications usually consume the route pages and reusable building blocks through the shipped deep-import paths under `src/bulma`.

## API

### Route pages

The practical public surface is page-oriented and centered on deep imports.

Common imports:
- `@enso-ui/commercial/src/bulma/pages/sales/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/sales/Edit.vue`
- `@enso-ui/commercial/src/bulma/pages/saleReturns/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/saleReturns/Edit.vue`
- `@enso-ui/commercial/src/bulma/pages/purchases/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/purchases/Edit.vue`
- `@enso-ui/commercial/src/bulma/pages/purchaseReturns/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/purchaseReturns/Edit.vue`
- `@enso-ui/commercial/src/bulma/pages/audit/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/settings/Index.vue`
- `@enso-ui/commercial/src/bulma/pages/stats/Index.vue`

### Reusable deep-import components

Common imports:
- `DetailedStock`
- `PositionsManager`
- `Reservations`
- document editor components under `src/bulma/pages/*/components`

## Routes

### `/commercial/sales`

Route names:
- `commercial.sales.index`
- `commercial.sales.edit`

Pages:
- `src/bulma/pages/sales/Index.vue`
- `src/bulma/pages/sales/Edit.vue`

The sales list page combines Enso tables with channel, status, client, product, user, loss, and date filters. The edit page delegates the full document workflow to the `Sale` editor component.

### `/commercial/saleReturns`

Route names:
- `commercial.saleReturns.index`
- `commercial.saleReturns.edit`

Pages:
- `src/bulma/pages/saleReturns/Index.vue`
- `src/bulma/pages/saleReturns/Edit.vue`

### `/commercial/purchases`

Route names:
- `commercial.purchases.index`
- `commercial.purchases.edit`

Pages:
- `src/bulma/pages/purchases/Index.vue`
- `src/bulma/pages/purchases/Edit.vue`

The purchases index page combines supplier, status, product, user, inventory, and date filters on top of the backend table definition.

### `/commercial/purchaseReturns`

Route names:
- `commercial.purchaseReturns.index`
- `commercial.purchaseReturns.edit`

Pages:
- `src/bulma/pages/purchaseReturns/Index.vue`
- `src/bulma/pages/purchaseReturns/Edit.vue`

### `/commercial/audit`

Route name:
- `commercial.audit.index`

Page:
- `src/bulma/pages/audit/Index.vue`

The audit page combines stock, sale, sale return, purchase, and purchase return tables with product/client filters and a detailed-stock drilldown.

### `/commercial/settings`

Route name:
- `commercial.settings.index`

Page:
- `src/bulma/pages/settings/Index.vue`

The settings page is a backend-driven Enso form with AWB schedule tab visibility controlled at runtime.

### Additional page modules

- `src/bulma/pages/stats/Index.vue` exposes the dashboard/statistics page used with chart-backed order metrics.

## Companion Backend Package

- [`laravel-enso/commercial`](https://docs.laravel-enso.com/backend/commercial.html) [↗](https://git.xtelecom.ro/laravel-enso/commercial)

The backend package provides the routes, tables, forms, enum feeds, quick-view payloads, charts, and document workflows consumed by the frontend pages.

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/charts`](https://docs.laravel-enso.com/frontend/charts.html) [↗](https://github.com/enso-ui/charts)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/data-import`](https://docs.laravel-enso.com/frontend/data-import.html) [↗](https://github.com/enso-ui/data-import)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/typeahead`](https://docs.laravel-enso.com/frontend/typeahead.html) [↗](https://github.com/enso-ui/typeahead)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/commercial/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/commercial/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:11 AM</div>
</div>
