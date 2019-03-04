---
sidebarDepth: 3
---

# Vue Switch

![npm license](https://img.shields.io/npm/l/@enso-ui/progress-bar.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/progress-bar.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/progress-bar.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/progress-bar.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/progress-bar.svg) 

Vue Switch

## Usage
The component can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/switch
```
Import the desired component(s):
```js
import Switch from '@enso-ui/switch/bulma';
```

### Exports

`@enso-ui/switch/bulma`:
- `VueSwitch`

### bulma/VueSwitch.vue
The bulma styled switch component. 

Example:
```vue
<vue-switch class="has-margin-left-medium has-margin-right-medium"
    v-model="filterCore"/>
```

Properties:
- `disabled` - `boolean`, optional, default `false`, if true, the control is disabled
- `readonly` - `boolean`, optional, default `false`, if true, the control is readonly
- `value`, `boolean|number`, required, the value of the component

Events:
- `input`, emitted when the value is changed, with the value/state as payload

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
