---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Send SMS (Sendsms.ro)

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/send-sms/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/send-sms/-/tags)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/send-sms/-/blob/main/composer.json)

## Description

Send SMS integrates the Enso SMS notification flows with the Sendsms.ro API.

The package stores the remote credentials, exposes the settings endpoints used by the admin UI, and provides a small service/action/endpoint chain for sending messages through the Sendsms.ro JSON API.

It is intended for private deployments that need Sendsms.ro as a text messaging provider.

## Installation

This is a proprietary package distributed through the private Enso registry or a private path repository.

Run the package migrations after installation:

```bash
php artisan migrate
```

Then configure the integration from the Send SMS settings screen. The settings record stores:

- API endpoint URL
- account credentials (username, password)
- enabled flag

Optional config publish:

```bash
php artisan vendor:publish --tag=send-sms-config
```

Config file: `config/enso/send-sms.php`

```php
return [
    'settingsId' => env('SENDSMS_SETTINGS_ID', 1),
];
```

## Features

- Settings API for enabling the integration and storing credentials securely with encrypted username and password casts.
- `Sms` service and action classes for sending messages through the native Enso API client flow.
- Endpoint abstraction that builds Sendsms.ro requests with the configured credentials and default JSON URL fallback.
- Built-in validation for phone numbers, requiring a leading `+` and numeric digits only.
- Specific API and phone-number exception handling.

## Usage

Enable the integration from the settings form before using the SMS flow.

To send an SMS message programmatically, you can simply use the exposed service class:

```php
use LaravelEnso\SendSms\Services\Sms;

$phone = '+407XXYYYZZZ';
$message = 'Test message via Sendsms.ro API';

(new Sms($phone, $message))->handle();
```

The package exposes the following core service classes:

- `LaravelEnso\SendSms\Services\Sms`
- `LaravelEnso\SendSms\Actions\Sms`
- `LaravelEnso\SendSms\Endpoints\Sms`

The endpoint uses the configured URL when present and otherwise falls back to:

```text
https://api.sendsms.ro/json
```

## API

### HTTP routes

Settings:

- `GET api/integrations/sendSms/settings`
- `PATCH api/integrations/sendSms/settings/{setting}`

### Core classes

| Class | Description |
|---|---|
| `LaravelEnso\SendSms\Models\Settings` | Singleton settings model backed by `send_sms_settings` |
| `LaravelEnso\SendSms\Services\Sms` | Validates the phone number and dispatches the send action |
| `LaravelEnso\SendSms\Actions\Sms` | Enso API action for the SMS send request |
| `LaravelEnso\SendSms\Endpoints\Sms` | Builds the Sendsms.ro request body and destination URL |
| `LaravelEnso\SendSms\Exceptions\PhoneNumber` | Validation exceptions for malformed phone numbers |

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://github.com/laravel-enso/api)
- `laravel-enso/helpers` for encrypted settings casts

Companion frontend package:

- [`@enso-ui/send-sms`](https://git.xtelecom.ro/enso-ui/send-sms)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/send-sms/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/26/2026, 8:41:40 AM</div>
</div>
