---
sidebarDepth: 3
---

# Directives

![NPM License](https://img.shields.io/npm/l/@enso-ui/directives.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/directives.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/directives.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/directives.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/directives.svg)

Vue Directives Package

The directives can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/directives
```

### Exports

`@enso-ui/directives`:
- `clickOutside`,
- `focus`,
- `hljs`,
- `longClick`,
- `selectOnFocus`,

## Usage

Import the desired directive(s):
```js
import { clickOutside, focus } from '@enso-ui/directives';
```

### clickOutside.js

Directive detects clicking outside the component.

Example:
```vue
<div v-click-outside="handler" class="navbar-item io">
    ...
</div>
```

where `handler` must be a `Function`

### focus.js

Focuses the element on initial render

Example:
```vue
<input class="input team-name"
    v-model="team.name"
    v-if="team.edit"
    v-focus>
```

### hljs.js

A directive implementation of the highlight.js library.

Example:
```vue
<pre v-hljs>
    <code class="php">
        {{ log.content }}
    </code>
</pre>
```

### longClick.js

Permits adding actions when long-clicking elements. 
Note that the duration (in milliseconds) is required. 

Example:
```vue
<button class="button is-naked"
    v-tooltip="i18n('Download invoice (long click for cancel)')"
    v-long-click:1500="cancelInvoice"
    key="invoice"
    @click="downloadInvoice">
    <span class="icon has-text-info">
        <fa icon="file-invoice-dollar"/>
    </span>
</button>
```

### selectOnFocus.js

Selects the contents of the input on focus.

Example:
```vue
<input type="text"
    class="input is-rounded"
    v-select-on-focus
    :placeholder="__('Search')"
    v-model="query">
```

### Exports

`@enso-ui/directives/renderless`:
- `clickOutside`,
- `focus`,
- `hljs`,
- `longClick`,
- `selectOnFocus`,

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

Uses highlight.js for code formatting

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
