# Contacts

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c859dad259f4455a21c7f22d2877917)](https://www.codacy.com/app/mihai-ocneanu/contact-persons?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/contact-persons&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/88868747/shield?branch=master)](https://styleci.io/repos/88868747)
[![License](https://poser.pugx.org/laravel-enso/contacts/license)](https://packagist.org/packages/laravel-enso/contacts)
[![Total Downloads](https://poser.pugx.org/laravel-enso/contacts/downloads)](https://packagist.org/packages/laravel-enso/contacts)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/contacts/version)](https://packagist.org/packages/laravel-enso/contacts)

Contacts dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Screenshot](https://laravel-enso.github.io/contacts/screenshots/bulma_024_thumb.png)](https://laravel-enso.github.io/contacts/videos/demo_contacts.webm)

## Features

- allows the management of contact persons, attached to other entities, such as companies
- uses a polymorphic relationship for flexibility when attaching
- contacts can be disabled while still keeping them, for reference
- comes with a `Contacts.vue` VueJS component meant to be included anywhere, and an index page to list all contacts
- uses the [VueComponents](https://github.com/laravel-enso/VueComponents) package in order to load its VueJS dependencies


## Installation steps

The component is no longer included in the Enso install and is incompatible with the latest [Companies](https://github.com/laravel-enso/Companies) package, 
which comes with its own contacts structure.

If you require this package, uninstall the Companies package first and install this package instead.

## Use

1. Add the `Contactable` trait in the Model to which you need to add contacts 
    You can then use the `$model->contacts` relationship    
2. Use the VueJS component in your pages/components

```vue
<contacts
    type="modelClass"
    id="entityId"
    :open="true"
    title="My Custom Title" >
</contacts>
```
    
## Options
The `Contacts.vue` component can be used anywhere, can be integrated into any other component or page, and takes the following parameters:
- `id` - the id of the entity | required
- `type` - string, the entity type, set in the configuration file | required
- `open` - boolean, flag which, if true, makes the component start in the open state | default `false` | (optional)
- `title` - string, title for the component | default 'Contacts' | (optional)
    
## Configuration
Inside the `config/enso/contacts.php` file, you'll find several customization options:
- `onDelete`, string, option that manages the case when the commentable entity is deleted and it has attached discussions.
Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a discussable model is deleted, the discussions attached to it are also deleted. 
    With the restrict option,  when attempting to delete a discussable model with attached discussions, an exception is thrown.
- `loggableMorph`, the list of entities using the addressable functionality, each mapped to its respective loggable attribute
For example: 
```php
'addressable' => [
    Company::class => 'name',
],
```

    
## Publishes

- `php artisan vendor:publish --tag=contacts-config` - the configuration file
- `php artisan vendor:publish --tag=contacts-assets` - the VueJS components
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS component,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, can be used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [Datatable](https://github.com/laravel-enso/Datatable) for showing the list of contacts
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users making the changes to each contact
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS components
 - [Helpers](https://github.com/laravel-enso/Helpers) for the IsActive trait
