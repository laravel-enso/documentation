---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Cli

[![License](https://poser.pugx.org/laravel-enso/cli/license)](https://github.com/laravel-enso/cli/blob/master/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/cli/version)](https://packagist.org/packages/laravel-enso/cli)
[![Downloads](https://poser.pugx.org/laravel-enso/cli/downloads)](https://packagist.org/packages/laravel-enso/cli)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/cli/blob/master/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/cli.svg)](https://github.com/laravel-enso/cli/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/cli.svg)](https://github.com/laravel-enso/cli/pulls)

## Description

Cli is the interactive scaffolding tool for Laravel Enso resources and packages.

The package exposes the `enso:cli` command, keeps a restorable configuration session in cache, validates the configured model and menu structure before generation, and writes the backend, frontend, and package boilerplate needed for standard Enso CRUD modules.

It is intended to accelerate repetitive Enso structure work, not to replace manual refinement after the initial scaffold is created.

## Installation

Install the package:

```bash
composer require laravel-enso/cli
```

If you want to publish the configuration presets used by the generator:

```bash
php artisan vendor:publish --tag=cli-config
```

The package automatically:

- registers the `enso:cli` Artisan command
- merges the structure presets from `config/enso/structures`
- writes generated files into either the application tree or a new Enso package tree, depending on the selected options

## Features

- Interactive command flow for configuring model, permission group, permissions, menu, files, and package metadata.
- Validation for namespaced model paths, menu routing consistency, and parent-menu selection before generation.
- Cached session restore so incomplete scaffolding sessions can be resumed.
- Writers for models, migrations, form builders and templates, table builders and templates, CRUD routes, Vue pages, and structure migrations.
- Package scaffolding support, including resources, optional config, and optional service providers.

## Usage

Start the interactive generator:

```bash
php artisan enso:cli
```

The command lets you configure these sections before generation:

- `Model`
- `Permission Group`
- `Permissions`
- `Menu`
- `Files`
- `Package`

When generation succeeds, the package clears the cached session and, when needed, prints the API route include that must be added to the host application's `routes/api.php`.

Validation can be toggled off temporarily from the command menu, but the intended workflow is to keep it enabled and fix the reported configuration errors before generating files.

## API

### Artisan command

- `enso:cli`

### Published configuration

Published under `config/enso/structures`:

- `model.php`
- `menu.php`
- `permissions.php`
- `package.php`
- `params.php`
- `files.php`
- `permissionGroup.php`

### Generated artifacts

Depending on the selected file set, the generator can write:

- Eloquent model classes
- create-table and structure migrations
- form builders, templates, and request validators
- table builders and templates
- CRUD API controllers and route stubs
- frontend view pages and route files
- package resources, config, and providers

### Validation rules

Built-in validation covers:

- namespaced model syntax using forward slashes
- menu route alignment with permission routes
- regular menu items requiring a route
- parent menu existence and ambiguity checks
- parent-menu route restrictions when `has_children` is enabled

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/menus`](https://docs.laravel-enso.com/backend/menus.html) [↗](https://github.com/laravel-enso/menus)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/cli/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 3:31:55 PM</div>
</div>
