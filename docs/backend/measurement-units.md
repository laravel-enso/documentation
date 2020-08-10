---
sidebarDepth: 3
---

# Measurement Units

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28c7bcb0b5d2451783990e0a151f0a44)](https://www.codacy.com/app/laravel-enso/measurement-units?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/measurement-units&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85624363/shield?branch=master)](https://github.styleci.io/repos/85624363)
[![License](https://poser.pugx.org/laravel-enso/measurement-units/license)](https://packagist.org/packages/laravel-enso/measurement-units)
[![Total Downloads](https://poser.pugx.org/laravel-enso/measurement-units/downloads)](https://packagist.org/packages/laravel-enso/measurement-units)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/measurement-units/version)](https://packagist.org/packages/laravel-enso/measurement-units)

Measurement units dependency for [Laravel Enso](https://github.com/laravel-enso/enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/enso) ecosystem.

The front end assets that utilize this api are present in the [measurement-units](https://github.com/enso-ui/measurement-units) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

- install using composer `composer require laravel-enso/measurement-units`
- run the migrations `php artisan migrate`

If you want to also insert the default measurement unit, publish both the factory and the seeder:
```shell script
php artisan vendor:publish --tag=measurement-units-factories
php artisan vendor:publish --tag=measurement-units-seeders
```

You may then run the seeder:
```shell script
php artisan db:seed --class=MeasurementUnitsSeeder
```

## Features

- features a core measurement units functionality with a model, enums, migrations, 
routes, controllers, resources, index table, etc 
- provides CRUD functionality for the `MeasurementUnit` model
- a `MeasurementUnitFactory` is included and can be published
- a `MeasurementUnitSeeder` is included and can be published

## Usage

The package is meant to be installed on an Enso project and customized as required 
(or used as it is if that is enough). 
   
## Publishes

- `php artisan vendor:publish --tag=measurement-units-factories` - the included factory,
- `php artisan vendor:publish --tag=measurement-units-seeders` - the included seeder,
   
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
