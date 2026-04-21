---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Packaging Units

[![License](https://poser.pugx.org/laravel-enso/packaging-units/license)](https://github.com/laravel-enso/packaging-units/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/packaging-units/version)](https://packagist.org/packages/laravel-enso/packaging-units)
[![Downloads](https://poser.pugx.org/laravel-enso/packaging-units/downloads)](https://packagist.org/packages/laravel-enso/packaging-units)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/packaging-units/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/packaging-units.svg)](https://github.com/laravel-enso/packaging-units/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/packaging-units.svg)](https://github.com/laravel-enso/packaging-units/pulls)

## Description

Packaging Units adds Enso administration flows for packaging and packing-unit records.

The package exposes CRUD, options, table init, table data, and Excel export endpoints, and includes seeders and factories for bootstrapping packaging-unit data.

It is intended to support product and logistics domains that distinguish packaging from measurement units.

## Installation

Install the package:

```bash
composer require laravel-enso/packaging-units
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=packaging-unit-factory
php artisan vendor:publish --tag=packaging-unit-seeder
```

## Features

- Packaging-unit CRUD endpoints.
- Options endpoint for select fields.
- Table init, table data, and Excel export endpoints.
- Seeders and factories for initial data.

## Usage

Main route group:

- `administration.packagingUnits.*`

## API

### HTTP routes

- `GET api/administration/packagingUnits/create`
- `POST api/administration/packagingUnits`
- `GET api/administration/packagingUnits/{packagingUnit}/edit`
- `PATCH api/administration/packagingUnits/{packagingUnit}`
- `DELETE api/administration/packagingUnits/{packagingUnit}`
- `GET api/administration/packagingUnits/initTable`
- `GET api/administration/packagingUnits/tableData`
- `GET api/administration/packagingUnits/exportExcel`
- `GET api/administration/packagingUnits/options`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/packaging-units`](https://docs.laravel-enso.com/frontend/packaging-units.html) [↗](https://github.com/enso-ui/packaging-units)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/packaging-units/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:08 PM</div>
</div>
