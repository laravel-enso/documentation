---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Checkbox

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/checkbox/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.0.5-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/checkbox)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/checkbox.svg)](https://www.npmjs.com/package/@enso-ui/checkbox)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/checkbox)
[![Issues](https://img.shields.io/github/issues/enso-ui/checkbox.svg)](https://github.com/enso-ui/checkbox/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/checkbox.svg)](https://github.com/enso-ui/checkbox/pulls)

## Description

Hierarchical checkbox managers for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/checkbox
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports `CheckboxManager` and `CheckboxItems` through the Bulma entrypoint
- supports recursive grouped selections with tri-state visual feedback
- mirrors the selected ids through the `v-model` contract
- exposes item and checkbox slots so parent pages can customize rendering

## Usage

```vue
<script setup>
import { CheckboxManager } from '@enso-ui/checkbox/bulma';
import { ref } from 'vue';

const selected = ref([]);
const items = {
    Warehouses: { _items: [{ id: 1, label: 'Main' }] },
    _items: [{ id: 2, label: 'Unassigned' }],
};
</script>

<CheckboxManager
    v-model="selected"
    :items="items"
    title="Permissions"
/>
```

## API

### `CheckboxManager`

Recursive card-based manager for grouped checkbox trees.

Import: `@enso-ui/checkbox/bulma`

Props:
- `collapsed: boolean = false` initial collapsed state.
- `items: object` grouped item tree with `_items` leaves.
- `modelValue: array` selected ids.
- `title: string` group title.

Events:
- `change`
- `update:modelValue`

Slots:
- `checkbox` receives `{ updateBelow }` for custom group checkbox rendering.
- `item` receives `{ item }` for custom leaf rendering.

### `CheckboxItems`

Leaf checkbox list used by `CheckboxManager` and reusable on its own.

Import: `@enso-ui/checkbox/bulma`

Props:
- `items: array` list of selectable `{ id, label }` objects.
- `modelValue: array` selected ids.

Events:
- `change`
- `update:modelValue`

Slots:
- `item` receives `{ item }` for custom item rendering.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`Bulma`](https://bulma.io/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/checkbox/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/checkbox/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:25:15 PM</div>
</div>
