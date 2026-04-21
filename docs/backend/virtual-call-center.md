---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Virtual Call Center

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.2.0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/merge_requests)

## Description

Virtual Call Center records inbound and outbound call logs inside Enso.

The package exposes a Sanctum-protected log endpoint for the external telephony system, normalizes the upstream payload into the local log model, and provides the usual Enso table bootstrap/data/export endpoints for operational review.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the migrations:

```bash
php artisan migrate
```

## Features

- External call-log ingestion endpoint.
- Table bootstrap, data, and export endpoints for logs.
- Validation and duplicate detection for call references.
- Enum mapping for call direction and call status.
- Upgrade path for IVR key changes.

## Usage

Backoffice routes:

- prefix: `api/system/virtualCallCenter`
- name prefix: `system.virtualCallCenter.`
- endpoints: `initTable`, `tableData`, `exportExcel`

Integration route:

- middleware: `auth:sanctum`, `core-api`
- endpoint: `POST log`

Incoming payload fields mapped by `ValidateLog`:

- `IdCall`
- `Directie`
- `StatusApel`
- `NrLinie`
- `Extensie`
- `NrClient`
- `IVRkey`
- `DurataApel`
- `DurataApelAgent`
- `Recording`

Main model:

- `LaravelEnso\VirtualCallCenter\Models\Log`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)

Companion frontend package:

- [`@enso-ui/virtual-call-center`](https://docs.laravel-enso.com/frontend/virtual-call-center.html) [↗](https://github.com/enso-ui/virtual-call-center)

External service dependency:

- Call-center integration posting call logs through a Sanctum-protected API endpoint

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/virtual-call-center/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 8:00:49 PM</div>
</div>
