---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Modal

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/modal/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/modal)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/modal.svg)](https://www.npmjs.com/package/@enso-ui/modal)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/modal)
[![Issues](https://img.shields.io/github/issues/enso-ui/modal.svg)](https://github.com/enso-ui/modal/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/modal.svg)](https://github.com/enso-ui/modal/pulls)

## Description

Modal provides lightweight modal wrappers together with a renderless close controller for Bulma-based overlays.

## Installation

Install the package:

```bash
yarn add @enso-ui/modal
```

The components can be used inside or outside the Enso ecosystem.

## Features

- exports `Modal` and `ModalCard` from the Bulma entrypoint
- uses `CoreModal` internally to centralize close handling and Escape support
- renders through `teleport` and transition wrappers
- passes a `close()` slot helper to modal content

## Usage

```vue
<script setup>
import { ModalCard } from '@enso-ui/modal/bulma';
</script>

<ModalCard @close="closed = true">
    <template #header="{ close }">...</template>
    <template #body="{ close }">...</template>
    <template #footer="{ close }">...</template>
</ModalCard>
```

## API

### Bulma exports

Import: `@enso-ui/modal/bulma`

#### `Modal`
- emits: `show`, `close`
- default slot receives `{ close }`
- renders a standard Bulma modal content container

#### `ModalCard`
- emits: `show`, `close`
- named slots: `header`, `body`, `footer`
- every slot receives `{ close }`
- renders a Bulma modal-card layout

### Renderless core

#### `CoreModal`
- prop: `visible: boolean`
- emits: `update:visible`
- slot props: `{ close }`
- closes on Escape and centralizes the visible-state contract for the Bulma wrappers

## Depends On

- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/modal/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/modal/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:06:13 PM</div>
</div>
