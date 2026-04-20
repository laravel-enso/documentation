---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Directives

Vue directives used across the Enso UI packages.

## Installation

```bash
yarn add @enso-ui/directives
```

## Usage

Register the directives you need locally:

```js
import { clickOutside, scrollIntoView } from '@enso-ui/directives';

export default {
    directives: { clickOutside, scrollIntoView },
};
```

Or register them globally:

```js
import * as directives from '@enso-ui/directives';

Object.entries(directives).forEach(([name, directive]) => {
    app.directive(name, directive);
});
```

## API

### `v-click-outside`

Calls a handler when the click target is outside the bound element.

```vue
<div v-click-outside="close">
    ...
</div>
```

### `v-fits-below`

Computes whether an element fully fits in the current viewport and passes the
result to a callback.

```vue
<div v-fits-below="updatePlacement">
    ...
</div>
```

```js
methods: {
    updatePlacement(fitsBelow) {
        this.fitsBelow = fitsBelow;
    },
},
```

### `v-focus`

Focuses the element after the current tick.

```vue
<input v-focus>
```

### `v-hljs`

Runs Highlight.js on the first `code` element inside the bound node.

```vue
<pre v-hljs>
    <code>{{ snippet }}</code>
</pre>
```

### `v-long-click`

Runs a handler only after the pointer stays pressed for the configured duration
in milliseconds.

```vue
<button v-long-click:750="archive">
    Archive
</button>
```

### `v-resize`

Auto-resizes an input to its content width. An optional numeric argument sets
the minimum width in pixels.

```vue
<input v-resize:80 v-model="value">
```

### `v-scroll-into-view`

Calls `Element.scrollIntoView()` when `scroll` transitions to `true`.

```vue
<a v-scroll-into-view="{
    scroll: active,
    block: 'nearest',
    inline: 'nearest',
    behavior: 'smooth',
}">
    Current item
</a>
```

Supported options are the native `scrollIntoView()` options:
- `block`
- `inline`
- `behavior`

### `v-select-on-focus`

Selects the current value when the element receives focus.

```vue
<input v-select-on-focus v-model="value">
```

## License

[MIT](https://github.com/enso-ui/directives/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/directives/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/18/2026, 12:34:09 PM</div>
</div>
