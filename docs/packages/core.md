# Core

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ba5e8fe6e1dc427590d9bad7721ca037)](https://www.codacy.com/app/laravel-enso/Core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Core&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85807594/shield?branch=master)](https://styleci.io/repos/85807594)
[![License](https://poser.pugx.org/laravel-enso/core/license)](https://packagist.org/packages/laravel-enso/core)
[![Total Downloads](https://poser.pugx.org/laravel-enso/core/downloads)](https://packagist.org/packages/laravel-enso/core)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/core/version)](https://packagist.org/packages/laravel-enso/core)

Main requirement & dependency aggregator for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Features
- core users, roles, permissions structure
- project wide, middleware based, automatic logging of all user actions
- configurable, selective, model event based logging of CRUD (& custom) actions
- integrated avatar functionality with custom & automatic avatar generation
- beautiful charts generation support
- extensible, reusable file management core functionality with sharing capabilities
- powerful, template based form builder with out of the box support for most use cases
and the option for the customization of any input
- model event based history tracking
- middleware based user impersonation support for testing & troubleshooting
- localisation & i18n support
- Laravel log management functionality & interface
- application menus management
- user email & push notifications
- IO operations progress monitoring for data import and export
- extensible, core people functionality
- integrated permissions management
- easy to use caching support
- user roles functionality with friendly interface for role configuration
- customizable, project wide search support
- template based CLI interface for the painless creation of the most needed file structures
- trait based, event driven user tracking for any model state change
- easy to use tutorial functionality for quick human operator training
- model event driven, out of the box versioning support
- aspect consistent ecosystem of front-end VueJS reusable components
- highly powerful, full search, customizable, template based, huge data-set capable, 
front-end back-end integrated data table functionality with support for the export of the entire result-set 
and a great many other features
- customizable, extensible, companies structure
- template based, validation capable, asynchronous capable xlsx data import functionality
 featuring support for big files (the number of rows is limited only by the xlsx format)
 
## Optional Features
- customizable, extensible, generic addresses manager plugin
- polymorphic, notification integrated comments functionality
- customizable, extensible, companies structure
- template based, validation capable, xlsx data import functionality
- intuitive discussions module
- polymorphic, document upload and management functionality
- easy to use, searchable, taggable videos support
- core teams structure  

## Included packages

[Action Logger](https://github.com/laravel-enso/ActionLogger), 
[Activity Log](https://github.com/laravel-enso/ActivityLog), 
[Avatar Manager](https://github.com/laravel-enso/AvatarManager) <sup>1</sup>, 
[Charts](https://github.com/laravel-enso/Charts), 
[Companies](https://github.com/laravel-enso/Companies),
[Data Export](https://github.com/laravel-enso/DataExport),
[Data Import](https://github.com/laravel-enso/DataImport), 
[File Manager](https://github.com/laravel-enso/FileManager), 
[Form Builder](https://github.com/laravel-enso/FormBuilder), 
[Helpers](https://github.com/laravel-enso/Helpers), 
[History Tracker](https://github.com/laravel-enso/HistoryTracker),
[Impersonate](https://github.com/laravel-enso/Impersonate), 
[Localisation](https://github.com/laravel-enso/Localisation), 
[Log Manager](https://github.com/laravel-enso/LogManager), 
[Menu Manager](https://github.com/laravel-enso/MenuManager),
[Notifications](https://github.com/laravel-enso/Notifications), 
[People](https://github.com/laravel-enso/People), 
[Permission Manager](https://github.com/laravel-enso/PermissionManager), 
[Rememberable](https://github.com/laravel-enso/Rememberable), 
[Role Manager](https://github.com/laravel-enso/RoleManager), 
[Searchable](https://github.com/laravel-enso/Searchable), 
[Select](https://github.com/laravel-enso/Select), 
[Structure Manager](https://github.com/laravel-enso/StructureManager), 
[TrackWho](https://github.com/laravel-enso/TrackWho), 
[Tutorial Manager](https://github.com/laravel-enso/TutorialManager), 
[Versioning](https://github.com/laravel-enso/Versioning), 
[Vue Components](https://github.com/laravel-enso/VueComponents), 
[VueDataTable](https://github.com/laravel-enso/VueDataTable), 

## Optional packages

[Addresses Manager](https://github.com/laravel-enso/AddressesManager), 
[Comments Manager](https://github.com/laravel-enso/CommentsManager),
[Discussions](https://github.com/laravel-enso/Discussions), 
[Documents Manager](https://github.com/laravel-enso/DocumentsManager) <sup>1</sup>, 
[HowTo Videos](https://github.com/laravel-enso/HowToVideos)
[Teams](https://github.com/laravel-enso/Teams)


## Notes

<sup>1</sup> In order to more efficiently handle images (optimize, resize, crop), 
these libraries require a few extra PHP plugins and libraries:
- pngquant
- gifsicle
- jpegoptim
- php7.1-gd or php-imagick

On Linux, you may install them with: 
```bash
sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd
```

## Under the hood
- the `Role` model contains the `AdminId` and `SupervisorId` constants that determine who 
the administrator and supervisor roles are. Note that `Role` model is part of the 
[RoleManager](https://github.com/laravel-enso/RoleManager) package but is mentioned here for quick reference  
- the `UserGroup` model contains the `AdminGroupId` constant that is used to determine which is the Administrator
user group
- the `User` model provides several helper methods for administrative related checks:
    * `isAdmin()` - a user is admin if it has the Admin role
    * `isSupervisor()` - a user is supervisor if it has the Supervisor role
    * `belongsToAdminGroup()` - if the user belongs to the Administrator user group
    * `isPerson(Person $person)` - checks if this user belongs to the $person argument

### Login attempts 
The `config.enso.auth.maxLoginAttempts` configuration option lets you customize how many login attempts 
the user may perform before he is given a time-out. 

Once the user reaches the set number of login attempts, he must wait 60 seconds before he may try to 
login again.

### Password configuration
Since the 2.15.2 release, Enso supports additional, password related, configuration options.
The default values are available on the `config.enso.auth.password` configuration 'path' 
(the `config/enso/auth.php` file) and local values can be set in your `.env` file. 

These options are enforced via request validation each time the user sets or resets his password. 

 - `lifetime` - the password lifetime in DAYS, default `0`. 
 If using the default value (0), this limitation is disabled and the password never expires.
 
 ::: tip
 If a password lifetime is set, beginning with the third day before the password expires, 
 the user will be notified on login that he should update his password.
 :::
 
 ::: tip
 If the password is not updated in due time and it expires, the user will be denied access and upon the
  login attempt will be asked to update his password via the reset mechanism. 
 ::: 
 
 - `minLength` - the minimum password length, default `6`
 - `minUpperCase` - the minimum number of uppercase characters that the password must contain
 - `minNumeric` - the minimum number of numeric characters that must be included in the password
 - `minSpecial` - the minimum number of special characters required for the password. 
 All non alphanumeric characters, including spaces, are considered special characters.


Please note that regardless of the above configuration, the user can not 'update' his password by 
re-using his current password.

## Publishes

- `php artisan vendor:publish --tag=core-storage` - the storage folder structure
- `php artisan vendor:publish --tag=core-assets` - the assets folders, scss & js
- `php artisan vendor:publish --tag=core-config` - the configuration files
- `php artisan vendor:publish --tag=core-preferences` - the json preferences file
- `php artisan vendor:publish --tag=core-factories` - the factories for the User and the UserGroup
- `php artisan vendor:publish --tag=core-seeders` - the seeders for the User and the UserGroup
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released
- `php artisan vendor:publish --tag=enso-preferences` - a common alias for when wanting to update the preferences,
once a newer version is released
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories,
once a newer version is released
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders,
once a newer version is released
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the scss & js assets,
once a newer version is released (ran automatically with --force after every composer install)
- `php artisan vendor:publish --tag=enso-mail-assets` - a common alias for when wanting to update the templates 
used for email

## Commands
- `php artisan enso:clear-preferences` - clears the preferences stored in the DB, 
useful when the preferences structure changes  
- `php artisan enso:update-global` - adds new global preferences keys for users

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Since v2, while not mandatory, Laravel Enso also includes 
[Notifications](https://github.com/laravel-enso/Notifications), 
[Documents Manager](https://github.com/laravel-enso/DocumentsManager), 
[Comments Manager](https://github.com/laravel-enso/CommentsManager) 
and [Data Import](https://github.com/laravel-enso/DataImport).
