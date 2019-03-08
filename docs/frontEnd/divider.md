---
sidebarDepth: 3
---

# Divider

![NPM License](https://img.shields.io/npm/l/@enso-ui/divider.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/divider.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/divider.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/divider.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/divider.svg)

Vue Divider Package

## Usage

The component can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/divider
```
Import the desired divider(s):
```js
import Divider from '@enso-ui/divider';
```

### Exports

`@enso-ui/divider`:
- `Divider`,

### Divider.vue

Simple divider component.

Example:
```vue
<divider title="Divider text" placement="center"/>
```

Properties:
- `placement` - `string`, optional, default `center`, the positioning of the title.
Valid options are: 'left', 'center', 'right'
- `title` - `string`, optional, default '', the title/text used for the divider


## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `highlight.js`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
