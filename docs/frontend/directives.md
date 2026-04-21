---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Directives

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/directives/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.2-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/directives)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/directives.svg)](https://www.npmjs.com/package/@enso-ui/directives)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/directives)
[![Issues](https://img.shields.io/github/issues/enso-ui/directives.svg)](https://github.com/enso-ui/directives/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/directives.svg)](https://github.com/enso-ui/directives/pulls)

## Description

Vue directives used across Enso UI packages.

## Installation

```bash
yarn add @enso-ui/directives
```

## Features

- exports reusable DOM and interaction directives consumed across Enso UI packages
- supports focus, click-outside, select-on-focus, resize, long-click, and scroll-into-view flows
- includes a Highlight.js directive for rendered code snippets

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

### `v-fits-below`

Computes whether an element fully fits in the current viewport and passes the result to a callback.

### `v-focus`

Focuses the element after the current tick.

### `v-hljs`

Runs Highlight.js on the first `code` element inside the bound node.

### `v-long-click`

Runs a handler only after the pointer stays pressed for the configured duration in milliseconds.

### `v-resize`

Auto-resizes an input to its content width. An optional numeric argument sets the minimum width in pixels.

### `v-scroll-into-view`

Calls `Element.scrollIntoView()` when `scroll` transitions to `true`.

### `v-select-on-focus`

Selects the current value when the element receives focus.

## Depends On

- [`highlight.js`](https://highlightjs.org/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/directives/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/directives/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:07:19 AM</div>
</div>
