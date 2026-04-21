---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# People

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/people/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/people)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/people.svg)](https://www.npmjs.com/package/@enso-ui/people)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/people)
[![Issues](https://img.shields.io/github/issues/enso-ui/people.svg)](https://github.com/enso-ui/people/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/people.svg)](https://github.com/enso-ui/people/pulls)

## Description

People provides the administration pages used to list, create, and edit person records in Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/people
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/administration/people` route group
- ships `index`, `create`, and `edit` page modules
- combines `EnsoTable`, `EnsoForm`, and tabbed accessories in the standard person workflow
- pairs with the backend people package for forms, addresses, and permissions

## Usage

```js
import administrationRoutes from '@enso-ui/people/src/bulma/routes/administration.js';
import PeopleIndex from '@enso-ui/people/src/bulma/pages/people/Index.vue';
```

## API

### Route modules

Common imports:
- `src/bulma/routes/administration.js`
- `src/bulma/routes/administration/people.js`

### Page modules

- `src/bulma/pages/people/Index.vue`
- `src/bulma/pages/people/Create.vue`
- `src/bulma/pages/people/Edit.vue`

The package is page-oriented. The routed pages are the public surface.

## Routes

### `/administration/people`
- `administration.people.index`
- `administration.people.create`
- `administration.people.edit`

## Companion Backend Package

- [`laravel-enso/people`](https://docs.laravel-enso.com/backend/people.html) [↗](https://github.com/laravel-enso/people)

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/addresses`](https://docs.laravel-enso.com/frontend/addresses.html) [↗](https://github.com/enso-ui/addresses)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/people/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/people/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:04:44 PM</div>
</div>
