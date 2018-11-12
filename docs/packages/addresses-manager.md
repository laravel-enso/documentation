# Addresses Manager
[![StyleCI](https://styleci.io/repos/113445673/shield?branch=master)](https://styleci.io/repos/113445673)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1bd97370791b452f977c70e9ae39c72c)](https://www.codacy.com/app/mihai-ocneanu/AddressesManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/AddressesManager&amp;utm_campaign=Badge_Grade)
[![License](https://poser.pugx.org/laravel-enso/addressesmanager/license)](https://packagist.org/packages/laravel-enso/addressesmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/addressesmanager/downloads)](https://packagist.org/packages/laravel-enso/addressesmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/addressesmanager/version)](https://packagist.org/packages/laravel-enso/addressesmanager)

Free-form addresses manager for [Laravel Enso](https://github.com/laravel-enso/Enso)

[![Screenshot](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041_thumb.png)](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041.png)

[![Screenshot](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042_thumb.png)](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042.png)

## Features

- can be used to attach addresses to any entity, via a polymorphic relationship
- allows saving of multiple addresses for an addresable entity
- features and easy flow for setting the default address 
- comes with an additional table for Countries, with all the countries pre-populated
- brings its own free-form form for the edit and creation of addresses
- has a publishable configuration file where you can customize the module to your liking
- comes with its own VueJS component `addresses` 
- includes an `Addressable` trait, for defining relationships and attributes
- the VueJS component as well as the whole package is designed to be extendable, 
so you could create custom versions for specific countries

## Usage
1. the configuration should be published, and inside you need to define the addresable types
2. use the package's `Addresable` trait for the models you want to make addressable
3. insert the `Addreses` vue component where required in your pages/components. The `id` and `type` parameters are 
the essential ones.

```vue
<addresses :id="modelId" type="modelClass">
</addresses>
```

## Options

- `id` - number, the id of the addressable model | required
- `type` - string, the addressable model alias you set in the config | required
- `query` - string, the text for searching in the addresses | default `''` | (optional)
- `controls` - boolean, flag for showing the controls for the component, such as the buttons for creating a new address, 
reloading the list of addresses, etc. | default`false` | (optional)

## Customization

If you need to customize the form, you may publish it. Also, you may mark any form fields as custom
and customize them in you page, using slots (like for the VueForm). 

If you need to customize the address card, you may also pass a different template using the 'address' slot, 
provided for this purpose.

As an example of such customization, you may take a look at the 
[RoAddresses](https://github.com/laravel-enso/RoAddresses) package

## Configuration
Inside the `config/enso/addresses.php` file, you'll find several customization options:
- `onDelete`, string, option that manages the case when the commentable entity is deleted and it has attached discussions.
Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a discussable model is deleted, the discussions attached to it are also deleted. 
    With the restrict option,  when attempting to delete a discussable model with attached discussions, an exception is thrown.
- `formTemplate`, the path to a local, custom JSON template for the address form 
- `loggableMorph`, the list of entities using the addressable functionality, each mapped to its respective loggable attribute
For example: 
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

## Extending the addresses
In your project you may have the need to alter and or extend the addresses structure by adding/removing table columns.
To achieve this, you'd need to:
- add migration(s) to your local project, making the necessary changes. Note that if using sqlite for testing, 
some of the migration commands may not be available
- create a new template for the addresses form, and declare it in the config (`formTemplate`)
- create a new request validation, ensuring it implements the `ValidatesAddressRequest` marker interface. 
Bind your local implementation to the interface in your local `AppServiceProvider`
- if needed, customize the `address-card` VueJS component by passing your own template in `address` slot.  

## Commands
The package comes with the following artisan commands, to help you migrate from previous versions to 2.1.28+, 
- `php artisan enso:migrate --buildingType`, introduces a new column, `addresses.building_type`
- `php artisan enso:migrate --countries`, introduces new columns to the `countries` table and re-populates data. 
Note this is a breaking change!

Both these changes are run automatically after the package install. 

## Publishes
- `php artisan vendor:publish --tag=addresses-config` - configuration file
- `php artisan vendor:publish --tag=addresses-form` - form used for creating/editing addresses
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with `--force`
- `php artisan vendor:publish --tag=addresses-assets` - the VueJS components
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with `--force`
 
## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.
