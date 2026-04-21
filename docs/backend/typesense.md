---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Typesense

[![License](https://poser.pugx.org/laravel-enso/typesense/license)](https://github.com/laravel-enso/typesense/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/typesense/version)](https://packagist.org/packages/laravel-enso/typesense)
[![Downloads](https://poser.pugx.org/laravel-enso/typesense/downloads)](https://packagist.org/packages/laravel-enso/typesense)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/typesense/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/typesense.svg)](https://github.com/laravel-enso/typesense/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/typesense.svg)](https://github.com/laravel-enso/typesense/pulls)

## Description

Typesense is the Enso backend settings package for the Typesense Scout driver.

It stores the single integration settings row, exposes an edit/update API for enabling or disabling Typesense-backed search, and acts as the runtime feature flag consumed by companion integrations such as `typesense-webshop`.

## Installation

Install the package:

```bash
composer require laravel-enso/typesense
```

Run the migrations:

```bash
php artisan migrate
```

Make sure the host application is already configured for:

- `laravel/scout`
- `typesense/typesense-php`
- the Typesense Laravel driver

## Features

- Persisted `typesense_settings` row with cached accessors.
- API endpoints for loading and updating settings.
- Boolean feature flag exposed through `Settings::enabled()`.
- Form builder integration for the administration UI.

## Usage

Routes are registered under:

- prefix: `api/integrations/typesense`
- name prefix: `integrations.typesense.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET /`
- `PATCH {settings}`

Model:

- `LaravelEnso\Typesense\Models\Settings`

Helpful accessors:

- `current()`
- `enabled()`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)

Companion frontend package:

- [`@enso-ui/typesense`](https://docs.laravel-enso.com/frontend/typesense.html) [↗](https://github.com/enso-ui/typesense)

External service dependency:

- Typesense search engine accessed through Laravel Scout and the Typesense Laravel driver

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/typesense/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:33:25 PM</div>
</div>
