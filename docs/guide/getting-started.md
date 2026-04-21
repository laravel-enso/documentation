# Getting Started

This section is about getting a working Enso application running locally as quickly as possible.

If you are evaluating the platform, the fastest path is to start from the Enso application shell and then explore the package documentation from there.

## Requirements

- `PHP 8.3+`
- `Node.js 20+`
- `MySQL 8+`
- `Composer`
- `Yarn`

You will also need a working local PHP/MySQL environment and a place to serve both the Laravel backend and the frontend assets during development.

## Project bootstrap

Clone the project:

```bash
git clone https://github.com/laravel-enso/enso.git --depth 1
cd enso
```

Install backend dependencies:

```bash
composer install
```

Create and configure the backend environment:

```bash
cp .env.example .env
php artisan key:generate
```

At this point you should configure:

- application name and URL
- database connection
- mail, queue, cache, and broadcast drivers as needed

Run the initial database setup:

```bash
php artisan migrate --seed
```

## Frontend setup

Move into the frontend workspace:

```bash
cd client
```

Create the frontend environment file:

```bash
cp .env.example .env
```

Then install and build the frontend assets:

```bash
yarn
yarn build
```

For live development:

```bash
yarn serve
```

## First login

The default seeded credentials are:

- `admin@laravel-enso.com`
- `password`

## What to configure first

After the first successful boot, the next things to review are usually:

- application URLs and stateful domains
- queue and broadcast configuration
- localisation defaults
- mail configuration
- package-specific configuration in `config/enso/*`

## Where to go next

Once the project is running, the next useful pages in this guide are:

- `Platform Concepts`
- `Core Building Blocks`
- `Development Model`

And once you need details for a specific module, jump to the corresponding backend or frontend package page.
