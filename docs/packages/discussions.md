# Discussions

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6aa6c234c4945379d7c6c143733aa43)](https://www.codacy.com/app/laravel-enso/Discussions?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Discussions&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/148976842/shield?branch=master)](https://github.styleci.io/repos/148976842)
[![License](https://poser.pugx.org/laravel-enso/discussions/license)](https://packagist.org/packages/laravel-enso/discussions)
[![Total Downloads](https://poser.pugx.org/laravel-enso/discussions/downloads)](https://packagist.org/packages/laravel-enso/discussions)
[![Total Downloads](https://poser.pugx.org/laravel-enso/discussions/downloads)](https://packagist.org/packages/laravel-enso/discussions)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/discussions/version)](https://packagist.org/packages/laravel-enso/discussions)

Discussions for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/discussions/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/discussions/videos/bulma_discussions.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

### Features

- discussions are grouped around topics
- users can tag other users in their posts
- the tagged users receive notifications (WIP)
- users can show their appreciation for topics that they like with 'claps'
- powerful what-you-see-is-what-you-get text editor, based on the excellent [Quill](https://quilljs.com/) library
- within Enso, the Discussions module is integrated with the Activity Log
- can be attached to any other model, via a polymorphic relationship
- a `Discussible` trait is available, in order to make it easy to add discussions to a model 
- changes to the discussions and posts are enforced through policies, where changes can be made by the original poster or an administrator
- uses its own suite of specialized Bulma styled VueJS components for smooth integration with the rest of the application  

## Configuration

The `config/enso/discussions.php` configuration file, lets you customize the following:

- `onDelete`, string, option that manages the case when the commentable entity is deleted and it has attached discussions.
Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a discussable model is deleted, the discussions attached to it are also deleted. 
    With the restrict option,  when attempting to delete a discussable model with attached discussions, an exception is thrown.
    
- `loggableMorph`, the list of entities using the discussable functionality, each mapped to its respective loggable attribute
For example: 
    ```php
    'discussable' => [
        Company::class => 'name',
    ],
    ```

   This configuration is used for activity logging.
   
### Publishes

- `php artisan vendor:publish --tag=discussions-config` - configuration files
- `php artisan vendor:publish --tag=discussions-assets` - the required js assets 
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, can be used with the `--force` flag

Depends on:
 - [Quill](https://quilljs.com/) for the wysiwyg editor


### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
