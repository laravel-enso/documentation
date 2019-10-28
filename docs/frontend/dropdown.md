---
sidebarDepth: 3
---

# Dropdown

![npm license](https://img.shields.io/npm/l/@enso-ui/dropdown.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/dropdown.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/dropdown.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/dropdown.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/dropdown.svg) 

Vue Dropdown component

All components can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/dropdown
```

### Exports

`@enso-ui/dropdown/bulma`:
- `Dropdown`,

`@enso-ui/dropdown/renderless`:
- `CoreDropdown`,


## Usage

Import the component
```js
import Dropdown from '@enso-ui/dropdown/bulma';
```

Or the renderless version:
```js
import Dropdown from '@enso-ui/dropdown/renderless';
```

### CoreDropdown

This is the the renderless dropdown component that can be built upon when creating a custom implementation.

#### Props
- `disabled` - `boolean`, optional, default `false`, if true, the component is disabled
- `manual` - `boolean`, optional, default `false`, if set to true, hiding the component should be done manually

#### Slots
- exposes a default scoped slot
 
#### Methods
- `open()`, opens the dropdown item list
- `close()`, closes the dropdown item list
- `attemptClose()`, calls close above, unless in manual mode, in which case it does nothing
- `initPopper()`, instantiates the Popper instance, used to display the item list 
- `destroyPopper()`, destroys the Popper instance, used to display the item list 

#### Events:
- `open`, when opening the dropdown
- `close`, when closing the dropdown

### Dropdown

This is the bulma styled component built upon its renderless version.

Example:
```vue
<dropdown class="is-right">
    <template v-slot:label>
        <figure class="image is-16x16">
            <img :src="`/images/corners/${toastrPosition}.svg`">
        </figure>
    </template>
    <template v-slot:options>
        <a v-for="(position, key) in positions"
            :key="key"
            class="dropdown-item"
            :class="{ 'is-active': position === toastrPosition }"
            @click="update(position)">
            <figure class="image is-16x16 toastr-position">
                <img :src="`/images/corners/${position}.svg`">
            </figure>
        </a>
    </template>
</dropdown>
```

A fade transition is used for the opening & closing of the dropdown.

#### Slots
- `trigger`, for placing a control that should open the dropdown
- `label`, for placing a label on the (default) button that opens the dropdown. 
If using the `trigger` slot above and implementing a custom control, you should not need to use the `label` slot 
- `controls`, for adding controls to the dropdown
- `options`, the list of items in/from the dropdown goes here

#### Props

All the props from the renderless component can be provided

::: tip Tip
You can create a custom dropdown with your own layout/template/transition
:::

::: warning Note
You will want to customize the dropdown width / height by applying your own css
:::

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
