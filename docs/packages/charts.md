# Charts
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa6c0917f8c6425f87eb94c01d84b2f8)](https://www.codacy.com/app/laravel-enso/Charts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Charts&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85484767/shield?branch=master)](https://styleci.io/repos/85484767)
[![License](https://poser.pugx.org/laravel-enso/charts/license)](https://packagist.org/packages/laravel-enso/charts)
[![Total Downloads](https://poser.pugx.org/laravel-enso/charts/downloads)](https://packagist.org/packages/laravel-enso/charts)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/charts/version)](https://packagist.org/packages/laravel-enso/charts)

Server-side data builder for [Chart.js](http://www.chartjs.org), with 2 [Bulma](https://bulma.io) styled, [VueJS](https://vuejs.org/) components for the frontend.


[![Watch the demo](https://laravel-enso.github.io/charts/screenshots/bulma_cap002_thumb.png)](https://laravel-enso.github.io/charts/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>


## Features

- it supports Bar, Bubble, Line, Pie, Doughnut, Polar Area and Radar chart types
- it creates properly formatted data structures, specific for each supported type of chart from a given data-set
- the used colors are configurable through the publishable config file
- comes with a `Chart.vue` VueJS component meant to be included anywhere
- comes with a `ChartCard.vue` VueJS component meant to be used as card containing the chart
- can translate labels, legends and data series
- can download the graphical representation of the graph, as a `PNG` file

## Installation

1. Publish the config with `php artisan vendor:publish --tag=charts-config`

3. Include `ChartCard.vue` in your page/component:

```js
import ChartCard from '../../components/enso/charts/ChartCard.vue';
```

5. Run `npm run webpack`

6. In your controller add a method that will return the data for you chart:

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

7. Use the VueJS component(s) in your views:

```vue
<chart :type="pie"
    :data="chartData"
    :options="chartOptions"/>        
```

Or for the server-side wrapper

```vue
<chart-card :source="api/charts/line"/>
```

## Configuration
The package's configuration file offers a few options for customization:
- `fillBackgroundOpacity` - number, the chart background's opacity, default is `0.25`
- `colors` - array, the list of colors used when drawing the various chart types

## Options
The `Chart.vue` component can be used anywhere by integrating it into any other component or page, and takes the following parameters:
- `type` - 'line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble' | (required)
- `data` - object containing the properly formatted data for the given chart type | (required)
- `options` - ChartJs options object | (optional)

The `ChartCard.vue` component is a chart in a Bulma card, and is meant to be used to retrieve its own data, and take the following parameters:
- `source` - the route path that will fetch the data | (required)
- `params` - parameters object that gets passed to the backend, may be used for customization of the data-set | (optional)
- `i18n` - function, parameter for translating labels, legends and data | (optional)
By default, if used within Enso, it will attempt to use the `__()` translation function. 
If the translation function is not available, it will just return the text to be translated as is.


## Methods
The following methods are available on the components

* Chart.vue
    - `init()`
    - `update()`
* ChartCard.vue
    - `fetch()`, to reload the data from server
    - `download()`, to download the chart representation as a `PNG` file

Call these methods with `vm.$refs.chart.method()`

## Publishes

- `php artisan vendor:publish --tag=charts-config` - the configuration file
- `php artisan vendor:publish --tag=charts-assets` - the VueJS components
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
once a newer version is released, usually used with the `--force` flag

## Notes

The Chart builder will use the colors from `app/config/enso/charts.php` (in that order) for the given data-sets.

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.
