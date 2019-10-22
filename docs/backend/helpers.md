---
sidebarDepth: 3
---

# Helpers

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c084aada0bf4f70bf397338300bfc5d)](https://www.codacy.com/app/laravel-enso/helpers?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/helpers&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85466970/shield?branch=master)](https://github.styleci.io/repos/85466970)
[![License](https://poser.pugx.org/laravel-enso/helpers/license)](https://packagist.org/packages/laravel-enso/helpers)
[![Total Downloads](https://poser.pugx.org/laravel-enso/helpers/downloads)](https://packagist.org/packages/laravel-enso/helpers)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/helpers/version)](https://packagist.org/packages/laravel-enso/helpers)

Helper classes dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

To install outside of Enso: `composer require laravel-enso/helpers` 

## Usage

The following classes, exceptions and traits are available.

### Classes

- A `Decimals` class which is a wrapper for PHP's `bc*` methods such as `bcadd` 
with support for a customizable, default precision
- A `JsonParser` class that takes a JSON file as its constructor's argument, and can parse and 
    transform the file to:
    * object
    * array
    * JSON string
- An `Obj` class which extends the Laravel Collection, with a constructor for building an object 
    from an array, an object, a Laravel model that can even have loaded relationships and more. 
    You can then use all the native Collection functions, as well as: 
    * `set($key, $value)`,
    * `filled($key)`,
    
#### Decimals - ` LaravelEnso\Helpers\app\Classes\Decimals`

All the class' methods are static. 

Methods:
- `scale($precision)`, sets the default precision. If not specified, the precision will be `2`
- `add($first, $second, $precision = null)`, calls `bcadd` with the given/default precision
- `sub($first, $second, $precision = null)`, calls `bcsub` with the given/default precision
- `mul($first, $second, $precision = null)`, calls `bcmul` with the given/default precision
- `div($first, $second, $precision = null)`, calls `bcdiv` with the given/default precision
- `sqrt($first, $second, $precision = null)`, calls `bcsqrt` with the given/default precision
- `pow($first, $second, $precision = null)`, calls `bcpow` with the given/default precision
- `mod($first, $second, $precision = null)`, calls `bcmod` with the given/default precision
- `powmod($first, $second, $precision = null)`, calls `bcpowmod` with the given/default precision
- `lt($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of a less than comparison
- `lte($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of a less or equals than comparison
- `eq($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of an equals comparison
- `notEq($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of not equals comparison
- `gt($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of a greater than comparison
- `gte($first, $second, $precision = null)`, uses `bccomp` with the given/default precision, 
returns the boolean result of a greater than or equals comparison
- `ceil($first, $second, $precision = null)`, uses `bcceil` with the given/default precision, 
returns the boolean result of a less than comparison
- `floor($first, $second, $precision = null)`, uses `floor` with the given/default precision, 
returns the boolean result of a less than comparison


#### JsonParser - ` LaravelEnso\Helpers\app\Classes\JsonParser`

The constructor takes a file name.  This must be a text file with valid json content. 
Note: When trying to read it, a `JsonParseException` exception will be thrown if the file contents is not valid. 

Methods:
- `object()`, returns an object representation of the file
- `array()`, returns an array representation of the file
- `json`, returns an json representation of the file 

#### Obj - ` LaravelEnso\Helpers\app\Classes\Obj`

The constructor optionally takes an associate array or an object (even a Laravel model). 
This parameter is used to set up the object. For arrays, it uses the array keys as properties 
and the array values as the property values.

Methods:
- `all`,
- `set(key, value)`, sets the value of the object's 'key' property
- `filled(key)`, returns true if the 'key' property exists on the object and its value is not null

For the list of available Collection methods, you may check out the official Laravel docs 
[here](https://laravel.com/docs/6.x/collections#available-methods).

### Exceptions

- A generic exception: `EnsoException` is available also with a Facade. 
This exception is extended by all the other Enso specific exceptions and it is not reported 
by the Laravel's Exception Handler.

- A `FileMissingException`, a child of `EnsoException`
- A `JsonParseException`, a child of `EnsoException`

These exceptions are used throughout various Enso packages.

### Traits

#### ActiveState 

Adds the following methods for models that have a boolean `is_active` property:
- `whereActive()` scope
- `scopeInactive()` scope
- `isActive()` helper
- `isInactive()` helper
- `activate()`, updates the model and sets is_active to `true`
- `deactivate()`, updates the model and sets is_active to `false`

#### AvoidsDeletionConflicts 

The trait is meant to provide a generic user readable message when trying to delete a 
model that cannot be actually deleted due to foreign key constraints. 

It achieves this by overwriting the model's delete method, calls the parent delete method within a try-catch block
and if there is any `QueryException`, throws a `ConflictHttpException` letting the user know 
the model is used and cannot be deleted. 

#### CascadesMorphMap

The trait cascades Laravel's `getMorphClass()` method available on models 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
