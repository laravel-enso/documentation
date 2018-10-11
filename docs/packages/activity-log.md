# Activity Log

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-enso/ActionLogger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/ActionLogger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85554059/shield?branch=master)](https://styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-enso/activitylog/license)](https://packagist.org/packages/laravel-enso/activitylog)
[![Total Downloads](https://poser.pugx.org/laravel-enso/activitylog/downloads)](https://packagist.org/packages/laravel-enso/activitylog)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/activitylog/version)](https://packagist.org/packages/laravel-enso/activitylog)

Activity logger dependency for [Laravel Enso](https://laravel-enso.com).

[![Watch the demo](https://laravel-enso.github.io/activitylog/screenshots/bulma_051_thumb.png)](https://laravel-enso.github.io/activitylog/videos/bulma_activity_log.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>


### Features

- friendly interface for viewing user activity in the application
- by default only available to users with the Administrator role
- events are presented in an useful manner
- allows the filtering of data depending on a date interval, the roles of the users, the users or the type of events
- supports create, update, delete and custom event types
- the models whose changes need to represented, need only to use the `LogActivity` trait. Optionally, 
you may set additional configuration attributes on the model to further fine tune the way data is logged/represented. 

### Usage

In order to enable the logging for a particular model, you need to add the `LogActivity` trait to that model. 
By doing this, creation and deletion events are recorded (update events are not). 

By default, for each entry:
- the model's `name` attribute will be used as label
- the proper event type will be used i.e. 'created' when storing a new model
- no specific message is used  
- no specific icon is used  

#### Customization

##### Changing the model representation
 
Since not all models have a `name` attribute, 
or it makes sense to use some other attribute to better represent a certain model type, 
you may declare a `$loggableLabel` on the model, and set the value to be used as label.

```php
protected $loggableLabel = 'title';
```

##### Logging update events

To enable the tracking of update events, you must declare a `$loggable` attribute on the model. 
The value of the attribute should be an array of model attributes that you want tracked.

```php
protected $loggable = ['name', 'description', 'is_active'];
```

Note that when updating a model, if none of the tracked attributes are updated, no entry is recorded even if the tracked model is otherwise updated.

##### Customizing label attributes

Normally it is enough to give a simple list of tracked attributes, in which case the attribute names themselves will be used to describe them. 
To customize the label for any of the tracked attribute you should use an associative
`key => value` declaration style. In this case, the key is the tracked model's attribute and the value should be the alternative label for that attribute.  

```php
protected $loggable = ['name', 'description', 'is_active' => 'active state'];
```

##### Generating custom events

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
    

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

## Publishes

- `php artisan vendor:publish --tag=activityLog-assets` - all the VueJS components and assets
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag

### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
