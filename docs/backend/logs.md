---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Logs

[![License](https://poser.pugx.org/laravel-enso/logs/license)](https://github.com/laravel-enso/logs/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/logs/version)](https://packagist.org/packages/laravel-enso/logs)
[![Downloads](https://poser.pugx.org/laravel-enso/logs/downloads)](https://packagist.org/packages/laravel-enso/logs)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/logs/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/logs.svg)](https://github.com/laravel-enso/logs/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/logs.svg)](https://github.com/laravel-enso/logs/pulls)

## Description

Logs provides Enso endpoints for browsing, downloading, showing, and deleting application log files.

The package exposes a compact log-management API over the application's log storage and is meant to back the corresponding Enso administration screen.

It is an operational helper package, not a general-purpose logging driver.

## Installation

Install the package:

```bash
composer require laravel-enso/logs
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Log index endpoint.
- Single-log show and download endpoints.
- Log deletion endpoint.
- Simple operational surface under the system namespace.

## Usage

The package mounts its routes under `system.logs.*`.

## API

### HTTP routes

- `GET api/system/logs`
- `DELETE api/system/logs/{log}`
- `GET api/system/logs/{log}/download`
- `GET api/system/logs/{log}`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)

Companion frontend package:

- [`@enso-ui/logs`](https://docs.laravel-enso.com/frontend/logs.html) [↗](https://github.com/enso-ui/logs)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/logs/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:54 PM</div>
</div>
