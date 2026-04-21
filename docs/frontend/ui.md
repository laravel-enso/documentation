---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# UI

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/ui/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-7.1.32-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/ui)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/ui.svg)](https://www.npmjs.com/package/@enso-ui/ui)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/ui)
[![Issues](https://img.shields.io/github/issues/enso-ui/ui.svg)](https://github.com/enso-ui/ui/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/ui.svg)](https://github.com/enso-ui/ui/pulls)
## Description
Application shell and core layout services for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/ui
```
## Features
- exports the application root shell used by Enso UI apps
- provides route mapping, HTTP, i18n, toastr, and error handling through Vue inject
- switches between auth, home, and default layouts based on app state
## Usage
```vue
<script setup>
import Root from '@enso-ui/ui/bulma';
</script>

<Root v-slot="{ home, isAuth }">
    <router-view v-if="isAuth || home" />
</Root>
```
## API
### `Root`

Application root shell that provides the shared Enso providers, route mapper, global error handler, and layout switching logic.
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/ui/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/ui/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:14:36 PM</div>
</div>
