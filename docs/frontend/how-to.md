---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# How to

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/how-to/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.4-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/how-to)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/how-to.svg)](https://www.npmjs.com/package/@enso-ui/how-to)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/how-to)
[![Issues](https://img.shields.io/github/issues/enso-ui/how-to.svg)](https://github.com/enso-ui/how-to/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/how-to.svg)](https://github.com/enso-ui/how-to/pulls)

## Description

How To ships the video library page used to manage instructional videos and their tag taxonomy inside Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/how-to
```

The package is usually consumed from the full `enso-ui` workspace inside an Enso application.

## Features

- registers the `/howTo/videos` route module
- ships a rich page for video upload, edit, tag assignment, and search
- uses uploader, confirmation, directives, card, and transition helpers to manage the editing flow
- exposes the `HowToVideo` deep-import component used by the page renderer

## Usage

```js
import howToRoute from '@enso-ui/how-to/src/bulma/routes/howTo.js';
import HowToIndex from '@enso-ui/how-to/src/bulma/pages/howTo/Index.vue';
```

## API

### Route page

Common imports:
- `@enso-ui/how-to/src/bulma/routes/howTo.js`
- `@enso-ui/how-to/src/bulma/pages/howTo/Index.vue`
- `@enso-ui/how-to/src/bulma/pages/howTo/components/HowToVideo.vue`

The package is page-oriented. The routed page handles the list, filter, upload, tagging, and edit flows for the instructional-video library.

## Routes

### `/howTo/videos`

Route name:
- `howTo.videos.index`

Page:
- `src/bulma/pages/howTo/Index.vue`

## Companion Backend Package

- [`laravel-enso/how-to`](https://docs.laravel-enso.com/backend/how-to.html) [↗](https://github.com/laravel-enso/how-to)

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/confirmation`](https://docs.laravel-enso.com/frontend/confirmation.html) [↗](https://github.com/enso-ui/confirmation)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`@enso-ui/uploader`](https://docs.laravel-enso.com/frontend/uploader.html) [↗](https://github.com/enso-ui/uploader)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/how-to/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/how-to/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:36:11 PM</div>
</div>
