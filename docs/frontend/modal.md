---
sidebarDepth: 3
---

# Modal

![npm license](https://img.shields.io/npm/l/@enso-ui/modal.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/modal.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/modal.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/modal.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/modal.svg) 

Simple Modal Component

The component can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/modal
```

## Usage

Import the desired component(s):
```js
import { Modal, ModalCard } from '@enso-ui/modal/bulma';
import { CoreModal } from '@enso-ui/modal/renderless';
```

### CoreModal.vue
This modal component renders its contents within a card and is built upon the renderless modal component.

#### Props:
- `show` - `boolean`, optional, default `true`, if true, the modal is visible
- `portal` - `string`, optional, default `modals`, the query selector for the portal of the modal. 

#### Slots:

Has a default scopedSlot that exposes the `close` method.

### Modal

The bulma styled modal component built on top of its renderless version. 

Example:
```vue
<modal :show="visible"
    @close="doNothing">
    <div class="box">
        <h5 class="subtitle is-5">
            {{ i18n("Are you sure?") }}
        </h5>
        <hr>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button class="button is-outlined"
                        @click="cancel">
                        {{ i18n('Cancel') }}
                    </button>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <button class="button is-danger has-margin-left-small"
                        @click="doSomething">
                        {{ i18n('Yes') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</modal>
```

#### Props:
All the props from `CoreModal` can be provided here

Slots:
- `default`, all content goes here

### ModalCard

This modal component renders its contents within a card and is built upon the renderless modal component.

#### Props:
All the props from `CoreModal` can be provided here

Slots:
- `header`, the card header contents go here
- `body`, the card body contents go here
- `footer`, the card header contents go here

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
