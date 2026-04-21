---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Teams

[![License](https://poser.pugx.org/laravel-enso/teams/license)](https://github.com/laravel-enso/teams/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/teams/version)](https://packagist.org/packages/laravel-enso/teams)
[![Downloads](https://poser.pugx.org/laravel-enso/teams/downloads)](https://packagist.org/packages/laravel-enso/teams)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/teams/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/teams.svg)](https://github.com/laravel-enso/teams/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/teams.svg)](https://github.com/laravel-enso/teams/pulls)

## Description

Teams adds lightweight team administration to Laravel Enso.

The package stores team records, manages user membership through a pivot table, exposes CRUD-style API endpoints plus select options, and registers search integration for the team model.

## Installation

Install the package:

```bash
composer require laravel-enso/teams
```

Run the migrations:

```bash
php artisan migrate
```

## Features

- Team model plus many-to-many user membership pivot.
- Index, store, destroy, and options endpoints.
- Request validation through `ValidateTeam`.
- JSON resources for API payloads.
- Search service provider registration for team search integration.

## Usage

Routes are registered under:

- prefix: `api/administration/teams`
- name prefix: `administration.teams.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `GET /`
- `POST /`
- `DELETE {team}`
- `GET options`

The main model is `LaravelEnso\Teams\Models\Team`.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)

Companion frontend package:

- [`@enso-ui/teams`](https://docs.laravel-enso.com/frontend/teams.html) [↗](https://github.com/enso-ui/teams)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/teams/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:32:53 PM</div>
</div>
