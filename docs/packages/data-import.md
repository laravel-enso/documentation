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
- invalid rows are reported back to the user, in the GUI

## Installation steps

The component is already included in the Enso install and should not require any additional installation steps.

## Usage

1. Publish the configuration, example classes and assets:
    * `php artisan vendor:publish --tag=dataimport-config`
    * `php artisan vendor:publish --tag=dataimport-classes`
    * `php artisan vendor:publish --tag=import-assets`

2. In the library `samples` folder, `vendor/laravel-enso/dataimport/samples`, we have included a couple of 
 sample import files for you to play with. It is strongly recommended that you check out the provided samples before 
 attempting to create your own importers.


## Configuration
The configuration can be found/published in `config/enso/imports.php` 
and contains what's needed to hook the JSON templates to the import package:
- `label`, the label visible to the user in the interface
- `template`, the relative path to the JSON import templates

#### JSON Template structure:
- `importerClass`, the fully qualified importer class name | required. Here you write the import logic.
- `validatorClass`, the fully qualified custom validator class name, if you are using custom validators | optional
- `entryLimit`, the limit of entries per sheet in the imported files | default is 5000 | optional
- `stopsOnIssues`, boolean flag that tells the importer to stop or continue when content validation issues are found  | default false | optional
- `sheets`, array of sheet configuration objects | required

Note that the importer expects to find just the sheets given in the template, 
meaning it will report an error if there are missing sheets but also if there are extra sheets. 

#### Sheet Configuration object structure:
- `name`, the name of the sheet | required
    - should be lower snake cased if the sheet name contains spaces, so use `sale_entries` instead of `Sale entries`
- `columns`, array of column configuration objects | required 

#### Column Configuration object structure:
- `name`, the name of the column | required
    - similar to the sheet name, column names should be lower snake cased, so use `mobile_phone` instead of `Mobile phone`
- `laravelValidations`, the desired Laravel (Request) validation that you want applied for this column
- `complexValidations`, the complex validations you want applied for this column, on top of any Laravel validations

#### Available **complex validations** include:
- `unique_in_column`, which requires a column to contain distinct values
- `exists_in_sheet`, which requires values from this column to exist in another (sheet's) column, and may used like 
`exists_in_sheet:sheet2,matching_column`

Please note that the import does not continue if *structure* errors are encountered, such as missing sheets or columns.
If there are no structure errors, the `stopsOnIssues` flag is false and *content* errors are found, 
the rows with errors are skipped and valid rows are imported. 

Also take into account that the importer automatically checks for duplicate lines and will report them if found.

## Inside the importer class
The importer class given in the JSON template is responsible for doing the actual importing,
 once the file has been validated.

Your importer class needs to extend the abstract `LaravelEnso\DataImport\app\Classes\Importers\Importer` class and implement the `run()` method.
To get a sheet's rows, you must use the parent's `rowsFromSheet('sheet_name')` method which returns a collection of **valid** rows from the sheet.

Having the list of rows, you may then design your particular importing implementation.

When having successfully processed a row, you should use the `incSuccess()` method to count the successful row import.

The successful imported lines will be presented to the user, in the import summary.

## Inside the custom validator class
There might be cases where it's not enough to use the Laravel Request Validation methods 43453453111. For more complex scenarios you can
create a custom validator class and declare it your template.
 
The validator class must extend the `LaravelEnso\DataImport\app\Classes\Validators\Validator` abstract class and implement
the `run()` method.

Here you'll have access to the parent class' summary object and his helper methods `addStructureIssue` and `addContentIssue`.

The `addStructureIssue($category, $value)` method takes:
  - a string category parameter, and 
  - a string value for the issue.
  
The `addContentIssue($sheetName, $category, $rowNumber, $column, $value)` method takes:
  - a string sheet name parameter parameter, 
  - a string category parameter,  
  - an integer row number,
  - a string column name, and
  - a string value for the issue.

You may use these methods to add any required issues for the data that fails your custom validation logic.

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
