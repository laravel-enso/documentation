---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Charts

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/charts/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.0.6-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/charts)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/charts.svg)](https://www.npmjs.com/package/@enso-ui/charts)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/charts)
[![Issues](https://img.shields.io/github/issues/enso-ui/charts.svg)](https://github.com/enso-ui/charts/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/charts.svg)](https://github.com/enso-ui/charts/pulls)

## Description

Chart.js wrappers and chart card presenters for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/charts
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the low-level `Chart` component plus the shared color palette
- ships higher-level Bulma presenters such as `ChartCard` and `EnsoChartCard` for Enso dashboards
- registers Chart.js plugins for data labels and annotations out of the box
- supports runtime option mutation, dataset updates, SVG export, and responsive resizing

## Usage

```vue
<script setup>
import { Chart, colors } from '@enso-ui/charts';

const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Orders', data: [3, 7, 5], backgroundColor: colors.slice(0, 3) }],
};
</script>

<Chart type="bar" :data="data" />
```

## API

### `Chart`

Low-level Chart.js canvas wrapper.

Import: `@enso-ui/charts`

Props:
- `data: object` chart labels and datasets.
- `display: function` datalabel visibility strategy.
- `shortNumbers: boolean = false` enables short number formatting.
- `valueFormatter: function` value formatter for datalabels.
- `scaleFormatter: function` callback used to mutate scale config.
- `options: object = {}` chart options override.
- `type: string` one of `line`, `bar`, `horizontalBar`, `radar`, `polarArea`, `pie`, `doughnut`, `bubble`.

Methods:
- `resize()`
- `svg()`
- `update()`

### `colors`

Default export palette array used by charts and cards.

Import: `@enso-ui/charts`

### `ChartCard`

Bulma card wrapper around `Chart` that fetches its config from an HTTP source.

Import: `@enso-ui/charts/src/bulma/ChartCard.vue`

### `EnsoChartCard`

Chart card variant wired to injected Enso `i18n` and `errorHandler` helpers.

Import: `@enso-ui/charts/src/bulma/EnsoChartCard.vue`

## Companion Backend Package

- [`laravel-enso/charts`](https://docs.laravel-enso.com/backend/charts.html) [↗](https://github.com/laravel-enso/charts)

The backend companion usually provides the HTTP endpoints and chart payloads consumed by `ChartCard` and `EnsoChartCard`.

## Depends On

- [`@enso-ui/card`](https://docs.laravel-enso.com/frontend/card.html) [↗](https://github.com/enso-ui/card)
- [`@enso-ui/directives`](https://docs.laravel-enso.com/frontend/directives.html) [↗](https://github.com/enso-ui/directives)
- [`@enso-ui/mixins`](https://docs.laravel-enso.com/frontend/mixins.html) [↗](https://github.com/enso-ui/mixins)
- [`chart.js`](https://www.chartjs.org/)
- [`chartjs-plugin-annotation`](https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/)
- [`chartjs-plugin-datalabels`](https://chartjs-plugin-datalabels.netlify.app/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/charts/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/charts/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/21/2026, 9:47:06 AM</div>
</div>
