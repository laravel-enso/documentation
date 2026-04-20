---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Upgrade

[![License](https://poser.pugx.org/laravel-enso/upgrade/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/upgrade/version)](https://packagist.org/packages/laravel-enso/upgrade)
[![Downloads](https://poser.pugx.org/laravel-enso/upgrade/downloads)](https://packagist.org/packages/laravel-enso/upgrade)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/upgrade.svg)](https://github.com/laravel-enso/upgrade/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/upgrade.svg)](https://github.com/laravel-enso/upgrade/pulls)

## Description

Upgrade orchestrates both package-level upgrade routines across the Laravel Enso ecosystem and local project upgrade routines defined inside the host application.

It discovers upgrade classes from the application and from configured vendor packages, sorts them by priority and last modification date, and executes them through a consistent pipeline that supports table migrations, data migrations, post-data migration steps, rollback hooks, manual-only upgrades, and before-migration upgrades.

The package also includes a structure-upgrade adapter for permission and role provisioning, plus a status command that reports upgrade applicability, execution mode, ordering, and migration state.

## Installation

This package is normally installed as part of the Enso core stack.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/upgrade
```

The package registers:

- `enso:upgrade`
- `enso:upgrade:status`

If needed, you can publish the config with:

```bash
php artisan vendor:publish --tag=upgrade-config
```

Default configuration:

```php
return [
    'folders' => ['.'],
    'vendors' => ['laravel-enso'],
];
```

## Features

- Discovers upgrade classes from local folders and configured vendor namespaces.
- Supports package upgrades implemented as PHP classes instead of one-off scripts.
- Sorts upgrades by explicit priority and then by last modified timestamp.
- Supports pre-migration upgrades through the `BeforeMigration` marker interface.
- Supports manual-only upgrades through the `ShouldRunManually` marker interface.
- Supports conditional execution through the `Applicable` contract.
- Executes table, data, and post-data migration steps in a controlled sequence.
- Rolls back table changes when a data or post-data migration fails and the upgrade implements rollback support.
- Wraps structure upgrades into permission and role synchronization workflows.
- Provides a status table for debugging pending, manual, or already-ran upgrades.

## Usage

Run all applicable upgrades:

```bash
php artisan enso:upgrade
```

Run manual upgrades as well:

```bash
php artisan enso:upgrade --manual
```

Run only upgrades meant to execute before the main database migration flow:

```bash
php artisan enso:upgrade --before-migration
```

Inspect the current upgrade inventory and status:

```bash
php artisan enso:upgrade:status
```

A minimal upgrade class can implement `MigratesTable`:

```php
use Illuminate\Support\Facades\Schema;
use LaravelEnso\Upgrade\Contracts\MigratesTable;

class AddStatusColumn implements MigratesTable
{
    public function isMigrated(): bool
    {
        return Schema::hasColumn('orders', 'status');
    }

    public function migrateTable(): void
    {
        Schema::table('orders', function ($table) {
            $table->string('status')->nullable();
        });
    }
}
```

Structure upgrades can declare permissions and optional roles:

```php
use LaravelEnso\Upgrade\Contracts\MigratesStructure;
use LaravelEnso\Upgrade\Traits\StructureMigration;

class OrdersStructureUpgrade implements MigratesStructure
{
    use StructureMigration;

    protected array $permissions = [
        ['name' => 'orders.index', 'description' => 'List orders', 'is_default' => true],
    ];

    protected array $roles = ['admin'];
}
```

::: tip Tip
If an upgrade implements `RollbackTableMigration`, the package will automatically call `rollbackTableMigration()` when the data migration or post-data migration phase throws.
:::

## API

### Commands

- `enso:upgrade {--manual} {--before-migration}`
- `enso:upgrade:status`

### Core Services

- `LaravelEnso\Upgrade\Services\Finder`
- `LaravelEnso\Upgrade\Services\Upgrade`
- `LaravelEnso\Upgrade\Services\Database`
- `LaravelEnso\Upgrade\Services\UpgradeStatus`
- `LaravelEnso\Upgrade\Services\Structure`

### Execution Model

The current execution pipeline is split into three phases:

- `migrateTable()`
- `migrateData()`
- `migratePostDataMigration()`

Only the `migrateData()` phase is wrapped in a database transaction.

`migrateTable()` and `migratePostDataMigration()` run outside the transaction boundary. If either the data migration or the post-data migration phase fails, and the upgrade implements `RollbackTableMigration`, the package calls `rollbackTableMigration()` to undo the table changes explicitly.

### Contracts

Execution contracts:

- `Upgrade`
- `MigratesTable`
- `MigratesData`
- `MigratesPostDataMigration`
- `RollbackTableMigration`
- `MigratesStructure`

Execution modifiers:

- `Applicable`
- `BeforeMigration`
- `Prioritization`
- `ShouldRunManually`

### Helpers

Database inspection helpers:

- `LaravelEnso\Upgrade\Helpers\Table`
- `LaravelEnso\Upgrade\Helpers\Column`

DBAL bridge:

- `LaravelEnso\Upgrade\Services\DBAL\Connection`

### Discovery Rules

The finder scans:

- configured vendor folders from `enso.upgrade.vendors`
- configured local folders from `enso.upgrade.folders`
- `Upgrades` namespaces derived from each package's PSR-4 autoload root

### Structure Upgrades

`MigratesStructure` upgrades are wrapped by `LaravelEnso\Upgrade\Services\Structure`, which:

- creates missing permissions
- assigns them to the default role
- assigns non-default permissions only to explicitly listed roles
- can run an additional post-data migration phase

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/roles`](https://docs.laravel-enso.com/backend/roles.html) [↗](https://github.com/laravel-enso/roles)

External dependencies:

- [`doctrine/dbal`](https://github.com/doctrine/dbal) [↗](https://github.com/doctrine/dbal)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/upgrade/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:26:03 PM</div>
</div>
