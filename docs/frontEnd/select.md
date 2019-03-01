---
sidebarDepth: 3
---

# Select

![NPM License](https://img.shields.io/npm/l/@enso-ui/select.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/select.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/select.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/select.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/select.svg)

Vue Select Component

## Usage

Unless where specified otherwise, the components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/select
```
Import the desired component(s):
```js
import { VueSelect, EnsoSelect } from '@enso-ui/select/bulma';
import VueSelect from '@enso-ui/select/renderless';
```

### Exports

`@enso-ui/card/renderless`:
- `VueSelect`,

`@enso-ui/card/bulma`:
- `VueSelect`,
- `EnsoSelect`,

### bulma/VueSelect.vue

This is the main component. It can optionally have:

Example:
```vue
<vue-select :source="route('administration.users.options')"
    v-model="myModel"
    label="email"/>
```

Properties:
- `hasError` - `boolean`, optional, default `false`, if true, the element has an 'error' style.
- `labels` - `Object`, optional, if true, the labels for the various states and options. The following 
attributes are expected: `select`, `deselect`, `noOptions`, `noResults`, `addTag`
- `placeholder` - `string`, optional, default `false`, if true, the destruction of the card is handled
differently, so that transitions work correctly even when closing a card.

'Passed-through' properties:
- `customParams` - `Object`, optional, default `null`, any params that are sent with the back-end request in server-side mode.
They are to be implemented by the developer
- `debounce` - `number`, optional, default `300`, the debounce interval in ms
- `disableClear` - `boolean`, optional, default `false`, disables the clear button and for a single-select, forces the user
to always have an option selected
- `disabled` - `boolean`, optional, default `false`, if true, the control is disabled
- `errorHandler` - `Function`, optional, by default the error is thrown, a method for handling any errors
- `i18n` - `Function`, optional, default `v => v`, a translation method
- `label` - `string`, optional, default `name`, the attribute that is to be used as label from the result/options list
- `paginate` - `number`, optional, default `100`, the results pagination size
- `multiple` - `boolean`, optional, default `false`, if true, the select works in multi-select mode
- `objects` - `boolean`, optional, default `false`, if true, the bound v-model will hold the entire object 
- `params` - `Object`, optional, default `null`, params that are sent with the back-end request in server-side mode and 
when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering the entire object 
- `pivotParams` - `Object`, optional, default `null`, params that are sent with the back-end request in server-side mode and 
when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering in pivot type scenarios
- `readonly` - `boolean`, optional, default `false`, if true, the select is read only
- `source` - `string`, optional, default `null`, the URI for the server-side mode 
- `taggable` - `boolean`, optional, default `false`, if true, tagging is enabled
- `trackBy` - `string`, optional, default `id`, the attribute used for tracking and also the attribute that is bound to the 
control's v-model
- `translated` - `boolean`, optional, default `false`, if true, labels are translated used the translation function
- `value` - optional, default `[] | null`, the starting value of the control


Slots:
- `selection`, any customization of the selection goes here
- `options`, customization of the option list goes here

### bulma/EnsoSelect.vue

This bulma styled tabs component built on top of its base version is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev. 


Example:
```vue
<enso-select source="administration.userGroups.options"
    v-model="myModel"
    label="name"/>
```

Properties:
- `source` - `string`, optional, default `null`, the named route used for the server-side mode of the component

'Passed-through' properties:
- `hasError` - `boolean`, optional, default `false`, if true, the element has an 'error' style.
- `labels` - `Object`, optional, if true, the labels for the various states and options. The following 
attributes are expected: `select`, `deselect`, `noOptions`, `noResults`, `addTag`
- `placeholder` - `string`, optional, default `false`, if true, the destruction of the card is handled
differently, so that transitions work correctly even when closing a card.

### renderless/VueSelect.vue

The renderless version of the select component.

Properties:
 - `customParams` - `Object`, optional, default `null`, any params that are sent with the back-end request in server-side mode.
 They are to be implemented by the developer
 - `debounce` - `number`, optional, default `300`, the debounce interval in ms
 - `disableClear` - `boolean`, optional, default `false`, disables the clear button and for a single-select, forces the user
 to always have an option selected
 - `disabled` - `boolean`, optional, default `false`, if true, the control is disabled
 - `errorHandler` - `Function`, optional, by default the error is thrown, a method for handling any errors
 - `i18n` - `Function`, optional, default `v => v`, a translation method
 - `label` - `string`, optional, default `name`, the attribute that is to be used as label from the result/options list
 - `paginate` - `number`, optional, default `100`, the results pagination size
 - `multiple` - `boolean`, optional, default `false`, if true, the select works in multi-select mode
 - `objects` - `boolean`, optional, default `false`, if true, the bound v-model will hold the entire object 
 - `params` - `Object`, optional, default `null`, params that are sent with the back-end request in server-side mode and 
 when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering the entire object 
 - `pivotParams` - `Object`, optional, default `null`, params that are sent with the back-end request in server-side mode and 
 when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering in pivot type scenarios
 - `readonly` - `boolean`, optional, default `false`, if true, the select is read only
 - `source` - `string`, optional, default `null`, the URI for the server-side mode 
 - `taggable` - `boolean`, optional, default `false`, if true, tagging is enabled
 - `trackBy` - `string`, optional, default `id`, the attribute used for tracking and also the attribute that is bound to the 
 control's v-model
 - `translated` - `boolean`, optional, default `false`, if true, labels are translated used the translation function
 - `value` - optional, default `[] | null`, the starting value of the control

Events:
- `input`, when the selection is updated
- `deselect`, when an item is deselected
- `add-tag`, when a tag is added

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/dropdown-indicator`
- `@enso-ui/loader`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
