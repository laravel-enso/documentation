---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Holidays

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/holidays/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/holidays)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/holidays.svg)](https://www.npmjs.com/package/@enso-ui/holidays)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/holidays)
[![Issues](https://img.shields.io/github/issues/enso-ui/holidays.svg)](https://github.com/enso-ui/holidays/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/holidays.svg)](https://github.com/enso-ui/holidays/pulls)

## Description

Holidays provides the holiday calendar management page used by Enso UI applications.

## Installation

Install the package:

```bash
yarn add @enso-ui/holidays
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/holidays` route module
- ships a single page module for listing and managing holiday definitions
- coordinates card, confirmation, select, switch, and transition helpers around the holiday workflow
- pairs with the backend package that exposes the holiday table, form, and actions

## Usage

```js
import holidaysRoute from '@enso-ui/holidays/src/bulma/routes/holidays.js';
import HolidaysIndex from '@enso-ui/holidays/src/bulma/pages/holidays/Index.vue';
```

## API

### Route modules

Common imports:
- `@enso-ui/holidays/src/bulma/routes/holidays.js`
- `@enso-ui/holidays/src/bulma/pages/holidays/Index.vue`

The package is page-oriented. The routed page is the practical public surface.

## Routes

### `/holidays`

Route name:
- `holidays.index`

Page:
- `src/bulma/pages/holidays/Index.vue`

## Companion Backend Package

- [`laravel-enso/holidays`](https://docs.laravel-enso.com/backend/holidays.html) [↗](https://github.com/laravel-enso/holidays)

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/divider`](https://docs.laravel-enso.com/frontend/divider.html) [↗](https://github.com/enso-ui/divider)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/holidays/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/holidays/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:11 PM</div>
</div>
