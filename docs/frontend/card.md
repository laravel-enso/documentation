---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Card

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/card/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-4.0.7-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/card)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/card.svg)](https://www.npmjs.com/package/@enso-ui/card)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/card)
[![Issues](https://img.shields.io/github/issues/enso-ui/card.svg)](https://github.com/enso-ui/card/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/card.svg)](https://github.com/enso-ui/card/pulls)

## Description

Composable Bulma card primitives for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/card
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- exports the complete Bulma card shell used by Enso dashboards and detail views
- provides collapsible, removable, loading, and overlay-aware card behavior through shared injected state
- ships dedicated header, content, footer, and control primitives for consistent composition

## Usage

```vue
<script setup>
import {
    Card, CardHeader, CardContent, CardBadge, CardRefresh, CardCollapse,
} from '@enso-ui/card/bulma';
</script>

<Card collapsible>
    <CardHeader collapsible>
        <template #title>Orders</template>
        <template #controls>
            <CardBadge :label="12" />
            <CardRefresh @refresh="reload" />
            <CardCollapse />
        </template>
    </CardHeader>
    <CardContent>
        ...
    </CardContent>
</Card>
```

## API

### `Card`

Root card container that provides shared collapse/remove state to child parts.

Import: `@enso-ui/card/bulma`

Props:
- `collapsed: boolean = false` initial collapsed state.
- `collapsible: boolean = false` enables toggle behaviour.
- `overlay: boolean = false` overlays the card content.
- `loading: boolean = false` shows the card loader.

Events:
- `collapse`
- `expand`
- `remove`

### `CardHeader`

Header wrapper with `title` and `controls` slots.

Import: `@enso-ui/card/bulma`

Props:
- `collapsible: boolean = false` renders an inline collapse control.

### `CardContent`

Content wrapper that collapses automatically when the parent card is collapsible.

Import: `@enso-ui/card/bulma`

### `CardImage`

Image wrapper matching Bulma card markup.

Import: `@enso-ui/card/bulma`

### `CardFooter`

Footer wrapper for footer items or custom actions.

Import: `@enso-ui/card/bulma`

### `CardFooterItem`

Single footer link item.

Import: `@enso-ui/card/bulma`

### `CardControl`

Low-level clickable wrapper for header controls.

Import: `@enso-ui/card/bulma`

### `CardBadge`

Header control that renders a Bulma tag.

Import: `@enso-ui/card/bulma`

Props:
- `label: string | number`
- `type: string | null = null`

### `CardCollapse`

Header control that toggles the parent card collapse state.

Import: `@enso-ui/card/bulma`

### `CardRefresh`

Header control that emits a guarded `refresh` event.

Import: `@enso-ui/card/bulma`

Props:
- `loading: boolean = false` disables repeat emits and spins the icon.

Events:
- `refresh`

### `CardRemove`

Header control that marks the parent card as removed.

Import: `@enso-ui/card/bulma`

## Depends On

- [`@enso-ui/dropdown-indicator`](https://docs.laravel-enso.com/frontend/dropdown-indicator.html) [↗](https://github.com/enso-ui/dropdown-indicator)
- [`@enso-ui/loader`](https://docs.laravel-enso.com/frontend/loader.html) [↗](https://github.com/enso-ui/loader)
- [`@enso-ui/transitions`](https://docs.laravel-enso.com/frontend/transitions.html) [↗](https://github.com/enso-ui/transitions)
- [`Bulma`](https://bulma.io/)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/card/blob/master/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/card/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:21:31 PM</div>
</div>
