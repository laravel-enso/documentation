---
sidebarDepth: 3
---

# Calendar

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c8421322ab94fc2a612bcf56bc0f294)](https://www.codacy.com/app/laravel-enso/calendar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/calendar&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/194647672/shield?branch=master)](https://github.styleci.io/repos/194647672)
[![License](https://poser.pugx.org/laravel-enso/calendar/license)](https://packagist.org/packages/laravel-enso/calendar)
[![Total Downloads](https://poser.pugx.org/laravel-enso/calendar/downloads)](https://packagist.org/packages/laravel-enso/calendar)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/calendar/version)](https://packagist.org/packages/laravel-enso/calendar)

Calendar is a Laravel Enso package designed for the management of 
calendars and calendar events

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

* install the back-end API package using composer: `composer require laravel-enso/calendar`
* install the front-end resources: `yarn add @enso-ui/calendar`
* add a calendar alias in `webpack.mix.js` under the `alias` object:
    ```js
    '@calendar': `${__dirname}/node_modules/@enso-ui/calendar/src/bulma`,
    ``` 
* in `resources/js/router.js` file, verify that `RouteMerger` is imported, or import it

    `import RouteMerger from '@core-modules/importers/RouteMerger';`

* make sure `routeImporter` is also imported

    `import routeImporter from '@core-modules/importers/routeImporter';`

* then use `RouteMerger` to import front-end assets 
using the alias defined in `webpack.mix.js`

    ```js
    (new RouteMerger(routes))
        .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
        .add(routeImporter(require.context('@calendar/routes', false, /.*\.js$/)));
    ```

* in `resources/js/app.js` import the package's icons

`import '@calendar/icons'`

* make sure `hot module replacement` is not active, and run `yarn dev` or `npm run dev`

### Icons
The package uses the following icons:
* `faCalendarAlt`

## Features
- allows you to add, edit and remove calendar and calendar events
- normal users can only make changes to their own calendars,
while administrators and supervisors can edit all
- will be able to be add recurring events and even events spanning multiple days 
- comes with an included calendar seeder which can be published and further customized
- beautiful & functional interface built on top of [vue-cal](https://antoniandre.github.io/vue-cal/)
- can also use custom (pseudo) calendars, so you can represent within the calendar
events generated from other modules of the application 

## Usage

### Configuration
The configuration file contains 2 sections:
- `calendars`
- `calendarClasses`

## Commands

- `php artisan enso:calendar:notify` - sends the calendar event reminder notifications

::: tip
The package is also using the command internally, as it calls it every minute to send any 
pending reminders. 
:::


## Publishes

- `php artisan vendor:publish --tag=calendar-config` - the configuration
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=calendar-provider` - a default calendar provider
- `php artisan vendor:publish --tag=calendar-factory` - a calendar factory
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories 
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=calendar-email-template` - the email template,
 so you can customize it
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the email 
templates once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
