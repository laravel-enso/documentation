---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Laravel Enso System Notifications

Configurable system notification definitions for Laravel Enso applications.

## Description

System Notifications stores notification definitions, channel templates, context-defined placeholders, handler-driven recipients, and dispatch logs.

This package does not replace `laravel-enso/notifications`. The existing notifications package remains responsible for the notification inbox, unread counts, read/delete endpoints, and broadcast channel plumbing. This package owns the definition and dispatch orchestration layer.

## Installation

Install the package through Composer:

```bash
composer require laravel-enso/system-notifications
```

Run migrations after installing:

```bash
php artisan migrate
```

## Features

- defines system notifications in the database
- supports mail, SMS, and push templates
- validates `{placeholder}` usage through context-defined placeholders
- resolves `to` and `cc` recipients through notification handlers
- exposes administration endpoints for contexts, placeholders, and notification options
- exposes context registry contracts for consuming packages
- sends SMS through an application-bound `SmsSender`
- logs notification dispatch per channel and recipient
- ships Enso routes, form, catalogue table, logs table, permissions, and menu structure

## Contexts

Contexts are code-defined and registered by the consuming application or package:

```php
use LaravelEnso\SystemNotifications\Resolvers\Contexts;

Contexts::register(ProjectContext::class);
```

Context classes implement:

```php
LaravelEnso\SystemNotifications\Contracts\Context
```

## Contracts

- `Contracts\Context`
- `Contracts\Placeholder`
- `Contracts\Handler`
- `Contracts\SmsSender`

Handlers return `to()` and `cc()` email address arrays for mail, `sms()` phone number arrays for SMS, and `push()` notifiable arrays for push/database notifications.

Applications that enable SMS must bind `SmsSender` to their own implementation. Saving an SMS-enabled notification fails validation while no sender is registered.

## Menus

The package exposes a nested administration menu:

- `Administration > Notifications`
- `Administration > Notifications > Catalogue`
- `Administration > Notifications > Logs`

`Catalogue` manages notification definitions. `Logs` displays dispatch logs from
`system_notification_logs` and supports filtering by notification, context,
channel, status, and creation date.

## Routes

Main route group:

- `api/administration/system-notifications`

Named route groups:

- `administration.systemNotifications.catalogue.*`
- `administration.systemNotifications.logs.*`

## Companion Frontend Package

- `@enso-ui/system-notifications`

## License

MIT.

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/system-notifications/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/13/2026, 7:43:05 PM</div>
</div>
