---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Google

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/google/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/google)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/google.svg)](https://www.npmjs.com/package/@enso-ui/google)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/google)
[![Issues](https://img.shields.io/github/issues/enso-ui/google.svg)](https://github.com/enso-ui/google/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/google.svg)](https://github.com/enso-ui/google/pulls)

## Description

Google ships the route module and settings page used for the Enso Google integration.

## Installation

Install the package:

```bash
yarn add @enso-ui/google
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/integrations/google/settings` route module
- renders the settings screen through `EnsoForm`
- supports backend-driven create/update flows for Google credentials and toggles
- keeps the frontend shell aligned with the backend integration contract

## Usage

```js
import integrations from '@enso-ui/google/src/bulma/routes/integrations.js';
import GoogleSettings from '@enso-ui/google/src/bulma/pages/integrations/settings/Index.vue';
```

## API

### Route modules

The package is page-oriented and is usually consumed through its route module.

Common imports:
- `@enso-ui/google/src/bulma/routes/integrations.js`
- `@enso-ui/google/src/bulma/routes/integrations/google.js`
- `@enso-ui/google/src/bulma/routes/integrations/google/settings.js`
- `@enso-ui/google/src/bulma/pages/integrations/settings/Index.vue`

### Settings page

The page is a thin wrapper around `EnsoForm` and delegates the actual contract, actions, and validation to the backend package.

## Routes

### `/integrations/google/settings`

Route name:
- `integrations.google.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

## Companion Backend Package

- [`laravel-enso/google`](https://docs.laravel-enso.com/backend/google.html) [↗](https://github.com/laravel-enso/google)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/google/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/google/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:08 PM</div>
</div>
