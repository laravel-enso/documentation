# Data Import

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b169a2f09f864cd5b274ce63008f04b9)](https://www.codacy.com/app/laravel-enso/DataImport?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/DataImport&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/89221336/shield?branch=master)](https://styleci.io/repos/89221336)
[![License](https://poser.pugx.org/laravel-enso/dataimport/license)](https://packagist.org/packages/laravel-enso/dataimport)
[![Total Downloads](https://poser.pugx.org/laravel-enso/dataimport/downloads)](https://packagist.org/packages/laravel-enso/dataimport)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/dataimport/version)](https://packagist.org/packages/laravel-enso/dataimport)

Excel Importer dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/dataimport/screenshots/bulma_006_thumb.png)](https://laravel-enso.github.io/dataimport/videos/bulma_demo_01.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

[![Screenshot](https://laravel-enso.github.io/dataimport/screenshots/bulma_007_thumb.png)](https://laravel-enso.github.io/dataimport/screenshots/bulma_007.png)


## Features

- uses JSON templates to import `xlsx` files into the application, with minimum custom logic
- import types are defined in the package configuration
- each import type can be validated against required columns, sheets, data types and more
- the Laravel validation is used for maximum reuse of existing mechanisms while custom validators can be added when necessary
- an example import type is included in the package
- uses [Spout](https://github.com/box/spout) for reading the `xlsx` file
- allows limiting of the number of rows to be imported, in order to avoid timeouts and imports taking too long for the end user experience
- import issues are grouped by sheet and type of error and are reported with pagination
- each import type can be configured to halt the import when encountering cell value validation errors, or  
- if choosing to continue the import w/ errors, you can opt to process just valid rows

## Installation steps

The component is already included in the Enso install and should not require any additional installation steps.

## Usage

1. Publish the configuration, example classes and assets:
    * `php artisan vendor:publish --tag=dataimport-config`
    * `php artisan vendor:publish --tag=dataimport-classes`
    * `php artisan vendor:publish --tag=import-assets`

2. In the library `samples` folder, `vendor/laravel-enso/dataimport/samples`, we have included a couple of 
 sample import files for you to play with 

## Configuration
The configuration can be found/published in `config/enso/imports.php` and contains what's needed to hook the JSON templates to the import package:
    - `label`, the label visible to the user in the interface
    - `template`, the relative path to the JSON import templates

JSON Template structure:

- `importerClass`, the fully qualified importer class name | required. Here you write the import logic.
- `validatorClass`, the fully qualified custom validator class name, if you are using custom validators | optional
- `entryLimit`, the limit of entries per sheet in the imported files | default is 5000 | optional
- `stopsOnIssues`, boolean flag that tells the importer to stop or continue when content validation issues are found  | default false | optional

Please note that the import does not continue if structure errors are encountered, such as missing sheets or columns.
If there are no structure errors, the `stopsOnIssues` flag is false and content errors are found, 
the rows with errors are skipped and valid rows are imported. 

## Publishes

- `php artisan vendor:publish --tag=dataimport-config` - configuration files
- `php artisan vendor:publish --tag=dataimport-classes` - example import
- `php artisan vendor:publish --tag=import-assets` - the required js assets 
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update configuration,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, can be used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [Spout](https://github.com/box/spout) for reading xlsx files
 - [Core](https://github.com/laravel-enso/Core) for the core middleware 
 - [VueDatatable](https://github.com/laravel-enso/vueatatable) for listing the import results
 - [FileManager](https://github.com/laravel-enso/FileManager) for managing the uploads 
 - [Helpers](https://github.com/laravel-enso/Helpers) for various utility classes
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations 
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users doing the imports