---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Dropdown

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/dropdown/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/dropdown)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/dropdown.svg)](https://www.npmjs.com/package/@enso-ui/dropdown)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/dropdown)
[![Issues](https://img.shields.io/github/issues/enso-ui/dropdown.svg)](https://github.com/enso-ui/dropdown/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/dropdown.svg)](https://github.com/enso-ui/dropdown/pulls)

## Description

Dropdown provides both Bulma-flavored and renderless dropdown primitives for Enso UI.

The Bulma entrypoint renders trigger, menu, transition, and placement behavior, while the renderless layer owns keyboard navigation, registration, and selection flow.

## Installation

Install the package:

```bash
yarn add @enso-ui/dropdown
```

This package can also be consumed outside the Enso ecosystem.

## Features

- exports `Dropdown` and `DropdownItem` from the Bulma entrypoint
- exports `CoreDropdown` from the renderless entrypoint
- supports keyboard navigation, selection tracking, click-outside closing, and up/down placement
- composes cleanly with custom trigger, controls, and item slots

## Usage

```vue
<script>
import { Dropdown, DropdownItem } from '@enso-ui/dropdown';

export default {
    components: { Dropdown, DropdownItem },
};
</script>
```

Renderless usage:

```js
import { CoreDropdown } from '@enso-ui/dropdown/renderless';
```

## API

### `Dropdown`

Bulma-styled dropdown wrapper.

Import: `@enso-ui/dropdown`

Props:
- `opensUp: boolean` default `false`

Methods:
- `show()`
- `hide()`

Slots:
- `trigger`
- `label`
- `controls`
- `items`

### `DropdownItem`

Selectable Bulma dropdown item.

Import: `@enso-ui/dropdown`

Props:
- `selected: boolean` default `false`

Events:
- `select`

### `CoreDropdown`

Renderless dropdown state owner.

Import: `@enso-ui/dropdown/renderless`

Props:
- `disableControls: boolean` default `false`
- `disabled: boolean` default `false`
- `dropdownClass: string` default `'dropdown'`
- `itemClass: string` default `'dropdown-item'`
- `manual: boolean` default `false`

Events:
- `show`
- `hide`

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/dropdown-indicator`](https://docs.laravel-enso.com/frontend/dropdown-indicator.html) [↗](https://github.com/enso-ui/dropdown-indicator)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/dropdown/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/dropdown/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:02:15 PM</div>
</div>
