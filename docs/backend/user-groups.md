---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# User Groups

[![License](https://poser.pugx.org/laravel-enso/user-groups/license)](https://github.com/laravel-enso/user-groups/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/user-groups/version)](https://packagist.org/packages/laravel-enso/user-groups)
[![Downloads](https://poser.pugx.org/laravel-enso/user-groups/downloads)](https://packagist.org/packages/laravel-enso/user-groups)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/user-groups/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/user-groups.svg)](https://github.com/laravel-enso/user-groups/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/user-groups.svg)](https://github.com/laravel-enso/user-groups/pulls)

## Description

User Groups manages Enso user grouping and selection flows.

The package stores user group records, exposes create/edit/table/export endpoints, returns select options for other backend packages, and provides the enum and model used by the users package to classify accounts.

## Installation

Install the package:

```bash
composer require laravel-enso/user-groups
```

Run the migrations:

```bash
php artisan migrate
```

## Features

- CRUD API for user groups.
- Table bootstrap, data, and export endpoints.
- Select options endpoint for dependent forms.
- Shared enum and model consumed by `laravel-enso/users`.

## Usage

Routes are registered under:

- prefix: `api/administration/userGroups`
- name prefix: `administration.userGroups.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET create`
- `POST /`
- `GET {userGroup}/edit`
- `PATCH {userGroup}`
- `DELETE {userGroup}`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`
- `GET options`

Main classes:

- `LaravelEnso\UserGroups\Models\UserGroup`
- `LaravelEnso\UserGroups\Enums\UserGroups`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/user-groups`](https://docs.laravel-enso.com/frontend/user-groups.html) [↗](https://github.com/enso-ui/user-groups)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/user-groups/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:35:14 PM</div>
</div>
