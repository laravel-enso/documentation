---
sidebarDepth: 3
---

# PDF

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28c7bcb0b5d2451783990e0a151f0a44)](https://www.codacy.com/app/laravel-enso/logs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/pdf&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85624363/shield?branch=master)](https://github.styleci.io/repos/85624363)
[![License](https://poser.pugx.org/laravel-enso/pdf/license)](https://packagist.org/packages/laravel-enso/pdf)
[![Total Downloads](https://poser.pugx.org/laravel-enso/pdf/downloads)](https://packagist.org/packages/laravel-enso/pdf)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/pdf/version)](https://packagist.org/packages/laravel-enso/pdf)

PDF utility package for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

`composer require laravel-enso/pdf`

## Features

- is a small wrapper that uses [laravel-snappy](https://github.com/barryvdh/laravel-snappy) under the hood
- offers the possibility to add a watermark to the document, 
using the [pdftk](https://github.com/mikehaertl/php-pdftk) package for this purpose
- uses a series of common defaults for the page, with the option of overriding them
    - setting the page orientation to landscape (by default is portrait)
    - setting a watermark (by default no watermark is used)
    - setting options for the snappy pdf object, such as margins, footer, etc. (for more options, look [here](https://wkhtmltopdf.org/usage/wkhtmltopdf.txt))
- can provide the generated pdf document inline (for downloads) or save the file to disk (coming soon)    

## Usage

In order to generate a PDF using the default options, 
you need to provide a view together with the set of variables for that view,
and then call the `inline` method:
```php
$pdf = new Pdf();
$pdf->loadView(
  'pdf.myBlade', 
  [
      'data' => $myData
  ]
)
->inline();
```

If you want to customize the defaults, before calling the `inline` method, 
you may chain any modifier methods:

```php
 $pdf = new Pdf();
 $pdf->loadView(
   'pdf.myBlade', 
   [
       'data' => $myData
   ]
 )
 ->landscape()
 ->watermark(resource_path('images/watermark.pdf'))
 ->inline();
 ```
 
## Available methods

The following methods are required:
* `loadView(string $view, array $attributes)`, loads/sets the view that is to be used
for the generation of the pdf, together with the attributes used in that view
* `inline()`, generates the pdf and returns it as a stream, for download

The following modifier methods are available:
* `watermark($watermark)`, sets a watermark. The parameter must be the fully qualified path of the watermark file
* `landscape()`, set the page orientation as landscape (default is portrait)
* `setOption(string $option, $value)`, set the value for the given option. 
For a list of options, look [here](https://wkhtmltopdf.org/usage/wkhtmltopdf.txt)

## Publishes

- `php artisan vendor:publish --tag=enso-pdf-config` - an alias for the snappy pdf config

## External dependencies

 - [laravel-snappy](https://github.com/barryvdh/laravel-snappy) 
 - [php-pdftk](https://github.com/mikehaertl/php-pdftk) 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
