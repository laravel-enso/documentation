---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Versions

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/laravel-enso/versions/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.0.0-2563eb.svg)](https://packagist.org/packages/laravel-enso/versions)
[![Downloads](https://img.shields.io/packagist/dm/laravel-enso/versions.svg)](https://packagist.org/packages/laravel-enso/versions)
[![PHP](https://img.shields.io/badge/php-7.4%2B-777bb4.svg)](https://github.com/laravel-enso/versions/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/versions.svg)](https://github.com/laravel-enso/versions/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/versions.svg)](https://github.com/laravel-enso/versions/pulls)

## Description

Versions prevents concurrent-update conflicts through an optimistic-lock field on Eloquent models.

The package increments a version column on each update, checks the persisted version under a database lock before writing, and throws an HTTP 409 conflict when the record was modified after it was loaded.

It can work independently of the Laravel Enso ecosystem.

## Installation

Install the package:

```bash
composer require laravel-enso/versions
```

Add the trait to a model that has a version column:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Versions\Traits\Versions;

class Invoice extends Model
{
    use Versions;
}
```

The trait expects a `version` integer column by default. To use another column name, define a protected `$versioningAttribute` property on the model.

## Features

- Sets the version column to `1` when creating a model.
- Starts a database transaction before updates and checks the persisted version under a lock.
- Increments the version automatically when the update is accepted.
- Throws a `ConflictHttpException` when another process already changed the record.

## Usage

Manual version check:

```php
$invoice->checkVersion($request->integer('version'));
```

Custom version column:

```php
class Invoice extends Model
{
    use Versions;

    protected string $versioningAttribute = 'lock_version';
}
```

If the check fails, the package throws `LaravelEnso\\Versions\\Exceptions\\Version`, which extends Symfony's `ConflictHttpException`.

## API

### Trait

- `LaravelEnso\\Versions\\Traits\\Versions`

Main methods:

- `checkVersion(?int $version = null): void`

Lifecycle hooks:

- `bootVersions()`

### Exception

- `LaravelEnso\\Versions\\Exceptions\\Version`

Factory method:

- `Version::recordModified(string $class)`

## Depends On

This package has no Enso package dependencies and can be used independently.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/laravel-enso/versions/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/versions/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:34:18 PM</div>
</div>
