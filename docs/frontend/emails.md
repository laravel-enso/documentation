---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Emails

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/emails/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.0.10-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/emails)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/emails.svg)](https://www.npmjs.com/package/@enso-ui/emails)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/emails)
[![Issues](https://img.shields.io/github/issues/enso-ui/emails.svg)](https://github.com/enso-ui/emails/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/emails.svg)](https://github.com/enso-ui/emails/pulls)

## Description

Emails provides the Enso UI pages and editor components used to draft, edit, schedule, and send email messages.

The package is page-oriented and centers on the reusable `EmailForm`, which coordinates recipients, send targets, priorities, scheduling, message body, and attachments.

## Installation

Install the package:

```bash
yarn add @enso-ui/emails
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships the `/emails` route group with index, create, and edit pages
- exposes the reusable `EmailForm` editor and its helper components
- supports recipient selection, send-target switching, priority selection, scheduling, and file attachments
- plugs into backend-driven table and form flows for email records

## Usage

```js
import EmailsIndex from '@enso-ui/emails';
import EmailCreate from '@enso-ui/emails/src/bulma/pages/emails/Create.vue';
import EmailEdit from '@enso-ui/emails/src/bulma/pages/emails/Edit.vue';
import EmailForm from '@enso-ui/emails/src/bulma/pages/emails/components/EmailForm.vue';
```

## API

### `Index`

Default export for the email list page.

Import: `@enso-ui/emails`

### `Create`

Draft-creation page that seeds a new email model and renders `EmailForm`.

Import: `@enso-ui/emails/src/bulma/pages/emails/Create.vue`

### `Edit`

Edit page that loads an existing email record and passes it to `EmailForm`.

Import: `@enso-ui/emails/src/bulma/pages/emails/Edit.vue`

### `EmailForm`

Reusable email editor.

Import: `@enso-ui/emails/src/bulma/pages/emails/components/EmailForm.vue`

Props:
- `email: object` required

Events:
- `submit`
- `submission-error`
- `cancel`

## Routes

### `/emails`

Route names:
- `emails.index`
- `emails.create`
- `emails.edit`

Pages:
- `src/bulma/pages/emails/Index.vue`
- `src/bulma/pages/emails/Create.vue`
- `src/bulma/pages/emails/Edit.vue`

The route group exposes the full emails module: listing, drafting, and editing scheduled or sent messages.

## Depends On

- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/dropdown`](https://docs.laravel-enso.com/frontend/dropdown.html) [↗](https://github.com/enso-ui/dropdown)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/emails/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/emails/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 11:54:31 AM</div>
</div>
