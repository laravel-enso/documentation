---
sidebarDepth: 3
---

# Development Model

Laravel Enso is designed to be extended, but it works best when you keep package ownership and platform conventions clear.

## Building on Enso

When you build on Enso, you are usually doing one of three things:

- composing existing packages into an application
- extending shared package behavior
- adding application-local business logic on top of the platform

The important part is to keep those responsibilities separate.

## Shared packages vs application-local code

As a rule of thumb:

- shared, reusable platform behavior belongs in `laravel-enso/*` or `@enso-ui/*`
- application-specific business rules belong in the host application

If a change is reusable across multiple projects, it probably belongs in a package. If it is specific to one product or one domain implementation, it probably belongs in the app.

## Routes, permissions, and menus as one unit

When adding a new module, think about routes, permissions, and menus together.

In Enso these are not isolated concerns:

- routes define the application surface
- permissions define access to that surface
- menus expose the allowed surface visually

Keeping them aligned is one of the most important Enso conventions.

## Generating CRUD structures

Enso includes a CLI-oriented workflow for generating the repetitive structure behind CRUD modules.

The generator helps with:

- models
- permissions
- menus
- backend routes
- controllers
- requests
- form contracts
- table contracts
- frontend pages
- frontend routes

The generated output is a starting point. It is meant to be customized, not treated as the final business implementation.

## Extending forms, tables, and pages

Most Enso business modules are built from shared primitives.

That means extension usually happens in one of these places:

- backend form builders and templates
- backend table builders and templates
- page modules
- reusable frontend deep-import components
- package-level configuration and service integration

Understanding which layer owns which responsibility is more important than memorizing any individual package.

## Companion package ownership

When a module exists as both backend and frontend package, keep the split clear:

- backend owns structure, validation, persistence, and authorization
- frontend owns rendering, interaction, and page composition

This makes package evolution cleaner and helps avoid pushing business rules into the wrong layer.

## Evolving the system safely

Laravel Enso includes an upgrade model as part of the platform itself.

The `upgrade` package exists to help move applications forward in a controlled way, not just at the dependency level but also at the level of:

- code evolution
- database structure evolution
- data migration
- structure synchronization where needed

That upgrade model is part of the development story of Enso. It allows packages and host applications to evolve without treating every breaking change as a one-off manual rewrite.
