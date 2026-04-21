---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Sentry

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/sentry/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/sentry)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/sentry.svg)](https://www.npmjs.com/package/@enso-ui/sentry)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/sentry)
[![Issues](https://img.shields.io/github/issues/enso-ui/sentry.svg)](https://github.com/enso-ui/sentry/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/sentry.svg)](https://github.com/enso-ui/sentry/pulls)
## Description
Sentry beforeSend filter for duplicate browser errors.
## Installation
Install the package:

```bash
yarn add @enso-ui/sentry
```
## Features
- filters duplicate browser exceptions before they reach Sentry
- ignores noisy chunk-loading and unhandled-rejection categories
- deduplicates repeated error signatures for five minutes
## Usage
```js
import * as Sentry from '@sentry/vue';
import reportable from '@enso-ui/sentry/src/reportable';

Sentry.init({
    app,
    beforeSend: reportable,
});
```
## API
## Companion Backend Package

- [`laravel-enso/sentry`](https://docs.laravel-enso.com/backend/sentry.html) [↗](https://github.com/laravel-enso/sentry)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/sentry/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/sentry/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:32 PM</div>
</div>
