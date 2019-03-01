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

## Usage

All components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/card
```
Import the desired component(s):
```js
import { Card, CardHeader, ... } from '@enso-ui/card/bulma';
```

### Exports

`@enso-ui/card/bulma`:
- `Card`,
- `CardHeader`,
- `CardContent`,
- `CardImage`,
- `CardFooter`,
- `CardFooterItem`,
- `CardControl`,
- `CardBadge`,
- `CardCollapse`,
- `CardRefresh`,
- `CardRemove`,

### bulma/Card.vue

This is the main component. It can optionally have:
- an image
- a header, with:
    - a title
    - a set of controls
- content
- a footer, with:
    - items

As noted above, you may skip one or more of these components, as required 
(for example, you may not need controls, a footer, etc).

Example:
```vue
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
    <card-image>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </card-image>
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

Properties:
- `loading` - `boolean`, optional, default `false`, if true, a loader is shown
- `collapsed` - `boolean`, optional, default `false`, if true, the card is shown collapsed

Slots:
- `default`, all content goes here

### bulma/CardHeader.vue

The component is a container for the header contents.

Note that using the `CardCollapse` component within the card header will make the card component collapsible.

Example:
```vue
<card>
    <card-header>
        <div slot="title">
            My Title
        </div>
    </card-header>
</card>
```

Slots:
- `title`, for showing a title
- `controls`, for any Card controls

Events:
- `click`, when the title is clicked

### bulma/CardBadge.vue

The component shows a badge within a Card's controls area.

Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-badge label="some label"/>
        </div>
    </card-header>
</card>
```


Properties:
- `label` - `string`, required,
- `type` - `string`, optional, default `null`. 
This is the color of the tag, see [here](https://bulma.io/documentation/elements/tag/) for more info.

### bulma/CardCollapse.vue

The component shows a dropdown indicator control and can be used to collapse the card.

Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-collapse/>
        </div>
    </card-header>
</card>
```

### bulma/CardControl.vue

The component is a container for any custom controls.

Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-control v-tooltip="'my tooltip'">
                <span class="icon">
                    <fa icon="info-circle"/>
                </span>
            </card-control>
        </div>
    </card-header>
</card>
```

Slots:
- `default`, all content goes here

### bulma/CardRefresh.vue

The component is a refresh control for the card. 

Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-refresh @refresh="alert"/>
        </div>
    </card-header>
</card>
```

Events:
- `refresh`, when clicked; the event needs to be handled by the developer.

### bulma/CardRemove.vue

The component is a remove/close control for the card. 

Example:
```vue
<card>
    <card-header>
        <div slot="controls">
            <card-remove @remove="handleRemoval"/>
        </div>
    </card-header>
</card>
```

Events:
- `remove`, when clicked; the event needs to be handled by the developer.

### bulma/CardContent.vue

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

Slots:
- `default`, all content goes here

### bulma/CardFooter.vue

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

Slots:
- `default`, all content goes here

Normally, a card footer should contain at least a card footer item 
if you want to go with the classic bulma design, 
unless you want to go with a custom footer design.

### bulma/CardFooterItem.vue

The component is the container for one footer item.

```vue
<card>
    <card-header>
        Header content
    </card-header>
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

Slots:
- `default`, all content goes here

### bulma/CardImage.vue

The component is the container for an image.

Example:
```vue
<card>
    <card-image>
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </card-image>
</card>
```


Slots:
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
