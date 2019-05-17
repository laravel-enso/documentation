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

- An abstract `Enum` class which can be used to build an enumeration out of an array or a config file and comes with a set of helper functions 
- An `Obj` class, with a constructor for building an object from an array, an object, a Laravel model that can even have loaded relationships and more. 
It provides a suite of helper functions, such as: 
     * `all()`, 
     * `__toString()`,
     * `toJson()`,
     * `toArray()`,
     * `get($key)`,
     * `set($key, $value)`,
     * `has($key)`,
     * `keys()`,
     * `values()` 
- A `JsonParser` class that takes a JSON file as its constructor's argument, and can parse and transform the file to:
    * object
    * array
    * JSON string

#### Obj - ` LaravelEnso\Helpers\app\Classes\Obj`

The constructor optionally takes an associate array or an object (even a Laravel model).  This parameter is used to set up the object. 
For arrays, it uses the array keys as properties and the array values as the property values.

Methods:
- `all`,
`__toString()`, returns the string representation of the object
- `toJson`, gives back the json representation of the object. Note that the String representation also gives back the same 
- `toArray`, same as `all`, gives back the object's attributes and values as an associative array
- `get(key)`, returns the value of the object's 'key' property. Return 'null' if the key does not exist
- `set(key, value)`, sets the value of the object's 'key' property
- `has(key)`, returns true if the 'key' property exists on the object
- `filled(key)`, returns true if the 'key' property exists on the object and its value is not null
- `forget(key)`, unsets the 'key' property
- `keys`, gives back as array the names of the object's properties
- `values`, gives back as array the values of the object's properties
- `isEmpty`, returns true if the object does not have any properties
- `isNotEmpty`, returns true if the object has any property
- `count`, returns the number of the object's properties

#### Enum - `LaravelEnso\Helpers\app\Classes\Enum`

Is an abstract class that provides enumeration like capabilities, that is meant to be extended 
and may then be used in 3 modes:
a) when given a static 'data' parameter, which should be an associative array
b) when declaring constants on the class
c) when overriding the static `attributes()` method, which should also return an associative array

Methods:
 - `get(key)`, returns the value of that Enum key
 - `has(key)`, returns true if the Enum has that key
 - `keys`, returns the list of keys, from the data property
 - `values`, returns the list of values, from the data property
 - `all`, returns a translated associative array representation of the enumeration; 
 - `json`, returns a translated json representation of the enumeration; 
 - `array`, returns a translated array representation of the enumeration; 
 - `collection`, returns a translated Laravel collection representation of the enumeration; 
 - `select`, returns a translated Enso VueSelect representation of the enumeration - array of objects, 
 each object with the `id` and `name` attribute;
 
 If used in mode a), it will give back the list of constants and their values.
 If used in mode b), it will give back the data attribute.
 If used in mode c), it will give back the array you build in the overwritten `attributes()` method
 
 Examples:
 
 ##### Constants
 ```php
 class SeniorityEnum extends Enum
 {
     const Assistant = 1;
     const Associate = 2;
     const Staff = 3;
     const Senior = 4;
     const Partner = 5;
 }
 
 ...
 ->where('type', SeniorityEnum::Assistant)
 ...
 ...
 $seniorityTypes = (new SeniorityEnum())->select();
 ```
 
 ##### Data attribute
 ```php
 class SeniorityEnum extends Enum
{
  protected static $data = [
      1 => 'assistant',
      2 => 'associate',
      3 => 'staff',
      4 => 'senior',
      5 => 'partner',
  ];
 }
 ...
 ->where('type', SeniorityEnum::get('assistant'))
 ...
 ...
 $seniorityTypes = (new SeniorityEnum())->select();  
 ```

##### Attributes method
```php
 class SeniorityEnum extends Enum
 {
    public static method attributes() {
        return Seniority::pluck('id','name')->toArray();
    }
 }
 ...
 ->where('type', SeniorityEnum::get('assistant'))
 ...
 ...
 $seniorityTypes = (new SeniorityEnum())->select();  
 ```

##### Mixed mode
You can actually utilize a mixed mode that may help you in some specific scenarios, such as the one given below.
Keep in mind that if you combine the modes, the order in which they are taken into account (the priority) 
is the following:
- `$data`
- `attributes()` 
- `constants`

Now, why would you want to mix them? Consider the following scenario:

```php
 class SeniorityEnum extends Enum
{
    const Assistant = 1;
    const Associate = 2;
    const Staff = 3;
    const Senior = 4;
    const BigChief = 5;
    
    protected static $data = [
      self::Assistant => 'assistant',
      self::Associate => 'associate',
      self::Staff => 'staff',
      self::Senior => 'senior',
      self::BigChief => 'BIG chief',
];
 }
 ...
 ->where('type', SeniorityEnum::BigChief)
 ...
 ...
 $seniorityTypes = (new SeniorityEnum())->select();  
 ```
 
 Here if you only configured the enumeration using *constants*, it would work, BUT, in the select, 
 the values would be shown as `Assistant,.., BigChief`. That's fine if it works for you, but what if 
 you want to display `BIG chief` instead of `BigChief`? You can't.
 
 If you go the other route, and not use constants, but use just *data*, you can have `BIG chief` formatted accordingly,
 but throughout the code you have to use `SeniorityEnum::get('BIG chief')` which works, but is error prone.
 
 So the conclusion is you can use both modes and have the best of both worlds.
   
### Exceptions

- A generic exception: `EnsoException` is available also with a Facade. 
This exception is extended by all the other Enso specific exceptions and it is not reported 
by the Laravel's Exception Handler.

- A `FileMissingException`, a child of `EnsoException`
- A `JsonParseException`, a child of `EnsoException`
- A `MorphableConfigException`, a child of `EnsoException`

These exceptions are used throughout various Enso packages.

### Traits

#### ActiveState 

Adds the following methods for models that have a boolean `is_active` property:
- `whereActive()` scope
- `whereDisabled()` scope
- `isActive()` helper
- `isDisabled()` helper

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
