---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Enums

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/enums/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/enums)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/enums.svg)](https://www.npmjs.com/package/@enso-ui/enums)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/enums)
[![Issues](https://img.shields.io/github/issues/enso-ui/enums.svg)](https://github.com/enso-ui/enums/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/enums.svg)](https://github.com/enso-ui/enums/pulls)

## Description

Enums provides the shared enum wrappers and Pinia bootstrap used across Enso UI packages.

It turns raw enum dictionaries into helper objects with translated labels, option builders, randomizers, and a central store-registration flow.

## Installation

Install the package:

```bash
yarn add @enso-ui/enums
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the `Enum` class wrapper as the default export
- exports `initEnums` for building wrapped enum collections
- exports the `enums` Pinia store accessor
- exports `register` to bootstrap the store module

## Usage

```js
import Enum, { initEnums, enums, register } from '@enso-ui/enums';

register();

const wrapped = initEnums({ statuses: { 1: 'Draft', 2: 'Sent' } }, key => key);
const statusEnum = new Enum({ 1: 'Draft', 2: 'Sent' }, key => key);
```

## API

### `Enum`

Default export for the enum wrapper class.

Import: `@enso-ui/enums`

Methods:
- `_get(key)`
- `_has(key)`
- `_select()`
- `_filter()`
- `_keys()`
- `_values()`
- `_all()`
- `_data()`
- `_randomKey()`
- `_randomValue()`

### `initEnums`

Builds an object of wrapped `Enum` instances from a raw enum dictionary payload.

Import: `@enso-ui/enums`

### `enums`

Pinia store accessor for the shared `enums` store.

Import: `@enso-ui/enums`

### `register`

Bootstraps the Pinia enum store.

Import: `@enso-ui/enums`

## Companion Backend Package

- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)

The backend companion provides the enum dictionaries that are hydrated into the frontend store during bootstrap.

## Depends On

- `pinia`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/enums/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/enums/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:34 AM</div>
</div>
