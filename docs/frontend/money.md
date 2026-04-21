---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Money

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/money/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/money)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/money.svg)](https://www.npmjs.com/package/@enso-ui/money)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/money)
[![Issues](https://img.shields.io/github/issues/enso-ui/money.svg)](https://github.com/enso-ui/money/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/money.svg)](https://github.com/enso-ui/money/pulls)

## Description

Money provides a two-way bound amount field that formats and sanitizes monetary values using `accounting-js`.

## Installation

Install the package:

```bash
yarn add @enso-ui/money
```

The component can be consumed standalone or inside higher-level Enso form packages.

## Features

- exports a single `Money` component from the package root
- supports input mode and read-only label mode
- sanitizes user input and rounds values to the configured precision
- customizes symbol, decimal separator, thousands separator, and positive/negative/zero formats

## Usage

```vue
<script setup>
import Money from '@enso-ui/money';
</script>

<Money
    v-model="amount"
    symbol="€"
    :precision="2" />
```

## API

### `Money`

Import: `@enso-ui/money`

Props:
- `modelValue: number | string | null = null`
- `label: boolean = false`
- `readonly: boolean = false`
- `disabled: boolean = false`
- `placeholder: string | null = null`
- `symbol: string = '$'`
- `decimal: '.' | ',' = '.'`
- `thousand: ' ' | '.' | ',' = ','`
- `precision: number = 2`
- `positive: string = '%s %v'`
- `negative: string = '%s (%v)'`
- `zero: string = '%s --'`
- `tabindex: number | null = null`

Emits:
- `update:modelValue`

Behavior:
- shows formatted output when `label` is enabled
- enters raw-edit mode on focus
- sanitizes, rounds, and emits the numeric value on input or blur

## Depends On

- `accounting-js` for money formatting and parsing.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/money/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/money/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:04:44 PM</div>
</div>
