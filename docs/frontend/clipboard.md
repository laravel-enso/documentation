---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Clipboard

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/clipboard/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/clipboard)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/clipboard.svg)](https://www.npmjs.com/package/@enso-ui/clipboard)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/clipboard)
[![Issues](https://img.shields.io/github/issues/enso-ui/clipboard.svg)](https://github.com/enso-ui/clipboard/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/clipboard.svg)](https://github.com/enso-ui/clipboard/pulls)

## Description

Hidden clipboard helper component for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/clipboard
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports a minimal hidden input that centralizes copy-to-clipboard behaviour
- supports iOS-specific selection logic before issuing `document.execCommand("copy")`
- keeps the clipboard element off-screen and non-interactive

## Usage

```vue
<script setup>
import { ref } from 'vue';
import Clipboard from '@enso-ui/clipboard';

const clipboard = ref(null);

const copy = value => clipboard.value.copy(value);
</script>

<Clipboard ref="clipboard" />
```

## API

### `Clipboard`

Default export that exposes imperative clipboard-copy helpers through a component ref.

Import: `@enso-ui/clipboard`

Props:
- `maxLength: number = 99999` selection length used by the iOS fallback.

Methods:
- `copy(value)`
- `select()`

## Depends On

- [`Vue`](https://vuejs.org/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/clipboard/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/clipboard/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:21:31 PM</div>
</div>
