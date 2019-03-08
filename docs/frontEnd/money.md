---
sidebarDepth: 3
---

# Money

![npm license](https://img.shields.io/npm/l/@enso-ui/money.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/money.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/money.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/money.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/money.svg) 

Money Vue input component

## Usage

The component can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/money
```
Import the desired component(s):
```js
import Money from '@enso-ui/money';
```

## Exports

`@enso-ui/money`:
- `Money`

### bulma/Money.vue
The bulma styled money input component. 

Example:
```vue
<money
    v-model="field.value"
    v-bind="{ ...field.meta, placeholder: i18n(field.meta.placeholder) }"
    v-on="$listeners"
    @input="errors.clear(field.name)"
    @keydown="$emit('update');"/>
```

Properties:
- `value` - `number|string`, optional, default `null`, value of the input
- `label` - `boolean`, optional, default `false`, if true, the value is shown as a label instead of an input 
- `readonly` - `boolean`, optional, default `false`, if true, the component is readonly
- `disabled` - `boolean`, optional, default `false`, if true, the component is disabled
- `placeholder` - `string`, optional, default `null`, the money input placeholder
- `symbol` - `string`, optional, default `$`, the currency symbol
- `decimal` - `string`, optional, default `.`, the decimal separator. Valid values are '.', ','
- `thousand` - `string`, optional, default `,`, the thousand separator. Valid values are ' ', '.', ','
- `precision` - `number`, optional, default `2`, the precision
- `positive` - `string`, optional, default `%s %v`, accounting.js specific positive formatting 
- `negative` - `string`, optional, default `%s (%v)`, accounting.js specific negative formatting
- `zero` - `string`, optional, default `%s --`, accounting.js specific zero formatting

Note that since this VueJS component uses accounting.js under the hood, to find more about the available options 
above, check out the [accounting.js](http://openexchangerates.github.io/accounting.js/) documentation.

Events:
- `input`, on the money input blur

Methods:
- `format`, formats the value based on the given options and emits an 'input' event

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `accounting-js`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
