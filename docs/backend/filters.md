---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Filters

[![License](https://poser.pugx.org/laravel-enso/filters/license)](https://github.com/laravel-enso/filters/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/filters/version)](https://packagist.org/packages/laravel-enso/filters)
[![Downloads](https://poser.pugx.org/laravel-enso/filters/downloads)](https://packagist.org/packages/laravel-enso/filters)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://github.com/laravel-enso/filters/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/filters.svg)](https://github.com/laravel-enso/filters/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/filters.svg)](https://github.com/laravel-enso/filters/pulls)

## Description

Filters provides reusable search and date-interval helpers for Laravel Enso and standalone Laravel code.

The package includes a query search helper that supports multiple search modes and relation-aware matching, plus an interval iterator that builds hourly, daily, monthly, or yearly segments across predefined or custom ranges.

It has no routes or migrations. It is a pure helper package.

## Installation

Install the package:

```bash
composer require laravel-enso/filters
```

## Features

- Full-text, exact-match, starts-with, ends-with, and negated search modes.
- Support for custom comparison operators.
- Search across direct attributes and related attributes.
- Interval generation for today, week, month, year, custom, and all-time ranges.
- Time-segment labels suitable for charts and aggregate dashboards.

## Usage

Search a query:

```php
use LaravelEnso\Filters\Services\Search;

$query = new Search(User::query(), ['name', 'email'], 'john');
$results = $query->handle();
```

Build an interval:

```php
use LaravelEnso\Filters\Enums\Intervals;
use LaravelEnso\Filters\Services\Interval;

$interval = new Interval(Intervals::ThisMonth);
```

## API

### Services

- `LaravelEnso\\Filters\\Services\\Search`
- `LaravelEnso\\Filters\\Services\\Interval`

### Enums

- `ComparisonOperators`
- `SearchModes`
- `Intervals`
- `TimeSegments`
- `Operations`
- `Adjustments`

## Depends On

Required Enso packages:

- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/filters/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:23 PM</div>
</div>
