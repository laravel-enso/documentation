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

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/money
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

### Exports

`@enso-ui/money`:
- `Money`

## Usage
Import the desired component(s):
```js
import Money from '@enso-ui/money';
```

### Money
The bulma styled money input component. 

#### Example:
```vue
<money v-model="myModel"
    symbol="$"
    decimal=","/>
```

#### Props
- `label` - `boolean`, optional, - if true, the value is shown as a label instead of an input 
- `readonly` - `boolean`, optional - if true, the component is readonly
- `disabled` - `boolean`, optional - if true, the component is disabled
- `placeholder` - `string`, optional - the money input placeholder
- `symbol` - `string`, optional, default `$` - the currency symbol
- `decimal` - `string`, optional, default `.` - the decimal separator. Valid values are '.', ','
- `thousand` - `string`, optional, default `,`, the thousand separator. Valid values are ' ', '.', ','
- `precision` - `number`, optional, default `2` - the precision
- `positive` - `string`, optional, default `%s %v` - the template for positive values (symbol, value)
- `negative` - `string`, optional, default `%s (%v)`, the template for negative values (symbol, value)
- `zero` - `string`, optional, default `%s --`,the template for zero (symbol, value)

#### Events:
- `input`, on the money input blur

#### Methods
- `format`, formats the value based on the given options and emits an 'input' event

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## External Dependencies

Money uses [accounting.js](http://openexchangerates.github.io/accounting.js/) for formatting numbers

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
