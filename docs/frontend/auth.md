---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Auth

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/auth/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.13-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/auth)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/auth.svg)](https://www.npmjs.com/package/@enso-ui/auth)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/auth)
[![Issues](https://img.shields.io/github/issues/enso-ui/auth.svg)](https://github.com/enso-ui/auth/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/auth.svg)](https://github.com/enso-ui/auth/pulls)

## Description

Authentication pages, auth store helpers, and password-strength utilities for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/auth
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports `PasswordStrength` from the root package entry
- ships guest-only auth routes for login and password reset flows
- includes a Pinia auth store for login/logout state and intended-route handling
- registers the auth store bootstrap through `src/bulma/register.js`

## Usage

```js
import { PasswordStrength } from '@enso-ui/auth';
```

## API

### `PasswordStrength`

Password entropy helper component used by reset and registration forms.

Import: `@enso-ui/auth`

Props:
- `password: string`

### `auth()`

Pinia auth store.

Import: `@enso-ui/auth/src/pinia/auth.js`

Actions:
- `login()`
- `setIntendedRoute(value)`
- `setIntendedPath(value)`
- `logoutState()`
- `logout()`

### `register()`

Bootstrap helper that initializes the auth store in the Bulma shell.

Import: `@enso-ui/auth/src/bulma/register.js`

## Routes

### Guest auth pages

Route names:
- `login`
- `password.email`
- `password.reset`

Pages:
- `src/bulma/pages/auth/Login.vue`
- `src/bulma/pages/auth/password/EmailResetLink.vue`
- `src/bulma/pages/auth/password/Reset.vue`

The route module guards all three routes with a guest redirect. The package also ships the shared `Auth` layout and the reusable `AuthForm` building block.

## Backend Integration

The package expects the host Laravel application to expose the standard auth endpoints used by the form pages:
- `login`
- `password.email`
- `password.reset`
- `/api/logout`

## Depends On

- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/auth/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/auth/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:57:25 AM</div>
</div>
