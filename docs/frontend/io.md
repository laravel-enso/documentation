---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# IO

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/io/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.3.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/io)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/io.svg)](https://www.npmjs.com/package/@enso-ui/io)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/io)
[![Issues](https://img.shields.io/github/issues/enso-ui/io.svg)](https://github.com/enso-ui/io/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/io.svg)](https://github.com/enso-ui/io/pulls)

## Description

IO tracks long-running imports, exports, and tasks and renders them inside the Enso navbar.

## Installation

Install the package:

```bash
yarn add @enso-ui/io
```

The package is also available through the full `enso-ui` workspace bundle.

## Features

- exports a renderless core navbar controller and Bulma navbar presentation components
- groups import, export, and task operations into a single reactive navbar entry
- subscribes to websocket channels and keeps operation state synchronized in real time
- supports cancellation, progress display, elapsed and remaining time, and owner avatars

## Usage

```js
import IO from '@enso-ui/io/src/bulma/components/navbar/IO.vue';
import registerIO from '@enso-ui/io/src/bulma/register.js';
```

## API

### Bulma components

Common imports:
- `@enso-ui/io/src/bulma/components/navbar/IO.vue`
- `@enso-ui/io/src/bulma/components/navbar/io/Import.vue`
- `@enso-ui/io/src/bulma/components/navbar/io/Export.vue`
- `@enso-ui/io/src/bulma/components/navbar/io/Task.vue`
- `@enso-ui/io/src/bulma/components/navbar/io/Operation.vue`
- `@enso-ui/io/src/bulma/register.js`

### Core controller

- `@enso-ui/io/src/core/components/navbar/IO.vue` is renderless and exposes the default slot payload `{ count, events, exports, imports, tasks }`.
- It owns websocket subscription, bag management, cancellation, and type normalization.

### `Operation`

Core props:
- `cancellable: boolean = false`
- `operation: object`

Emits:
- `cancel`

### Presentation components

- `Import` renders file, sheet, success, and failure counters.
- `Export` renders export totals and processed entries.
- `Task` renders step counters for queued task-style operations.
- `register.js` registers the Bulma navbar widget on the host app.

## Companion Backend Package

- [`laravel-enso/io`](https://docs.laravel-enso.com/backend/io.html) [↗](https://github.com/laravel-enso/io)

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/mixins`](https://docs.laravel-enso.com/frontend/mixins.html) [↗](https://github.com/enso-ui/mixins)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/io/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/io/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:50 PM</div>
</div>
