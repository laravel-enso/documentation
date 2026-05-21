---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Audit

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/laravel-enso/audit/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.0.7-2563eb.svg)](https://packagist.org/packages/laravel-enso/audit)
[![Downloads](https://img.shields.io/packagist/dm/laravel-enso/audit.svg)](https://packagist.org/packages/laravel-enso/audit)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/audit/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/audit.svg)](https://github.com/laravel-enso/audit/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/audit.svg)](https://github.com/laravel-enso/audit/pulls)

## Description

Audit records Eloquent model create, update, and delete events and exposes them through an Enso table endpoint.

The package does not auto-discover auditable models. Each application or package must explicitly list the models it wants audited in its audit service provider. The package registers the audit observer for those models.

## Installation

Install the package:

```bash
composer require laravel-enso/audit
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Stores `created`, `updated`, and `deleted` events together with before/after payloads.
- Uses explicit model registration through `AuditServiceProvider::$models`.
- Supports restricted payloads through an `auditableAttributes()` method on the audited model.
- Registers the audit observer for configured models and exposes those classes as select options for the frontend model filter.
- Exposes the audit creation timestamp as a sortable date column for table and date interval filtering.
- Stores the actor through `track-who` on the audit record itself.
- Publishes table-init, table-data, export, and model-options endpoints under `api/system/audit`.

## Usage

Register auditable models from the consuming application or package service provider:

```php
namespace App\Providers;

use App\Models\Invoice;
use LaravelEnso\Audit\AuditServiceProvider as ServiceProvider;

class AuditServiceProvider extends ServiceProvider
{
    public $models = [
        Invoice::class,
    ];
}
```

By default, all model attributes are recorded.

To limit the recorded payload, define an `auditableAttributes()` method on the model:

```php
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    public function auditableAttributes(): array
    {
        return ['status', 'total'];
    }
}
```

## Upgrade Guide

### 2.0.7

Audit providers now declare audited models through `public $models = [...]`. The package registers `LaravelEnso\Audit\Observers\Audit` automatically for that list and exposes the same model list to the frontend filter endpoint. Replace older `$auditable` or `$observers` declarations with `$models`.

### 2.0.3

The audit table now includes the `created_at` date column, enabling the frontend date interval filter on audit rows.

### 2.0.2

Audited model classes are now collected from `AuditServiceProvider::$models`, registered with the audit observer, and exposed through `system.audit.models` / `GET api/system/audit/models` for frontend model filters.

### 2.0.0

This is a breaking release.

Auditable model discovery was removed. Models are no longer detected automatically. List each audited model in `AuditServiceProvider::$models`; the package registers `LaravelEnso\Audit\Observers\Audit` for that list. To restrict the recorded payload, define an `auditableAttributes()` method on that model.

## API

### Main route group

Mounted under `api/system/audit`:

- `system.audit.initTable`
- `system.audit.tableData`
- `system.audit.exportExcel`
- `system.audit.models`

The model options route returns the audited models registered through `AuditServiceProvider::$models`:

- `GET api/system/audit/models`

### Core classes

- `LaravelEnso\Audit\AuditServiceProvider`
- `LaravelEnso\Audit\Observers\Audit`
- `LaravelEnso\Audit\Models\Audit`
- `LaravelEnso\Audit\Services\Models`

## Depends On

Required Enso packages:

- [`laravel-enso/enums`](https://github.com/laravel-enso/enums)
- [`laravel-enso/migrator`](https://github.com/laravel-enso/migrator)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html)
- [`laravel-enso/users`](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/audit`](https://docs.laravel-enso.com/frontend/audit.html) [↗](https://github.com/enso-ui/audit)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/laravel-enso/audit/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/audit/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/13/2026, 1:31:47 PM</div>
</div>
