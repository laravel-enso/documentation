---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Localisation

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/localisation/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.19-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/localisation)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/localisation.svg)](https://www.npmjs.com/package/@enso-ui/localisation)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/localisation)
[![Issues](https://img.shields.io/github/issues/enso-ui/localisation.svg)](https://github.com/enso-ui/localisation/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/localisation.svg)](https://github.com/enso-ui/localisation/pulls)

## Description

Localisation provides the admin pages and helper widgets used to manage languages, edit translation texts, and surface missing keys in Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/localisation
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers `/system/localisation` pages for index, create, edit, and edit-texts flows
- ships helper widgets such as `MissingKeys`, `LanguageSelector`, and `KeyCollector`
- includes a registration hook that wires the localisation helpers into the host app
- pairs the page layer with backend-driven tables and forms from the localisation package

## Usage

```js
import systemRoutes from '@enso-ui/localisation/src/bulma/routes/system.js';
import MissingKeys from '@enso-ui/localisation/src/bulma/components/navbar/MissingKeys.vue';
```

## API

### Route pages

Common imports:
- `pages/localisation/Index.vue`
- `pages/localisation/Create.vue`
- `pages/localisation/Edit.vue`
- `pages/localisation/EditTexts.vue`

### Helper components

Bulma and core variants are shipped for:
- `MissingKeys`
- `LanguageSelector`
- `KeyCollector`

### Registration

- `src/bulma/register.js` registers the package helpers on the host application.

## Routes

### `/system/localisation`
- `system.localisation.index`
- `system.localisation.create`
- `system.localisation.edit`
- `system.localisation.editTexts`

## Companion Backend Package

- [`laravel-enso/localisation`](https://docs.laravel-enso.com/backend/localisation.html) [↗](https://github.com/laravel-enso/localisation)

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/dropdown`](https://docs.laravel-enso.com/frontend/dropdown.html) [↗](https://github.com/enso-ui/dropdown)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/pagination`](https://docs.laravel-enso.com/frontend/pagination.html) [↗](https://github.com/enso-ui/pagination)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/localisation/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/localisation/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:26:57 PM</div>
</div>
