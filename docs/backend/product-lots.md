---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Product Lots

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-lots/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.4.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-lots/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/product-lots/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-lots/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-lots/-/merge_requests)

## Description

Product Lots adds batch and expiry tracking for products in Laravel Enso.

The package exposes a standard CRUD and table API for product lots and provides the lot model used by inventory flows to compute remaining stock per lot.

It is intended for inventory-driven applications that need traceable purchase lots, expiry-based filtering, and available quantity computation.

## Installation

Install the package:

```bash
composer require laravel-enso/product-lots
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Product lot CRUD, table init, table data, and Excel export endpoints.
- `Lot` model with `product()` and `inventoryIns()` relations.
- Computed `availableQuantity` accessor based on remaining inbound inventory.
- Date scopes for `expiresAfter()` and `expiresBefore()`.
- Rememberable cache keys for lot `id` and `code`.

## Usage

Main route group:

- `administration.productLots.*`

Lots are linked to products and are later consumed by inventory flows that record inbound quantities against a given lot.

Useful model helpers:

```php
$lot->availableQuantity();
Lot::query()->expiresBefore(now()->addMonth());
```

## API

### HTTP routes

- `GET api/administration/productLots`
- `GET api/administration/productLots/create`
- `POST api/administration/productLots`
- `GET api/administration/productLots/{lot}/edit`
- `PATCH api/administration/productLots/{lot}`
- `DELETE api/administration/productLots/{lot}`
- `GET api/administration/productLots/initTable`
- `GET api/administration/productLots/tableData`
- `GET api/administration/productLots/exportExcel`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)

Companion frontend package:

- [`@enso-ui/product-lots`](https://docs.laravel-enso.com/frontend/product-lots.html) [↗](https://git.xtelecom.ro/enso-ui/product-lots)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/product-lots/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:23 PM</div>
</div>
