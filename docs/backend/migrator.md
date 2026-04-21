---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Migrator

[![License](https://poser.pugx.org/laravel-enso/migrator/license)](https://github.com/laravel-enso/migrator/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/migrator/version)](https://packagist.org/packages/laravel-enso/migrator)
[![Downloads](https://poser.pugx.org/laravel-enso/migrator/downloads)](https://packagist.org/packages/laravel-enso/migrator)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](https://github.com/laravel-enso/migrator/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/migrator.svg)](https://github.com/laravel-enso/migrator/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/migrator.svg)](https://github.com/laravel-enso/migrator/pulls)

## Description

Migrator provides a structure-aware migration helper for Laravel Enso packages.

The package exposes an abstract migration base class that wraps permission creation and menu creation into the normal Laravel migration lifecycle. It is intended for Enso packages that need to register permissions and menu entries together with the database changes that introduce a new module or page.

Instead of duplicating the same permission and menu provisioning logic in each package, Enso migrations can declare a permission array, a menu payload, and an optional parent menu path, and let the package handle validation, creation, and rollback.

## Installation

This package is normally installed as part of the Enso backend stack.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/migrator
```

The package depends on:

- `laravel-enso/core`
- `laravel-enso/menus`
- `laravel-enso/permissions`
- `laravel-enso/roles`

## Features

- Abstract migration class for permission and menu provisioning.
- Transaction-wrapped `up()` and `down()` flows.
- Permission creation with default-role and all-roles assignment logic.
- Menu creation linked automatically to the declared route permission.
- Parent menu resolution through dot-notated menu paths.
- Validation for required permission and menu attributes.
- Structure-specific exceptions for invalid elements or unresolved parents.

## Usage

Extend `LaravelEnso\Migrator\Database\Migration` in a package migration:

```php
use LaravelEnso\Migrator\Database\Migration;

return new class extends Migration {
    protected array $permissions = [
        ['name' => 'examples.index', 'description' => 'List examples', 'is_default' => true],
        ['name' => 'examples.create', 'description' => 'Create an example', 'is_default' => false],
    ];

    protected array $menu = [
        'name' => 'Examples',
        'icon' => 'fas fa-flask',
        'route' => 'examples.index',
        'order_index' => 999,
        'has_children' => false,
    ];

    protected ?string $parentMenu = 'administration';
};
```

When the migration runs:

- `up()` creates the declared permissions
- default permissions are attached to every role
- non-default permissions are attached only to the configured default role
- the menu entry is created and linked to the permission behind the declared route

When the migration rolls back:

- the menu entry is removed first
- the permissions are deleted afterwards

## API

### Abstract Migration

`LaravelEnso\Migrator\Database\Migration`

Protected properties:

- `protected array $permissions = []`
- `protected array $menu = []`
- `protected ?string $parentMenu = null`

Lifecycle methods:

- `up()`
- `down()`

Both directions are executed inside a database transaction.

### Permission Payload

Each permission entry must contain:

- `name`
- `description`
- `is_default`

Behavior:

- `is_default = true` attaches the permission to all roles
- `is_default = false` attaches it only to the configured default role from `enso.config.defaultRole`

### Menu Payload

The menu payload must contain:

- `name`
- `icon`
- `route`
- `order_index`
- `has_children`

Behavior:

- `route` is used to resolve the matching permission
- the permission id is stored on the created menu
- `route` itself is removed from the persisted menu payload after resolution

### Services

Main services:

- `LaravelEnso\Migrator\Services\Permissions`
- `LaravelEnso\Migrator\Services\Menus`
- `LaravelEnso\Migrator\Services\ParentMenu`
- `LaravelEnso\Migrator\Services\Validator`

### Parent Menu Resolution

`ParentMenu` accepts a dot-notated menu chain such as:

```php
'administration.settings'
```

It resolves the menu from the last segment upwards and throws when the full ancestry chain cannot be matched.

### Exceptions

The package throws `LaravelEnso\Migrator\Exceptions\EnsoStructure` for:

- invalid permission or menu payload types
- missing required attributes
- unresolved parent menu paths

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!
