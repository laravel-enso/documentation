# Under the Hood

Laravel Enso is built as a stateful Laravel application platform with a Vue frontend shell on top.

This page summarizes the main internal mechanisms that shape that runtime.

## Authentication

Authentication builds on Laravel's standard authentication model.

The frontend shell consumes the authenticated user state provided by the backend and adapts the visible application surface accordingly.

## Authorization layers

Authorization in Enso happens on multiple levels:

- application-wide user state, such as active vs inactive users
- route-level access control through permissions
- menu visibility based on the allowed application surface
- content-specific authorization through gates and policies where needed

This layered approach is one of the reasons Enso route naming and permission naming matter so much.

## Middleware flow

The Enso runtime uses middleware to enforce application-wide concerns such as:

- active user verification
- route access checks
- action logging
- impersonation flow
- localisation selection

The exact middleware set can evolve, but the idea remains stable: shared platform concerns are enforced consistently at the application boundary.

## Stateful runtime

Enso is intentionally built as a stateful Laravel application rather than a purely stateless API.

This supports:

- session-aware application flows
- richer authorization checks
- action logging
- preference-aware behavior
- tighter integration between backend and frontend shell state

## State bootstrap

Frontend bootstrap is driven by backend-provided state.

That state includes pieces such as:

- route maps
- user data
- permissions
- preferences
- localisation context
- other package-owned state slices needed by the frontend shell

This is part of the platform contract between backend and frontend.

## Preferences persistence

Enso includes persistent user preferences for cross-cutting application behavior.

Typical examples include:

- language
- theme
- shell state
- other runtime UI choices

These preferences are part of the platform and are not meant to be reimplemented independently in each module.

## Localisation loading

Translations are a platform concern, not just a frontend concern.

Enso applications load localisation data so both backend and frontend can operate with the same language context and user preference model.

## Telemetry and action logging

The platform includes shared support for tracking application activity.

This allows Enso applications to keep an operational trace of user actions and important runtime events through shared modules rather than isolated ad-hoc implementations.

## Exceptions and API responses

Enso expects application interactions to flow through JSON-oriented backend/frontend communication.

That means exception handling is designed around application-friendly responses, shared error handling, and frontend shell integration rather than page-by-page server-rendered fallbacks.

## Package orchestration

A final important point is that Enso behaves like a coordinated package ecosystem, not just a single repository.

The runtime depends on package orchestration across:

- backend contracts
- frontend package surfaces
- shared state
- package configuration
- upgrade routines

That orchestration is what turns many independent packages into one coherent platform.
