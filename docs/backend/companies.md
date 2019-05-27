---
sidebarDepth: 3
---

# Companies

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1a05a5276a5c4f6db3cb05db2086bbab)](https://www.codacy.com/app/laravel-enso/Companies?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Companies&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/151941399/shield?branch=master)](https://github.styleci.io/repos/151941399)
[![License](https://poser.pugx.org/laravel-enso/companies/license)](https://packagist.org/packages/laravel-enso/companies)
[![Total Downloads](https://poser.pugx.org/laravel-enso/companies/downloads)](https://packagist.org/packages/laravel-enso/companies)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/companies/version)](https://packagist.org/packages/laravel-enso/companies)

Company management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Screenshot](https://laravel-enso.github.io/companies/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/companies/screenshots/bulma_001.png)

[![Screenshot](https://laravel-enso.github.io/companies/screenshots/bulma_002_thumb.png)](https://laravel-enso.github.io/companies/screenshots/bulma_002.png)

<sup>click on the photo to view a large size screenshot</sup>

## Installation

Comes pre-installed in Enso.

## Features

- provides a common functionality for managing companies within the Enso ecosystem
- integrates with the [People](https://github.com/laravel-enso/People) package so you can associate people to companies
- can be reused and integrated with other modules which might deal with companies (e.g. suppliers ) 
or even other entities, such as people (e.g. clients)
- a `CompanyFactory` is included by default in the package
- the companies server-side select functionality is also included by default

## Usage

### Under the Hood

- the model comes with a `mandatary` relationship to a person. Of course, the mandatary is optional.
You can only set as mandatary one of the people associated to the company.
- once the company has activity in the system (through any other model relationship), it cannot be deleted
- the proper way to delete a company is to first delete any other models it is linked to 
- a placeholder types enum in included in the package that is meant to be extended as/if required
- all `Company` attributes are fillable
- note that the `onDelete` [DocumentsManager](https://github.com/laravel-enso/DocumentsManager) configuration option will affect
what happens to the linked documents when you attempt to delete a company. 

### Configuration

The `config/enso/companies.php` configuration file, lets you customize the following:
- `formTemplate` - string, is the project relative path to the companies form template, 
useful for overriding the original
- `tableTemplate` - string, is the project relative path to the companies table template, 
useful for overriding the original

### Extending the companies

In your project you may have the need to alter and or extend the companies structure by changing table columns.
To achieve this, you'd need to:
- add migration(s) to your local project, making the necessary changes
- create a new template for the companies form, and declare it in the config (`formTemplate`)
- create a new template for the companies table, and declare it in the config (`tableTemplate`)
- create a new company request validation
- bind your local implementation to the package's `ValidateCompanyRequest` in your local `AppServiceProvider` 

    ```php
        use LaravelEnso\Companies\app\Http\Requests\ValidateCompanyStore;
        use App\Http\Requests\ValidateCompanyStoreRequest as LocalCompanyStore;
        use LaravelEnso\Companies\app\Http\Requests\ValidateCompanyUpdate;
        use App\Http\Requests\ValidateCompanyUpdateRequest as LocalCompanyUpdate;
        
        public function boot()
        {
            $this->app->bind(ValidateCompanyStore::class, function () {
                return new LocalCompanyStore();
            });
            $this->app->bind(ValidateCompanyUpdate::class, function () {
                return new LocalCompanyUpdate();
            });
            $this->app->bind(EnsoCompany::class, function () {
              return new Company();
            });
        }
        ```  

## Publishes
- `php artisan vendor:publish --tag=companies-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the configurations,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=companies-factory` - the factory for the `Company` model
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
