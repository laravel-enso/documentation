# Searchable

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9bd280636d3840b696f6bf788820a6db)](https://www.codacy.com/app/laravel-enso/Searchable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Searchable&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/150948993/shield?branch=master)](https://github.styleci.io/repos/150948993)
[![License](https://poser.pugx.org/laravel-enso/searchable/license)](https://packagist.org/packages/laravel-enso/searchable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/searchable/downloads)](https://packagist.org/packages/laravel-enso/searchable)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/searchable/version)](https://packagist.org/packages/laravel-enso/searchable)

Task management dependency for [Laravel](https://laravel.com).

[![Watch the demo](https://laravel-enso.github.io/searchable/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/searchable/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

### Features

- can search for any configured model
- various actions are contextually available for each result, also depending on permissions
- the icons used for the actions are customizable
- the number is limited (by default at 10 results) to avoid too many DB hits
- any model may be added to the searchable list
- per-model customizations are available, such as attributes to search and the label to use 


Note: Although available result model actions are shown based on the current user's permissions for that model, 
care must be taken when due to the search functionality, results could be listed that user might not be meant to see.

It is recommended to look into and use global query scopes for these scenarios.    

### Configuration

The package needs to be configured by specifying the models we want searchable. The configuration file can be found
at `config/searchable.php` 

The following parameters are available:
*  `defaultLabel` - the default label attribute to be used for all models, 
unless overwritten on the model specific configuration (see below)
* `routes` - customizes the icons used for the routes 
    - `show`, default is `eye` 
    - `edit`, default is `pencil-alt`
    - `index`, default is `list-ul`
* `limit` - the max limit of results. Keep in mind that more results may be available, so if looking for a specific result, 
 be more specific when searching
* `models` - the list of models and their configurations that are searchable by the package

#### Model Configuration

Each model can be configured with a mix of required and optional attributes

```php
User::class => [
    'group' => 'User',
    'attributes' => ['first_name', 'last_name', 'email'],
    'label' => 'fullName',
    'permissionGroup' => 'administration.users',
],
```

* `group` - string, the name of the group this model belongs to, used to group the results. If not given, the class base name is used | (optional)
* `attributes` - array, the list of model attributes that we want to look at when searching | required
* `label` - string, the model attribute we want to use as representation of the model, optional. If given, this configuration option
overrides the global default `defaultLabel` option. Note that a computed attribute can be given as well.
* `permissionGroup` - string, the name of the permission group to use when displaying action options for this model's results | required
* `permissions` - array, the list of permissions to be used for this model's results action options. 
If not given, actions are displayed  (based on permissions) for `index`, `show` and `edit`. | (optional)

### Vue Components

The accompanying Vue component is bundled with the Core package.

### Publishes

- `php artisan vendor:publish --tag=searchable-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, can be used with the `--force` flag

### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
