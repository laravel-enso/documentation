---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Smart Bill

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/smart-bill/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.5.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/smart-bill/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/smart-bill/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/smart-bill/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/smart-bill/-/merge_requests)

## Description

Smart Bill integrates Laravel Enso with the SmartBill invoicing API.

The package stores integration settings, exposes the backoffice settings form, and provides action classes for issuing, downloading, and cancelling invoices through the remote API.

It is intended for commercial flows that need SmartBill as the fiscal invoice provider while keeping invoice payload composition inside Enso resources.

## Installation

Install the package:

```bash
composer require laravel-enso/smart-bill
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Settings screen for base URL, auth token, username, VAT code, invoice series, and enablement.
- Action classes for invoice issue, download, and cancel flows.
- SmartBill endpoint wrappers separated from the invoice resource builders.
- Invoice resource mapping for clients and product rows.

## Usage

Main route group:

- `integrations.smartBill.settings.*`

Typical invoice issue flow:

```php
use LaravelEnso\SmartBill\Actions\Invoice\Issue;

(new Issue($client, $address, $products, $data))->handle();
```

Settings validation requires remote credentials when the integration is enabled.

## API

### HTTP routes

- `GET api/integrations/smartBill/settings`
- `PATCH api/integrations/smartBill/settings/{settings}`

### Invoice actions

- `LaravelEnso\\SmartBill\\Actions\\Invoice\\Issue`
- `LaravelEnso\\SmartBill\\Actions\\Invoice\\Download`
- `LaravelEnso\\SmartBill\\Actions\\Invoice\\Cancel`

Behavior:

- builds SmartBill payloads through invoice resources
- calls dedicated API endpoints
- persists local invoice references for later retrieval

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://git.xtelecom.ro/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/smart-bill`](https://docs.laravel-enso.com/frontend/smart-bill.html) [↗](https://git.xtelecom.ro/enso-ui/smart-bill)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/smart-bill/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
