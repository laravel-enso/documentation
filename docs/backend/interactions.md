---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Interactions

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/interactions/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.8.3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/interactions/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/interactions/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/interactions/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/interactions/-/merge_requests)

## Description

Interactions manages Enso user interactions, reminders, and related calendar integration.

The package exposes CRUD endpoints for interactions together with table, export, creator, and assignee option endpoints, publishes reminder mail views and config, and schedules a reminder-sending command during business hours.

It is intended for private Enso deployments that track user follow-ups and reminders.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=interactions-config
php artisan vendor:publish --tag=interactions-mail
php artisan vendor:publish --tag=interactions-factory
```

## Features

- Interaction fetch, create, update, and delete endpoints.
- Table init, table data, and Excel export endpoints.
- Auxiliary creator and user option endpoints for filters and assignment UI.
- Published mail templates for reminder notifications.
- Scheduled reminder command running hourly between 06:00 and 20:00.

## Usage

The package mounts its routes under `interactions.*`.

The scheduled reminder command is:

```bash
php artisan enso:interactions:send-reminders
```

## API

### HTTP routes

- `GET api/interactions`
- `POST api/interactions`
- `PATCH api/interactions/{interaction}`
- `DELETE api/interactions/{interaction}`
- `GET api/interactions/initTable`
- `GET api/interactions/tableData`
- `GET api/interactions/exportExcel`
- `GET api/interactions/createdByOptions`
- `GET api/interactions/users`

### Artisan command

- `enso:interactions:send-reminders`

## Depends On

Required Enso packages:

- [`laravel-enso/calendar`](https://docs.laravel-enso.com/backend/calendar.html) [↗](https://github.com/laravel-enso/calendar)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/interactions`](https://docs.laravel-enso.com/frontend/interactions.html) [↗](https://git.xtelecom.ro/enso-ui/interactions)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/interactions/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
