---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Meili Search

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://github.com/enso-ui/meili-search/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.3-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/meili-search)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/meili-search.svg)](https://www.npmjs.com/package/@enso-ui/meili-search)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/meili-search)
[![Issues](https://img.shields.io/github/issues/enso-ui/meili-search.svg)](https://github.com/enso-ui/meili-search/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/meili-search.svg)](https://github.com/enso-ui/meili-search/pulls)

## Description

Meili Search ships the integration settings page used to configure Meili Search inside Enso UI.

## Installation

This package is normally consumed from the Enso UI workspace inside an application that also installs the backend integration package.

## Features

- registers the `/integrations/meilisearch/settings` route module
- ships a single backend-driven settings page built on `EnsoForm`
- keeps the frontend shell aligned with Meili Search backend settings and actions
- uses the same integration layout pattern as the other Enso integration packages

## Usage

```js
import integrations from '@enso-ui/meili-search/src/bulma/routes/integrations.js';
import MeiliSearchSettings from '@enso-ui/meili-search/src/bulma/pages/integrations/settings/Index.vue';
```

## API

### Route modules

Common imports:
- `@enso-ui/meili-search/src/bulma/routes/integrations.js`
- `@enso-ui/meili-search/src/bulma/routes/integrations/meilisearch.js`
- `@enso-ui/meili-search/src/bulma/routes/integrations/meilisearch/settings.js`
- `@enso-ui/meili-search/src/bulma/pages/integrations/settings/Index.vue`

The package is page-oriented. The settings page is the practical public surface.

## Routes

### `/integrations/meilisearch/settings`

Route name:
- `integrations.meilisearch.settings.index`

Page:
- `src/bulma/pages/integrations/settings/Index.vue`

## Companion Backend Package

- [`laravel-enso/meili-search`](https://docs.laravel-enso.com/backend/meili-search.html) [↗](https://git.xtelecom.ro/laravel-enso/meili-search)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

Proprietary. See [LICENSE](https://github.com/enso-ui/meili-search/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/meili-search/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:43:48 PM</div>
</div>
