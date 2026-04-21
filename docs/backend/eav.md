---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# EAV

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/eav/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.6.0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/eav/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/eav/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/eav/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/eav/-/merge_requests)

## Description

EAV adds entity-attribute-value support to Enso.

The package manages ordered attribute groups, ordered attributes inside groups, enumerated attribute values, and the services needed to build grouped EAV payloads for consumers. It is designed for domains where the attribute surface must remain configurable without introducing schema changes for every new field.

This is the backend/API package. It handles persistence, ordering, and validation of configurable attributes and their values.

## Installation

This is a proprietary package distributed through the private Enso registry.

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=eav-factory
php artisan vendor:publish --tag=eav-seeder
```

## Features

- Hierarchical attribute groups with ordering support.
- Ordered attributes inside groups, including move operations across groups.
- Attribute value lists for collection-like attributes.
- CRUD and move endpoints for groups, attributes, and values.
- `Eav` service for producing grouped attribute payloads, with optional filtering to only attributes that have values.
- `AttributeValue` validator for integer, decimal, boolean, string, and collection attribute types.

## Usage

Useful model helpers:

- `Group::tree()`
- `Group::move(int $orderIndex, ?int $parentId)`
- `Attribute::move(int $orderIndex, int $groupId)`
- `Attribute::searchableKey()`

Build a grouped EAV payload:

```php
use LaravelEnso\Eav\Services\Eav;

$data = (new Eav($attributes, $values))->data(filtered: true);
```

Validate an incoming raw attribute value:

```php
use LaravelEnso\Eav\Services\AttributeValue;

AttributeValue::validates($attribute, $value);
```

## API

### HTTP routes

Groups:

- `GET api/eav/groups`
- `POST api/eav/groups`
- `PATCH api/eav/groups/{group}`
- `DELETE api/eav/groups/{group}`
- `PATCH api/eav/groups/{group}/move`
- `GET api/eav/groups/options`

Attributes:

- `GET api/eav/attributes/{group}/create`
- `POST api/eav/attributes`
- `GET api/eav/attributes/{attribute}/edit`
- `PATCH api/eav/attributes/{attribute}`
- `DELETE api/eav/attributes/{attribute}`
- `PATCH api/eav/attributes/{attribute}/move`

Values:

- `POST api/eav/values/store`
- `PATCH api/eav/values/{value}`
- `DELETE api/eav/values/{value}`
- `GET api/eav/values/options`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)

Runtime companion packages:

- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

Companion frontend package:

- [`@enso-ui/eav`](https://docs.laravel-enso.com/frontend/eav.html) [↗](https://git.xtelecom.ro/enso-ui/eav)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/eav/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:03:45 PM</div>
</div>
