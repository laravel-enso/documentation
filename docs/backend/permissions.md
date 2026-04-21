---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Permissions

[![License](https://poser.pugx.org/laravel-enso/permissions/license)](https://github.com/laravel-enso/permissions/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/permissions/version)](https://packagist.org/packages/laravel-enso/permissions)
[![Downloads](https://poser.pugx.org/laravel-enso/permissions/downloads)](https://packagist.org/packages/laravel-enso/permissions)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/permissions/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/permissions.svg)](https://github.com/laravel-enso/permissions/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/permissions.svg)](https://github.com/laravel-enso/permissions/pulls)

## Description

Permissions manages Enso route permissions and route-access checks.

The package exposes CRUD, options, table init, table data, and Excel export endpoints for system permissions, and registers the `verify-route-access` middleware alias used to guard application routes.

It is intended to work together with menus, roles, and users for route-level authorization.

## Installation

Install the package:

```bash
composer require laravel-enso/permissions
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=permissions-factories
```

## Features

- Permission CRUD endpoints.
- Options endpoint for select fields.
- Table init, table data, and Excel export endpoints.
- Route access middleware alias.
- Integration with menus, roles, and users.

## Usage

Main route group:

- `system.permissions.*`

Middleware alias:

- `verify-route-access`

## API

### HTTP routes

- `GET api/system/permissions/create`
- `POST api/system/permissions`
- `GET api/system/permissions/{permission}/edit`
- `PATCH api/system/permissions/{permission}`
- `DELETE api/system/permissions/{permission}`
- `GET api/system/permissions/initTable`
- `GET api/system/permissions/tableData`
- `GET api/system/permissions/exportExcel`
- `GET api/system/permissions/options`

### Middleware

- `verify-route-access`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/permissions`](https://docs.laravel-enso.com/frontend/permissions.html) [↗](https://github.com/enso-ui/permissions)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/permissions/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:21 PM</div>
</div>
