# Commands

This page documents the working commands of the `documentation` repository.

All examples below assume you are in:

```bash
cd ../code/documentation
```

## Command groups

The commands fall into four groups:

- local preview and static site build
- repository sync and page generation
- source registry maintenance
- tracker cleanup

## Local preview and build

### `yarn dev`

Starts the VuePress development server with hot reload.

Use it when you are editing markdown, config, or styles and want to preview the site locally.

```bash
yarn dev
```

Typical use:

```bash
yarn build
yarn dev
```

That sequence is useful when the homepage or package pages depend on generated metadata from the last build.

### `yarn build`

Runs the Netlify-aware build entrypoint.

In normal mode it performs a standard site build and updates the local site status timestamp used by the homepage footer.

```bash
yarn build
```

This is the command used for the normal deploy path in Netlify.

### `yarn build:site`

Builds the static VuePress output directly, without running the Netlify wrapper logic.

```bash
yarn build:site
```

Use it when you want the pure site build step only.

### `yarn build:assets`

Compiles the VuePress site into:

- `docs/.vuepress/dist`

```bash
yarn build:assets
```

This is the low-level static build command used by the higher-level scripts.

### `yarn clean`

Removes generated VuePress artifacts:

- `docs/.vuepress/.cache`
- `docs/.vuepress/.temp`
- `docs/.vuepress/dist`

```bash
yarn clean
```

Use it when local output is stale or when you want to force a clean rebuild.

## Sync, generation, and status

### `yarn sync`

Refreshes locally cached README content from the registered source repositories.

```bash
yarn sync
```

Targeted usage:

```bash
yarn sync backend/companies
yarn sync frontend/forms
```

Use it after upstream README changes, before regenerating docs pages.

### `yarn build:generator`

Generates package pages from the synced README cache and updates generated package markdown.

```bash
yarn build:generator
```

Targeted usage:

```bash
yarn build:generator backend/companies
yarn build:generator frontend/forms
```

Use it after `yarn sync`.

### `yarn refresh:status`

Refreshes issue counts, merge request counts, and documentation status in the source registries.

```bash
yarn refresh:status
```

Targeted usage:

```bash
yarn refresh:status backend/companies
yarn refresh:status frontend/forms
```

This updates fields such as:

- `openIssuesCount`
- `openMergeRequestsCount`
- `documentationStatus`

### `yarn build:refresh`

Runs the full refresh pipeline:

1. `yarn sync`
2. `yarn build:generator`
3. `yarn refresh:status`
4. `yarn build:assets`

```bash
yarn build:refresh
```

Use it when you want a complete local refresh of synced README content, generated pages, package status, and final static output.

This is the heavy-duty path used for the scheduled docs refresh flow.

## Source registry maintenance

### `yarn scan`

Scans the configured organizations and groups for repositories that are missing from the local source registries.

```bash
yarn scan
```

Use it when you want to discover new backend or frontend repositories that are not yet listed in:

- `sources.backend.json`
- `sources.frontend.json`

### `yarn add:repo`

Adds a repository to the source registry.

This command expects a full repository URL or repository identifier, depending on the script mode.

```bash
yarn add:repo https://github.com/laravel-enso/example
yarn add:repo https://git.xtelecom.ro/enso-ui/example
```

Use it when introducing a repository that should become part of the docs site.

### `yarn remove:repo`

Removes a registered repository from the source registry.

This command expects a strict target in `section/slug` form.

```bash
yarn remove:repo backend/example
yarn remove:repo frontend/example
```

Use it when a repository should no longer appear in the docs registry.

## Tracker cleanup

### `yarn cleanup:tracker`

Closes stale issues and merge requests across repositories registered in the docs source files.

By default, it runs in `dry-run` mode and only reports candidates.

Required argument:

- `--before=ISO_TIMESTAMP`

Examples:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z
```

Issues only:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --type=issues
```

Merge requests only:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --type=merge-requests
```

Single repository:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --repo=backend/companies
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --repo=enso-ui/forms
```

Custom excluded labels:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --exclude-labels=security,planned,keep-open
```

Apply changes:

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --apply
```

The command:

- reads repositories from `sources.backend.json` and `sources.frontend.json`
- supports GitHub and GitLab
- posts a standard cleanup comment
- closes the issue, pull request, or merge request when `--apply` is present

## Recommended workflows

### Refresh everything locally

```bash
yarn sync
yarn build:generator
yarn refresh:status
yarn build
```

### Refresh a single package

```bash
yarn sync backend/companies
yarn build:generator backend/companies
yarn refresh:status backend/companies
yarn build
```

### Work on markdown or theme changes only

```bash
yarn dev
```

or:

```bash
yarn build
```

### Preview tracker cleanup safely

```bash
yarn cleanup:tracker --before=2026-01-01T00:00:00Z --type=issues
```

Then run the same command again with `--apply` after reviewing the output.
