---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tasks

[![License](https://poser.pugx.org/laravel-enso/tasks/license)](https://github.com/laravel-enso/tasks/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/tasks/version)](https://packagist.org/packages/laravel-enso/tasks)
[![Downloads](https://poser.pugx.org/laravel-enso/tasks/downloads)](https://packagist.org/packages/laravel-enso/tasks)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/tasks/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/tasks.svg)](https://github.com/laravel-enso/tasks/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/tasks.svg)](https://github.com/laravel-enso/tasks/pulls)

## Description

Tasks is Enso's internal task management backend.

The package stores tasks allocated between users, supports reminders and overdue detection, exposes create/edit/table/export endpoints, publishes websocket channels for live task updates and task counters, and sends queued reminder notifications to assignees.

## Installation

Install the package:

```bash
composer require laravel-enso/tasks
```

Run the migrations:

```bash
php artisan migrate
```

The package merges `config/tasks.php`, where you can restrict the roles that may be selected as task assignees.

## Features

- CRUD endpoints for tasks, plus table bootstrap, table data, and Excel export.
- Visibility rules based on ownership, assignee, and superior roles.
- Reminder and overdue scopes on the `Task` model.
- Queued reminder notifications through `TaskNotification`.
- Broadcast channels for per-user task streams and global task updates.
- Dynamic taskable payload generation through `TaskableFactory`.

## Usage

Task routes are registered under:

- prefix: `api/system/tasks`
- name prefix: `system.tasks.`
- middleware: `api`, `auth`, `core`

Key endpoints:

- `GET create`
- `POST /`
- `GET {task}/edit`
- `PATCH {task}`
- `DELETE {task}`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`
- `GET count`
- `GET users`

The core model is `LaravelEnso\Tasks\Models\Task`.

Useful relationships and methods:

- `allocatedTo()`
- `remind()`
- `overdue(): bool`

Useful scopes:

- `visible()`
- `pending()`
- `completed()`
- `overdue()`
- `notReminded()`

Broadcast channels:

- `tasks.{userId}`
- `task-updates`

Configuration:

```php
return [
    'roles' => ['*'],
];
```

Use a narrowed list when only certain roles should be assignable.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/tasks`](https://docs.laravel-enso.com/frontend/tasks.html) [↗](https://github.com/enso-ui/tasks)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/tasks/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:32:43 PM</div>
</div>
