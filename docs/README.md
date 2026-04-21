---
home: true
# heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Backend-driven UI
    details: Build complex business flows with Laravel APIs, Vue pages, backend form contracts, and backend table contracts working together.
  - title: Modular packages
    details: Compose the platform from focused backend and frontend packages, then keep only the modules your application needs.
  - title: Production-oriented
    details: Start from a real business application shell with authentication, permissions, preferences, localisation, forms, tables, documents, charts, and more.
footer: MIT Licensed | Copyright © 2018-present Laravel Enso
---

Laravel Enso is a modular application platform for building admin panels and business software with Laravel and Vue.

It combines a Laravel backend, an Enso UI frontend, and a large set of ecosystem packages that cover the common infrastructure of complex internal applications.

### Requirements

::: warning Runtime requirements
`PHP 8.3+` | `Node.js 20+` | `MySQL 8+` | `Composer` | `Yarn`
:::

### Try it out

```bash
# clone into a new project folder
git clone https://github.com/laravel-enso/enso.git --depth 1

# install backend dependencies
composer install

# create and configure the backend environment
cp .env.example .env
php artisan key:generate
php artisan migrate --seed

# install frontend dependencies
cd client
cp .env.example .env
yarn

# build the frontend assets
yarn build
```

For live reload during development, run:

```bash
yarn serve
```

### Default login

::: tip
`admin@laravel-enso.com` / `password`
:::

### What you get

- authentication, authorization, roles, permissions, and user preferences
- backend-driven forms and backend-driven tables
- localisation, themes, notifications, charts, comments, documents, and file handling
- a package ecosystem for extending both backend and frontend consistently

---

### Thanks

Built with <span style="color:red"> &#10084;&#65039;</span> + <img src="/laravel.svg" alt="Laravel" style="height:1.2em;vertical-align:-0.18em"> + <img src="/vuejs.svg" alt="VueJS" style="height:1.2em;vertical-align:-0.18em"> + <img src="/bulma.svg" alt="Bulma" style="height:1.2em;vertical-align:-0.18em">.

**Special thanks** to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/) and [Jeremy Thomas](https://bulma.io).
