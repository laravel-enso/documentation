---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# financials

###  Financials

Financials is a package for the Laravel Enso environment, designed for the management of invoices & payments.

**Note:** *This is a commercially licensed package and may not be used without written permission*

**Note:** *This package cannot be used outside of the Enso environment and is not included by default 
in the [Laravel Enso Core](https://github.com/laravel-enso/Core) package.*

### Features
* crud operations for invoices & payments
* contracts for various input classes
* comes with a set of generic computors for computable lines
* includes generator mechanisms for client invoices & payments
* various Enums, Exceptions and utility classes
* configuration for the generated invoices
* tests

### Installation

Note that this package uses commercially available FontAwesome icons. 
These dependencies should be installed and available in your project:
```
"@fortawesome/pro-regular-svg-icons": "^5.10.1",
"@fortawesome/pro-solid-svg-icons": "^5.10.1",
``` 


* add the package repository to your `composer.json` config 
* install the package using composer: `composer require laravel-enso/financials`
* install the front-end ui package using yarn: `yarn add @enso-ui/financials`
* adds the following alias in `webackpack.mix.js`
```
.webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                 //other aliases
                '@financials': `${__dirname}/node_modules/@enso-ui/financials/src/bulma`,
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
    .add(routeImporter(require.context('@financials/routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@financials/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create tables, add menus, permissions etc.

* run `php artisan vendor:publish --tag=fiscal-factories` to publish the included factories

## Configuration

- make sure you publish the configuration and set the options as required
```
php artisan vendor:publish --tag=fiscal-config
```
- pay attention that the application's owner company should as much information filled 
as possible, as this will be used for the invoicing process.

## License

[CC-BY-NC-ND-4.0](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/financials/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 10/3/2019, 2:30:16 PM</div>
</div>
