# Role Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bd4373f8222b4bcb81c08148404909c9)](https://www.codacy.com/app/laravel-enso/RoleManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/RoleManager&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/94814370/shield?branch=master)](https://styleci.io/repos/94814370)
[![License](https://poser.pugx.org/laravel-enso/rolemanager/license)](https://packagist.org/packages/laravel-enso/rolemanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/rolemanager/downloads)](https://packagist.org/packages/laravel-enso/rolemanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/rolemanager/version)](https://packagist.org/packages/laravel-enso/rolemanager)

Role Manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

[![Watch the demo](https://laravel-enso.github.io/rolemanager/screenshots/bulma_021_thumb.png)](https://laravel-enso.github.io/rolemanager/videos/bulma_demo_01.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Details

- manages roles for the users of the application
- uses a hierarchical organization of permissions, which allow for a visual and intuitive update of permissions for a certain role
- comes by default with the `Administrator` and `Supervisor` roles

## Publishes

- `php artisan vendor:publish --tag=roles-assets` - the VueJS components and pages
- `php artisan vendor:publish --tag=roles-factory` - the factory for the `Role` model
- `php artisan vendor:publish --tag=roles-seeder` - a seeder that will allow you to manage roles locally and then sync them with the live instance of the app
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS assets, once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders,
once a newer version is released, usually used with the `--force` flag

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Depends on:
 - [VueDatatable](https://github.com/laravel-enso/VueDatatable) for displaying the list of roles
 - [FormBuilder](https://github.com/laravel-enso/FormBuilder) for creating the forms when managing languages
 - [Helpers](https://github.com/laravel-enso/Helpers) for utility classes and traits
 - [MenuManager](https://github.com/laravel-enso/MenuManager) for managing permissions with the menus 
 - [PermissionManager](https://github.com/laravel-enso/PermissionManager) for the integration with permissions 
 - [Select](https://github.com/laravel-enso/Select) for the select list builder features  
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
