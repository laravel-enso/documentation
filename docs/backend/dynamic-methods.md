---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Dynamic Methods

[![License](https://poser.pugx.org/laravel-enso/dynamic-methods/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/dynamic-methods/version)](https://packagist.org/packages/laravel-enso/dynamic-methods)
[![Downloads](https://poser.pugx.org/laravel-enso/dynamic-methods/downloads)](https://packagist.org/packages/laravel-enso/dynamic-methods)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/dynamic-methods.svg)](https://github.com/laravel-enso/dynamic-methods/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/dynamic-methods.svg)](https://github.com/laravel-enso/dynamic-methods/pulls)

## Description

Dynamic Methods adds runtime-bound relations, instance methods, scopes, mutators, and static methods to Laravel models and classes.

The package scans `Dynamics` folders from configured vendor packages and from the host application, instantiates the dynamic definitions it finds, and binds their closures onto the target classes during boot.

In the Enso ecosystem it is the mechanism used to let independent packages augment shared models like `User` without editing those models directly.

## Installation

Install the package:

```bash
composer require laravel-enso/dynamic-methods
```

The service provider is auto-registered and immediately binds all discovered dynamics on boot.

If you want to customize which vendor namespaces are scanned, publish the configuration:

```bash
php artisan vendor:publish --tag=dynamics-config
```

Default configuration:

```php
return [
    'vendors' => ['laravel-enso'],
];
```

For application-level dynamics, place your classes under your app PSR-4 `Dynamics` folder. In a standard Laravel application this means `app/Dynamics`.

## Features

- Scans configured vendor packages for `Dynamics` classes.
- Scans the host application for its own `Dynamics` classes.
- Binds dynamic Eloquent relations through `resolveRelationUsing()`.
- Binds dynamic instance methods through `resolveMethodUsing()`.
- Supports dynamic scopes and attribute mutators through the `Abilities` trait.
- Supports dynamic static methods through `resolveStaticMethodUsing()`.
- Keeps the dynamic definition format small and package-friendly.

## Usage

To receive dynamic instance methods, relations, scopes, and mutators, a model should implement `LaravelEnso\DynamicMethods\Contracts\DynamicMethods` and use `LaravelEnso\DynamicMethods\Traits\Abilities`.

Example model:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\DynamicMethods\Contracts\DynamicMethods;
use LaravelEnso\DynamicMethods\Traits\Abilities;

class User extends Model implements DynamicMethods
{
    use Abilities;
}
```

Define a dynamic relation in a package or app `Dynamics` class:

```php
use Closure;
use LaravelEnso\ActionLogger\Models\ActionLog;
use LaravelEnso\DynamicMethods\Contracts\Relation;
use LaravelEnso\Users\Models\User;

class ActionLogs implements Relation
{
    public function bindTo(): array
    {
        return [User::class];
    }

    public function name(): string
    {
        return 'actionLogs';
    }

    public function closure(): Closure
    {
        return fn (User $user) => $user->hasMany(ActionLog::class);
    }
}
```

Define a dynamic instance method:

```php
use Closure;
use Illuminate\Support\Facades\Session;
use LaravelEnso\DynamicMethods\Contracts\Method;
use LaravelEnso\Users\Models\User;

class IsImpersonating implements Method
{
    public function bindTo(): array
    {
        return [User::class];
    }

    public function name(): string
    {
        return 'isImpersonating';
    }

    public function closure(): Closure
    {
        return fn () => Session::has('impersonating');
    }
}
```

After boot, the bound methods can be used as if they were defined on the model itself:

```php
$user->actionLogs();
$user->isImpersonating();
```

::: warning Note
The binder discovers dynamics by reading package `composer.json` PSR-4 configuration and then scanning a `Dynamics` directory relative to that namespace root.

In practice, the package also relies on `laravel-enso/helpers` for `JsonReader`, even though that dependency is currently not declared in `composer.json`.
:::

## API

### Configuration

`config/dynamics.php`

Keys:

- `vendors`

The binder scans:

- `vendor/<configured-vendor>/*`
- the application base path and its PSR-4 root

### Service Provider

`LaravelEnso\DynamicMethods\AppServiceProvider`

Responsibilities:

- merges `enso.dynamics` config
- publishes `config/dynamics.php`
- runs the binder during boot

### Contracts

- `LaravelEnso\DynamicMethods\Contracts\Method`
- `LaravelEnso\DynamicMethods\Contracts\Relation`
- `LaravelEnso\DynamicMethods\Contracts\StaticMethod`
- `LaravelEnso\DynamicMethods\Contracts\DynamicMethods`
- `LaravelEnso\DynamicMethods\Contracts\DynamicStaticMethods`

Definition contracts require:

- `name(): string`
- `closure(): Closure`
- `bindTo(): array`

### Traits

- `LaravelEnso\DynamicMethods\Traits\Methods`
- `LaravelEnso\DynamicMethods\Traits\StaticMethods`
- `LaravelEnso\DynamicMethods\Traits\Abilities`

`Abilities` extends `Methods` and also makes dynamic scopes, accessors, and mutators discoverable through Eloquent's standard model checks.

### Services

- `LaravelEnso\DynamicMethods\Services\Binder`
- `LaravelEnso\DynamicMethods\Services\Dynamics`
- `LaravelEnso\DynamicMethods\Services\Method`
- `LaravelEnso\DynamicMethods\Services\Relation`
- `LaravelEnso\DynamicMethods\Services\StaticMethod`

## Depends On

Required Enso packages:

- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/dynamic-methods/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:22:07 PM</div>
</div>
