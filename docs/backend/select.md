---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Select

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/select/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/select/version)](https://packagist.org/packages/laravel-enso/select)
[![Downloads](https://poser.pugx.org/laravel-enso/select/downloads)](https://packagist.org/packages/laravel-enso/select)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/select/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/select.svg)](https://github.com/laravel-enso/select/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/select.svg)](https://github.com/laravel-enso/select/pulls)

## Description

Select provides the server-side option and typeahead builders used by Laravel Enso select controls.

The package ships traits for controller-style endpoints and a configurable `Options` response service that supports selected values, search queries, plain filters, pivot filters, resources, appended attributes, and nested relation attributes.

It can be used inside or outside Enso when a Laravel application needs consistent server-side select data feeds.

## Installation

Install the package:

```bash
composer require laravel-enso/select
```

Publish the configuration if you want to change defaults such as `trackBy`, `searchMode`, or query attributes:

```bash
php artisan vendor:publish --tag=select-config
```

## Features

- `OptionsBuilder` trait for standard select endpoints.
- `TypeaheadBuilder` trait for typeahead payload conversion.
- `Options` service implementing `Responsable`.
- Search across local attributes and nested relation attributes.
- Support for selected values, pagination limit, params, pivot params, custom resources, and model appends.

## Usage

Typical options endpoint:

```php
class Options
{
    use OptionsBuilder;

    protected string $model = Company::class;
    protected array $queryAttributes = ['name', 'person.name'];
}
```

Typical typeahead endpoint:

```php
class Typeahead
{
    use TypeaheadBuilder;

    protected string $model = Company::class;
}
```

Supported request inputs include:

- `value`
- `query`
- `paginate`
- `trackBy`
- `searchMode`
- `params`
- `pivotParams`

## API

### Builder traits

- `LaravelEnso\\Select\\Traits\\OptionsBuilder`
- `LaravelEnso\\Select\\Traits\\TypeaheadBuilder`

### Response service

- `LaravelEnso\\Select\\Services\\Options`

Behavior:

- merges selected values ahead of fresh results
- applies direct and pivot relation filters
- performs filter-based search through `laravel-enso/filters`
- sorts by the first query attribute when possible
- returns a collection or an API resource collection

## Depends On

Required Enso packages:

- [`laravel-enso/filters`](https://docs.laravel-enso.com/backend/filters.html) [↗](https://github.com/laravel-enso/filters)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/select/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:31 PM</div>
</div>
