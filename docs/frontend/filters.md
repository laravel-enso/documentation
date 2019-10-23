---
sidebarDepth: 3
---

# Filters

![npm license](https://img.shields.io/npm/l/@enso-ui/filters.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/filters.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/filters.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/filters.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/filters.svg) 

Renderless Vue Filter Components with a Bulma implementation

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/filters
```

Import the desired component(s):
```js
import { IntervalFilter, DateFilter, ... } from '@enso-ui/filters/bulma';
import { CoreIntervalFilter, CoreDateFilter, ... } from '@enso-ui/filters/renderless';
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/filters/bulma`:
- `IntervalFilter`, 
- `EnsoIntervalFilter`, 
- `DateFilter`, 
- `EnsoDateFilter`,
- `DateIntervalFilter`, 
- `EnsoDateIntervalFilter`, 
- `BooleanFilter`,
- `VueFilter`, 
- `EnsoFilter`, 
- `SelectFilter`, 
- `EnsoSelectFilter`,

`@enso-ui/filters/renderless`:
- `CoreIntervalFilter`,
- `CoreDateFilter`,
- `CoreDateIntervalFilter`,

### bulma/BooleanFilter.vue

The Bulma styled boolean filtering component, built on top of the above `VueFilter` component.

#### Example:

```vue
<boolean-filter class="box raises-on-hover"
    v-model="somethingBoolean"
    compact
    :title="i18n('Mass')"/>
```

#### Props

- `numeric` - `boolean`, optional, default `false`, if true, `0` & `1` are used instead of `true` & `false`

'Passed-through' Properties:
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `hideOff` - `boolean`, optional, default `false`, if true hides the 'off' option 
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `icons` - `boolean`, optional, default `false`, if true, also shows icons for each option 
- `offLabel` - `string`, optional, default ``, the label used for the 'off' option
- `options`, `array`, optional, default `[]`, the list of options
- `readonly` - `boolean`, optional, default `false`, if true hides marks the filter as read-only
- `title` - `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

### bulma/DateFilter

The Bulma styled date filtering component, built on top of the above renderless version.

#### Example:

```vue
<date-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from the renderless component can be provided here

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title`, `string`, optional, default '', a title for the component

'Passed-through' properties:
- `default`, 'string', optional, default `today`, 
    valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'
- `disabledOptions` - `array`, optional, default `[]`, a list of disabled options. Valid options are
    'today', 'yesterday', 'sevenDays', 'thirtyDays', 'custom', 'all'
- `value` - `string`, optional, default `null`, the format of the filter. Valid options are
    'today', 'yesterday', 'sevenDays', 'thirtyDays', 'custom', 'all'

### bulma/DateIntervalFilter

The Bulma styled date interval filtering component, built on top of the renderless version of the component.

#### Example:
```vue
<date-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from the renderless component can be provided here

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `locale` - `string`, optional, default `en`, the locale used for the picker
- `maxLabel` - `string`, optional, default `To`, the label for the interval end
- `minLabel` - `string`, optional, default `From`, the label used for interval start
- `title` - `string`, optional, default `null`, the title for the filter

'Passed-through' properties:
- `format` - `string`, optional, default `d-m-Y`, the format of the date
- `interval` - `object`, optional, default `{min: null, max: null}`, the min-max interval

### bulma/EnsoDateFilter.vue

This Bulma styled date filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

#### Example:

```vue
<enso-date-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `DateFilter` can be provided here.

- `format` - `string`, optional, default `meta.dateFormat`, the format of the date

'Passed-through' properties:
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title` - `string`, optional, default `null`, a title for the component

### bulma/EnsoDateIntervalFilter

This Bulma styled date interval filtering component, built on top of the enso date filter version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

#### Example:
```vue
<enso-date-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `DateIntervalFilter` can be provided here

- `format` - `string`, optional, default `meta.dateFormat`, the format of the date

'Passed-through' properties:
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title` - `string`, optional, default `null`, a title for the component

### bulma/EnsoFilter

This Bulma styled filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

#### Example:
```vue
<enso-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `VueFilter` can be provided here.

'Passed-through' Properties:

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `hideOff` - `boolean`, optional, default `false`, if true hides the 'off' option 
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `icons` - `boolean`, optional, default `false`, if true, also shows icons for each option 
- `offLabel` - `string`, optional, default ``, the label used for the 'off' option
- `options`, `array`, optional, default `[]`, the list of options
- `readonly` - `boolean`, optional, default `false`, if true hides marks the filter as read-only
- `title` - `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

### bulma/EnsoIntervalFilter

This Bulma styled date interval filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

#### Example:
```vue
<enso-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `IntervalFilter` can be provided here.

'Passed-through' Properties:
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `maxLabel` - `string`, optional, default `Max`, the label for the interval end
- `minLabel` - `string`, optional, default `Min`, the label used for interval start
- `title` - `string`, optional, default `null`, the title for the filter
- `value` - `object`, optional, default `{min: null,max: null}`, the selected value

### bulma/EnsoSelectFilter

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example:
```vue
<enso-select-filter title="my title" 
    multiple
    :source="route('administration.userGroups.options')"
    v-model="userGroupId"/>
```

#### Props

All the props from `IntervalFilter` can be provided here

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `title` - `string`, optional, default `null`, the title for the filter
- `value` - `object`, optional, default `null`, the selected value

### bulma/IntervalFilter

The Bulma styled interval filtering component, built on top of the renderless version of the component.

#### Example:
```vue
<interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

The component can also be used together with `v-model`.

#### Props

All the props from the renderless component can be provided here.

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `function`, optional, default `v => v`, the function that performs translations
- `maxLabel` - `string`, optional, default `Max`, the label for the interval end
- `minLabel` - `string`, optional, default `Min`, the label used for interval start
- `title` - `string`, optional, default `null`, the title for the filter

'Passed-through' Properties:
- `interval` - `object`, optional, default `{min: null, max: null}`, the min/max values object
- `type` - `string`, optional, default `string`, the type of the two filter inputs

### bulma/SelectFilter.vue

This Bulma styled filtering component, built on top of the renderless version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

#### Example:
```vue
<select-filter :options="[{
        value:1, label: 'a'
    },{
        value:2 , label: 'b'
    }]"
    v-model="myModel"/>
