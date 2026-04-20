---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Currencies

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/231c10ed999f4dfd98d9def61c1e6f7e)](https://www.codacy.com/gh/laravel-enso/currencies?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/currencies&amp;utm_campaign=Badge_Grade) 
[![StyleCI](https://github.styleci.io/repos/194647672/shield?branch=master)](https://github.styleci.io/repos/194647672)
[![License](https://poser.pugx.org/laravel-enso/currencies/license)](https://packagist.org/packages/laravel-enso/currencies)
[![Total Downloads](https://poser.pugx.org/laravel-enso/currencies/downloads)](https://packagist.org/packages/laravel-enso/currencies)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/currencies/version)](https://packagist.org/packages/laravel-enso/currencies)

Currencies is an extension of the Laravel Enso enviroment, 
designed for management of currencies and exchange rates.

**Note:** *The package cannot be used outside of Enso enviroment and is not included in [Laravel Enso Core](https://github.com/laravel-enso/Core) packages.*

### Features
- handles CRUD operations for currencies and exchange rates
- manages the default currency for your project 
- exchange rates can be input for a given day
- comes with an included currencies seeder which can be published and further customized
- includes front-end assets

### Instalation
* install the package using composer: `composer require laravel-enso/currencies`
* adds the following alias in `webackpack.mix.js`
```
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

```
(new RouteMerger(routes))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('@currencies/routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@currencies/icons'`

* make sure `hot module replacement` is not active, and run `yarn dev` or `npm run dev`

### Publishes
* you can publish the currency seeder and customize it to your liking

`php artisan vendor:publish --tag=currency-seeder`

### Icons
The package uses the following icons:
* `coins`
* `bar-chart`

### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/currencies/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 12/19/2023, 2:40:08 PM</div>
</div>
