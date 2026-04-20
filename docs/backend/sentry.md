---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sentry

[![License](https://poser.pugx.org/laravel-enso/sentry/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/sentry/version)](https://packagist.org/packages/laravel-enso/sentry)
[![Downloads](https://poser.pugx.org/laravel-enso/sentry/downloads)](https://packagist.org/packages/laravel-enso/sentry)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/sentry.svg)](https://github.com/laravel-enso/sentry/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/sentry.svg)](https://github.com/laravel-enso/sentry/pulls)

## Description

Sentry integrates Laravel Enso with Sentry error reporting.

The package provides a small exception-reporting helper that enriches captured events with the current Enso user and role, deduplicates repeated exceptions for a configurable interval, stores the last Sentry event id per authenticated user, and exposes an authenticated endpoint that allows the frontend to retrieve that event id.

It is designed to complement Enso's backend exception pipeline and frontend error-reporting flows without requiring application code to talk to the Sentry SDK directly.

## Installation

Install the package in an application that already uses the Sentry Laravel SDK:

```bash
composer require laravel-enso/sentry
```

If needed, publish the package config:

```bash
php artisan vendor:publish --tag=enso-sentry-config
```

Default configuration:

```php
return [
    'dedupeInterval' => 5,
];
```

## Features

- Reports unhandled exceptions through the Sentry Laravel integration.
- Enriches Sentry scope with the authenticated Enso user id, name, email, and role.
- Deduplicates repeated exceptions for a configurable interval.
- Stores the latest Sentry event id per authenticated user in cache.
- Exposes an authenticated API endpoint for reading the current event id from the frontend.
- Falls back to the file cache store for Redis exceptions during dedupe checks.

## Usage

Report an exception through the package handler:

```php
use LaravelEnso\Sentry\Exceptions\Handler;

Handler::report($exception);
```

Read the current event id from backend code:

```php
$eventId = Handler::eventId();
```

The frontend can retrieve the same value from:

```php
route('sentry');
```

Which returns:

```json
{
  "eventId": "..."
}
```

::: tip Tip
The handler stores the event id only when the application is running in production and an authenticated user is available.
:::

## API

### Route

Authenticated endpoint:

- `GET /api/sentry`

Route name:

- `sentry`

Middleware:

- `api`
- `auth`

### Controller

`LaravelEnso\Sentry\Http\Controllers\Sentry`

Returns:

- `eventId`

### Exception Handler Helper

`LaravelEnso\Sentry\Exceptions\Handler`

Public methods:

- `report(Throwable $exception): void`
- `eventId(): ?string`

Behavior:

- skips duplicate exceptions within the dedupe interval
- resolves the current user across the configured default guard, `web`, and `sanctum`
- sends the exception to Sentry as an unhandled exception
- stores the last event id per authenticated user when running in production

### Configuration

`config/enso/sentry.php`

Keys:

- `dedupeInterval`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/sentry/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:25:58 PM</div>
</div>
