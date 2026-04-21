---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Localisation

[![License](https://poser.pugx.org/laravel-enso/localisation/license)](https://github.com/laravel-enso/localisation/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/localisation/version)](https://packagist.org/packages/laravel-enso/localisation)
[![Downloads](https://poser.pugx.org/laravel-enso/localisation/downloads)](https://packagist.org/packages/laravel-enso/localisation)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/localisation/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/localisation.svg)](https://github.com/laravel-enso/localisation/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/localisation.svg)](https://github.com/laravel-enso/localisation/pulls)

## Description

Localisation manages Enso languages, JSON translation files, and request-time language selection.

The package exposes language CRUD and translation-file editing endpoints, registers the `set-language` middleware alias, and ships commands for publishing locale files and scanning the codebase for missing translation keys.

It is intended for Enso applications that maintain multiple UI languages and JSON translation stores.

## Installation

Install the package:

```bash
composer require laravel-enso/localisation
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=localisation-config
php artisan vendor:publish --tag=localisation-factory
php artisan vendor:publish --tag=localisation-seeder
```

## Features

- Language CRUD, options, table init, table data, and Excel export endpoints.
- JSON translation editing, saving, and key-creation endpoints.
- `set-language` middleware alias for per-request locale switching.
- `enso:localisation:publish` command for generating locale folders and JSON files.
- `enso:localisation:scan` command for finding missing keys and duplicate translations.

## Usage

Main route groups:

- `system.localisation.*`
- `system.localisation.editTexts`
- `system.localisation.getLangFile`
- `system.localisation.saveLangFile`
- `system.localisation.addKey`

Artisan commands:

```bash
php artisan enso:localisation:publish --locale=ro
php artisan enso:localisation:scan --dry-run
```

## API

### HTTP routes

- `GET api/system/localisation/create`
- `POST api/system/localisation`
- `GET api/system/localisation/{language}/edit`
- `PATCH api/system/localisation/{language}`
- `DELETE api/system/localisation/{language}`
- `GET api/system/localisation/initTable`
- `GET api/system/localisation/tableData`
- `GET api/system/localisation/exportExcel`
- `GET api/system/localisation/options`
- `GET api/system/localisation/editTexts`
- `GET api/system/localisation/getLangFile/{language}`
- `PATCH api/system/localisation/saveLangFile/{language}`
- `PATCH api/system/localisation/addKey`

### Middleware

- `set-language`

### Artisan commands

- `enso:localisation:publish`
- `enso:localisation:scan`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/localisation`](https://docs.laravel-enso.com/frontend/localisation.html) [↗](https://github.com/enso-ui/localisation)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/localisation/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:29:16 PM</div>
</div>
