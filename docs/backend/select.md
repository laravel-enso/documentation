---
sidebarDepth: 3
---

# Select

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c6799b0705d34fdab5cd100e7cfe6312)](https://www.codacy.com/app/laravel-enso/select?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/select&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85489940/shield?branch=master)](https://github.styleci.io/repos/85489940)
[![License](https://poser.pugx.org/laravel-enso/select/license)](https://packagist.org/packages/laravel-enso/select)
[![Total Downloads](https://poser.pugx.org/laravel-enso/select/downloads)](https://packagist.org/packages/laravel-enso/select)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/select/version)](https://packagist.org/packages/laravel-enso/select)

Single and multi-select server-side option list builder

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [select](https://github.com/enso-ui/select) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/select/screenshots/bulma_031.png)](https://laravel-enso.github.io/select/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

To install outside of Enso:

1. install the package: `composer require laravel-enso/select`
2. install the front end api implementation: `yarn add @enso-ui/select`

## Features

- a standalone component with minimal dependencies
- the select options can be retrieved via ajax calls or, given directly, via a parameter
- when getting the data via ajax, the component can take various parameters for results filtering
- for the back-end, the package comes with a trait for easy retrieval and formatting of the data 
- can filter the option list dynamically even based on the model’s one-to-many / many-to-many relationships
- can search in multiple attributes of a model, and the attribute(s) may be nested
- can specify the attribute used as label for the select options
- can be used to create a new 'tag' if no suitable result is found (soon)
- can use the arrow keys to navigate the list of results and Enter to select/deselect 
- is as small as can be, without skimping on features

## Usage

1. Use the `OptionsBuilder` trait in your desired (select) Controller

2. Define an `options` route for your Controller (and permissions as required)

3. Declare inside your controller the `$model` property as shown below:
	
	`protected $model = Model::class`
	
	where `Model::class` will be the Model used by the builder to extract the list of options
	
	You can use model computed attributes to display attributes when using the server-side mode, 
    since the entire model is sent back to the front-end.
	
	By default, the model’s `name` attribute as a label for the select option list - but this is customizable - and the `id` for the key. 
	See the options bellow for details. 
	
5. In your page/component add the VueSelect component, and pass it the required parameters. Be sure to read the 
front end's api docs [here](https://docs.laravel-enso.com/frontend/select.html).

### OptionBuilder trait options

- `$queryAttributes`, array with the list of attributes we're searching in, when getting the select options | default `['name']` | (optional)
- `$model`, string, the fully qualified namespace of the class that we're querying on, in order to get the select options | default `null` | required
- `query(Request $request)`, a method which will return the query builder that we're using when querying for options | default `null` | (optional)

::: tip Tip
If a query method is provided, it's going to be used, if it's not given, a default query will be constructed, using the given class and other values.
:::

::: tip Tip
The query attribute(s) given may have a nested structure, for instance `user.name` where `user` is a relationship on the model. 
In such a case the builder will follow through the relationships to query the given attribute.
:::

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
