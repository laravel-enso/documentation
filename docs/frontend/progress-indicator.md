---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Progress Indicator

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/progress-indicator/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-2.2.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/progress-indicator)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/progress-indicator.svg)](https://www.npmjs.com/package/@enso-ui/progress-indicator)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/progress-indicator)
[![Issues](https://img.shields.io/github/issues/enso-ui/progress-indicator.svg)](https://github.com/enso-ui/progress-indicator/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/progress-indicator.svg)](https://github.com/enso-ui/progress-indicator/pulls)
## Description
Threshold and percentage indicators for Enso UI.
## Installation
Install the package:

```bash
yarn add @enso-ui/progress-indicator
```
## Features
- exports `ProgressIndicator`, `EnhancedProgressIndicator` as its public surface
- keeps the Bulma presentation layer separate from the renderless/stateful layer where applicable
## Usage
```vue
<script setup>
import { ProgressIndicator, EnhancedProgressIndicator } from '@enso-ui/progress-indicator/bulma';
</script>
```
## API
### `ProgressIndicator`

Public export available from `./src/ProgressIndicator.vue`.

Props:
- `average`
- `averageColor`
- `barHeight`
- `barWidth`
- `emptyColor`
- `fillColor`
- `percentage`
- `spacing`
- `value`

### `EnhancedProgressIndicator`

Public export available from `./src/EnhancedProgressIndicator.vue`.

Props:
- `aboveThresholdColor`
- `average`
- `belowThresholdColor`
- `emptyIndicator`
- `percentage`
- `inverted`
- `thresholdColor`
- `tolerance`
- `value`
## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
[MIT](https://github.com/enso-ui/progress-indicator/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/progress-indicator/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:12:50 PM</div>
</div>
