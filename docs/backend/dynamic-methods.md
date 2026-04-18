---
sidebarDepth: 3
---

# Dynamic Methods

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e342eff10f24db5b89be5fe203e424d)](https://www.codacy.com/app/laravel-enso/dynamic-methods?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/dynamic-methods&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85492361/shield?branch=master)](https://github.styleci.io/repos/85492361)
[![License](https://poser.pugx.org/laravel-enso/dynamic-methods/license)](https://packagist.org/packages/laravel-enso/datatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/dynamic-methods/downloads)](https://packagist.org/packages/laravel-enso/dynamic-methods)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/dynamic-methods/version)](https://packagist.org/packages/laravel-enso/dynamic-methods)

Dynamic method dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/dynamic-methods/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/dynamic-methods/screenshots/bulma_001.png)

<sup>click on the photo to view a a larger screenshot</sup>

## Installation

Comes pre-installed in Enso.

To install outside of Enso:

1. install the package `composer require laravel-enso/dynamic-methods` 


## Features

- provides a trait that can be used to dynamically add methods on a class that would not normally have them
- additionally, a series of other traits are available that, within the Laravel ecosystem, can be used to ensure
that the dynamically added methods can be used as/for accessors and relationships
- the traits can be used as an alternative to repeatedly extending classes, which can prove difficult and error prone
 in the context of building packages on top of other packages, on top of other packages. 

## Usage

#### Methods - `LaravelEnso\DynamicMethods\app\Traits\Methods`

This is the core trait that permits adding a method to an object via its main method `addDynamicMethod`.
The method takes a method name and a closure.

Example:
```php
Product::addDynamicMethod('foo', function () {
    return 'bar';
});
```

Afterwards, you can simply call the newly added method on Product instances, as if the method had been there all along:
```php
$p = new Product();
$p->foo(); //'bar'
```

#### Mutators - `LaravelEnso\DynamicMethods\app\Traits\Mutators`

The trait uses `Methods` and overwrites Laravel Model's `hasGetMutator($key)` and `hasSetMutator($key)` methods
so that when dynamically adding mutator methods on models, the newly added methods are used if necessary.

#### Relations - `LaravelEnso\DynamicMethods\app\Traits\Relations`

The trait uses `Methods` and overwrites Laravel Model's `getRelationValue($key)` method
so that when dynamically adding relationship methods on models, the newly added methods are used if necessary.

Example:
```php
Product::addDynamicMethod('manufacturer', function () {
    return $this->belongsTo(Manufacturer::class);
});
``` 

#### StaticMethods - `LaravelEnso\DynamicMethods\app\Traits\StaticMethods`

Similar to `Methods`, the trait permits adding a static method to an object via its main method `addDynamicStaticMethod`.
The method takes a method name and a closure.

Of course, when calling the method, the call should be made statically.
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
