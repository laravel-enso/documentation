---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Webshop

This is a **work in progress** of the Laravel Enso Webshop Package redesign.

## Current issues, workarounds and notes on Installation, Configuration & Usage.

### Cannot install Composer packages to Webshop package
We need to install the following Composer packages:
* inertiajs/inertia-laravel
* tightenco/ziggy
 
Running `composer require inertiajs/inertia-laravel`, for example, results in the following errors:

```
Your requirements could not be resolved to an installable set of packages.

Problem 1
- Root composer.json requires laravel-enso/eav, it could not be found in any version, there may be a typo in the package name.
Problem 2
- Root composer.json requires laravel-enso/product-eav, it could not be found in any version, there may be a typo in the package name.
Problem 3
- Root composer.json requires laravel-enso/sale-channels, it could not be found in any version, there may be a typo in the package name.
Problem 4
- laravel-enso/categories[3.1.0, ..., 3.2.0] require laravel-enso/core ^9.0 -> found laravel-enso/core[9.0.0, ..., 9.0.4] but it conflicts with your root composer.json require (^10.0).
- laravel-enso/categories[3.0.0, ..., 3.1.3] require laravel-enso/core ^8.0 -> found laravel-enso/core[8.0.0, ..., 8.0.9] but it conflicts with your root composer.json require (^10.0).
- laravel-enso/categories[3.3.0, ..., 3.4.0] require laravel-enso/helpers ^2.0 -> found laravel-enso/helpers[2.0.0, ..., 2.9.1] but it conflicts with your root composer.json require (^3.0).
- Root composer.json requires laravel-enso/categories ^3.0 -> satisfiable by laravel-enso/categories[3.0.0, ..., 3.4.0].
```

We have managed to install Inertia and `use` it from the main website vendor folder, but it really should be a dependency of the Webshop package.

### Installing Ziggy as front-end router
Inertia recommends using the `tightenco/ziggy` composer package. It's main function is to expose the Laravel routes defined inside the 'routes' folder to the application front-end and make them available in the Vue components.

[Ziggy GitHub repo & documentation](https://github.com/tighten/ziggy)

Normally, in the context of Inertia, Ziggy works without the need to have a ziggy.js config file present in order to specify the included routes. However in the context of the Webshop package we've found it necessary to generate the ziggy.js file whenever the 'routes' folder is updated, by running `php artisan ziggy:generate "vendor/laravel-enso/webshop/resources/js"` in the main website root.

This basically publishes all the available routes inside *the main site 'routes' folder* to the 'ziggy.js' file which is published under the 'vendor/laravel-enso/webshop/resources/js' folder. This is probably not ideal, as only the websop routes should be made available to the webshop frontend.

There is a possibility that once Ziggy is installed as a Webshop dependency, this step may no longer be necessary, or at the very least it should only publish the webshop routes. If running `ziggy:generate` remains a requirement even after installing Ziggy asa a Webshop dependency, we should add the command to the deployment pipeline.

There is a method of including or excluding routes or groups of routes specified in the documentation [here](https://github.com/tighten/ziggy?tab=readme-ov-file#includingexcluding-routes), but it requires the addition of a 'ziggy.php' file in the 'config' folder. We haven't tested this approach yet, as we're still moving things around.

### Cannot get `vite dev` /  HMR to work for Webshop Package
All attempts to get HMR working in Vite inside the Webshop Package have been unsuccessful. Current workaround involves:
* building for production using the `yarn build --watch` flag
* then manually running the temporary `./copyWebshopAssets.sh` script to re-copy the webshop assets to the main site 'public/vendor/webshop/' folder.
* refershing the page inside the browser 
This has to be done after every change made to the front-end files.

The biggest issue with this approach, beside the efficiency drawback, is **not having access to the Vue Dev Tools inside the browser**.

### Other notes on the current status

#### Static images copied to the main website 'build/assets' folder
In order to be accessible after build, inside the browser, static images like logos, icons etc. have to be copied over to the main website 'build/assets' folder and merged with the main website assets.
This is done at the moment when running the `./copyWebshopAssets.sh` script, but the following line has also been added to Webshop `AppServiceProvider.php` @line 59, in the `publishes()` method:
```
__DIR__.'/../public/build/assets' => public_path('build/assets'),
```

*I'm not sure if this will be necessary in the final code or if this is the proper way/place to publish these assets.*

#### Some placeholder data being used
We've temporarily used some placeholder data in order to populate front-end components, such as the 'Featured Products' slider – see the `Home.php` controller as an example.
Because we were unable to properly retrieve Products from the back-end, we have temporarily used placeholder data. We should probably get some real data from the backend in accordance with the content included in the latest design file.

#### Temporary custom CSS in 'bulk.css' file
All CSS from the static pages has been temporarily moved inside the 'bulk.css' file and it will be gradually removed or moved into the proper places.

#### `HandleInertiaRequests::share` method for common data
Any data that should always be available application wide can be placed inside the `HandleInertiaRequests::share` method.

#### Single 'app.blade.php' file and Inertia directives
Because we are using Inertia, everything on the front-end is moved to Vue. As such, in the end there will only be a single 'app.blade.php' file which will serve as the entry point to the Application front-end.
Certain Inertia directives are being used here:
* **`@routes`**: this is used by Ziggy to inject the routes from Laravel. Normally this directive is all it takes to accomplish the process, but as mentioned before additional config was needed, at least for the time being;
* **`@inertiaHead`**: this is used to inject code into page `<head>` element server-side, such as titles and other tags, by using the dedicated `<Head></Head>` element;
* **`@inertia`**: inserts the content coming from the Vue Page components. 

[Inertia docs are here.](https://inertiajs.com/)

#### Global JS methods previously stored in main app.js may no longer be accessible
Since migrating to Vue JS 3 and also installing Inertia, the 'app.js' file has undergone significant refactoring, including the way in which the application is initialized via the `createInertiaApp()` method.
The 'app.js' file contains many methods such as `addToCart()` or `applyFilter()`, but these may no longer be working. We've attepmted to include them in the Vue 3 application via
```
app.mixin({
    methods: {
        ...
    }
});
```
but obviously these will need to be tested and likely refactored into the new code.

#### Vue 3 is still in COMPAT mode
This is set in 'vite.config.js', inside the `vue()` plugin under `template.compilerOptions.compatConfig`.

#### `vite build` deprecation warnings
Vite throws many deprecation warnings during build. We believe this is mainly due to having to use Vite 4 (in order tp maintain compatibility with the deprecated node 16, as requested).
Vite has an option to use `css.preprocessorOptions.scss.api: "modern"`, but this seems to only work in Vite 5 and newer.
Also, certain color functions in SASS are deprecated but have yet to be updated inside Bulma, see [https://github.com/jgthms/bulma/issues/3907](https://github.com/jgthms/bulma/issues/3907)

#### Node 16 is deprecated and a limiting factor
We should look into upgrading node to avoid possible security implications and having to use old packages.

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the PROPRIETARY licence

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/webshop/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 10/11/2024, 8:16:30 PM</div>
</div>
