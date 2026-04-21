---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Logs

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/logs/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/logs)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/logs.svg)](https://www.npmjs.com/package/@enso-ui/logs)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/logs)
[![Issues](https://img.shields.io/github/issues/enso-ui/logs.svg)](https://github.com/enso-ui/logs/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/logs.svg)](https://github.com/enso-ui/logs/pulls)

## Description

Logs bundles the Enso UI pages used to list backend log files and inspect one log in detail.

## Installation

Install the package:

```bash
yarn add @enso-ui/logs
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/system/logs` index and detail routes
- ships a table-based listing page for available logs
- ships a detail page for browsing one selected log file
- keeps the frontend shell aligned with the backend log endpoints and permissions

## Usage

```js
import systemRoutes from '@enso-ui/logs/src/bulma/routes/system.js';
import LogsIndex from '@enso-ui/logs/src/bulma/pages/logs/Index.vue';
import LogShow from '@enso-ui/logs/src/bulma/pages/logs/Show.vue';
```

## API

### Page modules

Common imports:
- `@enso-ui/logs/src/bulma/pages/logs/Index.vue`
- `@enso-ui/logs/src/bulma/pages/logs/Show.vue`
- `@enso-ui/logs/src/bulma/routes/system/logs.js`

The package is page-oriented. The routed pages are the practical public surface.

## Routes

### `/system/logs`
- `system.logs.index`
- `system.logs.show`

## Companion Backend Package

- [`laravel-enso/logs`](https://docs.laravel-enso.com/backend/logs.html) [↗](https://github.com/laravel-enso/logs)

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/logs/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/logs/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:59 PM</div>
</div>
