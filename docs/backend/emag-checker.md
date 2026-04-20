---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Emag Checker

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/emag-checker/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.4.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/emag-checker/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/emag-checker/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/emag-checker/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/emag-checker/-/merge_requests)

## Description

eMag Checker extends the Enso eMag integration with competitive-price checking and auto-pricing workflows.

The package tracks long-running check operations, augments eMag offers with checker-specific pricing metadata, can automatically adjust client product discounts to defend the buy button, and exposes endpoints for enabling or disabling auto-pricing per offer.

It is designed to run on top of `laravel-enso/emag`, not as a standalone integration, and is intended for private Enso deployments that operate on eMag.

## Installation

This is a proprietary package distributed through the private Enso registry.

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

- Full-page competitive-price checks queued as IO operations.
- Offer-level auto-pricing flags, competitor state tracking, and historical check snapshots.
- Discount dropping and discount recalculation services for active eMag offers.
- Auto-pricing activation and deactivation endpoints under the existing eMag offers API.
- Overdue-check notifications for admin users plus recovery tooling for stuck check runs.

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
- `checks()`

The checker processes approved active marketplace offers page by page, snapshots the remote price state for each checked offer, and can either reprice local discounts or drop them entirely depending on the detected scenario.

When a check remains stuck past the configured overdue threshold, the package notifies active admin users and finalizes the pending operation automatically.

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

### Configuration

- `enso.emag-checker.enabled`
- `enso.emag-checker.overdue`

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
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 3:06:58 PM</div>
</div>
