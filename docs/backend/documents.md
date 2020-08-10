---
sidebarDepth: 3
---

# Documents

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3118ebe6bb4647df99675e83a9f56de2)](https://www.codacy.com/app/laravel-enso/documents?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/documents&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85587885/shield?branch=master)](https://github.styleci.io/repos/85587885)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/documents/downloads)](https://packagist.org/packages/laravel-enso/documents)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/documents/version)](https://packagist.org/packages/laravel-enso/documents)

Documents Manager for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

There is a front end implementation for this this api in the [accessories](https://github.com/enso-ui/accessories) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/documents/screenshots/bulma_019_thumb.png)](https://laravel-enso.github.io/documents/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- permits the management (upload, download, delete, show) of documents in the application
- can attach documents to any other model
- uses [Files](https://github.com/laravel-enso/files) for file operations
- uses the [ImageTransformer](https://github.com/laravel-enso/ImageTransformer) package for optimizing 
the uploaded image files
- security policies are used to enforce proper user authorization
- comes with a `Documentable` trait that can be quickly added to the model you want to give this functionality to
- offers various configuration options, including the option to delete all attached documents 
to a Documentable entity, when it gets deleted 
- creates a `Document` model that has a `documentable` morphTo relationship
- polymorphic relationships are used, which makes it possible to attach documents to any other entity
- once documents are attached to an entity, you should not be able to delete the entity without deciding what
you want to do with the associated documents. This is configurable in the options, see below

## Usage

1. add `use Documentable` in the Model that needs documents and import the trait. 
Then you'll have access to the `$model->documents` relationship

2. because users upload documents you can add `use Documents` to the User model. 
This trait will set the relationship between users and the documents that they create

3. import the `Documents` vue component and use it in your pages/components, see the 
front end implementation [docs](https://docs.laravel-enso.com/frontend/accessories.html#documents) 
for the available options

**IMPORTANT NOTE:** 

Since this package is using image processing libraries and these underlying libraries may use a lot of memory, 
especially if the processed files are large (for example, for an 8MB image file, more than 128MB of memory might be used ),
make sure to configure php accordingly and/or do `ini_set(‘memory_limit’, ‘256M’);`   

Failure to do so may result in silent errors if allotted memory is insufficient.

### Configuration

The `config/enso/documents.php` configuration file, lets you customize the following:
- `deletableTimeLimit` - the time limit for deleting an uploaded document, in seconds. 
Default is `60 * 60`  (1 hour)
- `linkExpiration`, - the time limit for document share link, in seconds. 
Default is `60 * 60 * 24`  (1 day)
- `imageWidth` - the image width, in pixels, used when resizing bigger picture files. Default is `2048`
- `imageHeight` - the image height, in pixels, used when resizing bigger picture files. Default is `2048`
- `onDelete`, string, option that manages the case when the commentable entity is deleted and it has attached addresses.
Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a commentable model is deleted, the comments attached to it are also deleted. 
    With the restrict option,  when attempting to delete a commentable model with attached comments, an exception is thrown.
    
- `loggableMorph`, the list of entities using the commentable functionality, each mapped to its respective loggable attribute
For example: 
    ```php
    'commentable' => [
        Company::class => 'name',
    ],
    ```

   This configuration is used for activity logging.

## Publishes

- `php artisan vendor:publish --tag=documents-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
