---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Activity Log

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/activity-log/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.1-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/activity-log)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/activity-log.svg)](https://www.npmjs.com/package/@enso-ui/activity-log)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/activity-log)
[![Issues](https://img.shields.io/github/issues/enso-ui/activity-log.svg)](https://github.com/enso-ui/activity-log/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/activity-log.svg)](https://github.com/enso-ui/activity-log/pulls)

## Description

Activity log timeline page modules for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/activity-log
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the activity log index page used by the core router map
- renders activity entries through a timeline layout with grouped events
- ships dedicated filter and event-card components for the page shell
- is intended to run inside the Enso application shell with injected route, i18n, and store services

## Usage

```js
import ActivityLogIndex from '@enso-ui/activity-log';
```

## API

### `Index`

Default export for the activity log page.

Import: `@enso-ui/activity-log`

Props:
- No public props.

Events:
- No public emits.

Internal page modules:
- `Timeline` renders the feed container and grouped entries.
- `Filters` manages the date/user/type filters used by the page.
- `Event` renders one activity event card.

## Routes

### `/activityLog`

Route name: `core.activityLogs.index`

Page:
- `src/bulma/pages/activityLog/Index.vue`

## Backend Integration

The page expects the host application to expose the activity-log feed and filter options through the Enso shell APIs. It does not currently depend on a standalone documented backend package in this workspace.

## Depends On

- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/activity-log/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/activity-log/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 10:06:21 AM</div>
</div>
