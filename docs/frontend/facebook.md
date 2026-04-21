---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Facebook

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/facebook/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/facebook)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/facebook.svg)](https://www.npmjs.com/package/@enso-ui/facebook)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/facebook)
[![Issues](https://img.shields.io/github/issues/enso-ui/facebook.svg)](https://github.com/enso-ui/facebook/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/facebook.svg)](https://github.com/enso-ui/facebook/pulls)

## Description

Facebook ships the route module and settings page used to manage the Enso Facebook integration.

## Installation

Install the package:

```bash
yarn add @enso-ui/facebook
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/integrations/facebook/settings` route module
- renders the integration settings screen through `EnsoForm`
- resets the form key after the initial save so create flows can continue cleanly
- plugs into the backend-driven settings contract exposed by the Laravel Enso package

## Usage

```js
import integrations from '@enso-ui/facebook/src/bulma/routes/integrations.js';
import FacebookSettings from '@enso-ui/facebook/src/bulma/pages/integrations/settings/Index.vue';
```

## API

### Route modules

The package is page-oriented and is typically consumed through its route module.

Common imports:
- `@enso-ui/facebook/src/bulma/routes/integrations.js`
- `@enso-ui/facebook/src/bulma/routes/integrations/facebook.js`
- `@enso-ui/facebook/src/bulma/routes/integrations/facebook/settings.js`
- `@enso-ui/facebook/src/bulma/pages/integrations/settings/Index.vue`

### Settings page

The shipped page wraps `EnsoForm` and listens to the form `submit` and `ready` lifecycle to refresh the instance after the first successful save.

## Routes

### `/integrations/facebook/settings`

Route name:
- `integrations.facebook.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

The page is the frontend shell for the backend-driven Facebook settings form.

## Companion Backend Package

- [`laravel-enso/facebook`](https://docs.laravel-enso.com/backend/facebook.html) [↗](https://github.com/laravel-enso/facebook)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/facebook/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/facebook/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:25:55 PM</div>
</div>
