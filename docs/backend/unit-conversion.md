---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Unit Conversion

[![License](https://poser.pugx.org/laravel-enso/unit-conversion/license)](https://github.com/laravel-enso/unit-conversion/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/unit-conversion/version)](https://packagist.org/packages/laravel-enso/unit-conversion)
[![Downloads](https://poser.pugx.org/laravel-enso/unit-conversion/downloads)](https://packagist.org/packages/laravel-enso/unit-conversion)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](https://github.com/laravel-enso/unit-conversion/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/unit-conversion.svg)](https://github.com/laravel-enso/unit-conversion/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/unit-conversion.svg)](https://github.com/laravel-enso/unit-conversion/pulls)

## Description

Unit Conversion provides small, focused services for converting values between related measurement units.

The package organizes conversions by measurement family and supports both object-based and expression-based inputs. It is designed for deterministic numeric conversions such as length, mass, energy, and electrical power.

Internally, each unit declares a label, a symbol, and a conversion factor, while the conversion services discover compatible units automatically from the package structure.

## Installation

Install the package:

```bash
composer require laravel-enso/unit-conversion
```

No publishing or runtime configuration is required.

## Features

- Supports conversion by measurement family through dedicated converter services.
- Supports direct conversion from unit objects.
- Supports conversion from string expressions such as `2 m` or `15 kg`.
- Includes built-in families for length, mass, energy, and power.
- Uses decimal arithmetic helpers for precise multiplication and division.
- Rejects incompatible conversions between different families.
- Validates input expressions and unit symbols before converting.

## Usage

Convert through a converter service:

```php
use LaravelEnso\UnitConversion\Length\Length;
use LaravelEnso\UnitConversion\Length\Units\Meter;
use LaravelEnso\UnitConversion\Length\Units\Millimeter;

$result = Length::from(new Meter(2))->to(Millimeter::class);
```

Convert from a string expression:

```php
$result = Length::from('2 m')->to(Millimeter::class);
```

Convert directly to a unit class:

```php
use LaravelEnso\UnitConversion\Mass\Units\Gram;
use LaravelEnso\UnitConversion\Mass\Units\Kilogram;

$result = Gram::from(new Kilogram(3));
```

You can also convert directly from an expression:

```php
$result = Gram::from('3 kg');
```

::: warning Note
Expression-based conversions must follow the `<value> <symbol>` format, for example `2 m`, `3 kg`, or `1.5 kcal`.

If the expression is malformed, the symbol is unknown, or the source and destination units belong to different families, the package throws a dedicated exception.
:::

## API

### Converter Services

Available families:

- `LaravelEnso\UnitConversion\Length\Length`
- `LaravelEnso\UnitConversion\Mass\Mass`
- `LaravelEnso\UnitConversion\Energy\Energy`
- `LaravelEnso\UnitConversion\Electricity\Power`

Common entry points:

- `from(Unit|string $from): static`
- `to(string $class): string`

### Units

Every unit class implements:

- `label(): string`
- `symbol(): string`
- `factor(): float`
- `value(): string`
- `from(Unit|string $argument, ?int $precision = 2): string`

Built-in units:

- Length: `Millimeter`, `Centimeter`, `Meter`, `Kilometer`
- Mass: `Gram`, `Kilogram`
- Energy: `Calorie`, `Kilocalorie`, `Joule`
- Power: `Watt`, `KiloWatt`

### Expression Validation

`LaravelEnso\UnitConversion\Services\Expression`

Expected format:

```text
<value> <symbol>
```

Examples:

- `2 m`
- `100 kg`
- `1.5 kcal`

### Exceptions

The package exposes:

- `LaravelEnso\UnitConversion\Exceptions\Unit`
- `LaravelEnso\UnitConversion\Exceptions\Conversion`
- `LaravelEnso\UnitConversion\Exceptions\Expression`

## API

This package exposes its backend integration through the routes, controllers, services, jobs, and configuration points referenced in the usage examples above.

Consumers should rely on the published config keys, documented route groups, and explicit service classes shown in the examples. Internal helper classes, listeners, casts, and background jobs are implementation details unless the README calls them out as extension points.

## Depends On

Required Enso packages:

- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/unit-conversion/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 4:33:36 PM</div>
</div>
