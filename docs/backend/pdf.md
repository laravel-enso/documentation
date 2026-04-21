---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# PDF

[![License](https://poser.pugx.org/laravel-enso/pdf/license)](https://github.com/laravel-enso/pdf/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/pdf/version)](https://packagist.org/packages/laravel-enso/pdf)
[![Downloads](https://poser.pugx.org/laravel-enso/pdf/downloads)](https://packagist.org/packages/laravel-enso/pdf)
[![PHP](https://img.shields.io/badge/php-7.4%2B-777bb4.svg)](https://github.com/laravel-enso/pdf/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/pdf.svg)](https://github.com/laravel-enso/pdf/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/pdf.svg)](https://github.com/laravel-enso/pdf/pulls)

## Description

Pdf provides a small Laravel Enso wrapper around Snappy / wkhtmltopdf for generating PDF documents from Blade views.

The package exposes a fluent `Pdf` service that applies Enso's default page settings, loads a view with data, and then lets the caller inline, download, save, or output the rendered PDF.

It is used across the ecosystem for invoices, orders, delivery notes, stock documents, and other printable documents that need a consistent PDF pipeline.

## Installation

Install the package:

```bash
composer require laravel-enso/pdf
```

The package relies on `barryvdh/laravel-snappy`, which in turn requires a working `wkhtmltopdf` binary in the target environment.

No additional provider registration is needed beyond Composer's package discovery.

## Features

- Wraps `barryvdh/laravel-snappy` in a small fluent service.
- Loads Blade views with arbitrary data before rendering.
- Streams PDFs inline in the browser.
- Supports file download responses.
- Supports saving generated PDFs to disk.
- Exposes raw PDF output as a string.
- Ships with Enso defaults for paper size, margins, orientation, and footer pagination.

## Usage

Generate a PDF from a Blade view:

```php
use LaravelEnso\Pdf\Services\Pdf;

return (new Pdf())
    ->loadView('documents.order', ['order' => $order])
    ->inline('order.pdf');
```

Download instead of inlining:

```php
return (new Pdf())
    ->loadView('documents.invoice', ['invoice' => $invoice])
    ->download('invoice.pdf');
```

Save the generated file:

```php
(new Pdf())
    ->loadView('documents.note', ['model' => $model])
    ->save(storage_path('app/temp/document.pdf'));
```

Switch to landscape and override options when needed:

```php
$pdf = (new Pdf())
    ->landscape()
    ->setOption('margin-top', 5)
    ->loadView('documents.report', ['report' => $report]);
```

::: warning Note
This package is only a wrapper around Snappy. Rendering still depends on the availability and correctness of the underlying `wkhtmltopdf` binary in the running environment.
:::

## API

### Contracts

- `LaravelEnso\Pdf\Contracts\GeneratesPdf`
- `LaravelEnso\Pdf\Contracts\SavesPdf`

`GeneratesPdf` defines:

- `inline(): Response`
- `output(): string`

`SavesPdf` defines:

- `save()`

### Pdf Service

`LaravelEnso\Pdf\Services\Pdf`

Public methods:

- `__construct()`
- `inline(string $filename = 'document.pdf'): Response`
- `output(): string`
- `save($filename, $overwrite = false): PdfWrapper`
- `download(string $filename): Response`
- `landscape(): self`
- `setOption(string $option, $value): self`
- `loadView(string $view, array $attributes): self`

Default options applied in the factory:

- `paper: a4`
- `orientation: portrait`
- `margin-top: 10`
- `margin-left: 5`
- `margin-right: 5`
- `margin-bottom: 10`
- `footer-font-size: 8`
- `footer-center: "Page [page] from [toPage]"`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

External dependencies:

- [`barryvdh/laravel-snappy`](https://github.com/barryvdh/laravel-snappy) [↗](https://github.com/barryvdh/laravel-snappy)
- [`wkhtmltopdf`](https://wkhtmltopdf.org/) [↗](https://wkhtmltopdf.org/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/pdf/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:25:53 PM</div>
</div>
