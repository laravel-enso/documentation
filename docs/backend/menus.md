---
sidebarDepth: 3
---

# Menus

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3f2ff01a8dc04044a13c6f4fbb9e21bd)](https://www.codacy.com/app/laravel-enso/menus?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/menus&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/94800927/shield?branch=master)](https://github.styleci.io/repos/94800927)
[![License](https://poser.pugx.org/laravel-enso/menus/license)](https://packagist.org/packages/laravel-enso/menus)
[![Total Downloads](https://poser.pugx.org/laravel-enso/menus/downloads)](https://packagist.org/packages/laravel-enso/menus)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/menus/version)](https://packagist.org/packages/laravel-enso/menus)


Menu Manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/menus/screenshots/bulma_012_thumb.png)](https://laravel-enso.github.io/menus/videos/bulma_menu_management.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- allow for the easy management of the main (sidebar) menus of the application
- permits the creation, update, delete, ordering of the menus

## Usage

Please note that because we want to keep the compiled size down, throughout the enso ecosystem, 
icons are imported selectively.

What this means for the menu editor, is that when adding/changing a menu, you should also make sure you 
import the required icons. The proper place to include the new icons is:

`resources/js/app.js`

### Under the Hood

- a menu element may have several roles attached and is rendered only for the users with the respective roles
- menu element attributes:
  - `parent_id`: the id of its parent menu, if he has a parent, or null
  - `name`: the label that is translated and visible in the UI
  - `icon`: the icon classes, visible in the UI
  - `order_index`: used for ordering the elements of the menu in the desired sequence
  - `link`: is the link that's going to be accessed when clicking on the menu
  - `has_children`: is a flag telling us if a menu element has children and is used when rendering the menu
- for the menu changes to take effect, a page refresh or a re-login is needed 

## Publishes

- `php artisan vendor:publish --tag=menus-factory` - the factory for the `Menu` model
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
