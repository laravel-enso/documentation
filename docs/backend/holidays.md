---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Holidays

[![License](https://poser.pugx.org/laravel-enso/holidays/license)](https://github.com/laravel-enso/holidays/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/holidays/version)](https://packagist.org/packages/laravel-enso/holidays)
[![Downloads](https://poser.pugx.org/laravel-enso/holidays/downloads)](https://packagist.org/packages/laravel-enso/holidays)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/holidays/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/holidays.svg)](https://github.com/laravel-enso/holidays/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/holidays.svg)](https://github.com/laravel-enso/holidays/pulls)

## Description

Holidays manages annual holiday calendars and working-day overrides for Laravel Enso.

The package exposes endpoints for listing available years, showing all holidays for a selected year, and toggling individual days between holiday and working-day status.

It is a small administrative package intended to support date-aware business rules in Enso applications.

## Installation

Install the package:

```bash
composer require laravel-enso/holidays
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Year index endpoint for available holiday calendars.
- Holiday list endpoint grouped by year.
- Toggle endpoint for marking a holiday as a working day or restoring it.
- API resources for normalized year and holiday payloads.

## Usage

The package mounts its routes under `holidays.*`.

Each holiday resource exposes:

- formatted `date`
- numeric `month`
- `name`
- `description`
- `isWorkingDay`

## API

### HTTP routes

- `GET api/holidays`
- `GET api/holidays/{year}`
- `PATCH api/holidays/{holiday}/toggle`

### Models

- `LaravelEnso\\Holidays\\Models\\Holiday`
- `LaravelEnso\\Holidays\\Models\\HolidayYear`

## Depends On

The package does not require additional Enso backend packages beyond the host Laravel application.

Companion frontend package:

- [`@enso-ui/holidays`](https://docs.laravel-enso.com/frontend/holidays.html) [↗](https://github.com/enso-ui/holidays)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/holidays/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:07:33 PM</div>
</div>
