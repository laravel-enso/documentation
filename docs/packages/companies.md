# Companies

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1a05a5276a5c4f6db3cb05db2086bbab)](https://www.codacy.com/app/laravel-enso/Companies?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Companies&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/151941399/shield?branch=master)](https://github.styleci.io/repos/151941399)
[![License](https://poser.pugx.org/laravel-enso/companies/license)](https://packagist.org/packages/laravel-enso/companies)
[![Total Downloads](https://poser.pugx.org/laravel-enso/companies/downloads)](https://packagist.org/packages/laravel-enso/companies)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/companies/version)](https://packagist.org/packages/laravel-enso/companies)

Company management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Screenshot](https://laravel-enso.github.io/companies/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/companies/screenshots/bulma_001.png)
[![Screenshot](https://laravel-enso.github.io/companies/screenshots/bulma_002_thumb.png)](https://laravel-enso.github.io/companies/screenshots/bulma_002.png)


## Features

- provides a common functionality for managing companies within the Enso ecosystem
- integrates with the [People](https://github.com/laravel-enso/People) package
- can be reused and integrated with other modules which might deal with companies (e.g. suppliers ) 
or even other entities, such as people (e.g. clients)
- a `CompanyFactory` is included by default in the package
- the companies server-side select functionality is also included by default

## Under the Hood

- the model comes with a `mandatary` relationship to a person. Of course, the mandatary is optional
- once the company has activity in the system (through any other model relationship), it cannot be deleted
- the proper way to delete a company is to first delete any other models it is linked to 
- a placeholder types enum in included in the package that is meant to be extended as/if required
- all `Company` attributes are fillable
- the `uid` Person attribute is meant as generic holder for a person's unique identifier which varies from situation to situation (e.g. SSN)
- note that the `onDelete` [DocumentsManager](https://github.com/laravel-enso/DocumentsManager) configuration option will affect
what happens to the linked documents when you attempt to delete a company. 

## Installation Steps

This package is already included in [Laravel Enso](https://github.com/laravel-enso/Enso), so no further steps are necessary.

## Publishes

- `php artisan vendor:publish --tag=companies-assets` - the VueJS components
- `php artisan vendor:publish --tag=companies-factory` - the factory for the `Company` model
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [ActivityLog](https://github.com/laravel-enso/activitylog) for logging operations on Documents
 - [AddressesManager](https://github.com/laravel-enso/AddressesManager) for attached addresses
 - [Contacts](https://github.com/laravel-enso/Contacts) for attached contacts
 - [Core](https://github.com/laravel-enso/Core) for middleware and user model
 - [Discussions](https://github.com/laravel-enso/Discussions) for attached discussions
 - [DocumentsManager](https://github.com/laravel-enso/DocumentsManager) for middleware and user model
 - [FormBuilder](https://github.com/laravel-enso/FormBuilder) for handling the form related operations
 - [Helpers](https://github.com/laravel-enso/Helpers) for the various helper classes
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users making the changes to each contact
 - [VueDatatable](https://github.com/laravel-enso/VueDatatable) for the index page datatable