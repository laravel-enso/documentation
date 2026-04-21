---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Companies

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/companies/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.7-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/companies.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/companies)
[![Issues](https://img.shields.io/github/issues/enso-ui/companies.svg)](https://github.com/enso-ui/companies/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/companies.svg)](https://github.com/enso-ui/companies/pulls)

## Description

Companies administration pages and tabbed company detail widgets for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/companies
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships company list, create, and edit pages for the administration module
- combines forms, accessories, tabs, addresses, comments, documents, and people widgets in the edit page
- provides reusable company detail helpers such as `PeopleCard` inside the page modules

## Usage

```js
import CompaniesIndex from '@enso-ui/companies';
import CompanyCreate from '@enso-ui/companies/src/bulma/pages/companies/Create.vue';
import CompanyEdit from '@enso-ui/companies/src/bulma/pages/companies/Edit.vue';
import PeopleCard from '@enso-ui/companies/src/bulma/pages/companies/components/PeopleCard.vue';
```

## API

### `Index`

Table page for the companies list.

Import: `@enso-ui/companies`

### `Create`

Create page for a company record.

Import: `@enso-ui/companies/src/bulma/pages/companies/Create.vue`

### `Edit`

Detail page that composes company form tabs with people, addresses, comments, and documents widgets.

Import: `@enso-ui/companies/src/bulma/pages/companies/Edit.vue`

### `PeopleCard`

Reusable card wrapper around the company people list.

Import: `@enso-ui/companies/src/bulma/pages/companies/components/PeopleCard.vue`

## Routes

### `administration/companies`

Route group:
- `administration.companies.index`
- `administration.companies.create`
- `administration.companies.edit`

Pages:
- `src/bulma/pages/companies/Index.vue`
- `src/bulma/pages/companies/Create.vue`
- `src/bulma/pages/companies/Edit.vue`

The package ships the full companies administration flow: listing, creation, and a tabbed edit screen that embeds detail widgets such as people, addresses, comments, and documents.

## Companion Backend Package

- [`laravel-enso/companies`](https://docs.laravel-enso.com/backend/companies.html) [↗](https://github.com/laravel-enso/companies)

The backend companion provides the routes, forms, tables, and tab payloads consumed by the companies frontend pages.

## Depends On

- [`@enso-ui/accessories`](https://docs.laravel-enso.com/frontend/accessories.html) [↗](https://github.com/enso-ui/accessories)
- [`@enso-ui/addresses`](https://docs.laravel-enso.com/frontend/addresses.html) [↗](https://github.com/enso-ui/addresses)
- [`@enso-ui/comments`](https://docs.laravel-enso.com/frontend/comments.html) [↗](https://github.com/enso-ui/comments)
- [`@enso-ui/documents`](https://docs.laravel-enso.com/frontend/documents.html) [↗](https://github.com/enso-ui/documents)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/companies/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/companies/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:13 AM</div>
</div>
