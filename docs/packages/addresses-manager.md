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
- has a publishable configuration file, where you can define the addresable models, 
set custom validations via the Laravel syntax, as well as other options
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
<addresses :id="modelId" type="modelAlias">
</addresses>
```

## Options

- `id` - number, the id of the addressable model | required
- `type` - string, the addressable model alias you set in the config | required
- `open` - boolean, flag for the starting style (open/closed) of the box | default`true` | (optional)
- `title` - string, the text for the box title | default `null` | (optional)

## Customization

If you need to customize the form, you may publish it. Also, you may mark any form fields as custom
and customize them in you page, using slots (like for the VueForm). 

If you need to customize the address card, you may also pass a different template using the 'address' slot, 
provided for this purpose.

As an example of such customization, you may take a look at the 
[RoAddresses](https://github.com/laravel-enso/RoAddresses) package

## Configuration
Inside the `config/enso/addresses.php` file, you'll find several customization options:
- `addressables`, the mapping of the addressable entities
- `streetTypes`, the list of street types shown in the form's street type select
- `buildingTypes`, same as above, for buildings
- `validations`, in Laravel Request Validation format, they are used for the store/update operations  

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
