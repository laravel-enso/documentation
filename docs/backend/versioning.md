---
sidebarDepth: 3
---

# Versioning
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ff415bb65927479a80d173622d3c11ed)](https://www.codacy.com/app/laravel-enso/Versioning?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Versioning&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/134861936/shield?branch=master)](https://github.styleci.io/repos/134861936)
[![License](https://poser.pugx.org/laravel-enso/versioning/license)](https://packagist.org/packages/laravel-enso/versioning)
[![Total Downloads](https://poser.pugx.org/laravel-enso/versioning/downloads)](https://packagist.org/packages/laravel-enso/versioning)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/versioning/version)](https://packagist.org/packages/laravel-enso/versioning)

Prevents update conflicts using the optimistic lock pattern in Laravel

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

To install outside of Enso:

1. install the package `composer require laravel-enso/versioning` 
2. run the migrations
3. use the `Versionable` trait on the models you want versioning on.

By default, the version value is kept in a 'version' attribute, but this can be customized (see below).

## Features

- the package creates a `versionings` table where it holds versions for all the versionable models
- by using the `Versionable` trait on a model, versioning is handled automatically
- by default the trait appends a `version` attribute after the model is retrieved, used for tracking versions and expects the same attribute to be present on the model when the update is called
- the default versioning attribute can be customized by using `protected $versioningAttribute = 'customVersionAttribte'` on the model
- the trait can be used on models that already have records in the database, the versioning starts with the first retrieval of those models
- when a versionable model is deleted, its versioning is deleted also. If the model uses `SoftDeletes`, the versioning is not deleted, unless doing a `forceDelete`
- throws a `ConflictHttpException` if the version does not match on update
- tests are included with the package

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
