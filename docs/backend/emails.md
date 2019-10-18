---
sidebarDepth: 3
---

# Emails

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ff415bb65927479a80d173622d3c11ed)](https://www.codacy.com/app/laravel-enso/emails?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/emails&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/134861936/shield?branch=master)](https://github.styleci.io/repos/134861936)
[![License](https://poser.pugx.org/laravel-enso/emails/license)](https://packagist.org/packages/laravel-enso/emails)
[![Total Downloads](https://poser.pugx.org/laravel-enso/emails/downloads)](https://packagist.org/packages/laravel-enso/emails)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/emails/version)](https://packagist.org/packages/laravel-enso/emails)

The package is an extension for the Laravel Enso environment, designed for sending emails/notifications.

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

The package does not installed by default in Enso.

To install:

* add the package using composer: `composer require laravel-enso/emails`
* add the following line in the `schedule` function in `app\Console\Kernel.php` class:
    ```
        ...
        protected function schedule(Schedule $schedule)
        {
            //other stuff
            $schedule->job(new ScheduleEmails)->everyMinute();
        }
        ...
    ```
    Also make sure that `ScheduleEmails` class is imported.

    **NOTE** *For local schedule testing, you must first run the command:*
    ```
        php artisan schedule:run
    ```
  
* add the following alias in `webackpack.mix.js`
    ```
    .webpackConfig({
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                     //other aliases
                    '@emails': `${__dirname}/vendor/laravel-enso/emails/src/resources/js`,
                },
            },
        })
    ```
* in `resources/js/router.js` file, verify that `RouteMerger` is imported, or import it
    ```
        import RouteMerger from '@core-modules/importers/RouteMerger';
    ```

* make sure `routeImporter` is also imported
    ```
        import routeImporter from '@core-modules/importers/routeImporter';
    ```

* then use `RouteMerger` to import front-end assets using the alias defined in `webpack.mix.js`
    ```
    (new RouteMerger(routes))
        .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
        .add(routeImporter(require.context('@emails/routes', false, /.*\.js$/)));
    ```

* in `resources/js/app.js` import the package's icons

    ```
        import '@emails/icons';
    ```

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

## Features
* friendly display of all stored emails together with their status
* default recipients options such as teams or users
* attachments management
* email scheduling management
* email priority
* includes front-end assets

## Icons
The package uses the following FontAwesome icons:
* `paper-plane`

## Publishes
- `php artisan vendor:publish --tag=emails-config` - the configuration file
- `php artisan vendor:publish --tag=emails-assets` - the front end VueJS/js assets

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
