---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Lockable Models

[![License](https://poser.pugx.org/laravel-enso/lockable-models/license)](https://github.com/laravel-enso/lockable-models/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/lockable-models/version)](https://packagist.org/packages/laravel-enso/lockable-models)
[![Downloads](https://poser.pugx.org/laravel-enso/lockable-models/downloads)](https://packagist.org/packages/laravel-enso/lockable-models)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](https://github.com/laravel-enso/lockable-models/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/lockable-models.svg)](https://github.com/laravel-enso/lockable-models/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/lockable-models.svg)](https://github.com/laravel-enso/lockable-models/pulls)

## Description

Lockable Models provides short-lived edit locks for Eloquent models.

It is meant for collaborative backoffice flows where a record should be protected from concurrent edits while a user is working on it. The package offers a base lockable model, a base lock model, middleware that prevents actions on already locked models, and a terminate middleware that releases successful edit locks automatically.

Locks are user-aware, expire automatically after a configurable number of minutes, and allow the locking user to continue working on the same record while blocking everyone else.

The package depends on `laravel-enso/users` for lock ownership and display identity. It does not depend on `people` directly; the lock message uses the user model's public display API.

## Installation

Install the package:

```bash
composer require laravel-enso/lockable-models
```

If needed, publish the config:

```bash
php artisan vendor:publish --tag=lockable-models-config
```

Default configuration:

```php
return [
    'lock_duration' => 5,
];
```

To use the package, your implementation typically needs:

- a model extending `LockableModel`
- a related lock model extending `ModelLock`
- a one-to-one table for storing the current lock
- the request middleware pair on routes that edit the model

## Features

- Creates user-specific temporary locks for editable models.
- Prevents concurrent actions when another user holds a non-expired lock.
- Allows the same user to continue editing an already locked model.
- Automatically expires stale locks after the configured duration.
- Releases locks automatically after successful requests.
- Provides reusable abstract models for both the lockable record and the lock record.

## Usage

Create a lockable model by extending the base class:

```php
use LaravelEnso\LockableModels\Models\LockableModel;

class Order extends LockableModel
{
}
```

Create a related lock model:

```php
use LaravelEnso\LockableModels\Models\ModelLock;

class OrderLock extends ModelLock
{
}
```

Protect editing routes with the middleware pair:

```php
Route::middleware([
    PreventActionOnLockedModels::class,
    UnlocksModelOnTerminate::class,
])->group(function () {
    // edit routes
});
```

Manually acquire and release a lock:

```php
$order->lockFor($user);
$order->unlockFor($user);
```

::: warning Note
`UnlocksModelOnTerminate` only releases locks when the response status is `200`.

If a request fails or returns a different success status, the lock remains active until it is explicitly released or it expires.
:::

## API

### Models

`LaravelEnso\LockableModels\Models\LockableModel`

Public methods:

- `lock()`
- `lockFor(User $user): void`
- `unlockFor(User $user): void`
- `lockForMinutes(): int`

`LaravelEnso\LockableModels\Models\ModelLock`

Public methods:

- `expired(): bool`
- `allowed(User $user): bool`
- `user(): BelongsTo`
- `scopeIsExpired(Builder $query): Builder`

### Middleware

- `PreventActionOnLockedModels`
- `UnlocksModelOnTerminate`

Behavior:

- detects route parameters that are instances of `LockableModel`
- blocks the request if a valid lock belongs to another user
- acquires the lock for the current user before handling the request
- releases the lock on terminate for successful `200` responses

### Exceptions

- `LaravelEnso\LockableModels\Exceptions\ModelLockException`

Current lock failure message:

- `Locked by: :user`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/lockable-models/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:29:27 PM</div>
</div>
