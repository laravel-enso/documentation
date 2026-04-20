---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Facebook

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/facebook/version)](https://packagist.org/packages/laravel-enso/facebook)
[![Downloads](https://poser.pugx.org/laravel-enso/facebook/downloads)](https://packagist.org/packages/laravel-enso/facebook)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)

## Description

Facebook adds a small Enso integration layer for Facebook page and domain-verification settings.

The package stores a single settings record, exposes a settings form under the Integrations area, and supports environment-level overrides for the verification code and page ID. It also contains a manual upgrade class for removing legacy table columns when the integration moves to environment-based configuration.

It is a lightweight settings package rather than a full Facebook API client.

## Installation

Install the package:

```bash
composer require laravel-enso/facebook
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=facebook-config
```

Default configuration:

```php
return [
    'verificationCode' => env('FACEBOOK_VERIFICATION_CODE'),
    'pageId' => env('FACEBOOK_PAGE_ID'),
];
```

Environment configuration takes precedence over database values returned by the settings model.

## Features

- Settings record for page ID and verification-code management.
- Settings endpoints under `integrations.facebook.settings`.
- Config-based overrides for runtime access.
- Manual upgrade helper for removing deprecated database columns.

## Usage

Use the settings model to resolve current integration values:

```php
use LaravelEnso\Facebook\Models\Settings;

$pageId = Settings::pageId();
$verificationCode = Settings::verificationCode();
```

When present, `FACEBOOK_PAGE_ID` and `FACEBOOK_VERIFICATION_CODE` override the persisted values.

## API

### HTTP routes

- `GET api/integrations/facebook/settings`
- `PATCH api/integrations/facebook/settings/{settings}`

Route names:

- `integrations.facebook.settings.index`
- `integrations.facebook.settings.update`

### Upgrade helper

- `LaravelEnso\\Facebook\\Upgrades\\DeprecateFacebookTableColumns`

Behavior:

- runs manually
- removes the legacy `page_id` and `verification_code` columns from `facebook_settings`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/facebook/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 8/6/2021, 5:04:46 PM</div>
</div>
