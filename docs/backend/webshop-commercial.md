---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Webshop Commercial

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.3.2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/merge_requests)

## Description

Webshop Commercial bridges the public webshop with Enso commercial documents and Stripe payments.

The package extends webshop orders with commercial sale and line data, stores local transaction references, creates orders from cart entries, integrates with Stripe payment intents and checkout flows, listens for payment success events, and finalizes paid orders into the commercial domain.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the migrations:

```bash
php artisan migrate
```

Make sure the host application already has:

- `laravel-enso/commercial`
- `laravel-enso/products`
- `laravel-enso/stripe`
- `laravel-enso/webshop`

## Features

- Commercial order storage and order-line mapping for webshop carts.
- Stripe payment-intent and checkout-session creation.
- Webshop payment route integration for authenticated customers.
- Event listener for Stripe payment success.
- Invoice and payment-status aware order model.
- Payment received notification flow.

## Usage

Published routes:

- `GET webshop/payment-intent/{order}`
- internal account payment and order-pay controllers bound through service providers

Main classes:

- `LaravelEnso\WebshopCommercial\Models\Order`
- `LaravelEnso\WebshopCommercial\Models\Line`
- `Services\Orders\Store`
- `Services\Orders\Finalize`
- `Services\Stripe\Intent`
- `Services\Stripe\Payment`

The package also overrides webshop payment services through `WebshopServiceProvider` so the storefront order payment flow resolves the commercial implementation automatically.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/commercial`](https://docs.laravel-enso.com/backend/commercial.html) [↗](https://git.xtelecom.ro/laravel-enso/commercial)
- [`laravel-enso/discounts`](https://docs.laravel-enso.com/backend/discounts.html) [↗](https://git.xtelecom.ro/laravel-enso/discounts)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)
- [`laravel-enso/stripe`](https://docs.laravel-enso.com/backend/stripe.html) [↗](https://git.xtelecom.ro/laravel-enso/stripe)
- [`laravel-enso/webshop`](https://docs.laravel-enso.com/backend/webshop.html) [↗](https://git.xtelecom.ro/laravel-enso/webshop)

External service dependency:

- Stripe payment intents, checkout sessions, and payment events

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/webshop-commercial/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 8:03:23 PM</div>
</div>
