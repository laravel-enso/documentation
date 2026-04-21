---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Confirmation

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/confirmation/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.2-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/confirmation)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/confirmation.svg)](https://www.npmjs.com/package/@enso-ui/confirmation)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/confirmation)
[![Issues](https://img.shields.io/github/issues/enso-ui/confirmation.svg)](https://github.com/enso-ui/confirmation/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/confirmation.svg)](https://github.com/enso-ui/confirmation/pulls)

## Description

Confirmation dropdown primitives and Bulma actions for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/confirmation
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships a core confirmation popper primitive and a Bulma-styled action wrapper
- uses `v-tooltip` dropdowns to anchor confirm/cancel actions to any trigger slot
- exposes explicit `cancel` and `confirm` callbacks to slot content

## Usage

```vue
<script setup>
import Confirmation from '@enso-ui/confirmation/bulma';
</script>

<Confirmation @confirm="destroy">
    <button class="button is-danger">Delete</button>
</Confirmation>
```

## API

### `Confirmation`

Bulma-flavoured wrapper with built-in icon buttons for cancel and confirm.

Import: `@enso-ui/confirmation/bulma`

Events:
- `cancel`
- `confirm`

### `CoreConfirmation`

Low-level confirmation popper primitive.

Import: `@enso-ui/confirmation/index.js`

Events:
- `cancel`
- `confirm`

Slots:
- `default` trigger content.
- `cancel` receives `{ cancel }`.
- `confirm` receives `{ confirm }`.

## Depends On

- [`v-tooltip`](https://github.com/Akryum/floating-vue)
- [`Bulma`](https://bulma.io/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/confirmation/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/confirmation/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:26:43 PM</div>
</div>
