---
sidebarDepth: 3
---

# Versioning

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ff415bb65927479a80d173622d3c11ed)](https://www.codacy.com/app/laravel-enso/versioning?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/versioning&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/134861936/shield?branch=master)](https://github.styleci.io/repos/134861936)
[![License](https://poser.pugx.org/laravel-enso/versioning/license)](https://packagist.org/packages/laravel-enso/versioning)
[![Total Downloads](https://poser.pugx.org/laravel-enso/versioning/downloads)](https://packagist.org/packages/laravel-enso/versioning)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/versioning/version)](https://packagist.org/packages/laravel-enso/versioning)

Prevents update conflicts using the optimistic lock pattern in Laravel.

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

To install outside of Enso:

1. install the package `composer require laravel-enso/versions` 
2. use the `Versions` trait on the models you want versioning on.
3. ensure the models/tables have the required column, to hold the version
4. add and set the `protected $versioningAttribute = 'version'` attribute on the versioned models

## Features

- the package uses a column on your model to store the version (the column name is configurable)
- by using the `Versions` trait on a model, versioning is handled automatically
- by default the trait sets the version to 1, just before the model is created
- the version attribute can be set by using `protected $versioningAttribute = 'customVersionAttribtue'` on the model
- the trait can be used on models that already have records in the database, the versioning will start with the first retrieval of those models
- throws a `ConflictHttpException` if the version does not match on update

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
