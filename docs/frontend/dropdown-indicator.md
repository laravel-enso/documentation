---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Dropdown Indicator

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/dropdown-indicator/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.2-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/dropdown-indicator)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/dropdown-indicator.svg)](https://www.npmjs.com/package/@enso-ui/dropdown-indicator)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/dropdown-indicator)
[![Issues](https://img.shields.io/github/issues/enso-ui/dropdown-indicator.svg)](https://github.com/enso-ui/dropdown-indicator/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/dropdown-indicator.svg)](https://github.com/enso-ui/dropdown-indicator/pulls)

## Description

Dropdown Indicator is the small chevron icon used by Enso dropdown triggers.

It rotates according to open state and placement so parent dropdown controls do not need to duplicate icon logic.

## Installation

Install the package:

```bash
yarn add @enso-ui/dropdown-indicator
```

This package can also be consumed outside the Enso ecosystem.

## Features

- exports a single chevron-based trigger indicator
- supports collapsed, open-down, and open-up visual states
- keeps the dropdown trigger template small and reusable

## Usage

```vue
<script>
import DropdownIndicator from '@enso-ui/dropdown-indicator';

export default {
    components: { DropdownIndicator },
};
</script>

<template>
    <DropdownIndicator :open="open" :opens-up="opensUp" />
</template>
```

## API

### `DropdownIndicator`

Default export for the chevron indicator component.

Import: `@enso-ui/dropdown-indicator`

Props:
- `open: boolean` default `false`
- `opensUp: boolean` default `false`

Events:
- No public emits.

## Depends On

- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/dropdown-indicator/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/dropdown-indicator/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:26 AM</div>
</div>
