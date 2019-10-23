---
sidebarDepth: 3
---

# Addresses

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7404086a15a4db6b2080b1d09b0688a)](https://www.codacy.com/app/laravel-enso/addresses?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/addresses&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/113445673/shield?branch=master)](https://github.styleci.io/repos/113445673)
[![License](https://poser.pugx.org/laravel-enso/addresses/license)](https://packagist.org/packages/laravel-enso/addresses)
[![Total Downloads](https://poser.pugx.org/laravel-enso/addresses/downloads)](https://packagist.org/packages/laravel-enso/addresses)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/addresses/version)](https://packagist.org/packages/laravel-enso/addresses)

Free-form addresses manager for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

There is a front end implementation for this this api in the [accessories](https://github.com/enso-ui/accessories) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Screenshot](https://laravel-enso.github.io/addresses/screenshots/bulma_041_thumb.png)](https://laravel-enso.github.io/addresses/screenshots/bulma_041.png)

[![Screenshot](https://laravel-enso.github.io/addresses/screenshots/bulma_042_thumb.png)](https://laravel-enso.github.io/addresses/screenshots/bulma_042.png)

## Installation

Comes pre-installed in Enso.

## Features

- can be used to attach addresses to any entity, via a polymorphic relationship
- allows saving of multiple addresses for an addresable entity
- features an easy flow for setting the default address 
- comes with an additional table for Countries, with all the countries pre-populated
- brings its own free-form form for the edit and creation of addresses
- has a publishable configuration file where you can customize the module to your liking 
- includes an `Addressable` trait, for defining relationships and attributes
- the package as whole is designed to be extendable, so you could create custom versions for specific countries

## Usage

1. you may publish the configuration and customize the options as needed
2. use the package's `Addresable` trait for the models you want to make addressable
3. insert the `Addreses` vue component where required in your pages/components, see the 
front end implementation [docs](https://docs.laravel-enso.com/frontend/accessories.html#addresses) for the available options

### Configuration

Inside the `config/enso/addresses.php` file, you'll find several customization options:
- `onDelete`, string, option that manages the case when the commentable entity is deleted 
    and it has attached discussions. Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a discussable model is deleted, the discussions attached to it are also deleted. 
    With the restrict option,  when attempting to delete a discussable model with attached discussions, an exception is thrown.
- `loggableMorph`, the list of entities using the addressable functionality, 
    each mapped to its respective loggable attribute. For example: 
    ```php
    'addressable' => [
        Company::class => 'name',
    ],
    ```
- `streetTypes`, the list of street types shown in the form's street type select
- `buildingTypes`, same as above, for buildings
- `label`, label configuration options:
    - `separator`, the separator used when composing labels, default `-`
    - `attributes`, the list of attributes used for the label, default: `'localityName', 'street', 'number'`

### Extending the addresses

In your project you may have the need to alter and or extend the addresses structure by 
adding/removing table columns.
To achieve this, you'd need to:
- add migration(s) to your local project, making the necessary changes. Note that if using 
    sqlite for testing, some of the migration commands may not be available
- create a local model which extends the package model and set the proper `$fillable` attribute, 
    define relations, etc.    
- create a local template and set the path in addresses configuration, 
    under the `enso.addresses.formTemplate` key. Also, you may mark any form fields as custom and then 
    customize them in your page, using slots (like for the VueForm). 
- create a new form builder, extend the one in the package (`AddressForm`), and specify the `TemplatePath`
    to your previously created template.    
- create a new request validation and extend the one in the package (`ValidateAddressRequest`)
- bind your local implementations of the model, request and the form builder to their package counterparts
    in your local `AppServiceProvider`

```php
class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        ValidateAddressRequest::class => MyValidateddressRequest::class,
        AddressForm::class => MyForm::class,
        Address::class => MyAddress::class,
    ]; 

    ...
}
```

::: tip
Note that if you just want to customize the label for the address, you may simply publish and customize the 
`label` section of the config (see the Configuration section above). 
::: 

## Publishes

- `php artisan vendor:publish --tag=addresses-seeder` - the seeder used for countries
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders
once a newer version is released, usually used with `--force` 
- `php artisan vendor:publish --tag=addresses-factory` - the factory used for address
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders
once a newer version is released, usually used with `--force`
- `php artisan vendor:publish --tag=addresses-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with `--force`

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
