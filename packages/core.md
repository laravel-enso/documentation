# Core

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ba5e8fe6e1dc427590d9bad7721ca037)](https://www.codacy.com/app/laravel-enso/Core?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Core&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85807594/shield?branch=master)](https://styleci.io/repos/85807594)
[![License](https://poser.pugx.org/laravel-enso/core/license)](https://packagist.org/packages/laravel-enso/core)
[![Total Downloads](https://poser.pugx.org/laravel-enso/core/downloads)](https://packagist.org/packages/laravel-enso/core)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/core/version)](https://packagist.org/packages/laravel-enso/core)

Main requirement & dependency aggregator for [Laravel Enso](https://github.com/laravel-enso/Enso).

## Included packages

[Action Logger](https://github.com/laravel-enso/ActionLogger), [Avatar Manager](https://github.com/laravel-enso/AvatarManager) <sup>1</sup>, [Charts](https://github.com/laravel-enso/Charts), [Datatable](https://github.com/laravel-enso/DataTable), [DbSyncMigrations](https://github.com/laravel-enso/DbSyncMigrations), [File Manager](https://github.com/laravel-enso/FileManager), [Form Builder](https://github.com/laravel-enso/FormBuilder), [Helpers](https://github.com/laravel-enso/Helpers), [History Tracker](https://github.com/laravel-enso/HistoryTracker), [Image Transformer](https://github.com/laravel-enso/ImageTransformer) <sup>1</sup>, [Impersonate](https://github.com/laravel-enso/Impersonate), [Localisation](https://github.com/laravel-enso/Localisation), [Log manager](https://github.com/laravel-enso/LogManager), [Menu manager](https://github.com/laravel-enso/MenuManager), [Permission manager](https://github.com/laravel-enso/PermissionManager), [Rememberable](https://github.com/laravel-enso/Rememberable), [Role manager](https://github.com/laravel-enso/RoleManager), [Select](https://github.com/laravel-enso/Select), [Structure manager](https://github.com/laravel-enso/StructureManager), [Trackwho](https://github.com/laravel-enso/TrackWho), [Tutorial Manager](https://github.com/laravel-enso/TutorialManager), [Vue Components](https://github.com/laravel-enso/VueComponents)

## Optional packages

[Notifications](https://github.com/laravel-enso/Notifications), [Documents Manager](https://github.com/laravel-enso/DocumentsManager) <sup>1</sup>, [Comments Manager](https://github.com/laravel-enso/CommentsManager), [Data Import](https://github.com/laravel-enso/DataImport)


## Notes

<sup>1</sup> In order to more efficiently handle images (optimize, resize, crop), these libraries require a few extra PHP plugins and libraries:
- pngquant
- gifsicle
- jpegoptim
- php7.1-gd or php-imagick

On Linux, you may install them with: 
```bash
sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd
```

## Publishes

- `php artisan vendor:publish --tag=core-config` - the configuration files
- `php artisan vendor:publish --tag=core-preferences` - the json preferences file
- `php artisan vendor:publish --tag=core-lang` - the default lang files
- `php artisan vendor:publish --tag=enso-lang` - the assets lang files
- `php artisan vendor:publish --tag=core-storage` - the storage folders
- `php artisan vendor:publish --tag=core-assets` - the assets folders, scss & js
once a newer version is released
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the scss & js assets,
once a newer version is released (ran automatically with --force after every composer install)
- `php artisan vendor:publish --tag=core-mail` - the templates used for notifications
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the templates 
used for notifications

## Commands
- `php artisan enso:clear-preferences` - clears the preferences stored in the DB, 
useful when the preferences structure changes  

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Since v2, while not mandatory, Laravel Enso also includes 
[Notifications](https://github.com/laravel-enso/Notifications), 
[Documents Manager](https://github.com/laravel-enso/DocumentsManager), 
[Comments Manager](https://github.com/laravel-enso/CommentsManager) 
and [Data Import](https://github.com/laravel-enso/DataImport).