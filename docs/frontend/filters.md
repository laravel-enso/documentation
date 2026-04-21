---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Filters

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/filters/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.3.6-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/filters)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/filters.svg)](https://www.npmjs.com/package/@enso-ui/filters)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/filters)
[![Issues](https://img.shields.io/github/issues/enso-ui/filters.svg)](https://github.com/enso-ui/filters/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/filters.svg)](https://github.com/enso-ui/filters/pulls)

## Description

Filters provides the interactive filter widgets used across Enso tables, dashboards, and list pages.

The package is split into two layers:
- Bulma UI components such as `InputFilter`, `DateFilter`, and `SelectFilter`
- renderless primitives such as `FilterState`, `CoreInputFilter`, `CoreDateFilter`, and `CoreIntervalFilter`

The Bulma layer gives you ready-made controls. The renderless layer exposes bindings, events, and state so you can build custom filter interfaces on top of the same contract.

## Installation

Install the package:

```bash
yarn add @enso-ui/filters
```

## Features

- exports dedicated filter components for text, date, interval, select, toggle, and boolean use cases
- includes Enso-aware wrappers that inject app-level translation and select behavior
- persists filter state through `FilterState`
- exposes date interval helpers for quick presets such as today, this week, next month, and custom ranges
- supports compact toolbar-style rendering and full panel rendering

## Usage

Basic text and date filters:

```vue
<script setup>
import { DateFilter, InputFilter } from '@enso-ui/filters/bulma';
</script>

<InputFilter
    v-model="filters.query"
    name="Query"
    label="Search" />

<DateFilter
    :filter="filters.created_at.filter"
    :interval="filters.created_at.interval"
    name="Created At"
    @update:filter="filters.created_at.filter = $event"
    @update:interval="filters.created_at.interval = $event" />
```

Persisting a filter bag:

```vue
<filter-state
    :api-version="1"
    :filters="filters"
    :intervals="intervals"
    name="orders.filters"
    @ready="load"
    @state-updated="dirty = $event" />
```

## API

### Bulma Exports

Import from `@enso-ui/filters/bulma`.

Exported components:
- `InputFilter`
- `IntervalFilter`
- `DateFilter`
- `SelectFilter`
- `ToggleFilter`
- `BooleanFilter`
- `VueFilter`
- `EnsoFilter`
- `EnsoInputFilter`
- `EnsoIntervalFilter`
- `EnsoDateFilter`
- `EnsoSelectFilter`
- `EnsoToggleFilter`

### `InputFilter`

Single-value input filter built on top of `CoreInputFilter`.

Props:
- `compact: boolean = false`
- `i18n: Function = value => value`
- `label: string = ''`
- `name: string | null = null`
- passes additional attrs such as `modelValue`, `type`, `min`, `max`, and `step` to `CoreInputFilter`

Rendered behavior:
- shows the header when `compact` is disabled
- shows a clear button when `modelValue` is not empty
- translates the header and placeholder through `i18n`

### `IntervalFilter`

Two-ended min/max filter for numeric or lexical ranges.

Props:
- `compact: boolean = false`
- `i18n: Function = value => value`
- `minLabel: string = 'Min'`
- `maxLabel: string = 'Max'`
- `name: string | null = null`
- passes `modelValue` and `type` to `CoreIntervalFilter`

Slot contract inherited from `CoreIntervalFilter`:
- `modelValue`
- `invalid`
- `minBindings`
- `maxBindings`
- `minEvents`
- `maxEvents`
- `minClearEvents`
- `maxClearEvents`

### `DateFilter`

Preset and custom date interval filter.

Props:
- `altFormat: string | null = null`
- `altInput: boolean = false`
- `compact: boolean = false`
- `i18n: Function = value => value`
- `name: string | null = null`
- passes `filter`, `interval`, `future`, `excluded`, `direction`, `format`, `locale`, and `weekStartsOn` to `CoreDateFilter`

Behavior:
- displays quick presets such as today, yesterday, this week, this month, and custom
- optionally toggles between past and future ranges when `direction` is enabled
- exposes two datepickers for custom intervals

### `SelectFilter`

Bulma wrapper around `@enso-ui/select`.

Props:
- `compact: boolean = false`
- `i18n: Function = value => value`
- `name: string | null = null`
- forwards the rest of its attrs to `VueSelect`

Public methods:
- `clear()`
- `fetch()`

### `ToggleFilter`

Binary or tri-state toggle rendered as a single switch-style tab.

Props:
- `compact: boolean = false`
- `i18n: Function = value => value`
- `readonly: boolean = false`
- `translatable: boolean = false`
- `label: string | null = null`
- `name: string | null = null`
- `modelValue: boolean | null`

Emits:
- `update:modelValue`
- `change`

### `BooleanFilter`

Preconfigured `VueFilter` with success and danger icons for true/false values.

Props:
- `numeric: boolean = false`

Behavior:
- emits boolean values by default
- emits `1` and `0` when `numeric` is enabled

### `VueFilter`

Generic option-tab filter used by `BooleanFilter` and custom multi-option filters.

Props:
- `compact: boolean = false`
- `hideOff: boolean = false`
- `i18n: Function = value => value`
- `icons: boolean = false`
- `offLabel: string = ''`
- `options: Array = []`
- `readonly: boolean = false`
- `name: string | null = null`
- `multiple: boolean = false`
- `modelValue`

Behavior:
- supports single and multi-select models
- supports icon mode and text mode
- renders a power-off tab to clear the current value unless `hideOff` is enabled

### Enso Wrappers

The Enso wrappers keep the same visual contracts as the base Bulma components, but wire them to app-level providers:
- `EnsoFilter` injects `i18n` into `VueFilter`
- `EnsoInputFilter` injects `i18n` into `InputFilter`
- `EnsoIntervalFilter` injects `i18n` into `IntervalFilter`
- `EnsoToggleFilter` injects `i18n` into `ToggleFilter`
- `EnsoSelectFilter` swaps `VueSelect` for `EnsoSelect` and keeps `clear()` / `fetch()`
- `EnsoDateFilter` reads locale and display format from Enso Pinia stores and enables `altInput` by default

### Renderless Primitives

#### `FilterState`

Persistent state container for filters, intervals, and extra params.

Props:
- `apiVersion: number`
- `filters: object | null`
- `intervals: object | null`
- `name: string`
- `params: object | null`

Emits:
- `ready`
- `state-updated`

Behavior:
- persists state to `localStorage` under `name`
- restores only states created for the same `apiVersion`
- exposes a `reset()` method that clears stored state and restores defaults

#### `CoreInputFilter`

Renderless primitive for a single scalar input.

Props:
- `modelValue: number | string | null`
- `type: string = 'text'`
- `min: number | null = null`
- `max: number | null = null`
- `step: number | null = null`

Emits:
- `update:modelValue`

Slot props:
- `modelValue`
- `bindings`
- `events`
- `clearEvents`

#### `CoreDateFilter`

Renderless preset and custom date interval engine.

Props:
- `direction: boolean = false`
- `excluded: string[] = []`
- `filter: string`
- `format: string = 'Y-m-d H:i:s'`
- `future: boolean = false`
- `interval: { min: string | null, max: string | null }`
- `locale: string = 'en'`
- `weekStartsOn: number = 1`

Emits:
- `update:filter`
- `update:interval`

Slot props:
- `backEvents`
- `custom`
- `direction`
- `directionBindings`
- `directionEvents`
- `filter`
- `filters`
- `filterEvents(filter)`
- `minBindings`
- `minEvents`
- `maxBindings`
- `maxEvents`

#### `CoreIntervalFilter`

Renderless min/max primitive.

Props:
- `modelValue: { min: string | number | null, max: string | number | null }`
- `type: string = 'number'`

Emits:
- `change`
- `update:modelValue`

Slot props:
- `invalid`
- `modelValue`
- `minBindings`
- `minEvents`
- `maxBindings`
- `maxEvents`
- `minClearEvents`
- `maxClearEvents`

## Depends On

- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/strings`](https://docs.laravel-enso.com/frontend/strings.html) [↗](https://github.com/enso-ui/strings)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/filters/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/filters/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:58:06 PM</div>
</div>
