---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Typesense Webshop

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.10.9-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/merge_requests)

## Description

Typesense Webshop connects Enso webshop browsing to Typesense.

When the host application runs with `scout.driver=typesense` and Typesense is enabled, the package replaces the default webshop product and category filter services, swaps the sorting enum, uses the host application's Scout Typesense model settings, and reacts to EAV attribute updates so facets stay aligned with the product catalog.

## Installation

This is a proprietary package distributed through the private Enso registry.

Make sure the host application already has:

- `laravel-enso/typesense`
- `laravel-enso/webshop`
- indexed products in Typesense

No extra routes are published by this package.

The host application must declare the product collection schema and search parameters in `config/scout.php`, for example:

```php
use LaravelEnso\Products\Models\Product as SearchableProduct;
use LaravelEnso\Products\Services\Search\SearchableAttributes;
use LaravelEnso\TypesenseWebshop\Services\Schema;

'typesense' => [
    // ...
    'model-settings' => [
        SearchableProduct::class => [
            'collection-schema' => array_merge(
                ['name' => 'solarlink-products'],
                (new Schema())->build(),
            ),
            'search-parameters' => [
                'query_by' => implode(',', SearchableAttributes::get()),
            ],
        ],
    ],
],
```

## Features

- Deferred service bindings for webshop product filters, category filters, and sorts.
- Automatic fallback to core database filters when Typesense is disabled.
- Schema builder for searchable product collections.
- Typo-tolerance helper used by webshop search requests.
- EAV observer integration for facet/schema synchronization.

## Usage

The package activates automatically when:

- `config('scout.driver') === 'typesense'`
- `LaravelEnso\Typesense\Models\Settings::enabled()` returns `true`

Main extension points:

- `Services\Filters\Product`
- `Services\Filters\Category`
- `Enums\Sorts`
- `Services\Schema`
- `Services\TypoTolerance`

The package no longer registers dynamic model methods for Scout hooks. Keep collection schema and search parameters explicit in the host application's Scout config.

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/typesense`](https://docs.laravel-enso.com/backend/typesense.html) [↗](https://github.com/laravel-enso/typesense)
- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)
- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/product-eav`](https://docs.laravel-enso.com/backend/product-eav.html) [↗](https://git.xtelecom.ro/laravel-enso/product-eav)
- [`laravel-enso/webshop`](https://docs.laravel-enso.com/backend/webshop.html) [↗](https://git.xtelecom.ro/laravel-enso/webshop)

External service dependency:

- Typesense search engine used as the webshop query and faceting backend

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/typesense-webshop/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/29/2026, 6:38:00 PM</div>
</div>
