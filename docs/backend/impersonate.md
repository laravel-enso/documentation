---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Impersonate

[![License](https://poser.pugx.org/laravel-enso/impersonate/license)](https://github.com/laravel-enso/impersonate/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/impersonate/version)](https://packagist.org/packages/laravel-enso/impersonate)
[![Downloads](https://poser.pugx.org/laravel-enso/impersonate/downloads)](https://packagist.org/packages/laravel-enso/impersonate)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/impersonate/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/impersonate.svg)](https://github.com/laravel-enso/impersonate/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/impersonate.svg)](https://github.com/laravel-enso/impersonate/pulls)

## Description

Impersonate adds Enso user impersonation routes, middleware, and frontend boot state.

The package exposes start and stop impersonation endpoints, registers the `impersonate` middleware alias, and publishes an `Impersonating` state provider so the frontend can reflect the current session mode.

It is a focused authentication-adjacent package, not a full access-management system on its own.

## Installation

Install the package:

```bash
composer require laravel-enso/impersonate
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Start and stop impersonation endpoints.
- Dedicated impersonation middleware alias.
- Frontend state provider for current impersonation status.
- Authorization provider wiring through the package service providers.

## Usage

The package mounts:

```php
route('core.impersonate.start', ['user' => $user]);
route('core.impersonate.stop');
```

## API

### HTTP routes

- `GET api/core/impersonate/{user}`
- `GET api/core/impersonate/stop`

### Middleware

- `impersonate`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/impersonate/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 4:48:58 PM</div>
</div>
