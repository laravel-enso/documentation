---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# How-to

[![License](https://poser.pugx.org/laravel-enso/how-to/license)](https://github.com/laravel-enso/how-to/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/how-to/version)](https://packagist.org/packages/laravel-enso/how-to)
[![Downloads](https://poser.pugx.org/laravel-enso/how-to/downloads)](https://packagist.org/packages/laravel-enso/how-to)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/how-to/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/how-to.svg)](https://github.com/laravel-enso/how-to/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/how-to.svg)](https://github.com/laravel-enso/how-to/pulls)

## Description

How-To manages internal tutorial videos, posters, and tags for Laravel Enso.

The package exposes CRUD-style endpoints for videos, tags, and posters, stores the media and metadata, and is meant to back the Enso in-app help and tutorial area.

It is an Enso companion package rather than a standalone media platform.

## Installation

Install the package:

```bash
composer require laravel-enso/how-to
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Video create, update, show, list, and delete endpoints.
- Tag create, update, list, and delete endpoints.
- Poster upload, show, and delete endpoints.
- Validation and resource classes for the tutorial media domain.

## Usage

The package mounts its endpoints under:

- `howTo.videos.*`
- `howTo.tags.*`
- `howTo.posters.*`

## API

### HTTP routes

- `GET api/howTo/videos`
- `POST api/howTo/videos`
- `PATCH api/howTo/videos/{video}`
- `DELETE api/howTo/videos/{video}`
- `GET api/howTo/videos/{video}`
- `GET api/howTo/tags`
- `POST api/howTo/tags`
- `PATCH api/howTo/tags/{tag}`
- `DELETE api/howTo/tags/{tag}`
- `POST api/howTo/posters`
- `DELETE api/howTo/posters/{poster}`
- `GET api/howTo/posters/{poster}`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)

Companion frontend package:

- [`@enso-ui/how-to`](https://docs.laravel-enso.com/frontend/how-to.html) [↗](https://github.com/enso-ui/how-to)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/how-to/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:35 PM</div>
</div>
