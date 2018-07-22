---
sidebarDepth: 2
---

# Helpers

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c084aada0bf4f70bf397338300bfc5d)](https://www.codacy.com/app/laravel-enso/Helpers?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Helpers&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/85466970/shield?branch=master)](https://styleci.io/repos/85466970)
[![License](https://poser.pugx.org/laravel-enso/helpers/license)](https://packagist.org/packages/laravel-enso/helpers)
[![Total Downloads](https://poser.pugx.org/laravel-enso/helpers/downloads)](https://packagist.org/packages/laravel-enso/helpers)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/helpers/version)](https://packagist.org/packages/laravel-enso/helpers)

Helper classes dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Includes

### Classes
- An abstract `Enum` class with a constructor for building an enumeration out of an array or a config file 
- An `Obj` class, with a constructor for building an object from an array, that provides the following helper functions: all(), __toString(), toJson(), toArray(), get($key), set($key, $value), has($key), keys(), values()

### Exceptions

- a generic exception: `EnsoException` is available also with a Facade. This exception is extended by all the other Enso specific exceptions and it is not reported by the Laravel's Exception Handler

### Traits
- `IsActive` - adds `whereActive()` and `whereDisabled()` scopes, `isActive()` and `isDisabled()` helpers, for models that have a boolean `is_active` property

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included