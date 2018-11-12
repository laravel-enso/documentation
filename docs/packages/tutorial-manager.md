# Tutorial Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/282735fb74e647c4b630056271b66d77)](https://www.codacy.com/app/laravel-enso/TutorialManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/TutorialManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85628545/shield?branch=master)](https://styleci.io/repos/85628545)
[![License](https://poser.pugx.org/laravel-enso/tutorialmanager/license)](https://packagist.org/packages/laravel-enso/tutorialmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/tutorialmanager/downloads)](https://packagist.org/packages/laravel-enso/tutorialmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/tutorialmanager/version)](https://packagist.org/packages/laravel-enso/tutorialmanager)

Tutorial management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Screenshot](https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_023_thumb.png)](https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_023.png)

[![Watch the demo](https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_026_thumb.png)](https://laravel-enso.github.io/tutorialmanager/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- allows for a user friendly way of teaching users how to use the interface of the application
- permits adding, updating and deleting tutorial entries that can then be played for the selected route
- the tutorial functionality may be started/restarted from the right-hand sidebar, using the `?` button

## Under the Hood

- the `tutorials` table is used for the tutorial module and has several key attributes:
   - `permission_id` -  the permission where they're in use, since permissions are tied to routes, 
   and we're using permissions to know which tutorials to load for a page
   - `element` - identifies the element within the DOM, and may be an element, an id, in which case it should be 
   prefixed with a `#` or a class, in which case it should be prefixed with `.` or a combination of these
   - `placement` -  sets the position of the tutorial dialog, relative to the DOM element, 
   and can be: `top`, `bottom`, `left` or `right`
   - `order_index` - gives the order in which a particular tutorial element should be displayed, 
   in the context of the available tutorials for a certain page
- tutorial entries are displayed using [Intro.js](http://introjs.com)

## Publishes
- `php artisan vendor:publish --tag=tutorials-factory` - the factory for the `Tutorial` model
- `php artisan vendor:publish --tag=tutorials-assets` - the VueJS pages and components
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS assets,
once a newer version is released, can be used with the `--force` flag

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Depends on:
 - [Datatable](https://github.com/laravel-enso/Datatable) for displaying the list of tutorial entries
 - [FormBuilder](https://github.com/laravel-enso/FormBuilder) for creating the forms when managing tutorials
 - [Helpers](https://github.com/laravel-enso/Helpers) for utility classes and traits
 - [PermissionManager](https://github.com/laravel-enso/PermissionManager) for using permissions and routes to determine what tutorials to load 
 - [StructureManager](https://github.com/laravel-enso/StructureManager) for the migrations
