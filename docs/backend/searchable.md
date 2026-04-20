---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Searchable

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/searchable/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/searchable/version)](https://packagist.org/packages/laravel-enso/searchable)
[![Downloads](https://poser.pugx.org/laravel-enso/searchable/downloads)](https://packagist.org/packages/laravel-enso/searchable)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/searchable/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/searchable.svg)](https://github.com/laravel-enso/searchable/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/searchable.svg)](https://github.com/laravel-enso/searchable/pulls)

## Description

Searchable provides the global command-palette style search registry used by Laravel Enso.

The package exposes a single search endpoint, a facade-backed registry for searchable models, and a finder service that resolves results according to configured attributes, scopes, permissions, and optional Scout providers.

It is intended for Enso applications that need cross-module quick search with permission-aware routes and grouped results.

## Installation

Install the package:

```bash
composer require laravel-enso/searchable
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=searchable-config
php artisan vendor:publish --tag=searchable-factories
```

## Features

- Global `api/core/searchable/index` endpoint.
- Facade-backed searchable model registry.
- Finder service that supports local query matching or Scout search providers.
- Permission-filtered route actions based on the authenticated user's role.
- Support for route params, custom labels, scopes, permission groups, and nested relation attributes.

## Usage

Register searchable models from any package by extending the package search service provider:

```php
public $register = [
    Product::class => [
        'group' => 'Product',
        'attributes' => ['name', 'internal_code', 'part_number'],
        'label' => 'internal_code',
        'permissionGroup' => 'products',
    ],
];
```

The finder returns grouped results with resolved route params and only the route actions the current user is allowed to execute.

## API

### HTTP routes

- `GET api/core/searchable/index`

### Core services

- `LaravelEnso\\Searchable\\Services\\Search`
- `LaravelEnso\\Searchable\\Services\\Finder`

Behavior:

- stores registered searchable model definitions
- executes Scout search when `searchProvider` is configured
- otherwise executes filter-based database search
- filters available actions by role permissions

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/filters`](https://docs.laravel-enso.com/backend/filters.html) [↗](https://github.com/laravel-enso/filters)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/searchable/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:26:25 PM</div>
</div>
