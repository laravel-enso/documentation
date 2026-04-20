---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Action Logger

[![License](https://poser.pugx.org/laravel-enso/action-logger/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/action-logger/version)](https://packagist.org/packages/laravel-enso/action-logger)
[![Downloads](https://poser.pugx.org/laravel-enso/action-logger/downloads)](https://packagist.org/packages/laravel-enso/action-logger)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/action-logger.svg)](https://github.com/laravel-enso/action-logger/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/action-logger.svg)](https://github.com/laravel-enso/action-logger/pulls)

## Description

Action Logger records authenticated user activity for routes that opt into Enso's `action-logger` middleware.

It is a small backend package focused on request auditing at the application edge. It captures which authenticated user accessed which named route, by which HTTP method, at what URL, and how long the request took to complete.

The package is designed to work inside the Laravel Enso ecosystem and integrates with Enso users, permissions, and dynamic relationships.

## Installation

This package comes pre-installed in Laravel Enso distributions that require activity tracking.

For standalone package installation inside an Enso-based application:

```bash
composer require laravel-enso/action-logger
```

The package auto-registers its service provider, loads its migrations, and registers the `action-logger` middleware alias.

Run the migrations after installation:

```bash
php artisan migrate
```

## Features

- Registers the `action-logger` route middleware alias.
- Creates and maintains the `action_logs` table through package migrations.
- Persists one log entry per authenticated request handled by the middleware.
- Stores `user_id`, `url`, `route`, `method`, `duration`, and timestamps for each action.
- Adds a dynamic `actionLogs()` relationship to the Enso `User` model.
- Exposes an `ActionLog` model with `user()` and `permission()` relationships.
- Links logged route names back to Enso permissions through the `permission()` relation.

## Usage

Apply the middleware to the routes you want to track:

```php
Route::middleware(['web', 'auth', 'action-logger'])
    ->group(function (): void {
        Route::get('/administration/users/{user}', UserController::class)
            ->name('administration.users.show');
    });
```

Once the middleware is active, every authenticated request matched by those routes will create a new action log entry when the request terminates.

The package also adds an `actionLogs()` relationship to the Enso user model, so user activity can be queried directly:

```php
$logs = $user->actionLogs()
    ->latest()
    ->get();
```

## API

### Middleware

- Alias: `action-logger`
- Class: `LaravelEnso\ActionLogger\Http\Middleware\ActionLogger`
- Behavior: creates the log entry in `terminate()`, after the response is sent

### Model

`LaravelEnso\ActionLogger\Models\ActionLog`

Stored attributes:

- `user_id`
- `url`
- `route`
- `method`
- `duration`
- `created_at`
- `updated_at`

Relationships:

- `user()`
  Belongs to `LaravelEnso\Users\Models\User`
- `permission()`
  Belongs to `LaravelEnso\Permissions\Models\Permission` using `route -> name`

### Dynamic User Relation

The package binds an `actionLogs()` relation to `LaravelEnso\Users\Models\User` through the Enso dynamic-methods package.

::: warning Note
This package only logs actions for authenticated requests. If no authenticated user is available, no action log entry is created.

Because it relies on the resolved route name, routes without meaningful names provide less useful audit data.
:::

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Framework dependency:

- Laravel 12 compatible application stack

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/action-logger/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:21:16 PM</div>
</div>
