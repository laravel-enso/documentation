---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Helpers

[![License](https://poser.pugx.org/laravel-enso/helpers/license)](https://github.com/laravel-enso/helpers/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/helpers/version)](https://packagist.org/packages/laravel-enso/helpers)
[![Downloads](https://poser.pugx.org/laravel-enso/helpers/downloads)](https://packagist.org/packages/laravel-enso/helpers)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/helpers/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/helpers.svg)](https://github.com/laravel-enso/helpers/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/helpers.svg)](https://github.com/laravel-enso/helpers/pulls)

## Description

Helpers is a shared utility package for the Laravel Enso ecosystem.

It bundles small reusable services, model traits, request helpers, casts, enums, contracts, and exceptions that are consumed by many backend packages. The package is intentionally broad: instead of modelling one business feature, it centralizes low-level building blocks that would otherwise be duplicated across the ecosystem.

Typical use cases include precise decimal arithmetic, monetary calculations, JSON parsing, factory resolution in package models, request key normalization, active-state handling, cent-based storage, seeder progress reporting, and a few convenience enums and casts.

## Installation

This package is usually installed transitively by other Enso backend packages.

For standalone installation:

```bash
composer require laravel-enso/helpers
```

No publishing step is required.

## Features

- Provides decimal-safe arithmetic helpers built on BCMath.
- Includes utility services for JSON reading, object wrapping, disk-size formatting, loan rates, pricing, chunk sizing, and factory resolution.
- Provides Eloquent and request traits for active state, cent-based persistence, request-key normalization, morph-map handling, observer cascading, and touch propagation.
- Includes casts for encrypted strings and JSON-backed object payloads.
- Ships helper enums for VAT rates and payment methods.
- Provides ecosystem-level helper exceptions and a JSON-friendly `EnsoException`.
- Exposes an `Activatable` contract used by packages that model `is_active` semantics.

## Usage

Use `Decimals` for precise arithmetic:

```php
use LaravelEnso\Helpers\Services\Decimals;

$gross = Decimals::add('100.25', '19.75');
$vat = Decimals::mul('100', '0.19', 4);
```

Use `JsonReader` to load JSON in different formats:

```php
use LaravelEnso\Helpers\Services\JsonReader;

$data = (new JsonReader($path))->array();
$obj = (new JsonReader($path))->obj();
```

Use `PriceComputor` for pricing totals:

```php
use LaravelEnso\Helpers\Services\PriceComputor;

$total = (new PriceComputor('100'))
    ->quantity('2')
    ->discountPercent('10')
    ->vatPercent('19')
    ->total();
```

Use the `InCents` trait when values are stored as integers in the database:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Helpers\Traits\InCents;

class Product extends Model
{
    use InCents;

    protected array $centAttributes = ['amount'];
}
```

Normalize validated request keys through `MapsRequestKeys`:

```php
use Illuminate\Foundation\Http\FormRequest;
use LaravelEnso\Helpers\Traits\MapsRequestKeys;

class StoreCompany extends FormRequest
{
    use MapsRequestKeys;
}
```

::: warning Note
When using `InCents`, call `inCents()` before mutating the configured cent attributes.

If the model already has dirty cent-tracked attributes, switching modes throws `LaravelEnso\Helpers\Exceptions\InCents`.
:::

## API

### Services

Core helpers:

- `Decimals`
- `JsonReader`
- `Obj`
- `FactoryResolver`
- `OptimalChunk`
- `DiskSize`

Financial helpers:

- `PriceComputor`
- `Loan`

Utility placeholder:

- `Dummy`

### Traits

Model traits:

- `ActiveState`
- `AvoidsDeletionConflicts`
- `CascadesMorphMap`
- `CascadesObservers`
- `ForceableIndex`
- `InCents`
- `UpdatesOnTouch`

Request / validation traits:

- `FiltersRequest`
- `MapsRequestKeys`
- `ToSnakeCase`
- `TransformMorphMap`

Seeder traits:

- `SeederProgress`
- `DatabaseSeedProgress`

### Casts

- `LaravelEnso\Helpers\Casts\Encrypt`
- `LaravelEnso\Helpers\Casts\Obj`

### Enums

- `LaravelEnso\Helpers\Enums\PaymentMethods`
- `LaravelEnso\Helpers\Enums\VatRates`

### Contracts

- `LaravelEnso\Helpers\Contracts\Activatable`

### Exceptions

- `LaravelEnso\Helpers\Exceptions\EnsoException`
- `LaravelEnso\Helpers\Exceptions\InCents`
- `LaravelEnso\Helpers\Exceptions\JsonParse`

## Depends On

Required Enso packages:

- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)

Framework and runtime dependencies:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)
- [`doctrine/dbal`](https://github.com/doctrine/dbal) [↗](https://github.com/doctrine/dbal)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/helpers/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:22:14 PM</div>
</div>
