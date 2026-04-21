---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Algolia

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/algolia/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/algolia/version)](https://packagist.org/packages/laravel-enso/algolia)
[![Downloads](https://poser.pugx.org/laravel-enso/algolia/downloads)](https://packagist.org/packages/laravel-enso/algolia)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/algolia/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/algolia.svg)](https://github.com/laravel-enso/algolia/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/algolia.svg)](https://github.com/laravel-enso/algolia/pulls)

## Description

Algolia adds the Enso integration layer for Algolia-backed search.

The package stores the runtime toggle for the integration, exposes the settings form used from the backoffice, and ships an artisan command that wraps `scout:import` and then updates index settings such as searchable attributes and faceting.

It is designed for Enso models that are already indexed through Laravel Scout Extended and need their Algolia configuration aligned with the application's filterable and searchable fields.

## Installation

Install the package:

```bash
composer require laravel-enso/algolia
```

Run the package migrations:

```bash
php artisan migrate
```

Make sure the host application is already configured for Algolia through Laravel Scout / Scout Extended. This package does not replace the base Scout configuration.

## Features

- Persists a single settings record used to enable or disable the Algolia integration from the Enso UI.
- Registers the settings routes and menu structure under `Integrations -> Algolia -> Settings`.
- Provides the `enso:algolia:import` command for bulk imports.
- Updates `searchableAttributes` and `attributesForFaceting` after each import based on the model's current static configuration.

## Usage

Enable the integration from the Algolia settings screen or by updating the `algolia_settings` record.

Models imported with the package command are expected to expose the static configuration methods used when updating the index:

```php
public static function filterableAttributes(): array
{
    return ['brand', 'categoryId'];
}

public static function searchableAttributes(): array
{
    return ['name', 'sku'];
}
```

Import a model into Algolia and immediately refresh the related index settings:

```bash
php artisan enso:algolia:import "App\\Models\\Product"
```

## API

### HTTP routes

- `GET api/integrations/algolia/settings`
- `PATCH api/integrations/algolia/settings/{settings}`

Route names:

- `integrations.algolia.settings.index`
- `integrations.algolia.settings.update`

### Artisan commands

- `enso:algolia:import {model} {--chunk=}`

Behavior:

- delegates the bulk import to `scout:import`
- listens for `ModelsImported`
- updates Algolia faceting and searchable settings after import completion

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)

Required external packages:

- [`algolia/scout-extended`](https://github.com/algolia/scout-extended) [↗](https://github.com/algolia/scout-extended)

Companion frontend package:

- [`@enso-ui/algolia`](https://docs.laravel-enso.com/frontend/algolia.html) [↗](https://github.com/enso-ui/algolia)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/algolia/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:05:15 PM</div>
</div>
