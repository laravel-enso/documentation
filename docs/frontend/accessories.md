---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Accessories

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/accessories/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/accessories)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/accessories.svg)](https://www.npmjs.com/package/@enso-ui/accessories)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/accessories)
[![Issues](https://img.shields.io/github/issues/enso-ui/accessories.svg)](https://github.com/enso-ui/accessories/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/accessories.svg)](https://github.com/enso-ui/accessories/pulls)

## Description

Accessory tabs wrapper with translated labels and per-tab counters for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/accessories
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- wraps `@enso-ui/tabs/bulma` and replaces the default tab-label renderer
- switches between translated text labels and Font Awesome icons through the `icons` prop
- exposes a mutable `count` map to the default slot so tab panes can publish badges
- renders dark Bulma counter tags next to any tab that sets a positive count

## Usage

```vue
<script setup>
import Accessories from '@enso-ui/accessories/bulma';
import { Tab } from '@enso-ui/tabs/bulma';
</script>

<Accessories v-slot="{ count }">
    <tab id="Comments">
        <CommentsCard @update="count.Comments = 6" />
    </tab>
    <tab id="Documents">
        <DocumentsCard @update="count.Documents = 2" />
    </tab>
</Accessories>
```

## API

### `Accessories`

Default export that wraps `EnsoTabs` and customizes the label slot.

Import: `@enso-ui/accessories/bulma`

Props:
- `icons: boolean = false` toggles icon-based labels instead of translated text labels.

Events:
- No public emits.

Slots:
- `default` receives `{ count }`, a mutable object keyed by tab id.

## Depends On

- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@fortawesome/vue-fontawesome`](https://github.com/FortAwesome/vue-fontawesome)
- [`Bulma`](https://bulma.io/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/accessories/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/accessories/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:21:31 PM</div>
</div>
