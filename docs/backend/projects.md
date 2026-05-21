---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Projects

Reusable project and flow orchestration package for Laravel Enso.

## Description

Projects owns generic project state mechanics for Laravel Enso applications: projects, reusable phases, reusable statuses, flows, flow graph nodes, transitions, transition reviews, and project events.

The package intentionally does not include business-specific project fields, agents, Alexa or Lumi logic, OpenAI integration, scraping, outreach, or polymorphic relations. Consuming applications extend project meaning locally.

## Installation

Install the package through Composer:

```bash
composer require laravel-enso/projects
```

In local Enso development this package is commonly consumed as a path repository:

```json
{
    "repositories": [
        {
            "type": "path",
            "url": "vendor/laravel-enso/projects",
            "options": {
                "symlink": true
            }
        }
    ],
    "require": {
        "laravel-enso/projects": "dev-main"
    }
}
```

Run migrations after installing:

```bash
php artisan migrate
```

## Features

- stores project records and current flow status
- defines reusable phases and statuses
- defines flows as phase/status graphs
- infers initial and final statuses from graph transitions
- supports optional manual transition review
- logs standard project events
- supports code-defined custom project events
- supports transition condition and action handlers through contracts
- ships Enso forms, tables, routes, permissions, menus, and structure migrations
- exposes a flow configurator endpoint for graph editing and preview

## Data Model

Main tables:

- `projects`
- `project_phase_colors`
- `project_phases`
- `project_statuses`
- `project_flows`
- `project_flow_phases`
- `project_flow_phase_statuses`
- `project_flow_status_transitions`
- `project_events`
- `project_transition_reviews`

Model namespace:

```php
LaravelEnso\Projects\Models
```

Core models:

- `Project`
- `PhaseColor`
- `Phase`
- `Status`
- `Flow`
- `FlowPhase`
- `FlowPhaseStatus`
- `FlowStatusTransition`
- `Event`
- `TransitionReview`

## Flow Graph

Transitions are represented by `project_flow_status_transitions`.

- `source_status_id` points to `project_flow_phase_statuses.id`
- `target_status_id` points to `project_flow_phase_statuses.id`
- a status node that never appears as a target is initial
- a status node that never appears as a source is final
- a phase transition is implicit when an edge connects status nodes from different flow phases
- review requirements live on the transition, not on status definitions

## Transition Handlers

Transition conditions and actions are PHP classes stored on transitions and validated against package contracts.

Contracts:

```php
LaravelEnso\Projects\Contracts\Transition\Condition
LaravelEnso\Projects\Contracts\Transition\Action
```

Condition handlers decide whether a transition may run. Action handlers run side effects after a successful transition.

Transitions are handled from the model:

```php
$review = $transition->handle($project);
```

If the transition requires review, a pending `TransitionReview` is created and the project status is not changed until approval.

## Events

Standard event values are defined by:

```php
LaravelEnso\Projects\Enums\Event
```

Custom events are code-defined through:

```php
LaravelEnso\Projects\Contracts\Event\Custom
```

Project events may include a nullable JSON payload.

## Routes And Menus

The package exposes:

- root `Projects` menu entry for `projects.index`
- `Administration > Projects` entries for phase colors, phases, statuses, and flows
- flow configuration endpoints for reading and saving graph phases, statuses, and transitions

Pivot and internal graph tables are not exposed as standalone menus.

## Companion Frontend Package

- [`@enso-ui/projects`](https://git.xtelecom.ro/enso-ui/projects)

## Development

Useful validation commands from a consuming Enso application:

```bash
composer update
php artisan package:discover
php artisan route:list
```

## License

MIT.

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/projects/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/21/2026, 12:46:12 PM</div>
</div>
