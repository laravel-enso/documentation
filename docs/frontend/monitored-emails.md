---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Monitored Emails

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/monitored-emails/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.3.5-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/monitored-emails)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/monitored-emails.svg)](https://www.npmjs.com/package/@enso-ui/monitored-emails)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/monitored-emails)
[![Issues](https://img.shields.io/github/issues/enso-ui/monitored-emails.svg)](https://github.com/enso-ui/monitored-emails/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/monitored-emails.svg)](https://github.com/enso-ui/monitored-emails/pulls)

## Description

Monitored Emails provides the administration routes and pages used to list, create, and edit monitored inbox definitions in Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/monitored-emails
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/administration/monitoredEmails` route group
- ships `index`, `create`, and `edit` pages
- uses the standard `EnsoTable` and `EnsoForm` administration workflow
- pairs the routed frontend shell with the backend monitored-emails package

## Usage

```js
import administrationRoutes from '@enso-ui/monitored-emails/src/bulma/routes/administration.js';
import MonitoredEmailsIndex from '@enso-ui/monitored-emails/src/bulma/pages/monitoredEmails/Index.vue';
```

## API

### Route modules

Common imports:
- `src/bulma/routes/administration.js`
- `src/bulma/routes/administration/monitoredEmails.js`

### Page modules

- `src/bulma/pages/monitoredEmails/Index.vue`
- `src/bulma/pages/monitoredEmails/Create.vue`
- `src/bulma/pages/monitoredEmails/Edit.vue`

The package is page-oriented. The routed pages are the practical public surface.

## Routes

### `/administration/monitoredEmails`
- `administration.monitoredEmails.index`
- `administration.monitoredEmails.create`
- `administration.monitoredEmails.edit`

## Companion Backend Package

- [`laravel-enso/monitored-emails`](https://docs.laravel-enso.com/backend/monitored-emails.html) [↗](https://github.com/laravel-enso/monitored-emails)

## Depends On

- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/monitored-emails/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/monitored-emails/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:04:44 PM</div>
</div>
