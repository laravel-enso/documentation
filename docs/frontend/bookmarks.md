---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Bookmarks

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/bookmarks/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-3.1.16-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/bookmarks)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/bookmarks.svg)](https://www.npmjs.com/package/@enso-ui/bookmarks)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/bookmarks)
[![Issues](https://img.shields.io/github/issues/enso-ui/bookmarks.svg)](https://github.com/enso-ui/bookmarks/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/bookmarks.svg)](https://github.com/enso-ui/bookmarks/pulls)

## Description

Bookmark toolbar and bookmark-state widgets for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/bookmarks
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the Bulma bookmark tag bar used in Enso navigation layouts
- renders reorderable bookmark tags through `vuedraggable`
- surfaces sticky, remove, clear, and active-route affordances on top of the core bookmark state machine
- keeps the rendered contract aligned with the `@enso-ui/ui` route metadata model
- keeps bookmark route queries synchronized for existing bookmarks on the same route and params

## Usage

```vue
<script setup>
import Bookmarks from '@enso-ui/bookmarks';
</script>

<Bookmarks />
```

## API

### `Bookmarks`

Default export that renders the Bulma bookmark toolbar.

Import: `@enso-ui/bookmarks`

Props:
- No public props. Bookmark data comes from the internal core bookmark state layer.

Events:
- No public emits.

Slots:
- No public slots.

Route query sync:
- an existing bookmark is matched by route name and params
- when the current route query changes, the bookmark query is updated instead of creating a duplicate
- `sticky` and saved state metadata are preserved during query sync
- tabbed `EnsoForm` bookmarks reopen with the saved `tab` query value

## Depends On

- [`@enso-ui/switch`](https://docs.laravel-enso.com/frontend/switch.html) [↗](https://github.com/enso-ui/switch)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)
- [`vuedraggable`](https://github.com/SortableJS/vue.draggable.next)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/bookmarks/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/bookmarks/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/15/2026, 11:27:51 AM</div>
</div>
