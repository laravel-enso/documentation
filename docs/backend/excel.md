---
sidebarDepth: 3
---

# Excel

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28c7bcb0b5d2451783990e0a151f0a44)](https://www.codacy.com/app/laravel-enso/excel?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/excel&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85624363/shield?branch=master)](https://github.styleci.io/repos/85624363)
[![License](https://poser.pugx.org/laravel-enso/excel/license)](https://packagist.org/packages/laravel-enso/excel)
[![Total Downloads](https://poser.pugx.org/laravel-enso/excel/downloads)](https://packagist.org/packages/laravel-enso/excel)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/excel/version)](https://packagist.org/packages/laravel-enso/excel)

Excel utility package for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

install using composer: `composer require laravel-enso/excel`

## Features

- is a small wrapper that uses [box/spout](https://github.com/box/spout) under the hood
- utilizes two contracts for which require specific methods to be available on the specific Excel file generator
    - `ExportsExcel`
    - `SavesToDisk`
- the `ExcelExport` service requires an excel generator parameter that must implement at least the `ExportsExcel` contract
and optionally the `SavesToDisk` contract
- can provide the generated excel document inline (for downloads) or save the file to disk    

## Usage

In order to generate an Excel, you need to create a generator class that implements the `ExcelExport` 
contract. Then you must instantiate an `ExcelExport` class, passing your generator as a constructor parameter,
and finally call the `inline` method:

```php
$excel = new MyExcelExporter();
(new ExcelExport($excel))->inline();
```

If you want to have the excel file saved to disk, have your generator also implement the `SavesToDisk`
contract, and instead of calling the `inline()` method, call the `save()` method on your
`ExcelExport` instance:

```php
$excel = new MyExcelExporter();
(new ExcelExport($excel))->save();
```

## External dependencies

 - [box/spout](https://github.com/box/spout)

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
