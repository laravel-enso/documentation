---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Countries

[![License](https://poser.pugx.org/laravel-enso/countries/license)](https://github.com/laravel-enso/countries/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/countries/version)](https://packagist.org/packages/laravel-enso/countries)
[![Downloads](https://poser.pugx.org/laravel-enso/countries/downloads)](https://packagist.org/packages/laravel-enso/countries)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/countries/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/countries.svg)](https://github.com/laravel-enso/countries/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/countries.svg)](https://github.com/laravel-enso/countries/pulls)

## Description

Countries provides the country reference dataset used across the Laravel Enso ecosystem.

The package ships the `countries` table, a JSON-backed seeder for the full country list, an Eloquent model with a few convenience behaviors, and an authenticated options endpoint meant for select inputs.

It is a foundational backend package for address management, currencies, webshop flows, and any feature that needs normalized country metadata such as ISO codes, currency details, calling codes, or flags.

## Installation

This package comes pre-installed in Laravel Enso applications that require country metadata.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/countries
```

The package automatically:

- loads its API routes
- loads its migrations
- publishes its seeders when requested

Run the migrations after installation:

```bash
php artisan migrate
```

If you want the package seeder in your application's database seeders directory, publish it with:

```bash
php artisan vendor:publish --tag=countries-seeder
```

Then seed the table:

```bash
php artisan db:seed --class="LaravelEnso\Countries\Database\Seeders\CountrySeeder"
```

## Features

- Creates the `countries` table with ISO, currency, region, and calling metadata.
- Ships a JSON-backed seeder for the full country dataset.
- Provides an Eloquent `Country` model with rememberable lookup keys.
- Exposes an authenticated `options` endpoint for select inputs.
- Returns only active countries through the options endpoint.
- Includes a region label helper that adapts for Romania and the United States.

## Usage

Fetch active country options through the API:

```php
route('core.countries.options');
```

Query the model directly:

```php
use LaravelEnso\Countries\Models\Country;

$romania = Country::whereIso31662('RO')->firstOrFail();

$label = $romania->regionLabel();
```

The options endpoint serializes countries in a frontend-friendly shape:

```json
{
  "id": 1,
  "name": "Romania",
  "currencyCode": "RON"
}
```

::: warning Note
The package exposes only active countries through its options endpoint.

If you seed or modify the dataset manually, remember that inactive rows will not be returned by `core.countries.options`.
:::

## API

### Routes

All package routes are registered under:

- prefix: `api/core/countries`
- name prefix: `core.countries.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET /api/core/countries/options`

### Controller

`LaravelEnso\Countries\Http\Controllers\Options`

Behavior:

- builds select-style options through `LaravelEnso\Select\Traits\OptionsBuilder`
- filters by active countries only
- allows querying by `name` and `iso_3166_3`

### Resource

`LaravelEnso\Countries\Http\Resources\Country`

Serialized attributes:

- `id`
- `name`
- `currencyCode`

### Model

`LaravelEnso\Countries\Models\Country`

Useful traits:

- `ActiveState`
- `AvoidsDeletionConflicts`
- `HasFactory`
- `Rememberable`

Rememberable keys:

- `id`
- `iso_3166_2`
- `name`

Useful method:

- `regionLabel(): string`

### Seeder

`LaravelEnso\Countries\Database\Seeders\CountrySeeder`

Reads the dataset from:

- `vendor/laravel-enso/countries/database/countries.json`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/countries/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:22:05 PM</div>
</div>
