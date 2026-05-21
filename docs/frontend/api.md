---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# API

API log table page for Enso UI.

## Features

- exports the API logs index page used by the system route group
- filters API logs by user, permission, HTTP method, direction and creation date
- renders user avatars through the users package
- supports click-to-filter behavior on user avatars, method tags, direction tags and permission tags
- integrates with the backend `apiLogMethod` and `apiLogDirections` enum stores and the `apiLogs` table definition

## Routes

### `system/apiLogs`

Route group:

- `system.apiLogs.index`

Page:

- `src/bulma/pages/apiLogs/Index.vue`

The page expects these backend sources:

- `system.apiLogs.initTable`
- `system.apiLogs.tableData`
- `system.apiLogs.exportExcel`
- `system.permissions.options`
- `administration.users.options`

## Companion Backend Package

- [`laravel-enso/api`](https://github.com/laravel-enso/api)

## License

[MIT](https://github.com/enso-ui/api/blob/main/LICENSE)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/enso-ui/api/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/12/2026, 7:54:18 PM</div>
</div>
