---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Questionnaires

[![License](https://img.shields.io/badge/license-Proprietary-4b5563.svg)](https://git.xtelecom.ro/enso-ui/questionnaires/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.1.5-2563eb.svg)](https://git.xtelecom.ro/enso-ui/questionnaires/-/tags)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://git.xtelecom.ro/enso-ui/questionnaires)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/questionnaires/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/enso-ui/questionnaires/-/merge_requests)
## Description
Questionnaire administration pages for Enso UI.
## Installation
This package is distributed as part of the private Enso UI workspace and is normally consumed from the Solarlink client bundle.
## Features
- ships route-aware page modules consumed by the Enso application shell
- covers create flows where the backend package exposes them
- covers edit flows where the backend package exposes them
- includes index/list pages backed by Enso tables, forms, or integration settings
- ships reusable page-specific building blocks through deep-import component paths
## Usage
```vue
<script setup>
import Create from '@enso-ui/questionnaires/src/bulma/pages/answers/Create.vue';
</script>
```
## API
### Route pages

The practical public surface is page-oriented and centered on the route modules shipped by the package.

Pages:
- `src/bulma/pages/answers/Create.vue`
- `src/bulma/pages/answers/Edit.vue`
- `src/bulma/pages/answers/Index.vue`
- `src/bulma/pages/qreTakes/Create.vue`
- `src/bulma/pages/qreTakes/Edit.vue`
- `src/bulma/pages/qreTakes/Index.vue`
- `src/bulma/pages/questions/Create.vue`
- `src/bulma/pages/questions/Edit.vue`
- `src/bulma/pages/questions/Index.vue`

### Reusable deep-import components

Common reusable modules exposed under `src/bulma/pages/*/components`:
- `src/bulma/pages/answers/components/BaseForm.vue`
## Routes

Questionnaires ships the following named route entries:

- `qres.answers.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/qres/answers/create.js`
- `qres.answers.edit`
  Path fragment: `:answer/edit`
  Route file: `src/bulma/routes/qres/answers/edit.js`
- `qres.answers.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/qres/answers/index.js`
- `qres.index`
  Path fragment: `/qres`
  Route file: `src/bulma/routes/qres.js`
- `qres.qreTakes.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/qres/qreTakes/create.js`
- `qres.qreTakes.edit`
  Path fragment: `:qreTake/edit`
  Route file: `src/bulma/routes/qres/qreTakes/edit.js`
- `qres.qreTakes.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/qres/qreTakes/index.js`
- `qres.questions.create`
  Path fragment: `create`
  Route file: `src/bulma/routes/qres/questions/create.js`
- `qres.questions.edit`
  Path fragment: `:question/edit`
  Route file: `src/bulma/routes/qres/questions/edit.js`
- `qres.questions.index`
  Path fragment: `/`
  Route file: `src/bulma/routes/qres/questions/index.js`
## Companion Backend Package

- [`laravel-enso/questionnaires`](https://docs.laravel-enso.com/backend/questionnaires.html) [↗](https://git.xtelecom.ro/laravel-enso/questionnaires)

## Depends On
- No additional Enso UI dependencies.
## Contributions
are welcome. Pull requests are great, but issues are good too.
Thank you to all the people who already contributed to Enso!
## License
Proprietary. See [LICENSE](https://git.xtelecom.ro/enso-ui/questionnaires/-/blob/main/LICENSE).

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/enso-ui/questionnaires/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 2:12:53 PM</div>
</div>
