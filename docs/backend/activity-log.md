---
sidebarDepth: 3
---

# Activity Log

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0f8e148c3247407cab601e3460967a2e)](https://www.codacy.com/app/laravel-enso/activity-log?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/activity-log&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/144374422/shield?branch=master)](https://github.styleci.io/repos/144374422)
[![License](https://poser.pugx.org/laravel-enso/activity-log/license)](https://packagist.org/packages/laravel-enso/activity-log)
[![Total Downloads](https://poser.pugx.org/laravel-enso/activity-log/downloads)](https://packagist.org/packages/laravel-enso/activity-log)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/activity-log/version)](https://packagist.org/packages/laravel-enso/activity-log)

Activity logger dependency for [Laravel Enso](https://laravel-enso.com).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [activity-log](https://github.com/enso-ui/activity-log) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/activity-log/screenshots/bulma_051_thumb.png)](https://laravel-enso.github.io/activity-log/videos/bulma_activity_log.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- friendly interface for viewing user activity in the application
- available by default only to users with the Administrator role
- events are presented in an useful manner
- allows the filtering of data depending on a date interval, the roles of the users, the users or the type of events
- supports create, update, delete and custom event types
- the basic configuration is easy to write
- the logger will not attempt to persist data when there is no authenticated user - this avoids issues when 
using seeder / playing in tinker, etc.

## Usage

In order to enable logging for models a few steps are necessary:
- publish the default `LoggerServiceProvider` from the activity log package:
```
php artisan vendor:publish --tag=activity-log-provider
```
- customize the included example for you model class, where:
    - `alias` is an optional alias for the model 
    - `label` is the label attribute to be used for your model 
    - `envents` is the array of events available
    - `attributes` is an array of model attribute that you want monitored for changes. 
    If the model is updated and the updated attribute is not in this list, no event is recorded 

## Advanced Usage

### Changing the model representation
 
Since not all models have a `name` attribute, 
or it makes sense to use some other attribute to better represent a certain model type, 
you may use any other attribute of the model, or:
- you can declare a getter method that composes a label using your own rules
- you can also use a `.` (dot) notation to specify attributes from related models 

### Using names for relationships

Let's say you have a `Product` model with a `manufacturer_id` column and relationship, and you want
to monitor when the manufacturer is updated.

It's easy to add the `manufacturer_id` in the attributes list, but in that case the recorded update event
will read something like 'X updated the product and changed manufacturer_id from 123 to 436'.

In order to show meaningful names instead of IDs, you need to configure the product model with the related 
model class for the `manufacturer_id` column:

```php
Product::class => [
    'label' => 'part_number',
    'attributes' => ['manufacturer_id' => [Company::class => 'name']],
    'events' => [Events::Created, Events::Deleted, Events::Updated],
],
```

### Creating Custom Events

If you want to create custom events, for instance record that a User was activated instead of 
having to wade through updated events where your 'is_active' flag was changed from false to true,
you may create and plug in custom events.

Steps:
- create a `LoggableEvents` local Enum that extends the ActionLogger Events enum.
    
    ```php
    use LaravelEnso\ActivityLog\app\Enums\Events;
    
    class LoggableEvents extends Events
    {
        const UserActivated = 5;
    
        protected static function data(): array
        {
            return parent::data() + [
                static::UserActivated => 'User Activated',
            ];
        }
    }
    ``` 

- create a `LoggableObservers` local Enum that extends the ActionLogger Observers enum.
    Here, the UserActivated event must be 'connected' to an observer (`ActivateUser`) 
    that will observe the  user class and create an event

```php
use LaravelEnso\ActivityLog\app\Enums\Observers;

class LoggableObservers extends Observers
{
    protected static function data(): array
    {
        return parent::data() + [
            LoggableEvents::UserActivated => ActivateUser::class,
        ];
    }
}
``` 

- create an `ActivateUser` observer that will observe your new event. If the model is activated,
    we want to create a new event
    
    ```php
    use LaravelEnso\ActivityLog\Services\Factory;
  
    class ActivateUser
    {
        public function updatedActiveState($model)
        {
            if ($model->is_active) {
                (new Factory(new UserActivated($model)))->create();
            }
        }
    }
    ```

- create the `UserActivated` event, which must implement the `Loggable` contract

    ```php
    use LaravelEnso\ActivityLog\Contracts\Loggable;
    use LaravelEnso\ActivityLog\Traits\IsLoggable;
  
    class UserActivated implements Loggable
    {
        use IsLoggable;
    
        private $model;
    
        public function __construct(User $model)
        {
            $this->model = $model;
        }
    
        public function type(): int
        {
            return App::make(Events::class)::UserActivated;
        }
    
        public function message()
        {
            return ':user activated the :model :label';
        }
    
        public function icon(): string
        {
            return 'unlock';
        }
    
        public function iconClass(): string
        {
            return 'is-success';
        }
    ```

    Optionally, you may also implement the `ProvidesAttributes` contract and its required method,
    which must return an associative array with other key value pairs that can be used in the 
    string message template.
    
    Note that you may not reuse any of the `user`, `model` or `label` key as they are provided automatically
    by the package service.
    
    Also note that the given icon should be available (imported)

- since you've extended the two Enums from the ActionLogger package, you need to bind your 
    local implementations to the package versions in your AppServiceProvider. 

    ```php
    public $bindings = [
        Observers::class => LoggableObservers::class,
        Events::class => LoggableEvents::class,
    ];
    ```

- finally, in your published `LoggerServiceProvider` add the new event to your model's events array:
    ```php
    'events' => [
        LoggableEvents::UserActivated,
    ],
    ```
    

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
