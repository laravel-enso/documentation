---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Track Who

[![License](https://poser.pugx.org/laravel-enso/track-who/license)](https://github.com/laravel-enso/track-who/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/track-who/version)](https://packagist.org/packages/laravel-enso/track-who)
[![Downloads](https://poser.pugx.org/laravel-enso/track-who/downloads)](https://packagist.org/packages/laravel-enso/track-who)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/track-who/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/track-who.svg)](https://github.com/laravel-enso/track-who/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/track-who.svg)](https://github.com/laravel-enso/track-who/pulls)

## Description

Track Who adds simple auditing traits for Enso models.

It fills the conventional `created_by`, `updated_by`, and `deleted_by` columns from the authenticated user and is designed to be composed into models without pulling in a full audit trail package.

## Installation

Install the package:

```bash
composer require laravel-enso/track-who
```

Use it only on models whose tables already contain the matching audit columns.

## Features

- `CreatedBy` trait for `created_by`
- `UpdatedBy` trait for `updated_by`
- `DeletedBy` trait for `deleted_by`
- Minimal surface area with no extra configuration

## Usage

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\TrackWho\Traits\CreatedBy;
use LaravelEnso\TrackWho\Traits\UpdatedBy;

class Voucher extends Model
{
    use CreatedBy;
    use UpdatedBy;
}
```

Add `DeletedBy` when soft-delete style author tracking is also needed.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

This package does not depend on other Enso backend packages.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/track-who/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:33:04 PM</div>
</div>
