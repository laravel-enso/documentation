---
sidebarDepth: 3
---

# Permission Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4ec2d18588a64875aa432c9a827a1849)](https://www.codacy.com/app/laravel-enso/PermissionManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/PermissionManager&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/94779938/shield?branch=master)](https://styleci.io/repos/94779938)
[![License](https://poser.pugx.org/laravel-enso/permissionmanager/license)](https://packagist.org/packages/laravel-enso/permissionmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/permissionmanager/downloads)](https://packagist.org/packages/laravel-enso/permissionmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/permissionmanager/version)](https://packagist.org/packages/laravel-enso/permissionmanager)

Permission Manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Screenshot](https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029_thumb.png)](https://laravel-enso.github.io/permissionsmanager/screenshots/bulma_029.png)

## Installation

Comes pre-installed in Enso.

## Features

- permissions are managed based on the user role
- allows creating, updating and deleting of permissions for each route
- has the `access-route` policy which can be used to check if the a user is authorized on a given route
- comes with the `VerifyRouteAccess` middleware that checks against unauthorized access

## Usage

- inside `web.php` there is a route for each action within the application, and each route has the `name` attribute defined
- for each route where we need to have authorization checks, we must define a permission, permission which needs to have the same name as the route
- routes: 
    - are nested, the resulting name looking something like `group1.group2...route`
    - when creating new routes, be sure to follow the Enso convention and use camelCase (`myGroup.myRoute`) instead of snake_case(`my_group.my_route`) or mix-n-matching. 
    This will make for a more consistent feel and also ensure the Enso logic will work as designed.
- for each request we check the existence of the link between the user's role and the permission for the request's route
- permissions' attributes:
     - name: see above
     - description - is human readable and is used when displaying a user's action history (on his profile page)
     - type - may be `read` or `write` and is an informative flag
     - is_default - flag which lets us know if a permission needs to be automatically allotted to any new role we create
- for routes where we don't need to have authorization checks, permissions are not mandatory, **BUT**
- if we want to log and display the users' actions, permissions become necessary, as they're used when displaying statistics
- permissions are automatically grouped together, based on their segments, in the UI, for presentation and functional purposes, so 
administrators can easily configure roles

## Publishes

once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=permissions-factory` - the factory for the `Permission` model
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
