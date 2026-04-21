---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sms Advert

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sms-advert/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.6.2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sms-advert/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/sms-advert/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sms-advert/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/sms-advert/-/merge_requests)

## Description

Sms Advert integrates Laravel Enso with the SMS Advert API.

The package stores provider settings, exposes a callback endpoint for delivery updates, and provides an action object for dispatching SMS messages with optional outbound filters and automatic callback registration.

It is intended for sale-channel and commercial flows that need SMS delivery notifications or transactional outbound messages through the Sms Advert provider.

## Installation

Install the package:

```bash
composer require laravel-enso/sms-advert
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Settings screen for base URL, auth token, test phone, and enablement.
- Callback endpoint for delivery-status updates.
- `Sms` action wrapper that applies filters and injects the callback URL.
- Message model and dynamic relation support for linked SMS messages.

## Usage

Main route groups:

- `integrations.smsAdvert.settings.*`
- `integrations.smsAdvert.callbacks.*`

Typical send flow:

```php
use LaravelEnso\SmsAdvert\Actions\Sms;

(new Sms($phone, $message))
    ->filters($filters)
    ->handle();
```

The action resolves the provider endpoint, sends `shortTextMessage`, and always includes the callback route so delivery updates can be persisted locally.

## API

### HTTP routes

- `GET api/integrations/smsAdvert/settings`
- `PATCH api/integrations/smsAdvert/settings/{settings}`
- `POST api/integrations/smsAdvert/callbacks/sms`

### Action

- `LaravelEnso\\SmsAdvert\\Actions\\Sms`

Behavior:

- sends a short or long SMS payload
- applies outbound filter objects
- appends the local callback URL

## Depends On

Required Enso packages:

- [`laravel-enso/api`](https://docs.laravel-enso.com/backend/api.html) [↗](https://git.xtelecom.ro/laravel-enso/api)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/sale-channels`](https://docs.laravel-enso.com/backend/sale-channels.html) [↗](https://git.xtelecom.ro/laravel-enso/sale-channels)

Companion frontend package:

- [`@enso-ui/sms-advert`](https://docs.laravel-enso.com/frontend/sms-advert.html) [↗](https://git.xtelecom.ro/enso-ui/sms-advert)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/sms-advert/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:35 PM</div>
</div>
