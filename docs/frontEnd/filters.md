---
sidebarDepth: 3
---

# Dropdown Filters

![npm license](https://img.shields.io/npm/l/@enso-ui/filters.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/filters.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/filters.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/filters.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/filters.svg) 

Renderless Vue Filter Components with a Bulma implementation

## Usage

Unless where specified otherwise, the components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/filters
```
Import the desired component(s):
```js
import { IntervalFilter, DateFilter, ... } from '@enso-ui/filters/bulma';
import { IntervalFilter, DateFilter, ... } from '@enso-ui/filters/renderless';
```

### Exports

`@enso-ui/filters/bulma`:
- `IntervalFilter`,
- `DateFilter`,
- `DateIntervalFilter`,
- `VueFilter`,
- `BooleanFilter`,
- `EnsoIntervalFilter`,
- `EnsoDateFilter`,
- `EnsoDateIntervalFilter`,
- `EnsoVueFilter`,

`@enso-ui/filters/renderless`:
- `IntervalFilter`,
- `DateFilter`,
- `DateIntervalFilter`,

### bulma/BooleanFilter.vue

The bulma styled boolean filtering component, built on top of the VueFilter component.

'Inherited' Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `hideOff`, `boolean`, optional, default `false`, if true hides the 'off' option 
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `icons`, `Boolean`, optional, default `false`, if true, also shows icons for each option 
- `offLabel`, `string`, optional, default ``, the label used for the 'off' option
- `options`, `array`, optional, default `[]`, the list of options
- `readonly`, `boolean`, optional, default `false`, if true hides marks the filter as read-only
- `title`, `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

### bulma/DateFilter.vue

The bulma styled date filtering component, built on top of the renderless version of the component.

Example:
```vue
<date-filter class="box raises-on-hover has-margin-top-large"
    @update="filters.interval = $event"/>
```

Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `format`, `string`, optional, default `d-m-Y`, the format of the date
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `locale`, `string`, optional, default `en`, the locale used for the picker

'Inherited' properties:
- `default`, 'string', optional, default `today`, 
valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'

### bulma/DateIntervalFilter.vue

The bulma styled date interval filtering component, built on top of the renderless version of the component.

Example:
```vue
<date-interval-filter class="box raises-on-hover has-margin-top-large"
    @update="filters.interval = $event"/>
```

Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `format`, `string`, optional, default `d-m-Y`, the format of the date
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `locale`, `string`, optional, default `en`, the locale used for the picker
- `maxLabel`, `string`, optional, default `To`, the label for the interval end
- `minLabel`, `string`, optional, default `From`, the label used for interval start
- `title`, `string`, optional, default `null`, the title for the filter

### bulma/EnsoDateFilter.vue

This bulma styled date filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

Example:
```vue
<enso-date-filter class="box raises-on-hover has-margin-top-large"
    @update="filters.interval = $event"/>
```

Properties:
- `format`, `string`, optional, default `d-m-Y`, the format of the date

'Inherited' properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `locale`, `string`, optional, default `en`, the locale used for the picker

### bulma/EnsoDateIntervalFilter.vue

This bulma styled date interval filtering component, built on top of the enso date filter version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

Example:
```vue
<enso-date-interval-filter class="box raises-on-hover has-margin-top-large"
    @update="filters.interval = $event"/>
```

Properties:
- `format`, `string`, optional, default `d-m-Y`, the format of the date

'Inherited' properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `locale`, `string`, optional, default `en`, the locale used for the picker

### bulma/EnsoIntervalFilter.vue

This bulma styled date interval filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

Example:
```vue
<enso-interval-filter class="box raises-on-hover has-margin-top-large"
    @update="filters.interval = $event"/>
```

'Inherited' Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `maxLabel`, `string`, optional, default `Max`, the label for the interval end
- `minLabel`, `string`, optional, default `Min`, the label used for interval start
- `title`, `string`, optional, default `null`, the title for the filter
- `type`, `string`, optional, default `number`, the of the inputs used within the filter

### bulma/EnsoVueFilter.vue

This bulma styled filtering component, built on top of the renderless version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

### bulma/IntervalFilter.vue

The bulma styled interval filtering component, built on top of the renderless version of the component.

Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `maxLabel`, `string`, optional, default `Max`, the label for the interval end
- `minLabel`, `string`, optional, default `Min`, the label used for interval start
- `title`, `string`, optional, default `null`, the title for the filter
- `type`, `string`, optional, default `number`, the of the inputs used within the filter

### bulma/VueFilter.vue

The bulma styled filtering component, built on top of the renderless version of the component.

Example:
```vue
<vue-filter :options="[{
            value: true,
            label: 'check',
            class: 'has-text-success',
        }, {
            value: false,
            label: 'times',
            class: 'has-text-danger',
        }]" v-model="myVariable"/>
```

Here, the option list is given in-line but in practice, you would hold the list in a variable.

Properties:
- `compact`, `boolean`, optional, default `false`, shows the component using a more compact state
- `hideOff`, `boolean`, optional, default `false`, if true hides the 'off' option 
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `icons`, `Boolean`, optional, default `false`, if true, also shows icons for each option 
- `offLabel`, `string`, optional, default ``, the label used for the 'off' option
- `options`, `array`, optional, default `[]`, the list of options
- `readonly`, `boolean`, optional, default `false`, if true hides marks the filter as read-only
- `title`, `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

### renderless/DateFilter.vue

The renderless version of the DateFilter component, which can be used in custom implementations.

Properties:
- `default`, `string`, optional, default `today`, the default of the filter.
Valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'

### renderless/DateIntervalFilter.vue

The renderless version of the DateIntervalFilter component, which can be used in custom implementations.

Methods:
- `update`, emits and 'update' event having as payload the sanitized interval values

### renderless/IntervalFilter.vue

The renderless version of the DateIntervalFilter component, which can be used in custom implementations.


Methods:
- `update`, emits and 'update' event having as payload the interval values

## Documentation

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/datepicker`
- `@enso-ui/transitions`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `bulma`
- `date-fns`
- `v-tooltip`
- `vue`
- `vuex`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
