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

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

Can be used with its backend [sibling](https://github.com/laravel-enso/Select)

## Installation

Install the package:
```
yarn add @enso-ui/select
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/select/bulma`:
- `EnsoSelect`
- `VueSelect`
- `Tag`
`@enso-ui/select`:
- `CoreSelect`

## Usage

Import the desired component(s):
```js
import { VueSelect, Tag, EnsoSelect } from '@enso-ui/select/bulma';
import CoreSelect from '@enso-ui/select/renderless';
```

### CoreSelect

The renderless version of the select component.

Properties:
- `customParams` - `object`, optional - any params that are sent with the back-end request in server-side mode. They are to be implemented by the developer
- `debounce` - `number`, optional, default `300` - the debounce interval for fetching server-side data, in ms
- `disableClear` - `boolean`, optional, default `false` - disables the clear button and for a single-select, forces the user
to always have an option selected
- `disabled` - `boolean`, optional - if true, the control is disabled
- `errorHandler` - `Function`, optional - a method for handling axios errors
- `i18n` - `Function`, optional - method that handles localisation
- `label` - `string`, optional, default `name` - the attribute that is to be used as label from the result/options list
- `paginate` - `number`, optional, default `100` - the results pagination size
- `multiple` - `boolean`, optional - if true, the select works in multi-select mode
- `objects` - `boolean`, optional - if true, the bound v-model will hold the entire object 
- `options` - `array`, optional - if given, will constitute the list of options 
- `params` - `object`, optional - params that are sent with the back-end request in server-side mode and when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering the entire object 
- `pivotParams` - `object` - params that are sent with the back-end request in server-side mode and 
when paired with the Laravel-Enso/VueSelect back-end, are used automatically for filtering in pivot type scenarios
- `readonly` - `boolean`, optional - if true, the select is read only
- `source` - `string`, optional - the URI for the server-side mode 
- `taggable` - `boolean`, optional - if true, tagging is enabled
- `trackBy` - `string`, optional, default `id` - the attribute used for tracking and also the attribute that is bound to the 
control's v-model
- `translated` - `boolean`, optional - if true, labels are translated used the translation function
- `value` - `object/primitive/array`, optional, default `[]`/`null`, the value of the current choice / component

#### Events:
- `fetch`, when the option list has been received
- `input`, when the selection is updated
- `select`, when an item is selected
- `deselect`, when an item is deselected
- `selection`, when the selection changes, payload is the current selection
- `clear`, when the selection is cleared
- `add-tag`, when a tag is added

::: tip
When operation in server-side mode, in cases when there are concurrent fetch requests, the previous
request is cancelled.
:::

### Tag

Helper component as used by VueSelect, for optional use within CoreSelect.

Properties:
 - `label` - `string`, required - label displayed within the tag
 - `disabled` - `boolean`, required - if true, hides the delete _button_

#### Events:
- `deselect`, when the tag is _deleted_

### VueSelect

This is the main component built around the renderless component.

#### Example:
```vue
<vue-select :source="route('administration.users.options')"
    v-model="myModel"
    label="email"
    track-by="id"/>
```

#### Props

All the props from `CoreSelect` can be provided here

- `hasError` - `boolean`, optional, default `false` - if true, the element has an 'error' style.
- `labels` - `object`, optional - the labels for the various states and options. 
    The following  properties are expected: `select`, `deselect`, `noOptions`, `noResults`, `addTag`
- `placeholder` - `string`, optional, default `'Pick an option'`

#### Slots
- `selection`, any customization of the selection goes here
- `options`, customization of the option list goes here
- `option`, customization of the individual option goes here

#### Methods
The following CoreSelect options are cascaded and available:
- `clear()`, clears the selection
- `fetch()`, reloads the option list for a server-side select

### EnsoSelect

Designed to be used within the **Enso ecosystem**, requiring less configuration from the dev. 


#### Example:
```vue
<enso-select source="administration.userGroups.options"
    v-model="myModel"
    label="name"/>
```

#### Props

All the props from `VueSelect` can be provided here

#### Slots
- `option`, customization of the individual option goes here

#### Methods
The following VueSelect options are cascaded and available:
- `clear()`, clears the selection
- `fetch()`, reloads the option list for a server-side select

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
