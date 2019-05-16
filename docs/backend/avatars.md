---
sidebarDepth: 3
---

# Avatars

[![StyleCI](https://github.styleci.io/repos/94704466/shield?branch=master)](https://github.styleci.io/repos/94704466)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d84efcf2530348d29f2ca573d06f7314)](https://www.codacy.com/app/laravel-enso/avatars?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/avatars&amp;utm_campaign=Badge_Grade)
[![License](https://poser.pugx.org/laravel-enso/avatars/license)](https://packagist.org/packages/laravel-enso/avatars)
[![Total Downloads](https://poser.pugx.org/laravel-enso/avatars/downloads)](https://packagist.org/packages/laravel-enso/avatars)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/avatars/version)](https://packagist.org/packages/laravel-enso/avatars)


User Avatar manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/avatars/screenshots/bulma_cap001_thumb.png)](https://laravel-enso.github.io/avatars/videos/bulma_avatar_change.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- comes with a table migration, in order to be able to store avatar related data
- includes model, routes & controllers
- creates a folder used to store the avatar files and a default avatar for users that do not have an avatar set
- uses the [File Manager](https://github.com/laravel-enso/FileManager) package for uploading the avatar files
- uses the [Image Transformer](https://github.com/laravel-enso/ImageTransformer) package for cropping and optimizing the avatar files
- uses the [Laravolt Avatar](https://github.com/laravolt/avatar) for generating avatars from user names
- uses a policy to ensure that normal users can only modify their own avatars, while administrators can modify any avatar 

## Notes on usage

Since this package is using image processing libraries and these underlying libraries may use a lot of memory, 
especially if the processed files are large (for example, for an 8MB image file, more than 128MB of memory might be used ),
make sure to configure php accordingly and/or do `ini_set(‘memory_limit’, ‘256M’);`   

Failure to do so may result in silent errors if allotted memory is insufficient.

## Commands

- `php artisan enso:avatars:generate` - generates avatars for users which do not already have an avatar

## Publishes

- `php artisan vendor:publish --tag=avatars-storage` - storage folder and default avatar

## External dependencies

 - [Laravolt Avatar](https://github.com/laravolt/avatar) 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
