---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Data Export

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/data-export/version)](https://packagist.org/packages/laravel-enso/data-export)
[![Downloads](https://poser.pugx.org/laravel-enso/data-export/downloads)](https://packagist.org/packages/laravel-enso/data-export)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/data-export.svg)](https://github.com/laravel-enso/data-export/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/data-export.svg)](https://github.com/laravel-enso/data-export/pulls)

## Description

Data Export adds tracked XLSX export generation to Enso.

The package stores export state and progress, attaches the generated file to the Enso files system, supports both asynchronous query-based exports and synchronous in-memory exporters, and notifies users when the export finishes or fails.

It is designed for backoffice flows where long-running exports should be observable, cancellable, and retained for a configurable period.

## Installation

Install the package:

```bash
composer require laravel-enso/data-export
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=data-export-config
php artisan vendor:publish --tag=data-export-mail
```

Default configuration:

```php
return [
    'rowLimit' => env('EXPORT_ROW_LIMIT', 1000000),
    'retainFor' => (int) env('EXPORT_RETAIN_FOR', 60),
];
```

The package schedules `enso:data-export:purge` daily.

## Features

- Asynchronous XLSX exports based on a query builder.
- Synchronous export support for classic Enso Excel exporters.
- Export progress tracking and IO broadcasting support.
- File attachment and cleanup integration through `laravel-enso/files`.
- Hooks for setup, teardown, custom notifications, custom row actions, and custom sheet names.
- Cancel endpoint and automatic retention purge.

## Usage

Implement the asynchronous exporter contract:

```php
use Illuminate\Database\Eloquent\Builder;
use LaravelEnso\DataExport\Contracts\ExportsExcel;

class OrdersExport implements ExportsExcel
{
    public function filename(): string
    {
        return 'orders.xlsx';
    }

    public function heading(): array
    {
        return ['Id', 'Number'];
    }

    public function query(): Builder
    {
        return Order::query();
    }

    public function attributes(): array
    {
        return ['id', 'number'];
    }

    public function mapping($row): array
    {
        return [$row->id, $row->number];
    }
}
```

Dispatch the export through the model:

```php
use LaravelEnso\DataExport\Models\Export;

Export::excel(new OrdersExport());
```

## API

### HTTP routes

- `PATCH api/export/{export}/cancel`

Route name:

- `export.cancel`

### Artisan commands

- `enso:data-export:purge`

### Extension points

- `BeforeHook`
- `AfterHook`
- `CustomCount`
- `CustomMax`
- `CustomMin`
- `CustomRowAction`
- `CustomSheetName`
- `Notifies`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/io`](https://docs.laravel-enso.com/backend/io.html) [↗](https://git.xtelecom.ro/laravel-enso/io)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Optional Enso companion package:

- [`laravel-enso/excel`](https://docs.laravel-enso.com/backend/excel.html) [↗](https://github.com/laravel-enso/excel)

Required external package:

- [`openspout/openspout`](https://github.com/openspout/openspout) [↗](https://github.com/openspout/openspout)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/data-export/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 7/9/2020, 8:53:26 AM</div>
</div>
