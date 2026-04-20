---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Algolia Webshop

[![License](https://img.shields.io/badge/license-CC--BY--NC--ND%204.0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/algolia-webshop/-/blob/master/LICENSE)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/algolia-webshop/-/blob/master/composer.json)

## Description

Algolia Webshop connects the Enso webshop filtering layer to Algolia.

When the application uses `scout.driver=algolia` and the Algolia integration is enabled, the package replaces the default database-backed webshop product and category filters with Algolia-backed implementations. It also keeps Algolia facet settings in sync with EAV filter changes used by the product catalog.

The package does not expose its own UI. It extends the existing webshop flow by rebinding filter services and by reacting to EAV attribute updates.

## Installation

Install the package:

```bash
composer require laravel-enso/algolia-webshop
```

Make sure the host application already has:

- `laravel-enso/algolia` installed and enabled
- a working Algolia Scout configuration
- indexed webshop products

No additional routes or published assets are required by this package.

## Features

- Switches webshop product filtering to Algolia-backed pagination and facet filtering.
- Switches category filter resolution to Algolia facets.
- Swaps the webshop sorts enum when Algolia search is active.
- Observes EAV attribute updates and queues Algolia facet setting updates.
- Chains EAV facet updates with product attribute resynchronization.

## Usage

Once Algolia is enabled in the base integration settings and the Scout driver is set to `algolia`, the package bindings are applied automatically.

The category and product filter providers are resolved lazily and fall back to the core database implementations when Algolia is disabled.

EAV attributes marked as filterable are pushed into Algolia's `attributesForFaceting` through the queued `UpdateEavFilters` job.

## API

### Service bindings

When Algolia is active, the package replaces these webshop services:

- product filter provider
- category filter provider
- sorts enum provider

### Queue job

- `LaravelEnso\\AlgoliaWebshop\\Jobs\\UpdateEavFilters`

Behavior:

- reads the current Algolia index settings for products
- appends the searchable EAV key to `attributesForFaceting`
- persists the updated settings back to Algolia

## Depends On

Required Enso packages:

- [`laravel-enso/algolia`](https://docs.laravel-enso.com/backend/algolia.html) [↗](https://github.com/laravel-enso/algolia)
- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)
- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/product-eav`](https://docs.laravel-enso.com/backend/product-eav.html) [↗](https://git.xtelecom.ro/laravel-enso/product-eav)
- [`laravel-enso/webshop`](https://docs.laravel-enso.com/backend/webshop.html) [↗](https://git.xtelecom.ro/laravel-enso/webshop)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/algolia-webshop/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 10:59:47 AM</div>
</div>
