# DataExport

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7ea7f7704b2044f9950074cf8afb6e3f)](https://www.codacy.com/app/laravel-enso/DataExport?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/DataExport&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/148101651/shield?branch=master)](https://github.styleci.io/repos/148101651)
[![License](https://poser.pugx.org/laravel-enso/dataexport/license)](https://packagist.org/packages/laravel-enso/dataexport)
[![Total Downloads](https://poser.pugx.org/laravel-enso/dataexport/downloads)](https://packagist.org/packages/laravel-enso/dataexport)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/dataexport/version)](https://packagist.org/packages/laravel-enso/dataexport)

Data Export structure dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Features
- creates the structures and statuses necessary during the processes of exporting data

## DataExport model
Has the following attributes:
- `id`
- `name`
- `entries`
- `status` 
- `created_by`
- `created_at`

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [FileManager](https://github.com/laravel-enso/FileManager) for managing the uploads 
 - [Helpers](https://github.com/laravel-enso/Helpers) for various utility classes
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users doing the imports
