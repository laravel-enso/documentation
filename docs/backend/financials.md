---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Financials

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/financials/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.8.5-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/financials/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/financials/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-4-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/financials/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/financials/-/merge_requests)

## Description

Financials adds Enso client and supplier invoicing, payments, and finance dashboards.

The package exposes CRUD flows for client invoices, client payments, supplier invoices, supplier payments, invoice line editing, PDF and XML exports, and a statistics overview endpoint.

It is intended for private Enso deployments that need sales and purchase accounting workflows.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=fiscal-config
php artisan vendor:publish --tag=fiscal-factories
```

## Features

- Client invoice CRUD, PDF, Excel, XML, options, and line-management endpoints.
- Client payment CRUD, PDF, and Excel endpoints.
- Supplier invoice and payment CRUD with Excel and XML exports.
- Financial overview statistics endpoint.
- Configurable company fiscal data used by the generated documents.

## Usage

The package mounts its routes under:

- `financials.clients.invoices.*`
- `financials.clients.payments.*`
- `financials.suppliers.invoices.*`
- `financials.suppliers.payments.*`
- `financials.stats.overview`

Make sure the owner company profile is populated before generating fiscal documents, because document headers and issuer details are taken from that configuration.

## API

### HTTP routes

Client invoices:

- `GET api/financials/clients/invoices/create`
- `POST api/financials/clients/invoices`
- `GET api/financials/clients/invoices/{invoice}/edit`
- `PATCH api/financials/clients/invoices/{invoice}`
- `DELETE api/financials/clients/invoices/{invoice}`
- `GET api/financials/clients/invoices/initTable`
- `GET api/financials/clients/invoices/tableData`
- `GET api/financials/clients/invoices/exportExcel`
- `GET api/financials/clients/invoices/exportXML`
- `GET api/financials/clients/invoices/options`
- `GET api/financials/clients/invoices/{invoice}/pdf`

Client payments:

- `GET api/financials/clients/payments/create`
- `POST api/financials/clients/payments`
- `GET api/financials/clients/payments/{payment}/edit`
- `PATCH api/financials/clients/payments/{payment}`
- `DELETE api/financials/clients/payments/{payment}`
- `GET api/financials/clients/payments/initTable`
- `GET api/financials/clients/payments/tableData`
- `GET api/financials/clients/payments/exportExcel`
- `GET api/financials/clients/payments/{payment}/pdf`

Supplier invoices and payments expose the same CRUD and table endpoints under `api/financials/suppliers/...`, plus invoice XML export.

Stats:

- `GET api/financials/stats/overview`

## Depends On

Required Enso packages:

- [`laravel-enso/calendar`](https://docs.laravel-enso.com/backend/calendar.html) [↗](https://github.com/laravel-enso/calendar)
- [`laravel-enso/comments`](https://docs.laravel-enso.com/backend/comments.html) [↗](https://github.com/laravel-enso/comments)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/documents`](https://docs.laravel-enso.com/backend/documents.html) [↗](https://github.com/laravel-enso/documents)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/measurement-units`](https://docs.laravel-enso.com/backend/measurement-units.html) [↗](https://github.com/laravel-enso/measurement-units)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/pdf`](https://docs.laravel-enso.com/backend/pdf.html) [↗](https://github.com/laravel-enso/pdf)
- [`laravel-enso/services`](https://docs.laravel-enso.com/backend/services.html) [↗](https://github.com/laravel-enso/services)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/financials`](https://docs.laravel-enso.com/frontend/financials.html) [↗](https://git.xtelecom.ro/enso-ui/financials)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/financials/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:26 PM</div>
</div>
