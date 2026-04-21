---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Typeahead

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/typeahead/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/typeahead)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/typeahead.svg)](https://www.npmjs.com/package/@enso-ui/typeahead)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/typeahead)
[![Issues](https://img.shields.io/github/issues/enso-ui/typeahead.svg)](https://github.com/enso-ui/typeahead/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/typeahead.svg)](https://github.com/enso-ui/typeahead/pulls)
## Description
Typeahead inputs for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/typeahead
```
## Features
- exports `Typeahead`, `EnsoTypeahead` as its public surface
- keeps the Bulma presentation layer separate from the renderless/stateful layer where applicable
## Usage
```vue
<script setup>
import { Typeahead, EnsoTypeahead } from '@enso-ui/typeahead/bulma';
</script>
```
## API
### `Typeahead`

Public export available from `src/bulma/Typeahead.vue`.

Props:
- `hasError`
- `isRounded`
- `noResults`
- `placeholder`
- `searching`
- `search`

Events:
- `keydown`

### `EnsoTypeahead`

Public export available from `src/bulma/EnsoTypeahead.vue`.

Props:
- `source`

Injects:
- `errorHandler`
- `http`
- `i18n`
- `route`
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/typeahead/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/typeahead/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:14:28 PM</div>
</div>
