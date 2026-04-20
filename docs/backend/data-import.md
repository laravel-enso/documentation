---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Data Import

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/data-import/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/data-import/version)](https://packagist.org/packages/laravel-enso/data-import)
[![Downloads](https://poser.pugx.org/laravel-enso/data-import/downloads)](https://packagist.org/packages/laravel-enso/data-import)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/data-import/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/data-import.svg)](https://github.com/laravel-enso/data-import/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/data-import.svg)](https://github.com/laravel-enso/data-import/pulls)

## Description

Data Import adds template-driven spreadsheet imports to Enso.

The package validates uploaded files against JSON template definitions, splits work into queued jobs, tracks import progress and status, generates rejected-row workbooks when needed, and exposes the API endpoints required by the Enso import UI.

It supports multi-sheet XLSX imports as well as CSV and TXT imports, with configurable structure validation, queue separation, and retention policies.

## Installation

Install the package:

```bash
composer require laravel-enso/data-import
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=data-import-config
php artisan vendor:publish --tag=data-import-factory
php artisan vendor:publish --tag=data-import-mail
php artisan vendor:publish --tag=data-import-examples
```

Register at least one import type in `config/enso/imports.php`:

```php
'configs' => [
    'userGroups' => [
        'label' => 'User Groups',
        'template' => 'app/Imports/Templates/userGroups.json',
    ],
],
```

The package schedules these maintenance commands daily:

- `enso:data-import:purge`
- `enso:data-import:cancel-stuck`

## Features

- Template-driven import definitions using JSON files.
- Queue-based splitting and processing for large imports.
- Support for `xlsx`, `csv`, and `txt` uploads.
- Strict or flexible structure validation.
- Rejected-row report generation with an extra errors column.
- Downloadable import templates generated from the JSON definition.

## Usage

Create an importer class that implements the package contract:

```php
use LaravelEnso\DataImport\Contracts\Importable;
use LaravelEnso\DataImport\Models\Import;
use LaravelEnso\Helpers\Services\Obj;

class UserGroupImporter implements Importable
{
    public function run(Obj $row, Import $import)
    {
        UserGroup::create($row->all());
    }
}
```

Point a template configuration entry to a JSON template that defines sheets, columns, and the importer class. The package can then:

- serve the generated template workbook
- validate uploaded files against the template
- queue the import when the structure is valid

## API

### HTTP routes

- `POST api/import/store`
- `DELETE api/import/{import}`
- `GET api/import/download/{import}`
- `GET api/import/initTable`
- `GET api/import/tableData`
- `GET api/import/exportExcel`
- `PATCH api/import/{import}/cancel`
- `PATCH api/import/{import}/restart`
- `GET api/import/options`
- `GET api/import/{type}`
- `GET api/import/{type}/template`
- `GET api/import/{rejected}/rejected`

### Artisan commands

- `enso:data-import:purge`
- `enso:data-import:cancel-stuck`

### Extension points

- `Importable`
- `BeforeHook`
- `AfterHook`
- `Authenticates`
- `Authorizes`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/excel`](https://docs.laravel-enso.com/backend/excel.html) [↗](https://github.com/laravel-enso/excel)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/io`](https://docs.laravel-enso.com/backend/io.html) [↗](https://git.xtelecom.ro/laravel-enso/io)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Required external package:

- [`openspout/openspout`](https://github.com/openspout/openspout) [↗](https://github.com/openspout/openspout)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/data-import/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 10:59:47 AM</div>
</div>
