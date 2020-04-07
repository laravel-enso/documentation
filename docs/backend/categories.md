---
sidebarDepth: 3
---

# Categories

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa6c0917f8c6425f87eb94c01d84b2f8)](https://www.codacy.com/app/laravel-enso/categories?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/categories&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85484767/shield?branch=master)](https://github.styleci.io/repos/85484767)
[![License](https://poser.pugx.org/laravel-enso/categories/license)](https://packagist.org/packages/laravel-enso/categories)
[![Total Downloads](https://poser.pugx.org/laravel-enso/categories/downloads)](https://packagist.org/packages/laravel-enso/categories)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/categories/version)](https://packagist.org/packages/laravel-enso/categories)

Categories package for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package cannot work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

* install the package using composer: `composer require laravel-enso/categories`
* install the front-end ui package using yarn: `yarn add @enso-ui/categories`
* adds the following alias in `client/vue.config.js`
```
configureWebpack: {
    resolve: {
        alias: {
            //other aliases
            '@categories': `${__dirname}/node_modules/@enso-ui/categories/src/bulma`,
        },
    },
```
* in `client/js/router.js` file, verify that `RouteMerger` is imported, or import it

`import RouteMerger from '@core-modules/importers/RouteMerger';`

* make sure `routeImporter` is also imported

`import routeImporter from '@core-modules/importers/routeImporter';`

* then use `RouteMerger` to import front-end assets using the alias defined in `vue.config.js`

```
(new RouteMerger(routes))
    //other routes
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('@categories/routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@categories/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create table, add menu, permissions etc.

## Features

- features a core categories functionality with a model, migrations, 
routes, controllers, resources, index table, etc 
- provides CRUD functionality for the `Category` model
- defines the relationships with a parent category as well as multiple child categories
- the Enso `Company` model is used for the manufacturer, 
suppliers and default supplier relationships; 
`dynamic methods` are added on the `Company` for the reverse relationships.
via the `EnumServiceProvider`
- a `CategoryFactory` is included and can be published

## Usage

The package is meant to be installed on an Enso project and customized as required 
(or used as it is if that is enough). 

Note that this package is a dependency of the [products](https://docs.laravel-enso.com/backend/products.html) Enso package.

## Publishes

- `php artisan vendor:publish --tag=categories-factories` - the included category factory,
   
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
