---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Enums

[![License](https://poser.pugx.org/laravel-enso/enums/license)](https://github.com/laravel-enso/enums/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/enums/version)](https://packagist.org/packages/laravel-enso/enums)
[![Downloads](https://poser.pugx.org/laravel-enso/enums/downloads)](https://packagist.org/packages/laravel-enso/enums)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/enums/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/enums.svg)](https://github.com/laravel-enso/enums/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/enums.svg)](https://github.com/laravel-enso/enums/pulls)

## Description

Enums provides both legacy class-based enumerations and frontend-ready native PHP enum discovery for Laravel Enso.

The package keeps backwards compatibility with Enso's original enum classes while also scanning vendor and application `Enums` folders for native PHP enums that implement specific contracts. Those enums can then be registered into application state and exposed to the frontend in a normalized shape.

It is used throughout the Enso ecosystem for typed option lists, shared UI state, and enum mapping between backend code and frontend consumers.

::: warning Note
Since PHP now provides native enums, we strongly recommend migrating new and existing code to native PHP enums wherever possible.

We still intend to keep supporting the Enso enum registry layer for ecosystem integration and frontend state registration, even as the legacy custom enum implementation is phased out.
:::

## Installation

Install the package:

```bash
composer require laravel-enso/enums
```

The package auto-registers:

- `LaravelEnso\Enums\AppServiceProvider`
- `LaravelEnso\Enums\EnumServiceProvider`

If you want to customize which vendor namespaces are scanned, publish the configuration:

```bash
php artisan vendor:publish --tag=enums-config
```

If you want an application provider for registering legacy enums explicitly, publish the stub:

```bash
php artisan vendor:publish --tag=enum-provider
```

Default configuration:

```php
return [
    'vendors' => ['laravel-enso'],
];
```

For native frontend enums, place enum classes under your PSR-4 `Enums` folder. In a standard Laravel application this means `app/Enums`.

## Features

- Provides a base class for legacy class-based enums.
- Supports native PHP enums for frontend/state registration.
- Scans configured vendor packages and the host application for enum classes.
- Registers enum state under a single `enums` store payload.
- Exposes a facade for registering and removing legacy enums.
- Supports optional enum mapping through a dedicated `Mappable` contract.
- Includes helper traits for select lists, searching, and random case selection.

## Usage

### Legacy Class-Based Enums

Extend `LaravelEnso\Enums\Services\Enum`:

```php
use LaravelEnso\Enums\Services\Enum;

class Roles extends Enum
{
    public const Admin = 1;
    public const Supervisor = 2;
    public const User = 3;
}
```

Available helpers:

```php
Roles::get(1);
Roles::has(2);
Roles::keys();
Roles::values();
Roles::select();
Roles::json();
```

### Native PHP Enums For Frontend State

Implement `LaravelEnso\Enums\Contracts\Frontend` on a backed enum:

```php
use LaravelEnso\Enums\Contracts\Frontend;
use LaravelEnso\Enums\Contracts\Mappable;
use LaravelEnso\Enums\Traits\Select;

enum Status: int implements Frontend, Mappable
{
    use Select;

    case Draft = 0;
    case Published = 1;

    public static function registerBy(): string
    {
        return 'statuses';
    }

    public function map(): mixed
    {
        return match ($this) {
            self::Draft => 'Draft',
            self::Published => 'Published',
        };
    }
}
```

The enum will be discovered from an `Enums` folder and registered under the key returned by `registerBy()`.

### Legacy Enum Registration

Register legacy enums through the facade or `EnumServiceProvider`:

```php
use LaravelEnso\Enums\Facades\Enums;

Enums::register([
    'roles' => \App\Enums\Roles::class,
]);
```

## API

### Configuration

`config/enums.php`

Keys:

- `vendors`

The scanner checks:

- `vendor/<configured-vendor>/*`
- the application base path and its PSR-4 root

### Service Providers

- `LaravelEnso\Enums\AppServiceProvider`
- `LaravelEnso\Enums\EnumServiceProvider`

Responsibilities:

- merge and publish config
- publish the legacy enum provider stub
- register legacy enums listed in the provider's `$register` property

### Legacy Enum Base Class

`LaravelEnso\Enums\Services\Enum`

Key methods:

- `constants(): array`
- `get($key)`
- `has($key): bool`
- `keys()`
- `values()`
- `json(): string`
- `array(): array`
- `all(): array`
- `object(): object`
- `collection()`
- `select()`
- `localisation(bool $state = true): void`

### Native Enum Discovery

- `LaravelEnso\Enums\Services\Source`
- `LaravelEnso\Enums\Services\Enums`

Requirements for discovery:

- enum must exist in an `Enums` folder
- enum must implement `LaravelEnso\Enums\Contracts\Frontend`

Optional mapping:

- implement `LaravelEnso\Enums\Contracts\Mappable`

### Legacy Enum Registry

- `LaravelEnso\Enums\Services\LegacyEnums`
- `LaravelEnso\Enums\Facades\Enums`

Key methods:

- `register($enums)`
- `remove($aliases)`
- `all(): array`

### State Provider

`LaravelEnso\Enums\State\Enums`

Provides merged enum state for frontend consumption under the `enums` store key.

### Traits

- `LaravelEnso\Enums\Traits\Select`
- `LaravelEnso\Enums\Traits\Search`
- `LaravelEnso\Enums\Traits\Random`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

Companion frontend package:

- [`@enso-ui/enums`](https://docs.laravel-enso.com/frontend/enums.html) [↗](https://github.com/enso-ui/enums)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/enums/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:17 PM</div>
</div>
