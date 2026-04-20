---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Commercial

Commercial is a package for the Laravel Enso environment, designed for purchases and sales management.

**Note:** *This is a commercially licensed package and may not be used without written permission*

**Note:** *This package cannot be used outside of the Enso environment and is not included by default 
in the [Laravel Enso Core](https://github.com/laravel-enso/Core) package.*

### Features
* permits creating purchases and purchase returns
* permits creating sales and sale returns
* relies on the inventory package for the inventory handling
* relies on the financials package for the handling of invoices and payments
* various Enums, Exceptions and utility classes
* configuration for the generated orders

### Installation

Note that this package uses commercially available FontAwesome icons. 
These dependencies should be installed and available in your project:
```
"@fortawesome/pro-regular-svg-icons": "^5.10.1",
"@fortawesome/pro-solid-svg-icons": "^5.10.1",
``` 

This package depends on the following laravel-enso modules:

* laravel-enso/products for the products structure
* laravel-enso/inventory for its stock handling API, as well as on some of its Vue components.
* laravel-enso/financials for its document generation API
* laravel-enso/discounts for the discounts computation

If not already installed, please install them and pay attention to each package's requirements and instructions.

* add this package's repository to your `composer.json` config (as well as those of its dependencies listed above) 
* install the package using composer: `composer require laravel-enso/commercial`
* install the front-end ui package using yarn: `yarn add @enso-ui/commercial`
* adds the following alias in `webackpack.mix.js`
```
.webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                 //other aliases
                '@commercial': `${__dirname}/node_modules/@enso-ui/commercial/src/bulma`,
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
    //other routes
    .add(routeImporter(require.context('@commercial/routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@commercial/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create tables, add menus, permissions etc.

* run `php artisan vendor:publish --tag=fiscal-factories` to publish the included factories

## Extending
If necessary:
- local computors
- local product
- local parent models, with relationships pointing to local child models (Sale -> SaleLine, Product)
- bind local models
- add observers for local models
- local seeders must use the local classes that extend the package models

## Test

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/commercial/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 10/4/2019, 3:18:55 PM</div>
</div>
