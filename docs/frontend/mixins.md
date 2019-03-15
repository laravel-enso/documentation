---
sidebarDepth: 3
---

# Mixins

![NPM License](https://img.shields.io/npm/l/@enso-ui/mixins.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/mixins.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/mixins.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/mixins.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/mixins.svg)

Enso Mixins Package

## Usage

The mixins can be used inside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

Check the full documentation at  [docs.laravel-enso.com](https://docs.laravel-enso.com).

### Installation

Install the package:
```
yarn add @enso-ui/mixins
```
Import the desired component(s):
```js
import { canAccess } from '@enso-ui/mixins';
```

#### Within Enso

Within Enso, the mixins are available for injection:
```vue
export default {
    name: 'EnsoSelect',

    inject: ['errorHandler', 'i18n'],

    components: { VueSelect },
``` 

You may then use them as required.


### Exports

`@enso-ui/mixins`:
- `canAccess`, 
- `errorHandler`, 
- `i18n`, 


## Contributions

are welcome. Pull requests are great, 
but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
