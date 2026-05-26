---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# BTRL (Banca Transilvania iPay)

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/btrl/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/btrl/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/btrl/-/blob/main/composer.json)

## Description

BTRL integrates Laravel Enso payment flows with the Banca Transilvania iPay API.

The package stores the remote credentials, exposes the settings API used by the admin UI, registers payment intents against the Banca Transilvania gateway, persists card transaction attempts locally, and refreshes transaction status from the remote platform.

It is intended for private deployments that need Banca Transilvania iPay as an online card-payment gateway.

## Installation

This is a proprietary package distributed through the private Enso registry or a private path repository.

Run the package migrations after installation:

```bash
php artisan migrate
```

Then configure the integration from the BTRL settings screen. The settings record stores:

- API endpoint URLs
- account credentials (`username`, `password`)
- enabled flag

Optional config publish:

```bash
php artisan vendor:publish --tag=btrl-config
```

Config file: `config/enso/btrl.php`

```php
return [
    'settingsId' => env('BTRL_SETTINGS_ID', 1),
];
```

## Features

- Settings API for enabling the integration and storing credentials.
- `Register` service for creating remote payment orders and returning the hosted `formUrl`.
- `Status` service for synchronizing an existing `CardTransaction` with the remote gateway response.
- Dedicated `CardTransaction` model with enum-casted local status, BT status, action code, request payload, and raw response data.
- `Tradable` contract for application-specific payment subjects that can be registered with the gateway.
- Standardized enums for transaction status, BT transaction status, action code, endpoint selection, and currency handling.
- API and transaction exception handling.

## Usage

Enable the integration from the settings form before using the payment flow.

Transactions are initiated and verified through the registered integration services.

To register a payment:

```php
use LaravelEnso\Btrl\Services\Register;
use LaravelEnso\Btrl\Services\TestTransaction;
use LaravelEnso\People\Models\Person;

$paymentUrl = (new Register($customer, new TestTransaction()))->handle();
```

`Register` expects:

- a `LaravelEnso\People\Models\Person` or `LaravelEnso\Companies\Models\Company`
- a class implementing `LaravelEnso\Btrl\Contracts\Tradable`

The service creates a `bt_card_transactions` row before the remote call, stores the request payload, then persists the returned order reference and raw response.

To refresh a transaction:

```php
use LaravelEnso\Btrl\Models\CardTransaction;
use LaravelEnso\Btrl\Services\Status;

(new Status(CardTransaction::find($id)))->handle();
```

The package exposes the following core service classes:

- `LaravelEnso\Btrl\Services\Register`
- `LaravelEnso\Btrl\Services\Status`
- `LaravelEnso\Btrl\Services\TestTransaction`

## API

### HTTP routes

Settings:

- `GET api/integrations/btrl/settings`
- `PATCH api/integrations/btrl/settings/{setting}`

### Core classes

| Class | Description |
|---|---|
| `LaravelEnso\Btrl\Contracts\Tradable` | Contract for application transactions that can be registered with BTRL |
| `LaravelEnso\Btrl\Models\Settings` | Singleton settings model backed by `bt_settings` |
| `LaravelEnso\Btrl\Models\CardTransaction` | Local transaction log for each payment attempt |
| `LaravelEnso\Btrl\Actions\Register` | Dispatches the remote order-registration request |
| `LaravelEnso\Btrl\Actions\Status` | Dispatches the remote status request |
| `LaravelEnso\Btrl\Endpoints\Register` | Form-encoded endpoint using HTTP basic auth |
| `LaravelEnso\Btrl\Endpoints\Status` | Form-encoded endpoint using HTTP basic auth |

## Depends On

Required Enso packages:

- [`laravel-enso/api:^1.14`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- `laravel-enso/helpers` for encrypted settings casts and exceptions
- `laravel-enso/people` and `laravel-enso/companies` for supported customer models
- `laravel-enso/tables` for `TableCache` on `CardTransaction`

Endpoint implementations return `LaravelEnso\Api\Enums\Method`, for example `Method::POST`.

Companion frontend package:

- [`@enso-ui/btrl`](https://git.xtelecom.ro/enso-ui/btrl)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/btrl/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/26/2026, 8:41:40 AM</div>
</div>
