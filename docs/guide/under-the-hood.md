# Under the Hood

## Authentication
The standard Laravel authentication is used, via email & password

## Stateful vs Stateless
Since we wanted to log data about our users and their requests, as well as check various permissions, the concept of a
'truly' stateless and secure API backend becomes impossible.

From a security standpoint we did not feel that a RESTful would not be more secure but probably even less safe.

Finally, from our own internal tests we concluded that we had no performance issues related to having the 
application stateful, especially since we don't aim to build applications of Twitter's scale.

In conclusion, even though at a point during the development we had the back-end set up as an API using JWT, 
in the end we designed it stateful since session is stored in the DB or in files, depending on your chosen setup.   
 
## Session management
Since Enso is built on top of a Laravel back-end, we are using the provided session management

## Security
Laravel is using HttpOnly cookies and an additional CSRF token. This provides protection against both XSS and CSRF attacks

::: warning Keep in mind
When working with VueJS, the v-html directive is XSS vulnerable, so it should be used only with sanitized/safe data 
:::
  

## Authorization
 - application wide, checking user status: active/inactive. The check is made for every request, via a middleware. The inactive status prevents the user from logging in and making requests. If an user becomes inactive while he's still logged in, at his next request he'll be logged out and redirected to the login page with a notification
 - application-section wide, via the menu's visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. This level doesn't block access to the routes, it just affects the visibility of the menus
 - application-section wide, depending on permitted access to routes, which is tied to the user's role and the associated permissions for that role. The check is made for each request, via a middleware. If the user is not allowed on a route a 403 response is given back and a `laravel.log` entry is made.
 - content specific, via gates & policies. The check is made locally, when and where gates & policies are used

## Middleware & Middleware Groups
- for the routes within the application, the `core` middleware group is applied
- the `core` group contains the middleware below, presented in the order they're applied:
    - `verify-active-state` - checks users's status (active/inactive)
    - `action-logger` - logs for each request the user's id, route, url, the HTTP verb and the timestamps
    - `verify-route-access` - authorizes the access to a route
    - `impersonate` - starts and stops the [impersonation](https://github.com/laravel-enso/Impersonate) of a user, when needed
    - `set-language` - sets the user's chosen language ([localisation](https://github.com/laravel-enso/Localisation))

## UserGroups, [Roles](https://github.com/laravel-enso/RoleManager) & Users
- users represent the operators using the application
- roles are collections of permissions
- user groups (previously owners) can represent departments, types, and even companies
- an user group can have many users
- an user group can have many roles
- an user has **just one user group** and **just one role**
- the role of a user may only be one of the roles available for its user group
- users have an active or inactive status, where inactive users cannot login or make requests in the application (but can set/reset their password)
- the `Role` model contains the `AdminId` and `SupervisorId` constants that determine who 
the administrator and supervisor roles are
- the `UserGroup` model contains the `AdminGroupId` constant that is used to determine which is the Administrator
user group

## Preferences
The mechanism allows saving and loading of the user's preferences for several aspects of the application.
- the preferences can be updated from the right-hand sidebar. From there the user can also reset the preferences to default.
- the user's preferences are stored in the `preferences` table, under `value` column, in JSON format.
- list of preferences
    - `lang` - the user's language
    - `theme` - the currently selected theme    
    - `expandedMenu` - the menu state, defaults `true`

## Translations
Are loaded at application load, and refreshed as needed

## Environment
- config
    - within the configuration enso folder `config/enso` you'll find configuration files for the various laravel-enso packages 
    - inside 'config.php' various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them, the app version displayed in the footer and more 

## Telemetry
- the implicit `login` event that Laravel fires on a user's login triggers a listener that stores the user's ip, user-agent and timestamps inside the `logins` table

## Exceptions
- when needed, the exceptions thrown are as specific as possible
- since requests are supposed to be ajax, JSON responses are given back 
