---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Ticketing

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ticketing/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.8.2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ticketing/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/ticketing/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ticketing/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/ticketing/-/merge_requests)

## Description

Ticketing is Enso's helpdesk and issue-tracking backend.

The package stores tickets, replies, attachments, statuses, tags, and tagged users, exposes create/show/update flows together with table/export endpoints, supports assignment and status transitions, and archives ticket attachments for download.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the migrations:

```bash
php artisan migrate
```

The package reads `config/ticketing.php` to restrict assignable roles when needed.

## Features

- Ticket CRUD plus dedicated show payloads.
- Reply, attachment, and tag submodules with their own route groups.
- Assignment workflow with notification delivery.
- Status history stored separately from the ticket row.
- Table bootstrap, data, and export endpoints for administration views.
- Enum-backed priority, type, and status values.

## Usage

Main ticket routes:

- prefix: `api/ticketing/tickets`
- name prefix: `ticketing.tickets.`
- middleware: `api`, `auth`, `core`

Core endpoints:

- `GET /`
- `POST /`
- `PATCH {ticket}`
- `DELETE {ticket}`
- `GET {ticket}`
- `PATCH {ticket}/assign`
- `PATCH {ticket}/updateStatus`
- `GET {ticket}/attachments`
- `GET initTable`
- `GET tableData`
- `GET exportExcel`
- `GET createdByOptions`
- `GET assignedToOptions`

Submodule routes:

- `ticketing.reply.*`
- `ticketing.tag.*`
- `ticketing.attachment.*`

Main model:

- `LaravelEnso\Ticketing\Models\Ticket`

Relationships and methods:

- `attachments()`
- `replies()`
- `taggedUsers()`
- `tags()`
- `assignedTo()`
- `latestReply()`
- `statuses()`
- `assignTo(User $user)`
- `unassign()`
- `notify(string $path)`

Enums:

- `Priority`
- `Status`
- `Type`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/calendar`](https://docs.laravel-enso.com/backend/calendar.html) [↗](https://github.com/laravel-enso/calendar)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/ticketing`](https://docs.laravel-enso.com/frontend/ticketing.html) [↗](https://git.xtelecom.ro/enso-ui/ticketing)

External service dependency:

- Internal support workflow package designed for private Enso deployments

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/ticketing/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 7:30:03 PM</div>
</div>
