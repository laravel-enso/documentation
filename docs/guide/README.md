# Introduction

Laravel Enso is a modular platform for building business applications on top of Laravel and Vue.

It is not just a starter app and it is not just a component library. The ecosystem is split into backend packages, frontend packages, and the host application that composes them into a working product.

## The ecosystem

Laravel Enso is made of three layers:

- `laravel-enso/*` backend packages
- `@enso-ui/*` frontend packages
- the host application that installs, configures, and extends them

The backend layer owns routes, permissions, forms, tables, resources, validation, upgrade routines, and domain-specific workflows. The frontend layer owns pages, widgets, reusable UI primitives, and runtime integration inside the Enso shell.

## Backend packages

Backend packages provide the application contracts that drive the platform:

- named routes
- permissions and menus
- form templates and form builders
- table templates and table builders
- select endpoints and typeahead endpoints
- comments, files, documents, notifications, charts, and other cross-cutting modules
- upgrade routines for code, structure, and data evolution

In practice, the backend defines the data shape and application behavior. The frontend renders and orchestrates that behavior.

## Frontend packages

Enso UI packages expose the frontend surface of the ecosystem:

- page modules
- reusable components
- shared shell layout
- runtime state and store ownership
- themes, localisation, notifications, loaders, tables, forms, filters, and more

Some packages expose a single reusable component. Others expose a full page-oriented surface with routes, page modules, and deep-import components used by a business workflow.

## Companion packages

Many packages exist as backend/frontend pairs.

Examples:

- `laravel-enso/forms` + `@enso-ui/forms`
- `laravel-enso/tables` + `@enso-ui/tables`
- `laravel-enso/companies` + `@enso-ui/companies`
- `laravel-enso/commercial` + `@enso-ui/commercial`

The backend package owns the contract. The frontend package owns the rendering and interaction layer.

This companion model keeps the platform modular while still allowing the full stack to evolve coherently.

## The host application

The host application is where Enso becomes a product.

This layer is responsible for:

- choosing which packages are installed
- configuring environment, services, and credentials
- adding application-local business logic
- extending package behavior where needed
- composing shared modules into a final user experience

In other words, Enso provides the platform. Your application provides the final domain.

## What you get out of the box

Depending on the installed package set, Laravel Enso gives you:

- authentication and authorization
- user groups, roles, permissions, and menus
- backend-driven forms and tables
- reusable select and typeahead flows
- preferences, themes, and localisation
- files, documents, comments, notifications, and charts
- a package-based architecture that scales better than a single monolith

## How to read this guide

This guide is not a package reference.

Use it to understand:

- how Laravel Enso is structured
- how backend and frontend packages fit together
- what the core platform building blocks are
- how an Enso application is expected to evolve

For package-level details, use the backend and frontend package documentation sections.
