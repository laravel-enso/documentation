---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Excel

[![License](https://poser.pugx.org/laravel-enso/excel/license)](https://github.com/laravel-enso/excel/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/excel/version)](https://packagist.org/packages/laravel-enso/excel)
[![Downloads](https://poser.pugx.org/laravel-enso/excel/downloads)](https://packagist.org/packages/laravel-enso/excel)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/excel/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/excel.svg)](https://github.com/laravel-enso/excel/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/excel.svg)](https://github.com/laravel-enso/excel/pulls)

## Description

Excel provides a small contract-based `.xlsx` export service for Laravel and Laravel Enso.

The package delegates spreadsheet writing to OpenSpout and keeps the exporter API intentionally simple: an exporter object declares the workbook filename, the sheet names, the heading row for each sheet, and the data rows for each sheet.

It is used in Enso to generate downloadable or persisted Excel files from domain-specific exporter classes without coupling those exporters to a concrete writer implementation.

## Installation

Install the package:

```bash
composer require laravel-enso/excel
```

The package does not require service provider registration.

To use it, create a class that implements `LaravelEnso\Excel\Contracts\ExportsExcel`, then pass that exporter to `LaravelEnso\Excel\Services\ExcelExport`.

If you want the generated file saved under a custom storage folder, also implement `LaravelEnso\Excel\Contracts\SavesToDisk`.

## Features

- Exports `.xlsx` files through OpenSpout.
- Supports multi-sheet workbooks.
- Uses a small `ExportsExcel` contract for exporter classes.
- Can stream files inline as downloads.
- Can save files to disk and return their storage path.
- Supports custom storage folders through `SavesToDisk`.

## Usage

Define an exporter:

```php
use LaravelEnso\Excel\Contracts\ExportsExcel;

class ContractorStock implements ExportsExcel
{
    public function filename(): string
    {
        return 'stock_report.xlsx';
    }

    public function heading(string $sheet): array
    {
        return match ($sheet) {
            'stock' => ['Product', 'Quantity'],
            'history' => ['Date', 'Product', 'Quantity'],
        };
    }

    public function rows(string $sheet): array
    {
        return match ($sheet) {
            'stock' => [['Panel', 12]],
            'history' => [['2026-04-18', 'Panel', 12]],
        };
    }

    public function sheets(): array
    {
        return ['stock', 'history'];
    }
}
```

Stream the export to the browser:

```php
use LaravelEnso\Excel\Services\ExcelExport;

return (new ExcelExport(new ContractorStock()))->inline();
```

Save it to disk:

```php
$path = (new ExcelExport(new ContractorStock()))->save();
```

Use a custom folder by implementing `SavesToDisk`:

```php
use LaravelEnso\Excel\Contracts\ExportsExcel;
use LaravelEnso\Excel\Contracts\SavesToDisk;

class OrderExport implements ExportsExcel, SavesToDisk
{
    public function folder(): string
    {
        return 'exports/orders';
    }
}
```

::: warning Note
Every sheet name returned by `sheets()` must have a matching `heading()` and `rows()` implementation.

When the exporter does not implement `SavesToDisk`, files are written under the default `temp` storage folder.
:::

## API

### Exporter Contracts

- `LaravelEnso\Excel\Contracts\ExportsExcel`
- `LaravelEnso\Excel\Contracts\SavesToDisk`

`ExportsExcel` requires:

- `filename(): string`
- `heading(string $sheet): array`
- `rows(string $sheet): array`
- `sheets(): array`

`SavesToDisk` adds:

- `folder(): string`

### Export Service

`LaravelEnso\Excel\Services\ExcelExport`

Public methods:

- `__construct(ExportsExcel $exporter)`
- `inline(): BinaryFileResponse`
- `save(): string`

Behavior:

- creates the workbook on disk first
- writes one worksheet per value returned by `sheets()`
- writes the heading row first, then all data rows
- downloads and deletes the file after send when using `inline()`

### Exception

`LaravelEnso\Excel\Exceptions\ExcelExport`

Currently exposes:

- `missingInterface()`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

External dependency:

- [`openspout/openspout`](https://github.com/openspout/openspout) [↗](https://github.com/openspout/openspout)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/excel/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:22:12 PM</div>
</div>
