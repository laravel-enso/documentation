# File Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/files?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/files&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85492361/shield?branch=master)](https://github.styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/datatable/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/files/downloads)](https://packagist.org/packages/laravel-enso/files)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/files/version)](https://packagist.org/packages/laravel-enso/files)

File manager dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/files/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/files/videos/bulma_filemanager.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- provides a generic approach when working with files through using a `File` model
- package comes with a `HasFile` trait that can be added to models who work with files
- has utility classes for the upload, download, inline-opening and deletion of files
- on upload, performs validation of the file and checks the extension and the mime type
- handles the optimization and resize for the supported image file types  
- for upload and deletion, the changes are committed only if the filesystem operation was successful
- works together with a `FileUploader` VueJS component that handles the selection of files and POSTs them to the specified route
- uses a policy to restrict access/changes to files that don't belong to the respective user
- provides a unified interface where you can view all the files you are working with, that you have access to, as well as search and filter them
- the types of files that are visible in the interfaces are configurable
- offers a configurable storage size limit

### Configuration & Usage

Be sure to check out the full documentation for this package available at [docs.laravel-enso.com](https://docs.laravel-enso.com/backend/file-manager.html)

### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
