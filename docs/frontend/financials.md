---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Financials

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/financials/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.3.5-2563eb.svg)](https://git.xtelecom.ro/enso-ui/financials/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/financials)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/financials/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/financials/-/merge_requests)

## Description

Financials delivers the frontend route tree for client and supplier invoices, payments, and financial statistics inside Enso UI.

## Installation

This package is distributed through the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- ships the `/financials` route group for client and supplier invoices and payments
- exposes page modules for `index`, `create`, and `edit` flows across the financial documents
- includes reusable form helpers such as `BaseForm`, `ClientFilter`, and line/footer components
- provides a chart-backed statistics page under the same financial namespace

## Usage

```js
import financialsRoutes from '@enso-ui/financials/src/bulma/routes/financials.js';
import ClientInvoicesIndex from '@enso-ui/financials/src/bulma/pages/financials/clients/invoices/Index.vue';
import SupplierPaymentsEdit from '@enso-ui/financials/src/bulma/pages/financials/suppliers/payments/Edit.vue';
```

## API

### Route modules

The practical public surface is route- and page-oriented.

Common imports:
- `@enso-ui/financials/src/bulma/routes/financials.js`
- `@enso-ui/financials/src/bulma/routes/financials/clients.js`
- `@enso-ui/financials/src/bulma/routes/financials/suppliers.js`

### Page modules

Client pages:
- `clients/invoices/Index.vue`
- `clients/invoices/Create.vue`
- `clients/invoices/Edit.vue`
- `clients/payments/Index.vue`
- `clients/payments/Create.vue`
- `clients/payments/Edit.vue`

Supplier pages:
- `suppliers/invoices/Index.vue`
- `suppliers/invoices/Create.vue`
- `suppliers/invoices/Edit.vue`
- `suppliers/payments/Index.vue`
- `suppliers/payments/Create.vue`
- `suppliers/payments/Edit.vue`

Additional modules:
- `stats/Index.vue`
- reusable forms under `clients/*/BaseForm.vue`
- line and filter helpers under `clients/components`

## Routes

### `/financials/clients/invoices`
- `financials.clients.invoices.index`
- `financials.clients.invoices.create`
- `financials.clients.invoices.edit`

### `/financials/clients/payments`
- `financials.clients.payments.index`
- `financials.clients.payments.create`
- `financials.clients.payments.edit`

### `/financials/suppliers/invoices`
- `financials.suppliers.invoices.index`
- `financials.suppliers.invoices.create`
- `financials.suppliers.invoices.edit`

### `/financials/suppliers/payments`
- `financials.suppliers.payments.index`
- `financials.suppliers.payments.create`
- `financials.suppliers.payments.edit`

### Additional page modules
- `src/bulma/pages/financials/stats/Index.vue` for financial dashboards and summaries.

## Companion Backend Package

- [`laravel-enso/financials`](https://docs.laravel-enso.com/backend/financials.html) [↗](https://git.xtelecom.ro/laravel-enso/financials)

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/charts`](https://docs.laravel-enso.com/frontend/charts.html) [↗](https://github.com/enso-ui/charts)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/financials/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/financials/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:02 PM</div>
</div>
