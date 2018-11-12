# Documents Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3118ebe6bb4647df99675e83a9f56de2)](https://www.codacy.com/app/laravel-enso/DocumentsManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/DocumentsManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85587885/shield?branch=master)](https://styleci.io/repos/85587885)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/documentsmanager/downloads)](https://packagist.org/packages/laravel-enso/documentsmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/documentsmanager/version)](https://packagist.org/packages/laravel-enso/documentsmanager)

Documents Manager for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/documentsmanager/screenshots/bulma_019_thumb.png)](https://laravel-enso.github.io/documentsmanager/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- permits the management (upload, download, delete, show) of documents in the application
- can attach documents to any other model
- comes with its own VueJS components
- uses [FileManager](https://github.com/laravel-enso/FileManager) for file operations
- uses the [ImageTransformer](https://github.com/laravel-enso/ImageTransformer) package for optimizing 
the uploaded image files
- security policies are used to enforce proper user authorization
- comes with a `Documentable` trait that can be quickly added to the model you want to give this functionality to
- offers various configuration options, including the option to delete all attached documents 
to a Documentable entity, when it gets deleted 

## Under the Hood

- creates a `Document` model that has a `documentable` morphTo relationship
- polymorphic relationships are used, which makes it possible to attach documents to any other entity
- within the entity to which we want to attach documents, we must use the `Documentable` trait
- once documents are attached to an entity, you should not be able to delete the entity without deciding what
you want to do with the associated documents. This is configurable in the options, see below

## Installation Steps

This package is already included in [Laravel Enso](https://github.com/laravel-enso/Enso), so no further steps are necessary.

## Usage

1. Import the VueJS component in your page/component and then compile

````js
import Documents from '../../../components/enso/documents/Documents.vue';
````

2. Add the component inside your page/component

```vue
<documents 
    id="modelId"
    type="model_class">
</documents>
```

Note: you may substitute the documents component with the documents-card component as the two share the main properties
    and the documents-card is a card wrapper for the bare documents component.

3. Add `use Documentable` in the Model that need documents and import the trait. Then you'll have access to the `$model->documents` relationship

4. Because users upload documents you can add `use Documents` to the User model. This trait will set the relationship between users and the documents that they create

**IMPORTANT NOTE:** 

Since this package is using image processing libraries and these underlying libraries may use a lot of memory, 
especially if the processed files are large (for example, for an 8MB image file, more than 128MB of memory might be used ),
make sure to configure php accordingly and/or do `ini_set(‘memory_limit’, ‘256M’);`   

Failure to do so may result in silent errors if allotted memory is insufficient.

## Options

### DocumentsCard.vue
- `id` - number, the id of the documentable model | required
- `type` - string, the documentable model class | required
- `open` - boolean flag, makes the component start collapsed or open | default is `false` | (optional)
- `title` - string, title for the component | default `''` | (optional)

### Documents.vue
- `id` - number, the id of the documentable model | required
- `type` - string, the documentable model class | required
- `query` - string, text used for filtering the documents| default `null` | (optional)
- `controls` - boolean, used for showing the controls buttons | default `false` | (optional)

## Configuration

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

- `php artisan vendor:publish --tag=documents-assets` - the VueJS components
- `php artisan vendor:publish --tag=documents-config` - configuration file
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [ActivityLog](https://github.com/laravel-enso/activitylog) for logging operations on Documents
 - [Core](https://github.com/laravel-enso/Core) for middleware and user model
 - [Helpers](https://github.com/laravel-enso/Helpers) for the various helper classes
 - [ImageTransformer](https://github.com/laravel-enso/ImageTransformer) for optimizing image files
 - [FileManager](https://github.com/laravel-enso/FileManager) for working with the uploaded files
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users making the changes to each contact
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS components
