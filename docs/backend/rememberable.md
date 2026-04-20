---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Rememberable

[![License](https://poser.pugx.org/laravel-enso/rememberable/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/rememberable/version)](https://packagist.org/packages/laravel-enso/rememberable)
[![Downloads](https://poser.pugx.org/laravel-enso/rememberable/downloads)](https://packagist.org/packages/laravel-enso/rememberable)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/rememberable.svg)](https://github.com/laravel-enso/rememberable/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/rememberable.svg)](https://github.com/laravel-enso/rememberable/pulls)

## Description

Rememberable adds model-level caching to Eloquent models that are frequently resolved by stable lookup keys.

The package hooks into model lifecycle events, stores models in Laravel's cache when they are created or updated, clears cached entries when they are deleted, and exposes convenience accessors for resolving records by `id` or by any configured alternate key.

In the Enso ecosystem it is used for lookup-oriented models such as countries, categories, measurement units, settings, products, and other entities that benefit from repeated reads by code, name, slug, or external identifiers.

## Installation

This package is typically installed transitively by Enso packages that rely on cached lookup models.

For standalone installation:

```bash
composer require laravel-enso/rememberable
```

The package auto-registers its service provider and merges the `enso.rememberable` configuration.

If you want to publish the config locally:

```bash
php artisan vendor:publish --tag=rememberable-config
```

The default configuration is:

```php
return [
    'cacheLifetime' => (int) env('CACHE_LIFETIME', 3600),
    'keys' => ['id'],
];
```

## Features

- Caches models automatically on `created` and `updated`.
- Removes cached entries automatically on `deleted`.
- Supports cached lookup by primary key through `cacheGet()`.
- Supports cached lookup by additional configured keys through `cacheGetBy()`.
- Lets each model override the cache lifetime.
- Lets each model declare its own rememberable keys.
- Rehydrates cache transparently when a key is not already cached.
- Keeps subclasses isolated because cache keys are built from the static model class.

## Usage

Apply the trait to an Eloquent model:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Rememberable\Traits\Rememberable;

class Company extends Model
{
    use Rememberable;

    protected $rememberableKeys = ['id', 'name', 'fiscal_code'];
}
```

Resolve a model by primary key:

```php
$company = Company::cacheGet(1);
```

Resolve a model by another configured key:

```php
$company = Company::cacheGetBy('name', 'Earthlink');
```

Customize the cache lifetime per model:

```php
class Product extends Model
{
    use Rememberable;

    protected $cacheLifetime = 100;
}
```

You can also cache records forever:

```php
class Setting extends Model
{
    use Rememberable;

    protected $cacheLifetime = 'forever';
}
```

::: warning Note
`cacheGetBy()` only works for keys declared in the model's `rememberableKeys` property or in the global `enso.rememberable.keys` config.

If a key is not allowed, the package throws a `LaravelEnso\Rememberable\Exceptions\Rememberable` exception.
:::

## API

### Configuration

`config/rememberable.php`

Keys:

- `cacheLifetime`
- `keys`

### Trait

`LaravelEnso\Rememberable\Traits\Rememberable`

Lifecycle hooks:

- caches the model on `created`
- refreshes the cached model on `updated`
- removes cached entries on `deleted`

Public methods:

- `cacheGet($id)`
- `cacheGetBy(string $key, $value)`
- `cachePut()`
- `cacheForget()`
- `getCacheKey(string $key, $value = null): string`

Protected extension points:

- `$cacheLifetime`
- `$rememberableKeys`
- `getCacheLifetime()`
- `cacheableKeys()`

Cache key format:

```text
<model-class>:<key>:<value>
```

### Exception

`LaravelEnso\Rememberable\Exceptions\Rememberable`

Currently exposes:

- `missingKey(string $key): self`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/rememberable/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:25:56 PM</div>
</div>
