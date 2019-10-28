---
sidebarDepth: 3
---

# Typeahead

![npm license](https://img.shields.io/npm/l/@enso-ui/typeahead.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/typeahead.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/typeahead.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/typeahead.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/typeahead.svg) 

Vue Typeahead

## Usage
Unless where specified otherwise, the components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/typeahead
```
Import the desired component(s):
```js
import { Typeahead, EnsoTypeahead } from '@enso-ui/typeahead/bulma';
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/typeahead/bulma`:
- `Typeahead`,
- `EnsoTypeahead`,

`@enso-ui/typeahead/renderless`:
- `Typeahead`,

### bulma/EnsoTypeahead.vue
This bulma styled component built on top of its base version is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev. 

'Passed-through' properties:
- `disabled` - `boolean`, optional, default `false`, if true the component is disabled
- `isRounded` - `boolean`, optional, default `false`, if true, the input is rounded
- `noResults` - `string`, optional, default `Nothing found...`, the text shown when there are no results
- `placeholder` - `string`, optional, default `What are you searching for today?`
- `searching` - `string`, optional, default `Searching...`, text show while searching is in progress

### bulma/Typeahead.vue
A bulma styled typeahead component built on top of its renderless counterpart.

Example:
```vue
<typeahead is-rounded source="get/my/resource"   
    @update="reset"
    ref="typeahead">
    <template v-slot:controls="{ items }">
        Controls go here
    </template>
    <template v-slot:option="{ highlight, item }">
        Option styling goes here
    </template>
</typeahead>
```

Slots:
- `controls`, slot for any controls
- `option`, slot for the typeahead results rendering

Properties:
- `disabled` - `boolean`, optional, default `false`, if true the component is disabled
- `isRounded` - `boolean`, optional, default `false`, if true, the input is rounded
- `noResults` - `string`, optional, default `Nothing found...`, the text shown when there are no results
- `placeholder` - `string`, optional, default `What are you searching for today?`
- `searching` - `string`, optional, default `Searching...`, text show while searching is in progress

'Passed-through' properties:
- `debounce` - `number`, optional, default `250`, 
- `errorHandler` - `boolean`, optional, by default the error is thrown, function used to handle errors
- `label` - `string`, optional, default `label`, the attribute from the typeahead results that is used as label 
- `paginate` - `number`, optional, default `100`, the pagination size 
- `params` - `Object`, optional, default `null`, extra parameters that can be sent with the request
- `query` - `string`, optional, default ``, the string used for the backend query/search
- `regExp`, `RegExp`, optional, default `/(.*?)/`, expression used to validate the input contents
- `source` - `string`, required, the URL used for the query/search to the back end
- `value` - `string`, optional, default ``, the value of the typeahead

### renderless/Typeahead.vue
The renderless typeahead component that can be built upon to create custom components.

Properties:
- `debounce` - `number`, optional, default `250`, 
- `errorHandler` - `boolean`, optional, by default the error is thrown, function used to handle errors
- `label` - `string`, optional, default `label`, the attribute from the typeahead results that is used as label 
- `paginate` - `number`, optional, default `100`, the pagination size 
- `params` - `Object`, optional, default `null`, extra parameters that can be sent with the request
- `query` - `string`, optional, default ``, the string used for the backend query/search
- `regExp`, `RegExp`, optional, default `/(.*?)/`, expression used to validate the input contents
- `source` - `string`, required, the URL used for the query/search to the back end
- `value` - `string|Object`, optional, default `null`, the value of the typeahead

Methods:
- `fetch()`, retrieves results from the back end
- `update(query = '')`, emits an `input` event with the given query attribute as payload
- `clear()`, clears the input an the results

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
- `lodash`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
