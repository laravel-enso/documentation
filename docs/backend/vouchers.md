---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Vouchers

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/vouchers/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.5.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/vouchers/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/vouchers/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/vouchers/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/vouchers/-/merge_requests)

## Description

Vouchers manages voucher records and administration flows inside Enso.

The package exposes create/edit/table/export endpoints, persists voucher entries with creator/updater tracking, and integrates with measurement units and the shared form/table infrastructure.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the migrations:

```bash
php artisan migrate
```

## Features

- CRUD endpoints for vouchers.
- Table bootstrap, data, and export endpoints.
- JSON form template and table template integration.
- `track-who` auditing on the voucher model.

## Usage

Routes are registered under:

- prefix: `api/commercial/vouchers`
- name prefix: `commercial.vouchers.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET create`
- `POST /`
- `GET {voucher}/edit`
- `PATCH {voucher}`
- `DELETE {voucher}`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`

Main model:

- `LaravelEnso\Vouchers\Models\Voucher`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/measurement-units`](https://docs.laravel-enso.com/backend/measurement-units.html) [↗](https://github.com/laravel-enso/measurement-units)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/vouchers`](https://docs.laravel-enso.com/frontend/vouchers.html) [↗](https://github.com/enso-ui/vouchers)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/vouchers/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:34:59 PM</div>
</div>
