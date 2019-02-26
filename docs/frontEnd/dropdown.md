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

## Usage
All components can be used outside of the Enso ecosystem.

### bulma/Dropdown.vue
This is the bulma styled component.

Example:
```vuejs
<dropdown class="is-right">
    <span slot="label">
        <figure class="image is-16x16">
            <img :src="mySource">
        </figure>
    </span>
    <a v-for="(position, key) in positions"
        :key="key"
        class="dropdown-item"
        :class="{ 'is-active': position === toastrPosition }"
        @click="update(position)">
        <figure class="image is-16x16 toastr-position">
            <img :src="`/images/corners/${position}.svg`">
        </figure>
    </a>
</dropdown>
```

Properties:
- `height`, `number`, optional, default `16`, the em max height of the dropdown list
- `manual`, `boolean`, optional, default `false`. If set to true, hiding the component should be done manually
- `width`, `number`, optional, default `4.5`, the em minimum width of the dropdown list 

Slots:
- `label`, for placing a label for the button that opens the dropdown
- `default`, the list of items in/from the dropdown goes here

Methods:
- `hide()`, hides the dropdown item list
- `attemptHide()`, calls hide above, unless in manual mode. 

## Documentation

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `bulma`
- `@enso-ui/dropdown-indicator`
- `@enso-ui/transitions`
- `v-click-outside`
- `vue`

## Exports

`@enso-ui/dropdown/bulma`:
- `Dropdown`,

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
