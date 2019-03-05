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

## Usage
This package contains a suite of reusable components within the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/accessories
```
Import the desired component(s):
```js
import {
    Accessories, Addresses, Comments, Discussions, Documents,
} from '@enso-ui/accessories/bulma';
```

### Exports

`@enso-ui/accessories/bulma`:
- `Accessories`, 

### bulma/Accessories.vue

The bulma styled container for the various components that acts in a similar fashion to the Tabs.

Example:
```vue
<accessories>
    <template slot-scope="{ count }">
        <tab keep-alive
             id="Addresses">
            <addresses :id="myCompanyId"
                       type="LaravelEnso\Companies\app\Models\Company"
                       @update="$set(count, 'Addresses', $refs.addresses.count)"
                       ref="addresses"/>
        </tab>
    </template>
</accessories>
```

The accessories component shows a counter badge on each tab, it's up to each tab contents to manage this count.

### bulma/addresses/Addresses.vue

A bulma styled general purpose address manager component.

The idea behind this manager is that it can be 'attached' to other models so that you could have, for instance,
addresses for companies and addresses for orders. Because of that, it expects to receive the type of model 
we're managing addresses for and the id of the specific model instance. 

Example:
```vue
<addresses :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

Properties:
- `id` - `number`, required, the id of the addressable model
- `type` - `string`, required, default `null`, the type of the addressable model
- `query` - `string`, optional, default '', addresses filtering search query string

### bulma/addresses/Comments.vue

A bulma styled general purpose comment manager component.

The idea behind this manager is that it can be 'attached' to other models so that you could have, for instance,
comments for companies and comments for orders. Because of that, it expects to receive the type of model 
we're managing comments for and the id of the specific model instance. 

Example:
```vue
<comments :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

Properties:
- `id` - `number`, required, the id of the addressable model
- `type` - `string`, required, default `null`, the type of the addressable model
- `query` - `string`, optional, default '', addresses filtering search query string

### bulma/addresses/Discussions.vue

A bulma styled general purpose discussion manager component.

The idea behind this manager is that it can be 'attached' to other models so that you could have, for instance,
discussions for companies and discussions for projects. Because of that, it expects to receive the type of model 
we're managing discussions for and the id of the specific model instance. 

Example:
```vue
<discussions :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

Properties:
- `id` - `number`, required, the id of the discussable model
- `type` - `string`, required, default `null`, the type of the discussable model

### bulma/addresses/Documents.vue

A bulma styled general purpose document manager component.

The idea behind this manager is that it can be 'attached' to other models so that you could have, for instance,
documents for companies and documents for orders. Because of that, it expects to receive the type of model 
we're managing documents for and the id of the specific model instance. 

Example:
```vue
<documents :id="myCompanyId"
   type="LaravelEnso\Companies\app\Models\Company"/>
```

Properties:
- `id` - `number`, required, the id of the addressable model
- `type` - `string`, required, default `null`, the type of the addressable model
- `query` - `string`, optional, default '', documents filtering search query string
- `compact` - `boolean`, optional, default `false`, if true, a compact display mode is used


## Depends on

- `@enso-ui/card`,
- `@enso-ui/confirmation`,
- `@enso-ui/directives`,
- `@enso-ui/modal`,
- `@enso-ui/tabs`,
- `@enso-ui/uploader`,
- `@fortawesome/fontawesome-svg-core`,
- `@fortawesome/free-solid-svg-icons`,
- `@fortawesome/vue-fontawesome`,
- `bulma`,
- `lodash`,
- `quill`,
- `textarea-caret`,
- `v-tooltip`,
- `vue`,
- `vue-quill-editor`,
- `vuex`,

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
