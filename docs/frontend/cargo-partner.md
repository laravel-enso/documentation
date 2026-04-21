---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Cargo Partner

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/cargo-partner/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.2.4-2563eb.svg)](https://git.xtelecom.ro/enso-ui/cargo-partner/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/cargo-partner)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/cargo-partner/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/cargo-partner/-/merge_requests)

## Description

Cargo Partner integration settings page for Enso UI.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- exports the settings page used to manage Cargo Partner integration records
- wraps the backend-driven Enso form payload exposed by the integration package
- recreates the form after the first submit when the newly created settings row receives its route param
- ships the integration route group consumed by the Enso shell

## Usage

```vue
<script>
import CargoPartnerSettings from '@enso-ui/cargo-partner';

export default {
    components: { CargoPartnerSettings },
};
</script>
```

## API

### `Index`

Default export for the Cargo Partner settings page.

Import: `@enso-ui/cargo-partner`

Props:
- No public props.

Events:
- No public emits.

Methods:
- Internally bumps the local form key after the initial create flow.

## Routes

### `integrations/cargoPartner/settings`

Route name: `integrations.cargoPartner.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

The package exposes a nested integration route group under `integrations/cargoPartner/` and wires the settings form through its child route.

## Companion Backend Package

- [`laravel-enso/cargo-partner`](https://docs.laravel-enso.com/backend/cargo-partner.html) [↗](https://git.xtelecom.ro/laravel-enso/cargo-partner)

The backend package provides the integration routes, form contracts, and persistence used by the settings page.

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/cargo-partner/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/cargo-partner/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:41:01 AM</div>
</div>
