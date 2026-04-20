---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# eMag Checker

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/emag-checker/version)](https://packagist.org/packages/laravel-enso/emag-checker)
[![Downloads](https://poser.pugx.org/laravel-enso/emag-checker/downloads)](https://packagist.org/packages/laravel-enso/emag-checker)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)

## Description

eMag Checker extends the Enso eMag integration with competitive-price checking and auto-pricing workflows.

The package tracks long-running check operations, augments eMag offers with checker-specific pricing metadata, can automatically adjust client product discounts to defend the buy button, and exposes endpoints for enabling or disabling auto-pricing per offer.

It is designed to run on top of `laravel-enso/emag`, not as a standalone integration.

## Installation

Install the package:

```bash
composer require laravel-enso/emag-checker
```

Run the package migrations:

```bash
php artisan migrate
```

Default configuration:

```php
return [
    'enabled' => (bool) env('EMAG_CHECKER_ENABLED', true),
    'overdue' => (int) env('EMAG_CHECK_OVERDUE', 30),
];
```

When enabled in production, the package schedules `enso:emag:checker:check-overdue` every 30 minutes.

## Features

- Competitive-price check runs tracked as IO operations.
- Offer-level auto-pricing flags and competitor state tracking.
- Discount dropping and discount recalculation services for eMag offers.
- Auto-pricing activation and deactivation endpoints under the existing eMag offers API.
- Overdue-check notifications for admin users.

## Usage

Operational commands:

```bash
php artisan enso:emag:check --pages=5 --skip=0 --readonly
php artisan enso:emag:drop-discounts --strong-competitors
php artisan enso:emag:checker:check-overdue
php artisan enso:emag:finalize-in-progress
```

Core offer helpers:

- `activateAutoPricing()`
- `deactivateAutoPricing()`
- `tryGoingBelow(Remote $remote)`

The pricing service recalculates client product discounts for the eMag company configured in the main eMag settings package.

## API

### HTTP routes

- `POST api/integrations/emag/offers/{offer}/activateAutoPricing`
- `POST api/integrations/emag/offers/{offer}/deactivateAutoPricing`

Route names:

- `integrations.emag.offers.activateAutoPricing`
- `integrations.emag.offers.deactivateAutoPricing`

### Artisan commands

- `enso:emag:check`
- `enso:emag:drop-discounts`
- `enso:emag:checker:check-overdue`
- `enso:emag:finalize-in-progress`

## Depends On

Required Enso packages:

- [`laravel-enso/emag`](https://docs.laravel-enso.com/backend/emag.html) [↗](https://git.xtelecom.ro/laravel-enso/emag)

Runtime companion packages:

- [`laravel-enso/discounts`](https://docs.laravel-enso.com/backend/discounts.html) [↗](https://git.xtelecom.ro/laravel-enso/discounts)
- [`laravel-enso/io`](https://docs.laravel-enso.com/backend/io.html) [↗](https://git.xtelecom.ro/laravel-enso/io)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/emag-checker/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 11/2/2021, 5:12:25 PM</div>
</div>
