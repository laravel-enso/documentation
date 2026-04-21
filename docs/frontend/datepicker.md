---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Datepicker

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/datepicker/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/datepicker)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/datepicker.svg)](https://www.npmjs.com/package/@enso-ui/datepicker)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/datepicker)
[![Issues](https://img.shields.io/github/issues/enso-ui/datepicker.svg)](https://github.com/enso-ui/datepicker/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/datepicker.svg)](https://github.com/enso-ui/datepicker/pulls)

## Description

Bulma and renderless Flatpickr wrappers for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/datepicker
```

## Features

- ships Bulma-styled `Datepicker` and `EnsoDatepicker` components
- exposes the renderless `CoreDatepicker` for custom input renderers
- wraps Flatpickr with locale switching, time/date modes, and clear-button handling

## Usage

```vue
<script setup>
import { EnsoDatepicker } from '@enso-ui/datepicker/bulma';
</script>

<EnsoDatepicker v-model="date" />
```

## API

### `Datepicker`

Bulma-styled input wrapper around `CoreDatepicker`.

Import: `@enso-ui/datepicker/bulma`

Props:
- `isDanger: boolean = false`
- `isSmall: boolean = false`
- `isWarning: boolean = false`
- `isSuccess: boolean = false`
- `placeholder: string = 'Select Date'`
- `readonly: boolean = false`

Methods:
- `clear()`

### `EnsoDatepicker`

Convenience wrapper that derives the display format and locale from Enso app preferences.

Import: `@enso-ui/datepicker/bulma`

Props:
- `altFormat: string | null = null`
- `time: boolean = false`

### `CoreDatepicker`

Renderless Flatpickr wrapper.

Import: `@enso-ui/datepicker/renderless`

Props:
- `altInput: boolean = false`
- `altFormat: string | null = null`
- `disabled: boolean = false`
- `disableClear: boolean = false`
- `format: string = 'Y-m-d'`
- `locale: string = 'en'`
- `max: string | null = null`
- `min: string | null = null`
- `readonly: boolean = false`
- `time: boolean = false`
- `time12hr: boolean = false`
- `timeOnly: boolean = false`
- `modelValue: string | Date | Array | null`
- `weekNumbers: boolean = false`

Events:
- `update:modelValue`
- `value-updated`

Slot props:
- `clearButton`
- `clearEvents`
- `inputBindings`
- `readonly`
- `timeOnly`

Methods:
- `clear()`
- `reset()`

## Depends On

- [`flatpickr`](https://flatpickr.js.org/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/datepicker/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/datepicker/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:00:53 AM</div>
</div>
