---
sidebarDepth: 3
---

# Charts
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa6c0917f8c6425f87eb94c01d84b2f8)](https://www.codacy.com/app/laravel-enso/Charts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Charts&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85484767/shield?branch=master)](https://styleci.io/repos/85484767)
[![License](https://poser.pugx.org/laravel-enso/charts/license)](https://packagist.org/packages/laravel-enso/charts)
[![Total Downloads](https://poser.pugx.org/laravel-enso/charts/downloads)](https://packagist.org/packages/laravel-enso/charts)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/charts/version)](https://packagist.org/packages/laravel-enso/charts)

Server-side data builder for charts.

The front end implementation that utilizes this api is present in the [enso-ui/charts](https://github.com/enso-ui/charts) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/charts/screenshots/bulma_cap002_thumb.png)](https://laravel-enso.github.io/charts/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- it supports Bar, Bubble, Line, Pie, Doughnut, Polar Area and Radar chart types
- it creates properly formatted data structures, specific for each supported type of chart from a given data-set
- the used colors are configurable through the publishable config file
- can translate labels, legends and data series
- can download the graphical representation of the graph, as a `PNG` file

## Installation

1. `composer require laravel-enso/charts`

2. publish the config with `php artisan vendor:publish --tag=charts-config` and customize as needed

3. In your controller, add a method that will return the data for each chart:

```php
public function line()
{
    return (new LineChart())
        ->title('Income')
        ->labels(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
        ->datasets([
            'Sales' => [65, 59, 80, 81, 26, 25, 10],
            'Revenue' => [15, 29, 60, 31, 56, 65, 44],
        ])->fill()
        ->get();
}
```

4. create a route for each chart dataset, add permissions if needed, etc.

5. install the front end components and add them to your pages. 
For more information about the front end, see [enso-ui/charts](https://github.com/enso-ui/charts). 

## Configuration

The package's configuration file offers a few options for customization:
- `fillBackgroundOpacity` - number, the chart background's opacity, default is `0.25`
- `colors` - array, the list of colors used when drawing the various chart types

::: tip Note

The Chart builder will use the colors from `app/config/enso/charts.php` (in that order) for the given data-sets.

:::

## Publishes

- `php artisan vendor:publish --tag=charts-config` - the configuration file
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
