---
sidebarDepth: 3
---

# Loader

![npm license](https://img.shields.io/npm/l/@enso-ui/loader.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/loader.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/loader.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/loader.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/loader.svg) 

Simple loader

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/loader
```

### Exports

`@enso-ui/loader/bulma`:
- `Loader`

## Usage

Import the desired component(s):
```js
import Loader from '@enso-ui/loader/bulma';
```

### Loader.vue
The bulma styled loading indication component.

Example:
```vue
<loader v-if="loading"/>
```

Properties:
- `color` - `string`, optional, default `#f44336` - the color of the loader indicator
- `size` - `string`, optional, default `medium` - the size of the indicator. Valid options are: 'small', 'medium', 'large'
- `transparent` - `boolean`, optional - if true makes the component overlay transparent

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
