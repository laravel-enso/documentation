---
sidebarDepth: 3
---

# Currencies

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7c8421322ab94fc2a612bcf56bc0f294)](https://www.codacy.com/app/laravel-enso/currencies?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/currencies&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/194647672/shield?branch=master)](https://github.styleci.io/repos/194647672)
[![License](https://poser.pugx.org/laravel-enso/currencies/license)](https://packagist.org/packages/laravel-enso/currencies)
[![Total Downloads](https://poser.pugx.org/laravel-enso/currencies/downloads)](https://packagist.org/packages/laravel-enso/currencies)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/currencies/version)](https://packagist.org/packages/laravel-enso/currencies)

Currencies is an extension of the Laravel Enso environment, 
designed for management of currencies and exchange rates.

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

* install the package using composer: `composer require laravel-enso/currencies`
* add the following alias in `webackpack.mix.js`
    ```js
    .webpackConfig({
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                     //other aliases
                    '@currencies': `${__dirname}/vendor/laravel-enso/currencies/src/resources/js`,
                },
            },
        })
    ```
* in `resources/js/router.js` file, verify that `RouteMerger` is imported, or import it

    `import RouteMerger from '@core-modules/importers/RouteMerger';`

* make sure `routeImporter` is also imported

    `import routeImporter from '@core-modules/importers/routeImporter';`

* then use `RouteMerger` to import front-end assets using the alias defined in `webpack.mix.js`

    ```js
    (new RouteMerger(routes))
        .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
        .add(routeImporter(require.context('@currencies/routes', false, /.*\.js$/)));
    ```

* in `resources/js/app.js` import the package's icons

`import '@currencies/icons'`

* make sure `hot module replacement` is not active, and run `yarn dev` or `npm run dev`

### Icons
The package uses the following icons:
* `coins`
* `bar-chart`

## Features
- can manage currencies and exchange rates
- a default currency has to be set 
- exchange rates can be input for a given day
- has an included currencies seeder which can be published and further customized

## Publishes

- `php artisan vendor:publish --tag=currency-seeder` - the currency seeder

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
