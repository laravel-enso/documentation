---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Alfa Sign

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/alfa-sign/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.0-2563eb.svg)](https://git.xtelecom.ro/enso-ui/alfa-sign/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/alfa-sign)

## Description

Alfa Sign integration settings page for Enso UI. Provides the Vue 3 admin interface for managing the Alfa Sign remote signing service configuration within the Enso application shell.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- ships route-aware page modules consumed by the Enso application shell
- includes the Settings page backed by an Enso form for managing the Alfa Sign `url`, `auth_token`, and `enabled` flag

## Usage

```vue
<script setup>
import Index from '@enso-ui/alfa-sign/src/bulma/pages/integrations/alfaSign/settings/Index.vue';
</script>
```

## API

### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/integrations/alfaSign/settings/Index.vue`

## Routes

Alfa Sign ships the following named route entries:

- `integrations.alfaSign.settings.index`
  Path fragment: `settings`
  Route file: `src/bulma/routes/integrations/alfaSign/settings.js`

The parent route group is registered at:
- `src/bulma/routes/integrations/alfaSign.js` → path: `alfaSign/`
- `src/bulma/routes/integrations.js` → registers the `alfaSign` group under `integrations/`

## Companion Backend Package

- [`laravel-enso/alfasign`](https://git.xtelecom.ro/laravel-enso/alfa-sign) — provides the SOAP operations, Settings model, and API endpoints

## Depends On

- `@enso-ui/forms` `^4.1.0` — Enso form component used by the Settings page
- `@enso-ui/ui` `^7.1.0` — Enso application shell and Router component
- `vue` `^3.5.0`
- `@fortawesome/fontawesome-svg-core` + `@fortawesome/free-solid-svg-icons` — `file-signature` and `user-cog` icons

## Contributions

are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/alfa-sign/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/alfa-sign/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/27/2026, 4:05:30 PM</div>
</div>
