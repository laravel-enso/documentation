---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Date

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/date/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/date)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/date.svg)](https://www.npmjs.com/package/@enso-ui/date)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/date)
[![Issues](https://img.shields.io/github/issues/enso-ui/date.svg)](https://github.com/enso-ui/date/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/date.svg)](https://github.com/enso-ui/date/pulls)

## Description

Date formatting helpers for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/date
```

## Features

- formats absolute dates using PHP-style Enso format strings
- formats relative distances with locale-aware date-fns translations
- ships the locale map used by the date helpers
- converts Enso/PHP date tokens to date-fns Unicode tokens

## Usage

```js
import format from '@enso-ui/date/src/format';
import formatDistance from '@enso-ui/date/src/formatDistance';

format('2026-04-21', 'd.m.Y', 'ro');
formatDistance('2026-04-20', 'en');
```

## API

### `format(date, formatStr, locale = 'en')`

Formats a date using PHP-style tokens.

Import: `@enso-ui/date/src/format.js`

### `formatDistance(date, locale = 'en')`

Formats a relative distance from now.

Import: `@enso-ui/date/src/formatDistance.js`

### `i18n`

Locale map used by the date helpers.

Import: `@enso-ui/date/src/i18n.js`

### `unicode2php(formatStr)`

Converts Enso/PHP date tokens to the date-fns token set used internally.

Import: `@enso-ui/date/src/unicode2php.js`

## Depends On

- [`date-fns`](https://date-fns.org/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/date/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/date/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:00:51 AM</div>
</div>
