---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Route Mapper

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/route-mapper/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.0-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/route-mapper)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/route-mapper.svg)](https://www.npmjs.com/package/@enso-ui/route-mapper)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/route-mapper)
[![Issues](https://img.shields.io/github/issues/enso-ui/route-mapper.svg)](https://github.com/enso-ui/route-mapper/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/route-mapper.svg)](https://github.com/enso-ui/route-mapper/pulls)
## Description
Client-side route mapper for Enso UI applications.
## Installation
Install the package:

```bash
yarn add @enso-ui/route-mapper
```
## Features
- maps Laravel route manifests to client-side URLs
- supports parameter substitution and absolute/relative URL generation
- throws explicit errors when required route params are missing
## Usage
```js
import RouteMapper from '@enso-ui/route-mapper';

const route = new RouteMapper(window.location.origin, routes);
route.get('administration.users.edit', { user: 1 });
```
## API
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/route-mapper/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/route-mapper/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:13:13 PM</div>
</div>
