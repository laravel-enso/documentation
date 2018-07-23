# File Manager
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/FileManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/FileManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85492361/shield?branch=master)](https://styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/filemanager/downloads)](https://packagist.org/packages/laravel-enso/filemanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/filemanager/version)](https://packagist.org/packages/laravel-enso/filemanager)

File manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Features

- can upload, download, open inline or delete files
- works with a VueJS component that handles the selection of files and POSTs them to the specified route
- the `FileUploader` object manages the files upload
- the `FileManager` object manages the actual file operations and can be configured with a file storage location, a temporary storage and a disk

## Use

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

## Events

- `upload-start` - emitted before the beginning of the upload
- `upload-successful` - emitted after a successful upload 
- `upload-error` - emitted in case of an upload error

## Publishes

- `php artisan vendor:publish --tag=vue-components` - the VueJS uploader component
- `php artisan vendor:publish --tag=enso-update` - a common alias for when wanting to update the VueJS component,
once a newer version is released

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Depends on:
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS component