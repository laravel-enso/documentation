---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Select

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/select/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/select)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/select.svg)](https://www.npmjs.com/package/@enso-ui/select)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/select)
[![Issues](https://img.shields.io/github/issues/enso-ui/select.svg)](https://github.com/enso-ui/select/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/select.svg)](https://github.com/enso-ui/select/pulls)
## Description
Selectable inputs and tag renderers for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/select
```
## Features
- exports `VueSelect`, `EnsoSelect`, `Tag` as its public surface
- keeps the Bulma presentation layer separate from the renderless/stateful layer where applicable
## Usage
```vue
<script setup>
import { VueSelect, EnsoSelect, Tag } from '@enso-ui/select/bulma';
</script>
```
## API
### `VueSelect`

Public export available from `src/bulma/VueSelect.vue`.

Props:
- `hasError`
- `hasWarning`
- `isSuccess`
- `labels`
- `opensUp`
- `placeholder`

### `EnsoSelect`

Public export available from `src/bulma/EnsoSelect.vue`.

Props:
- `source`

Injects:
- `errorHandler`
- `http`
- `i18n`
- `route`

### `Tag`

Public export available from `src/bulma/Tag.vue`.

Props:
- `disabled`
- `label`

Events:
- `deselect`
## Companion Backend Package

- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/select/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/select/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:27 PM</div>
</div>
