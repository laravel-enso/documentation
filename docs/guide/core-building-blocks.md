# Core Building Blocks

Laravel Enso is made of reusable platform primitives. These blocks show up across many packages and explain how the ecosystem behaves as a whole.

## Forms

Forms are one of the central Enso primitives.

The backend defines the form contract through templates, builders, and validation. The frontend renders that contract through the Enso UI form runtime.

This gives you:

- backend-owned structure
- reusable field rendering
- shared validation behavior
- consistent create/edit/show flows
- a clean extension point for application-specific custom fields and sections

## Tables

Tables are another core primitive of the platform.

The backend defines:

- columns
- filters
- sorting
- row actions
- export behavior
- totals
- search modes

The frontend turns that contract into an interactive table runtime with filters, actions, exports, preferences, selection, and slot-based extension points.

Tables are not just a visual widget in Enso. They are a backend/frontend contract.

## Filters

Filters are a distinct building block in Enso, even when they are rendered next to tables.

The backend defines:

- filter types
- operators
- value sources
- defaults
- parameter contracts

The frontend turns that into reusable filter controls and query state that can drive tables, listings, dashboards, and other page-level data views.

This matters because filters are not only table accessories. They are part of the application contract for narrowing data, reusing lookup inputs, and keeping search behavior consistent across modules.

## Selects and typeahead

Selects and typeahead flows are first-class building blocks in Enso.

They are designed for:

- remote option loading
- parameter-aware lookups
- relationship-driven inputs
- shared UX across forms and filters

These patterns are reused heavily across administrative and business packages.

## Files and documents

Files and documents are treated as platform features, not one-off implementations.

That includes:

- uploads
- previews
- attachment workflows
- document-linked business flows
- file browsing and management

This gives packages a shared document model instead of forcing each domain to reinvent file handling.

## Comments, notifications, charts, and tutorials

Several cross-cutting modules can be added to business workflows with relatively little extra work:

- comments for discussion and traceability
- notifications for user-facing events
- charts for dashboard and reporting views
- tutorials for guided UI onboarding

These are optional at the package level, but they are part of the platform vocabulary.

## State, enums, preferences, and localisation

Not all core building blocks are visual.

Enso also relies on runtime building blocks that shape how the frontend boots and behaves:

- backend-to-frontend bootstrap state
- backend enums consumed on the frontend
- shared preferences
- localisation payloads
- route-aware shell state

These pieces make the ecosystem coherent across many independent packages.

## Pages and business modules

At the top of these primitives sit the page-oriented packages.

Packages such as `companies`, `commercial`, `users`, `tasks`, or `webshop` combine multiple building blocks:

- routes
- permissions
- pages
- forms
- tables
- filters
- comments
- documents
- notifications

This layered composition is the normal Enso model for larger modules.
