---
sidebarDepth: 3
---

# Dropdown Indicator

![npm license](https://img.shields.io/npm/l/@enso-ui/dropdown.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/dropdown.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/dropdown.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/dropdown.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/dropdown.svg) 

A simple dropdown indicator

## Usage
All components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/dropdown-indicator
```
Import the desired component(s):
```js
import DropdownIndicator from '@enso-ui/dropdown-indicator';
```

## Exports

`@enso-ui/dropdown-indicator`:
- `DropdownIndicator`,

### bulma/Dropdown.vue
This is the bulma styled component.

Example:
```vue
<dropdown-indicator class="is-small"
    :collapsed="!menu.expanded"
    v-if="menu.has_children"/>
```

Properties:
- `collapsed`, `boolean`, optional, default `true`. 
If set to false, the control is rotated up so as to suggest the dropdown is open 


Methods:
- `toggle()`, toggles the state of the indicator & emits a `toggle` event

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
