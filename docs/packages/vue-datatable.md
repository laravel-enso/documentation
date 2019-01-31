---
sidebarDepth: 2
---
# Vue Datatable

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a3cf79a9ca584f08b3be0246cb488788)](https://www.codacy.com/app/laravel-enso/vuedatatable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/vuedatatable&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/99695155/shield?branch=master)](https://styleci.io/repos/99695155)
[![License](https://poser.pugx.org/laravel-enso/vuedatatable/license)](https://packagist.org/packages/laravel-enso/vuedatatable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/vuedatatable/downloads)](https://packagist.org/packages/laravel-enso/vuedatatable)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/vuedatatable/version)](https://packagist.org/packages/laravel-enso/vuedatatable)

Data Table package with server-side processing, unlimited exporting and VueJS components. 
Quickly build any complex table based on a JSON template.


[![Watch the demo](https://laravel-enso.github.io/vuedatatable/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/vuedatatable/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

[![Themed screenshot](https://laravel-enso.github.io/vuedatatable/screenshots/bulma_002_thumb.png)](https://laravel-enso.github.io/vuedatatable/videos/bulma_demo_02.mp4)

<sup>click on the photo to view an **export** demo in compatible browsers</sup>

## Features

- efficient server side data loading
- multi-column searching
- multi-column sorting with the option to set per column default sorting
- configurable pagination
- user customizable column visibility
- configurable action buttons
- beautiful tag rendering for boolean flags
- can display and format numbers as money values, and the formatting can be customized via the template
- full customization via the use of scoped slots for your columns
- smart resizing & auto-hide based on screen width. Data is still accessible under an optional child row
- tooltips for columns/rows
- front-end translations for labels and even data
- configurable, on-the-fly view modes: compact, striped, bordered, hover
- configurable column alignment from the template left / center / right
- preferences/state save for each table in the browser's localStorage
- server-side Excel exporting of the table data, using your current sorting and filtering choices, with email notification and optional push notifications.
    The export supports a practically unlimited dataset and features real time progress reporting in the interface
- reloading of data on demand
- smart management of huge datasets, with configurable limit
- possibility to define actions that apply to the entire, filtered, dataset
- Enso Enum computation
- Laravel accessors for the main query model
- the configuration template for each table has been designed to be as light and straightforward as possible without losing 
out on features
- caching support for speeding up the retrieval of data
- thorough validation of the JSON template with developer friendly messages, in order to avoid misconfiguration issues
- Eloquent query friendly with the possibility to easily display nested models attribute values
- can be used independently of the Enso ecosystem



### In the future
- PDF export alongside the XLSX report 

## Installation

### Enso
If you're using [Laravel Enso](https://github.com/laravel-enso/Enso), this package is already included, 
so no further installation is required

### Independently
Note: the following steps assume you have some experience with Laravel and VueJS.

Outside of Laravel Enso, the following dependencies are required:
- [Bulma](https://bulma.io/) for styling
- [Axios](https://github.com/axios/axios) for AJAX requests
- [Lodash](https://lodash.com/) for debounce
- [Font Awesome 5](https://fontawesome.com/) for the icons (Add all below to make it work)
   * "@fortawesome/fontawesome-free": "^5.2.0",
   * "@fortawesome/fontawesome-svg-core": "^1.2.2",
   * "@fortawesome/free-brands-svg-icons": "^5.2.0",
   * "@fortawesome/free-regular-svg-icons": "^5.2.0",
   * "@fortawesome/free-solid-svg-icons": "^5.2.0",
   * "@fortawesome/vue-fontawesome": "^0.1.1",
- [Akryum v-tooltip](https://github.com/Akryum/v-tooltip) for displaying tooltips
- [Css element queries - resize detector](https://github.com/marcj/css-element-queries) for responsiveness
- [accounting.js](http://openexchangerates.github.io/accounting.js/) for formatting numbers as money values

Next:
1. `composer require laravel-enso/vuedatatable` to pull in the package and its dependencies
2. `php artisan vendor:publish --tag=enso-assets` to publish resources
3. `php artisan vendor:publish --tag=vuedatatable-config` to publish the configuration file
4. import, include, setup the resources and dependencies

```js
import axios from 'axios';
import VueTable from './components/enso/vuedatatable/VueTable.vue';
import Toastr from './components/enso/bulma/toastr';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

window.axios = axios;
```

Note on Font Awesome: Each icon used in the datatable should be available (imported) in the page/component where 
vue-table is used, for example:
```js
import { faSearch, faSync, faAngleDown, faInfoCircle }
    from '@fortawesome/fontawesome-free-solid/shakable.es';
fontawesome.library.add(faSearch, faSync, faAngleDown, faInfoCircle);
``` 

Please read the official Font Awesome 
[documentation](https://fontawesome.com/how-to-use/js-component-packages#vue-js) for further details.

5. Create the JSON table configuration template. 

Example: [exampleTable.json](https://github.com/laravel-enso/Examples/blob/master/src/app/Tables/Templates/exampleTable.json)

6. Create the table controller which defines the query and gives the path to the JSON template

```php
class UserTableController extends Controller
{
    use Datatable, Excel;

    protected $tableClass = UserTable::class;
}
```

Example: [TableController.php](https://github.com/laravel-enso/Examples/blob/master/src/app/Http/Controllers/TableController.php)

7. Create the table builder class, which must extend the abstract `Table` class, set the `$templatePath` variable 
and implement the `query` method

```php
class UserTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/users.json';

    public function query()
    {
        return User::select(\DB::raw(
                'users.id as "dtRowId", owners.name as owner, users.first_name, users.last_name, users.phone,
                users.email, roles.name as role, users.is_active'
            ))->join('owners', 'users.owner_id', '=', 'owners.id')
            ->join('roles', 'users.role_id', '=', 'roles.id');
    }
}
```

Example: [ExampleTable](https://github.com/laravel-enso/Examples/blob/master/src/app/Tables/Builders/ExampleTable.php) 

7. Declare the route in your route file, to present your controller's methods

```php
Route::get('init', 'TableController@init')->name('init');
Route::get('data', 'TableController@data')->name('data');
Route::get('exportExcel', 'TableController@exportExcel')->name('exportExcel');
```

Example: [web.php](https://github.com/laravel-enso/Examples/blob/master/src/routes/web.php)
   
8. Place the vue table `VueJS` component in your page/component:
```vue
<vue-table class="box"
    path="http://myapp.test/api/administration/users/initTable"
    id="users">
</vue-table>
``` 

Example: [index.blade.php](https://github.com/laravel-enso/Examples/blob/master/src/resources/views/table/index.blade.php)
 
## Usage

The Vue Data Table component works by pulling its configuration through an initialization request. 
After loading its configuration through that first request, it makes another request for pulling in its data, 
based on its configuration.

If UI changes occur that require the reload of the data (such as when searching, sorting, etc) or the loading of 
additional data, such as when changing to the next page of results, another request for data is made.

This means that the configuration is not re-read as long as the component is not re-drawn.   

For the data editor functionality (N/A), separate requests will be used.

Note: In order to make the above requests, named routes are required.

### Configuration
The package comes with with a publishable configuration file which you may update in order to fit your 
project requirements. The various options are explained below.

```php
return [
    
    'validations' => 'local',
    'labels' => [
        'crtNo'   => '#',
        'actions' => 'Actions',
    ],
    'lengthMenu' => [
        10, 15, 20, 25, 30,
    ],
    'buttons' => [
        'global' => [
            'create' => [
                'icon' => 'plus',
                'class' => 'is-success',
                'routeSuffix' => 'create',
                'event' => 'create',
                'action' => 'router',
                'label' => 'Create',
            ],
            'excel' => [
                'icon' => 'file-excel',
                'class' => null,
                'routeSuffix' => 'exportExcel',
                'event' => 'export-excel',
                'action' => 'export',
                'label' => 'Excel',
            ],
            'action' => [
                'icon' => 'check',
                'class' => null,
                'routeSuffix' => 'action',
                'event' => 'custom-action',
                'postEvent' => 'custom-action-done',
                'action' => 'ajax',
                'method' => 'PATCH',
                'label' => 'Action',
                'message' => 'Custom Action. Are you sure?',
                'confirmation' => true,
            ],
        ],
        'row' => [
            'show' => [
                'icon' => 'eye',
                'class' => 'is-success',
                'routeSuffix' => 'show',
                'event' => 'show',
                'action' => 'router',
            ],
            'edit' => [
                'icon' => 'pencil-alt',
                'class' => 'is-warning',
                'routeSuffix' => 'edit',
                'event' => 'edit',
                'action' => 'router',
            ],
            'destroy' => [
                'icon' => 'trash-alt',
                'class' => 'is-danger',
                'routeSuffix' => 'destroy',
                'event' => 'destroy',
                'action' => 'ajax',
                'method' => 'DELETE',
                'message' => 'The selected record is about to be deleted. Are you sure?',
                'confirmation' => true,
                'postEvent' => 'destroyed',
            ],
            'download' => [
                'icon' => 'cloud-download-alt',
                'class' => 'is-primary',
                'routeSuffix' => 'download',
                'event' => 'download',
                'action' => 'href',
            ],
        ],
    ],
    'style' => [
        'default' => ['hover', 'center'],
        'mapping' => [
            'left' => 'has-text-left',
            'center' => 'has-text-centered',
            'right' => 'has-text-right',
            'compact' => 'is-narrow',
            'striped' => 'is-striped',
            'bordered' => 'is-bordered',
            'hover' => 'is-hoverable',
        ],
        'highlight' => 'has-background-info',
    ],
    'export' => [
        'path' => 'exports',
        'timeout' => 500,
        'notifications' => ['broadcast', 'database'],
        'chunk' => 250,
    ],
    'queues' => [
        'exports' => 'heavy',
        'notifications' => 'notifications',
    ],
    'dateFormat' => 'd-m-Y',
    'fullInfoRecordLimit' => 100000,
    'debounce' => 100,
    'method' => 'GET',
    'dataRouteSuffix' => 'tableData',
];
```

#### validations 
is a string, values may be `always`/`local`, default `local`. When parsing the template, the given options are validated because we want to avoid misconfiguration leading to unexpected results. It makes sense to run the validator just during development, however, if you want to also run it in production, you may configure that here. 

#### labels
is an array of options for the header names of the implicit columns. Note that these labels are also translated if a translation function is given to the VueJS component, through the `i18n` parameter. Options:   
- `crtNo` is the current line number, default `#`
- `actions`, is the last table column that contains the row's buttons, default `Actions`

#### lengthMenu
is an array of numbers, default `[10, 15, 20, 25, 30]` representing the pagination options for the table. For each table's JSON template, the `lengthMenu` parameter is also available, and, if given, it will have higher priority over the global configuration. This allows for some tables to have a different pagination than the default.

#### buttons
is an array of button configurations, with 2 types:
- `global`, these buttons are the buttons that are rendered above the search input, global for the whole table, which do not depend on the data of a particular row. Defaults:
    - `create`, button for creating a new resource
    - `excel`, button for exporting the contents of the table. Note: The export process takes into account your current sorting and filtering.
    - `action`, button for applying an action to all the (filtered) table rows
- `row`, these are the buttons rendered in the `action` column, and defaults include: 
        `show`, `edit`, `destroy`, `download`

#### style
is an array of style configurations, with 2 sections:
- `default`, array of classes, default is `['hover', 'center']`, that are applied by default for all tables. Note that you should set just one alignment specific class in the default.
- `mapping`, array of configurations for the styles. While designed for/with Bulma, you may specify here custom classes in order to personalize your tables
- `highlight`, string, default is `has-background-info`, class which is applied for highlighted rows

#### export
is an array of configuration options for exporting the contents of a file. Note: The export process takes into account your current sorting and filtering. 
Also keep in mind that the export uses Jobs and Queues hence the need for a couple of the following options.
Available options:
- `path`, string, folder where the temporary export file is saved, default `exports`. This folder is expected to reside in `storage/app`
- `timeout`, number, the value for Laravel jobs timeout. You may want to tweak this depending on the time the export takes due to the server hardware or other factors 
- `chunk`, number, the size of the chunk. You may need to adjust this depending on queues and server configuration for best performance 
- `notifications`, array of notification options, default `['broadcast', 'database']`. Note that 
    email notifications are always used for sending the download link for the export file  

#### queues
Here you may configure the queues used for the export process:
Available options:
- `exports`, string, the name of the queue used for the actual export. Keep in mind this queue need to exist for your project configuration
- `notifications`, string, the name of the queue used for the real-time progress UI notifications

#### dateFormat
is a string, with the date format for date columns, which will be used when displaying date values

#### debounce
is a number, the interval value used for the server-side requests (in milliseconds)

#### method
is a either "GET" or "POST". If you're working with larger tables sometimes the URI can get too long 
and you may run in a 414 Exception. This option allows to configure the request method for fetching data 
in a local table. If specified in the table template, the local value will have higher priority over the 
global configuration.


#### fullInfoRecordLimit
is a numeric limit, representing the top result set limit when the computation of the filtered & totals functionality 
becomes disabled by default and is made available on-demand.

#### dataRouteSuffix
string, is the data route suffix used for all tables. Similar to `fullInfoRecordLimit`, you may override the 
global configuration by specifying this same parameter in the 'local' table template.

### Template

```json
{
    "routePrefix": "route.prefix",
    "dataRouteSuffix": "read.suffix",
    "name": "Table Name",
    "icon": "list-alt",
    "crtNo": true,
    "cache": true,
    "auth": false,
    "debounce": 100,
    "lengthMenu": [10, 15, 20, 25, 30],
    "method": "POST",
    "appends": ["customAttribute"],
    "selectable": false,
    "comparisonOperator": "LIKE",
    "buttons": [
        "show", "create", "edit", "destroy", "download", "exportExcel",
        {
            "type": "row",
            "icon": "bell",
            "class": "has-text-purple",
            "routeSuffix": "custom",
            "event": "custom-event",
            "action": "router",
            "fullRoute": "optional.full.route",
            "label": "Button Label",
            "confirmation": false,
            "message": "Are you sure?",
            "method": "GET/PUT/PATCH/POST/DELETE",
            "params": {
                "first": "foo",
                "second": "bar"
            }
        }
    ],
    "columns": [
        {
            "label": "Name",
            "data": "table.column",
            "name": "columnAlias",
            "meta": ["searchable", "sortable", "sort:ASC", "sort:DESC", "translatable", "boolean", "slot", "rogue", "editable", "total", "customTotal", "date", "icon", "clickable", "notExportable", "nullLast"],
            "enum": "EnumClass",
            "dateFormat": "d-m-Y",
            "tooltip": "My Tooltip Column Detail",
            "class": "is-custom-class",
            "align": "right",
            "money": {
                "symbol": "$",
                "decimal": ".",
                "thousand": ",",
                "precision": 2,
                "format": "%s%v"
            }
        }
    ]
}
```

Options:
- `routePrefix`, required, string, the common route segment, used for reading the data
- `dataRouteSuffix`, optional, string, the ending route segment, used for reading the data | default is `tableData`
- `name`, optional, string, the title used for the table. If not given, no title is used
- `icon`, optional, string or array of strings, expects Font Awesome icon classes
(make sure the used class is available in the page, via a local or global import). If not given, no icon is used
- `crtNo`, optional, boolean, flag for showing the current line number
- `cache`, optional, boolean, flag for activating the cache for the table total count 
(more information in the Caching Support section)
- `auth`, optional, boolean, flag for removing auth when using in enso context
- `debounce`, optional, number, the time in milliseconds that is used for the debounce when reloading data for the table,
 for example when typing in the search box or changing filters, default `100`
- `lengthMenu`, optional, array, list of options for the table pagination. If missing, the default values in the 
global configuration are used. If given, the template values have higher precedence over the global configuration
- `method`, optional, string, either "GET" or "POST". If missing, the default value in the 
global configuration is used.
- `appends` - optional, array, list of appended attributes that need to be added to the query results. 
Note that the appended attributes are available from the main query model.
Also note, that in order to load the appended attributes through the model's relationships, 
the raw table query should also include the foreign key id (this is a Laravel requirement).
- `selectable`, optional, boolean. If enabled, row selection is enabled, 
which then stores the selected items (the `dtRowId` attributes) in the `selected` attribute.
- `comparisonOperator`, optional, string, the operator used for the table columns searching
- `buttons`, optional, array, list of buttons that need to be rendered. See below for more in-depth information
- `columns`, required, array, list of column configurations. See below for more in-depth information

#### Buttons

There are several type of buttons, depending on how you classify them.

By configuration:
- `simple`, declared as a string, representing one of the string buttons from the config. 
Example: `"show", "create", "edit", "destroy", "download", "exportExcel"`
- `complex`, declared as an object, with several attributes.

By position:
- `row`, buttons that are rendered on each row, in the actions column. 
Example: `"show", "edit", "destroy", "download"`, or custom buttons with the `type:"row"` configuration.
- `global`, buttons that are rendered above the search input, at the top of the table VueJS component.
Example: `"create", "exportExcel"`, or custom buttons with the `type:"global"` configuration.

By action:
- `router`, buttons that trigger an action/navigation through the VueJS router, `"action": "router"`
- `href`, buttons that trigger an action/navigation through a plain HTML link
- `export`, buttons that trigger an export
- `ajax`, buttons that trigger an ajax request.

The most common configuration options for buttons are, as follows:
- `type`: required, string, available options are `row` / `global`
- `icon`: required, string, expects Font Awesome icon classes (ensure classes are available in the page)
- `class`: required, string, expects CSS styling classes
- `routeSuffix`: optional, string, if given, gets appended to the `routePrefix` template param
- `event`: optional, string, the name of an event that is emitted on click, which allows for custom in-page handling, 
outside of the table
- `postEvent`: optional, string, the name of the event that is emitted after the completion of the ajax request 
(only applies to ajax type of buttons) 
- `action`: optional, string, available options are `router` / `href` / `export` / `ajax`. 

Depending on the chosen options, other parameters could be required:
- `fullRoute`: optional, string, if given, is used independently from the `routePrefix` param
- `label`: optional, string, for both global buttons and row buttons
- `tooltip`: optional, string, should be provided only for row buttons
- `confirmation`: optional, boolean, flag for showing a confirmation modal before processing the action, such as deletion
- `message`: optional, string, used in conjunction with `confirmation`, when you want to customize the modal's message
- `method`: optional, string, should be given if you have `action` set as `ajax`, 
available options are: `"GET"` / `"PUT`" / `"PATCH`" / `"POST`" / `"DELETE`"
- `params`: optional, object, used if action = `router`, object is added to route params object

#### Columns

The columns configuration attribute is required, and expects an array of configuration objects. 
Each configuration object may have the following attributes:
- `label`, required, string, the column name used in the table header. This will be translated if a translation function 
is available. 
- `data`, required, string, the table + column wherefrom data gets pulled, in the query. For example 'users.email'
- `name`, required, string, the alias for that column's data, given in the select query. Alternatively you may also use here nested properties - see the notes below for more info
- `enum`, optional, string, the class name of the enumeration used to transform/map the values of that column/attribute. 
For example, you may use this mechanism to show labels instead of integer values, for an attribute that holds 
the type for a model/table.
- `dateFormat`, string, with the date format for date columns, overrides the default from config
- `tooltip`, optional, the text used for this column header's tooltip  
- `class`, optional, will be applied on the table's `<td>`
- `align`, optional, a value in ["left", "center", "right"], will be applied to the column including header and footer. 
It has higher priority than the global template `align` attribute
- `meta`, optional, array of string tags/options, allowing further transformations:
    - `searchable`, optional, marks this column as searchable. If not searchable, a column is not used when 
    using the table search functionality 
    - `sortable`, optional, marks this column as sortable. If not sortable, the controls to sort are 
    not available for sorting
    - `sort:ASC` / `sort:DESC`, optional, specifies the default sort for this column. 
    Note that after the initial load, the user will have the option to override the sorting as needed
    - `nullLast`, optional, makes the sorting on this column sort all null values last
    - `translation`, optional, marks this column's values as translatable
    The `i18n` parameter translation function should be given to the VueJS table component in order for this to work -
    inside of Enso, this is done automatically
    - `boolean`, optional, marks this column as boolean, which means it will be rendered as such
    - `slot`, optional, renders a scoped slot named after the specified column, exposing as props `column` (object), `row` (array) and `loading` (boolean)
    - `rogue`, optional, marks this column as a rogue column. This marks the column as hidden for display, 
    while still being available and used for searching
    - `total`, optional, if flagged, calculates a total for this column 
    - `customTotal`, optional, renders a scoped slot named `${columnName}_custom_total` exposing as props `total` (object) and `column` (object)
    - `date`, optional, marks the data of the column as dates, 
    - `icon`, optional, if given, it renders a Font Awesome 5 icon as contents, using the 'column.icon' as the icon's class   
    - `clickable`, optional, flags the column as clickable, which means it makes it - you guessed it - clickable. 
    When clicked, it emits the `clicked` event, with the column & row as event payload
    - `notExportable`, optional, flags the column to be skipped on exports
- `money`, optional, object, is the configuration object used for formatting numbers as money values. 
Since this is achieved via the accounting.js library, you should take a look at its documentation 
[here](http://openexchangerates.github.io/accounting.js/#documentation)  
 
#### The name attribute and nested properties

Since the 1.5.7 package version, it has become possible to use nested models properties for the `name` attribute. For example,
 for the [users table template](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Templates/users.json), 
 you could update the entity section to:
 
```json
    {
        "label": "Group",
        "name": "group.name",
        "data": "",
        "meta": []
    }
```
    
  and in the [table builder class](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Builders/UserTable.php) update the select query to:
  
```php
    return User::select(\DB::raw(
        'users.id, users.id as "dtRowId", avatars.id as avatarId, group_id,
        people.name, people.appellative, people.phone, users.email, roles.name as role,
        users.is_active, users.created_at'
    ))->join('people', 'users.person_id', '=', 'people.id')
    //->join('user_groups', 'users.group_id', '=', 'user_groups.id')
    ->with('group')
    ->join('roles', 'users.role_id', '=', 'roles.id')
    ->leftJoin('avatars', 'users.id', '=', 'avatars.user_id');
```
    
You may notice a few things here:
- the `name` attribute value is the nested model name + property
- a `data` value is no longer required
- the `meta` attribute value's list can no longer contain "searchable", "sortable". If you do give these options, 
the template validator will let you know that you should remove them
- in order for the relationship to work, make sure the select includes any required foreign keys i.e. 
if you'd leave out `owner_id`, the value of the returned owner attribute would be `null`
- also, don't forget to load the relationship, using the query builder's `with` method 
- this feature makes sense for 1-1 model relationships, not so much for 1-n relationships
- note that all the nested model's properties will be present in the returned data and depending you your situation, 
this might be inefficient
- if you require searching and sorting, build the required query with joins and specify the value for the `data` attribute

### Notes on exporting
The new exporting feature used in this package allows for the export of practically unlimited number or rows 
(or, to be more accurate, the number of rows is limited by the `xlsx` format).

In order to achieve this, Laravel queues and jobs are used, so it is mandatory to:
- have the Laravel queueing functionality properly setup and working
- make sure the queues specified in the `enso.datatable.exports` config also exist in your Laravel `queue` config
- ensure you're using values fitting your project and hardware for:
    * `enso.datatable.exports.timeout` - this is the job timeout, so you should have an interval longer than your longest job
    * `queues.connections.yourConnection.retry_after` - this is the interval used by Laravel to mark a job as failed, 
    if it's not completed by then. This interval should also be longer than your longest running job.
    

### The VueJS Component

The `VueTable` component takes the following parameters:
- `id`, required, string, identification for this table, is used to store the preferences in the browser's local storage
- `path`, required, string, the URI for the table initialization request
- `filters`, optional, object, reactive options that, if available, are sent along with the getTableData request and 
are used to filter results. Note that the selected values for the filters may be a value or an array 
(in which case a `WHERE IN` logic is applied when filtering)
- `params`, optional, object, reactive parameters, that, if available, are sent along with the getTableData request and 
are be used to filter results
- `intervals`, optional, object, reactive parameters, that, if available are used for interval filtering of the results
- `i18n`, optional, function, that is used for translating labels, headers, and table data 
The default value (function) for this parameter simply returns its argument as the translated value if used outside of 
Enso while within Enso it will use its translation function. 

Examples:

- `filters` - reactive object of the following format
```js
"filters": {
    "table": {
        "field_1" : '',
        "field_2" : '',
    }
}
```
- `params` - extra parameters sent to the back-end for custom logic / queries
```js
"params": {
    "orders": {
        dispatched: ''
    }
}
```
- `intervals` - where `dbDateFormat` is REQUIRED if the filter values are dates. The given format has to match the database date format
```js
"intervalFilters": {
    "table":{
        "created_at": {
            "min":"value",
            "max":"value",
            "dbDateFormat": "Y-m-d"
        },
        "amount": {
        "min": 0,
        "max": 1000
        }
    }
}
```

#### Methods
Although for the most part, these are niche cases, you may use the methods available on the `vue-table` component to  
perform additional actions.

One such example is the highlight functionality, with the next methods:
* `highlight(dtRowId)` - takes the id of a row and highlights it, using the class given in the global datatable configuration
* `clearHighlighted()` - clears all the highlighted items

### The Events
For integration with other in-page components, the datatable component can emit several events, 
depending on the configuration:
- `draw`, with no payload, after each retrieval of the table data, such as when first loading the initial chunk, 
    when loading the next 'page' of data, when reloading after a filter has changed, etc.
- `input`, with the search input as payload, when using the search box
- `update-length`, with the selected length, when changing the pagination length
- `update-visibility`, with no payload, when changing the columns visibility 
- `reload`, with no payload, when reloading the table   
- `reset`, with no payload, when resetting the table preferences
- `request-full-info`, with no payload, when clicking on the button that loads all information for a table working with a huge data set
- `clicked`, with the column and the whole row as payload, when clicking on a clickable table cell, 
    as configured in the template (also see the Columns section above)
- `update-selected`, with the payload containing all the selected items, when selecting/deselecting an item
- `select-page`, with the payload containing true if it was a selection, false otherwise, 
when selecting/deselecting an entire page
- custom events, with no payload, for `ajax` type of buttons, 
    as configured in the template (also see the Buttons section above). 
- custom events, with the entire row the button is positioned on as payload, 
    for buttons that have a meta event property (the even name is the property value)

### The query

In your TableBuilder implementation, the query must look like this:

```php
public function query()
{
    return UserGroup::select(\DB::raw('id as "dtRowId", id, name, description, is_active, created_at'));
}
```

Keep in mind that at this stage, we're returning a `QueryBuilder` not a collection of results.

If you need custom logic based on the request you have a `request()` getter available in the TableBuilder.

### Actions

While you may have action buttons on each table row, sometimes you may wish to have custom actions, for the entire 
result set of the table.

It is important to note that the action will be applied for **ALL** the **FILTERED** results, 
even the ones that might not be visible on the current page of the table (if there is more than one page).

Also, keep in mind that if the `selectable` option is active in table template, the selection is decoupled from 
the actions, so, same as before, the action is applied to all the filtered table results.

#### In-depth example

In order to achieve this functionality, we've included an example below, 
where we add a new button for the owners table:

1. Update your table JSON template, to include the button(s) for the action(s)
```php
...
"buttons": [
        "excel", "create", "edit", "destroy",
        {
            "type": "global",
            "icon": "check",
            "class": null,
            "routeSuffix": "myAction",
            "event": "custom-action",
            "postEvent": "custom-action-done",
            "action": "ajax",
            "method": "PATCH",
            "label": "My Action"
        }
]
...    
```
    
Customize the attributes as required, keeping in mind:
- the method should match the action performed and needs to be the same as when defining the route
- the suffix is what you'll need to use when defining the route (more on that below)

Note that, if needed, you may define several buttons in a similar fashion.
    
2. Add a new `Action` implementation class, where you actually process the results.
        
```php
class UserGroupMyAction extends Action
{

    public function process()
    {
        \Log::info($this->data());
    }
}
```
    
This needs to extend the abstract `LaravelEnso\VueDatatable\app\Classes\Action` class, 
and implement the `process` method.  The process method will be called for each available row of data.

Depending on your requirements, you may do the processing here or even generate jobs that will do the processing 
asynchronously.  
      
3. Add a new controller for the action
```php
class UserGroupMyActionController extends Controller
{
    use Datatable, Action;

    protected $tableClass = UserGroupTable::class;
    protected $actionClass = UserGroupMyAction::class;
}
```

The controller manages the VueJS component's action request.
You require:
* the `Datatable` and `Action` trait
* the `$tableClass` variable, for the query
* the `$actionClass` variable, for your particular action implementation (from step 2)

Note that you may also reuse your TableController if you prefer and have only one 'action' for a given table.

#### Additional Advanced Details
The `Action` trait defines an `action` method that is a bit of a wrapper, and looks like this:
```php
public function action(Request $request)
    {
        public function action(Request $request)
            {
                (new $this->actionClass(
                    $this->tableClass, $request->all()
                ))->run();
            }
    }
```

If for any reason you want to handle more than one action through the same controller, 
you may declare multiple actionClasses and create multiple action methods in conjunction with the proper routes.  

4. Add the new route
```php
Route::patch('myAction', 'UserGroupMyActionController@action')
                            ->name('myAction');
```

Remember to place the route nested correctly, considering the possible uri and route name prefixes, 
as well as the controller namespace.

In this example, the url called for the UserGroups table will be 'administration/userGroups/myAction' and 
the name of the route will be 'administration.userGroups.myAction'.
    
5. Create the new permission
    Navigate in the app to `system/permissions` and add the new `administration.userGroups.myAction` permission.

6. That's it.

#### The default action button

If you take a look the package config file, you'll notice that there already is a global action button defined.
If you want to use it, you make skip the definition of a button at #1 step above, instead just declare `"action"` 
and continue with the other steps, taking into account the 
changed suffix (the route and permissions need to be altered).

#### Defining reusable action buttons

Similarly to the default action button, you may define other 'global' action buttons in the datable configuration, 
that can then be used as needed in any table templates in your project.

### Configurable huge result set management
When you have huge result sets, the table component will take longer to respond to the user input. In order to improve 
the user experience, when we have more results than the limit set in the configuration (in the `fullInfoRecordLimit` key),
the back-end builder no longer computes the number of filtered records and totals for that table.

However, a blue information icon becomes available in the list of table buttons, that allows the user to
request this computed information.

Since this is an extreme case with tables this big and is a seldom situation, the configuration for the limit is global.

### Caching support

We've had cases in production where we need to work with over 2 million results and every performance bit we can get
is welcome.

When the table displays data, if we want to show pagination, we need to execute the main query twice: 
once to retrieve the current chunk of data, and then once more to count the results.

By caching the number of results we can skip counting the results and save time for each request. The more records you 
work with, the bigger the gain the difference.

In order to activate this feature, in the table template, add the `cache` option and set it to true.
```json
...
"method": "POST",
"crtNo": true,
"cache": true,
...
```

On the next request, if the total count information is not in the cache, it will be computed and also cached for 1 hour.

You should always use this only in combination with the `TableCache` trait on the table's main model. The trait will handle the cache invalidation when a model is created or deleted. To do so add the trait and set `protected $cachedTable` property value to the id of your `vue-table` component. 

### Further Examples

You may see the vue data table in action, with the code for the UserGroups page, right here:
- [table builder](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Builders/UserGroupTable.php)
- [table template](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Templates/userGroups.json)
- [data controller](https://github.com/laravel-enso/Core/blob/master/src/app/Http/Controllers/Administration/UserGroup/UserGroupTableController.php)
- [front-end vue page](https://github.com/laravel-enso/Enso/blob/master/resources/js/pages/administration/userGroups/Index.vue)
- [live result](https://www.laravel-enso.com/administration/userGroups/) (if you're not already logged in, use `admin@laravel-enso.com` and `password`)

Feel free to look around at the various packages in the [laravel-enso](https://github.com/laravel-enso) repository, to find more examples.
 

## Publishes

- `php artisan vendor:publish --tag=vuedatatable-config` - the component configuration
- `php artisan vendor:publish --tag=vuedatatable-classes` - the example table json config and builder 
- `php artisan vendor:publish --tag=vuedatatable-assets` - all the VueJS components and assets
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS components,
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=vuedatatable-mail` - the templates used for notifications
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the templates 
used for notifications

## Notes
The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

We've tried to make it as light as possible and use the minimum amount of external libraries and dependencies.
Therefore, the package depends just on:
 - [Spout](https://github.com/box/spout) for fast & efficient xlsx exports 
 - [lodash](https://github.com/lodash/lodash) for debouncing & throttling, using selective imports
 - [Font Awesome 5](https://fontawesome.com/) for the icons
 - [Akryum v-tooltip](https://github.com/Akryum/v-tooltip) for displaying tooltips
 - [Css element queries - resize detector](https://github.com/marcj/css-element-queries) for the table responsiveness
 - [accounting.js](http://openexchangerates.github.io/accounting.js/) for formatting numbers as money values

Internally, the package depends on (this applies when used outside of Enso):
 - [DataExport](https://github.com/laravel-enso/DataExport) for exporting results
 - [Helpers](https://github.com/laravel-enso/Helpers) for utility classes
 - [VueComponents](https://github.com/laravel-enso/VueComponents) various sub-resources used for the front-end
