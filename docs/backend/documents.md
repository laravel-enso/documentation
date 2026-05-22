---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Documents

[![License](https://poser.pugx.org/laravel-enso/documents/license)](https://git.xtelecom.ro/laravel-enso/documents/-/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/documents/version)](https://packagist.org/packages/laravel-enso/documents)
[![Downloads](https://poser.pugx.org/laravel-enso/documents/downloads)](https://packagist.org/packages/laravel-enso/documents)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/documents/-/blob/main/composer.json)

## Description

Documents is a Laravel Enso package designed for advanced document management. It allows administrators to define document categories, types, and custom fields, providing a structured way to attach files to people (profiles).

The package integrates with Enso's file management system and includes support for data imports, making it easy to seed or migrate document structures and records.

## Installation

Install the package:

```bash
composer require laravel-enso/documents
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- **Document Type Administration**: Full CRUD for managing document categories and types.
- **Custom Fields**: Define specific fields for each document type to capture additional metadata.
- **Profile Integration**: Link documents directly to `Person` models (profiles).
- **File Management**: Leverages `laravel-enso/files` for secure and efficient file storage.
- **Data Import Support**: Includes importers for document types and fields.
- **Table Integration**: Ships with table builders for document browsing and administration.

## Usage

### Models

- `LaravelEnso\Documents\Models\Document`: The main model representing an attached document.
- `LaravelEnso\Documents\Models\DocumentType`: Defines the structure and properties of a document type.
- `LaravelEnso\Documents\Models\DocumentTypeCategory`: Groups document types for better organization.
- `LaravelEnso\Documents\Models\DocumentTypeField`: Custom fields associated with a document type.

### Enums

- `LaravelEnso\Documents\Enums\Field`: Defines the available types for document custom fields (Numeric, Data, Checkbox, String, Select).

### Relationships

A `Document` belongs to a `Person` (profile), a `DocumentType`, and a `File`.

```php
$document->person;
$document->type;
$document->file;
```

## API

### Routes

All package routes are registered under:

- prefix: `api/`
- middleware: `api`, `auth`, `core`

#### Document Types Administration
- `GET /api/administration/documentTypes` - Table data
- `GET /api/administration/documentTypes/create` - Create form
- `POST /api/administration/documentTypes` - Store new type
- `GET /api/administration/documentTypes/{documentType}/edit` - Edit form
- `PATCH /api/administration/documentTypes/{documentType}` - Update type
- `DELETE /api/administration/documentTypes/{documentType}` - Delete type

#### Documents
- `GET /api/documents/initTable` - Initialize documents table
- `GET /api/documents/tableData` - Fetch documents data
- `GET /api/documents/exportExcel` - Export documents to Excel
- `GET /api/documents/options` - Selectable document options

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://github.com/laravel-enso/core)
- [`laravel-enso/files`](https://github.com/laravel-enso/files)
- [`laravel-enso/people`](https://github.com/laravel-enso/people)
- [`laravel-enso/data-import`](https://github.com/laravel-enso/data-import)
- [`laravel-enso/tables`](https://github.com/laravel-enso/tables)
- [`laravel-enso/track-who`](https://github.com/laravel-enso/track-who)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/documents/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/14/2026, 11:04:52 AM</div>
</div>
