---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Inventory

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/inventory/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.6.2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/inventory/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/inventory/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-6-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/inventory/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/inventory/-/merge_requests)

## Description

Inventory manages Enso warehouses, storage positions, labels, stock reservations, and availability calculations.

The package exposes CRUD flows for warehouses and positions, position move and product-location endpoints, label indexes and options, and a server-side inventory service that handles insert, move, reserve, fulfill, swap, cancel, and stock-update operations.

It is intended for private Enso deployments that need warehouse and stock-control workflows tied to commercial documents.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=inventory-factories
php artisan vendor:publish --tag=inventory-import-template
```

## Features

- Warehouse CRUD, table, export, and options endpoints.
- Position CRUD, table, export, product lookup, and stock-move endpoints.
- Label index and options endpoints.
- Import template for warehouse position onboarding.
- Inventory service methods for insert, undo insert, move, fulfill, undo fulfill, reserve, swap, cancel, and stock refresh operations.

## Usage

The package mounts its routes under:

- `inventory.warehouses.*`
- `inventory.positions.*`
- `inventory.labels.*`

Use the service for stock operations:

```php
use LaravelEnso\Inventory\Services\Inventory;

Inventory::reserve($orderLine, 5);
Inventory::move($product, $fromPosition, $toPosition, 2);
```

## API

### HTTP routes

Warehouses:

- `GET api/inventory/warehouses/create`
- `POST api/inventory/warehouses`
- `GET api/inventory/warehouses/{warehouse}/edit`
- `PATCH api/inventory/warehouses/{warehouse}`
- `DELETE api/inventory/warehouses/{warehouse}`
- `GET api/inventory/warehouses/initTable`
- `GET api/inventory/warehouses/tableData`
- `GET api/inventory/warehouses/exportExcel`
- `GET api/inventory/warehouses/options`

Positions:

- `GET api/inventory/positions/create`
- `POST api/inventory/positions`
- `GET api/inventory/positions/{position}/edit`
- `PATCH api/inventory/positions/{position}`
- `DELETE api/inventory/positions/{position}`
- `GET api/inventory/positions/initTable`
- `GET api/inventory/positions/tableData`
- `GET api/inventory/positions/exportExcel`
- `GET api/inventory/positions/show`
- `GET api/inventory/positions/{product}/{warehouse?}`
- `POST api/inventory/positions/move/{product}/{from}/{to}`

Labels:

- `GET api/inventory/labels`
- `GET api/inventory/labels/options`

### Service surface

- `Inventory::insert()`
- `Inventory::undoInsert()`
- `Inventory::move()`
- `Inventory::fulfill()`
- `Inventory::undoFulfill()`
- `Inventory::reserve()`
- `Inventory::swapReservations()`
- `Inventory::cancelReservation()`
- `Inventory::supplementInReservations()`
- `Inventory::supplementProductReservations()`
- `Inventory::available()`
- `Inventory::reservedQuantity()`
- `Inventory::locations()`
- `Inventory::positionsQuantity()`
- `Inventory::remainingQuantity()`
- `Inventory::updateStock()`

## Depends On

Required Enso packages:

- [`laravel-enso/addresses`](https://docs.laravel-enso.com/backend/addresses.html) [↗](https://github.com/laravel-enso/addresses)
- [`laravel-enso/commercial`](https://docs.laravel-enso.com/backend/commercial.html) [↗](https://git.xtelecom.ro/laravel-enso/commercial)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/product-lots`](https://docs.laravel-enso.com/backend/product-lots.html) [↗](https://git.xtelecom.ro/laravel-enso/product-lots)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/inventory`](https://docs.laravel-enso.com/frontend/inventory.html) [↗](https://git.xtelecom.ro/enso-ui/inventory)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/inventory/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:09:20 PM</div>
</div>
