---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Roles

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/roles/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/roles/version)](https://packagist.org/packages/laravel-enso/roles)
[![Downloads](https://poser.pugx.org/laravel-enso/roles/downloads)](https://packagist.org/packages/laravel-enso/roles)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/roles/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/roles.svg)](https://github.com/laravel-enso/roles/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/roles.svg)](https://github.com/laravel-enso/roles/pulls)

## Description

Roles manages role records and role-to-permission assignment in Laravel Enso.

The package exposes CRUD and table APIs for roles, companion endpoints for reading and writing role permissions, and a sync command used to propagate role configuration between environments.

It is intended for Enso applications that use permission-based route access and need roles managed from the backoffice instead of hard-coded seeds alone.

## Installation

Install the package:

```bash
composer require laravel-enso/roles
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=roles-config
php artisan vendor:publish --tag=roles-factory
php artisan vendor:publish --tag=roles-seeder
```

## Features

- Role CRUD, options, table init, table data, and Excel export endpoints.
- Permission assignment endpoints for reading, setting, and writing role permissions.
- Config publishing for role restrictions and group visibility.
- `enso:roles:sync` command for syncing local role definitions from `config/local/roles`.

## Usage

Main route groups:

- `system.roles.*`
- `system.roles.permissions.*`

Permission assignment flow:

- read current role permissions through `permissions.get`
- submit updates through `permissions.set`
- persist config files through `permissions.write`

Environment sync:

```bash
php artisan enso:roles:sync
```

The command only runs when the local `config/local/roles` directory exists.

## API

### HTTP routes

- `GET api/system/roles/create`
- `POST api/system/roles`
- `GET api/system/roles/{role}/edit`
- `PATCH api/system/roles/{role}`
- `DELETE api/system/roles/{role}`
- `GET api/system/roles/initTable`
- `GET api/system/roles/tableData`
- `GET api/system/roles/exportExcel`
- `GET api/system/roles/options`
- `GET api/system/roles/permissions/get/{role}`
- `POST api/system/roles/permissions/set/{role}`
- `POST api/system/roles/permissions/write/{role}`

### Artisan commands

- `enso:roles:sync`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/user-groups`](https://docs.laravel-enso.com/backend/user-groups.html) [↗](https://github.com/laravel-enso/user-groups)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/roles`](https://docs.laravel-enso.com/frontend/roles.html) [↗](https://github.com/enso-ui/roles)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/roles/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:27 PM</div>
</div>
