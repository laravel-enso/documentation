---
sidebarDepth: 3
---

# Role Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bd4373f8222b4bcb81c08148404909c9)](https://www.codacy.com/app/laravel-enso/RoleManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/RoleManager&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/94814370/shield?branch=master)](https://styleci.io/repos/94814370)
[![License](https://poser.pugx.org/laravel-enso/rolemanager/license)](https://packagist.org/packages/laravel-enso/rolemanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/rolemanager/downloads)](https://packagist.org/packages/laravel-enso/rolemanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/rolemanager/version)](https://packagist.org/packages/laravel-enso/rolemanager)

Role Manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/rolemanager/screenshots/bulma_021_thumb.png)](https://laravel-enso.github.io/rolemanager/videos/bulma_demo_01.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- manages roles for the users of the application
- uses a hierarchical organization of permissions, which allow for a visual and intuitive update of permissions for a certain role
- comes by default with the `Administrator` and `Supervisor` roles

## Publishes

- `php artisan vendor:publish --tag=roles-factory` - the factory for the `Role` model
- `php artisan vendor:publish --tag=roles-seeder` - a seeder that will allow you to manage roles locally and then sync them with the live instance of the app
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
