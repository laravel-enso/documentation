---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Addresses

[![License](https://poser.pugx.org/laravel-enso/addresses/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/addresses/version)](https://packagist.org/packages/laravel-enso/addresses)
[![Downloads](https://poser.pugx.org/laravel-enso/addresses/downloads)](https://packagist.org/packages/laravel-enso/addresses)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/addresses.svg)](https://github.com/laravel-enso/addresses/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/addresses.svg)](https://github.com/laravel-enso/addresses/pulls)

## Description

Addresses is Laravel Enso's reusable address management package for attaching one or more addresses to morphable entities.

It covers the full backend flow for storing, editing, localizing, and querying addresses, while also shipping geographic reference data and API endpoints for address forms, selectors, and dependent location lookups.

The package is designed to work inside the Enso ecosystem and pairs naturally with the frontend address components from `@enso-ui/addresses`.

## Installation

This package comes pre-installed in Laravel Enso applications that require address management.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/addresses
```

The package auto-registers its service provider, loads migrations, merges its configuration, and loads its API routes.

Run the migrations after installation:

```bash
php artisan migrate
```

If you need the publishable assets, the package exposes:

- `php artisan vendor:publish --tag=addresses-factory`
- `php artisan vendor:publish --tag=enso-factories`
- `php artisan vendor:publish --tag=addresses-seeder`
- `php artisan vendor:publish --tag=enso-seeders`
- `php artisan vendor:publish --tag=addresses-config`
- `php artisan vendor:publish --tag=enso-config`

## Features

- Attaches addresses to arbitrary models through a polymorphic `addressable` relation.
- Supports one default address, billing flags, and shipping flags.
- Provides dedicated relations for `address()`, `billingAddress()`, `shippingAddresses()`, and `addresses()`.
- Includes geographic models and data for countries, regions, localities, townships, sectors, and postcodes.
- Ships API endpoints for CRUD flows, address form bootstrapping, select options, postcode lookup, and geolocation.
- Generates address labels from structured location data.
- Supports automatic coordinate lookup through Google geocoding.
- Allows single-address or multiple-address scenarios depending on the consuming model behavior.
- Protects addressable model deletion according to the configured `onDelete` strategy.
- Includes factories, migrations, seeders, validation, JSON form templates, and API resources.

## Usage

Add the `Addressable` trait to the model that should own addresses:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Addresses\Traits\Addressable;

class Company extends Model
{
    use Addressable;
}
```

You can then work with the provided relations:

```php
$company->address;
$company->billingAddress;
$company->shippingAddresses;
$company->addresses;
```

Create a new address through the model relationship:

```php
$company->addresses()->create([
    'country_id' => 1,
    'region_id' => 10,
    'locality_id' => 25,
    'street' => 'Main Street',
    'number' => '10',
    'postcode' => '123456',
    'is_default' => true,
]);
```

The package also exposes selectable address options and CRUD endpoints that can be consumed by Enso forms and frontend components.

::: warning Note
If the consuming model should behave like a single-address owner, trying to create a second address through the package flow will raise a package exception.

Deletion behavior also depends on `enso.addresses.onDelete`: `cascade` removes addresses with the owner, while `restrict` blocks owner deletion when addresses still exist.
:::

## API

### Routes

All package routes are registered under:

- prefix: `api/core/addresses`
- name prefix: `core.addresses.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET /api/core/addresses/localities`
- `GET /api/core/addresses/regions`
- `GET /api/core/addresses/sectors`
- `GET /api/core/addresses`
- `GET /api/core/addresses/create`
- `POST /api/core/addresses`
- `GET /api/core/addresses/options`
- `GET /api/core/addresses/postcode`
- `GET /api/core/addresses/{address}/edit`
- `GET /api/core/addresses/{address}/localize`
- `PATCH /api/core/addresses/{address}`
- `PATCH /api/core/addresses/{address}/coordinates`
- `DELETE /api/core/addresses/{address}`
- `PATCH /api/core/addresses/makeDefault/{address}`
- `PATCH /api/core/addresses/makeBilling/{address}`
- `PATCH /api/core/addresses/makeShipping/{address}`
- `GET /api/core/addresses/{address}`

### Model

`LaravelEnso\Addresses\Models\Address`

Key relationships:

- `country()`
- `region()`
- `locality()`
- `sector()`
- `addressable()`

Useful methods:

- `label()`
- `store()`
- `makeDefault()`
- `makeBilling()`
- `toggleBilling()`
- `toggleShipping()`
- `localize()`
- `shouldBeSingle()`
- `isLocalized()`

Useful scopes:

- `default()`
- `notDefault()`
- `forPerson()`
- `forCompany()`
- `for()`
- `ordered()`

### Trait

`LaravelEnso\Addresses\Traits\Addressable`

Exposes:

- `address()`
- `billingAddress()`
- `shippingAddresses()`
- `addresses()`

It also hooks into model deletion to enforce the configured address cleanup strategy.

### Configuration

Config file:

- `config/enso/addresses.php`

Current package options:

- `onDelete`
  Controls owner deletion behavior: `cascade` or `restrict`
- `defaultCountryId`
  Default country used by the package flows

::: tip Tip
If you need country-specific behavior or custom address structure, extend the package locally instead of editing vendor code directly. The package was built to allow custom models, requests, form builders, and templates in the host application.
:::

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/countries`](https://docs.laravel-enso.com/backend/countries.html) [↗](https://github.com/laravel-enso/countries)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/google`](https://docs.laravel-enso.com/backend/google.html) [↗](https://github.com/laravel-enso/google)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)

Companion frontend package:

- [`@enso-ui/addresses`](https://docs.laravel-enso.com/frontend/addresses.html) [↗](https://github.com/enso-ui/addresses)

External service dependency:

- Google geocoding support through [`laravel-enso/google`](https://docs.laravel-enso.com/backend/google.html) [↗](https://github.com/laravel-enso/google) when using address localization

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/addresses/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:56:56 AM</div>
</div>
