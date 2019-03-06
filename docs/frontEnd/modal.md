---
sidebarDepth: 3
---

# Modal

![npm license](https://img.shields.io/npm/l/@enso-ui/modal.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/modal.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/modal.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/modal.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/modal.svg) 

A simple Modal

## Usage

The component can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/modal
```
Import the desired component(s):
```js
import { Modal } from '@enso-ui/modal/bulma';
import { Modal } from '@enso-ui/modal/renderless';
```

## Exports

`@enso-ui/modal/bulma`:
- `Modal`
- `ModalCard`

`@enso-ui/modal/renderless`:
- `Modal`

### bulma/Modal.vue
The bulma styled modal component built on top of its renderless version. 

Example:
```vue
<modal :show="!!deletedPerson"
    @close="deletedPerson = null">
    <div class="box">
        <h5 class="subtitle is-5">
            {{ __("Do you want to delete the associated person?") }}
        </h5>
        <hr>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button class="button is-outlined"
                        @click="deletedPerson = null">
                        {{ __('Cancel') }}
                    </button>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <button class="button is-danger has-margin-left-small"
                        @click="destroyPerson">
                        {{ __('Yes') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</modal>
```

Properties:
- `show` - `boolean`, optional, default `true`, if true, the modal is visible
- `portal` - `string`, optional, default `modals`, the css class query selector for the portal of the modal. 

The portal is considered the DOM container where the modal should be inserted/rendered.

Slots:
- `default`, all content goes here

### bulma/ModalCard.vue
This modal component renders its contents within a card and is built upon the renderless modal component.

Properties:
- `show` - `boolean`, optional, default `true`, if true, the modal is visible
- `portal` - `string`, optional, default `modals`, the query selector for the portal of the modal. 

Slots:
- `header`, the card header contents go here
- `body`, the card body contents go here
- `footer`, the card header contents go here

### renderless/Modal.vue
This modal component renders its contents within a card and is built upon the renderless modal component.

Properties:
- `show` - `boolean`, optional, default `true`, if true, the modal is visible
- `portal` - `string`, required, default `modals`, the query selector for the portal of the modal. 

Methods:
- `setUp`, performs the setup of the modal, which includes the creation of the portal
- `createPortal`, creates the portal 
- `display`, shows the modal and sets the necessary listeners 
- `close`, emits a `close` event

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/directives`
- `@enso-ui/transitions`
- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
