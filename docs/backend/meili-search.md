---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Meili Search

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/meili-search/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/meili-search/version)](https://packagist.org/packages/laravel-enso/meili-search)
[![Downloads](https://poser.pugx.org/laravel-enso/meili-search/downloads)](https://packagist.org/packages/laravel-enso/meili-search)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/meili-search/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/meili-search.svg)](https://github.com/laravel-enso/meili-search/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/meili-search.svg)](https://github.com/laravel-enso/meili-search/pulls)

## Description

Meili Search adds the Enso integration layer for Meilisearch-backed search.

The package persists the runtime enablement flag, exposes the settings form used from the backoffice, and ships artisan commands for creating, importing, flushing, and deleting model indexes through Laravel Scout and the Meilisearch PHP client.

It is designed for Enso models that already implement Scout searchability and need application-controlled index lifecycle operations plus a backoffice toggle.

## Installation

Install the package:

```bash
composer require laravel-enso/meili-search
```

Run the package migrations:

```bash
php artisan migrate
```

Make sure the host application already has Laravel Scout configured with the `meilisearch` driver.

## Features

- Persists a single settings record used to enable or disable the Meilisearch integration.
- Registers the settings routes and form under `Integrations -> Meili Search -> Settings`.
- Provides commands for `index`, `import`, `flush`, and `delete` flows.
- Wraps the Meilisearch PHP client in a dedicated service for index lifecycle operations.
- Keeps the integration opt-in even when Scout is configured globally.

## Usage

Enable the integration from the Meili Search settings screen or by updating the `meilisearch_settings` record.

The package expects searchable models to define a standard Scout configuration, including `searchableAs()` when custom index names are required.

Examples:

```bash
php artisan enso:meilisearch:index "App\\Models\\Product"
php artisan enso:meilisearch:import "App\\Models\\Product" --chunk=500
php artisan enso:meilisearch:flush "App\\Models\\Product"
php artisan enso:meilisearch:delete "App\\Models\\Product"
```

## API

### HTTP routes

- `GET api/integrations/meilisearch/settings`
- `PATCH api/integrations/meilisearch/settings/{settings}`

Route names:

- `integrations.meilisearch.settings.index`
- `integrations.meilisearch.settings.update`

### Artisan commands

- `enso:meilisearch:index {model}`
- `enso:meilisearch:delete {model}`
- `enso:meilisearch:flush {model}`
- `enso:meilisearch:import {model} {--chunk=}`

### Service

- `LaravelEnso\\MeiliSearch\\Services\\MeiliSearch`

Behavior:

- creates indexes using the model `searchableAs()` name
- imports searchable records through Scout
- flushes Scout indexes
- deletes indexes directly from Meilisearch

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)

Required external packages:

- [`laravel/scout`](https://github.com/laravel/scout) [↗](https://github.com/laravel/scout)
- [`meilisearch/meilisearch-php`](https://github.com/meilisearch/meilisearch-php) [↗](https://github.com/meilisearch/meilisearch-php)

Companion frontend package:

- [`@enso-ui/meili-search`](https://docs.laravel-enso.com/frontend/meili-search.html) [↗](https://github.com/enso-ui/meili-search)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/meili-search/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:29:59 PM</div>
</div>
