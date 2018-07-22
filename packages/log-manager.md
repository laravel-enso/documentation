# Log Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28c7bcb0b5d2451783990e0a151f0a44)](https://www.codacy.com/app/laravel-enso/LogManager?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/LogManager&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85624363/shield?branch=master)](https://styleci.io/repos/85624363)
[![License](https://poser.pugx.org/laravel-enso/logmanager/license)](https://packagist.org/packages/laravel-enso/logmanager)
[![Total Downloads](https://poser.pugx.org/laravel-enso/logmanager/downloads)](https://packagist.org/packages/laravel-enso/logmanager)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/logmanager/version)](https://packagist.org/packages/laravel-enso/logmanager)

Log management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

[![Screenshot](https://laravel-enso.github.io/logmanager/screenshots/bulma_004_thumb.png)](https://laravel-enso.github.io/logmanager/screenshots/bulma_004.png)

[![Screenshot](https://laravel-enso.github.io/logmanager/screenshots/bulma_005_thumb.png)](https://laravel-enso.github.io/logmanager/screenshots/bulma_005.png)

## Features

- is a module meant for administrators which offers a streamlined interaction with the application logs
- permits viewing, downloading and clearing the logs for the application
- shows all log files inside the `logs` folder
- can display in-page the contents of the log file, up to certain file size limit, to avoid locking up the browser
- if the files get too large, only the download option is offered

## Publishes

- `php artisan vendor:publish --tag=log-assets` - the VueJS components and pages
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, can be used with the `--force` flag


## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

If at first, when installing [Enso](https://github.com/laravel-enso/Enso) , there are no logs inside the logs folder, nothing will be displayed 
on the log management page. 

Depends on: 
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations