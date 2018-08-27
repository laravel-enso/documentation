# File Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/FileManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/FileManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85492361/shield?branch=master)](https://styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/filemanager/downloads)](https://packagist.org/packages/laravel-enso/filemanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/filemanager/version)](https://packagist.org/packages/laravel-enso/filemanager)

File manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Features

- can upload, download, open inline or delete files
- validates the file, the extension and the mime type
- handles the optimization and resize for the supported image files  
- for upload and deletion, the changes are committed only if the filesystem operation was successful
- works with a VueJS component that handles the selection of files and POSTs them to the specified route

## Use

### Back-End Components

The `File` model:
- holds some low-level properties pertaining to the file
- uses a polymorphic relationship to link to any other model
- an separate model instance is used for each file
- should not be used directly but through its chaperone model

The `Attachable` interface:
- defines a series of methods that need to be implemented by the chaperone model (such as [Document](https://github.com/laravel-enso/DocumentsManager/blob/master/src/app/Models/Document.php))
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

### Front-End Component

```vue
<file-uploader
    @upload-successful="myFunction()"
    :url="uploadLink"
    multiple>
</file-uploader>
```

## Options

- `multiple` - boolean flag for the single/multiple selection of files; default is false | optional
- `url` - the url to post the uploaded file(s) to | required
- `file-size-limit` - the maximum file size limit; default is 8388608 | optional
- `params` - parameters object that gets passed to the backend, may be used when processing the upload | (optional)
- `file-key` - string key that is used for the file(s) when doing the AJAX request to the back-end | default is 'file' | (optional)

## Events

- `upload-start` - emitted before the beginning of the upload, contains no payload
- `upload-successful` - emitted after a successful upload, contains as payload the data of the request response
- `upload-error` - emitted in case of an upload error, contains no payload

## Publishes

- `php artisan vendor:publish --tag=vue-components` - the VueJS uploader component
- `php artisan vendor:publish --tag=enso-update` - a common alias for when wanting to update the VueJS component,
once a newer version is released

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Depends on:
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS component
