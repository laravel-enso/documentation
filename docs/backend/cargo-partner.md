---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Cargo Partner

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cargo-partner/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.5.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cargo-partner/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/cargo-partner/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cargo-partner/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cargo-partner/-/merge_requests)

## Description

Cargo Partner integrates Enso sales, purchases, stock, and fulfilment flows with the Cargo Partner API.

The package stores the remote credentials and warehouse mapping, exposes settings and product integration endpoints, registers an inventory fulfilment provider, and keeps open orders synchronized with the remote platform.

It is intended for private deployments that need Cargo Partner as an external fulfilment or stock source.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations after installation:

```bash
php artisan migrate
```

Then configure the integration from the Cargo Partner settings screen. The settings record stores:

- base URL
- client credentials
- login credentials
- warehouse and virtual position mapping
- operative label
- enabled flag

In production, the package schedules remote order synchronization every 30 minutes when the integration is enabled.

## Features

- Settings API for enabling the integration and storing encrypted credentials.
- Product actions for publish, update, and stock checks.
- Inventory fulfilment provider for both sales and purchases.
- Cached access token handling per API version.
- Scheduled synchronization for open sales and purchases.

## Usage

Enable the integration from the settings form before using the fulfilment flow.

Products can be published to Cargo Partner through the registered product integration actions, while sales and purchases are fulfilled through the inventory fulfilment pipeline.

To trigger a manual remote refresh for open orders:

```bash
php artisan enso:cargo-partner:fetch-order-updates
```

The package exposes helper methods such as:

- `LaravelEnso\\CargoPartner\\Models\\Sale::fulfill()`
- `LaravelEnso\\CargoPartner\\Models\\Purchase::fulfill()`
- `LaravelEnso\\CargoPartner\\Models\\Product::publish()`

## API

### HTTP routes

Settings:

- `GET api/integrations/cargoPartner/settings`
- `PATCH api/integrations/cargoPartner/settings/{settings}`

Products:

- `GET api/integrations/cargoPartner/products/{product}/checkStock`
- `POST api/integrations/cargoPartner/products/{product}/publish`
- `PATCH api/integrations/cargoPartner/products/{product}/update`

### Artisan commands

- `enso:cargo-partner:fetch-order-updates`

Behavior:

- iterates open Cargo Partner sales
- iterates open Cargo Partner purchases
- dispatches the sync flow for each order

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)

Runtime companion packages:

- [`laravel-enso/commercial`](https://docs.laravel-enso.com/backend/commercial.html) [↗](https://git.xtelecom.ro/laravel-enso/commercial)
- [`laravel-enso/inventory`](https://docs.laravel-enso.com/backend/inventory.html) [↗](https://git.xtelecom.ro/laravel-enso/inventory)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)

Companion frontend package:

- [`@enso-ui/cargo-partner`](https://docs.laravel-enso.com/frontend/cargo-partner.html) [↗](https://git.xtelecom.ro/enso-ui/cargo-partner)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/cargo-partner/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:05:18 PM</div>
</div>
