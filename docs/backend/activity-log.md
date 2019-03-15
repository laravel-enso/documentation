---
sidebarDepth: 3
---

# Activity Log

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-enso/ActionLogger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/ActionLogger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85554059/shield?branch=master)](https://styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-enso/activitylog/license)](https://packagist.org/packages/laravel-enso/activitylog)
[![Total Downloads](https://poser.pugx.org/laravel-enso/activitylog/downloads)](https://packagist.org/packages/laravel-enso/activitylog)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/activitylog/version)](https://packagist.org/packages/laravel-enso/activitylog)

Activity logger dependency for [Laravel Enso](https://laravel-enso.com).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/activitylog/screenshots/bulma_051_thumb.png)](https://laravel-enso.github.io/activitylog/videos/bulma_activity_log.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- friendly interface for viewing user activity in the application
- available by default only to users with the Administrator role
- events are presented in an useful manner
- allows the filtering of data depending on a date interval, the roles of the users, the users or the type of events
- supports create, update, delete and custom event types
- the models whose changes need to represented, need only to use the `LogsActivity` trait. Optionally, 
you may set additional configuration attributes on the model to further fine tune the way data is logged/represented
- the logger will not attempt to persist data when there is no authenticated user - this avoids issues when 
using seeder / playing in tinker, etc.

## Usage

In order to enable the logging for a particular model, you need to add the `LogsActivity` trait to that model. 
By doing this, creation and deletion events are recorded (update events are not). 

By default, for each entry:
- the model's `name` attribute will be used as label
- the proper event type will be used i.e. 'created' when storing a new model
- no specific message is used  
- no specific icon is used  

## Customization

### Changing the model representation
 
Since not all models have a `name` attribute, 
or it makes sense to use some other attribute to better represent a certain model type, 
you may declare a `$loggableLabel` on the model, and set the value to be used as label.

```php
protected $loggableLabel = 'title';
```

Also, the label may be declared through a relationship, on a related model. For example:
```php
protected $loggableLabel = 'person.name';
```

where `person` is an existing relationship on this model. In such cases, the logging mechanism will actually follow
through the relationship(s) until it is able to load the given label attribute.

### Logging update events

To enable the tracking of update events, you must declare a `$loggable` attribute on the model. 
The value of the attribute should be an array of model attributes that you want tracked.

```php
protected $loggable = ['name', 'description', 'is_active', 'gender' => Genders::class];
```

Note: when updating a model, if none of the tracked attributes are updated, no entry is recorded even if the tracked model is otherwise updated.

### Customizing label attributes

Normally it is enough to give a simple list of tracked attributes, in which case the attribute names themselves will be used to describe them. 
To customize the label for any of the tracked attribute you should use an associative
`key => value` declaration style. In this case, the key is the tracked model's attribute and the value should be the alternative label for that attribute.  

```php
protected $loggable = ['name', 'description', 'is_active' => 'active state'];
```

### Enum label attributes

You may also give an enum as the value of a `key => value` pair when using this key-value declaration style. In such cases,
the enum will be used to process the stored values and present more human readable values.

```php
protected $loggable = ['name', 'description', 'is_active', 'gender' => Genders::class];
```

### Relationship label attributes

You may also give an array as the value of a `key => value` pair when using this key-value declaration style. In such cases,
the array is expected to further contain a `key => value` pair with a class name as key and a model attribute as the value.

```php
protected $loggable = ['name', 'group_id' => [UserGroup::class => 'name']];
```

The class and the model attribute values are used to follow through a relationship on the loggable model, and retrieve the 
given attribute's value on the related model.

### Generating custom events

Because you may want to generate custom events, the trait provides a public `logEvent` method for this purpose, 
that may be called on the model.
 
The method takes 2 parameters:
- `$message`, which is required and should meaningfully describe the event
- `$flag`, which is optional and if given, should be a Font Awesome icon class, to be used for the custom event

```php
$company = Company::find(1);
$company->logEvent('triggered my custom action','beer');
```

Please note:
- the given icon should be available (imported)
- if no icon is given, the flag icon is used by default    

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
