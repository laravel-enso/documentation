---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Audits

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/audits/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.5-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/audits)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/audits.svg)](https://www.npmjs.com/package/@enso-ui/audits)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/audits)
[![Issues](https://img.shields.io/github/issues/enso-ui/audits.svg)](https://github.com/enso-ui/audits/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/audits.svg)](https://github.com/enso-ui/audits/pulls)

## Description

Audit table pages and diff presenters for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/audits
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the audits index page used by the system route group
- renders row-level change payloads through the reusable `Diff` component
- integrates audit rows with user avatars and the backend table definition

## Usage

```js
import AuditsIndex from '@enso-ui/audits';
```

## API

### `Index`

Default export for the audits table page.

Import: `@enso-ui/audits`

### `Diff`

Inline change renderer used by the audits table.

Import: `@enso-ui/audits/src/bulma/pages/audit/components/Diff.vue`

Props:
- `event: string` audit event type.
- `changes: object` backend change payload.

## Routes

### `system/audit`

Route group:
- `system.audit.index`

Page:
- `src/bulma/pages/audit/Index.vue`

## Companion Backend Package

- [`laravel-enso/audits`](https://docs.laravel-enso.com/backend/audits.html) [↗](https://github.com/laravel-enso/audits)

The backend companion provides the audits table definition, diff payloads, and route group consumed by the page.

## Depends On

- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/audits/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/audits/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:54:21 AM</div>
</div>
