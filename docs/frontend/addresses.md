---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Addresses

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/addresses/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/addresses)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/addresses.svg)](https://www.npmjs.com/package/@enso-ui/addresses)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/addresses)
[![Issues](https://img.shields.io/github/issues/enso-ui/addresses.svg)](https://github.com/enso-ui/addresses/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/addresses.svg)](https://github.com/enso-ui/addresses/pulls)

## Description

Address cards and address-management widgets for Enso UI detail pages.

## Installation

Install the package:

```bash
yarn add @enso-ui/addresses
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports `Addresses` and `AddressesCard` through the public Bulma entrypoint
- loads address collections over the injected HTTP client and Enso route helper
- supports filtering, creation, edit, default/shipping/billing toggles, and deletion
- pairs the address list with the Enso modal and form workflow

## Usage

```vue
<script setup>
import { AddressesCard } from '@enso-ui/addresses/bulma';
</script>

<AddressesCard
    :id="companyId"
    type="company"
    title="Addresses"
/>
```

## API

### `Addresses`

Inline address manager that fetches and mutates an address collection for one model.

Import: `@enso-ui/addresses/bulma`

Props:
- `id: string | number` target model id.
- `type: string | null = null` addressable backend type used by the API.
- `query: string = ""` initial filter text mirrored into the local search box.

Events:
- `update` after fetch, create, delete, or type-flag changes.

Slots:
- `controls` receives `{ create, internalQuery, fetch }` for custom toolbar rendering.

### `AddressesCard`

Card wrapper around `Addresses` with refresh, collapse, and counter controls.

Import: `@enso-ui/addresses/bulma`

Props:
- `id: string | number` target model id.
- `type: string` backend addressable type.
- `icon: string | array | object` card icon, defaulting to `faSignsPost`.
- `collapsed: boolean = false` initial collapsed state.
- `title: string | null = null` optional card title override.

Events:
- No direct emits; the wrapped `Addresses` component raises `update`.

## Companion Backend Package

- [`laravel-enso/addresses`](https://docs.laravel-enso.com/backend/addresses.html) [↗](https://github.com/laravel-enso/addresses)

The frontend widgets expect the backend package to provide the address CRUD endpoints, modal form contracts, and typed address flags used by the card workflow.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/google`](https://docs.laravel-enso.com/frontend/google.html) [↗](https://github.com/enso-ui/google)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/addresses/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/addresses/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:46:55 AM</div>
</div>
