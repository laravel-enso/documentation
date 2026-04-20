---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Google

[![License](https://poser.pugx.org/laravel-enso/google/license)](https://github.com/laravel-enso/google/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/google/version)](https://packagist.org/packages/laravel-enso/google)
[![Downloads](https://poser.pugx.org/laravel-enso/google/downloads)](https://packagist.org/packages/laravel-enso/google)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/google/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/google.svg)](https://github.com/laravel-enso/google/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/google.svg)](https://github.com/laravel-enso/google/pulls)

## Description

Google adds Google-related settings, geocoding helpers, Places review access, and a reCAPTCHA validation rule for Laravel Enso.

The package stores a single settings record, supports environment overrides for analytics, ads, maps, places, geocoding, and reCAPTCHA keys, exposes settings endpoints under the Integrations area, and includes a manual upgrade helper for moving legacy table columns toward environment-based configuration.

It is a lightweight integration package rather than a full Google SDK wrapper.

## Installation

Install the package:

```bash
composer require laravel-enso/google
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=google-config
```

## Features

- Settings record for Google integration keys and IDs.
- Settings endpoints under `integrations.google.settings`.
- Geocoding and Places helper services.
- Invokable reCAPTCHA validation rule backed by the configured secret.
- Manual upgrade helper for deprecating old database columns.

## Usage

Resolve current runtime settings through the settings model:

```php
use LaravelEnso\Google\Models\Settings;

$mapsKey = Settings::mapsKey();
$placesKey = Settings::placesKey();
$recaptchaKey = Settings::recaptchaKey();
```

Use the validation rule:

```php
use LaravelEnso\Google\Validation\Recaptcha;
```

## API

### HTTP routes

- `GET api/integrations/google/settings`
- `PATCH api/integrations/google/settings/{settings}`

### Services

- `LaravelEnso\\Google\\APIs\\Geocoding`
- `LaravelEnso\\Google\\APIs\\Reviews`
- `LaravelEnso\\Google\\Validation\\Recaptcha`

## Depends On

Required Enso packages:

- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/upgrade`](https://docs.laravel-enso.com/backend/upgrade.html) [↗](https://github.com/laravel-enso/upgrade)

Companion frontend package:

- [`@enso-ui/google`](https://docs.laravel-enso.com/frontend/google.html) [↗](https://github.com/enso-ui/google)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/google/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:30 PM</div>
</div>
