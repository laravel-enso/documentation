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

- An abstract `Enum` class which can be used to build an enumeration out of an array or a config file and comes with a set of helper functions 
- An `Obj` class, with a constructor for building an object from an array, that provides a suite of helper functions, such as: `all()`, `__toString()`, `toJson()`, `toArray()`, `get($key)`, `set($key, $value)`, `has($key)`, `keys()`, `values()` and more
- A `MorphableConfigMapper` class, with helper methods when working with morphable models from the configuration

#### Obj

The constructor optionally takes an associate array that sets up the object, 
using the array keys as properties and the array values as the property values.

Methods:
- `all`, gives back the object's attributes and values as an associative array
- `toJson`, gives back the json representation of the object. Note that the String representation also gives back the same 
- `toArray`, same as `all`, gives back the object's attributes and values as an associative array
- `get(key)`, returns the value of the object's 'key' property
- `set(key, value)`, sets the value of the object's 'key' property
- `has(key)`, returns true if the 'key' property exists on the object
- `filled(key)`, returns true if the 'key' property exists on the object and its value is not null
- `forget(key)`, unsets the 'key' property
- `keys`, gives back as array the names of the object's properties
- `values`, gives back as array the values of the object's properties
- `isEmpty`, returns true if the object doesn't have any properties
- `isNotEmpty`, returns true if the object has any property
- `count`, returns the number of the object's properties

#### Enum

Provides enumeration like capabilities and may be used in 2 modes:
a) when given a static 'data' parameter, which should be an associative array
b) when declaring constants on the class

Methods:
 - `get(key)`, returns the value of that Enum key
 - `has(key)`, returns true if the Enum has that key
 - `keys`, returns the list of keys, from the data property
 - `values`, returns the list of values, from the data property
 - `all`, returns a translated associative array representation of the enumeration; 
 If used in mode a), it will give back the list of constants and their values.
 If used in mode b), it will give back the data attribute.
 In both cases, it will translate the values, using Laravel's `__` function
 - `json`, returns a JSON representation of the enum
 - `array`, returns an associative array representation of the Enum, where the Enum attributes are the keys 
 - `object`, returns an object representation of the Enum, where the Enum attributes are the properties
 - `collection`, returns a collection representation of the Enum
 - `select`, returns a VueSelect data representation of the Enum, where the Enum keys are used as IDs 
 and Enum key values are used as names
   
#### MorphableConfigMapper

The class should be extended and the 2 properties should be provided:
- `configPrefix`, string, the prefix for the configuration file (relative path), for example, 'enso.contacts'
- `morphableKey`, string, the configuration array key that contains the list of morphable classes, for example, 'contractables'  

The new class then provides the following methods:
- `class`, returns the morphable model's class
- `model(id)`, returns the morphable model's instance from the database, with the given id 

### Exceptions

- a generic exception: `EnsoException` is available also with a Facade. This exception is extended by all the other Enso specific exceptions and it is not reported by the Laravel's Exception Handler

### Traits

#### IsActive 

Adds the following methods for models that have a boolean `is_active` property:
- `whereActive()` scope
- `whereDisabled()` scope
- `isActive()` helper
- `isDisabled()` helper 

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included
