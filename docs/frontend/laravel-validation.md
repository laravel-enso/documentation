---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Laravel Validation

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/laravel-validation/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/laravel-validation)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/laravel-validation.svg)](https://www.npmjs.com/package/@enso-ui/laravel-validation)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/laravel-validation)
[![Issues](https://img.shields.io/github/issues/enso-ui/laravel-validation.svg)](https://github.com/enso-ui/laravel-validation/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/laravel-validation.svg)](https://github.com/enso-ui/laravel-validation/pulls)

## Description

Laravel Validation provides the small error-bag helper used by Enso forms and other frontend flows that consume Laravel validation responses.

## Installation

Install the package:

```bash
yarn add @enso-ui/laravel-validation
```

The helper can be used inside or outside the Enso ecosystem.

## Features

- exports a single `Errors` helper class
- stores validation messages keyed by field name
- offers helpers for checking, reading, and clearing errors
- matches the payload shape produced by Laravel validation responses

## Usage

```js
import Errors from '@enso-ui/laravel-validation';

const errors = new Errors();
errors.set({ email: ['The email field is required.'] });
errors.has('email');
```

## API

### `Errors`

Small mutable error-bag helper used by Enso form components.

Import: `@enso-ui/laravel-validation`

Methods:
- `all()` returns the full error object.
- `any()` returns `true` when at least one field has errors.
- `clear(field)` removes the named field from the bag.
- `empty()` removes every stored field.
- `first()` returns the first available validation message.
- `get(field)` returns the first message for one field.
- `has(field)` checks whether the field exists in the bag.
- `set(errors)` replaces the bag with a Laravel-style error payload.

## Depends On

- `vue` consumers such as `@enso-ui/forms`, `@enso-ui/select`, and higher-level Enso packages use this helper to normalize backend validation errors.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/laravel-validation/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/laravel-validation/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:52 PM</div>
</div>
