---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Services

[![License](https://poser.pugx.org/laravel-enso/services/license)](https://github.com/laravel-enso/services/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/services/version)](https://packagist.org/packages/laravel-enso/services)
[![Downloads](https://poser.pugx.org/laravel-enso/services/downloads)](https://packagist.org/packages/laravel-enso/services)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/services/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/services.svg)](https://github.com/laravel-enso/services/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/services.svg)](https://github.com/laravel-enso/services/pulls)

## Description

Services manages sellable service records inside Laravel Enso.

The package ships the service model, CRUD endpoints, validation, options lookup, form builders, and a server-side table builder for the administration UI. It is intended for Enso applications that need reusable service catalog entries alongside products and measurement units.

## Installation

Install the package:

```bash
composer require laravel-enso/services
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=services-factories
```

## Features

- CRUD endpoints for service records.
- Form builders for create and edit flows backed by `service.json`.
- Server-side table builder backed by `services.json`.
- Options endpoint for async selects through `OptionsBuilder`.
- Supplier pivot payload support in the form builder and validator.
- Factories and feature coverage for forms, options, and datatable flows.

## Usage

The package mounts its routes automatically through `AppServiceProvider`.

Main flows:

- create and edit forms through `LaravelEnso\Services\Forms\Builders\Service`
- datatable bootstrap and rows through `LaravelEnso\Services\Tables\Builders\Service`
- select options through `LaravelEnso\Services\Http\Controllers\Options`

Validation is handled by `LaravelEnso\Services\Http\Requests\ValidateService`, which requires:

- `measurement_unit_id`
- `name`
- unique `code`
- positive `list_price`
- integer `vat_percent`
- optional supplier rows with acquisition prices

## API

Mounted under `api/services`:

- `GET create`
- `POST /`
- `GET {service}/edit`
- `PATCH {service}`
- `DELETE {service}`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`
- `GET options`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/measurement-units`](https://docs.laravel-enso.com/backend/measurement-units.html) [↗](https://github.com/laravel-enso/measurement-units)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/services`](https://docs.laravel-enso.com/frontend/services.html) [↗](https://github.com/enso-ui/services)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/services/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 8:06:44 PM</div>
</div>
