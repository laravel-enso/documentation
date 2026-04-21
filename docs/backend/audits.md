---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Audits

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/laravel-enso/audits/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.0-2563eb.svg)](https://packagist.org/packages/laravel-enso/audits)
[![Downloads](https://img.shields.io/packagist/dm/laravel-enso/audits.svg)](https://packagist.org/packages/laravel-enso/audits)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/audits/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/audits.svg)](https://github.com/laravel-enso/audits/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/audits.svg)](https://github.com/laravel-enso/audits/pulls)

## Description

Audits records model create, update, and delete events across monitored Eloquent models and exposes them through an Enso table endpoint.

The package auto-registers a model observer for all auditable models discovered under the configured vendor roots, stores before/after change payloads in the `audits` table, and publishes the backend routes consumed by the matching frontend audits page.

## Installation

Install the package:

```bash
composer require laravel-enso/audits
```

Run the package migrations:

```bash
php artisan migrate
```

The package auto-discovers its service providers. In applications that need to narrow the monitored model set, extend `LaravelEnso\\Audits\\AuditServiceProvider` in the host app and register the custom provider in `bootstrap/providers.php`.

## Features

- Automatically observes auditable models discovered under the configured vendor directories.
- Stores `created`, `updated`, and `deleted` events together with before/after payloads.
- Supports restricted auditing through the `RestrictedAuditable` contract.
- Publishes table-init, table-data, export, and options endpoints under `api/system/audit`.

## Usage

Mark a model as auditable:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Audits\Contracts\Auditable;

class Invoice extends Model implements Auditable
{
}
```

Limit the recorded attributes:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Audits\Contracts\RestrictedAuditable;

class Invoice extends Model implements RestrictedAuditable
{
    public function auditableAttributes(): array
    {
        return ['status', 'total'];
    }
}
```

By default, the package scans all vendor folders listed in `config('enso.audits.vendors')` and the application namespace for models that implement the auditing contracts.

## API

### Main route group

Mounted under `api/system/audit`:

- `system.audit.initTable`
- `system.audit.tableData`
- `system.audit.exportExcel`
- `system.audit.options`

### Contracts

- `LaravelEnso\\Audits\\Contracts\\Auditable`
- `LaravelEnso\\Audits\\Contracts\\RestrictedAuditable`

### Core classes

- `LaravelEnso\\Audits\\Observers\\ModelObserver`
- `LaravelEnso\\Audits\\Models\\Audit`
- `LaravelEnso\\Audits\\Services\\AuditableModels`

## Depends On

Required Enso packages:

- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/audits`](https://docs.laravel-enso.com/frontend/audits.html) [↗](https://github.com/enso-ui/audits)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/laravel-enso/audits/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/audits/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:24:41 AM</div>
</div>
