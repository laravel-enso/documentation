---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tabs

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/tabs/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/tabs)
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
- supports optional controlled active-tab state through `v-model`
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

### Controlled Tabs

`Tabs` and `EnsoTabs` can be controlled with `v-model` when the parent owns the
active tab, for example when syncing the active tab with a route query param.

```vue
<EnsoTabs v-model="activeTab">
    ...
</EnsoTabs>
```

When `modelValue` is omitted, the component keeps its original internal behavior
and activates the default tab or the first available tab.

Events:
- `update:modelValue`
- `selected`
- `activated`

### `Tabs`

Public export available from `src/bulma/Tabs.vue`.

Bulma modifiers are configured through classes on the component:

```vue
<Tabs class="is-centered is-small is-boxed">
    ...
</Tabs>

<Tabs class="is-toggle is-toggle-rounded is-fullwidth">
    ...
</Tabs>
```

Supported tab modifier classes:

- `is-left`, `is-centered`, `is-right`
- `is-small`, `is-normal`, `is-medium`, `is-large`
- `is-boxed`, `is-toggle`, `is-toggle-rounded`, `is-fullwidth`

Non-modifier classes stay on the component wrapper, so wrapper-level classes such as
`form-tabs`, spacing helpers, or local hooks keep working.

### `EnsoTabs`

Public export available from `src/bulma/EnsoTabs.vue`.

`EnsoTabs` always renders the shared Enso toggle/fullwidth shell. Additional tab
modifiers are configured through classes:

```vue
<EnsoTabs class="is-small">
    ...
</EnsoTabs>
```

Non-modifier classes stay on the component wrapper.

### Upgrade Notes

Tab styling props were removed. Use Bulma classes instead:

- `size="small"` -> `class="is-small"`
- `alignment="centered"` -> `class="is-centered"`
- `boxed` -> `class="is-boxed"`
- `toggle` -> `class="is-toggle"`
- `toggle-rounded` / `toggleRounded` -> `class="is-toggle-rounded"`
- `fullwidth` -> `class="is-fullwidth"`
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/tabs/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/tabs/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/15/2026, 11:27:51 AM</div>
</div>
