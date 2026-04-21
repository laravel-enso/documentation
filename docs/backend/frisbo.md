---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Frisbo

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/frisbo/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.5.3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/frisbo/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/frisbo/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/frisbo/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/frisbo/-/merge_requests)

## Description

Frisbo integrates Enso sale-channel products and orders with the Frisbo fulfillment API.

The package exposes settings, order sync, product publish/update/unpublish, and stock-check endpoints, receives order callbacks, and schedules background commands for fulfillment retries and remote order updates.

It is intended for private Enso deployments that rely on Frisbo as an external logistics provider.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=frisbo-seeders
```

## Features

- Settings endpoint for enabling and configuring the Frisbo integration.
- Order details and remote sync endpoints.
- Product stock check, publish, update, and unpublish actions.
- Public callback endpoint for incoming order updates.
- Scheduled commands for retrying fulfilment and fetching remote order status changes.

## Usage

The integration routes are grouped under:

- `integrations.frisbo.settings.*`
- `integrations.frisbo.orders.*`
- `integrations.frisbo.products.*`
- `frisbo.callbacks.order`

When Frisbo is enabled in production, the package schedules:

- `enso:frisbo:retry-fulfillment` every 30 minutes
- `enso:frisbo:fetch-order-updates` every 30 minutes

## API

### HTTP routes

Callbacks:

- `POST api/frisbo/callbacks/order`

Authenticated integration routes:

- `GET api/integrations/frisbo/orders/{sale}`
- `PATCH api/integrations/frisbo/orders/{order}/sync`
- `GET api/integrations/frisbo/products/{product}/checkStock`
- `POST api/integrations/frisbo/products/{product}/publish`
- `PATCH api/integrations/frisbo/products/{product}/update`
- `POST api/integrations/frisbo/products/{product}/unpublish`
- `GET api/integrations/frisbo/settings/index`
- `PATCH api/integrations/frisbo/settings/{settings}`

### Artisan commands

- `enso:frisbo:fetch-order-updates`
- `enso:frisbo:retry-fulfillment`

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)

Companion frontend package:

- [`@enso-ui/frisbo`](https://docs.laravel-enso.com/frontend/frisbo.html) [↗](https://git.xtelecom.ro/enso-ui/frisbo)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/frisbo/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
