---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Products

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/products/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.15.5-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/products/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/products/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/products/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-2-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/products/-/merge_requests)

## Description

Products provides the base catalog, media, documents, supplier links, and bundle support used by commercial and inventory modules in Laravel Enso.

The package exposes CRUD and table APIs for products, nested APIs for pictures and documents, searchable registration, and a scheduled command that recalculates bundle prices overnight.

It is the core private catalog package on which product EAV, inventory, webshop, discounts, and related commercial flows build.

## Installation

Install the package:

```bash
composer require laravel-enso/products
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=products-config
php artisan vendor:publish --tag=products-factories
php artisan vendor:publish --tag=products-assets
```

## Features

- Product CRUD, options, supplier options, bundleable options, and Excel export endpoints.
- Nested picture and document upload APIs with reorder support.
- Form template with tabs for general data, category, suppliers, pictures, bundle composition, and rich descriptions.
- Searchable registration for `name`, `internal_code`, and `part_number`.
- Scheduled `enso:products:update-bundle-prices` command executed daily at `01:25`.
- Morph map registration for the `Product` model.

## Usage

Main route groups:

- `products.*`
- `products.pictures.*`
- `products.documents.*`

The core product form template includes:

- general catalog fields
- supplier selection and default supplier
- bundle configuration
- gallery and document tabs
- category slot integration

Bundle prices are recalculated automatically by the scheduler, or manually:

```bash
php artisan enso:products:update-bundle-prices
```

## API

### HTTP routes

- `GET api/products/create`
- `POST api/products`
- `GET api/products/{product}/edit`
- `PATCH api/products/{product}`
- `DELETE api/products/{product}`
- `GET api/products/initTable`
- `GET api/products/tableData`
- `GET api/products/exportExcel`
- `GET api/products/options`
- `GET api/products/suppliers`
- `GET api/products/bundleables`
- `GET api/products/pictures/{product}`
- `POST api/products/pictures/{product}`
- `DELETE api/products/pictures/{picture}`
- `PATCH api/products/pictures/{picture}/reorder`
- `GET api/products/documents/{product}`
- `POST api/products/documents/{product}`
- `DELETE api/products/documents/{productDocument}`
- `PATCH api/products/documents/{productDocument}/reorder`

### Artisan commands

- `enso:products:update-bundle-prices`

### Search registration

- group: `Product`
- attributes: `name`, `internal_code`, `part_number`
- permission group: `products`

## Depends On

Required Enso packages:

- [`laravel-enso/categories`](https://docs.laravel-enso.com/backend/categories.html) [↗](https://github.com/laravel-enso/categories)
- [`laravel-enso/comments`](https://docs.laravel-enso.com/backend/comments.html) [↗](https://github.com/laravel-enso/comments)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)
- [`laravel-enso/documents`](https://docs.laravel-enso.com/backend/documents.html) [↗](https://github.com/laravel-enso/documents)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/measurement-units`](https://docs.laravel-enso.com/backend/measurement-units.html) [↗](https://github.com/laravel-enso/measurement-units)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/packaging-units`](https://docs.laravel-enso.com/backend/packaging-units.html) [↗](https://github.com/laravel-enso/packaging-units)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/products`](https://docs.laravel-enso.com/frontend/products.html) [↗](https://git.xtelecom.ro/enso-ui/products)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/products/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
