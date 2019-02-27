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
The components can be used outside of the Enso ecosystem.

### bulma/Typeahead.vue
A bulma styled typeahead component built on top of its renderless counterpart.

Example:
```vuejs
<typeahead is-rounded    
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
- `disabled`, `boolean`, optional, default `false`, if true the component is disabled
- `isRounded`, `boolean`, optional, default `false`, if true, the input is rounded
- `label`, `string`, optional, default `label`, the attribute from the typeahead results that is used as label 
- `noResults`, `string`, optional, default `Nothing found...`, the text shown when there are no results
- `placeholder`, `string`, optional, default `What are you searching for today?`
- `searching`, `string`, optional, default `Searching...`, text show while searching is in progress
- `value`, `string`, optional, default ``, the value of the typeahead

### renderless/Typeahead.vue
The renderless typeahead component that can be built upon to create custom components.

Properties:
- `debounce`, `number`, optional, default `250`, 
- `errorHandler`, `boolean`, optional, by default the error is thrown, function used to handle errors
- `label`, `string`, optional, default `label`, the attribute from the typeahead results that is used as label 
- `paginate`, `number`, optional, default `100`, the pagination size 
- `params`, `Object`, optional, default `null`, extra parameters that can be sent with the request
- `query`, `string`, optional, default ``, the string used for the backend query/search
- `regExp`, `RegExp`, optional, default `/(.*?)/`, expression used to validate the input contents
- `source`, `string`, required, the URL used for the query/search to the back end

Methods:
- `fetch()`, retrieves results from the back end
- `update(query = '')`, emits an `input` event with the given query attribute as payload

## Documentation

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

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

## Exports

`@enso-ui/transitions`:
- `Fade`,
- `SlideLeft`,
- `SlideRight`,
- `SlideUp`,
- `SlideDown`,
- `FadeLeft`,
- `FadeRight`,
- `FadeUp`,
- `FadeDown`,
- `Zoom`,

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
