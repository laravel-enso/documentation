---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Users

[![License](https://poser.pugx.org/laravel-enso/users/license)](https://github.com/laravel-enso/users/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/users/version)](https://packagist.org/packages/laravel-enso/users)
[![Downloads](https://poser.pugx.org/laravel-enso/users/downloads)](https://packagist.org/packages/laravel-enso/users)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/users/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/users.svg)](https://github.com/laravel-enso/users/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/users.svg)](https://github.com/laravel-enso/users/pulls)

## Description

Users is Enso's backend package for application account administration.

It manages the user entity itself, profile and access relationships, API tokens, active sessions, password resets, select options, and table/export endpoints, while integrating with people, roles, user groups, files, companies, and core preferences.

## Installation

Install the package:

```bash
composer require laravel-enso/users
```

Run the migrations:

```bash
php artisan migrate
```

## Features

- Full user CRUD with create, edit, show, reset password, and destroy flows.
- Session inspection and forced session termination endpoints.
- API token create/store/index/destroy endpoints.
- Table bootstrap, data, and export endpoints.
- Rich `User` model with role/group checks, preferences, and login relations.
- Sanctum integration through `HasApiTokens`.

## Usage

Main user routes:

- prefix: `api/administration/users`
- name prefix: `administration.users.`

User endpoints:

- `GET create/{person}`
- `POST /`
- `GET {user}/edit`
- `PATCH {user}`
- `DELETE {user}`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`
- `GET options`
- `GET {user}`
- `POST {user}/resetPassword`

Token endpoints:

- `administration.token.create`
- `administration.token.store`
- `administration.token.index`
- `administration.token.destroy`

Session endpoints:

- `administration.session.index`
- `administration.session.destroy`

Main model:

- `LaravelEnso\Users\Models\User`

Notable methods:

- `canAccess(string $route)`
- `isAdmin()`
- `isSupervisor()`
- `isSuperior()`
- `belongsToAdminGroup()`
- `preferredLocale()`
- `initPreferences()`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/avatars`](https://docs.laravel-enso.com/backend/avatars.html) [↗](https://github.com/laravel-enso/avatars)
- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/people`](https://docs.laravel-enso.com/backend/people.html) [↗](https://github.com/laravel-enso/people)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/user-groups`](https://docs.laravel-enso.com/backend/user-groups.html) [↗](https://github.com/laravel-enso/user-groups)

Companion frontend package:

- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/users/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:34:34 PM</div>
</div>
