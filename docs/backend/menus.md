---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Menus

[![License](https://poser.pugx.org/laravel-enso/menus/license)](https://github.com/laravel-enso/menus/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/menus/version)](https://packagist.org/packages/laravel-enso/menus)
[![Downloads](https://poser.pugx.org/laravel-enso/menus/downloads)](https://packagist.org/packages/laravel-enso/menus)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/menus/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/menus.svg)](https://github.com/laravel-enso/menus/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/menus.svg)](https://github.com/laravel-enso/menus/pulls)

## Description

Menus manages Enso navigation records and menu ordering.

The package exposes CRUD, organize, table init, table data, and Excel export endpoints for system menus, and integrates with permissions and roles to control navigable routes.

It is intended to back the Enso administration screen that defines menu structure and hierarchy.

## Installation

Install the package:

```bash
composer require laravel-enso/menus
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=menus-factory
```

## Features

- Menu CRUD endpoints.
- Drag-and-drop style ordering endpoint.
- Table init, table data, and Excel export endpoints.
- Integration with permissions and roles.
- Factories for bootstrapping menu data.

## Usage

Main route group:

- `system.menus.*`

The package also exposes an explicit organize action:

```php
route('system.menus.organize');
```

## API

### HTTP routes

- `GET api/system/menus/create`
- `POST api/system/menus`
- `GET api/system/menus/{menu}/edit`
- `PATCH api/system/menus/{menu}`
- `DELETE api/system/menus/{menu}`
- `PUT api/system/menus/organize`
- `GET api/system/menus/initTable`
- `GET api/system/menus/tableData`
- `GET api/system/menus/exportExcel`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/menus`](https://docs.laravel-enso.com/frontend/menus.html) [↗](https://github.com/enso-ui/menus)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/menus/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:00 PM</div>
</div>
