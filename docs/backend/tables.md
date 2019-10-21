---
sidebarDepth: 3
---

# Tables

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a3cf79a9ca584f08b3be0246cb488788)](https://www.codacy.com/app/laravel-enso/tables?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/tables&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/111688250/shield?branch=master)](https://github.styleci.io/repos/111688250)
[![License](https://poser.pugx.org/laravel-enso/tables/license)](https://packagist.org/packages/laravel-enso/tables)
[![Total Downloads](https://poser.pugx.org/laravel-enso/tables/downloads)](https://packagist.org/packages/laravel-enso/tables)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/tables/version)](https://packagist.org/packages/laravel-enso/tables)

Data Table package with server-side processing, unlimited exporting and VueJS components. 
Quickly build any complex table based on a JSON template.

This package can work independently of the 
[Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this API are present in the 
[tables](https://github.com/enso-ui/tables) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/tables/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/tables/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

[![Themed screenshot](https://laravel-enso.github.io/tables/screenshots/bulma_002_thumb.png)](https://laravel-enso.github.io/tables/videos/bulma_demo_02.mp4)

<sup>click on the photo to view an **export** demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso. 

To install outside of Enso:

1. install the package `composer require laravel-enso/tables` 

2. if needed, publish and customize the config: `php artisan vendor:publish --tag=tables-config`

3. install front end for the API implementation for the package - [tables](https://github.com/enso-ui/tables). 
Be sure to check out the front end's docs [here](https://docs.laravel-enso.com/frontend/tables.html).

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
- configurable column alignment from the template: left / center / right
- preferences/state save for each table in the browser's localStorage
- server-side Excel exporting of the table data, using your current sorting and filtering choices, 
with email notification and optional push notifications.
    The export supports a practically unlimited data-set and features real time progress reporting 
    in the interface
- reloading of data on demand
- resetting of the filters, ordering, etc
- smart management of huge data-sets, with configurable limit
- possibility to define actions that apply to the entire, filtered, dataset
- Enso Enum computation
- Laravel accessors for the main query model
- the configuration template for each table has been designed to be as light and straightforward 
as possible without losing out on features
- caching support for speeding up the retrieval of data
- thorough validation of the JSON template with developer friendly messages, 
in order to avoid misconfiguration issues
- Eloquent query friendly with the possibility to easily display nested models attribute values
- can be used independently of the Enso ecosystem
- requests front-end - back-end communication is as optimized as possible, while caching 
is utilized where it makes sense

### In the future

- PDF export alongside the XLSX report 

## Usage

The VueJS Data Table component works by pulling its configuration through an initialization request. 
After loading its configuration through that first request, it makes another request for pulling in its data, 
based on its configuration.

If UI changes occur that require the reload of the data (such as when searching, sorting, etc) 
or the loading of additional data, such as when changing to the next page of results, 
another request for data is made.

This means that the configuration is not re-read as long as the component is not re-drawn.   

Note: In order to make the above requests, named routes are required.

Steps:

1. Create the JSON table configuration template. 

Example: [permissions.json](https://github.com/laravel-enso/permissions/blob/master/src/app/Tables/Templates/permissions.json)

2. Create the init table controller which specifies which table builder class is to be used.

    ```php
    use LaravelEnso\Tables\app\Traits\Init;
    use LaravelEnso\Permissions\app\Tables\Builders\PermissionTable;
   
    class InitTable extends Controller
    {
        use Init;
        protected $tableClass = PermissionTable::class;
    }
    ```

    Example: [TableController.php](https://github.com/laravel-enso/permissions/blob/master/src/app/Http/Controllers/InitTable.php)
    
    Note the use of the `Init` trait that should be imported from the `LaravelEnso\Tables` package.

3. Create the table data controller which is used to fetch the data for the front-end:

    ```php
    use LaravelEnso\Tables\app\Traits\Data;
    use LaravelEnso\Permissions\app\Tables\Builders\PermissionTable;
   
    class TableData extends Controller
    {
        use Data;
    
        protected $tableClass = PermissionTable::class;
    }
    ```

    Example: [TableData.php](https://github.com/laravel-enso/permissions/blob/master/src/app/Http/Controllers/TableData.php)
    
    The `$tableClass` value used here is the same as the one from the previous step.
    
    Note the use of the `Data` trait that should be imported from the `LaravelEnso\Tables` package.

4. OPTIONAL: If you plan to have the data from the table exportable from the interface, you may create 
a third controller used in this case:

    ```php
    use LaravelEnso\Tables\app\Traits\Excel;
    use LaravelEnso\Permissions\app\Tables\Builders\PermissionTable;
   
    class ExportExcel extends Controller
    {
        use Excel;
    
        protected $tableClass = PermissionTable::class;
    }
    ```

5. Create the table builder class, which must implement the `Table` contract, 
thus requiring the `query()` and the `templatePath()` methods. 

    In the example below we're using a pattern where we're also utilizing a `$templatePath` constant 
    for better readability as well as making it easier to extend the class, if required. 

    ```php
    use LaravelEnso\Tables\app\Contracts\Table;
   
    class PermissionTable implements Table
    {
        protected const TemplatePath = __DIR__.'/../Templates/permissions.json';
        public function query(): Builder
        {
            return Permission::selectRaw('
                permissions.id, permissions.name, permissions.description,
                permissions.type, permissions.created_at, permissions.is_default
            ');
        }
        public function templatePath(): string
        {
            return static::TemplatePath;
        }
    }
    ```

Example: [PermissionTable](https://github.com/laravel-enso/permissions/blob/master/src/app/Tables/Builders/PermissionTable.php) 

6. Declare the route(s) in your routes file, to make available your controller's methods
    
    ```php
    Route::get('initTable', 'InitTable')->name('initTable');
    Route::get('tableData', 'TableData')->name('tableData');
    Route::get('exportExcel', 'ExportExcel')->name('exportExcel');
    ```

    Example: [api.php](https://github.com/laravel-enso/permissions/blob/master/src/routes/api.php)
   
5. Import and place place the `VueTable` VueJS component in your page/component and pass it the necessary properties. 
Within the Enso ecosystem, you may use instead the `EnsoTable` component which requires fewer parameters as it uses 
Enso specific defaults. 

EnsoTable example: [index.vue](https://github.com/enso-ui/permissions/blob/master/src/bulma/pages/permissions/Index.vue)

VueTable example: [index.blade.php](https://github.com/laravel-enso/Examples/blob/master/src/resources/views/table/index.blade.php)

### Advanced Usage

For most use cases, if you want to filter the results in your tables, it is enough to add the desired 
columns in your template, mark them as searchable, and start typing in the UI search box.

In a similar fashion, if you want to compute totals for numeric columns, mark the desired columns as
having totals and you're set.

For both cases, totals are applied, results are filtered and the row count is properly computed.

For more complex scenarios, where you might need to alter the query depending on other parameters,
use complicated raw queries, etc. there are optional interfaces available for the table builder class.   

#### CustomFilter

There will be cases when you'll want to add filters for a table and perform a query with extra 
clauses, depending on what the user chooses for those filters.

You could, conditionally build your main table query (the one from your `query()` method) 
depending on what parameters you get in your request, but in that case the Tables package logic 
wouldn't know you're actually applying a filter, since you'd be modifying the query; as consequence,
the reported count would be incorrect.

The proper way to apply filters is to have your builder class implement the `CustomFilter` interface,
and the two required methods:
- `filterApplies(Obj $params): bool`
- `filter(Builder $query, Obj $params)`

The `filterApplies(Obj $params): bool` method receives the $params property from the request and
should check return `true` when filters are to be applied. 

For example:
```php
public function filterApplies(Obj $params): bool
{
    return $params->filled('is_expired');
}
```

The `filter(Builder $query, Obj $params)` receives the resulted query builder from 
the main `query()` method as well as the request params, and should be used to 
actually add the filters.

For example:
```php
public function filter(Builder $query, Obj $params)
{
    $query->when($params->get('is_expired') === true, function ($query) {
        $query->whereNotNull('expired_at');
    })->when($params->get('is_expired') === false, function ($query) {
        $query->whereNull('expired_at');
    });
}
```

#### RawTotal

The `RawTotal` interface demands the implementation of the `rawTotal(Obj $column): string`
public method.

The method should return a raw query string that would compute the desired total.

The Tables logic will then use this query string and apply it at the proper moment in the data request 
lifecycle.

Note that in this case, you'll also want to add the `"rawTotal"` value to the `"meta"`
section of you column's json configuration template. 

#### AuthenticatesOnExport

The `AuthenticatesOnExport` marker interface is to be used on table builder classes 
where it is mandatory to have available the user requesting the export within the export 
flow. This could be useful in cases where the export is different depending on the 
principal user.

### Configuration
The package comes with a publishable configuration file which you may update in order to fit your 
project requirements. The various options are explained below.

```php
return [
    'cache' => [
        'template' => 'production',
        'count' => true,
        'prefix' => 'enso:tables',
        'tag' => 'enso:tables',
    ],

    'validations' => 'local',

    'dtRowId' => 'id',

    'labels' => [
        'crtNo' => '#',
        'actions' => 'Actions',
    ],

    'lengthMenu' => [
        10, 15, 20, 25, 30,
    ],

    'buttons' => [
        'global' => [
            'create' => [
                'icon' => 'plus',
                'class' => null,
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
                'class' => 'is-row-button',
                'routeSuffix' => 'show',
                'event' => 'show',
                'action' => 'router',
            ],
            'edit' => [
                'icon' => 'pencil-alt',
                'class' => 'is-row-button',
                'routeSuffix' => 'edit',
                'event' => 'edit',
                'action' => 'router',
            ],
            'destroy' => [
                'icon' => 'trash-alt',
                'class' => 'is-row-button',
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
                'class' => 'is-row-button',
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

    'controls' => ['length', 'columns', 'style', 'reload', 'reset'],

    'export' => [
        'path' => 'exports',
        'timeout' => 60 * 60,
        'sheetLimit' => 1000000,
        'notifications' => ['email', 'broadcast', 'database'],
    ],

    'queues' => [
        'exports' => 'heavy',
        'notifications' => 'notifications',
    ],

    'dateFormat' => 'd-m-Y',

    'fullInfoRecordLimit' => 1000000,

    'debounce' => 350,

    'responsive' => true,

    'method' => 'GET',

    'dataRouteSuffix' => 'tableData',

    'comparisonOperator' => 'LIKE',

    'searchModes' => ['full', 'startsWith', 'endsWith'],

    'searchMode' => 'startsWith',
];
```

#### cache
A few cache-related options are available:
- `template`, is a string, values may be `never`/`always`/`production`/`local`/`yourEnvironment`,
    default is `production`
    Caching the template will improve the overall table loading and update.
    
    Note that it is recommended that during deployment you add a step where you call the
    `php artisan enso:tables:clear` command in order to clear the cached templates, otherwise you
    might not see any changes or have issues until the cache expires. 

- `count`, is a boolean, default is `true`. When counting the number of results for the table,  
    a count query has to be performed and for costly queries there can be quite a performance improvement
    if the count result is cached.
    
    Note that if caching the count, you should use the `TableCache` trait on the main/base model,
    so that the count cache is invalidated if when a model is created or deleted.

- `prefix`, is a string, default is `enso:tables`. This is the prefix used by the caching engine.
- `tag`, is a string, default is `enso:tables`. This is the tag used by the caching engine.

#### validations
is a string, values may be `always`/`local`/`yourEnvironment`, default `local`. 
When parsing the template, the given options are validated because we want to avoid misconfiguration 
leading to unexpected results. It makes sense to run the validator just during development, 
however, if you want to also run it in production, you may configure that here. 

#### dtRowId
is a string, default is `'id'`. This is the id attribute's name used internally by the table package,
and is required for routing and actions.  

#### labels
is an array of options for the header names of the implicit columns. 
Note that these labels are also translated if a translation function is given to the VueJS component, 
through the `i18n` parameter. Options:   
- `crtNo` is the current line number, default `#`
- `actions`, is the last table column that contains the row's buttons, default `Actions`

#### lengthMenu
is an array of numbers, default `[10, 15, 20, 25, 30]` representing the pagination options for the table. 
For each table's JSON template, the `lengthMenu` parameter is also available, and, if given, 
it will have higher priority over the global configuration. 
This allows for some tables to have a different pagination than the default.

#### buttons
is an array of button configurations, with 2 types:
- `global`, these buttons are the buttons that are rendered above the above the actual rows, 
global for the whole table, which do not depend on the data of a particular row. Defaults:
    - `create`, button for creating a new resource
    - `excel`, button for exporting the contents of the table. Note: The export process takes into account your current sorting and filtering.
    - `action`, button for applying an action to all the (filtered) table rows
- `row`, these are the buttons rendered in the `action` column, and the defaults include: 
    - `show`, 
    - `edit`, 
    - `destroy`, 
    - `download`

#### style
is an array of style configurations, with 3 sections:
- `default`, array of classes, default is `['hover', 'center']`, that are applied by default 
for all tables. Note that you should set just one alignment specific class in the default.
- `mapping`, array of configurations for the styles. 
While designed for/with Bulma, you may specify here custom classes in order to personalize your tables
- `highlight`, string, default is `has-background-info`, class which is applied for highlighted rows

#### controls
is an array, with the types of controls available for all tables. By default all controls are present:
- `length`, 
- `columns`, 
- `style`, 
- `reload`, 
- `reset`

    Note that this option can be configured for each table, within the JSON template, in which case
    the 'local' configuration has priority. 

#### export
is an array of configuration options for exporting the contents of a file. 
Note: The export process takes into account your current sorting and filtering. 
Also keep in mind that the export uses Jobs and Queues hence the need for a couple of the following options.

Available options:
- `path`, string, folder where the temporary export file is saved, default `exports`. 
This folder is expected to reside in `storage/app`
- `timeout`, number, the value for Laravel jobs timeout, default is `60 * 60`
You may want to tweak this depending on the time the export takes due to the server hardware or 
other factors.
- `sheetLimit`, number, default is `1000000`, the maximum rows per sheet. If the export contains more rows, 
they are added to the next sheet(s).
- `notifications`, array of notification options, default `['mail', 'broadcast', 'database']`. Note that 
    email notifications are used for sending the download link for the export file  

#### queues
Here you may configure the queues used for the export process:
Available options:
- `exports`, string, default `heavy`, the name of the queue used for the actual export. 
Keep in mind this queue need to exist for your project configuration
- `notifications`, string, default `notifications`, 
the name of the queue used for the real-time progress UI notifications

#### dateFormat
is a string, default `'d-m-Y'`, the date format for date columns, 
which will be used when displaying date values

#### debounce
is a number, default `350`, the interval value used for the server-side requests (in milliseconds)

#### fullInfoRecordLimit
is a numeric limit, default `1000000`, representing the top result set limit 
beyond which the computation of the filtered & totals functionality 
becomes disabled by default and is made available on-demand.

#### responsive
is a boolean, default `true`, determines if the table is responsive 
(automatically hides columns when its width it wider than available)

#### method
is a string, default is `'GET'`, values can be either `'GET'` or `'POST'`. 
If you're working with larger tables 
sometimes the URI can get too long and you may run into a 414 Exception. 
This option allows to configure the request method for fetching data in a local table. 
If specified in the table template, the local value will have higher priority over the 
global configuration.

#### dataRouteSuffix
is a string, default is `'tableData'`, the data route suffix used for all tables. 
Similar to `fullInfoRecordLimit`, you may override the global configuration 
by specifying this same parameter in the 'local' table template.

#### comparisonOperator
is a string, default is `'LIKE'`, the default comparison operator used when searching. You may override the 
global configuration by specifying this same parameter in the 'local' table template. 
Valid values are `LIKE`, `ILIKE`. 

#### searchModes
is an array, default is `['full', 'startsWith', 'endsWith']`, configures the type of searching available
to the user when typing a search string into table's search box.

#### searchMode
is a string, default is `'startsWith'`, represents the default search mode and must be enabled in the above
configuration. It can be overridden within each 'local' table template.

### Template

```json
{
    "routePrefix": "route.prefix",
    "dataRouteSuffix": "read.suffix",
    "name": "Table Name",
    "crtNo": true,
    "preview": true,
    "flatten": false,
    "auth": false,
    "debounce": 100,
    "lengthMenu": [10, 15, 20, 25, 30],
    "method": "POST",
    "appends": ["customAttribute"],
    "selectable": false,
    "comparisonOperator": "LIKE",
    "controls": [ "length", "columns", "style", "reload", "reset" ],
    "buttons": [
        "show", "create", "edit", "destroy", "download", "exportExcel",
        {
            "type": "row",
            "icon": "bell",
            "class": "has-text-purple",
            "routeSuffix": "custom",
            "event": "custom-event",
            "postEvent": "custom-post-event",
            "action": "router",
            "fullRoute": "optional.full.route",
            "label": "Button Label",
            "tooltip": "Tooltip", 
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
            "meta": ["searchable", "sortable", "sort:ASC", "sort:DESC", "translatable", "boolean", "slot", "rogue", "total", "customTotal", "date", "icon", "clickable", "notExportable", "nullLast"],
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
- `dataRouteSuffix`, optional, string, default `tableData`, the ending route segment, used for reading the data
- `name`, optional, string, the title used for the table export. If not given, no title is used
- `crtNo`, optional, boolean, flag for showing the current line number
- `preview`, optional, boolean, flag for activating the row preview option / column
(more information in the Preview Support section) 
- `flatten`, optional, boolean, flag for flattening the response, allowing columns like "user.person.name" in the template
- `auth`, optional, boolean, flag for removing auth when using in enso context
- `debounce`, optional, number, default `100`, the time in milliseconds that is used for the debounce 
when reloading data for the table, for example when typing in the search box or changing filters
- `lengthMenu`, optional, array, list of options for the table pagination. If missing, the default values in the 
global configuration are used. If given, the template values have higher precedence over the global configuration
- `method`, optional, string, either "GET" or "POST". If missing, the default value in the 
global configuration is used.
- `appends` - optional, array, list of appended attributes that need to be added to the query results. 
Note that the appended attributes are available from the main query model.
Also note, that in order to load the appended attributes through the model's relationships, 
the raw table query should also include the foreign key id (this is a Laravel requirement).
- `selectable`, optional, boolean. If enabled, row selection is enabled, 
which then stores the selected items (the `id` attributes) in the `selected` attribute.
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
- `event`: optional, string, the name of an event that is emitted on click, 
    which allows for custom in-page handling, outside of the table
- `postEvent`: optional, string, the name of the event that is emitted 
    after the completion of the ajax request (only applies to ajax type of buttons) 
- `action`: optional, string, available options are `router` / `href` / `export` / `ajax`. 

Depending on the chosen options, other parameters could be required:
- `fullRoute`: optional, string, if given, is used independently from the `routePrefix` param
- `label`: optional, string, for both global buttons and row buttons
- `tooltip`: optional, string, should be provided only for row buttons
- `confirmation`: optional, boolean, flag for showing a confirmation modal before processing the action, 
    such as deletion
- `message`: optional, string, used in conjunction with `confirmation`, 
    when you want to customize the modal's message
- `method`: optional, string, should be given if you have `action` set as `ajax`, 
    available options are: `"GET"` / `"PUT`" / `"PATCH`" / `"POST`" / `"DELETE`"
- `params`: optional, object, used if action = `router`, object is added to route params object

#### Columns

The columns configuration attribute is required, and expects an array of configuration objects. 
Each configuration object may have the following attributes:
- `label`, required, string, the column name used in the table header. 
    This will be translated if a translation function is available. 
- `data`, required, string, the table + column wherefrom data gets pulled, in the query. 
    For example 'users.email'
- `name`, required, string, the alias for that column's data, given in the select query. 
    Alternatively you may also use here nested properties - see the notes below for more info
- `enum`, optional, string, the class name of the enumeration used to transform/map 
    the values of that column/attribute. For example, you may use this mechanism to show labels 
    instead of integer values, for an attribute that holds the type for a model/table.
- `dateFormat`, string, with the date format for date columns, overrides the default from config
- `tooltip`, optional, the text used for this column header's tooltip  
- `class`, optional, will be applied on the table's `<td>`
- `align`, optional, a value in ["left", "center", "right"], will be applied to the column including 
    header and footer. It has higher priority than the global template `align` attribute
- `meta`, optional, array of string tags/options, allowing further transformations:
    - `searchable`, optional, marks this column as searchable. If not searchable, a column is not used when 
    using the table search functionality 
    - `sortable`, optional, marks this column as sortable. If not sortable, the controls to sort are 
    not available for sorting
    - `sort:ASC` / `sort:DESC`, optional, specifies the default sort for this column. 
    Note that after the initial load, the user will have the option to override the sorting as needed
    - `nullLast`, optional, makes the sorting on this column sort all null values last
    - `translatable`, optional, marks this column's values as translatable
    The `i18n` parameter translation function should be given to the VueJS table component 
    in order for this to work - within the Enso ecosystem, this is done automatically
    - `boolean`, optional, marks this column as boolean, which means it will be rendered as such
    - `slot`, optional, renders a scoped slot named after the specified column, 
        exposing as props `column` (object), `row` (array) and `loading` (boolean)
    - `rogue`, optional, marks this column as a rogue column. This means the column is hidden for display, 
    while still being available and used for searching
    - `total`, optional, if flagged, calculates a total for this column 
    - `customTotal`, optional, renders a scoped slot named `${columnName}_custom_total` 
        exposing as props `total` (object) and `column` (object)
    - `date`, optional, marks the data of the column as dates, 
    - `icon`, optional, if given, it renders a Font Awesome 5 icon as contents, 
        using the 'column.icon' as the icon's class   
    - `clickable`, optional, flags the column as clickable, which means it makes it - you guessed it - clickable. 
    When clicked, it emits the `clicked` event, with the column & row as event payload
    - `notExportable`, optional, flags the column to be skipped on exports
- `money`, optional, object, is the configuration object used for formatting numbers as money values. 
    Since this is achieved via the `accounting.js` library, you should take a look at its documentation 
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
        'users.id, avatars.id as avatarId, group_id,
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
- the `meta` attribute value's list can no longer contain "searchable", "sortable". 
    If you do give these options, the template validator will let you know that you should remove them
- in order for the relationship to work, make sure the select includes any required foreign keys i.e. 
    if you'd leave out `group_id`, the value of the returned group attribute would be `null`
- also, don't forget to load the relationship, using the query builder's `with` method 
- this feature makes sense for 1-1 model relationships, not so much for 1-n relationships
- note that all the nested model's properties will be present in the returned data and depending you your situation, 
    this might be inefficient
- if you require searching and sorting, build the required query with joins and specify the value for the `data` attribute

### Notes on exporting (Excel)
The new exporting feature used in this package allows for the export of practically unlimited 
number or rows (or, to be more accurate, the number of rows is limited by the `xlsx` format).

In order to achieve this, Laravel queues, jobs and mails are used, so it is mandatory to:
- have the Laravel queueing functionality properly setup and working
- make sure the queues specified in the `enso.datatable.queues.exports` config also exist in your 
    Laravel `queue` config
- ensure you're using values fitting your project and hardware for:
    * `enso.datatable.export.timeout` - this is the job timeout, so you should have an 
        interval longer than your longest job
    * `queues.connections.yourConnection.retry_after` - this is the interval used by Laravel 
        to mark a job as failed, if it's not completed by then. This interval should also be longer 
        than your longest running job.
- make sure there is a valid configuration for the mail related directives in `.env`:
    * `MAIL_DRIVER=`
    * `MAIL_HOST=`
    * `MAIL_PORT=`
    * `MAIL_USERNAME=`
    * `MAIL_PASSWORD=`
    * `MAIL_ENCRYPTION=`

Enso provides this in its current state, with the mention that you, as user, don't have to remain 
on the exporting page until is done. Once the export is ready you receive both push/toastr 
and email notifications.

To download the generated export:
- From the notifications panel you can click the associated message and it will navigate you to the 
Files menu.
- From the email you get a direct download link valid for 24 hours.
- From the Files menu you can manually download the file.


### The query

In your `Table` implementation, the query must look like this:

```php
public function query(): Builder
{
    return Permission::selectRaw('
        permissions.id, permissions.name, permissions.description,
        permissions.type, permissions.created_at, permissions.is_default
    ');
}
```

Keep in mind that at this stage, we're returning a `QueryBuilder` not a collection of results.

If you need custom logic based on the request, you may declare a constructor for your class, 
with the following signature, where you'll have access to the various data you may need:
```php
...
use LaravelEnso\Tables\app\Services\Data\Request;
...
public function __construct(Request $request)
{
    $request->columns();
    $request->meta();
    $request->filters();
    $request->intervals();
    $request->params();
}
```

The type of the above parameters is `LaravelEnso\Helpers\app\Classes\Obj`;

### Actions

While you may have action buttons on each table row, sometimes you may wish to have custom actions, 
for the entire result set of the table.

It is important to note that the action will be applied for **ALL** the **FILTERED** results, 
even the ones that might not be visible on the current page of the table (if there is more than one page).

Also, keep in mind that if the `selectable` option is active in table template, 
the selection is decoupled from the actions, so, same as before, 
the action is applied to all the filtered table results.

#### In-depth example - global custom action

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
- the (request) method should match the action performed and needs to be the same as when defining the route
    in your routes file
- the suffix is what you'll need to use when defining the route (more on that below)

Note that, if needed, you may define several buttons in a similar fashion.

2. Add a route for your new action and configure its permissions:
```php
Route::patch('myAction', 'MyActionController')->name('myAction');
```
    
3. Add a new `Action` implementation class, where you actually process the results.
        
```php
use LaravelEnso\Tables\app\Services\Action;

class MyAction extends Action
{

    public function process(array $row)
    {
        \Log::info($row);
        // you also have acces the $this->request() : Obj
    }
}
```
    
This needs to extend the abstract `LaravelEnso\Tables\app\Services\Action` class, 
and implement the `process` method.  The process method will be called for **each available row of data**.

Depending on your requirements, you may do the processing here or even generate jobs that will 
do the processing asynchronously.  
      
3. Add a new controller for the action
```php
class MyActionController extends Controller
{
    use Action;

    protected $tableClass = PermissionTable::class;
    protected $actionClass = MyAction::class;
}
```

The controller manages the VueJS component's action request.
You require:
* the `Action` trait
* the `$tableClass` variable, for the query
* the `$actionClass` variable, for your particular action implementation (from step 3)

Note that you may also reuse your TableData if you prefer and have only one 'action' for a given table.

#### Additional Advanced Details
The `Action` trait defines an `action` method that is a bit of a wrapper, and looks like this:
```php
public function __invoke(Request $request)
{
    App::make($this->actionClass, $this->data($request))->handle();
}
```

If for any reason you want to handle more than one action through the same controller, 
you may declare multiple actionClasses and create multiple action methods in conjunction with the proper routes.  

1.Add the new route
```php
Route::patch('myAction', 'MyActionController')->name('myAction');
```

Remember to place the route nested correctly, considering the possible uri and route name prefixes, 
as well as the controller namespace.

In this example, the url called for the UserGroups table will be 'system/permissions/myAction' and 
the name of the route will be 'system.permissions.myAction'.
    
2. Create the new permission. Navigate in the app to `system/permissions` 
    and add the new `system/permissions/myAction` permission.

That's it.

#### The default action button

If you take a look the package config file, you'll notice that there already is a global action button defined.
If you want to use it, you make skip the definition of a button at #1 step above, instead just declare `"action"` 
and continue with the other steps, taking into account the 
changed suffix (the route and permissions need to be altered).

#### Defining reusable action buttons

Similarly to the default action button, you may define other 'global' action buttons in the datable configuration, 
that can then be used as needed in any table templates in your project.

#### In-depth example - per row custom action

A common scenario is when you want to define a per row custom action, on top of the default ones.

Most of the time, you'll want to perform the custom action for the model that's represented on the row 
so you'll need to be able to identify the model. For that, you can use the `id` attribute. 

If you're displaying data gathered from multiple tables, make sure that the identifiers you require are present
in the select and in the template. If you don't want to display them to the user, you may use rogue columns.

In this example, we'll assume `id` is sufficient.

1. Build the query in the table builder

    ```php
    public function query()
    {
        return MyModel::select(\DB::raw('
            my_models.id,
            my_models.name
        '));
    }
    ```

2. Declare the custom action button in the template:

```json
"buttons": [
    "excel",
    "create",
    "edit",
    "destroy",
    "show",
    {
        "type": "row",
        "icon": "exclamation-triangle",
        "class": "is-row-button",
        "event": "details",
        "confirmation": false
    }
],
```

We've named the event `details`.

::: tip
Remember that the icon you set for the custom action button must be available (imported) 
in the page (component) where you're displaying the datatable.
:::

3. In the page, catch the event on the datatable Vue component:

```vue
<vue-table class="box has-background-light is-paddingless raises-on-hover is-rounded"
    :path="path"
    id="myModelTableId"
    @details="handleDetails"/>
```

4. Process the event as desired:

```vue
    ...
    methods: {
        handleDetails(event) {
            const id = event.id;
            //your custom logic
        },
    },
    ...
};
```

The event payload is the entire table row, so you have access to the id and any other attributes
you've added.

### Configurable huge result set management

When you have huge result sets, the table component will take longer to respond to the user input. 
In order to improve the user experience, when we have more results than the limit set 
in the configuration (in the `fullInfoRecordLimit` key), the back-end builder no longer 
computes the number of filtered records and totals for that table.

However, a blue information icon becomes available in the list of table buttons, 
which allows the user to request this computed information.

Since this is an extreme case with big tables and is a seldom situation, 
the configuration for the limit is global.

### Caching support

We've had cases in production where we need to work with over 2 million results 
and every performance bit we can get is welcome.

When the table displays data, if we want to show pagination, we need to execute the main query twice: 
once to retrieve the current chunk of data, and then once more to count the results.

By caching the number of results we can skip counting the results and save time for each request. 
The more records you work with, the bigger the gain the difference.

Once activated, on the next request, if the total count information is not in the cache, 
it will be computed and also cached.


In order to activate this feature, as well as configure the other related options, 
you should review the the `cache` paragraph from the above configuration section. 
::: tip
You should always use this only in combination with the `TableCache` trait on the table's main model. 
The trait will handle the cache invalidation when a model is created or deleted. To do so just add the trait. 
:::

### (Row) Preview support

There might be cases where you need to optionally display extra information 
related to a row, render a preview representation or something similar.

For such cases, you may activate the table row's preview functionality by adding the 
`"preview": true` option in the table's template.

This will activate the preview table column, where you can add your own content, via the 
`preview` slot:
```vue
<enso-table class="box is-paddingless raises-on-hover"
    id="myId">
    <template v-slot:preview="{ row }">
        {{ row }}
    </template>
</enso-table>
``` 

In the snippet above we're just printing the row but you can obviously add your own 
logic or components.

Note that the preview row is also used when the table contents (columns) does not fit
the browser. When the preview row is already active and you're also adding your own content
via the slot, the custom content is added after the other columns. 

### Further Examples

You may see the vue data table in action, with the code for the UserGroups page, right here:
- [table builder](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Builders/UserGroupTable.php)
- [table template](https://github.com/laravel-enso/Core/blob/master/src/app/Tables/Templates/userGroups.json)
- [data controller](https://github.com/laravel-enso/Core/blob/master/src/app/Http/Controllers/Administration/UserGroup/TableData.php)
- [front-end vue page](https://github.com/enso-ui/ui/blob/master/src/bulma/pages/administration/userGroups/Index.vue)
- [live result](https://www.laravel-enso.com/administration/userGroups/) (if you're not already logged in, use `admin@laravel-enso.com` and `password`)

Feel free to look around at the various packages in the [laravel-enso](https://github.com/laravel-enso) repository, 
to find more examples.

## Commands

- `php artisan enso:tables:clear` - the command clears the cached table templates. 
    If your cache driver doesn't support tags, the whole cache will be cleared.

::: tip
If using the caching functionality (see the `cache` notes from the `Configuration` 
section), you should add this command to one of your production deployment stages
so as to ensure the latest template versions are used after deploy.
:::


## Publishes

- `php artisan vendor:publish --tag=tables-config` - the component configuration
- `php artisan vendor:publish --tag=tables-resources` - the example table json config, 
    builder and custom action 
- `php artisan vendor:publish --tag=tables-mail` - the templates used for notifications
- `php artisan vendor:publish --tag=enso-mail` - a common alias for when wanting to update the templates 
    used for notifications
- `php artisan vendor:publish --tag=enso-config` - a common alias for when wanting to update the config,
    once a newer version is released, usually used with the `--force` flag

## External dependencies

 - [Spout](https://github.com/box/spout) 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
