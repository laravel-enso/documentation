---
sidebarDepth: 3
---

# Datepicker

![npm license](https://img.shields.io/npm/l/@enso-ui/datepicker.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/datepicker.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/datepicker.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/datepicker.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/datepicker.svg) 

Vue Datepicker component based on Flatpickr

## Usage
All components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/datepicker
```
Import the desired component(s):
```js
import { Datepicker } from '@enso-ui/datepicker/bulma';
```

## Exports

`@enso-ui/datepicker/bulma`:
- `Datepicker`,

`@enso-ui/datepicker/renderless`:
- `Datepicker`,

### bulma/Datepicker.vue
This is the main bulma styled component and it is built upon the renderless
component `renderless/Datepicker.vue`

Example:
```vue
<datepicker v-model="interval.min"
    :format="format"
    :is-warning="equals"
    :locale="locale"
    :placeholder="i18n('My placeholder')"
    :max="interval.max"
    @input="update"/>
```

Properties:
- `placeholder` - `string`, optional, default 'Select Date',
- `disabled` - `boolean`, optional, default `false`. If set to true, the component is disabled 
- `isDanger` - `boolean`, optional, default `false`. If set to true, the component is styled so as to suggest a warning state 
- `isWarning` - `boolean`, optional, default `false`. If set to true, the component is styled so as to suggest a danger/error state

'Passed-through' properties:
- `format` - `string`, optional, default 'd-m-Y', the date format
- `locale` - `string`, optional, default `en`. If set to true, the component is disabled 
- `max` - `string`, optional, default `null`. If given, 
that will be the max date that can be chosen 
- `min` - `string`, optional, default `null`. If given, 
that will be the minimum date that can be chosen  
- `time` - `boolean`, optional, default `false`. If set to true, 
the component allows choosing the time
- `timeOnly` - `boolean`, optional, default `false`. If set to true, 
the component allows choosing ONLY the time (no date)
- `value`, `null|string|Date|Array`, required. This is the value the datepicker starts with
- `weekNumbers` - `boolean`, optional, default `false`. If set to true, 
the component also shows week numbers

### renderless/Datepicker.vue
The component is a renderless date picker component that is meant to be built upon when creating
a specific implementation, for example with a different styling.

Properties:
- `format` - `string`, optional, default 'd-m-Y', the date format
- `locale` - `string`, optional, default `en`. If set to true, the component is disabled 
- `max` - `string`, optional, default `null`. If given, 
that will be the max date that can be chosen 
- `min` - `string`, optional, default `null`. If given, 
that will be the minimum date that can be chosen  
- `time` - `boolean`, optional, default `false`. If set to true, 
the component allows choosing the time
- `timeOnly` - `boolean`, optional, default `false`. If set to true, 
the component allows choosing ONLY the time (no date)
- `value`, `null|string|Date|Array`, required. This is the value the datepicker starts with
- `weekNumbers` - `boolean`, optional, default `false`. If set to true, 
the component also shows week numbers

Methods:
- `init()`, initializes the component
- `clear()`, clears the selected date
- `destroy()`, destroys the Flatpickr instance used under the hood
- `reset()`, destroys the Flatpickr instance and recreates it

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `bulma`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `vue`
- `v-tooltip`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
