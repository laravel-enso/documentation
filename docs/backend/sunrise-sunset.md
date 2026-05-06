---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sunrise Sunset

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/sunrise-sunset/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/sunrise-sunset/version)](https://packagist.org/packages/laravel-enso/sunrise-sunset)
[![Downloads](https://poser.pugx.org/laravel-enso/sunrise-sunset/downloads)](https://packagist.org/packages/laravel-enso/sunrise-sunset)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/sunrise-sunset/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/sunrise-sunset.svg)](https://github.com/laravel-enso/sunrise-sunset/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/sunrise-sunset.svg)](https://github.com/laravel-enso/sunrise-sunset/pulls)

## Description

Sunrise Sunset integrates the [sunrisesunset.io](https://sunrisesunset.io/api/) service into Laravel Enso.

The package wraps the external API behind an Enso `Action`, logs outbound calls through `laravel-enso/api`, exposes a protected application route, and stores the Enso structure required for access control.

It is intended for applications that need sunrise and sunset times for a configured location without implementing the remote call flow manually.

## Installation

Install the package:

```bash
composer require laravel-enso/sunrise-sunset
```

Run the package migration:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=sunrise-sunset-config
```

Configure the target coordinates:

```php
// config/enso/sunriseSunset.php
return [
    'latitude' => env('SUNRISE_SUNSET_LATITUDE'),
    'longitude' => env('SUNRISE_SUNSET_LONGITUDE'),
];
```

## Features

- wraps the `sunrisesunset.io` JSON endpoint through `laravel-enso/api`
- exposes an Enso route for authenticated callers
- logs outbound requests and responses through the API package
- registers a package permission for route-level access control
- keeps latitude and longitude configurable through Enso config

## Usage

The package exposes an internal action that can be called directly:

```php
use Carbon\Carbon;
use LaravelEnso\SunriseSunset\Actions\Get;

$response = (new Get(
    Carbon::parse('2026-05-01'),
    Carbon::parse('2026-05-07'),
))->handle();

$payload = $response->json();
```

The endpoint sends these query parameters to the upstream API:

- `date_start`
- `date_end`
- `lat`
- `lng`

The latitude and longitude values are resolved from:

- `config('enso.sunriseSunset.latitude')`
- `config('enso.sunriseSunset.longitude')`

## API

### HTTP route

- `GET api/sunriseSunset` named `sunriseSunset.index`

The route is loaded inside the Enso middleware stack:

- `api`
- `auth`
- `core`

### Internal classes

- `LaravelEnso\SunriseSunset\Actions\Get`
- `LaravelEnso\SunriseSunset\Endpoints\Get`
- `LaravelEnso\SunriseSunset\Http\Controllers\Index`

## Depends On

Required Enso package:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)

Related Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)

External service dependency:

- [`sunrisesunset.io`](https://sunrisesunset.io/api/) [↗](https://sunrisesunset.io/api/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/sunrise-sunset/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/6/2026, 8:21:18 PM</div>
</div>
