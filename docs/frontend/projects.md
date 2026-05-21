---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Projects

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://git.xtelecom.ro/enso-ui/projects)
[![Stable](https://img.shields.io/badge/stable-1.0.0-2563eb.svg)](https://git.xtelecom.ro/enso-ui/projects/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/projects)

## Description

Projects provides the Enso UI pages for generic project and flow orchestration.

The package exposes the root project workflow and the administration screens for reusable project phases, phase colors, statuses, and flows. Flow graph internals are managed contextually by the flow UI and are not exposed as standalone menu resources.

## Installation

Install the package:

```bash
yarn add @enso-ui/projects
```

In local Enso development this package is commonly consumed from the workspace:

```json
{
    "@enso-ui/projects": "file:../../enso-ui/projects"
}
```

## Features

- registers the `/projects` route group for project list, create, and edit pages
- registers the `/administration/projects` route group for project administration
- ships Enso table/form pages for projects, phase colors, phases, statuses, and flows
- provides a contextual flow configurator for phases, statuses, transitions, and preview
- keeps flow phases, flow phase statuses, and transitions out of standalone menu pages
- exports package menu icons through `src/icons.js`
- pairs with the backend `laravel-enso/projects` package for forms, tables, permissions, and menus

## Usage

```js
import projectsRoutes from '@enso-ui/projects/src/bulma/routes/projects.js';
import administrationRoutes from '@enso-ui/projects/src/bulma/routes/administration.js';
import icons from '@enso-ui/projects/src/icons.js';
```

## API

### Route modules

Common imports:

- `src/bulma/routes/projects.js`
- `src/bulma/routes/administration.js`
- `src/bulma/routes/administration/projects.js`
- `src/bulma/routes/administration/projects/phaseColors.js`
- `src/bulma/routes/administration/projects/phases.js`
- `src/bulma/routes/administration/projects/statuses.js`
- `src/bulma/routes/administration/projects/flows.js`

### Page modules

Project pages:

- `src/bulma/pages/projects/Index.vue`
- `src/bulma/pages/projects/Create.vue`
- `src/bulma/pages/projects/Edit.vue`

Administration pages:

- `src/bulma/pages/administration/projects/phaseColors/Index.vue`
- `src/bulma/pages/administration/projects/phaseColors/Create.vue`
- `src/bulma/pages/administration/projects/phaseColors/Edit.vue`
- `src/bulma/pages/administration/projects/phases/Index.vue`
- `src/bulma/pages/administration/projects/phases/Create.vue`
- `src/bulma/pages/administration/projects/phases/Edit.vue`
- `src/bulma/pages/administration/projects/statuses/Index.vue`
- `src/bulma/pages/administration/projects/statuses/Create.vue`
- `src/bulma/pages/administration/projects/statuses/Edit.vue`
- `src/bulma/pages/administration/projects/flows/Index.vue`
- `src/bulma/pages/administration/projects/flows/Create.vue`
- `src/bulma/pages/administration/projects/flows/Edit.vue`
- `src/bulma/pages/administration/projects/flows/Configure.vue`

### Icons

- `src/icons.js`

The package must export every icon referenced by backend menu structure.

## Routes

Projects ships the following named route entries:

- `projects.index`
  Path fragment: `/projects`
- `projects.create`
  Path fragment: `/projects/create`
- `projects.edit`
  Path fragment: `/projects/:project/edit`
- `administration.projects.phaseColors.index`
  Path fragment: `/administration/projects/phase-colors`
- `administration.projects.phaseColors.create`
  Path fragment: `/administration/projects/phase-colors/create`
- `administration.projects.phaseColors.edit`
  Path fragment: `/administration/projects/phase-colors/:phaseColor/edit`
- `administration.projects.phases.index`
  Path fragment: `/administration/projects/phases`
- `administration.projects.phases.create`
  Path fragment: `/administration/projects/phases/create`
- `administration.projects.phases.edit`
  Path fragment: `/administration/projects/phases/:phase/edit`
- `administration.projects.statuses.index`
  Path fragment: `/administration/projects/statuses`
- `administration.projects.statuses.create`
  Path fragment: `/administration/projects/statuses/create`
- `administration.projects.statuses.edit`
  Path fragment: `/administration/projects/statuses/:status/edit`
- `administration.projects.flows.index`
  Path fragment: `/administration/projects/flows`
- `administration.projects.flows.create`
  Path fragment: `/administration/projects/flows/create`
- `administration.projects.flows.edit`
  Path fragment: `/administration/projects/flows/:flow/edit`
- `administration.projects.flows.configure`
  Path fragment: `/administration/projects/flows/:flow/configure`

## Companion Backend Package

- [`laravel-enso/projects`](https://git.xtelecom.ro/laravel-enso/projects)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html)
- [`@enso-ui/switch`](https://docs.laravel-enso.com/frontend/switch.html)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html)

## Development

Run package validation from a consuming Enso application:

```bash
cd client
yarn build
```

The package should not commit `dist/`, `node_modules/`, or a package-level `yarn.lock`.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

MIT.

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/projects/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/7/2026, 12:55:37 PM</div>
</div>
