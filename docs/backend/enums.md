---
sidebarDepth: 3
---

# Enums

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/enums?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/enums&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85492361/shield?branch=master)](https://github.styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/enums/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/enums/downloads)](https://packagist.org/packages/laravel-enso/enums)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/enums/version)](https://packagist.org/packages/laravel-enso/enums)

Enum dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/enums/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/enums/screenshots/bulma_001.png)

<sup>click on the photo to view a a larger screenshot</sup>

## Installation

Comes pre-installed in Enso.

To install outside of Enso:

1. install the package `composer require laravel-enso/enums` 


## Features

- provides an `Enum` class that can be extended with a local implementation, which will allow you to have 
enumeration like capabilities
- provides an `EnumServiceProvider` class that can be extended with a local implementation
- various utility methods are available for the Enum class
- automatic registration of enums within Enso, giving you the option to have the desired enums to the application state,
even from within packages

## Usage

#### Enum - `LaravelEnso\Enums\app\Services\Enum`

Is an abstract class that provides enumeration like capabilities, that is meant to be extended 
and may then be used in 3 modes:
a) when given a static 'data' parameter, which should be an associative array
b) when declaring constants on the class
c) when overriding the static `attributes()` method, which should also return an associative array

Methods:
 - `constants`, returns the list of constants defined on the class, or null otherwise
 - `get(key)`, returns the value of that Enum key
 - `has(key)`, returns true if the Enum has that key
 - `keys`, returns the list of keys, from the data property
 - `values`, returns the list of values, from the data property
 - `all`, returns a translated associative array representation of the enumeration; 
 - `json`, returns a translated json representation of the enumeration; 
 - `array`, returns a translated array representation of the enumeration; 
 - `object`, returns a translated object representation of the enumeration; 
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
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
