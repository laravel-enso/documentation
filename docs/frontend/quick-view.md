---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Quick View

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/quick-view/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.10-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/quick-view)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/quick-view.svg)](https://www.npmjs.com/package/@enso-ui/quick-view)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/quick-view)
[![Issues](https://img.shields.io/github/issues/enso-ui/quick-view.svg)](https://github.com/enso-ui/quick-view/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/quick-view.svg)](https://github.com/enso-ui/quick-view/pulls)
## Description
Slide-out quick-view panel for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/quick-view
```
## Features
- exports `QuickView` as its public surface
- renders the panel through `Teleport` directly under `body`, avoiding parent stacking contexts and overflow clipping
- keeps the slide transition active while using a teleported panel
- supports Bulma column responsiveness through classes passed on the component
- aligns responsive panels to the right edge by default
- exposes the `close()` method through template refs and the default slot scope
- closes when the user presses `Escape`
## Usage
```vue
<script setup>
import QuickView from '@enso-ui/quick-view/bulma';
</script>

<template>
    <QuickView class="is-one-third-desktop is-half-tablet is-full-mobile"
        @close="quickView = false"
        v-if="quickView">
        <template #default="{ close }">
            <button class="button"
                type="button"
                @click="close">
                Close
            </button>
        </template>
    </QuickView>
</template>
```
## API
### `QuickView`

Public export available from `@enso-ui/quick-view/bulma`.

Attributes:
- classes passed to `QuickView` are applied to the internal Bulma `.column`, so standard column sizing helpers can control panel width responsively
- non-class attributes are not applied to the wrapper panel

Events:
- `close` is emitted after the panel is closed by `Escape`, by the exposed `close()` method, or after the leave transition completes

Exposed:
- `close()` starts the leave transition and emits `close` after the animation completes

Slots:
- default slot receives `{ close }`, the same method exposed on the component instance
## Depends On
- `@enso-ui/transitions`
- `@enso-ui/ui`
- `bulma`
- `pinia`
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/quick-view/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/quick-view/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/20/2026, 2:59:13 PM</div>
</div>
