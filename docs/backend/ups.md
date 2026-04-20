---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# UPS

[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ups/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.4-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ups/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/ups/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ups/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ups/-/merge_requests)

## Description

UPS integrates Enso products with UPS tracking.

The package stores encrypted UPS credentials and runtime tokens, exposes a settings form, fetches tracking payloads from UPS, persists the latest tracking snapshot per inquiry number, classifies tracking responses into status and group enums, and exposes product-level tracking endpoints for backoffice flows.

## Installation

Install the package:

```bash
composer require laravel-enso/ups
```

Run the migrations:

```bash
php artisan migrate
```

## Features

- Settings model with encrypted client credentials and cached singleton accessors.
- OAuth token acquisition and refresh through `Services\Token`.
- Tracking sync service that stores the last UPS response in `UpsTracking`.
- Product tracking endpoint plus separate settings edit/update endpoints.
- Enum mapping for tracking status and status groups.
- Data upgrade for existing tracking statuses.

## Usage

Package routes:

- settings prefix: `api/integrations/ups/settings`
- product prefix: `api/integrations/ups/products`

Endpoints:

- `GET settings`
- `PATCH settings/{settings}`
- `GET products/{product}/tracking`

Important classes:

- `LaravelEnso\Ups\Models\Settings`
- `LaravelEnso\Ups\Models\UpsTracking`
- `LaravelEnso\Ups\Services\Token`
- `LaravelEnso\Ups\Services\Tracking`

Helpful settings accessors:

- `baseUrl()`
- `clientId()`
- `clientSecret()`
- `authToken()`
- `authTokenExpiresAt()`
- `enabled()`

Tracking statuses are represented by:

- `TrackingStatus`
- `TrackingGroup`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/ups`](https://docs.laravel-enso.com/frontend/ups.html) [↗](https://github.com/enso-ui/ups)

External service dependency:

- UPS OAuth and tracking APIs used for token management and parcel tracking

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/ups/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:34:12 PM</div>
</div>
