---
sidebarDepth: 3
---

# Image Transformer
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/49a59dad1899460fa451510ef96307bb)](https://www.codacy.com/app/laravel-enso/ImageTransformer?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/ImageTransformer&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/96102464/shield?branch=master)](https://styleci.io/repos/96102464)
[![License](https://poser.pugx.org/laravel-enso/imagetransformer/license)](https://packagist.org/packages/laravel-enso/imagetransformer)
[![Total Downloads](https://poser.pugx.org/laravel-enso/imagetransformer/downloads)](https://packagist.org/packages/laravel-enso/imagetransformer)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/imagetransformer/version)](https://packagist.org/packages/laravel-enso/imagetransformer)

Image transformer dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

To install outside of Enso: 

`composer require laravel-enso/imagetransformer`

In order for the optimization to work, you need to have the following packages installed:
* pngquant
* gifsicle
* jpegoptim
* php7.1-gd or php-imagick

On Linux, you can do that with: `sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd`

**IMPORTANT NOTE:** 

The underlying image processing libraries may use a lot of memory, 
especially if the processed files are large (for example, for an 8MB file, more than 128MB of memory might be used ),
so make sure to configure php accordingly and/or do `ini_set(‘memory_limit’, ‘256M’);`   

Failure to do so may result in silent errors if allotted memory is insufficient.

## Features

- handles image optimization, using the [Laravel Image Optimizer](https://github.com/spatie/laravel-image-optimizer) library
- handles image cropping, using the [Intervention Image](https://github.com/intervention/image) library
- for the non essential libraries, handles missing libraries gracefully, logging the fact but does not throw an error

## Usage
The `ImageTransformer` class has 2 public methods:
- `optimize`, takes no argument and tries to optimize the file
- `resize`, takes the target width and height and resizes the file, possibly changing the aspect ration
- `width`, resizes the file to the given width, maintaining aspect ratio
- `height`, resizes the file to the given height, maintaining aspect ratio

Note, an `ImageTransformerException` is thrown if:
- the `gd` or `imagick` extensions are missing
- a file type not supported for an uploaded file
- an uploaded file fails the basic validation

## External dependencies

- [Laravel Image Optimizer](https://github.com/spatie/laravel-image-optimizer)
- [Intervention Image](https://github.com/intervention/image)

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
