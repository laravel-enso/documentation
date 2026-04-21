# Platform Concepts

Laravel Enso is easier to work with once you understand the contracts that tie the backend and frontend together.

This page describes the concepts that show up repeatedly across the ecosystem.

## Backend-driven UI

Enso is built around the idea that major UI structures are described on the backend and rendered on the frontend.

Typical examples:

- backend form contracts rendered by `@enso-ui/forms`
- backend table contracts rendered by `@enso-ui/tables`
- backend route and permission contracts consumed by the frontend shell
- backend select endpoints consumed by select and typeahead packages

This keeps business rules, authorization, and structure close to the backend, while still allowing the frontend to stay modular and reusable.

## Routes as application contracts

Named routes are a core part of the Enso model.

They are used for:

- navigation
- authorization
- menu visibility
- breadcrumbs
- linking frontend pages to backend resources

The route name is more than a URL alias. In Enso it becomes part of the application contract.

## Permissions and menus

Permissions are tied closely to named routes.

At a high level:

- permissions authorize access to application capabilities
- menus expose those capabilities visually
- the frontend shell uses route access and menu visibility together

This is why route naming, permission naming, and menu structure should be treated as one coherent unit.

## Companion packages

Many Enso modules have both a backend and a frontend package.

The backend package usually owns:

- routes
- permissions
- form and table templates
- validation
- persistence
- resources and business logic

The frontend package usually owns:

- page modules
- reusable UI components
- route modules
- visual integration with the Enso shell

The companion package model allows the ecosystem to stay modular without losing the coupling needed for backend-driven flows.

## Shared state and runtime contracts

Enso also uses shared runtime contracts beyond visible UI components.

These include:

- bootstrap state flowing from backend to frontend
- shared route maps
- permissions exposed to the shell
- user preferences
- localisation payloads
- backend enums surfaced to frontend consumers

This is part of why Enso feels like a platform instead of just a collection of isolated packages.

## Preferences, localisation, and themes

Enso applications are expected to support user-level runtime customization.

The platform includes support for:

- user preferences
- language selection
- theme selection
- persisted UI choices such as layout state and similar shell behavior

These are cross-cutting platform concerns, not page-specific features.

## Why Enso is modular

The package model exists to keep ownership explicit.

Instead of putting everything into one application repository, Enso separates concerns into packages with clear boundaries:

- backend ownership
- frontend ownership
- host-app ownership

That separation makes it easier to:

- reuse platform building blocks
- upgrade parts of the ecosystem independently
- keep business logic out of shared packages
- keep shared behavior out of app-local code
