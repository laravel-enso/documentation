---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# discounts

###  Discounts

Discounts is a package for the Laravel Enso environment, designed for the management of commercial discounts.

**Note:** *This is a commercially licensed package and may not be used without written permission*

**Note:** *This package cannot be used outside of the Enso environment and is not included by default 
in the [Laravel Enso Core](https://github.com/laravel-enso/Core) package.*

### Features
* crud operations for discounts
* tables & structure generators

### Installation

Note that this package uses commercially available FontAwesome icons. 
These dependencies should be installed and available in your project:
```
"@fortawesome/pro-regular-svg-icons": "^5.10.1",
"@fortawesome/pro-solid-svg-icons": "^5.10.1",
``` 

* add the package repository to your `composer.json` config 
* install the package using composer: `composer require laravel-enso/discounts`
* install the front-end ui package using yarn: `yarn add @enso-ui/discounts`
* adds the following alias in `webackpack.mix.js`
```
.webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                 //other aliases
                '@discounts': `${__dirname}/node_modules/@enso-ui/discounts/src/bulma`,
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
    .add(routeImporter(require.context('@discounts/routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@discounts/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create tables, add menus, permissions etc.

## License

[CC-BY-NC-ND-4.0](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/discounts/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 10/14/2019, 1:09:35 PM</div>
</div>
