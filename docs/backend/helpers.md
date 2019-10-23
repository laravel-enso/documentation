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

The following contracts, classes, exceptions and traits are available.

### Contracts

- `Activatable`, makes sense for models that have  an `is_active`  column demands the 
    implementation of the following methods:
    - `isActive(): bool`
    - `isInactive(): bool`

    Can be used together with the `ActiveState` trait that provides a default implementation of the trait
    and more. For information on the trait, see below.
    
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

The trait cascades Laravel's `getMorphClass()` method available on models and attempts to use 
a key (if defined), otherwise falling back to the default Laravel implementation

#### SeederProgress

Allows to show a progress bar for long running database seeding processes.

To use it:
- import the trait
- declare a constant chunk with a value that makes sense
- before starting the seed process, call the trait's `start($count)` method with the total 
    count of the items that will be seeded
- start the seeding process, while ensuring you're seeding using chunks, and after
    completing each chunk, call the trait's `advance()` method.   
- once the seeding is complete,  call the trait's `end()` method.

Example:
```php
class ProductSeeder extends Seeder
{
    use SeederProgress;

    private const Chunk = 800;
    
    public function run()
    {
        $this->chunk(self::Chunk)
            ->start(LegacyProduct::count());

        LegacyProduct::chunkById(self::Chunk, function ($products) {
            $this->insert($products);
            $this->advance();
        });
        
        $this->end();
    }

    private function insert($products) { ... }
}
```

#### DateAttributes

Whenever you're receiving date attribute from the front-end and fill/set the values on the model,
you have to create a setter for that attribute that parses, formats and sets the actual value.

By using the trait, within the setter you can call the trait's 
`fillDateAttribute('attributeName', $value, $format = null)`
pass the attribute name and the value (the format is optional) and the trait will do the rest for you.

When determining the format used for parsing, the rules are:
- use the `$format` method parameter, if given
- use the configured Enso date format (`enso.config.dateFormat`) is available
- fallback to Laravel's determined date format

The value and the format are used to obtain a Carbon instance from the given value. 
If the value already is a Carbon instance, it is left unchanged;

#### InCents

When working with monetary values, the trait is meant to make your life easier if you choose to store 
these values in cents.

To use the trait:
- add it to your class
- declare the `protected $centAttributes = [ ];` field and set the model's monetary/cent attribute names
- use the `inCents($mode)` to convert your values from/to cents

For example: 
- when returning a model to the front-end, after retrieving the it from the DB, call the 
    `inCents(false)` method of the trait which will convert the monetary values from cents to your currency
- when creating a new model, before filling any monetary attributes, you should call the `inCents(true/false)`
    method to set the appropriate mode for the values you'll be filling
    
The trait does a few things automatically, based on an internal `$inCents` flag/mode:
- whenever the model is retrieved from the DB, it notes that the values are in cents
- before saving the model:
    - if the values are not in cents, it converts them to cents
    - if the values are in cents, nothing is altered
    - if it can't determine whether the values are in cents or not, a `LogicException` is thrown   
- when calling the `inCents` method on a model with dirty monetary attributes, and its internal
    flag is not set, a `LogicException` is thrown
    
::: tip
The trait's internal `$inCents` flag is public, thus for situations where it makes sense,
you can set it directly, thus bypassing the `inCents()` method; 
:::

#### MapsRequestKeys

When working with Resource representations of models, you may choose to use camelCase representations 
for their attributes. Whenever updating the models based on user input, you'll probably want to fill 
the updated values, however you'll have to remap them due to the mismatching keys.

The trait can be used for FormRequest validations so that whenever the validation passes,
you can update the model using:

```php
$model->update($request->mapped());
```

#### UpdatesOnTouch

The trait can be used on models where, whenever updated, you might also want to touch 
other related (or parent) models.

To use it:
- add the trait to your model
- declare the `protected $touches = ['relation'];` attribute and set the relationships to the related
- within your logic, use the trait's `touchOwners`

::: tip
If any of the related models also use the `UpdatesOnTouch` trait, the touch will be cascaded.
:::

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
