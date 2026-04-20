---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Charts

[![License](https://poser.pugx.org/laravel-enso/charts/license)](https://github.com/laravel-enso/charts/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/charts/version)](https://packagist.org/packages/laravel-enso/charts)
[![Downloads](https://poser.pugx.org/laravel-enso/charts/downloads)](https://packagist.org/packages/laravel-enso/charts)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/charts/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/charts.svg)](https://github.com/laravel-enso/charts/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/charts.svg)](https://github.com/laravel-enso/charts/pulls)

## Description

Charts is Laravel Enso's backend chart payload builder for the `@enso-ui/charts` frontend package.

It provides fluent factories for the chart types used across Enso dashboards and reporting screens, then returns normalized arrays that can be serialized directly to the frontend. The package also centralizes default chart colors, plugin defaults, datalabel handling, and axis configuration so host applications can generate consistent Chart.js payloads without hand-crafting dataset structures.

## Installation

This package comes pre-installed in Laravel Enso applications that render chart widgets or dashboard analytics.

For standalone installation inside an Enso-based application:

```bash
composer require laravel-enso/charts
```

The package auto-registers its service provider and merges the `enso.charts` configuration namespace.

If you need to publish the configuration file:

```bash
php artisan vendor:publish --tag=charts-config
```

or:

```bash
php artisan vendor:publish --tag=enso-config
```

## Features

- Provides dedicated factories for:
  - bar charts
  - line charts
  - bubble charts
  - radar charts
  - pie charts
  - doughnut charts
  - polar area charts
- Returns Chart.js-ready payloads through a single `get()` call.
- Supports fluent chart metadata such as:
  - title
  - aspect ratio
  - plugin configuration
  - per-option overrides
- Supports per-axis configuration for Cartesian charts.
- Supports per-dataset configuration overrides by dataset label.
- Supports custom palettes through `colorsConfig()`.
- Supports chart datalabel configuration through `datalabels()`.
- Supports optional gridlines and automatic Y-axis minimum handling.
- Supports short-number formatting hints for the frontend.
- Ships default Enso chart colors and plugin defaults in `config/enso/charts.php`.

## Usage

### Bar chart

```php
use LaravelEnso\Charts\Factories\Bar;

$chart = (new Bar())
    ->title('Quarterly revenue')
    ->labels(['Q1', 'Q2', 'Q3', 'Q4'])
    ->datasets([
        'Revenue' => [12000, 18000, 15000, 22000],
        'Forecast' => [10000, 16000, 17000, 21000],
    ])
    ->gridlines()
    ->shortNumbers()
    ->get();
```

### Line chart

```php
use LaravelEnso\Charts\Factories\Line;

$chart = (new Line())
    ->title('Users by month')
    ->labels(['Jan', 'Feb', 'Mar'])
    ->datasets([
        'Users' => [20, 40, 35],
    ])
    ->fill()
    ->get();
```

### Bubble chart

```php
use LaravelEnso\Charts\Factories\Bubble;

$chart = (new Bubble())
    ->title('Portfolio risk')
    ->labels(['Low risk', 'High risk'])
    ->datasets([
        [
            [12, 4, 10],
            [18, 8, 25],
        ],
        [
            [9, 6, 15],
            [15, 12, 20],
        ],
    ])
    ->get();
```

::: tip Tip
Bubble charts auto-scale point radius by default. If the dataset already contains the exact radius values you want to render, call `disableAutoRadius()` before `get()`.
:::

## API

### Factories

- `LaravelEnso\Charts\Factories\Bar`
  Adds `horizontal()` and `stackedScales()` helpers for bar datasets.
- `LaravelEnso\Charts\Factories\Line`
  Adds `fill()` for filled line charts.
- `LaravelEnso\Charts\Factories\Bubble`
  Maps `[x, y, radius]` tuples into bubble datasets and can auto-scale radius values.
- `LaravelEnso\Charts\Factories\Radar`
  Builds radar chart datasets.
- `LaravelEnso\Charts\Factories\Pie`
  Builds pie chart payloads.
- `LaravelEnso\Charts\Factories\Doughnut`
  Builds doughnut chart payloads.
- `LaravelEnso\Charts\Factories\Polar`
  Builds polar area chart payloads.

### Shared fluent methods

All chart factories inherit these methods from `LaravelEnso\Charts\Factories\Chart`:

- `title(string $title)`
- `labels(array $labels)`
- `datasets(array $datasets)`
- `ratio(float $ratio)`
- `option(string $option, mixed $value)`
- `plugin(string $plugin, mixed $config)`
- `shortNumbers(int $precision = 2)`
- `gridlines()`
- `autoYMin()`
- `datalabels(array $config)`
- `colorsConfig(array $colors)`
- `datasetConfig(string $dataset, array $config)`
- `xAxisConfig(array $config, ?string $dataset = 'x')`
- `yAxisConfig(array $config, ?string $dataset = 'y')`
- `get()`

### Payload shape

The factories return arrays with this top-level structure:

- `type`
- `title`
- `data`
- `options`

For Cartesian charts, `data` contains:

- `labels`
- `datasets`

For bubble charts, `data` contains:

- `datasets`

Each dataset is normalized for the target chart type and enriched with default Enso colors plus datalabel configuration.

### Configuration

Config file:

- `config/enso/charts.php`

Current package options:

- `fillBackgroundOpacity`
  Opacity used when converting a hex color into an RGBA fill color.
- `options`
  Default Chart.js options merged into each factory response.
- `colors`
  Default Enso chart palette used when no custom colors are supplied.

## Depends On

Required Enso packages:

- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/charts`](https://docs.laravel-enso.com/frontend/charts.html) [↗](https://github.com/enso-ui/charts)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/charts/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:05:23 PM</div>
</div>
