---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# laravel-enso.github.io

## The Story
- why Laravel Enso exists
- how did we approach the need
- what was born


## Under the hood 

### Authentication
 - the standard Laravel authentication is used, via email & password

### Authorization

 - application wide, checking user status: active/inactive. The inactive status prevents the user from making requests. The check is made for every request, via a middleware. If a user is made inactive while he's still logged in, at his next request he'll be logged out.
 - application-section wide, via the menu visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. The check is made for each menu redraw. This level doesn't block access to routes, it just affects the visibility of the menus.
 - application-section wide, depending on access to routes, which is tied to the user's role and the permissions for that role. If he doesn't have access a 403 response is given back and a `laravel.log` entry is made.The check is made for each request, via a middleware. 
 - content specific, via policies. The check is made locally, when and where policies are used.

### Middleware & Middleware Groups
  - for the routes within the application, the 'core' middleware group is applied
  - the 'core' group contains the middleware below, presented in the order they're applied: 
     - `verify-active-state` - checks users's status (active/inactive)
     - `action-logger` - logs for each request the user's id, route, url, the HTTP verb and the timestamps
     - `verify-route-access` - authorizes the access for a route
     - `impersonate` - starts and stops the [impersonation](https://github.com/laravel-enso/Impersonate) of a user, when needed
     - `set-language` - sets the user's chosen language (locale)

### Permission Groups
  



### [Permissions](https://github.com/laravel-enso/PermissionManager) & Routes
  
  
    


### Owners, [Roles](https://github.com/laravel-enso/RoleManager) & Users
  - users represent the operators using the application
  - roles may be loosely considered groups of permissions
  - owners may be considered user groups, they are the user's owners
  - an owner may have many users
  - an owner may have many roles
  - an user can have **just one owner** and **just one role**  
  - the role of a user user may only be one of the roles available for the owner
  - when a user is created, one must choose an owner and then a role from the list of available roles  
  - users have an active or inactive status, where inactive users cannot login into the application (but can set/reset their password) 

### [Menus](https://github.com/laravel-enso/MenuManager) & [Roles](https://github.com/laravel-enso/RoleManager)
  
  


### Breadcrumbs
  - are dynamically generated depending on the current route
  - the displayed text may be customized and, if custom values are missing, the default values are used
  - inserting breadcrumbs in a page may be easily done by including the `breadcrumbs` package that comes with the package  



### [Telemetry](https://github.com/laravel-enso/ActionLogger)
   
   - the implicit `login` event that Laravel fires on a user's login triggers the save of the user's ip, user-agent and timestamp inside the `logins` table



### Exceptions    
   - where needed, `EnsoException` instances are thrown
   - depending on the type of the request (ajax or non ajax) a different response is given back   


### [Localisation](https://github.com/laravel-enso/Localisation)



### Preferences

The mechanism allows saving and loading upon login the user's preferences for a several aspects of the application.
- the preferences can be updated from the right-hand sidebar, where the user can also reset them as well as restart the tutorial function for the current page
- inside the `preferences` table, within `value` JSON type attribute, the following keys/settings are kept
    - `lang` - the user's language
    - `theme` - the currently selected theme
    - dtStateSave - flag for saving the state/preferences for each data-table within the application (for up to 90 days)
    - fixedHeader - the option of making the header fixed or scrollable
    - collapsedSidebar - flag for starting with / keeping the main left-hand navigation sidebar open or closed



### [Tutorials](https://github.com/laravel-enso/TutorialManager)


### [Comments](https://github.com/laravel-enso/CommentsManager) & [Documents](https://github.com/laravel-enso/DocumentsManager) (optional modules)
   


   
### [Notifications](https://github.com/laravel-enso/Notifications) (optional module)
   


### Environment
- .env & config
   - for push notifications, we use [Pusher](https://pusher.com/), therefore the following values must be set in the `.env` file:
      - BROADCAST_DRIVER=pusher
      - PUSHER_APP_ID=xxx
      - PUSHER_APP_KEY=xxx
      - PUSHER_APP_SECRET=xxx
   - within the configuration file `config/larave-enso.php` various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them



### [Datatable](https://github.com/laravel-enso/DataTable)





### [Select](https://github.com/laravel-enso/select)




### [Cropping and optimizing images](https://github.com/laravel-enso/ImageTransformer)



### [TrackWho](https://github.com/laravel-enso/TrackWho)



### [Rememberable](https://github.com/laravel-enso/Rememberable)





### [Log Manager](https://github.com/laravel-enso/LogManager)





### [History Tracker](https://github.com/laravel-enso/HistoryTracker)



### [File Manager](https://github.com/laravel-enso/FileManager)




### [Avatar Manager](https://github.com/laravel-enso/AvatarManager)




### [Charts](https://github.com/laravel-enso/Charts)



### [Contact Persons](https://github.com/laravel-enso/ContactPersons) (optional module)

Module which allows attaching contact persons to an owner.

More details are available on the project's [repository page](https://github.com/laravel-enso/ContactPersons).



### [Data Import](https://github.com/laravel-enso/DataImport) (optional module)

Module which permits importing data from the `xlsx` files. 

More details are available on the project's [repository page](https://github.com/laravel-enso/DataImport).



### [Structure Manager](https://github.com/laravel-enso/StructureManager)

Module which makes it easy to insert data in the application, useful when setting up modules. 

It can insert (and rollback) menus, permissions and permission groups.

More details are available on the project's [repository page](https://github.com/laravel-enso/StructureManager).


## How to

- creating a menu
- creating a permission
- creating permissions for a resource
- adding routes
- creating a page
- adding a server-side vue-select
- adding a data-table

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/laravel-enso.github.io/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 7/7/2017, 7:25:08 PM</div>
</div>
