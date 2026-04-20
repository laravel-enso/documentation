---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# IO

[![License](https://poser.pugx.org/laravel-enso/io/license)](https://github.com/laravel-enso/io/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/io/version)](https://packagist.org/packages/laravel-enso/io)
[![Downloads](https://poser.pugx.org/laravel-enso/io/downloads)](https://packagist.org/packages/laravel-enso/io)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/io/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/io.svg)](https://github.com/laravel-enso/io/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/io.svg)](https://github.com/laravel-enso/io/pulls)

## Description

IO provides Enso process-monitoring events, websocket channels, and status enums for long-running operations.

The package registers broadcast channels for per-user and superior-level operation streams, maps websocket topics for the frontend, and ships observers, events, contracts, and enums around IO operation tracking.

It is an infrastructure package for operational feedback rather than a CRUD module.

## Installation

Install the package:

```bash
composer require laravel-enso/io
```

## Features

- Broadcast channels for `operations` and `operations.{userId}`.
- Websocket topic registration for IO updates.
- IO operation event and observer classes.
- Status and type enums for monitored operations.

## Usage

The package is intended to be consumed by other Enso modules that implement the `IOOperation` contract and broadcast progress updates over the registered websocket channels.

Superior users receive the shared `operations` channel, while regular users receive their own `operations.{userId}` channel.

## API

There is no HTTP API.

Operational surface:

- broadcast channels `operations` and `operations.{userId}`
- websocket topic `io`
- `LaravelEnso\\IO\\Contracts\\IOOperation`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/io`](https://docs.laravel-enso.com/frontend/io.html) [↗](https://github.com/enso-ui/io)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/io/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:49 PM</div>
</div>
