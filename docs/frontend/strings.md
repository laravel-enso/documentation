---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Strings

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/strings/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/strings)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/strings.svg)](https://www.npmjs.com/package/@enso-ui/strings)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/strings)
[![Issues](https://img.shields.io/github/issues/enso-ui/strings.svg)](https://github.com/enso-ui/strings/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/strings.svg)](https://github.com/enso-ui/strings/pulls)
## Description
String helper utilities for Enso UI packages.
## Installation
Install the package:

```bash
yarn add @enso-ui/strings
```
## Features
- exports casing and slugging helpers used across Enso UI
- covers `camel`, `snake`, `slug`, `pascal`, `lcfirst`, `lcwords`, and `ucfirst`
- includes `diff()` for character-level comparisons
## Usage
```js
import { camel, lcwords, pascal, slug, snake } from '@enso-ui/strings';

slug('Sales Order');
snake('SalesOrder');
camel('sales order');
```
## API
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/strings/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/strings/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:43 PM</div>
</div>
