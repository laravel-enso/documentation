---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Notifications

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/notifications/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.2.8-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/notifications)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/notifications.svg)](https://www.npmjs.com/package/@enso-ui/notifications)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/notifications)
[![Issues](https://img.shields.io/github/issues/enso-ui/notifications.svg)](https://github.com/enso-ui/notifications/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/notifications.svg)](https://github.com/enso-ui/notifications/pulls)

## Description

Notifications provides the routed notifications page, navbar dropdown, and settings widget used by Enso UI applications.

## Installation

Install the package:

```bash
yarn add @enso-ui/notifications
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/core/notifications/index` page route
- ships a navbar dropdown that fetches, reads, and marks notifications as read
- includes a settings widget for toast position selection
- exports `register.js` to wire navbar and settings items into the host app

## Usage

```js
import notificationsRoute from '@enso-ui/notifications/src/bulma/routes/notifications.js';
import registerNotifications from '@enso-ui/notifications/src/bulma/register.js';
```

## API

### Route and registration modules

Common imports:
- `src/bulma/routes/notifications.js`
- `src/bulma/register.js`

### Navbar component

`src/bulma/components/navbar/Notifications.vue`
- wraps the core renderless notifications controller
- renders unread count, dropdown items, and mark-all-as-read actions

### Settings component

`src/bulma/components/settings/ToastrPosition.vue`
- renders the toastr-position selector through the dropdown package
- uses the core settings controller to update the preferred position

## Routes

### `/core/notifications/index`

Route name:
- `core.notifications.index`

## Companion Backend Package

- [`laravel-enso/notifications`](https://docs.laravel-enso.com/backend/notifications.html) [↗](https://github.com/laravel-enso/notifications)

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/dropdown`](https://docs.laravel-enso.com/frontend/dropdown.html) [↗](https://github.com/enso-ui/dropdown)
- [`@enso-ui/toastr`](https://docs.laravel-enso.com/frontend/toastr.html) [↗](https://github.com/enso-ui/toastr)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/notifications/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/notifications/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:04:44 PM</div>
</div>
