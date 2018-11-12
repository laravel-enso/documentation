# People

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa76029e3e4c471d91370e29534f436f)](https://www.codacy.com/app/laravel-enso/People?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/People&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/151952913/shield?branch=master)](https://github.styleci.io/repos/151952913)
[![License](https://poser.pugx.org/laravel-enso/people/license)](https://packagist.org/packages/laravel-enso/people)
[![Total Downloads](https://poser.pugx.org/laravel-enso/people/downloads)](https://packagist.org/packages/laravel-enso/people)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/people/version)](https://packagist.org/packages/laravel-enso/people)

Person management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Screenshot](https://laravel-enso.github.io/people/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/people/screenshots/bulma_001.png)

[![Screenshot](https://laravel-enso.github.io/people/screenshots/bulma_002_thumb.png)](https://laravel-enso.github.io/people/screenshots/bulma_002.png)

<sup>click on the photo to view a large size screenshot</sup>

## Features

- separates the people centric operations from the core application user model
- allows the management of people and their details
- integrates with and extends the application user
- is built upon the premise that all the application users are people, but some people may not be application users
- can be reused and integrated with other modules which might handle categories of people (e.g. contacts)
- a `PersonFactory` is included by default in the package
- a policy is used to ensure that a person email update cannot be performed if the person is linked to an user
- custom validations may be added through the package configuration
- the people server-side select functionality is included by default
- the included `IsPerson` trait can be used on other models that have a `person` relationship and require email synchronization
- enums are used for person genders and titles  

## Backstory

In previous Enso versions, there was no common ground between application users and 
other categories of actors which also represented people, for example contacts and (some types of) clients.
This sometimes lead to duplicated data as well as brittle and non reusable types and relationships.

In order to move towards better maintainability, the decision to move common data into persons was taken. 
Now the people structure can be reused as needed.

## Under the Hood

- the model comes with a  `hasUser` helper to check if this person is linked to an user
- once the person has activity in the system (through any other model relationship), it cannot be deleted
- the proper way to delete a person is to first delete any other models it is linked to 
- since an application user will always be a person, and for Laravel authentication purposes, 
the user is supposed to have an email address the 'synchronization' between the user and the person is required. 
Therefore, if the user email is updated, the person email is also updated. 
The same thing happens if a user is created from a person, but a different email is set.
- note that if users are created through a separate/external mechanism you will need to ensure that a corresponding 
person is created/available during the process
- all `Person` attributes are fillable
- the `uid` Person attribute is meant as generic holder for a person's unique identifier which varies from situation to situation (e.g. SSN)

## Installation Steps

This package is already included in [Laravel Enso](https://github.com/laravel-enso/Enso), so no further steps are necessary.

## Configuration

The `config/enso/people.php` configuration file, lets you customize the following:
- `formTemplate`, - string, is the project relative path to the person form template, 
useful for overriding the package template, when customizing the people table 
- `tableTemplate`, - string, is the project relative path to the person table template, 
useful for overriding the package template, when customizing the people table 

## Extending the people

In your project you may have the need to alter and or extend the people structure by adding/removing table columns.
To achieve this, you'd need to:
- add migration(s) to your local project, making the necessary changes. Note that if using sqlite for testing, 
some of the migration commands may not be available
- create a new template for the person form, and declare it in the config (`formTemplate`)
- create a new template for the person table, and declare it in the config (`tableTemplate`)
- create a new company request validation, ensuring it implements the `ValidatesPersonRequest` marker interface 
- bind your local implementations to the interfaces in your local `AppServiceProvider` 

    ```php
    $this->app->bind(
        ValidatesPersonRequest::class, MyValidatePersonRequest::class
    );
    ``` 

## Publishes

- `php artisan vendor:publish --tag=people-config` - configuration file
- `php artisan vendor:publish --tag=people-assets` - the VueJS components
- `php artisan vendor:publish --tag=people-factory` - the factory for the `Person` model
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released, usually used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [ActivityLog](https://github.com/laravel-enso/activitylog) for logging operations on Documents
 - [Core](https://github.com/laravel-enso/Core) for middleware and user model
 - [FormBuilder](https://github.com/laravel-enso/FormBuilder) for handling the form related operations
 - [Helpers](https://github.com/laravel-enso/Helpers) for the various helper classes
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users making the changes to each contact
 - [VueDatatable](https://github.com/laravel-enso/VueDatatable) for the index page datatable
