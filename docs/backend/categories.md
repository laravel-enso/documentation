---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Categories

[![License](https://poser.pugx.org/laravel-enso/categories/license)](https://github.com/laravel-enso/categories/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/categories/version)](https://packagist.org/packages/laravel-enso/categories)
[![Downloads](https://poser.pugx.org/laravel-enso/categories/downloads)](https://packagist.org/packages/laravel-enso/categories)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/categories/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/categories.svg)](https://github.com/laravel-enso/categories/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/categories.svg)](https://github.com/laravel-enso/categories/pulls)

## Description

Categories is Laravel Enso's reusable hierarchical category management package.

It provides the backend flow for storing, editing, listing, reordering, importing, and decorating nested categories, together with form and table builders that plug directly into the Enso admin UI. The package also supports optional category images, featured categories, select-friendly labels, and tree-shaped API payloads for frontend consumers.

## Installation

This package comes pre-installed in Laravel Enso distributions that need category administration.

For standalone package installation inside an Enso-based application:

```bash
composer require laravel-enso/categories
```

The package auto-registers its service provider, loads its routes and migrations, and merges the `enso.categories` configuration namespace.

Run the migrations after installation:

```bash
php artisan migrate
```

If you want to publish the package config or its factory stubs:

```bash
php artisan vendor:publish --tag=categories-config
php artisan vendor:publish --tag=categories-factory
```

## Features

- Stores categories in a self-referencing tree through `parent_id`.
- Keeps siblings ordered automatically through `order_index` and the global `Ordered` scope.
- Exposes full CRUD endpoints for category administration.
- Supports drag-and-drop style reorder and parent reassignment through the `move()` workflow.
- Builds frontend-ready form payloads through the Enso forms builder.
- Builds table metadata and data endpoints through the Enso tables builder.
- Returns nested category trees with image metadata for UI consumers.
- Generates select-compatible labels such as `Parent > Child`.
- Supports optional category images through Enso files integration.
- Restricts image uploads to top-level categories only.
- Supports featured categories through the `is_featured` flag and `featured()` scope.
- Includes import and validation classes for category dataset ingestion.
- Provides helper methods for parent trees, subtree flattening, depth, and level calculations.

::: warning Note
Only top-level categories can have images attached. Upload validation blocks image uploads for nested categories.

The maximum nesting depth is controlled through `CATEGORIES_MAX_NESTING_LEVEL`.
:::

## Usage

### Basic model usage

Create a top-level category:

```php
use LaravelEnso\Categories\Models\Category;

$category = Category::create([
    'name' => 'Solar Panels',
    'is_featured' => true,
]);
```

Create a child category:

```php
$subcategory = Category::create([
    'name' => 'Monocrystalline',
    'parent_id' => $category->id,
    'is_featured' => false,
    'order_index' => Category::nextIndex($category->id),
]);
```

Move a category to a different parent and position:

```php
$subcategory->move(orderIndex: 1, parentId: null);
```

Read the nested tree:

```php
$tree = Category::tree();
```

Inspect hierarchy helpers:

```php
$level = $subcategory->level();
$depth = $category->depth();
$parentTree = $subcategory->parentTree();
$flattenedIds = $category->flattenCurrentAndBelowIds();
```

### Select labels

Use the label resource when a dropdown needs the full breadcrumb:

```php
$options = Category::with('recursiveParent')
    ->get()
    ->map
    ->label();
```

### Frontend integration

The package ships the backend routes and payload builders used by the Enso categories administration UI.

Companion frontend package:

- [`@enso-ui/categories`](https://docs.laravel-enso.com/frontend/categories.html) [↗](https://github.com/enso-ui/categories)

## API

### Routes

Routes are registered under:

- prefix: `api/administration/categories`
- name prefix: `administration.categories.`
- middleware: `api`, `auth`, `core`

Available endpoints:

- `GET /api/administration/categories`
  `administration.categories.index`
- `GET /api/administration/categories/create`
  `administration.categories.create`
- `GET /api/administration/categories/{category}/edit`
  `administration.categories.edit`
- `GET /api/administration/categories/options`
  `administration.categories.options`
- `POST /api/administration/categories`
  `administration.categories.store`
- `GET /api/administration/categories/initTable`
  `administration.categories.initTable`
- `GET /api/administration/categories/tableData`
  `administration.categories.tableData`
- `POST /api/administration/categories/{category}/upload`
  `administration.categories.upload`
- `PATCH /api/administration/categories/{category}/move`
  `administration.categories.move`
- `PATCH /api/administration/categories/{category}`
  `administration.categories.update`
- `DELETE /api/administration/categories/{category}`
  `administration.categories.destroy`
- `DELETE /api/administration/categories/image/{category}`
  `administration.categories.image.destroy`

### Model

`LaravelEnso\Categories\Models\Category`

Stored attributes:

- `id`
- `name`
- `parent_id`
- `image_id`
- `order_index`
- `is_featured`
- `created_at`
- `updated_at`

Relationships:

- `parent()`
- `recursiveParent()`
- `subcategories()`
- `recursiveSubcategories()`
- `image()`

Public helpers and scopes:

- `label()`
- `pictureUrl()`
- `imageWidth()`
- `imageHeight()`
- `move()`
- `tree()`
- `parentTree()`
- `flattenCurrentAndBelow()`
- `flattenCurrentAndBelowIds()`
- `isParent()`
- `level()`
- `depth()`
- `nextIndex()`
- `scopeTopLevel()`
- `scopeContains()`
- `scopeFeatured()`
- `reorder()`

### Request validation

The package validates:

- duplicate sibling names on update
- self-linking attempts on store
- nesting depth on reorder
- image uploads with `required|image`
- top-level-only image uploads

### Builders and resources

Form builder:

- `LaravelEnso\Categories\Forms\Builders\Category`

Table builder:

- `LaravelEnso\Categories\Tables\Builders\Category`

Resources:

- `LaravelEnso\Categories\Http\Resources\Category`
- `LaravelEnso\Categories\Http\Resources\Label`

### Config

`config/enso/categories.php`

Options:

- `maxNestingLevel`

Environment variable:

- `CATEGORIES_MAX_NESTING_LEVEL`

### Imports

Import classes:

- `LaravelEnso\Categories\Imports\Importers\Categories`
- `LaravelEnso\Categories\Imports\Validators\Categories`

They support category imports with optional parent lookup by name.

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/products`](https://docs.laravel-enso.com/backend/products.html) [↗](https://github.com/laravel-enso/products)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Optional integration package:

- [`laravel-enso/data-import`](https://docs.laravel-enso.com/backend/data-import.html) [↗](https://github.com/laravel-enso/data-import)

Framework dependency:

- [Laravel framework ↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/categories/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:42:57 AM</div>
</div>
