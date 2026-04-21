---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Orderable Trees

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/orderable-trees/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/orderable-trees)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/orderable-trees.svg)](https://www.npmjs.com/package/@enso-ui/orderable-trees)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/orderable-trees)
[![Issues](https://img.shields.io/github/issues/enso-ui/orderable-trees.svg)](https://github.com/enso-ui/orderable-trees/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/orderable-trees.svg)](https://github.com/enso-ui/orderable-trees/pulls)

## Description

Orderable Trees provides a draggable nested tree widget with add, edit, delete, filter, and selection flows.

## Installation

Install the package:

```bash
yarn add @enso-ui/orderable-trees
```

The component can be used inside or outside the Enso ecosystem.

## Features

- exports the `Tree` component from the Bulma entrypoint
- supports nested drag-and-drop through `vuedraggable`
- supports inline add, edit, delete, filter, and selection flows
- exposes item and controls slots for custom rendering

## Usage

```vue
<script setup>
import Tree from '@enso-ui/orderable-trees/bulma';
</script>

<Tree
    :route-group="routeGroup"
    :editable="true"
    @selected="selected = $event" />
```

## API

### Default export

Import: `@enso-ui/orderable-trees/bulma`

#### `Tree`

Props:
- `editable: boolean = false`
- `expanded: array = []`
- `objects: boolean = false`
- `routeGroup: string | Function`
- `title: string | null = null`
- `modelValue: number | object | null = null`

Emits:
- `loaded`
- `selected`
- `deselected`
- `update:modelValue`

Slots:
- `item`
- `controls`

Deep components:
- `src/bulma/components/Items.vue` owns nested drag-and-drop groups
- `src/bulma/components/Item.vue` owns expand/collapse, inline edit, delete, and selection behavior

## Depends On

- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/orderable-trees/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/orderable-trees/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:06:57 PM</div>
</div>
