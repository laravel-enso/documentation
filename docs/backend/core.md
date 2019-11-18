---
sidebarDepth: 3
---

# Core

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ba5e8fe6e1dc427590d9bad7721ca037)](https://www.codacy.com/app/laravel-enso/core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/core&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85807594/shield?branch=master)](https://github.styleci.io/repos/85807594)
[![License](https://poser.pugx.org/laravel-enso/core/license)](https://packagist.org/packages/laravel-enso/core)
[![Total Downloads](https://poser.pugx.org/laravel-enso/core/downloads)](https://packagist.org/packages/laravel-enso/core)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/core/version)](https://packagist.org/packages/laravel-enso/core)

Main requirement & dependency aggregator for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

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
- easy to use, searchable, taggable videos support
 
## Optional Features
- customizable, extensible, generic addresses manager plugin
- polymorphic, notification integrated comments functionality
- template based, validation capable, xlsx data import functionality
- intuitive discussions module
- polymorphic, document upload and management functionality

- core teams structure  

## Included packages

[Action Logger](https://github.com/laravel-enso/action-logger), 
[Activity Log](https://github.com/laravel-enso/activity-log), 
[Avatars](https://github.com/laravel-enso/avatars) <sup>1</sup>, 
[Charts](https://github.com/laravel-enso/charts), 
[Companies](https://github.com/laravel-enso/companies),
[Data Export](https://github.com/laravel-enso/data-export),
[Data Import](https://github.com/laravel-enso/data-import), 
[Files](https://github.com/laravel-enso/files), 
[Forms](https://github.com/laravel-enso/forms), 
[Helpers](https://github.com/laravel-enso/helpers), 
[History Tracker](https://github.com/laravel-enso/history-tracker),
[How To](https://github.com/laravel-enso/how-to),
[Impersonate](https://github.com/laravel-enso/impersonate), 
[IO](https://github.com/laravel-enso/IO), 
[Localisation](https://github.com/laravel-enso/localisation), 
[Logs](https://github.com/laravel-enso/logs), 
[Menus](https://github.com/laravel-enso/menus),
[Multi tenancy](https://github.com/laravel-enso/Multitenancy),
[Notifications](https://github.com/laravel-enso/Notifications), 
[People](https://github.com/laravel-enso/People), 
[Permissions](https://github.com/laravel-enso/permissions), 
[Rememberable](https://github.com/laravel-enso/Rememberable), 
[Roles](https://github.com/laravel-enso/roles), 
[Searchable](https://github.com/laravel-enso/Searchable), 
[Select](https://github.com/laravel-enso/Select), 
[CLI](https://github.com/laravel-enso/cli), 
[Teams](https://github.com/laravel-enso/Teams), 
[TrackWho](https://github.com/laravel-enso/track-who), 
[Tutorials](https://github.com/laravel-enso/tutorials), 
[Versioning](https://github.com/laravel-enso/versioning),
[Tables](https://github.com/laravel-enso/tables), 

## Optional packages

[Addresses](https://github.com/laravel-enso/addresses), 
[Comments ](https://github.com/laravel-enso/comments),
[Discussions](https://github.com/laravel-enso/discussions), 
[Documents ](https://github.com/laravel-enso/documents) <sup>1</sup>, 

<sup>1</sup> In order to more efficiently handle images (optimize, resize, crop), 
a few extra PHP plugins and libraries are recommended:
- pngquant
- gifsicle
- jpegoptim
- php7.1-gd or php-imagick

On Linux, you may install them with: 
```bash
sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd
```

## Usage

### Under the hood

- the `Role` model contains the `AdminId` and `SupervisorId` constants that determine who 
the administrator and supervisor roles are. Note that `Role` model is part of the 
[Roles](https://github.com/laravel-enso/roles) package but is mentioned here for quick reference  
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

#### Configuration

The package comes with several configuration files, the most important ones presented below. Note that 
if using Enso, these files are published in the local project configuration folder and, if necessary,
should be customized locally.

#### General configuration

Various configuration options are available in the `config` file 
on the `enso.config` configuration 'path', with the following keys:
- `version`, string, current Enso version. Should be kept up to date when performing Enso updates 
    on new releases
- `ownerCompanyId`, integer, default `1`, the id of the Application owner/client's Company
- `showQuote`, boolean, default `true`, show the quote page after login
- `stateBuilder`, string, default `LocalState::class`, the fully qualified class path for the local 
    application state builder
- `defaultRole`, string, default `'admin'`, the name of the default role which 
    is used for structure migrations
- `dateFormat`, string, default `'d-m-Y'`, the format in which dates are expected to be received from the 
    front-end     
- `dateTimeFormat`, string, default `'d-m-Y H:i:s'`, the format in which date time data is expected 
    to be received from the front-end
- `facebook`, string, should be the link to the application owners facebook page    
- `googleplus`, string, should be the link to the application owners google page    
- `twitter`, string, should be the link to the application owners twitter page
- `ravenKey`, string, should be the API key used for the Raven error reporting functionality
- `cacheLifetime`, numeric, default is `60`, is the cache lifetime
- `ensoApiToken`, string, default `null`, is the token that needs to be provided is using the 
    API monitoring module
- `extendedDocumentTitle`, boolean, default `false`, setting that shows documents with an extended title
    vs. using a shortened version

Note that where available, it's best to use the `.env` configuration file for customizing
the options.
    
#### Application owner / Client ID

The `LaravelEnso\Companies\app\Models\Company` model comes with an `owner()` method that is
meant to be used to return a Company instance representing the application owner.

Since it makes sense that the `Company` model from the [Companies](https://github.com/laravel-enso/companies) package 
may be extended either in other packages or locally, the method's resulted class is resolved from the container.

Thus, if required, you can bind your desired/local implementation to the `LaravelEnso\Companies\app\Models\Company` 
class in the service provider. You may set the application owner's company id within the main Enso configuration file
    
#### Themes configuration
        
The themes `enso.themes` configuration files contains mappings for the themes used within Enso.

#### Password configuration

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

### Updating the app while in production

When the application is in production, you'll most likely version and lazy load the
front-end resource so as to reduce the initial load time for the users.

When deploying a new version, the users will still be using the old previous version
until they refresh their browser page. 

In cases when they haven't got all the assets loaded and they try to load a chunk 
while using the previous application version, they may encounter an error.

To avoid such a scenario, all logged in users can be notified using push notifications
that they should save their work and reload the page.  

In order for this notification to be sent, within your deployment flow, you should use 
the `php artisan enso:announce-app-update` artisan command to send the notification.

## Publishes

- `php artisan vendor:publish --tag=core-storage` - the storage folder structure
- `php artisan vendor:publish --tag=core-images` - the images folder structure
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
- `php artisan vendor:publish --tag=enso-email` - a common alias for when wanting to update the templates 
used for email

## Commands

- `php artisan enso:preferences:clear` - clears the preferences stored in the DB, 
useful when the preferences structure changes  
- `php artisan enso:preferences:update-global` - adds new global preferences keys for users
- `php artisan enso:upgrade` - performs new upgrades from the older previous to the latest release
- `php artisan enso:announce-app-update` - send a notification to the logged in users that the 
application has been updated and that they should refresh their pages

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
