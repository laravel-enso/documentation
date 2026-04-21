---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Discounts

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/discounts/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.5.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/discounts/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/discounts/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/discounts/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/discounts/-/merge_requests)

## Description

Discounts adds commercial discount management to Enso.

The package covers both client and supplier discounts, split into three discount families: general discounts, product discounts, and service discounts. Each family exposes its own CRUD and table endpoints, while the package also provides a small helper trait for filtering discounts by company or person clients.

It is intended for private Enso deployments that manage commercial pricing rules across products and services.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

The package exposes only the backend/API layer. Frontend integration is handled by the companion `@enso-ui/discounts` package.

## Features

- Client discount management for general, product, and service discounts.
- Supplier discount management for general, product, and service discounts.
- Datatable endpoints, Excel export endpoints, and selector endpoints for every discount family.
- `DiscountTypes` enum for classifying discount behavior.
- `HasClient` trait for filtering discounts by company or person client.

## Usage

Use the `HasClient` trait on discount-like queries that need to target a company or a person:

```php
use LaravelEnso\Discounts\Traits\HasClient;

class ClientProductDiscount extends Model
{
    use HasClient;
}
```

The package routes are grouped by target audience and discount type:

- `discounts.clients.generals.*`
- `discounts.clients.products.*`
- `discounts.clients.services.*`
- `discounts.suppliers.generals.*`
- `discounts.suppliers.products.*`
- `discounts.suppliers.services.*`

## API

### HTTP routes

Client discounts:

- `api/discounts/clients/generals/*`
- `api/discounts/clients/products/*`
- `api/discounts/clients/services/*`

Supplier discounts:

- `api/discounts/suppliers/generals/*`
- `api/discounts/suppliers/products/*`
- `api/discounts/suppliers/services/*`

Each family exposes:

- `create`
- `store`
- `edit`
- `update`
- `destroy`
- `initTable`
- `tableData`
- `exportExcel`
- `options`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)
- [`laravel-enso/services`](https://docs.laravel-enso.com/backend/services.html) [↗](https://github.com/laravel-enso/services)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Runtime companion packages:

- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/people`](https://docs.laravel-enso.com/backend/people.html) [↗](https://github.com/laravel-enso/people)

Companion frontend package:

- [`@enso-ui/discounts`](https://docs.laravel-enso.com/frontend/discounts.html) [↗](https://git.xtelecom.ro/enso-ui/discounts)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/discounts/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:11 PM</div>
</div>
