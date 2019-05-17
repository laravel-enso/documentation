---
sidebarDepth: 3
---

# Track Who

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2848e5734e44faab61fb3391a91a11e)](https://www.codacy.com/app/laravel-enso/track-who?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/track-who&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85499255/shield?branch=master)](https://github.styleci.io/repos/85499255)
[![License](https://poser.pugx.org/laravel-enso/track-who/license)](https://packagist.org/packages/laravel-enso/track-who)
[![Total Downloads](https://poser.pugx.org/laravel-enso/track-who/downloads)](https://packagist.org/packages/laravel-enso/track-who)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/track-who/version)](https://packagist.org/packages/laravel-enso/track-who)

Create, update and delete authoring tracking dependency for Laravel.

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso. 

To install outside of Enso: `composer require laravel-enso/trackwho`

## Features

- keeps track of the user that performed various actions on a record / model
- requires the presence of the proper model attributes / table columns
- once the structure is set up, by using the proper trait, the information is added automatically
- the trait works only when the user is authenticated, in order to avoid issues during tests or when using the cli/tinker

## Usage

1. In the Model where you want to track the creating, updating or deleting user, add

```php
use CreatedBy, UpdatedBy, DeletedBy;
```

2. Make sure that the model's table has the `created_by` | `updated_by` | `deleted_by` column(s)

## Configuration

The `config/enso/trackWho.php` configuration file, lets you customize the following:
- `resourcePersonAttributes`:
    - `name`, - string, the attribute used for name | default 'name'
    - `appellative`, - string, the attribute used for the person's appellative | default 'appellative' 
    
    These options are useful for customizing the person resource, when the people table has been updated for due to 
    specific project requirements.

Note that this configuration makes sense when using the package within 
the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

## Publishes
- `php artisan vendor:publish --tag=trackWho-config` - configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the configuration,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
