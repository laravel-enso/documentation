---
sidebarDepth: 3
---

# Addresses Manager

[![StyleCI](https://styleci.io/repos/113445673/shield?branch=master)](https://styleci.io/repos/113445673)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1bd97370791b452f977c70e9ae39c72c)](https://www.codacy.com/app/mihai-ocneanu/AddressesManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/AddressesManager&amp;utm_campaign=Badge_Grade)
[![License](https://poser.pugx.org/laravel-enso/addressesmanager/license)](https://packagist.org/packages/laravel-enso/addressesmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/addressesmanager/downloads)](https://packagist.org/packages/laravel-enso/addressesmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/addressesmanager/version)](https://packagist.org/packages/laravel-enso/addressesmanager)

Free-form addresses manager for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

There is a front end implementation for this this api in the [accessories](https://github.com/enso-ui/accessories) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Screenshot](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041_thumb.png)](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_041.png)

[![Screenshot](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042_thumb.png)](https://laravel-enso.github.io/addressesmanager/screenshots/bulma_042.png)

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

1. the configuration should be published, and inside you need to define the addresable types
2. use the package's `Addresable` trait for the models you want to make addressable
3. insert the `Addreses` vue component where required in your pages/components, see the 
front end implementation [docs](https://docs.laravel-enso.com/frontend/accessories.html#addresses) for the available options

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
- create a local template and set the path in addresses configuration, under the `enso.addresses.formTemplate` key.
Also, you may mark any form fields as custom and then customize them in your page, using slots (like for the VueForm). 
- create a new request validation and bind your local implementation to the package's `ValidateAddressRequest`
 in your local `AppServiceProvider`

## Publishes

- `php artisan vendor:publish --tag=addresses-seeder` - the seeder used for countries
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders
once a newer version is released, usually used with `--force` 
- `php artisan vendor:publish --tag=addresses-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with `--force`

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
