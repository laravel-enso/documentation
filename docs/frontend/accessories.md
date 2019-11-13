---
sidebarDepth: 3
---

# Accessories

![npm license](https://img.shields.io/npm/l/@enso-ui/accessories.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/accessories.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/accessories.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/accessories.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/accessories.svg) 

Accessories

This package contains a suite of reusable components that can be used exclusively within the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/accessories
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import {
    Accessories, Addresses, Comments, Discussions, Documents,
} from '@enso-ui/accessories/bulma';
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/accessories/bulma`:
- `Accessories`,
- `AddressesCard`,
- `Addresses`,
- `RoAddresses`,
- `CommentsCard`,
- `Comments`,
- `Discussions`,
- `DocumentsCard`,
- `Documents`,
- `QuickView`,

## Usage

### Accessories.vue

The bulma styled container for the various components that acts in a similar fashion to the Tabs.

#### Example:
```vue
import { Accessories, Addresses, Comments } from '@enso-ui/accessories/bulma';
import { Tab } from `@enso-ui/tabs/bulma`;

<accessories>
    <template slot-scope="{ count }">
        <tab keep-alive
            id="Addresses">
            <addresses :id="myCompanyId"
                type="LaravelEnso\Companies\app\Models\Company"
                @update="$set(count, 'Addresses', $refs.addresses.count)"
                ref="addresses"/>
        </tab>
        <tab keep-alive
            id="Comments">
            <comments :id="myCompanyId"
                type="LaravelEnso\Companies\app\Models\Company"
                @update="$set(count, 'Comments', $refs.comments.count)"
                ref="comments"/>
        </tab>
    </template>
</accessories>
```

The exposed `count` object is used to display a counter badge on each tab and it's up to each tab content to manage this count.

The accessory components can be attached to any model so that you could have, for instance, addresses for companies and addresses for people. They all work with a corresponding backend package that is built around a Model that has polymorphic relations to the attached models. 

::: warning Note
Being built around a polymorphic relation all the accessory components have two required props:
- `id` - `number`, required, the id of the morphable model
- `type` - `string`, required, default `null`, the type of the morphable model
:::

::: tip Tip
The components can be used within the `Accesories` or independently.
:::

##### Properties
- `icons`, boolean, optional, default `false`, if true, shows the icons 
    for the tabs

### Addresses

Bulma styled address manager components

Should be used with their [backend sibling](https://github.com/laravel-enso/addresses)

#### Addresses.vue

##### Example:

```vue
<addresses :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:

- `query` - `string`, optional, default '', addresses filtering search query string

##### Customization

If you need to customize the address card, you may also pass a different template using the 'address' slot, 
provided for this purpose.

Also, when declaring custom fields in the address form template, respective slots will be be generated in the 
`AddressForm` component, so you may also add further form customizations.

As an example of such customization, you may take a look at the 
[RoAddresses](https://github.com/laravel-enso/RoAddresses) package and the `RoAddress.vue` component.

#### AddressesCard.vue

`Addresses` in a `Card` with some additional options

##### Example:

```vue
<addresses-card collapsed
   title="Company Addresses"
   :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:

- `icon` - `string|array|object`, optional - default 'faMapSigns', the icon for the card title
- `collapsed` - `boolean`, optional, default `false` - determines the collapsed stated of the card on initial render
- `title` - `string`, optional - title for the card

### RoAddresses

Romanian Addresses customization for Addresses

Should be used with their [backend sibling](https://github.com/laravel-enso/ro-addresses)

#### RoAddresses.vue

##### Example:

```vue
<ro-addresses :id="companyId"
    type="company"
    ref="addresses"/>
```

Takes the same properties as Addresses, see above.

### Comments

Bulma styled comments manager components.

Should be used with their [backend sibling](https://github.com/laravel-enso/CommentsManager)

#### Comments.vue

##### Example:

```vue
<comments :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:

- `query` - `string`, optional - used for filtering the comments

#### CommentsCard.vue

`Comments` in a `Card` with some additional options

##### Example:

```vue
<comments-card collapsed
   title="Posted Comments"
   :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:
- `icon` - `string|array|object`, optional, default `faComments`, the icon for the card
- `collapsed` - `boolean`, optional, default `false`, if true, the card is collapsed
- `title` - `string`, optional, default '', the title for the card

### Discussions

Bulma discussion manager components.

Should be used with their [backend sibling](https://github.com/laravel-enso/Discussions)

#### Discussions.vue

##### Example:

```vue
<discussions :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

### Documents

Bulma styled document manager components.

Should be used with their [backend sibling](https://github.com/laravel-enso/DocumentssManager)

#### Documents.vue

##### Example:

```vue
<documents :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:

- `query` - `string`, optional - used for filtering documents
- `compact` - `boolean`, optional, default `false` - if true a compact display mode is used
- `disableControls` - `boolean`, optional, default `false` - if true disables the controls

#### DocumentsCard.vue

##### Example:

```vue
<documents-card collapsed
   title="Uploaded Documents"
   :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

##### Extra Properties:
- `icon` - `string|array|object`, optional, default `faCopy`, the icon for the card
- `collapsed` - `boolean`, optional, default `false` - controls the card initial render state
- `title` - `string`, optional - the title for the card

#### QuickView.vue

A simple bulma styled, animated, toggable panel/container, meant to optionally show
other controls/components.

Its visibility is meant to be externally controlled as the component does not emit any events
and does not have any properties or controls.

#### Example

```vue
<quick-view
    @close="quickView = false"
    v-if="quickView">
    <p class="title is-5">{{i18n('Accessories')}}</p>
    <accessories class="has-margin-top-medium">
        <template slot-scope="{ count }">
            <tab keep-alive
                id="Documents">
                <documents :id="id"
                    :type="type"
                    compact
                    @update="$set(count, 'Documents', $refs.documents.count)"
                    ref="documents"/>
            </tab>
        </template>
    </accessories>
</quick-view>
```

## Depends on

Discussions are currently built with [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor) & [quill](https://quilljs.com/) but in the near future we will migrate it on our own [wysiywg](https://github.com/enso-ui/wysiwyg)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
