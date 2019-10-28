---
sidebarDepth: 3
---

# Confirmation

![npm license](https://img.shields.io/npm/l/@enso-ui/confirmation.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/confirmation.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/confirmation.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/confirmation.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/confirmation.svg) 

Minimalist confirmation dialog

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/confirmation
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/cofirmation/bulma`:
- `Confirmation`,

`@enso-ui/cofirmation/components`:
- `Confirmation`,


## Usage

### bulma/Confirmation.vue
This is the main bulma styled component. It has a default slot where a clickable element should be placed.
 
It can optionally have:
- a confirm action button/link
- a cancel action button/link

Example:
```vue
<confirmation placement="bottom"
    @confirm="doSomething">
    <span class="icon is-small has-text-danger">
        <fa icon="trash-alt"/>
    </span>
</confirmation>
```

Slots:
- `default`, main content goes here

### components/Confirmation.vue
The component is a base component for the confirmation component above without any styling.

It can be used for creating a custom confirmation with your CSS style of choice.

It uses the `v-popover` component from `v-tooltip`.

#### Slots
- `default`, main content goes here
- `confirm`, a custom control for the confirm action can go here, scoped, exposes the `confirm` method
- `cancel`, a custom control for the cancel action can go here, scoped, exposes the `cancel` method

If a confirm/cancel control is provided, the control should call the confirm/cancel method 
made exposed on the slot.

Both these methods emit a `confirm` respectively `cancel` event, that should be 
handled on the parent, as required.

Methods:
- `cancel()`, closes the dialog & emits a `cancel` event
- `confirm()`, closes the dialog & emits a `confirm` event

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

Built with `popover` from [v-tooltip](https://github.com/Akryum/v-tooltip)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
