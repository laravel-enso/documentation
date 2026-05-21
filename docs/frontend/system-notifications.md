---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# System Notifications

System Notifications provides Enso UI administration pages for configurable system notification definitions.

## Installation

Install the package:

```bash
yarn add @enso-ui/system-notifications
```

In local Enso development this package is commonly consumed from the workspace:

```json
{
    "@enso-ui/system-notifications": "file:../../enso-ui/system-notifications"
}
```

## Features

- registers the `/administration/system-notifications` route group
- ships Enso table/form pages for configurable system notifications under `Catalogue`
- ships an Enso table page for notification dispatch logs under `Logs`
- shows context-defined notification placeholders from the notification form
- shows available `{placeholder}` tags for the selected context
- pairs with the backend `laravel-enso/system-notifications` package for forms, tables, permissions, and menus
- exports menu icons through `src/icons.js`

## Usage

```js
import administrationRoutes from '@enso-ui/system-notifications/src/bulma/routes/administration.js';
import icons from '@enso-ui/system-notifications/src/icons.js';
```

## Routes

- `administration.systemNotifications.catalogue.index`
- `administration.systemNotifications.catalogue.create`
- `administration.systemNotifications.catalogue.edit`
- `administration.systemNotifications.logs.index`

## Logs

The logs page uses `EnsoTable` with filters for notification template, context,
channel, status, and creation date. Channel and status options come from the
backend frontend enums exposed by `laravel-enso/system-notifications`.

## Companion Backend Package

- `laravel-enso/system-notifications`

## Development

Run package validation from a consuming Enso application:

```bash
cd client
yarn build
```

The package should not commit `dist/`, `node_modules/`, or a package-level `yarn.lock`.

## License

MIT.

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/system-notifications/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/13/2026, 7:43:05 PM</div>
</div>
