---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Track Who

[![License](https://poser.pugx.org/laravel-enso/track-who/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/track-who/version)](https://packagist.org/packages/laravel-enso/track-who)
[![Downloads](https://poser.pugx.org/laravel-enso/track-who/downloads)](https://packagist.org/packages/laravel-enso/track-who)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/track-who.svg)](https://github.com/laravel-enso/track-who/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/track-who.svg)](https://github.com/laravel-enso/track-who/pulls)

## Description

Track Who adds lightweight authoring metadata to Eloquent models.

The package exposes three traits that automatically persist the authenticated user into `created_by`, `updated_by`, and `deleted_by` columns during the corresponding model lifecycle events. This is useful for audit-friendly entities that need simple ownership or accountability metadata without a full activity log.

The traits work independently, so you can track only creation, only updates, only deletions, or combine them on the same model.

## Installation

This package is usually installed transitively by Enso packages that need author tracking.

For standalone installation:

```bash
composer require laravel-enso/track-who
```

<<<<<<< HEAD
No service provider or config publishing is required.

To use the traits, make sure your table contains the matching nullable columns:

```php
$table->unsignedInteger('created_by')->nullable();
$table->unsignedInteger('updated_by')->nullable();
$table->unsignedInteger('deleted_by')->nullable();
```

If you want to use `DeletedBy`, the model should also use `SoftDeletes`.

## Features

- Tracks the authenticated user on model creation through `CreatedBy`.
- Tracks the authenticated user on model creation and update through `UpdatedBy`.
- Tracks the authenticated user on soft delete through `DeletedBy`.
- Exposes `createdBy()`, `updatedBy()`, and `deletedBy()` relations to the configured auth user model.
- Works without additional configuration by resolving the user model from `auth.providers.users.model`.
- Lets you opt in trait-by-trait depending on the columns available on each model.

## Usage

Track who created a record:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\TrackWho\Traits\CreatedBy;

class Company extends Model
{
    use CreatedBy;
}
```

Track who last updated a record:

```php
use Illuminate\Database\Eloquent\Model;
use LaravelEnso\TrackWho\Traits\UpdatedBy;

class Company extends Model
{
    use UpdatedBy;
}
```

Track who deleted a soft-deletable record:
=======
The package is driven by model traits and expects your tables to expose the corresponding nullable foreign keys.

## Features

- Adds `created_by`, `updated_by`, and `deleted_by` support through dedicated traits
- Resolves the current authenticated user automatically via `auth()->id()`
- Updates author columns on create, update, and soft delete model events
- Leaves existing lifecycle logic intact, so it can be combined with other model traits
- Supports partial adoption, depending on which authoring columns a model needs

## Usage

Add the columns you need to your model table, for example:

```php
$table->foreignId(created_by)->nullable()->constrained(users);
$table->foreignId(updated_by)->nullable()->constrained(users);
$table->foreignId(deleted_by)->nullable()->constrained(users);
```

Apply the matching traits on the model:
>>>>>>> 4ceb69d (Add merge request badge to README)

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
<<<<<<< HEAD
use LaravelEnso\TrackWho\Traits\DeletedBy;

class Company extends Model
{
    use SoftDeletes, DeletedBy;
}
```

The traits also expose relations to the current auth user model:

```php
$company->createdBy;
$company->updatedBy;
$company->deletedBy;
```

::: warning Note
`DeletedBy` persists the deleting user by saving the model during the delete cycle.

Use it together with `SoftDeletes` and a nullable `deleted_by` column so the record remains available after deletion.
:::

=======
use LaravelEnso\TrackWho\Traits\CreatedBy;
use LaravelEnso\TrackWho\Traits\DeletedBy;
use LaravelEnso\TrackWho\Traits\UpdatedBy;

class Post extends Model
{
    use CreatedBy;
    use UpdatedBy;
    use SoftDeletes;
    use DeletedBy;
}
```

>>>>>>> 4ceb69d (Add merge request badge to README)
## API

### Traits

<<<<<<< HEAD
`LaravelEnso\TrackWho\Traits\CreatedBy`

- boots on `creating`
- writes the authenticated user's id into `created_by`
- exposes `createdBy(): Relation`

`LaravelEnso\TrackWho\Traits\UpdatedBy`

- boots on `creating`
- boots on `updating`
- writes the authenticated user's id into `updated_by`
- exposes `updatedBy(): Relation`

`LaravelEnso\TrackWho\Traits\DeletedBy`

- boots on `deleting`
- writes the authenticated user's id into `deleted_by`
- temporarily disables the event dispatcher while persisting the value
- exposes `deletedBy(): Relation`

### Auth User Resolution

All relations resolve the user model from:

```php
config('auth.providers.users.model');
```

### Required Columns

Depending on the trait you apply:

- `created_by`
- `updated_by`
- `deleted_by`

For soft-delete tracking:

- `deleted_at`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)
=======
- `LaravelEnso\TrackWho\Traits\CreatedBy`
  - sets `created_by` during the model `creating` event
- `LaravelEnso\TrackWho\Traits\UpdatedBy`
  - sets `updated_by` during the model `updating` event
- `LaravelEnso\TrackWho\Traits\DeletedBy`
  - sets `deleted_by` during the model `deleting` event and saves the model before the delete operation proceeds

### Required Columns

- `created_by` for `CreatedBy`
- `updated_by` for `UpdatedBy`
- `deleted_by` for `DeletedBy`

All three columns are expected to store the authenticated user id.

## Depends On

Required Enso packages:

- [laravel-enso/helpers](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
>>>>>>> 4ceb69d (Add merge request badge to README)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/track-who/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:25:49 PM</div>
</div>
