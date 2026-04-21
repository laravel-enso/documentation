---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Currencies

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/currencies/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.6.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/currencies/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/currencies/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/currencies/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/currencies/-/merge_requests)

## Description

Currencies adds currency and exchange-rate management to Enso.

The package exposes CRUD flows for currencies and exchange rates, keeps track of the application's default currency, links currencies to countries through currency codes, and provides a conversion service together with a conversion endpoint.

It is intended for private Enso deployments that need administrative currency management and server-side amount conversion.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=currencies-config
php artisan vendor:publish --tag=currency-seeder
```

Default configuration:

```php
return [
    'converterPrecision' => 4,
];
```

## Features

- Currency CRUD and selector endpoints.
- Exchange-rate CRUD endpoints with per-date conversion values.
- Default currency protection against accidental deletion.
- Server-side conversion service with configurable precision and fallback to the most recent rate when the requested date has no exact match.
- Included seeders and factories for bootstrapping data.

## Usage

Use the conversion service in code:

```php
use LaravelEnso\Currencies\Models\Currency;
use LaravelEnso\Currencies\Services\Conversion;

$from = Currency::whereCode('EUR')->firstOrFail();
$to = Currency::whereCode('RON')->firstOrFail();

$amount = (new Conversion())
    ->from($from)
    ->to($to)
    ->amount('100.00')
    ->handle();
```

You can also convert to the default currency directly:

```php
Conversion::toDefault($from, '100.00');
```

## API

### HTTP routes

Currencies:

- `GET api/administration/currencies/create`
- `POST api/administration/currencies`
- `GET api/administration/currencies/{currency}/edit`
- `PATCH api/administration/currencies/{currency}`
- `DELETE api/administration/currencies/{currency}`
- `GET api/administration/currencies/initTable`
- `GET api/administration/currencies/tableData`
- `GET api/administration/currencies/exportExcel`
- `GET api/administration/currencies/options`
- `GET api/administration/currencies/convert`

Exchange rates:

- `GET api/administration/exchangeRates/create`
- `POST api/administration/exchangeRates`
- `GET api/administration/exchangeRates/{exchangeRate}/edit`
- `PATCH api/administration/exchangeRates/{exchangeRate}`
- `DELETE api/administration/exchangeRates/{exchangeRate}`
- `GET api/administration/exchangeRates/initTable`
- `GET api/administration/exchangeRates/tableData`
- `GET api/administration/exchangeRates/exportExcel`

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/countries`](https://docs.laravel-enso.com/backend/countries.html) [↗](https://git.xtelecom.ro/laravel-enso/countries)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/currencies`](https://docs.laravel-enso.com/frontend/currencies.html) [↗](https://github.com/enso-ui/currencies)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/currencies/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:09:20 PM</div>
</div>
