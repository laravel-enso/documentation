---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Enso UI Pagination

Pagination components for Enso UI.

## Usage

The package exposes two Bulma components:

- `Pagination`: a pure pagination component driven by props
- `EnsoPagination`: a small Enso wrapper that injects `i18n` and forwards it to `Pagination`
- `SimplePagination`: a pure previous / next pagination component driven by props
- `EnsoSimplePagination`: a small Enso wrapper that injects `i18n` and forwards it to `SimplePagination`

`Pagination` expects:

- `length`: total number of items
- `page`: current page
- `pageSize`: items per page
- `loading`: optional loading state

It also exposes a named `info` slot with:

- `from`
- `to`
- `total`
- `page`
- `pageSize`
- `totalPages`

`SimplePagination` exposes the same `info` slot props, but renders only `Previous` and `Next`.
For `SimplePagination`, `length` may also be `null` when the total is unknown; in that case the default info text shows `...` for the upper bound and total.

Example:

```vue
<enso-pagination :length="items.length"
    :page="page"
    :page-size="25"
    @page-changed="page = $event">
    <template #info="{ from, to, total }">
        <p>From {{ from }} to {{ to }} of {{ total }}</p>
    </template>
</enso-pagination>
```

```vue
<enso-simple-pagination :length="items.length"
    :page="page"
    :page-size="25"
    @page-changed="page = $event">
    <template #info="{ from, to, total }">
        <p>From {{ from }} to {{ to }} of {{ total }} entries</p>
    </template>
</enso-simple-pagination>
```

## Installation

```bash
npm install @enso-ui/pagination
```

## Exports

```js
import {
    Pagination,
    EnsoPagination,
    SimplePagination,
    EnsoSimplePagination,
} from '@enso-ui/pagination/bulma';
```

## License

[MIT](https://github.com/enso-ui/pagination/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/pagination/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/16/2026, 3:55:16 PM</div>
</div>
