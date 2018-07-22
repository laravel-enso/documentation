# Getting Started

## Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure the `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Login into the project with user: `admin@laravel-enso.com`, password: `password`

##### Optional steps if you want to play further

6. Setup the configuration files as needed in `config/enso/*.php`

7. Install node dependencies`yarn`

8. Compile `yarn dev` / `yarn hot`

Enjoy!

## Features
A solid starting project, based on [Laravel](https://laravel.com) 5.6, [VueJS](https://vuejs.org) 2, 
[Bulma](https://bulma.io), integrated themes from [Bulmaswatch](https://jenil.github.io/bulmaswatch), 
all the VueJS goodies such as [VueEx](https://vuex.vuejs.org/en) and [VueRouter](https://router.vuejs.org/en), 
with features like: 

- [Structure generator](https://github.com/laravel-enso/structuremanager) - powerful CLI that allows easy creation of new complex structures, generating all the needed files: 
    - system files for:
        - structure migration that adds menus and permissions and permission groups
        - front-end routes
        - back-end routes
    - boilerplate files for:
        - models and table migrations
        - form controller, builder and template
        - table controller, builder and template
        - select controller
        - request validator

- [Customizable and powerful datatables](https://github.com/laravel-enso/VueDatatable):
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
    
- [Vue select](https://github.com/laravel-enso/Select) - server side builder with parameter conditioning, including pivot parameters
- Advanced owners / [roles](https://github.com/laravel-enso/RoleManager) / [permissions](https://github.com/laravel-enso/PermissionManager) structure
- [Log management](https://github.com/laravel-enso/LogManager) -  view, download, clear
- User [action logger](https://github.com/laravel-enso/ActionLogger), so you can keep track of who's done what
- User [impersonation](https://github.com/laravel-enso/Impersonate) for easy support and debugging
- Application interface [tutorials](https://github.com/laravel-enso/TutorialManager) based on the awesome [Intro.js](http://introjs.com) 
- [Localisation support](https://github.com/laravel-enso/Localisation)
- [Charts component](https://github.com/laravel-enso/Charts) with server side data builder, based on [Chart.js](http://www.chartjs.org)
- [Comments component](https://github.com/laravel-enso/CommentsManager) with support for tagging users
- [Documents component](https://github.com/laravel-enso/DocumentsManager) with upload, download and inline view
- Ability to [track](https://github.com/laravel-enso/TrackWho) who created, updated and deleted models, using traits
- [File uploader](https://github.com/laravel-enso/FileManager) and file management library
- [Avatar functionality](https://github.com/laravel-enso/AvatarManager) for all users
- Ability to track the [different versions of a model](https://github.com/laravel-enso/HistoryTracker) through its lifetime
- Front-end date-picker and time-picker, based on [Flatpickr](https://chmln.github.io/flatpickr)
- Server-side type-ahead
- User, application-wide preferences - every user has the ability to choose his theme (from 10 variants), set the menu style, app language and more
- Queueable jobs
- Push notifications - working out of the box (requires [Pusher](https://pusher.com))
- Beautiful email notifications, that can published and customized to your heart's desire
- Automatic breadcrumbs generation
- Application-wide timestamp formatting customization through the configuration file
- Separate front-end state support, so that it's easier to keep your application's logic and data separated from enso's
- Optimistic concurrency control with versioning, via the [Versioning](https://github.com/laravel-enso/Versioning) package
- many more helpers and hidden gems

## Important

::: tip Recommended
If you are using this project please consult the [Changelog](https://github.com/laravel-enso/Enso/blob/master/CHANGELOG.md) on every update.
:::