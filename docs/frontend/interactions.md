---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Interactions

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/interactions/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.6.7-2563eb.svg)](https://git.xtelecom.ro/enso-ui/interactions/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/interactions)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/interactions/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/interactions/-/merge_requests)

## Description

Interactions bundles the routed interaction inbox together with the reusable widgets used to display feedback and interaction icons across Enso UI.

## Installation

This package is distributed through the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- registers the `/interactions` route page
- exports `Interactions`, `Feedbacks`, `Feedback`, and `Icon` through the public Bulma entrypoint
- supports create, edit, delete, reload, and filtering flows over the backend interaction API
- renders typed feedback controls and type-specific icons for comments, calls, emails, SMS, and reminders

## Usage

```vue
<script setup>
import { Interactions, Feedbacks, Feedback, Icon } from '@enso-ui/interactions/bulma';
</script>

<Interactions :id="companyId" @update="refresh" />
```

## API

### Bulma exports

Import: `@enso-ui/interactions/bulma`

#### `Interactions`
- prop: `id: string | number` interactable model id.
- emits: `update` after fetch, create, or delete flows complete.
- owns the full interaction inbox UI and delegates editing to the `Interaction` subcomponent.

#### `Feedbacks`
- prop: `modelValue: string | number | null`
- emits: `update:modelValue`
- renders the selectable feedback scale used by interaction forms.

#### `Feedback`
- prop: `feedback: string | number | null`
- renders a single icon and tooltip for the current feedback value.

#### `Icon`
- prop: `type: string | number`
- maps backend interaction types to Font Awesome icons and directional overlays.

### Routed page

- `@enso-ui/interactions/src/bulma/pages/interactions/Index.vue`
- `@enso-ui/interactions/src/bulma/routes/index.js`

## Routes

### `/interactions`

Route name:
- `interactions.index`

Page:
- `src/bulma/pages/interactions/Index.vue`

## Companion Backend Package

- [`laravel-enso/interactions`](https://docs.laravel-enso.com/backend/interactions.html) [↗](https://git.xtelecom.ro/laravel-enso/interactions)

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/divider`](https://docs.laravel-enso.com/frontend/divider.html) [↗](https://github.com/enso-ui/divider)
- [`@enso-ui/enums`](https://docs.laravel-enso.com/frontend/enums.html) [↗](https://github.com/enso-ui/enums)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/interactions/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/interactions/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:47 PM</div>
</div>
