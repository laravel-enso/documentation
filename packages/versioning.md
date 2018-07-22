# Versioning
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ff415bb65927479a80d173622d3c11ed)](https://www.codacy.com/app/laravel-enso/Versioning?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Versioning&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/134861936/shield?branch=master)](https://github.styleci.io/repos/134861936)
[![License](https://poser.pugx.org/laravel-enso/versioning/license)](https://packagist.org/packages/laravel-enso/versioning)
[![Total Downloads](https://poser.pugx.org/laravel-enso/versioning/downloads)](https://packagist.org/packages/laravel-enso/versioning)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/versioning/version)](https://packagist.org/packages/laravel-enso/versioning)

Prevents update conflicts using the optimistic lock pattern in Laravel

## Details

- the package creates a `versionings` table where it holds versions for all the versionable models
- by using the `Versionable` trait on a model, versioning is handled automatically
- by default the trait appends a `version` attribute after the model is retrieved, used for tracking versions and expects the same attribute to be present on the model when the update is called
- the default versioning attribute can be customized by using `protected $versioningAttribute = 'customVersionAttribte'` on the model
- the trait can be used on models that already have records in the database, the versioning starts with the first retrieval of those models
- when a versionable model is deleted, its versioning is deleted also. If the model uses `SoftDeletes`, the versioning is not deleted, unless doing a `forceDelete`
- throws a `ConflictHttpException` if the version does not match on update
- tests are included with the package
- package comes included by default with [Enso](https://github.com/laravel-enso/Enso)