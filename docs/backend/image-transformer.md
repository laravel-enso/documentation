---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Image Transformer

[![License](https://poser.pugx.org/laravel-enso/image-transformer/license)](https://github.com/laravel-enso/image-transformer/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/image-transformer/version)](https://packagist.org/packages/laravel-enso/image-transformer)
[![Downloads](https://poser.pugx.org/laravel-enso/image-transformer/downloads)](https://packagist.org/packages/laravel-enso/image-transformer)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/image-transformer/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/image-transformer.svg)](https://github.com/laravel-enso/image-transformer/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/image-transformer.svg)](https://github.com/laravel-enso/image-transformer/pulls)

## Description

Image Transformer provides a small service for validating, resizing, and optimizing uploaded images.

It wraps Intervention Image for resize operations and Spatie's image optimizer for post-processing, while enforcing a limited set of supported image mime types before any transformation is attempted.

The package is useful in upload flows where images should be normalized before storage, for example avatars, covers, gallery images, or document attachments that need size limits and optimization.

## Installation

Install the package:

```bash
composer require laravel-enso/image-transformer
```

The package relies on:

- `intervention/image-laravel` for reading and resizing images
- `spatie/laravel-image-optimizer` for optimization

To use resizing, the runtime must have at least one supported image extension installed:

- `gd`
- `imagick`

## Features

- Validates uploaded files before transformation.
- Supports `png`, `jpeg`, `gif`, and `webp` images.
- Optimizes images in place through Spatie's optimizer chain.
- Resizes images proportionally by width, by height, or by both through `resize()`.
- Prevents upsizing by only resizing when the original image is larger than the requested dimension.
- Saves transformations back to the original file path.

## Usage

Create a transformer from an uploaded file:

```php
use LaravelEnso\ImageTransformer\Services\ImageTransformer;

$transformer = new ImageTransformer($file);
```

Optimize the original file:

```php
$transformer->optimize();
```

Resize proportionally to a maximum width:

```php
$transformer->width(512);
```

Resize proportionally to a maximum height:

```php
$transformer->height(512);
```

Apply both constraints in sequence:

```php
$transformer->resize(1024, 768);
```

::: tip Tip
The transformer edits the original file in place.

If you need to preserve the original upload, copy or move it before calling `optimize()`, `width()`, `height()`, or `resize()`.
:::

## API

### Service

`LaravelEnso\ImageTransformer\Services\ImageTransformer`

Constructor:

- `__construct(File $file)`

Public methods:

- `optimize(): self`
- `resize(int $width, int $height): self`
- `width(int $width): self`
- `height(int $height): self`

### Supported Mime Types

The service accepts:

- `image/png`
- `image/jpeg`
- `image/gif`
- `image/webp`

### Exceptions

The package exposes:

- `LaravelEnso\ImageTransformer\Exceptions\File`
- `LaravelEnso\ImageTransformer\Exceptions\Dependency`

Scenarios covered:

- invalid uploaded file
- unsupported mime type
- missing `gd` / `imagick` extension when resizing

## Depends On

Required Enso packages:

- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

External dependencies:

- [`intervention/image-laravel`](https://github.com/Intervention/image-laravel) [↗](https://github.com/Intervention/image-laravel)
- [`spatie/laravel-image-optimizer`](https://github.com/spatie/laravel-image-optimizer) [↗](https://github.com/spatie/laravel-image-optimizer)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/image-transformer/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:28:23 PM</div>
</div>
