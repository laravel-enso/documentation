# HowTo Videos

[![License](https://poser.pugx.org/laravel-enso/HowToVideos/license)](https://https://packagist.org/packages/laravel-enso/HowToVideos)
[![Total Downloads](https://poser.pugx.org/laravel-enso/HowToVideos/downloads)](https://packagist.org/packages/laravel-enso/HowToVideos)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/HowToVideos/version)](https://packagist.org/packages/laravel-enso/HowToVideos)

How-to video manager for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/howtovideos/screenshots/bulma_selection_112_thumb.png)](https://laravel-enso.github.io/howtovideos/videos/bulma_demo.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

Allows you to add videos to your application, to show users how to perform a specific action, demonstrate a feature, 
present a process flow, etc. This is a complementary package to [Tutorial Manager](https://github.com/laravel-enso/TutorialManager).
 
 * easily upload media clips from your computer, setting a title and a description
 * simple-to-use tag manager
 * optionally add a caption/cover picture for each video
 * optionally tag the clips and then filter them using the tags 
 * permissions dependent controls, where regular users can only view the videos. 

## Installation

The component is already included in the [Enso](https://github.com/laravel-enso/Enso) install and should not require any additional installation steps.

Depends on:
 - [Core](https://github.com/laravel-enso/Core) for middleware and user model 
 - [File manager](https://github.com/laravel-enso/FileManager) for handling files
 - [Helpers](https://github.com/laravel-enso/Helpers) for utility classes
 - [Image Transformer](https://github.com/laravel-enso/ImageTransformer) for optimizing the media files
 - [Select](https://github.com/laravel-enso/Select) for select functionality
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for various VueJS components

## Publishes

- `php artisan vendor:publish --tag=howToVideos-storage` - the storage folder that holds the medial files that will be uploaded
- `php artisan vendor:publish --tag=howToVideos-assets` - the VueJS components
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, usually used with the `--force` flag

## Notes

Even though the media files are filtered on upload using their mime-types, depending on the encoding and versions, 
some files / file types might not work in all browsers / devices , as this is a limitation of the `video.js` library. Experiment and find what works for you.
