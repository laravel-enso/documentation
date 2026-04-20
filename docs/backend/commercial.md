---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Commercial

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/commercial/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.18.5-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/commercial/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/commercial/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/commercial/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/commercial/-/merge_requests)

## Description

Commercial is the Enso business-flow package for purchases, sales, returns, inventory-side adjustments, and operational order documents.

The package exposes full API flows for purchases, purchase returns, sales, and sale returns, adds stock-adjustment and stock-audit endpoints on top of the inventory and product stacks, publishes printable order and note templates, sends operational notifications, and schedules recurring stock-value, stock-rotation, supplier-order, and expiring-lot maintenance jobs in production.

It is designed for private Enso deployments that need transactional commercial operations on top of the broader inventory, financials, and product ecosystem.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=commercial-factories
php artisan vendor:publish --tag=commercial-views
```

The package also expects the matching frontend package in applications that render the commercial UI:

```bash
yarn add @enso-ui/commercial
```

## Features

- Purchase, sale, purchase-return, and sale-return CRUD and lifecycle endpoints.
- Inventory-side stock adjustments, reservation lookups, stock-audit views, and per-product stock details.
- Printable purchase orders, goods-received notes, delivery notes, stock-removal documents, and related email flows.
- Invoice, payment, bundle, voucher, and line-item support inside the commercial order flows.
- Scheduled stock-value updates, stock-rotation refreshes, default-supplier recalculation, supplier-order generation, and expiring-lot notifications.

## Usage

The package is mounted automatically through its service providers and route files once installed.

In production it schedules these maintenance commands:

```bash
php artisan enso:commercial:update-stock-values --daily
php artisan enso:commercial:update-stock-rotation --daily
php artisan enso:commercial:generate-supplier-orders
php artisan enso:commercial:expiring-lots-notification
php artisan enso:commercial:update-default-supplier
```

Automatic supplier-order generation runs only when `Settings::autoRestock()` is enabled, while expiring-lot notifications are scheduled only when product lots exist.

Commercial also registers observers for sale-status transitions and inventory stock updates, so order-state and stock-side calculations stay synchronized with the rest of the Enso domain.

## API

### Main route groups

Mounted under `api/commercial`:

- `partner`
- `products`
- `services`
- `addresses`
- `purchases.*`
- `purchaseReturns.*`
- `sales.*`
- `saleReturns.*`
- `audit.*`
- `stats.orders`
- `settings.*`

Mounted outside the commercial prefix:

- `inventory.adjust`
- `inventory.reservations`
- `inventory.updateAdjustmentOrders`
- `products.stocks.details`

### Order lifecycle endpoints

Purchases include transitions such as:

- `confirm`
- `ship`
- `receive`
- `fulfill`
- `finalize`
- `cancel`

Sales include transitions such as:

- `fulfill`
- `prepare`
- `ship`
- `deliver`
- `finalize`
- `cancel`

Purchase returns and sale returns expose the equivalent reverse-flow lifecycle endpoints plus printable document endpoints and email actions.

### Artisan commands

- `enso:commercial:update-stock-values {--daily}`
- `enso:commercial:update-stock-rotation {--daily}`
- `enso:commercial:generate-supplier-orders`
- `enso:commercial:expiring-lots-notification`
- `enso:commercial:update-default-supplier`

## Depends On

Required Enso packages:

- [`laravel-enso/addresses`](https://docs.laravel-enso.com/backend/addresses.html) [↗](https://github.com/laravel-enso/addresses)
- [`laravel-enso/comments`](https://docs.laravel-enso.com/backend/comments.html) [↗](https://github.com/laravel-enso/comments)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)
- [`laravel-enso/discounts`](https://docs.laravel-enso.com/backend/discounts.html) [↗](https://git.xtelecom.ro/laravel-enso/discounts)
- [`laravel-enso/documents`](https://docs.laravel-enso.com/backend/documents.html) [↗](https://github.com/laravel-enso/documents)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/financials`](https://docs.laravel-enso.com/backend/financials.html) [↗](https://git.xtelecom.ro/laravel-enso/financials)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/history-tracker`](https://docs.laravel-enso.com/backend/history-tracker.html) [↗](https://github.com/laravel-enso/history-tracker)
- [`laravel-enso/inventory`](https://docs.laravel-enso.com/backend/inventory.html) [↗](https://git.xtelecom.ro/laravel-enso/inventory)
- [`laravel-enso/measurement-units`](https://docs.laravel-enso.com/backend/measurement-units.html) [↗](https://git.xtelecom.ro/laravel-enso/measurement-units)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/pdf`](https://docs.laravel-enso.com/backend/pdf.html) [↗](https://github.com/laravel-enso/pdf)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)
- [`laravel-enso/searchable`](https://docs.laravel-enso.com/backend/searchable.html) [↗](https://git.xtelecom.ro/laravel-enso/searchable)
- [`laravel-enso/services`](https://docs.laravel-enso.com/backend/services.html) [↗](https://git.xtelecom.ro/laravel-enso/services)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/versions`](https://docs.laravel-enso.com/backend/versions.html) [↗](https://github.com/laravel-enso/versions)
- [`laravel-enso/vouchers`](https://docs.laravel-enso.com/backend/vouchers.html) [↗](https://git.xtelecom.ro/laravel-enso/vouchers)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/commercial/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitLab</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 5:32:00 PM</div>
</div>
