# Multitenancy

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-enso/ActionLogger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/ActionLogger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85554059/shield?branch=master)](https://styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-enso/multitenancy/license)](https://packagist.org/packages/laravel-enso/multitenancy)
[![Total Downloads](https://poser.pugx.org/laravel-enso/multitenancy/downloads)](https://packagist.org/packages/laravel-enso/multitenancy)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/multitenancy/version)](https://packagist.org/packages/laravel-enso/multitenancy)

Multitenancy dependency for [Laravel Enso](https://laravel-enso.com).

## Features
- contains a series of console commands to help with various operations
- comes with a Tenant helper class that can set the active tenant
- includes a middleware that should be selectively used on routes as needed, 
which sets the active (acting) tenant
- provides a set of Jobs that can be used to create/setup/cleanup the tenant's database structure
- also includes multiple traits which can be included in your models and classes, as required 

## Conventions

- the name for a tenant's database/schema is going to be the tenant database prefix you set in the .env 
(the `DB_TENANT_DATABASE` key) concatenated with the tenant's (company) ID.

    If you've setup the `.env` as per the Enso example, the prefix will be `tenant` otherwise, the default as 
    per the config, is going to be `forge`. 

- the migrations for the tenant should be placed in the `/database/migrations/tenant` sub-folder. 

    They will not automatically run during a `php artisan migrate` command, 
    but should be run with the `--path` argument or by using the respective command or job (see below)

## Flow and Overview

The general concept on users, companies and tenants is that users belong to companies and a company 
may be a tenant.

The designed flow for this package in a multitenant scenario is as follows:
- the system (core) application is setup
- when a tenant is registered, jobs will be dispatched that create a tenant schema for it and then
run migrations which will setup the tables
- users are then registered and linked to their respective tenant (company).
- after a user logs in through the system application, he can then access the tenant part of the application, 
using routes that have the `Multitenancy` middleware. The middleware will ensure the data that is served is 
taken from the correct tenant database.

## Under the hood

### Classes

The `Tenant` class has a `set($company)` method which can be used to set that tenant's company 
database.

::: tip
The class is used in the `Multitenancy` middleware .
:::

### Commands

#### php artisan enso:tenant:create-database {tenantId}

The command creates the database/schema for the given tenant ID.

If the given argument is `all` instead of an ID, it will create databases for ALL the tenants.

::: tip
The class uses the `CreateDatabaseJob` job to perform the actual database creation
:::

#### php artisan enso:tenant:drop-database {tenantId}

The command drops the database/schema for the given tenant ID.

If the given argument is `all` instead of an ID, it will drop the databases for ALL the tenants.

::: tip
The class uses the `DropDatabaseJob` job to perform the actual database drop.
:::

#### php artisan enso:tenant:drop-tables {tenantId}

The command drops the tenant's tables for the given tenant ID.

If the given argument is `all` instead of an ID, it will drop the tables for ALL the tenants.

As opposed to the previous command which drops the entire schema, this command will drop all tables 
but preserve the schema.

::: tip
The class uses the `DropTablesJob` job to perform the actual tables drop.
:::

#### php artisan enso:tenant:migrate

The command will perform the migrations for each tenant.

::: tip
The class uses the `MigrateJob` job to perform the actual migration.
:::

### Middleware

#### Multitenancy

The middleware is meant to be used selectively, only on the routes where it makes sense,
to dynamically set the user's tenant connection.

### Jobs

#### CreateDatabaseJob

The job will create the database/schema for a given tenant. Depending on how you've configured your `.env` file,
the name could look something like `tenant23`, where 23 is the tenant company id. 

The job will run on the `light` queue. 

#### DropDatabaseJob

The job will drop the database/schema for a given tenant.  

The job will run on the `light` queue. 

#### DropTablesJob

The job will drop the tables of the given tenant. As opposed to the `DropDatabaseJob`, this job will not
drop the database, only the tables.

The job will run on the `light` queue. 

#### MigrateJob

The job will perform the migrations for the given tenant.

The job will run on the `light` queue.

### Traits

#### SystemConnection 

The trait is used on all models that belong to the 'system' (core) connection, in order to dynamically 
set the connection for the model, depending on the environment.

If the environment is `testing` then the `sqlite` connection is used, otherwise `system` is used.

#### SystemResolver 

The trait can be used in any class as it provides 2 helper functions:
- `systemDatabase()`, will return the system database name
- `systemTable($table)`, will return the full name for given table, such as `system.states`.

#### TenantConnection 

The trait is used on all models that belong to the 'tenant' connection, in order to dynamically 
set the connection for the model, depending on the environment.

If the environment is `testing` then the `sqlite` connection is used, otherwise `tenant` is used.

#### TenantResolver 

The trait can be used in any class as it provides 2 helper functions:
- `tenantDatabase()`, will return the tenant database name
- `tenantTable($table)`, will return the full name for given table, such as `tenant21.products`.
