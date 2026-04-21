---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Divider

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/divider/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/divider)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/divider.svg)](https://www.npmjs.com/package/@enso-ui/divider)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/divider)
[![Issues](https://img.shields.io/github/issues/enso-ui/divider.svg)](https://github.com/enso-ui/divider/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/divider.svg)](https://github.com/enso-ui/divider/pulls)

## Description

Divider is a lightweight visual separator component for Enso UI.

It renders a Bulma-style divider line with optional text and configurable label placement.

## Installation

Install the package:

```bash
yarn add @enso-ui/divider
```

This package can also be consumed outside the Enso ecosystem.

## Features

- exports a single presentational divider component
- supports left, center, and right title placement
- renders the caption through the `data-title` pseudo-element

## Usage

```vue
<script>
import Divider from '@enso-ui/divider';

export default {
    components: { Divider },
};
</script>

<template>
    <Divider title="Advanced Filters" placement="left" />
</template>
```

## API

### `Divider`

Default export for the divider component.

Import: `@enso-ui/divider`

Props:
- `placement: 'left' | 'center' | 'right'` default `center`
- `title: string | null` default `null`

Events:
- No public emits.

## Depends On

- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/divider/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/divider/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:18 AM</div>
</div>
