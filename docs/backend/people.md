---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# People

[![License](https://poser.pugx.org/laravel-enso/people/license)](https://github.com/laravel-enso/people/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/people/version)](https://packagist.org/packages/laravel-enso/people)
[![Downloads](https://poser.pugx.org/laravel-enso/people/downloads)](https://packagist.org/packages/laravel-enso/people)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/people/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/people.svg)](https://github.com/laravel-enso/people/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/people.svg)](https://github.com/laravel-enso/people/pulls)

## Description

People manages person records for Laravel Enso.

The package exposes CRUD, options, table init, table data, and Excel export endpoints for people, and integrates addresses, remembering, searchable behavior, and morph-map registration for the `Person` model.

It is intended to provide a reusable person domain that can be referenced by other Enso modules.

## Installation

Install the package:

```bash
composer require laravel-enso/people
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=people-factory
```

## Features

- Person CRUD endpoints.
- Options endpoint for select fields.
- Table init, table data, and Excel export endpoints.
- Morph-map registration for the `Person` model.
- Integration with addresses and searchable helpers.

## Usage

Main route group:

- `administration.people.*`

## API

### HTTP routes

- `GET api/administration/people/create`
- `POST api/administration/people`
- `GET api/administration/people/{person}/edit`
- `PATCH api/administration/people/{person}`
- `DELETE api/administration/people/{person}`
- `GET api/administration/people/initTable`
- `GET api/administration/people/tableData`
- `GET api/administration/people/exportExcel`
- `GET api/administration/people/options`

## Depends On

Required Enso packages:

- [`laravel-enso/addresses`](https://docs.laravel-enso.com/backend/addresses.html) [↗](https://github.com/laravel-enso/addresses)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/searchable`](https://docs.laravel-enso.com/backend/searchable.html) [↗](https://github.com/laravel-enso/searchable)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/people`](https://docs.laravel-enso.com/frontend/people.html) [↗](https://github.com/enso-ui/people)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/people/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:31:05 PM</div>
</div>
