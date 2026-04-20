---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# eMag

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/emag/-/blob/master/LICENSE)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/emag/-/blob/master/composer.json)

## Description

eMag integrates Enso catalog, offer, order, pricing, and fulfilment flows with the eMag marketplace.

The package stores integration settings and courier-account configuration, synchronizes remote categories and commissions, publishes or matches local products as eMag offers, reacts to order callbacks, creates and updates local eMag order records, and supports invoice upload plus AWB generation.

It is a private marketplace integration package intended for Enso deployments that operate on eMag.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

The package also publishes backend client assets into the host application:

```bash
php artisan vendor:publish --tag=emag-assets
```

In production, when the integration is enabled, the package schedules:

- `enso:emag:generate-awbs` daily at `07:00` when AWB scheduling is enabled in commercial settings
- `enso:emag:order-fallback` every 15 minutes

## Features

- Encrypted settings for API credentials, company, sale channel, and warehouse/contact metadata.
- Offer actions for activate, deactivate, upload, download, manual/automatic pricing, picture download, match publishing, and new-product publishing.
- Order processing with acknowledgement, synchronization, invoice upload, AWB generation, quarantined order flows, and signed invoice serving.
- Callback endpoints for AWBs, orders, returns, cancellations, and newly available products.
- Commands for enabling/disabling the API and syncing categories, commissions, courier accounts, and AWBs.

## Usage

The package centers on two core models:

- `LaravelEnso\\Emag\\Models\\Offer`
- `LaravelEnso\\Emag\\Models\\Order`

Useful offer actions:

- `activate()`
- `deactivate()`
- `upload()`
- `download()`
- `downloadPictures()`
- `updateMeasurements()`
- `syncCommission()`
- `publishMatch(Product $product, $pnk)`
- `publishNew(Product $product)`

Useful order actions:

- `acknowledge()`
- `sync()`
- `generateAWB()`
- `uploadInvoice()`
- `process(int $id)`

Operational commands:

```bash
php artisan enso:emag:api-up
php artisan enso:emag:api-down
php artisan enso:emag:sync-categories
php artisan enso:emag:sync-commissions --only-missing
php artisan enso:emag:sync-courier-accounts
php artisan enso:emag:generate-awbs
php artisan enso:emag:order-fallback
php artisan enso:emag:quarantined-orders
```

## API

### HTTP routes

Settings:

- `GET api/integrations/emag/settings/index`
- `PATCH api/integrations/emag/settings/{settings}`

Courier accounts:

- `GET api/integrations/emag/courierAccounts/options`

Offers:

- `PATCH api/integrations/emag/offers/{offer}/activate`
- `PATCH api/integrations/emag/offers/{offer}/deactivate`
- `PATCH api/integrations/emag/offers/{offer}/upload`
- `PATCH api/integrations/emag/offers/{offer}/download`
- `PATCH api/integrations/emag/offers/{offer}/manual`
- `PATCH api/integrations/emag/offers/{offer}/automatic`
- `POST api/integrations/emag/offers/{offer}/downloadPictures`
- `POST api/integrations/emag/offers/{offer}/updateMeasurements`
- `POST api/integrations/emag/offers/{product}/publishMatch`
- `POST api/integrations/emag/offers/{product}/publishNew`
- `POST api/integrations/emag/offers/{product}/match`

Orders:

- `GET api/integrations/emag/orders/{order}/show`
- `GET api/integrations/emag/orders/{order}/url`
- `POST api/integrations/emag/orders/{order}/invoice`
- `POST api/integrations/emag/orders/{order}/awb`
- `GET api/integrations/emag/orders/{order}/awbs`
- `GET api/integrations/emag/orders/quarantined`
- `PATCH api/integrations/emag/orders/quarantined/{order}`

Callbacks:

- `GET api/emag/callbacks/awb/{awb}`
- `GET api/emag/callbacks/order/{order}`
- `GET api/emag/callbacks/return/{order}`
- `GET api/emag/callbacks/cancel/{order}`
- `GET api/emag/callbacks/product/{product}`

Web:

- `GET integrations/emag/orders/{order}/invoice`

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- [`laravel-enso/commercial`](https://docs.laravel-enso.com/backend/commercial.html) [↗](https://git.xtelecom.ro/laravel-enso/commercial)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/discounts`](https://docs.laravel-enso.com/backend/discounts.html) [↗](https://git.xtelecom.ro/laravel-enso/discounts)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)
- [`laravel-enso/services`](https://docs.laravel-enso.com/backend/services.html) [↗](https://github.com/laravel-enso/services)
- [`laravel-enso/unit-conversion`](https://docs.laravel-enso.com/backend/unit-conversion.html) [↗](https://git.xtelecom.ro/laravel-enso/unit-conversion)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/emag/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 1:17:36 PM</div>
</div>
