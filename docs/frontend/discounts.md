---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Discounts

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/discounts/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.5-2563eb.svg)](https://git.xtelecom.ro/enso-ui/discounts/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/discounts)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/discounts/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/discounts/-/merge_requests)

## Description

Discounts ships the Enso UI route tree and page modules used to manage client and supplier discount rules.

It covers the full backend-driven discount workflow for general, product, and service discounts, with dedicated list, create, and edit screens for both client and supplier contexts.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- exports the `/discounts` route tree consumed by the Enso shell
- ships separate client and supplier discount flows
- covers general, product, and service discount families
- reuses a shared Enso form wrapper to enforce mutually exclusive company/person selection on client forms

## Usage

```js
import discountsRoutes from '@enso-ui/discounts';
import ClientDiscountIndex from '@enso-ui/discounts/src/bulma/pages/discounts/clients/Index.vue';
import SupplierProductDiscountEdit from '@enso-ui/discounts/src/bulma/pages/discounts/suppliers/products/Edit.vue';
```

The package is page-oriented. Applications usually register the route tree and let the backend forms and tables drive the create/edit/index pages.

## API

### Default export

Default export for the discount route group.

Import: `@enso-ui/discounts`

### Shared form building block

- `src/bulma/pages/discounts/clients/components/BaseForm.vue`

Wraps `EnsoForm` and toggles the `company_id` and `person_id` fields so only one client target can be selected at a time.

## Routes

### `/discounts/clients`

Route names:
- `discounts.clients.index`
- `discounts.clients.generals.create`
- `discounts.clients.generals.edit`
- `discounts.clients.products.create`
- `discounts.clients.products.edit`
- `discounts.clients.services.create`
- `discounts.clients.services.edit`

Pages:
- `src/bulma/pages/discounts/clients/Index.vue`
- `src/bulma/pages/discounts/clients/generals/Create.vue`
- `src/bulma/pages/discounts/clients/generals/Edit.vue`
- `src/bulma/pages/discounts/clients/products/Create.vue`
- `src/bulma/pages/discounts/clients/products/Edit.vue`
- `src/bulma/pages/discounts/clients/services/Create.vue`
- `src/bulma/pages/discounts/clients/services/Edit.vue`

### `/discounts/suppliers`

Route names:
- `discounts.suppliers.index`
- `discounts.suppliers.generals.create`
- `discounts.suppliers.generals.edit`
- `discounts.suppliers.products.create`
- `discounts.suppliers.products.edit`
- `discounts.suppliers.services.create`
- `discounts.suppliers.services.edit`

Pages:
- `src/bulma/pages/discounts/suppliers/Index.vue`
- `src/bulma/pages/discounts/suppliers/generals/Create.vue`
- `src/bulma/pages/discounts/suppliers/generals/Edit.vue`
- `src/bulma/pages/discounts/suppliers/products/Create.vue`
- `src/bulma/pages/discounts/suppliers/products/Edit.vue`
- `src/bulma/pages/discounts/suppliers/services/Create.vue`
- `src/bulma/pages/discounts/suppliers/services/Edit.vue`

## Companion Backend Package

- [`laravel-enso/discounts`](https://docs.laravel-enso.com/backend/discounts.html) [↗](https://git.xtelecom.ro/laravel-enso/discounts)

The backend companion provides the route contracts, form payloads, and table definitions consumed by these discount pages.

## Depends On

- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/discounts/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/discounts/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:51:25 AM</div>
</div>
