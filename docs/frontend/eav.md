---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Eav

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/eav/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.1.5-2563eb.svg)](https://git.xtelecom.ro/enso-ui/eav/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/eav)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/eav/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/eav/-/merge_requests)

## Description

Eav provides the frontend form helpers and management pages for Enso entity-attribute-value flows.

It combines a reusable form renderer for grouped dynamic attributes with a values-management page used to maintain selectable attribute values.

## Installation

This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.

## Features

- exports `FormEav` for embedding dynamic EAV groups inside Enso forms
- exports `Values` for managing attribute option lists
- ships the `/eav/groups` route group used for attribute-group administration
- integrates grouping, selector, tree, and values editing widgets around backend-driven payloads

## Usage

```vue
<script>
import { FormEav, Values } from '@enso-ui/eav/bulma';

export default {
    components: { FormEav, Values },
};
</script>
```

## API

### `FormEav`

Grouped EAV form renderer.

Import: `@enso-ui/eav/bulma`

Props:
- `form: object` required

Events:
- `grouped`

### `Values`

Attribute value manager.

Import: `@enso-ui/eav/bulma`

Props:
- `attributeId: number` required

Events:
- No public emits.

## Routes

### `/eav/groups`

Route name:
- `eav.groups.index`

Page:
- `src/bulma/pages/eav/groups/Index.vue`

The page pairs an orderable tree of groups and attributes with the backend form editor and the `Values` panel for attribute option maintenance.

## Companion Backend Package

- [`laravel-enso/eav`](https://docs.laravel-enso.com/backend/eav.html) [↗](https://git.xtelecom.ro/laravel-enso/eav)

The backend companion provides the routes, tree payloads, attribute forms, and value endpoints consumed by the frontend package.

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/orderable-trees`](https://docs.laravel-enso.com/frontend/orderable-trees.html) [↗](https://github.com/enso-ui/orderable-trees)
- [`@enso-ui/typeahead`](https://docs.laravel-enso.com/frontend/typeahead.html) [↗](https://github.com/enso-ui/typeahead)

## License

Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/eav/-/blob/master/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/eav/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:28 AM</div>
</div>
