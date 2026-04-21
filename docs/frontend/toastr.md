---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Toastr

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/toastr/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/toastr)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/toastr.svg)](https://www.npmjs.com/package/@enso-ui/toastr)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/toastr)
[![Issues](https://img.shields.io/github/issues/enso-ui/toastr.svg)](https://github.com/enso-ui/toastr/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/toastr.svg)](https://github.com/enso-ui/toastr/pulls)
## Description
Imperative toast notification service for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/toastr
```
## Features
- exports an imperative singleton for success, warning, info, and error notifications
- creates and mounts the Bulma notification container lazily
- supports chaining title, icon, duration, and HTML options
## Usage
```js
import toastr from '@enso-ui/toastr';

toastr.success('Saved');
toastr.title('Done').info('Profile updated');
```
## API
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/toastr/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/toastr/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:18:18 PM</div>
</div>
