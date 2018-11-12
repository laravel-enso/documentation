# File Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/FileManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/FileManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85492361/shield?branch=master)](https://styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/filemanager/downloads)](https://packagist.org/packages/laravel-enso/filemanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/filemanager/version)](https://packagist.org/packages/laravel-enso/filemanager)

File manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).


[![Watch the demo](https://laravel-enso.github.io/filemanager/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/filemanager/videos/bulma_filemanager.mp4)


<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- provides a generic approach when working with files through using a `File` model
- package comes with a `HasFile` trait that can be added to models who work with files
- has utility classes for the upload, download, inline-opening and deletion of files
- on upload, performs validation of the file and checks the extension and the mime type
- handles the optimization and resize for the supported image file types  
- for upload and deletion, the changes are committed only if the filesystem operation was successful
- works with a `FileUploader` VueJS component that handles the selection of files and POSTs them to the specified route
- uses a policy to restrict access/changes to files that don't belong to the respective user
- provides a unified interface where you can view all the files you are working with, that you have access to, as well as search and filter them
- the types of files that are visible in the interfaces are configurable
- offers a configurable storage size limit

## Use

Out of the box, Laravel Enso already uses the file manager as required. For example, 
the [AvatarManager](https://github.com/laravel-enso/AvatarManager), [DataImport](https://github.com/laravel-enso/DataImport) and  
[DocumentsManager](https://github.com/laravel-enso/DocumentsManager) all use and depend on the common File Manager functionality.

To use any of the three packages above, you don't need to do any extra work under the hood. 

Until now, you could not see all your files in one place or find out how much space they occupied, 
as you could have had files uploaded through the documents manager, attached to various models in different places in the app,
import files resulted out of your import operations and more.
  
You can now use the files menu to review, download search through and even delete them.

When adding or extending the file operations functionality it is strongly recommended that you use the `File` model as well as the 
accompanying traits and classes - see more bellow.  

### Back-End Components

The `File` model:
- holds some low-level properties pertaining to the file
- uses a polymorphic relationship to link to any other model
- a separate model instance is used for each file
- should not be used directly but through its chaperone model

The `Attachable` interface:
- defines a series of methods that need to be implemented by the chaperone model (example: [Document](https://github.com/laravel-enso/DocumentsManager/blob/master/src/app/Models/Document.php))
- the methods have a default implementation found in the `HasFile` trait 
- of course, if required, even if using the trait, the methods may be overridden for specific scenarios

The `HasFile` trait:
- provides a default implementation for the `Attachable` interface
- uses the `FileManager` class when performing file operations
- can optionally use a set of properties to perform additional operations
- note that if you want to conditionally override a property value, or read it from the project configuration, 
you will need to override the corresponding method

Model properties:
- `$folder`, string, if given, that `storage/app/` folder is used for file operations | default is 'files'
- `$mimeTypes`, array, if given, the mime types list is used to validate files against | default is []
- `$extensions`, array, similar to mime types, is used for validation of the extension | default is []
- `resizeImages`, array, if given, should contain the W-H values for resizing | default is []
- `$optimizeImages`, boolean, if true, image optimization is performed | default is false

The `FileUploadException`:
- is thrown when the any of the validations fail (file, extension, mime type)

The Configuration:
- within the `visible` key, contains a list of models that should be visible in the Files menu. 
The key will be used for the tab name while the fully qualified class name value is used to populated the list of files in the interface. 

For examples of using the FileManager package, take a look at any of the 
[AvatarManager](https://github.com/laravel-enso/AvatarManager), 
[DataImport](https://github.com/laravel-enso/DataImport),
[DocumentsManager](https://github.com/laravel-enso/DocumentsManager) packages.

### Front-End Component

The VueJS components have been extracted to the [VueComponents](https://github.com/laravel-enso/VueComponents) package, 
you may check the documentation [here](https://docs.laravel-enso.com/packages/vue-components.html#fileuploader).

## Configuration

The `config/enso/files.php` configuration file, lets you customize the following:
- `visible`, key value array, a list of class-names for models that have files and should be present in the file manager list.   
- `storageLimit`, number, the storage size limit for the files functionality | default is `500000`

Note: the 'visible' models need to implement the `VisibleFile` interface, by providing an implementation for the `isDeletable` method 

## Publishes

- `php artisan vendor:publish --tag=filemanager-assets` - the JS asset files
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the JS assets,
once a newer version is released
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the configuration files,
once a newer version is released
- `php artisan vendor:publish --tag=filemanager-config` - publishes the file manager configuration file

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Depends on:
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS components
