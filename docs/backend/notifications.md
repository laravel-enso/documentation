---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Notifications

[![License](https://poser.pugx.org/laravel-enso/notifications/license)](https://github.com/laravel-enso/notifications/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/notifications/version)](https://packagist.org/packages/laravel-enso/notifications)
[![Downloads](https://poser.pugx.org/laravel-enso/notifications/downloads)](https://packagist.org/packages/laravel-enso/notifications)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/notifications/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/notifications.svg)](https://github.com/laravel-enso/notifications/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/notifications.svg)](https://github.com/laravel-enso/notifications/pulls)

## Description

Notifications provides Enso API endpoints and broadcast channels for user notifications.

The package exposes listing, counting, read, read-all, delete, and delete-all endpoints on top of Laravel's database notifications, and registers a per-user broadcast channel based on the configured auth model.

It is intended to back the Enso notification dropdown and related realtime UI flows.

## Installation

Install the package:

```bash
composer require laravel-enso/notifications
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Notification list and unread-count endpoints.
- Mark-one and mark-all-as-read endpoints.
- Delete-one and delete-all endpoints.
- Broadcast channel registration for user-specific notification streams.

## Usage

Main route group:

- `core.notifications.*`

The broadcast channel is derived from the configured auth model namespace and ends with `.{id}`.

## API

### HTTP routes

- `GET api/core/notifications`
- `DELETE api/core/notifications/destroyAll`
- `DELETE api/core/notifications/{notification}`
- `GET api/core/notifications/count`
- `PATCH api/core/notifications/read/{notification}`
- `POST api/core/notifications/readAll`

### Broadcast

- per-user notification channel for the configured auth provider model

## Depends On

Required packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- `pusher/pusher-php-server`

Companion frontend package:

- [`@enso-ui/notifications`](https://docs.laravel-enso.com/frontend/notifications.html) [↗](https://github.com/enso-ui/notifications)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/notifications/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:30:31 PM</div>
</div>
