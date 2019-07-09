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


### VueFilter

Bulma styled filtering component

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
- `compact` - `boolean`, optional - shows the component using a more compact state
- `hideOff` - `boolean`, optional  - if true hides the 'off' option 
- `i18n`, `Function`, optional - the function that performs localisation
- `icons` - `boolean`, optional - if true, will show icons instead of labels. The option objects shoud contain an `icon` property
- `offLabel` - `string`, optional - the label used for the 'off' option
- `options`, `array`, optional - the list of options
- `readonly` - `boolean`, optional - if true hides marks the filter as read-only
- `title` - `string`, optional - the title for the filter

### EnsoFilter.vue

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example:
```vue
<enso-filter :options="[{
        value:1, label: 'a'
    },{
        value:2 , label: 'b'
    }]"
    v-model="myModel"/>
```

#### Props
All the props from `VueFilter` can be provided here

### BooleanFilter

The bulma styled boolean filtering component, built on top of the above `VueFilter` component.

#### Example:

```vue
<boolean-filter class="box raises-on-hover"
    v-model="somethingBoolean"
    compact
    :title="i18n('Mass')"/>
```

#### Props

- `compact` - `boolean`, optional - shows the component using a more compact state
- `hideOff` - `boolean`, optional - if true hides the 'off' option 
- `i18n`, `Function`, optional - the function that performs translations
- `icons` - `boolean`, optional - if true, also shows icons for each option 
- `offLabel` - `string`, optional - the label used for the 'off' option
- `options`, `array`, optional - the list of options
- `readonly` - `boolean`, optional - if true hides marks the filter as read-only
- `title` - `string`, optional - the title for the filter

### CoreDateFilter.vue

A renderless component, which can be used in custom implementations.

#### Props
- `interval` - `Object`, optional - should be of format `{min: null, max: null}`
- `i18n`, `Function`, optional - the function that performs localisation
- `locale` - `string`, optional, default `en` - the locale used for the picker
- `format` - `string`, optional, default `d-m-Y` - the format of the date
- `default`, 'string', optional, default `today` - valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'

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

### DateFilter

The bulma styled date filtering component, built on top of the above renderless version.

#### Example:

```vue
<date-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from the renderless component can be provided here

- `compact` - `boolean`, optional - shows the component using a more compact state

::: tip Tip
You can build a custom implementation where you're using some other `datepiker` lib or your custom template
:::

### EnsoDateFilter.vue

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example:

```vue
<enso-date-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `DateFilter` can be provided here

### CoreDateIntervalFilter.vue

A renderless component, which can be used in custom implementations.

#### Example:
```vue
<date-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props
- `interval` - `Object`, optional - should be of format `{min: null, max: null}`
- `i18n`, `Function`, optional - the function that performs localisation
- `locale` - `string`, optional, default `en` - the locale used for the picker
- `format` - `string`, optional, default `d-m-Y` - the format of the date
- `default`, 'string', optional, default `today` - valid options are: 'today', 'yesterday', 'last week', 'last month', 'all'
- `maxLabel` - `string`, optional, default `To` - the label for the interval end
- `minLabel` - `string`, optional, default `From` - the label used for interval start
- `title` - `string`, optional, default `null` - the title for the filter

### DateIntervalFilter

The bulma styled date interval filtering component, built on top of the renderless version of the component.

#### Example:
```vue
<date-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from the renderless component can be provided here

- `compact` - `boolean`, optional, default `false` - shows the component using a more compact state

### EnsoDateIntervalFilter

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example:
```vue
<enso-date-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `DateIntervalFilter` can be provided here

### IntervalFilter

The renderless version of the DateIntervalFilter component, which can be used in custom implementations.

#### Props
- `interval` - `Object`, optional - should be of format `{min: null, max: null}`
- `i18n`, `Function`, optional - the function that performs localisation
- `maxLabel` - `string`, optional, default `To` - the label for the interval end
- `minLabel` - `string`, optional, default `From` - the label used for interval start
- `title` - `string`, optional, default `null` - the title for the filter
- `type` - optional, default `number` - the type of the inputs used

### IntervalFilter

The bulma styled interval filtering component, built on top of the renderless version of the component.

#### Example:
```vue
<interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

The component can also be used together with `v-model`.

#### Props

All the props from the renderless component can be provided here

- `compact` - `boolean`, optional, default `false` - shows the component using a more compact state

### EnsoIntervalFilter

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example:
```vue
<enso-interval-filter class="box raises-on-hover has-margin-top-large"
    :interval="interval"/>
```

#### Props

All the props from `IntervalFilter` can be provided here

### SelectFilter

The bulma styled select filtering component, built using of `VueSelect`.

#### Example:
```vue
<select-filter title="my title" 
    multiple
    :source="route('administration.userGroups.options')"
    v-model="userGroupId"/>
```

#### Props
- `compact` - `boolean`, optional - shows the component using a more compact state
- `multiple` - `boolean`, optionsl - used for multiple selects
- `i18n`, `Function`, optional -  the function that performs localisation
- `title` - `string`, optional - the title for the filter

For more props check the `VueSelect` component from `enso-ui/select`

### EnsoSelectFilter

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

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

For date manipulation [date-fns](https://date-fns.org/) was used

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
