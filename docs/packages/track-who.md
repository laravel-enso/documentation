# Track Who
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2848e5734e44faab61fb3391a91a11e)](https://www.codacy.com/app/laravel-enso/TrackWho?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/TrackWho&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/85499255/shield?branch=master)](https://styleci.io/repos/85499255)
[![License](https://poser.pugx.org/laravel-enso/trackwho/license)](https://packagist.org/packages/laravel-enso/trackwho)
[![Total Downloads](https://poser.pugx.org/laravel-enso/trackwho/downloads)](https://packagist.org/packages/laravel-enso/trackwho)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/trackwho/version)](https://packagist.org/packages/laravel-enso/trackwho)

Create, update and delete authoring tracking dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Details

- keeps track of the user that performed various actions on a record / model
- requires the presence of the proper model attributes / table columns
- once the structure is set up, by using the proper trait, the information is added automatically
- the trait works only when the user is authenticated, in order to avoid issues during tests or when using the cli/tinker

## Use

1. In the Model where you want to track the creating, updating or deleting user, add

```php
use CreatedBy, UpdatedBy, DeletedBy;
```

2. Make sure that the model's table has the `created_by` | `updated_by` | `deleted_by` field(s)

## Configuration

The `config/enso/trackWho.php` configuration file, lets you customize the following:
- `resourcePersonAttributes`:
    - `name`, - string, the attribute used for name | default 'name'
    - `appellative`, - string, the attribute used for the person's appellative | default 'appellative' 
    
    These options are useful for customizing the person resource, when the people table has been updated for due to 
    specific project requirements.

## Publishes
- `php artisan vendor:publish --tag=trackWho-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the configuration,
once a newer version is released, usually used with the `--force` flag

## Notes

The traits will also define relationships with the `User` model so you can call `$model->createdBy`, `$model->updatedBy`, `$model->deletedBy`.

`DeletedBy` can be useful where you are using soft deletes.

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.
