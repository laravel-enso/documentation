---
sidebarDepth: 3
---

# HowTo Videos

[![License](https://poser.pugx.org/laravel-enso/HowToVideos/license)](https://https://packagist.org/packages/laravel-enso/HowToVideos)
[![Total Downloads](https://poser.pugx.org/laravel-enso/HowToVideos/downloads)](https://packagist.org/packages/laravel-enso/HowToVideos)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/HowToVideos/version)](https://packagist.org/packages/laravel-enso/HowToVideos)

How-to video manager for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/howtovideos/screenshots/bulma_selection_112_thumb.png)](https://laravel-enso.github.io/howtovideos/videos/bulma_demo.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

Allows you to add videos to your application, to show users how to perform a specific action, demonstrate a feature, 
present a process flow, etc. This is a complementary package to [Tutorial Manager](https://github.com/laravel-enso/TutorialManager).
 
 * easily upload media clips from your computer, setting a title and a description
 * simple-to-use tag manager
 * optionally add a caption/cover picture for each video
 * optionally tag the clips and then filter them using the tags 
 * permissions dependent controls, where regular users can only view the videos. 

## Publishes

- `php artisan vendor:publish --tag=howToVideos-storage` - the storage folder 
that holds the medial files that will be uploaded

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
