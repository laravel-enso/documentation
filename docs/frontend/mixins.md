---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Mixins

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/mixins/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.2-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/mixins)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/mixins.svg)](https://www.npmjs.com/package/@enso-ui/mixins)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/mixins)
[![Issues](https://img.shields.io/github/issues/enso-ui/mixins.svg)](https://github.com/enso-ui/mixins/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/mixins.svg)](https://github.com/enso-ui/mixins/pulls)

## Description

Mixins provides small reusable helper modules for file-type inspection and number formatting across Enso UI packages.

## Installation

Install the package:

```bash
yarn add @enso-ui/mixins
```

The helpers can be consumed from any Vue application or Enso UI package.

## Features

- exports `EnsoFile`, `numberFormat`, and `shortNumber` from the package root
- maps file extensions to Font Awesome icons and viewability helpers
- formats decimal values with the current Enso locale preferences
- compacts large numbers into SI-style suffixes such as `k`, `M`, and `G`

## Usage

```js
import { EnsoFile, numberFormat, shortNumber } from '@enso-ui/mixins';

const file = new EnsoFile({ extension: 'pdf' });
file.icon();
numberFormat(1234.567, 2);
shortNumber(128000);
```

## API

### Root exports

Import: `@enso-ui/mixins`

#### `EnsoFile`

Helper class for file extension inspection.

Constructor:
- `new EnsoFile({ extension })`

Methods:
- `extension()`
- `isImage()`
- `isPdf()`
- `isViewable()`
- `icon()`

#### `numberFormat(value, decimals = 3)`

Formats a decimal number with `Intl.NumberFormat` using the current Enso UI locale preferences.

#### `shortNumber(number, precision = 2)`

Compacts large numbers into SI-style suffixes and returns values such as `1.2k`, `4.5M`, or `9G`.

## Depends On

- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/mixins/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/mixins/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:06:02 PM</div>
</div>
