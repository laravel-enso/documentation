---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sale Channels

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sale-channels/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.6.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sale-channels/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/sale-channels/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sale-channels/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sale-channels/-/merge_requests)

## Description

Sale Channels provides the administration layer for channel records used by commercial integrations and outbound order flows.

The package exposes CRUD, options, and table APIs for sale channels and publishes factories and seeders for local environment setup.

It is intended for applications that need distinct operational channels such as storefronts, marketplaces, or fulfillment streams referenced by downstream integrations.

## Installation

Install the package:

```bash
composer require laravel-enso/sale-channels
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=sale-channels-seeders
```

## Features

- Sale channel CRUD, options, table init, table data, and Excel export endpoints.
- Backoffice forms and tables through Enso form and table builders.
- Published seeders for local bootstrap flows.

## Usage

Main route group:

- `administration.saleChannels.*`

Use the `options` endpoint when another package needs to bind a sale channel select field.

## API

### HTTP routes

- `GET api/administration/saleChannels/create`
- `POST api/administration/saleChannels`
- `GET api/administration/saleChannels/{saleChannel}/edit`
- `PATCH api/administration/saleChannels/{saleChannel}`
- `DELETE api/administration/saleChannels/{saleChannel}`
- `GET api/administration/saleChannels/initTable`
- `GET api/administration/saleChannels/tableData`
- `GET api/administration/saleChannels/exportExcel`
- `GET api/administration/saleChannels/options`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/sale-channels`](https://docs.laravel-enso.com/frontend/sale-channels.html) [↗](https://git.xtelecom.ro/enso-ui/sale-channels)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/sale-channels/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
