---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Meili Search Webshop

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.6.0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/tags)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/blob/main/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/merge_requests)

## Description

Meili Search Webshop connects the Enso webshop filtering layer to Meilisearch.

When the application uses `scout.driver=meilisearch` and the base Meili Search integration is enabled, the package replaces the default database-backed webshop product and category filters with Meilisearch-backed implementations. It also keeps EAV-driven filters synchronized with the searchable catalog.

The package does not expose its own HTTP API or UI. It extends the existing webshop flow by rebinding filter services, swapping sorts, and reacting to EAV attribute updates.

## Installation

Install the package:

```bash
composer require laravel-enso/meili-search-webshop
```

Make sure the host application already has:

- `laravel-enso/meili-search` installed and enabled
- a working Laravel Scout + Meilisearch configuration
- indexed webshop products

No additional routes or published assets are required by this package.

## Features

- Switches webshop product filtering to Meilisearch-backed pagination and facet filtering.
- Switches category filter resolution to Meilisearch facet distributions.
- Swaps the webshop sorts enum when Meilisearch search is active.
- Observes EAV attribute updates and queues EAV filter refresh jobs.
- Chains EAV filter updates with product attribute resynchronization.

## Usage

Once Meili Search is enabled in the base integration settings and the Scout driver is set to `meilisearch`, the package bindings are applied automatically.

The category and product filter providers are resolved lazily and fall back to the core database implementations when the integration is disabled.

EAV attributes marked as filterable are pushed into the Meilisearch-backed webshop filtering layer through the queued `UpdateEavFilters` job and the attribute observer chain.

## API

### Service bindings

When Meili Search is active, the package replaces these webshop services:

- product filter provider
- category filter provider
- sorts enum provider

### Queue jobs

- `LaravelEnso\\MeiliSearchWebshop\\Jobs\\UpdateEavFilters`
- `LaravelEnso\\ProductEav\\Jobs\\SyncAttributeProducts`

Behavior:

- reads the current EAV attribute configuration
- refreshes the derived webshop filter structure
- re-synchronizes affected product attribute payloads

## Depends On

Required Enso packages:

- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)
- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/meili-search`](https://docs.laravel-enso.com/backend/meili-search.html) [↗](https://github.com/laravel-enso/meili-search)
- [`laravel-enso/product-eav`](https://docs.laravel-enso.com/backend/product-eav.html) [↗](https://git.xtelecom.ro/laravel-enso/product-eav)
- [`laravel-enso/webshop`](https://docs.laravel-enso.com/backend/webshop.html) [↗](https://git.xtelecom.ro/laravel-enso/webshop)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/meili-search-webshop/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 5:27:53 PM</div>
</div>
