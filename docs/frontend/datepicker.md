---
sidebarDepth: 3
---

# Datepicker

![npm license](https://img.shields.io/npm/l/@enso-ui/datepicker.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/datepicker.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/datepicker.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/datepicker.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/datepicker.svg) 

Vue Datepicker renderless component based on Flatpickr with a bulma template.

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/datepicker
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import { Datepicker } from '@enso-ui/datepicker/bulma';
```

## Exports

`@enso-ui/datepicker/bulma`:
- `Datepicker`,
- `EnsoDatepicker`,

`@enso-ui/datepicker/renderless`:
- `CoreDatepicker`,

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

## Usage

```js
import { Datepicker } from '@enso-ui/datepicker/bulma';

<datepicker v-model="birthday"
    week-numbers
    format="m-d-Y"/>
```

### renderless/Datepicker.vue
The component is a renderless date picker component that is meant to be built upon when creating
a specific implementation, for example with a different styling.

#### Props
- `altInput` - `boolean`, optional, default `false`, permits to show the user a readable date (as per altFormat), 
    but return something totally different to the server
- `altFormat` - `string`, optional, default `null`, alternative date format, see above  
- `disabled` - `boolean`, optional, default `false`
- `disableClear` - `boolean`, optional, default `false`, removes the clear button so the user cannot unselect the option
- `format` - `string`, optional, default 'd-m-Y'
- `locale` - `string`, optional, default `en`
- `max` - `string`, optional, default `null` - sets a high limit for the selected date
    that will be the max date that can be chosen 
- `min` - `string`, optional, default `null` - sets a low limit for the selected date
- `readonly` - `boolean`, optional, default `false`
- `time` - `boolean`, optional. If set to true, the component allows choosing the time
- `time12hr` - `boolean`, optional, default `false`. If set to true, the time will be in 12 hour format
- `timeOnly` - `boolean`, optional, default `false`. If set to true, the component allows choosing ONLY the time (no date)
- `value` - `string`, null/string/date/array, required
- `weekNumbers` - `boolean`, optional, default `false`. If set to true, 
the component also shows week numbers

::: tip Tip
The renderless component can be used to build a custom layout
:::

### Datepicker
This is the main bulma styled component and it is built upon the renderless
component `renderless/Datepicker.vue`

#### Example:
```vue
<datepicker v-model="interval.min"
    :format="format"
    :is-warning="equals"
    :locale="locale"
    :placeholder="i18n('My placeholder')"
    :max="interval.max"/>
```

#### Props

All the props from the renderless component can be used here, and, in addition:
- `placeholder` - `string`, optional, default `'Select Date'`
- `isDanger` - `boolean`, optional, default `false`
- `isWarning` - `boolean`, optional, default `false`

### EnsoDatepicker
Designed to be used within the Enso ecosystem, it uses several defaults & conventions 
requiring less configuration from the dev. 

#### Example:
```vue
<datepicker v-model="interval.min"/>
```

#### Props

All the props from the renderless respectively the base component can be used here.

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

Built around [Flatpickr](https://github.com/flatpickr/flatpickr).

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
