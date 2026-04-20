---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Documents

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/documents/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/documents/version)](https://packagist.org/packages/laravel-enso/documents)
[![Downloads](https://poser.pugx.org/laravel-enso/documents/downloads)](https://packagist.org/packages/laravel-enso/documents)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/documents/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/documents.svg)](https://github.com/laravel-enso/documents/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/documents.svg)](https://github.com/laravel-enso/documents/pulls)

## Description

Documents adds polymorphic document attachments to Enso models.

The package stores uploaded documents through the Enso files layer, exposes document listing, upload, and delete endpoints, supports configurable deletion rules for related models, and can queue OCR for PDF documents whose owners implement the `Ocrable` contract.

It is meant for backoffice models that need a lightweight document vault with optional OCR processing.

## Installation

Install the package:

```bash
composer require laravel-enso/documents
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publish:

```bash
php artisan vendor:publish --tag=documents-config
```

Default configuration:

```php
return [
    'deletableTimeLimit' => 60 * 60,
    'imageWidth' => 2048,
    'imageHeight' => 2048,
    'onDelete' => 'restrict',
    'loggableMorph' => [
        'documentable' => [],
    ],
    'queues' => [
        'ocr' => 'heavy',
    ],
];
```

## Features

- Polymorphic one-to-one and one-to-many document relations via the `Documentable` trait.
- File attachment handling through `laravel-enso/files`.
- Upload, list, and delete API under `core.documents`.
- Configurable delete policy with `restrict` or `cascade`.
- OCR dispatch for PDF documents whose owner implements `Ocrable`.

## Usage

Add the trait to any model that should own documents:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Documents\Traits\Documentable;

class Order extends Model
{
    use Documentable;
}
```

Available relations:

- `document()`
- `documents()`

If the owning model should trigger OCR for uploaded PDFs, implement `LaravelEnso\Documents\Contracts\Ocrable`.

## API

### HTTP routes

- `GET api/core/documents`
- `POST api/core/documents`
- `DELETE api/core/documents/{document}`

Route names:

- `core.documents.index`
- `core.documents.store`
- `core.documents.destroy`

### Model surface

`LaravelEnso\\Documents\\Models\\Document`

Useful methods:

- `store(array $request, array $files)`
- `scopeFor(array $params): Builder`
- `scopeFilter(?string $search): Builder`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/image-transformer`](https://docs.laravel-enso.com/backend/image-transformer.html) [↗](https://github.com/laravel-enso/image-transformer)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/ocr`](https://docs.laravel-enso.com/backend/ocr.html) [↗](https://git.xtelecom.ro/laravel-enso/ocr)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/documents/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 1:17:36 PM</div>
</div>
