---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Files

[![License](https://poser.pugx.org/laravel-enso/files/license)](https://github.com/laravel-enso/files/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/files/version)](https://packagist.org/packages/laravel-enso/files)
[![Downloads](https://poser.pugx.org/laravel-enso/files/downloads)](https://packagist.org/packages/laravel-enso/files)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/files/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/files.svg)](https://github.com/laravel-enso/files/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/files.svg)](https://github.com/laravel-enso/files/pulls)

## Description

File Manager adds Enso file uploads, browsing, sharing, and type administration.

The package stores files and uploads, supports recent and favorite lists, generates temporary links, exposes signed share links for public access, and lets administrators manage file types through form and table endpoints.

It is intended to back the Enso file-manager UI and other modules that need attachable files.

## Installation

Install the package:

```bash
composer require laravel-enso/files
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=files-config
php artisan vendor:publish --tag=files-factory
```

## Features

- Upload store and destroy endpoints.
- File browsing, download, show, rename, favorite, recent, and visibility-toggle endpoints.
- Signed share links for externally accessible files.
- File-type CRUD with form and table builders.
- Image processing hooks and upload validation services.

## Usage

Main route groups:

- `core.files.*`
- `core.uploads.*`
- `administration.fileTypes.*`

Signed sharing is exposed through:

```php
route('core.files.share', ['file' => $file]);
```

## API

### HTTP routes

- `GET api/core/files/link/{file}`
- `GET api/core/files/download/{file}`
- `DELETE api/core/files/{file}`
- `GET api/core/files/show/{file}`
- `GET api/core/files/browse/{type}`
- `GET api/core/files/recent`
- `GET api/core/files/favorites`
- `PATCH api/core/files/{file}`
- `PATCH api/core/files/makePublic/{file}`
- `PATCH api/core/files/makePrivate/{file}`
- `PATCH api/core/files/favorite/{file}`
- `POST api/core/uploads/store`
- `DELETE api/core/uploads/{upload}`
- `GET api/administration/fileTypes/create`
- `POST api/administration/fileTypes`
- `GET api/administration/fileTypes/{type}/edit`
- `PATCH api/administration/fileTypes/{type}`
- `DELETE api/administration/fileTypes/{type}`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/image-transformer`](https://docs.laravel-enso.com/backend/image-transformer.html) [↗](https://github.com/laravel-enso/image-transformer)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/files`](https://docs.laravel-enso.com/frontend/files.html) [↗](https://github.com/enso-ui/files)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/files/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:21 PM</div>
</div>
