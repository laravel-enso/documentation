# Getting Started

## Requirements

* See the [Laravel server requirements](https://laravel.com/docs/6.x/installation#server-requirements).
* Laravel Enso uses the `json` data type.
    * If using MySQL, [a minimum version of 5.7.8 is required](https://dev.mysql.com/doc/refman/5.7/en/json.html).
    * If using MariaDB, [a minimum version of 10.2.7 is required](https://mariadb.com/kb/en/library/json-data-type).

## Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/enso.git --depth 1`

2. Within the project folder run `composer install`

3. Create a database for your site (see the [Laravel database documentation](https://laravel.com/docs/6.x/database)), 
copy or rename the `.env.example` file to `.env`, 
edit the database configuration information, and run `php artisan key:generate`

4. In order to serve the back-end API, take a look at the Local Development Server section of the [Laravel installation documentation](https://laravel.com/docs/6.x/#installation)
and consider using [Valet](https://laravel.com/docs/6.x/valet) for a better experience

5. Run `php artisan migrate --seed`

6. Open the `client` folder, copy the `.env.example` file, save it as `.env` and set the URL 
for the back-end API (which you've configured at step 4)

7. Run `yarn && yarn build`

8. Launch the site and log into the project with user: `admin@laravel-enso.com`, password: `password`

9. For live reload / hot module replacement functionality run `yarn serve`

### Optional

10. Setup the configuration files as needed in `config/enso/*.php`
11. You may remove the following files from the cloned repository:
    - `.styleci.yml`
    - `.travis.yml`
    - `docker-compose.yml` (if not using Docker)  

Enjoy!

## Docker
Laravel Enso comes with a simple docker environment to help with development. 
By default it has two containers, the enso container and the enso-mysql container. 
There is also a optional phpmyadmin container that can be used by removing the commented
lines in `docker-compose.yml`.

#### Containers

- The enso container runs the apache webserver and has `yarn` & `composer` installed.
- The enso-mysql container handle's the database the default user is `root` with a blank password and the default database is `enso`
- The enso-phpmyadmin container is optional and attaches a phpMyAdmin instance the the enso-mysql database.

#### Steps to use

- Rename .env.example to .env and fill out the appropriate variables.
- Run `docker-compose up` to start the containers. 
To daemonize the process run `docker-compose up --build -d`.
- Enter into the enso container to begin the enso installation with `docker exec -it enso bash`
- Install laravel enso following the [guide](https://docs.laravel-enso.com/guide/getting-started.html).

### Known issues

* When you run `php artisan migrate --seed`, you may hit an error in the form `SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes`. If so:
    * See [this post](https://laravel-news.com/laravel-5-4-key-too-long-error) for details on how to address the error.
    * After addressing the error, drop all tables from your site database (or delete and recreate the database), then run `php artisan migrate --seed` again.

## Features
A solid starting project, based on [Laravel](https://laravel.com) 6, [VueJS](https://vuejs.org) 2 
(the build is done with [VueCli](https://cli.vuejs.org/), 
[Bulma](https://bulma.io), integrated themes from [Bulmaswatch](https://jenil.github.io/bulmaswatch),
all the VueJS goodies such as [VueEx](https://vuex.vuejs.org/en) and [VueRouter](https://router.vuejs.org/en),
with features like:

- [Structure generator](https://github.com/laravel-enso/cli) - powerful CLI that allows easy creation of new complex structures, generating all the needed files:
    - system files for:
        - structure migration that adds menus and permissions and permission groups
        - front-end routes & CRUD pages
        - back-end routes
    - boilerplate files for:
        - models and table migrations
        - form controller, builder and template
        - table controller, builder and template
        - select controller
        - request validator

- [Customizable and powerful datatables](https://github.com/laravel-enso/tables):
    - JSON templates
    - server side
    - multi-argument full column search
    - customizable column visibility
    - state save in localStorage for each table
    - automatic action buttons generation, depending on user permissions
    - custom action buttons as needed
    - beautiful tag rendering for boolean flag columns
    - easy display of flag/type columns values
    - server-side excel export for every table

- [Beautiful forms](https://github.com/laravel-enso/Formbuilder):
    - JSON templates
    - server side
    - validation
    - customizable

- [Vue select](https://github.com/laravel-enso/select) - server side builder with parameter conditioning, including pivot parameters
- Advanced user groups / [roles](https://github.com/laravel-enso/roles) / [permissions](https://github.com/laravel-enso/permissions) structure
- [Log management](https://github.com/laravel-enso/logs) -  view, download, clear
- User [action logger](https://github.com/laravel-enso/action-logger), so you can keep track of who's done what
- User [impersonation](https://github.com/laravel-enso/impersonate) for easy support and debugging
- Application interface [tutorials](https://github.com/laravel-enso/tutorials) based on the awesome [Intro.js](http://introjs.com)
- [Localisation support](https://github.com/laravel-enso/localisation)
- [Charts component](https://github.com/laravel-enso/charts) with server side data builder, based on [Chart.js](http://www.chartjs.org)
- [Comments component](https://github.com/laravel-enso/comments) with support for tagging users
- [Documents component](https://github.com/laravel-enso/documents) with upload, download and inline view
- Ability to [track](https://github.com/laravel-enso/track-who) who created, updated and deleted models, using traits
- [File uploader](https://github.com/laravel-enso/files) and file management library
- [Avatar functionality](https://github.com/laravel-enso/avatars) for all users
- Ability to track the [different versions of a model](https://github.com/laravel-enso/history-tracker) through its lifetime
- Front-end date-picker and time-picker, based on [Flatpickr](https://chmln.github.io/flatpickr)
- Server-side type-ahead
- User, application-wide preferences - every user has the ability to choose his theme (from 10 variants), set the menu style, app language and more
- Queueable jobs
- Push notifications - working out of the box (requires [Pusher](https://pusher.com))
- Beautiful email notifications, that can published and customized to your heart's desire
- Automatic breadcrumbs generation
- Application-wide timestamp formatting customization through the configuration file
- Separate front-end state support, so that it's easier to keep your application's logic and data separated from enso's
- Optimistic concurrency control with versioning, via the [Versioning](https://github.com/laravel-enso/versioning) and 
    [Versions](https://github.com/laravel-enso/versions) the packages
- many more helpers and hidden gems

## Important

::: tip Recommended
If you are using this project please consult the [Changelog](https://github.com/laravel-enso/Enso/blob/master/CHANGELOG.md) on every update.
:::
