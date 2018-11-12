# Comments Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d96ab52d782d46b9a94e00ea6059b34c)](https://www.codacy.com/app/laravel-enso/CommentsManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/CommentsManager&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/85583597/shield?branch=master)](https://styleci.io/repos/85583597)
[![License](https://poser.pugx.org/laravel-enso/commentsmanager/license)](https://packagist.org/packages/laravel-enso/commentsmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/commentsmanager/downloads)](https://packagist.org/packages/laravel-enso/commentsmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/commentsmanager/version)](https://packagist.org/packages/laravel-enso/commentsmanager)

Comments Manager for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/commentsmanager/screenshots/bulma_018_thumb.png)](https://laravel-enso.github.io/commentsmanager/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>


## Features

The package offers a quick and easy flow for adding comments to any model.

- gives the possibility to add, update and delete comments
- has the option of tagging other users in the comments using `@` and the user name
- users are notified via push [Notifications](https://github.com/laravel-enso/Notifications) when they are tagged
- uses its own policies to ensure users edit comments only when they are allowed to do so
- uses [TrackWho](https://github.com/laravel-enso/TrackWho) to keep track of the users that are posting comments
- depends on [Avatar Manager](https://github.com/laravel-enso/AvatarManager) to display user avatars, when available
- uses a light, internal mechanism for tagged user auto-completion

## Under the Hood
- polymorphic relationships are used, which makes it possible to attach comments to any other entity
- within the entity to which we want to attach comments, we must use the `Commentable` trait

## Installation Steps

The component is already included in the Enso install and should not require any additional installation steps.

## Use

1. Add the `Commentable` trait in the Model to which you need to add comments. 
    You can then use the `$model->comments` relationship
2. Since users post comments, and users can tag other users, the `User` model has the `Comments` trait, 
    which gives you access to the user's comments, as well as the comments he's tagged in 
3. If you need to customize the `CommentTagNotification` you need to publish it first with
    `php artisan vendor:publish --tag=comments-notification`
4. Include the component in your pages/components

    ```vue
    <comments :id="modelId"
        type="modelClass"
        :paginate="5">
    </comments>
    ```
    Note: you may substitute the comments component with the comments-card component as the two share the main properties
    and the comments-card is a card wrapper for the bare comments component.

## Options

### CommentsCard.vue
- `open` - boolean, flag, makes the component start collapsed or open | default is `false` | (optional)
- `id` - number, the id of the commentable model | required
- `type` - string, the commentable model class | required
- `title` - string, title for the component | default is `''` | (optional)
- `icon` - string, font awesome icon class | default is `'faComments'` | (optional)

### Comments.vue
- `id` - number, the id of the commentable model | required
- `type` - string, the commentable model alias you set at the installation step #3 | required
- `query` - string, text for filtering out comments | default is `null` | (optional)
- `controls` - boolean, flag for showing the controls for the component, such as the buttons for creating a new comment, 
reloading the list of comments, etc. | default`false` | (optional)

## Configuration
In the `config/enso/comments.php` configuration file you may also set the following options:

- `editableTimeLimit`, number, the amount of seconds after which a comment is no longer editable | default is `24 * 60 * 60` seconds (1 day)
- `onDelete`, string, option that manages the case when the commentable entity is deleted and it has attached addresses.
Valid options are `cascade`, `restrict` | default is `cascade`

    With the cascade option, when a commentable model is deleted, the comments attached to it are also deleted. 
    With the restrict option,  when attempting to delete a commentable model with attached comments, an exception is thrown.
    
- `loggableMorph`, the list of entities using the commentable functionality, each mapped to its respective loggable attribute
For example: 
    ```php
    'commentable' => [
        Company::class => 'name',
    ],
    ```

   This configuration is used for activity logging.

## Extending the comments
In your project you may have the need to alter and or extend the comment notification.
To achieve this, you'd need to:
- create a new CommentTagNotification, ensuring it implements the `NotifiesTaggedUsers` marker interface. 
- bind your local implementation to the interface in your local `AppServiceProvider`

## Publishes
- `php artisan vendor:publish --tag=comments-config` - configuration file
- `php artisan vendor:publish --tag=comments-assets` - the VueJS components
- `php artisan vendor:publish --tag=comments-notification` - the queueable notification sent to the tagged users
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the configuration,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=comments-mail` - the templates used for notifications
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the templates 
used for notifications
- `php artisan vendor:publish --tag=comments-factory` - the factory used for comments
- `php artisan vendor:publish --tag=enso-factory` - a common alias for when wanting to update the factories 
once a newer version is released, usually used with the `--force` flag

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [Core](https://github.com/laravel-enso/Core) for middleware and user model 
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [TrackWho](https://github.com/laravel-enso/TrackWho) for keeping track of the users making the changes to each contact
 - [VueComponents](https://github.com/laravel-enso/VueComponents) for the accompanying VueJS components
 - [AvatarManager](https://github.com/laravel-enso/AvatarManager) for showing the users' avatars
