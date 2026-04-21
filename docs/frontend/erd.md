---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# ERD

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/erd/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/erd)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/erd.svg)](https://www.npmjs.com/package/@enso-ui/erd)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/erd)
[![Issues](https://img.shields.io/github/issues/enso-ui/erd.svg)](https://github.com/enso-ui/erd/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/erd.svg)](https://github.com/enso-ui/erd/pulls)

## Description

ERD is a renderless `ResizeObserver` wrapper that exposes the current element width and height to slot content.

## Installation

Install the package:

```bash
yarn add @enso-ui/erd
```

The component can be used inside or outside the Enso ecosystem.

## Features

- exports a single renderless `Erd` component through the package root
- observes the rendered element with `ResizeObserver` and debounces updates
- passes reactive `width` and `height` values to the default slot
- works well for responsive charts, virtualized layouts, and adaptive cards

## Usage

```vue
<script setup>
import Erd from '@enso-ui/erd';
</script>

<Erd :debounce="50" v-slot="{ width, height }">
    <div>{{ width }} × {{ height }}</div>
</Erd>
```

## API

### `Erd`

Renderless component that observes its own element box and forwards the current size through the default slot.

Import: `@enso-ui/erd`

Props:
- `debounce: number = 1` debounce window, in milliseconds, used before width and height updates are applied.

Events:
- none.

Slots:
- `default` receives `{ width, height }` with the latest observed content-box dimensions.

## Depends On

- `lodash` for the internal debounce helper.
- `vue` as the component runtime.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/erd/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/erd/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:25:53 PM</div>
</div>
