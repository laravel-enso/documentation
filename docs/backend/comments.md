---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Comments

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/laravel-enso/comments/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/comments/version)](https://packagist.org/packages/laravel-enso/comments)
[![Downloads](https://poser.pugx.org/laravel-enso/comments/downloads)](https://packagist.org/packages/laravel-enso/comments)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/comments/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/comments.svg)](https://github.com/laravel-enso/comments/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/comments.svg)](https://github.com/laravel-enso/comments/pulls)

## Description

Comments adds polymorphic comments and tagged-user notifications to Enso models.

The package exposes a reusable `Commentable` trait, ships the comments CRUD API used by the backoffice, tracks authorship through Enso audit traits, and supports tagged users through a pivot relation and queued notifications.

Delete behavior is configurable, allowing applications to either cascade comment deletion or block deletion when related comments exist.

## Installation

Install the package:

```bash
composer require laravel-enso/comments
```

Run the package migrations:

```bash
php artisan migrate
```

Optional publishes:

```bash
php artisan vendor:publish --tag=comments-config
php artisan vendor:publish --tag=comments-mail
php artisan vendor:publish --tag=comments-factory
```

Default configuration:

```php
return [
    'editableTimeLimit' => 24 * 60 * 60,
    'onDelete' => 'cascade',
    'humanReadableDates' => true,
    'loggableMorph' => [
        'commentable' => [],
    ],
];
```

## Features

- Polymorphic one-to-one and one-to-many comments through the `Commentable` trait.
- Tagged users stored on a pivot table and notified through queued notifications.
- Comments API with list, create, update, destroy, and user option endpoints.
- Configurable delete strategy via `restrict` or `cascade`.
- Automatic parent touching for updated commentable records.

## Usage

Add the trait to any model that should expose comments:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Comments\Traits\Commentable;

class Post extends Model
{
    use Commentable;
}
```

Available relationships:

- `comment()`
- `comments()`

When a model is deleted, the package will either reject the deletion or cascade comment deletion based on `enso.comments.onDelete`.

Tagged users can be synchronized and notified through the `Comment` model:

```php
$comment->syncTags($taggedUsers)->notify('/posts/1');
```

## API

### HTTP routes

- `GET api/core/comments`
- `POST api/core/comments`
- `PATCH api/core/comments/{comment}`
- `DELETE api/core/comments/{comment}`
- `GET api/core/comments/users`

Route names:

- `core.comments.index`
- `core.comments.store`
- `core.comments.update`
- `core.comments.destroy`
- `core.comments.users`

### Model surface

`LaravelEnso\\Comments\\Models\\Comment`

Useful methods:

- `scopeFor(array $params): Builder`
- `syncTags(array $taggedUsers)`
- `notify(string $path)`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/comments/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 10:59:47 AM</div>
</div>
