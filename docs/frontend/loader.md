---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Loader

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/loader/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.2.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/loader)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/loader.svg)](https://www.npmjs.com/package/@enso-ui/loader)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/loader)
[![Issues](https://img.shields.io/github/issues/enso-ui/loader.svg)](https://github.com/enso-ui/loader/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/loader.svg)](https://github.com/enso-ui/loader/pulls)

## Description

Loader provides spinning overlays and richer skeleton placeholders for Enso UI pages and cards.

## Installation

Install the package:

```bash
yarn add @enso-ui/loader
```

The components can be used inside or outside the Enso ecosystem.

## Features

- exports `Loader`, `Overlay`, and `Skeleton` through the Bulma entrypoint
- supports simple overlays and animated spinner loaders
- ships skeleton presets for labels, forms, tables, and charts
- keeps the visual primitives decoupled from any specific backend contract

## Usage

```vue
<script setup>
import { Loader, Skeleton } from '@enso-ui/loader/bulma';
</script>

<Loader transparent />
<Skeleton type="table" />
```

## API

### Bulma exports

Import: `@enso-ui/loader/bulma`

#### `Loader`
- `color: string = "#f44336"`
- `size: "small" | "medium" | "large" = "medium"`
- `transparent: boolean = false`

#### `Overlay`
- `transparent: boolean = false`
- slots: default overlay content.

#### `Skeleton`
- `type: "label" | "chart" | "table" | "form"` required preset selector.

Deep skeleton presets:
- `src/bulma/skeletons/Label.vue`
- `src/bulma/skeletons/Chart.vue`
- `src/bulma/skeletons/Table.vue`
- `src/bulma/skeletons/Form.vue`

## Depends On

- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/loader/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/loader/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:54 PM</div>
</div>
