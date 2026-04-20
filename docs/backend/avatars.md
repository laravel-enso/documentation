---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Avatars

[![License](https://poser.pugx.org/laravel-enso/avatars/license)](https://github.com/laravel-enso/avatars/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/avatars/version)](https://packagist.org/packages/laravel-enso/avatars)
[![Downloads](https://poser.pugx.org/laravel-enso/avatars/downloads)](https://packagist.org/packages/laravel-enso/avatars)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/avatars/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/avatars.svg)](https://github.com/laravel-enso/avatars/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/avatars.svg)](https://github.com/laravel-enso/avatars/pulls)

## Description

Avatars is Laravel Enso's user avatar package.

It attaches one avatar record to each user, exposes authenticated endpoints for viewing, uploading, and regenerating avatars, and integrates with Enso's file pipeline so custom uploads are stored and transformed consistently.

The package also generates default avatars automatically. It prefers Gravatar when a public image exists for the user's email address and falls back to a locally generated Laravolt avatar when it does not.

The frontend integration lives primarily in the Enso user profile experience and reusable avatar components from `@enso-ui/users`.

## Installation

This package comes pre-installed in Laravel Enso applications that support user profile avatars.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/avatars
```

The package auto-registers its service providers, loads migrations, registers API routes, observes user creation, and exposes the avatar generation command.

Run the migrations after installation:

```bash
php artisan migrate
```

If you need the package storage scaffolding, publish it with:

```bash
php artisan vendor:publish --tag=avatars-storage
```

## Features

- Adds a one-to-one avatar relation to `LaravelEnso\Users\Models\User` through dynamic methods.
- Adds a `generateAvatar()` dynamic method to users for regenerating their default avatar.
- Generates a default avatar automatically whenever a new user is created.
- Prefers Gravatar and falls back to a generated Laravolt image when no Gravatar exists.
- Stores uploaded avatar files through `laravel-enso/files`.
- Deletes the previously attached file when an avatar is replaced.
- Enforces square image uploads.
- Exposes avatar display, upload, and regenerate endpoints under the core API namespace.
- Registers permissions and authorization for avatar operations.

## Usage

The package binds an `avatar()` relation and `generateAvatar()` method to the Enso user model:

```php
$user->avatar;
$user->generateAvatar();
```

Store a custom uploaded avatar for the authenticated user:

```php
use Illuminate\Http\UploadedFile;

$request->validate([
    'avatar' => 'required|image:allow_svg|dimensions:ratio=1',
]);

$request->user()->avatar->store(
    UploadedFile::fake()->image('avatar.png', 512, 512),
);
```

Regenerate the default avatar:

```php
$request->user()->generateAvatar();
```

Display an avatar in the browser by hitting the show endpoint:

```php
route('core.avatars.show', $user->avatar->id);
```

::: warning Note
The package is designed to work with a single avatar per user. When you regenerate or upload a new avatar, the previously attached file is removed automatically.
:::

## API

### Routes

All package routes are registered under:

- prefix: `api/core/avatars`
- name prefix: `core.avatars.`
- middleware: `api`, `auth`, `core`

Endpoints:

- `POST /api/core/avatars`
- `PATCH /api/core/avatars/{avatar}`
- `GET /api/core/avatars/{avatar}`

### Authorization

`LaravelEnso\Avatars\Policies\AvatarPolicy`

- superiors may manage any avatar
- regular users may update only their own avatar
- impersonating users may not update avatars

### Model

`LaravelEnso\Avatars\Models\Avatar`

Persisted fields:

- `user_id`
- `file_id`
- `url`

Relationships:

- `user()`
- `file()`

Useful methods:

- `store(UploadedFile $uploadedFile)`
- `extensions()`
- `mimeTypes()`
- `imageWidth()`
- `imageHeight()`

### Dynamic User Integration

Dynamic additions on `LaravelEnso\Users\Models\User`:

- `avatar()`
- `generateAvatar()`

### Command

Generate missing avatars for users without one:

```bash
php artisan enso:avatars:generate
```

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/files`](https://docs.laravel-enso.com/backend/files.html) [↗](https://github.com/laravel-enso/files)
- [`laravel-enso/image-transformer`](https://docs.laravel-enso.com/backend/image-transformer.html) [↗](https://github.com/laravel-enso/image-transformer)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/users`](https://docs.laravel-enso.com/frontend/users.html) [↗](https://github.com/enso-ui/users)

External dependency:

- [`laravolt/avatar`](https://github.com/laravolt/avatar) [↗](https://github.com/laravolt/avatar)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/avatars/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:56:56 AM</div>
</div>
