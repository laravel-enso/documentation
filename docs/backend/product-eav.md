---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Product Eav

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-eav/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.7.3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-eav/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/product-eav/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-eav/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/product-eav/-/merge_requests)

## Description

Product Eav extends the core product module with dynamic EAV attributes, groupings, importers, and searchable payload updates.

The package plugs itself into the existing `products` flow by replacing the product form builder, update controller, and validation request. It also attaches dynamic methods and relations to products so attribute values can be read, grouped, and synchronized from the product model itself.

It is intended for Enso applications where products require a scalable attribute set that changes across categories or business lines.

## Installation

Install the package:

```bash
composer require laravel-enso/product-eav
```

Run the package migrations:

```bash
php artisan migrate
```

This package works on top of `laravel-enso/products` and `laravel-enso/eav`; it does not expose its own standalone UI.

## Features

- Rebinds the core product form builder to add an `Attributes` tab and EAV payload.
- Rebinds product update handling and validation to persist EAV values together with the base product.
- Registers product dynamic methods such as `syncEav()`, `getEav()`, and `attributes()`.
- Registers dynamic relations for product values, attribute groups, and reverse product lookups from EAV values.
- Observes EAV value updates and reindexes affected products when searchable providers are enabled.
- Ships import templates and validators for attribute groupings and product EAV imports.

## Usage

The package extends the existing `products` form. The added `Attributes` tab is injected as a slot-backed section inside the product form template.

Typical write flow:

```php
$product->syncEav($payload['eav']);
```

The dynamic method delegates to the package update service and can optionally preserve existing values by using the second `$withoutDetaching` flag.

When searchable providers are active and a filterable EAV value changes, the observer re-syncs affected products into the search index.

## API

### Product bindings

The package replaces these `laravel-enso/products` services:

- form builder
- update controller
- product validation request

### Dynamic product methods

- `attributes()`
- `eav()`
- `getEav()`
- `syncEav(array $config, bool $withoutDetaching = false)`

### Observer

- `LaravelEnso\\ProductEav\\Observers\\Value`

Behavior:

- watches updates on `LaravelEnso\\Eav\\Models\\Value`
- filters only changed, filterable attributes
- re-syncs affected products through the searchable provider

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://git.xtelecom.ro/laravel-enso/products)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/product-eav/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:26:25 PM</div>
</div>
