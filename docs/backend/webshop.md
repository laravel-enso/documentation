---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Webshop

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.9.3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/webshop/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-6-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/webshop/-/merge_requests)

## Description

Webshop is Enso's storefront and customer-account backend.

The package exposes localized web routes for catalog, cart, favourites, customer account, reviews, pages, and checkout-adjacent flows, plus internal API routes for administrative settings and operational integration. It stores storefront entities such as products, orders, cart entries, favourites, slides, subscribers, reviews, and review votes, and wires notifications, observers, and middleware around the public shopping experience.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the migrations:

```bash
php artisan migrate
```

Make sure the host application also has the required web middleware, translated routes, and Inertia frontend stack configured.

## Features

- Localized public web routes for home, category/product browsing, search, cart, favourites, contact, FAQ, policy pages, and review flows.
- Customer-account routes for profile summary, addresses, companies, orders, payment, and confirmation pages.
- Public helpers for country/region/locality options and subscription endpoints.
- Rich ecommerce models for orders, products, categories, brands, carts, reviews, and transactions.
- Notifications for contact forms, incomplete orders, review lifecycle, registration, and password reset.
- Product and review observers plus storefront middleware services.

## Usage

The package registers both:

- `routes/api.php` for internal API integration
- `routes/web.php` plus many nested route files for the public storefront

Important storefront areas:

- public pages: home, contact, FAQ, privacy, terms, shipping and return policy
- products: catalog, search, show
- cart: show and edit cart state
- favourites
- reviews
- account summary, addresses, companies, orders

Core models include:

- `Brand`
- `Category`
- `Product`
- `Order`
- `CartEntry`
- `Favourite`
- `Review`
- `Settings`
- `Subscriber`

Important configuration:

```php
return [
    'productIdentifier' => env('WEBSHOP_PRODUCT_IDENTIFIER', 'slug'),
    'facetAttribute' => env('WEBSHOP_FACET_ATTRIBUTE', 'webshop'),
    'settingsId' => env('WEBSHOP_SETTINGS_ID', 1),
];
```

Payment methods and fulfillable payment methods are also configured from `config/webshop.php`.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)
- [`laravel-enso/cnp-validator`](https://docs.laravel-enso.com/backend/cnp-validator.html) [↗](https://github.com/laravel-enso/cnp-validator)
- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/countries`](https://docs.laravel-enso.com/backend/countries.html) [↗](https://github.com/laravel-enso/countries)
- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/facebook`](https://docs.laravel-enso.com/backend/facebook.html) [↗](https://github.com/laravel-enso/facebook)
- [`laravel-enso/google`](https://docs.laravel-enso.com/backend/google.html) [↗](https://github.com/laravel-enso/google)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/product-eav`](https://docs.laravel-enso.com/backend/product-eav.html) [↗](https://git.xtelecom.ro/laravel-enso/product-eav)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)

Companion frontend package:

- [`@enso-ui/webshop`](https://docs.laravel-enso.com/frontend/webshop.html) [↗](https://github.com/enso-ui/webshop)

External service dependency:

- Inertia storefront routes and localized public web pages
- Google and Facebook integrations used by selected storefront features

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/webshop/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:34:15 PM</div>
</div>
