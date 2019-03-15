---
sidebarDepth: 3
---

# Card

![NPM License](https://img.shields.io/npm/l/@enso-ui/card.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/card.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/card.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/card.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/card.svg)

Bulma styled Card component

Can be used outside of the Enso ecosystem.

## Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:

```
yarn add @enso-ui/card
```

## Usage

Import the desired component(s):

```js
import { Card, CardHeader, ... } from '@enso-ui/card/bulma';
```

### Card

This is the main component. It can optionally have, via slots:
- header, with:
    - title
    - controls
- image
- content
- footer, with:
    - items

As noted above, you may skip one or more of these components, as required 
(for example, you may not need controls, a footer, etc).

::: tip Tip
Cards may be nested and when nesting them, the collapsible feature works as expected
:::

::: tip Tip
You may use transitions for the cards.
:::

#### Example:
```vue
import {
    Card, CardHeader, CardControl, CardCollapse, CardContent,
    CardFooter, CardFooterItem,
} from '@enso-ui/card/bulma';

<card>
    <card-header>
        <template v-slot:title>
            <span class="icon is-small has-margin-right-small">
                <fa icon="video"/>
            </span>
            My Title
        </template>
        <template v-slot:controls>
            <card-control v-tooltip="'my tooltip'">
                <span class="icon">
                    <fa icon="info-circle"/>
                </span>
            </card-control>                
            <card-control>
                <span class="icon"
                    @click="$emit('edit')">
                    <fa :icon="['far', 'edit']"/>
                </span>
            </card-control>                
            <card-collapse/>
        </template>
    </card-header>
    <card-content class="is-paddingless">
        Actual content goes here
    </card-content>
    <card-footer>
        <card-footer-item>
            First footer item
        </card-footer-item>
    </card-footer>
</card>
```

#### Props:
- `loading` - `boolean`, optional - controls an overlay loader
- `collapsed` - `boolean`, optional - controls the initial render state
- `transition` - `boolean`, optional - if true, the destruction of the card is handled in such a way that that custom transitions work correctly even when removing the card.


#### Slots:
- `default`, all content goes here

### CardHeader

The component is a container for the header contents.

Note that when using the `CardCollapse` component within the card, the clicking header will work as collapse control too.

#### Slots:
- `title`, for showing a title
- `controls`, for any Card controls

### CardBadge

The component shows a badge within a Card's controls area.

#### Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-badge label="some label"/>
        </div>
    </card-header>
</card>
```

#### Props:
- `label` - `string|number`, required,
- `type` - `string`, optional - controls the color of the tag, see [here](https://bulma.io/documentation/elements/tag/) for more info.

### CardCollapse

The component shows a dropdown indicator control and can be used to collapse or expand the card. To make the card collapsible you just have to use this component in the `controls` slot of `CardHeader`.

#### Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-collapse/>
        </div>
    </card-header>
</card>
```

### CardControl

The component is use to create custom controls.

#### Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-control v-tooltip="'my tooltip'">
                <span class="icon"
                    @click="doSomething">
                    <fa icon="info-circle"/>
                </span>
            </card-control>
        </div>
    </card-header>
</card>
```

#### Slots:
- `default`, all content goes here

### bulma/CardRefresh.vue

The component is a refresh control for the card. 

#### Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-refresh @refresh="refresh"/>
        </div>
    </card-header>
</card>
```

#### Events:
- `refresh`, when clicked; the event needs to be handled by the developer.

### CardRemove

The component is a remove/close control for the card. 

#### Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-remove @remove="handleRemoval"/>
        </div>
    </card-header>
</card>
```

### CardContent

The component is the container for the card's content.

Please note that this component comes by default with the bulma class `is-paddingless` since otherwise,
when collapsed, it would look off due to the padding.

Example:
```vue
<card>
    <card-content>
        Place your content here
    </card-content>
</card>
```

#### Slots:
- `default`, all content goes here

### CardFooter

The component is the container for the card's footer.

```vue
<card>
    <card-header>
        Header content here
    </card-header>
    <card-content>
        Main content here
    </card-content>
    <card-footer>
        Footer content here
    </card-footer>
</card>
```

#### Slots:
- `default`, all content goes here

::: warning Notice
A card footer should contain at least a card footer item if you want to go with the classic bulma design.
:::

### CardFooterItem

The component is the container for one footer item.

```vue
<card>
    <card-content>
        Main content
    </card-content>
    <card-footer>
        <card-footer-item>
            Item content
        </card-footer-item>
        <card-footer-item>
            Item content
        </card-footer-item>
    </card-footer>
</card>
```

#### Slots:
- `default`, all content goes here

### CardImage

The component is the container for an image.

#### Example:
```vue
<card>
    <card-image>
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </card-image>
</card>
```


#### Slots:
- `default`, all content goes here

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/dropdown-indicator`
- `@enso-ui/loader`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
