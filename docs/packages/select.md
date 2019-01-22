# Select
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c6799b0705d34fdab5cd100e7cfe6312)](https://www.codacy.com/app/laravel-enso/Select?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Select&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/85489940/shield?branch=master)](https://styleci.io/repos/85489940)
[![License](https://poser.pugx.org/laravel-enso/select/license)](https://packagist.org/packages/laravel-enso/select)
[![Total Downloads](https://poser.pugx.org/laravel-enso/select/downloads)](https://packagist.org/packages/laravel-enso/select)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/select/version)](https://packagist.org/packages/laravel-enso/select)

Bulma styled single and multi-select VueJS component with a server-side option list builder

[![Watch the demo](https://laravel-enso.github.io/select/screenshots/bulma_031.png)](https://laravel-enso.github.io/select/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- a standalone component with minimal dependencies
- minimal CSS styling that matches the beautiful [Bulma](https://bulma.io/) forms design
- the select options can be retrieved via ajax calls or, given directly, via a parameter
- when getting the data via ajax, the component can take various parameters for results filtering
- for the back-end, the package comes with a trait for easy retrieval and formatting of the data 
as expected by the VueJS component
- can filter the option list dynamically even based on the model’s one-to-many / many-to-many relationships
- can search in multiple attributes of a model, and the attribute(s) may be nested
- can specify the attribute used as label for the select options
- can be used to create a new 'tag' if no suitable result is found (soon)
- can use the arrow keys to navigate the list of results and Enter to select/deselect 
- is as small as can be, without skimping on features

## Usage

The VueJS component is already included in the Enso install and should not require any additional installation steps

1. Use the `OptionsBuilder` trait in your desired Controller

2. Define an `options` route for your Controller (and permissions as required)

3. Declare inside your controller the `$model` property as shown below:
	
	`protected $model = Model::class`
	
	where `Model::class` will be the Model used by the builder to extract the list of options
	
	You can use model computed attributes to display attributes when using the server-side mode, 
    since the entire model is sent back to the front-end.
	
	By default, the VueJS component will use the model’s `name` attribute as a label for the select option list - but this is customizable - and the `id` for the key. 
	See the options bellow for details. 
	
5. In your page/component add:

```vue
<vue-select 
    v-model=myVariable
    source="/pathForSelectOptionsRoute" multiple
    :params="params"
    :pivot-params="pivotParams"        
    :custom-params="customParams">
</vue-select>
```



## Options

### VueSelect VueJS component options 

In order to work, the component needs a data source. The data source can be a path for server-side, OR a formatted object. 
Either a `source` or an `options` parameter is required.

- `multiple` - boolean, flag that makes the element work as a multiselect, if omitted, the select acts as single select | default `false` | (optional)
- `source` - string, path to use when getting the select options **only for server-side**. | default `null`
- `options` - array of objects, list of options, **only where you don't need server-side** | default `[]`
- `trackBy` - string, the name of the option object attribute when selecting it (html `<option>` value equivalent) | default `id` |  (optional)
- `label` - string, the name of the option object attribute used as label (html `<option>` text equivalent) | default `name` |  (optional)
- `value` - variable holding the selected option(s). Can be a single value or an Array if the select is used as a multi-select. 
If not null/empty, the vue select will pre-populate the selected value(s) | default `[]` or `null` |  (optional)
- `limit` - number, parameter that limits the number of options loaded from the backend | default `100` | (optional)
- `disabled` - boolean, flag that sets the element as disabled | default `false` | (optional)
- `readonly` - boolean, flag that marks the element as readonly | default `false` | (optional)
- `taggable` - boolean, flag the allows the creation of new tags (soon) | default `false` | (optional)
- `disable-clear` - boolean, flag that disables the clear button and also prevents deselecting the last input value for single select | default `false` | (optional)
- `hasError` - boolean, flag sets an error styling for the select, such as when validation fails | default `false` | (optional)
- `params` - object, attributes from the same table/model used for filtering results in server-side mode. 
Format: `params: { 'fieldName': fieldValue }` | default `null` | (optional)
- `pivotParams` - object, attributes from linked tables/models used for filtering results in server-side mode. 
Format: `pivotParams: { 'table': {'attribute':value} }` | default `null` | (optional)

	Note that the value may also be an array, in which case, under the hood, a `where in` type of query will be used. 

- `customParams` - object, can be anything. 
Using customParams implies that you provide a 'query' method inside the controller, so you can make use of the custom object  provided in the request. | (optional)
- `placeholder` - custom placeholder when no option is selected | default `'Choose'` | (optional)
- `labels` - object, the labels used inside the component | default `{ selected: 'selected', select: 'select', deselect: 'deselect', noOptions: 'No options available', noResult: 'No search results found', addTag: 'Add option', }` | (optional)
- `i18n`, optional, function, that is used for translating labels, headers, and table data
The default value (function) for this parameter simply returns its argument as the translated value
- `translated`, optional, boolean, indicates that the available options should be translated too
- `debounce` - optional, number, the number of milliseconds to use when debouncing the search on type | default `300` ms | (optional)
- `errorHandler` - optional, function, will be used in server side mode when fetching options in axios's `catch`


### VueSelectFilter component options 
Takes the following parameters:	
- `title` - string, the title to display above the options | default `null` | (optional)	
- `value` -  the selected value from the list of options | default null | required	
	
Since this component is a wrapper for `VueSelect`, and all listeners and attributes are passed-through,	
the regular `VueSelect` options are available

### OptionBuilder trait options

- `$queryAttributes`, array with the list of attributes we're searching in, when getting the select options | default `['name']` | (optional)
- `$model`, string, the fully qualified namespace of the class that we're querying on, in order to get the select options | default `null` | required
- `query(Request $request)`, a method which will return the query builder that we're using when querying for options | default `null` | (optional)

Note: If a query method is provided, it's going to be used, if it's not given, a query will be constructed, using the given class and other values.
Note: The query attribute(s) given may have a nested structure, for instance `user.name` where `user` is a relationship on the model. 
In such a case the builder will follow through the relationships to query the given attribute.

## Publishes

- `php artisan vendor:publish --tag=select-assets` - the main VueJS components and their dependencies
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS assets,
once a newer version is released, can be used with the `--force` flag

## Notes

We've tried to make it as light as possible and use the minimum amount of external libraries and dependencies.
Therefore, the package depends just on:
 - [v-click-outside](https://github.com/ndelvalle/v-click-outside) for closing the dropdown when clicking outside clicks 
 - [lodash](https://github.com/lodash/lodash) for debouncing using a selective import
 - [Font Awesome 5](https://fontawesome.com/) for the icons, using selective imports

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.
