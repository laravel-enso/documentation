---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Tables

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/tables/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.16-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/tables)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/tables.svg)](https://www.npmjs.com/package/@enso-ui/tables)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/tables)
[![Issues](https://img.shields.io/github/issues/enso-ui/tables.svg)](https://github.com/enso-ui/tables/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/tables.svg)](https://github.com/enso-ui/tables/pulls)

## Description

Tables is the Enso UI data-grid engine.

It combines:
- a renderless request, state, and preference manager in `CoreTable`
- Bulma table presentation shells in `VueTable` and `EnsoTable`
- a large set of internal toolbar, header, body, footer, pagination, filter, and action components

The package is designed around the backend table contract exposed by `laravel-enso/tables`. The frontend does not hardcode one table schema; it receives a template and meta payload, then builds sorting, filtering, selection, export, actions, totals, hidden columns, and persisted user preferences from that contract.

## Installation

Install the package:

```bash
yarn add @enso-ui/tables
```

The package can be consumed standalone when you provide the full table contract yourself, but it is usually paired with the Laravel Enso backend package.

## Features

- exports `VueTable` and `EnsoTable` from the Bulma entrypoint
- initializes itself from a backend `initTable` endpoint and keeps read requests synchronized with the template contract
- persists table preferences such as page size, search, sort, visible columns, style, filters, intervals, params, and scenarios in `localStorage`
- supports top toolbar controls for search, search mode, filters, filter scenarios, column visibility, style selection, export, and global buttons
- supports row actions, selection, page selection, highlighting, preview rows, hidden responsive rows, totals, pagination, and record counters
- supports custom cell slots, row-action slots, global-control slots, preview slots, and custom-total slots

## Usage

Basic Enso usage:

```vue
<script setup>
import { EnsoTable } from '@enso-ui/tables/bulma';
</script>

<EnsoTable id="users" />
```

Custom cell slot:

```vue
<VueTable
    id="orders"
    :http="http"
    :path="path"
    :filters="filters"
    :intervals="intervals">
    <template #customer="{ row, loading }">
        <span :class="{ 'has-text-grey-light': loading }">
            {{ row.customer.name }}
        </span>
    </template>
</VueTable>
```

Public instance helpers:

```js
table.fetch();
table.reset();
table.highlight(rowId);
table.clearSelected();
table.selected();
```

## API

### Bulma Exports

Import from `@enso-ui/tables/bulma`.

Exported components:
- `VueTable`
- `EnsoTable`

### `VueTable`

Framework-agnostic Bulma shell around `CoreTable`.

Props:
- forwards all attrs to `CoreTable` and `TableContent`

Computed public state:
- `body`
- `slots`

Public methods:
- `fetch()`
- `reset()`
- `highlight(dtRowId)`
- `removeHighlight(dtRowId)`
- `toggleHighlight(dtRowId)`
- `clearHighlighted()`
- `selected()`
- `clearSelected()`
- `highlighted()`
- `selectable(state = true)`

Behavior:
- waits for `CoreTable` to become ready
- renders `TableContent`
- forwards all dynamic body and control slots declared by the table template

### `EnsoTable`

Application-aware shell built on top of `VueTable`.

Injected dependencies:
- `errorHandler`
- `http`
- `i18n`
- `routerErrorHandler`

Additional behavior:
- derives `path` automatically from the current route when no explicit `path` attr is provided
- proxies the same public methods exposed by `VueTable`
- is the standard table shell used in Enso applications

### `CoreTable`

Renderless engine that owns the table lifecycle, request payloads, preferences, and selection state.

Props:
- `errorHandler: Function`
- `hasFilters: boolean | null = null`
- `filters: object | null = null`
- `filterVersion: number = 1.0`
- `http: Function`
- `i18n: Function = value => value`
- `id: string`
- `initParams: object | null = null`
- `intervals: object | null = null`
- `params: object | null = null`
- `path: string`
- `routerErrorHandler: Function`

Emits:
- `ready`
- `reset`
- `fetching`
- `fetched`
- `update:filters`
- `update:intervals`
- `update:params`
- `ajax-error`
- `action-error`
- button-specific post events emitted by backend button definitions

State owned by `CoreTable`:
- `state.template`
- `state.meta`
- `state.body`
- `state.selected`
- `state.highlighted`
- `state.pageSelected`
- `state.confirmation`
- `state.filterScenarios`
- `state.expanded`
- `state.action`

Lifecycle:
1. `init()` requests the backend init payload from `path`
2. `prepare()` stores the table template and meta payload
3. `loadPreferences()` restores persisted preferences when compatible
4. `fetch()` reads the current page body using filters, intervals, params, visible columns, sort, search, and pagination

Preference persistence:
- uses `localStorage` keys derived from `id`
- stores API version, template style, meta state, visible columns, filters, intervals, params, and filter scenarios
- invalidates stale preferences when the API version, filter version, or column set changes

Public methods:
- `init()`
- `fetch()`
- `reset()`
- `request()`
- `readRequest(method, exportMode = false, selection = false)`
- `requestColumns(exportMode)`
- `exportData({ path, postEvent })`
- `ajax(method, path, postEvent)`
- `action(buttonConfig)`
- `buttonAction(button, row = null)`
- `doButtonAction()`
- `actionPath(button, dtRowId)`
- `routeParams(button, row)`
- `activeScenario()`
- `selectable(state = true)`
- `togglePageSelect()`
- `refreshPageSelected()`
- `highlight(dtRowId)`
- `removeHighlight(dtRowId)`
- `toggleHighlight(dtRowId)`
- `clearHighlighted()`
- `clearSelected()`
- `visibleColumns()`
- `invisibleColumns()`
- `visibleColumn(column)`
- `hiddenColumns()`
- `hiddenColspan()`
- `columnAlignment(column)`
- `totalFormat(value)`

Dynamic slot surface derived from the backend template:
- column slots for every column with `meta.slot`
- row-action slots for row buttons with `slot`
- global control slots for global buttons with `slot`
- `preview`
- `<column>_custom_total` for columns with `meta.customTotal`

### Request and Data Contract

The table runtime expects two backend payload shapes:

Initialization payload:
- `apiVersion`
- `template`
- `meta`

Body payload returned by `fetch()`:
- `data`
- `count`
- `fullRecordInfo`
- totals and extra body metadata, when exposed by the backend package

The request payload sent back to the server includes:
- `internalFilters`
- `filters`
- `intervals`
- `params`
- `columns`
- `meta.start`
- `meta.length`
- `meta.sort`
- `meta.search`
- `meta.forceInfo`
- `meta.searchMode`

### Table Template Responsibilities

The backend template drives all major frontend behaviors:
- table style and alignment
- column labels, visibility, slot usage, sortability, and totals
- row and global buttons
- actions and route metadata
- selectable rows
- preview rows
- responsive hidden-column expansion
- debounce, filters, search mode, and record info settings

### Internal Rendering Parts

The public shell is small, but most table behavior is implemented by internal Bulma parts:

- `TableContent` composes top controls, header, body, footer, pagination, empty state, overlay, and confirmation
- `TableHeader` renders sortable headers, tooltips, row-selection header checkbox, preview toggle column, and actions label
- `TableBody` renders normal rows, hidden child rows, row buttons, preview rows, per-cell slots, highlight classes, and row selection
- `TableFooter` renders footer totals and custom-total slots
- `Confirmation` renders row/global button confirmations before destructive actions

### Toolbar and Footer Controls

The table ships a large internal control surface:

Top controls:
- search
- search mode
- column visibility
- style selector
- length menu
- dropdown actions
- filter editor
- filter labels
- filter scenarios

Filter implementations:
- string
- number
- boolean
- enum
- date
- custom select

Bottom controls:
- pagination
- record info

### Selection, Highlighting, and Hidden Rows

Built-in row state handling includes:
- row selection and page selection
- highlighted rows by `dtRowId`
- responsive child rows when columns are hidden
- expansion state tracking in `state.expanded`

### Export and Button Actions

Buttons defined by the backend template can trigger:
- router navigation
- AJAX requests
- export requests
- custom emitted events

The frontend handles confirmation gates, request dispatch, route param extraction, post events, and loading states.

## Companion Backend Package

- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)

## Depends On

- [`@enso-ui/date`](https://docs.laravel-enso.com/frontend/date.html) [↗](https://github.com/enso-ui/date)
- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/dropdown`](https://docs.laravel-enso.com/frontend/dropdown.html) [↗](https://github.com/enso-ui/dropdown)
- [`@enso-ui/enums`](https://docs.laravel-enso.com/frontend/enums.html) [↗](https://github.com/enso-ui/enums)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/search-mode`](https://docs.laravel-enso.com/frontend/search-mode.html) [↗](https://github.com/enso-ui/search-mode)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/tables/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/tables/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 1:14:17 PM</div>
</div>
