---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Core

[![License](https://poser.pugx.org/laravel-enso/core/license)](https://github.com/laravel-enso/core/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/core/version)](https://packagist.org/packages/laravel-enso/core)
[![Downloads](https://poser.pugx.org/laravel-enso/core/downloads)](https://packagist.org/packages/laravel-enso/core)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](https://github.com/laravel-enso/core/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/core.svg)](https://github.com/laravel-enso/core/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/core.svg)](https://github.com/laravel-enso/core/pulls)

## Description

Core is the backend shell of a Laravel Enso application.

It aggregates the packages required for a standard Enso installation, registers the framework-level service providers and middleware stack, exposes the base authentication and SPA endpoints, builds the frontend boot state, manages user preferences, publishes shared assets and mail resources, and provides a handful of operational commands used across Enso projects.

It is the package that turns the rest of the Enso ecosystem into a coherent application runtime.

## Installation

This package is intended to be installed as the main backend dependency of an Enso application:

```bash
composer require laravel-enso/core
```

After installation, run the standard setup steps:

```bash
php artisan migrate
php artisan db:seed
```

If you want to publish the package resources, the relevant tags are:

```bash
php artisan vendor:publish --tag=core-config
php artisan vendor:publish --tag=core-seeders
php artisan vendor:publish --tag=core-assets
php artisan vendor:publish --tag=core-email
```

The package automatically:

- loads API routes
- loads migrations
- loads mail views
- registers Enso service providers
- configures the Eloquent factory resolver for package models

## Features

- Provides the base Enso API shell, including guest meta, SPA home state, auth routes, and preferences routes.
- Registers the `core` middleware group used by authenticated Enso routes.
- Configures password policy defaults from `enso.auth.password`.
- Builds the SPA boot state from state providers discovered across Enso packages.
- Persists per-user global and route-level preferences.
- Publishes shared email templates and image assets.
- Registers operational commands for version reporting, storage resets, preference resets, preference upgrades, and app-update notifications.
- Integrates login tracking, password reset flows, websocket support, route authorization, localisation, impersonation, and action logging through the wider Enso stack.

## Usage

The package exposes the guest meta endpoint:

```php
route('meta');
```

Authenticated clients bootstrap the SPA state through:

```php
route('core.home.index');
```

Preferences can be updated per route or globally through:

```php
route('core.preferences.store', ['route' => 'administration.users.index']);
route('core.preferences.reset');
```

Useful built-in commands:

```bash
php artisan enso:version
php artisan enso:preferences:reset
php artisan enso:preferences:update-global
php artisan enso:storage:reset
php artisan enso:announce-app-update
```

The frontend counterpart for the API shell and shared UI runtime lives in the Enso UI package:

- [`@enso-ui/ui`](https://github.com/enso-ui/ui) [↗](https://github.com/enso-ui/ui)

::: warning Note
`core.home.index` does not return a Blade page. It returns the merged state payload produced by the Enso state builder, grouped by frontend store.
:::

## API

### Routes

Guest / auth endpoints:

- `GET /api/meta`
- `POST /api/login`
- `POST /api/password/email`
- `POST /api/password/reset`
- `POST /api/logout`

Authenticated core endpoints:

- `GET /api/core/home`
- `PATCH /api/core/preferences/store/{route?}`
- `POST /api/core/preferences/reset/{route?}`

### Middleware

Aliases:

- `verify-active-state`
- `xss-sanitizer`
- `ensure-frontent-requests-are-stateful`

`core` middleware group:

- `VerifyActiveState`
- `ActionLogger`
- `Impersonate`
- `VerifyRouteAccess`
- `SetLanguage`

### State System

State is built through:

- `LaravelEnso\Core\Services\State\Builder`
- `LaravelEnso\Core\Services\State\Source`

It scans configured vendors from:

- `config('enso.state.vendors')`

Built-in state providers include:

- `Meta`
- `Preferences`
- `Themes`
- `Websockets`

### Preferences

Model:

- `LaravelEnso\Core\Models\Preferences`

Capabilities:

- route-level local preferences
- global preferences
- theme updates
- language updates
- reset to factory defaults

### Commands

- `enso:version`
- `enso:preferences:reset`
- `enso:preferences:update-global`
- `enso:storage:reset`
- `enso:announce-app-update`

### Events and Notifications

Events:

- `LaravelEnso\Core\Events\Login`
- `LaravelEnso\Core\Events\AppUpdate`

Notifications:

- `PasswordExpiresSoon`
- `ResetPassword`

## Depends On

Required Enso packages:

- [`laravel-enso/action-logger`](https://docs.laravel-enso.com/backend/action-logger.html) [↗](https://github.com/laravel-enso/action-logger)
- [`laravel-enso/charts`](https://docs.laravel-enso.com/backend/charts.html) [↗](https://github.com/laravel-enso/charts)
- [`laravel-enso/countries`](https://docs.laravel-enso.com/backend/countries.html) [↗](https://github.com/laravel-enso/countries)
- [`laravel-enso/data-export`](https://docs.laravel-enso.com/backend/data-export.html) [↗](https://github.com/laravel-enso/data-export)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/history-tracker`](https://docs.laravel-enso.com/backend/history-tracker.html) [↗](https://github.com/laravel-enso/history-tracker)
- [`laravel-enso/impersonate`](https://docs.laravel-enso.com/backend/impersonate.html) [↗](https://github.com/laravel-enso/impersonate)
- [`laravel-enso/localisation`](https://docs.laravel-enso.com/backend/localisation.html) [↗](https://github.com/laravel-enso/localisation)
- [`laravel-enso/logs`](https://docs.laravel-enso.com/backend/logs.html) [↗](https://github.com/laravel-enso/logs)
- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/notifications`](https://docs.laravel-enso.com/backend/notifications.html) [↗](https://github.com/laravel-enso/notifications)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)
- [`laravel-enso/sentry`](https://docs.laravel-enso.com/backend/sentry.html) [↗](https://github.com/laravel-enso/sentry)
- [`laravel-enso/upgrade`](https://docs.laravel-enso.com/backend/upgrade.html) [↗](https://github.com/laravel-enso/upgrade)
- [`laravel-enso/user-groups`](https://docs.laravel-enso.com/backend/user-groups.html) [↗](https://github.com/laravel-enso/user-groups)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Framework and external dependencies:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)
- [`laravel/sanctum`](https://github.com/laravel/sanctum) [↗](https://github.com/laravel/sanctum)
- [`jenssegers/agent`](https://github.com/jenssegers/agent) [↗](https://github.com/jenssegers/agent)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/core/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:22:02 PM</div>
</div>
