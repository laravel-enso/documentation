---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tabs

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/tabs/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/tabs)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/tabs.svg)](https://www.npmjs.com/package/@enso-ui/tabs)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/tabs)
[![Issues](https://img.shields.io/github/issues/enso-ui/tabs.svg)](https://github.com/enso-ui/tabs/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/tabs.svg)](https://github.com/enso-ui/tabs/pulls)
## Description
Tab primitives and Bulma tab shells for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/tabs
```
## Features
- exports `Tab`, `Tabs`, `EnsoTabs` as its public surface
- keeps the Bulma presentation layer separate from the renderless/stateful layer where applicable
## Usage
```vue
<script setup>
import { Tab, Tabs, EnsoTabs } from '@enso-ui/tabs/bulma';
</script>
```
## API
### `Tab`

Public export available from `src/tabs/Tab.vue`.

Props:
- `id`
- `default`
- `keepAlive`

### `Tabs`

Public export available from `src/bulma/Tabs.vue`.

Props:
- `alignment`
- `boxed`
- `fullwidth`
- `size`
- `toggle`
- `toggleRounded`

### `EnsoTabs`

Public export available from `src/bulma/EnsoTabs.vue`.

Props:
- `size`
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/tabs/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/tabs/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:47 PM</div>
</div>
