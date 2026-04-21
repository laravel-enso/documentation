---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Forms

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/forms/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.1.10-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/forms)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/forms.svg)](https://www.npmjs.com/package/@enso-ui/forms)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/forms)
[![Issues](https://img.shields.io/github/issues/enso-ui/forms.svg)](https://github.com/enso-ui/forms/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/forms.svg)](https://github.com/enso-ui/forms/pulls)

## Description

Forms renders the backend-driven Enso form contract exposed by `laravel-enso/forms`.

The package combines:
- a renderless engine that loads the form template, tracks state, computes payloads, and submits data
- Bulma shells that render headers, sections, tabs, actions, and fields
- field components that map backend field metadata to concrete UI controls

## Installation

Install the package:

```bash
yarn add @enso-ui/forms
```

## Features

- renders full Enso forms from backend JSON templates
- exposes `VueForm` and `EnsoForm` as the main public shells
- supports standard field types such as input, select, money, date, time, switch, textarea, and wysiwyg
- supports custom field slots and custom section slots
- supports autosave, tabbed forms, undo, create/show/destroy actions, and redirect flows
- exposes public helpers for filling values, reading dirty state, showing and hiding tabs, and manipulating fields

## Usage

Basic usage with `VueForm`:

```vue
<script setup>
import { VueForm } from '@enso-ui/forms/bulma';
</script>

<VueForm
    :http="http"
    :path="route('administration.users.edit', 1)" />
```

Enso-aware usage with route and bookmark integration:

```vue
<script setup>
import { EnsoForm } from '@enso-ui/forms/bulma';
</script>

<EnsoForm :disable-state="false" />
```

## API

### Bulma Exports

Import from `@enso-ui/forms/bulma`.

Exported components:
- `VueForm`
- `EnsoForm`
- `FormField`
- `FormFieldGroup`
- `Action`
- `DateField`
- `InputField`
- `MoneyField`
- `SelectField`
- `SwitchField`
- `TextareaField`
- `TimeField`

### `VueForm`

Framework-agnostic form shell that wraps `CoreForm` and renders the standard Bulma form layout.

Responsibilities:
- fetches the backend form contract through `CoreForm`
- renders the loader skeleton while the contract is loading
- renders `FormContent`, default field slots, section slots, and action slots
- proxies the public helper methods exposed by `CoreForm`

Public methods:
- `fetch()`
- `submit()`
- `field(name)`
- `param(name)`
- `routeParam(name)`
- `fill(state)`
- `setOriginal()`
- `undo()`
- `hideTab(tab)`
- `showTab(tab)`
- `hideField(field)`
- `showField(field)`

Computed public state:
- `data`
- `formData`
- `dirty`
- `dirtyFields`
- `errors`
- `customFields`
- `customSections`

### `EnsoForm`

Application-aware shell built on top of `VueForm`.

Additional behavior:
- injects `http`, `i18n`, `route`, `errorHandler`, `routerErrorHandler`, and `toastr`
- derives `path` from the current route when none is passed through attrs
- uses Enso UI preferences to resolve the current language
- integrates with bookmarks state persistence when form state tracking is enabled
- shows success toasts after `submit` and `destroy`

Props:
- `disableState: boolean = false`

Public methods:
- all methods exposed by `VueForm`

### `CoreForm`

Renderless engine that owns the backend contract and form lifecycle.

Props:
- `disableState: boolean = false`
- `errorHandler: Function`
- `http: Function`
- `i18n: Function = key => key`
- `locale: string = 'en'`
- `params: object | null = null`
- `path: string`
- `routerErrorHandler: Function`
- `submitPath: string | null = null`
- `template: object | null = null`

Emits:
- `create`
- `destroy`
- `error`
- `loaded`
- `ready`
- `show`
- `submitting`
- `submit`
- `submitted`
- `template-fetch-error`
- `undo`

Provided helpers for descendants:
- `create`
- `customFields`
- `customSections`
- `destroy`
- `dirty`
- `disableState`
- `errorCount`
- `errorHandler`
- `errors`
- `fieldBindings`
- `fieldType`
- `focusError`
- `http`
- `i18n`
- `locale`
- `params`
- `sectionCustomFields`
- `sections`
- `show`
- `state`
- `submit`
- `tabbed`
- `tabs`
- `undo`
- `visibleSection`

Public methods:
- `fetch()`
- `submit()`
- `field(name)`
- `param(name)`
- `routeParam(name)`
- `fill(data)`
- `setOriginal()`
- `undo()`
- `hideField(fieldName, forceUpdate = true)`
- `showField(fieldName, forceUpdate = true)`
- `hideSection(section, forceUpdate = true)`
- `showSection(section, forceUpdate = true)`
- `hideTab(tab)`
- `showTab(tab)`
- `customFields()`
- `customSections()`
- `dirty()`
- `dirtyFields()`
- `errorCount(tab)`

Field type mapping:
- `input + text|number|email|password|encrypt` -> `InputField`
- `input + checkbox` -> `SwitchField`
- `input + money` -> `MoneyField`
- `select` -> `SelectField`
- `textarea` -> `TextareaField`
- `datepicker` -> `DateField`
- `timepicker` -> `TimeField`
- `wysiwyg` -> `WysiwygField`

### `FormField`

Single-field wrapper that resolves the field component automatically.

Props:
- `field: object`

Behavior:
- resolves the concrete field component through `fieldType(field)`
- wires shared props such as `errors`, `http`, `i18n`, and `locale`
- renders field labels, tooltips, validation messages, and autosave hooks

### `FormFieldGroup`

Field wrapper with addon and grouped layout support.

Props:
- `field: object`
- `hasAddons: boolean = false`
- `isGrouped: boolean = false`

Slots:
- `left`
- `right`
- default

Behavior:
- renders the same automatic field resolution as `FormField`
- adds left and right slots around the concrete control
- is useful for paired controls such as buttons, prefixes, suffixes, and grouped actions

### `Action`

Reusable button renderer used by `FormActions`.

Props:
- `button: object`
- `disabled: boolean = false`
- `loading: boolean = false`
- `tag: 'a' | 'button'`

Emits:
- `click`

Behavior:
- maps known Enso action icon names such as `check`, `plus`, `eye`, `undo`, and `trash-alt`
- renders button label and icon according to the backend action payload

### `InputField`

Standard text, number, email, password, and encrypted input renderer.

Props:
- `errors: object`
- `field: object`
- `i18n: Function`
- `tabindex: number | null = null`

Emits:
- `focus`
- `blur`
- `changed`

Behavior:
- uses numeric `v-model.number` for numeric content
- converts `encrypt` to a password input
- shows `RevealPassword` when the field allows reveal mode
- clears the field error when the model changes

### `SelectField`

Form wrapper around `@enso-ui/select`.

Props:
- `errors: object`
- `field: object`
- `http: Function | null = null`
- `i18n: Function`
- `customParams: object = {}`
- `params: object = {}`
- `pivotParams: object = {}`

Emits:
- `changed`

Public methods:
- `clear()`
- `fetch()`

Behavior:
- passes backend metadata straight to `VueSelect`
- merges field-level params with passed params
- updates `field.meta.options` after fetch

### `DateField`

Date and datetime renderer built on top of `@enso-ui/datepicker`.

Props:
- `errors: object`
- `field: object`
- `i18n: Function`
- `locale: string`
- `timeOnly: boolean = false`

Emits:
- `changed`

Public methods:
- `clear()`

Behavior:
- enables `altInput` automatically when `field.meta.altFormat` exists
- reuses the same component for time-only mode through `TimeField`

### `TimeField`

Thin wrapper around `DateField` with `timeOnly` enabled.

Behavior:
- uses the `DateField` contract
- renders time-only pickers while preserving the same backend field metadata format

### `MoneyField`

Money input built on top of `@enso-ui/money`.

Props:
- `errors: object`
- `field: object`
- `i18n: Function`
- `tabindex: number | null = null`

Emits:
- `changed`

Behavior:
- forwards backend money metadata to the `Money` component
- renders `ErrorIcon` when validation fails

### `SwitchField`

Boolean checkbox renderer built on top of `@enso-ui/switch`.

Props:
- `errors: object`
- `field: object`

Emits:
- `changed`

Behavior:
- disables itself when the backend field is disabled or readonly

### `TextareaField`

Textarea renderer for multiline fields.

Props:
- `field: object`

Emits:
- `changed`

Behavior:
- reads `errors` and `i18n` from injection
- honors `field.meta.resize`
- clears validation errors on update

### Internal Layout Components

These components are not exported from `bulma/index.js`, but they define the default form layout used by `VueForm` and `EnsoForm`:
- `FormContent` orchestrates the header, sections, tabs, and footer actions
- `FormHeader` renders the form title and subtitle block
- `FormSection` lays out rows and columns inside a section
- `FormTabs` renders tabbed forms and error counters per tab
- `FormActions` renders back, destroy, show, create, store, update, error-clear, and undo actions
- `Confirmation` renders the destroy confirmation inline

## Companion Backend Package

- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)

## Depends On

- [`@enso-ui/datepicker`](https://docs.laravel-enso.com/frontend/datepicker.html) [↗](https://github.com/enso-ui/datepicker)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/divider`](https://docs.laravel-enso.com/frontend/divider.html) [↗](https://github.com/enso-ui/divider)
- [`@enso-ui/laravel-validation`](https://docs.laravel-enso.com/frontend/laravel-validation.html) [↗](https://github.com/enso-ui/laravel-validation)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/modal`](https://docs.laravel-enso.com/frontend/modal.html) [↗](https://github.com/enso-ui/modal)
- [`@enso-ui/money`](https://docs.laravel-enso.com/frontend/money.html) [↗](https://github.com/enso-ui/money)
- [`@enso-ui/select`](https://docs.laravel-enso.com/frontend/select.html) [↗](https://github.com/enso-ui/select)
- [`@enso-ui/vue-switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/tabs`](https://docs.laravel-enso.com/frontend/tabs.html) [↗](https://github.com/enso-ui/tabs)
- [`@enso-ui/wysiwyg`](https://docs.laravel-enso.com/frontend/wysiwyg.html) [↗](https://github.com/enso-ui/wysiwyg)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/forms/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/forms/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 12:58:06 PM</div>
</div>
