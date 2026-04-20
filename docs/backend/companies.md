---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Companies

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/companies/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/companies/version)](https://packagist.org/packages/laravel-enso/companies)
[![Downloads](https://poser.pugx.org/laravel-enso/companies/downloads)](https://packagist.org/packages/laravel-enso/companies)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/companies/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/companies.svg)](https://github.com/laravel-enso/companies/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/companies.svg)](https://github.com/laravel-enso/companies/pulls)

## Description

Companies adds company management to the Enso administration area.

The package exposes CRUD flows for companies, company-person associations, searchable option lists, and Excel exports. At model level it provides an addressable and notification-aware company model with rememberable lookups, dynamic methods, and helper accessors such as the owner company or the current mandatary.

It is meant for Enso deployments that manage legal entities together with their related people and administrative metadata.

## Installation

Install the package:

```bash
composer require laravel-enso/companies
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=companies-factory
php artisan vendor:publish --tag=companies-seeder
```

## Features

- Company CRUD endpoints and table endpoints under `administration.companies`.
- Company-person association flow with attach, update, and detach operations.
- Option endpoint for company selectors.
- Morph map registration for the `Company` model.
- Search provider integration and status enum registration.

## Usage

Create and relate companies through the API or directly through the model:

```php
use LaravelEnso\Companies\Models\Company;

$company = Company::create([
    'name' => 'Acme SRL',
    'fiscal_code' => 'RO12345678',
]);

$company->attachPerson($personId, 'Administrator');
$company->updateMandatary($personId);
```

Useful helpers on the `Company` model:

- `owner()`
- `mandatary()`
- `attachPerson(int $personId, ?string $position = null)`
- `updateMandatary(?int $mandataryId)`

## API

### HTTP routes

Companies:

- `GET api/administration/companies/create`
- `POST api/administration/companies`
- `GET api/administration/companies/{company}/edit`
- `PATCH api/administration/companies/{company}`
- `DELETE api/administration/companies/{company}`
- `GET api/administration/companies/initTable`
- `GET api/administration/companies/tableData`
- `GET api/administration/companies/exportExcel`
- `GET api/administration/companies/options`

Company people:

- `GET api/administration/companies/people/{company}`
- `GET api/administration/companies/people/{company}/create`
- `GET api/administration/companies/people/{company}/{person}/edit`
- `POST api/administration/companies/people`
- `PATCH api/administration/companies/people/{person}`
- `DELETE api/administration/companies/people/{company}/{person}`

## Depends On

Required Enso packages:

- [`laravel-enso/addresses`](https://docs.laravel-enso.com/backend/addresses.html) [↗](https://github.com/laravel-enso/addresses)
- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/people`](https://docs.laravel-enso.com/backend/people.html) [↗](https://github.com/laravel-enso/people)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/searchable`](https://docs.laravel-enso.com/backend/searchable.html) [↗](https://github.com/laravel-enso/searchable)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)

Companion frontend package:

- [`@enso-ui/companies`](https://docs.laravel-enso.com/frontend/companies.html) [↗](https://github.com/enso-ui/companies)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/companies/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:05:28 PM</div>
</div>
