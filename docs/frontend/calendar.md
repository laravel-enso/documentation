---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Calendar

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/calendar/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.1.6-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/calendar)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/calendar.svg)](https://www.npmjs.com/package/@enso-ui/calendar)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/calendar)
[![Issues](https://img.shields.io/github/issues/enso-ui/calendar.svg)](https://github.com/enso-ui/calendar/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/calendar.svg)](https://github.com/enso-ui/calendar/pulls)

## Description

Calendar page modules and event-management components for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/calendar
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the calendar page module consumed by Enso route maps
- pairs the page shell with filters, modal editing, and an embedded `vue-cal` timeline
- hides the application footer while the calendar page is active and restores it on unmount
- coordinates filter changes and event reloads through the local calendar ref

## Usage

```vue
<script>
import CalendarPage from '@enso-ui/calendar';

export default {
    components: { CalendarPage },
};
</script>
```

## API

### `Index`

Default export for the calendar page shell.

Import: `@enso-ui/calendar`

Props:
- No public props.

Events:
- No public emits.

Methods:
- `reloadEvents()` refreshes the child calendar feed and closes the active event form.

Internal page modules:
- `CalendarFilter` drives the selected date and active calendars.
- `EnsoCalendar` renders the event grid.
- `EventForm` handles create/edit/destroy flows for one event.

## Routes

### `/calendar`

Route name: `core.calendar.index`

Page:
- `src/bulma/pages/calendar/Index.vue`

The shipped route is a top-level shell route. The page itself coordinates the filter sidebar, the timeline component, and the modal event form.

## Companion Backend Package

- [`laravel-enso/calendar`](https://docs.laravel-enso.com/backend/calendar.html) [↗](https://github.com/laravel-enso/calendar)

The backend package provides the calendar/event endpoints, option feeds, and form contracts consumed by the page modules.

## Depends On

- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`vue-cal`](https://github.com/antoniandre/vue-cal)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/calendar/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/calendar/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:00 AM</div>
</div>
