---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Questionnaires

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/questionnaires/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.0.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/questionnaires/-/tags)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/questionnaires/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/questionnaires/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/questionnaires/-/merge_requests)

## Description

Questionnaires provides questionnaire definitions, question banks, answer dictionaries, and questionnaire takes for Laravel Enso.

The package exposes CRUD APIs for answers and questions, execution endpoints for questionnaire takes, and form/table builders for all major questionnaire entities.

It is intended for internal survey, audit, onboarding, or rule-driven question flows where answers may be typed, predefined, conditional, and persisted in multiple stages.

## Installation

Install the package:

```bash
composer require laravel-enso/questionnaires
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=questionnaires-config
php artisan vendor:publish --tag=questionnaires-assets
```

## Features

- Question, answer, and questionnaire-take APIs with table init, table data, and Excel export flows.
- Shared questionnaire options endpoint for dependent selects.
- Support for typed answers through the `AnswerTypes` enum.
- Range answer endpoint for generating predefined numeric intervals.
- Persist flow for questionnaire takes separate from take creation.

## Usage

Main route groups:

- `qres.answers.*`
- `qres.questions.*`
- `qres.qreTakes.*`
- `qres.options`

Supported typed answer families:

- numeric
- boolean
- date
- freetext
- predefined

The question form captures questionnaire membership, display order, required flag, allows-multiple flag, and the question body. Questionnaire takes are created first, then persisted through the dedicated `persist` endpoint.

## API

### HTTP routes

- `GET api/qres/options`
- `GET api/qres/answers/create`
- `POST api/qres/answers`
- `GET api/qres/answers/{answer}/edit`
- `PATCH api/qres/answers/{answer}`
- `DELETE api/qres/answers/{answer}`
- `GET api/qres/answers/initTable`
- `GET api/qres/answers/tableData`
- `GET api/qres/answers/exportExcel`
- `GET api/qres/answers/options`
- `GET api/qres/questions/create`
- `POST api/qres/questions`
- `GET api/qres/questions/{question}/edit`
- `PATCH api/qres/questions/{question}`
- `DELETE api/qres/questions/{question}`
- `GET api/qres/questions/initTable`
- `GET api/qres/questions/tableData`
- `GET api/qres/questions/exportExcel`
- `GET api/qres/questions/options`
- `POST api/qres/questions/{question}/rangeAnswer`
- `POST api/qres/qreTakes`
- `POST api/qres/qreTakes/{qreTake}/persist`
- `GET api/qres/qreTakes/initTable`
- `GET api/qres/qreTakes/tableData`
- `GET api/qres/qreTakes/exportExcel`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)

Companion frontend package:

- [`@enso-ui/questionnaires`](https://docs.laravel-enso.com/frontend/questionnaires.html) [↗](https://git.xtelecom.ro/enso-ui/questionnaires)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/questionnaires/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:26 PM</div>
</div>
