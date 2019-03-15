---
sidebarDepth: 3
---

# Form

![NPM License](https://img.shields.io/npm/l/@enso-ui/forms.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/forms.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/forms.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/forms.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/forms.svg)

Vue Form Package

## Usage

Unless where specified otherwise, the components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/forms
```
Import the desired forms(s):
```js
import { EnsoForm, VueForm } from '@enso-ui/forms/bulma';
```

### Exports

`@enso-ui/forms/bulma`:
- `VueForm`,
- `EnsoForm`,
- `DateField`,
- `InputField`,
- `MoneyField`,
- `SelectField`,
- `SwitchField`,
- `TextareaField`,
- `TimeField`,

`@enso-ui/forms/renderless`:
- `VueForm`,

### bulma/EnsoForm.vue

This bulma styled form component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

Example 1:
```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"/>
```

Example 2:
```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"
    :path="route('system.menus.edit', 1, false)"/>
```

Example 3:
```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"
    path="/api/system/menus/2/edit"/>
```

Properties:
- `path` - `string`, optional, default `...`, the URI for the form data/template.
If no path is given, the component attempts to use the current route to determine the correct URI.

'Passed-through' properties: 
- the EnsoForm component can also take the VueForm component's properties
which you may find below.

### bulma/VueForm.vue

The bulma styled form component built on top of the renderless version of the component.

Example:
```vue
<vue-form
    path="/api/system/menus/2/edit"/>
```

Methods:
- `fetch()`, fetches the form data & template from the back-end
- `field(field)`, returns the field with the given name
- `param(field)`, returns the parameter with the given name
- `routeParam(field)`, returns the route parameter with the given name

'Passed-through' properties: 
- the VueForm component can also take the DataProvider component's properties
which you may find below.

Slots:
- if any fields are marked as custom fields in the form template, then a slot is rendered for each of these
fields. The name of the slot is the field's name.  

### renderless/DataProvider

A renderless data provider component.

Properties:
- `path` - `string`, required, the URI for the form data/template.
- `errorHandler` - `function`, optional, an error handling function. By default any errors are thrown.
- `params` - `object`, optional, default `null`, parameters that get sent to the backend when fetching the form data


### bulma/DateField.vue

Bulma styled form date field.

Example:
```vue
<date-field time-only
    v-on="$listeners"
    v-bind="$attrs"/>
```

Properties:
- `errors` - `Object`, required, the form errors object
- `field` - `Object`, required, the form field object
- `i18n`, `Function`, required, the function that performs translations
- `locale` - `string`, required, the locale used for the picker
- `timeOnly` - `boolean`, optional, default `false`, if true, the field operates as a timepicker

Events:
- `update`, is emitted on the datepicker's keydown

### bulma/InputField.vue

Bulma styled form input field.

Example:
```vue
<input-field 
    :errors="errors"
    :field="field"
    :i18n="i18n"
    @input="myName = $event.target.value"/>
```

Properties:
- `errors` - `Object`, required, the form errors object
- `field` - `Object`, required, the form field object
- `i18n`, `Function`, required, the function that performs translations

Events:
- `update`, is emitted on the input's keydown

### bulma/MoneyField.vue

Bulma styled form money input field.

Example:
```vue
<money-field 
    :errors="errors"
    :field="field"
    :i18n="i18n"
    @input="myCustomAmount = $event.target.value"/>
```

Properties:
- `errors` - `Object`, required, the form errors object
- `field` - `Object`, required, the form field object
- `i18n`, `Function`, required, the function that performs translations

Events:
- `update`, is emitted on the input's keydown

### bulma/SelectField.vue

Bulma styled form select field.

Example:
```vue
<select-field 
    :errors="errors"
    :field="field"
    :i18n="i18n"
    @input="pivotParams.userGroups.id = $event"/>
```

Properties:
- `errors` - `Object`, required, the form errors object
- `field` - `Object`, required, the form field object
- `i18n`, `Function`, required, the function that performs translations
- `customParams` - `Object`, optional, default `{}`, any params that are sent with the back-end request in server-side select mode.
 They are to be implemented by the developer
- `params` - `Object`, optional, default `{}`, params that are sent with the back-end request in server-side select mode and 
 when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering the entire object 
- `pivotParams` - `Object`, optional, default `{}`, params that are sent with the back-end request in server-side select mode and 
 when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering in pivot type scenarios

### bulma/SwitchField.vue

Bulma styled form switch field.

Example:
```vue
<switch-field 
    :errors="errors"
    :field="field"/>
```

Properties:
- `errors` - `Object`, required, the form errors object
- `field` - `Object`, required, the form field object

Events:
- `update`, is emitted when clicking the component

### bulma/TextareaField.vue

Bulma styled form textarea field.

Example:
```vue
<textarea-field 
    :field="field"/>
```

Properties:
- `field` - `Object`, required, the form field object

### bulma/TimeField.vue

Bulma styled form time field.

Example:
```vue
<time-field 
    v-on="$listeners"
    v-bind="$attrs"/>
```

'Passed-through' properties: 
- the TimeField component can also take the DateField component's properties
which you may find above.

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/datepicker`,
- `@enso-ui/directives`,
- `@enso-ui/divider`,
- `@enso-ui/modal`,
- `@enso-ui/money`,
- `@enso-ui/select`,
- `@enso-ui/switch`,
- `@enso-ui/tabs`,
- `@fortawesome/fontawesome-free`,
- `@fortawesome/fontawesome-svg-core`,
- `@fortawesome/free-solid-svg-icons`,
- `@fortawesome/vue-fontawesome`,
- `accounting-js`,
- `bulma`,
- `dropzone`,
- `lodash`,
- `tiptap`,
- `tiptap-extensions`,
- `v-tooltip`,
- `vue`,
- `vuex`,

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