```

#### Props
All the props from `VueFilter` can be provided here.
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title` - `string`, optional, default `null`, the title for the filter

'Passed-through' Properties:
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title` - `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

### bulma/SelectFilter

The Bulma styled select filtering component, built using of `VueSelect`.

#### Example:
```vue
<select-filter title="my title" 
    multiple
    :source="route('administration.userGroups.options')"
    v-model="userGroupId"/>
```

#### Props
- `multiple` - `boolean`, optional - used for multiple selects
- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `title` - `string`, optional, default `null`, the title for the filter

'Passed-through' Properties:
- `value` - optional, default `null`, the value of the select filter

For more props check the `VueSelect` component from `enso-ui/select`

### bulma/VueFilter

The Bulma styled filtering component, built on top of the renderless version of the component.

#### Example:
```vue
<vue-filter :options="[{
        value: true,
        label: 'check',
        class: 'has-text-success',
    }, {
        value: false,
        label: 'times',
        class: 'has-text-danger',
    }]"
    v-model="myVariable"/>
```

Here, the option list is given in-line but in practice, you would reference a variable.

#### Props

- `compact` - `boolean`, optional, default `false`, shows the component using a more compact state
- `hideOff` - `boolean`, optional, default `false`, if true hides the 'off' option 
- `i18n`, `Function`, optional, default `v => v`, the function that performs translations
- `icons` - `boolean`, optional, default `false`, if true, also shows icons for each option 
- `offLabel` - `string`, optional, default ``, the label used for the 'off' option
- `options`, `array`, optional, default `[]`, the list of options
- `readonly` - `boolean`, optional, default `false`, if true hides marks the filter as read-only
- `title` - `string`, optional, default `null`, the title for the filter
- `value`, `null`, optional, default `null`, the value of the filter

#### Events
- `input`, is emitted on update, the payload is the value. Note that if the filter is disabled,
even if the value is updated, no event is emitted 

### renderless/CoreDateFilter.vue

A renderless component, which can be used in custom implementations.

#### Props
- `default`, 'string', optional, default `today`. Valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'
- `disabledOptions` - `array`, optional, default `[]` - the list of disabled options. Valid options are
    'today', 'yesterday', 'sevenDays', 'thirtyDays', 'custom', 'all'
- `value` - `string`, optional, default `null` - the chosen value. Valid options are
    'today', 'yesterday', 'sevenDays', 'thirtyDays', 'custom', 'all'

#### Events
- `input`, payload is the value, is emitted when the filter is set using the `setFilter` method
- `update`, payload is the sanitized interval, is emitted when the filter is updated

#### Slots

Has a default scoped slot that exposes the following data:

- `filters`
- `filter`
- `custom`
- `minBindings`
- `minEvents`
- `maxBindings`
- `maxEvents`
- `backEvents`
- `filterEvents`

### renderless/CoreDateIntervalFilter.vue

The renderless version of the DateIntervalFilter component, which can be used in custom implementations.

#### Props
- `format` - `string`, optional, default `d-m-Y` - the format of the date
- `interval` - `Object`, optional - should be of format `{min: null, max: null}`
- `locale` - `string`, optional, default `en` - the locale used for the picker

#### Events
- `update`, payload is the sanitized interval, is emitted when the filter is updated

### renderless/CoreIntervalFilter

The renderless version of the DateIntervalFilter component, which can be used in custom implementations.

#### Props
- `type` - optional, default `number` - the type of the inputs used
- `value` - `Object`, optional, default `{min: null, max: null}`

#### Events
- `input`, payload is the sanitized value, is emitted when the filter is updated

### renderless/FilterState

A renderless component that can be used to store the given state into the browser's local storage
 and then retrieve this state. It can be easily used to store the state of various in-page filters,
 so that on further page loadings, the filters maintain their state.

#### Example
```js
<filter-state :api-version="apiVersion"
    name="myPage"
    :params="params"
    :filters="filters"
    :intervals="intervals"
    @ready="ready = true"
    ref="intervalsState"/>
```

#### Props
- `name` - `string`, required, a name to used to store the state
- `apiVersion` - `number`, required, the API version. This should be incremented when structural changes
    are made to the data being saved. If the API version is mismatched, the saved state is discarded.
- `filters` - `Object`, optional, default `null`. Any data of 'filter' type
- `intervals` - `Object`, optional, default `null`. Any data of 'interval' type
- `params` - `Object`, optional, Any data of 'params' type

#### Methods
- `reset()`, can be used to reset the state, perhaps in relation to other in page controls or user actions

#### Events
- `ready`, is emitted once the state loading phase has completed, regardless if there was an actual state 
    retrieved 

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

For date manipulation [date-fns](https://date-fns.org/) was used

## Depends on

- `@enso-ui/datepicker`
- `@enso-ui/select`
- `@enso-ui/transitions`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `bulma`
- `date-fns`
- `tooltip.js`
- `v-tooltip`
- `vue`
- `vuex`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
