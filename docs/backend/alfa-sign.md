---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Alfa Sign

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/laravel-enso/alfasign/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.0-2563eb.svg)](https://git.xtelecom.ro/laravel-enso/alfasign/-/tags)
[![Laravel](https://img.shields.io/badge/laravel-12.x-FF2D20.svg)](https://laravel.com)
[![PHP](https://img.shields.io/badge/php-8.2%2B-7a86b8.svg)](https://git.xtelecom.ro/laravel-enso/alfasign/-/blob/main/composer.json)

## Description

Laravel Enso backend integration package for [Alfa Sign](https://www.alfasign.ro/) remote electronic signing services. Exposes SOAP-based actions for sending files and computing document hashes, with centralized settings management and encrypted authentication token storage.

## Installation

This package is consumed as a private Composer path repository within the Enso application:

```json
{
    "repositories": [
        {
            "type": "path",
            "url": "vendor/laravel-enso/alfasign"
        }
    ],
    "require": {
        "laravel-enso/alfa-sign": "*@dev"
    }
}
```

After adding it, run:

```bash
composer update laravel-enso/alfa-sign
php artisan migrate
```

## Features

- SOAP integration with the Alfa Sign remote signing service via `laravel-enso/api` `Action`, `SoapEndpoint`, and `SoapResponse`
- `SendFile` operation — sends a document to Alfa Sign for signing and returns a new `File` model with the signed PDF
- `SendHash` operation — computes a SHA-256 hash of a document and submits it to Alfa Sign for signing
- `Settings` model with encrypted `auth_token` (via `LaravelEnso\Helpers\Casts\Encrypt`) and configurable WSDL `url` and `enabled` flag
- Dynamic service enablement — operations check `Settings::enabled()` at runtime and skip gracefully when disabled
- CRUD endpoints for managing integration settings from the Enso admin UI
- Enso-compatible migration for the `alfasign_settings` table, menu structure ("Integrations → Alfasign → Settings"), and permissions

## Usage

### Sending a file for signing

```php
use LaravelEnso\AlfaSign\Services\SendFile;
use LaravelEnso\Files\Models\File;

$signedFile = (new SendFile(File::find($id)))->handle();
```

Returns a new `File` instance containing the signed PDF returned by Alfa Sign.

### Computing and submitting a document hash

```php
use LaravelEnso\AlfaSign\Services\SendHash;
use LaravelEnso\Files\Models\File;

$hash = (new SendHash(File::find($id)))->handle();
```

Returns the SHA-256 hash string used in the signing request.

### Settings management

Settings are managed through the admin UI at `Integrations → AlfaSign → Settings`. Programmatic access:

```php
use LaravelEnso\AlfaSign\Models\Settings;

$settings = Settings::current(); // retrieves or creates the singleton record
$settings->enabled;              // bool
$settings->auth_token;           // decrypted automatically
$settings->url;                  // Alfa Sign WSDL endpoint URL
```

The `url` setting is passed directly to PHP's `SoapClient` as the WSDL location. For ASMX services, use the service description endpoint, not the browser service page:

```text
https://ca.alfasign.ro/PilotSignTestPrdgm/RemoteSignature.asmx?WSDL
```

Using the base `.asmx` URL without `?WSDL` may return an HTML service page, which `SoapClient` cannot parse as WSDL.

## Configuration

After publishing:

```bash
php artisan vendor:publish --tag=alfa-sign-config
```

Config file: `config/enso/alfa-sign.php`

```php
return [
    'settingsId' => env('ALFASIGN_SETTINGS_ID', 1),
];
```

## API

### Services

| Class | Description |
|---|---|
| `LaravelEnso\AlfaSign\Services\SendFile` | Sends a `File` model to Alfa Sign and returns the signed `File` |
| `LaravelEnso\AlfaSign\Services\SendHash` | Computes a SHA-256 hash of a `File` and submits it |

### Actions

| Class | Description |
|---|---|
| `LaravelEnso\AlfaSign\Actions\SendFile` | Extends `LaravelEnso\Api\Action` and handles the SOAP request/response lifecycle for file signing |
| `LaravelEnso\AlfaSign\Actions\SendHash` | Extends `LaravelEnso\Api\Action` and handles the SOAP request/response lifecycle for hash signing |

### SOAP endpoints

| Class | Description |
|---|---|
| `LaravelEnso\AlfaSign\Endpoints\SendFile` | Extends `LaravelEnso\Api\Endpoints\Soap`, calls `RemotePdfSignature`, and exposes a sanitized log payload |
| `LaravelEnso\AlfaSign\Endpoints\SendHash` | Extends `LaravelEnso\Api\Endpoints\Soap`, calls `RemoteSignatureHash`, and exposes a sanitized log payload |

::: warning Note
The SOAP endpoints pass the authentication token and file contents through `arguments()` for the actual Alfa Sign call, but keep `body()` sanitized so API logs and failure notifications do not expose sensitive values.
:::

### Models

| Class | Description |
|---|---|
| `LaravelEnso\AlfaSign\Models\Settings` | Singleton settings model. Stores `url`, `auth_token` (encrypted), `enabled` |

### HTTP Endpoints

| Method | URI | Route name | Description |
|---|---|---|---|
| GET | `api/integrations/alfaSign/settings` | `integrations.alfaSign.settings.index` | Returns the settings form payload |
| PATCH | `api/integrations/alfaSign/settings/{settings}` | `integrations.alfaSign.settings.update` | Updates the settings record |

## Companion Frontend Package

- [`@enso-ui/alfa-sign`](https://git.xtelecom.ro/enso-ui/alfa-sign) — Vue 3 settings page

## Depends On

- [`laravel-enso/api`](https://git.xtelecom.ro/laravel-enso/api) — SOAP action, endpoint, response, and logging infrastructure
- [`laravel-enso/forms`](https://git.xtelecom.ro/laravel-enso/forms) — Enso form service
- [`laravel-enso/helpers`](https://git.xtelecom.ro/laravel-enso/helpers) — `Encrypt` cast, `FactoryResolver`
- [`laravel-enso/files`](https://git.xtelecom.ro/laravel-enso/files) — `File` model

## Contributions

are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/laravel-enso/alfasign/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/alfa-sign/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/20/2026, 7:59:19 PM</div>
</div>
