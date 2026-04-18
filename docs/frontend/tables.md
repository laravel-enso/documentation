---
sidebarDepth: 3
---

# Tables

![npm license](https://img.shields.io/npm/l/@enso-ui/tables.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/tables.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/tables.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/tables.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/tables.svg) 

DataTable Vue Components with a Bulma implementation over a renderless core

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

Should be used with its backend [sibling](https://github.com/laravel-enso/VueDatatable)

## Installation

Install the package:
```
yarn add @enso-ui/tables @enso-ui/toastr
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.


### Exports

`@enso-ui/tables/bulma`:
- `EnsoTable`, 
- `VueTable`, 

`@enso-ui/tables/renderless`:
- `CoreTable`,

## Usage

### Outside of Enso

Import the following in a main js file:
```js
import Vue from 'vue';
import axios from 'axios';
import Toastr from '@enso-ui/toastr/bulma';
import ToastrPlugin from '@enso-ui/toastr';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('fa', FontAwesomeIcon);

Vue.use(ToastrPlugin, {
    layout: Toastr,
    options: {
        duration: 3500,
        position: 'right',
    },
});

window.axios = axios;
```

Then in any given page import the component:
```js
import { VueTable } from '@enso-ui/tables/bulma';
```

And then use it within your page:
```js
<vue-table class="box is-paddingless raises-on-hover is-rounded"
    path="/examples/table/init"
    id="example"/>
```

### Within Enso

Enso comes with a series of defaults and conventions, and there are Enso specific
versions of some components that make use of these conventions so you add as 
little as possible configuration.

Import the Enso version of the component:
```js
import { EnsoTable } from '@enso-ui/tables/bulma';
```

Use the component in your page:
```js
<enso-table class="box is-paddingless raises-on-hover"
    id="permissions"/>
```

If you're following conventions, the table component will try to determine
the endpoint's path by using the current page's path as well as assuming
the path's suffix will be `initTable`.

Of course, you can still manually specify and thus overwrite this determined path:
```js
<enso-table class="box is-paddingless raises-on-hover"
    path="/api/system/permissions/initTable"
    id="permissions"/>
```

There's also the `route()` helper available, so instead of the above you can also use
it in combination with named routes:
```js
:path="route('system.permissions.initTable')"
```

## Usage Details

### CoreTable

This is the renderless version of the component that can be built upon to create 
your own custom version.

#### Props
- `errorHandler` - `function` - used to handle axios errors
- `filters` - `object` - a filters object that is sent to the back-end 
    to filter the results
- `id` - `string`, required, an identifier for the table component, 
    required for caching this table's preferences/settings
- `intervals` - `object`, optional - an interval filters object that is sent 
    to the back-end to filter the results. Note that if the interval is a date, 
    in addition to the `min` and `max` values for a given interval, 
    you must also give  the `dateFormat` parameter, with the date format to be used
    for example `intervals` can look like this:
    
    ```js
    data() {
        return {
            intervals: {
                menus: {
                    updated_at: {
                        min: null,
                        max: null,
                        dateFormat: 'Y-m-d H-i-s',
                    },
                },
            },
        };
    },
    ```
    ::: tip
    If using within Enso, you may forgo specifying a format, 
    and can set the `dateFormat` attribute as `null`, in which case, the back-end
    component will use the global Enso format, from the configuration file 
    (`config('enso.config.dateTimeFormat')`).
    
    Note that even if null, you're still required to specify the `dateFormat` attribute
    for date intervals.
    ::: 
  
- `i18n`, `function`, optional - the function that handles localisation
- `params` - `object`, optional - a params object that may be used on the 
    back-end to perform additional, custom, operations
- `initParams` - `object`, optional - a params object that may be used on the 
    back-end during the init phase
- `path` - `string`, required - the URI path used to fetch the table template.

#### Events:
- `ready` - when the component is initialized after fetching its template, BEFORE fetching the actual table data
- `fetching` - just before making the request to fetch the table data
- `fetched` - when the table data has been fetched
- `clicked` - when clicking on a `clickable` column
- `reset` - when clicking the reset button

Various other user events may be emitted depending on the configured template.

### VueTable

This is the main bulma styled component and it is built upon the renderless 
component `renderless/VueTable.vue`.

#### Example:
```vue
<vue-table :path="route('system.menus.initTable')"        
    :error-handler="myErrorHandler"
    :intervals="intervals"
    :i18n="myI18n"        
    id="myTable"/>
```


#### Props

All the props from `CoreTable` can be provided here

#### Slots
- if any columns have the `slot` attribute in their meta, in the template, then a scoped slot is rendered for each of these
columns. The name of the slot is the column's name. The slot exposes the `row` & `column` objects

```vue
<vue-table :path="route('system.menus.initTable')"        
    :error-handler="myErrorHandler"
    :i18n="myI18n"        
    ref="table"> 
    <template v-slot:my_column="{ row, column }">
        <span>{{ row[column.name] }}
    </template>
</vue-table>
```

- if you using custom totals in your table template, 
    you may also add the template to be for the custom total
- if using preview option in you table template, a preview slot will also be available.
    The name of the slot is `'preview'`

### EnsoTable

Is designed to be used within the Enso ecosystem, 
requiring minimal configuration from the dev. 

Example:
```vue
<enso-table class="box is-paddingless raises-on-hover is-rounded"
    :path="route('system.permissions.initTable')"
    id="permissions"/>
```

#### Props

All the props from `VueTable` can be provided here

#### Slots

The custom slots from `VueTable` are available here

### Filtering and Sorting

#### Sorting

In order for a column to be sortable, it needs to be marked in the 
template as such (`'sortable'`);

Once the columns are configured as searchable, when you want to sort using a 
certain column, it is enough to click the column's header.

Once a sorting has been applied, there will be a small 'x' button visible which you
can use to cancel the sorting.

::: tip
You may also use the reset button to clear **all** the table customizations 
including sorting and reload the template.
::: 

#### Filtering

In order to filter using a string of text, you may start typing in the search input.

All columns marked in the template as `'searchable'` (even those marked as `'notVisible'`
or `'rogue'`) will be used for filtering. The search type is `WHERE ... OR ...`.

For a brief example the following string __abc__ will be used as search value.
By default, there are five search modes available:
- `'startsWith'` - starting with the searched text (represented with __ab\*__)
- `'endsWith'` - ending with the searched text (represented with __\*ab__)
- `'exactMatch'` (represented with __abc__) 
- `'full'` - containing the searched text (represented with __\*a\*__)
- `'doesntContain'` (represented with __~~abc~~__).
    - Note: Usually, when this search mode is applied on tables, only a single set of data 
    is targeted (ex: exclude rows if a specific and targeted data cell contains the search text).   
    When used on enso table all data sets (row's data cells) are targeted. Thus search will
    behave as follows: in the given example, rows will be excluded only if __all__ data cells
    contain the string "__abc__" . 
    - Note: Empty row data cells will be ignored by `'doesntContain'` search mode. 
    So if there is a row that contains string "abc" and all the other fields are empty, 
    then it will be considered that all row data cells (in this case just one) contain the 
    string and thus the row will be __excluded__.

Also, the default search mode is to look for attributes starting with the searched text
as it's faster than `'full'` and more useful than `'exactMatch'`.

In the interface, if you want to switch between the search modes, you can
use the button that appears to the right side of the search input, once you've typed something. 

The button can show a maximum of three characters. To indicate the mode you're in, it will
display either 3 letters of whatever you've typed or 1-2 letters, replacing the remaining space 
with asterisk wildcard (`*`).
Ex: if the search word is "abc", the button will be illustrated like: "ab\*", "\*ab", "abc"
"\*a\*", "~~abc~~".

The search filter is __case-insensitive__.

::: tip
The available modes as well as the default mode can be customized in the
 `tables` config. 
:::

::: tip
Once the mode has been changed in the interface, the preferences are saved in the 
browser's local storage.
:::

If you want to remove the search filtering, clear the search input.

::: tip
You may also use the reset button to clear **all** the table customizations 
including searching and reload the template.
:::

### Advanced Filtering

Beyond the automatic filtering available out of the box, the VueJS component takes 
a set parameters which you can use on the back-end to customize the query:
- intervals
- filters
- params

Intervals are meant for applying date/dateTime restrictions on your results, 
are applied automatically and should respect table and column names:
```js
intervals: {
    sales: {
        date: {
            min: null,
            max: null,
            dateFormat: null,
        },
    },
```

Please take a look at the CoreTable parameters section above for more information
on the value of `dateFormat`.

Filters are meant for applying generic restrictions on your results, 
are applied automatically and should also respect table and column names:
```js
filters() {
    return {
        products: {
            id: null,
        },
    };
},
```

Params are meant for building custom logic restrictions on your results
and are NOT applied automatically. As such the parameter structure and attribute
names depend on your choices.

```js
params: {
    fulfilled: null,
    client: null,
```

The parameters object will be made available in your table builder specific methods. 
Please be sure to read the advanced usage 
[section](https://docs.laravel-enso.com/backend/tables.html#advanced-usage) 
of the documentation for more information. 

### Table Init Sample Response

Below is the response from the back-end when the table is initialized.  The sample is taken from the [https://www.laravel-enso.com/system/menus/](https://www.laravel-enso.com/system/menus/) index page.

```json
{
    "template":{
        "crtNo":true,
        "buttons":{
            "global":[
                {
                    "icon":"file-excel",
                    "class":null,
                    "event":"export-excel",
                    "action":"export",
                    "label":"Excel",
                    "name":"excel",
                    "path":"\/api\/system\/menus\/exportExcel"
                },
                {
                    "icon":"plus",
                    "class":null,
                    "event":"create",
                    "action":"router",
                    "label":"Create",
                    "name":"create",
                    "route":"system.menus.create"
                }
            ],
            "row":[
                {
                    "icon":"pencil-alt",
                    "class":"is-row-button",
                    "event":"edit",
                    "action":"router",
                    "name":"edit",
                    "route":"system.menus.edit"
                },
                {
                    "icon":"trash-alt",
                    "class":"is-row-button",
                    "event":"destroy",
                    "action":"ajax",
                    "method":"DELETE",
                    "message":"The selected record is about to be deleted. Are you sure?",
                    "confirmation":true,
                    "postEvent":"destroyed",
                    "name":"destroy",
                    "path":"\/api\/system\/menus\/dtRowId"
                }
            ]
        },
        "appends":[
            "computedIcon"
        ],
        "columns":[
            {
                "label":"Name",
                "name":"name",
                "data":"menus.name",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":true,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":true,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Icon",
                "name":"computedIcon",
                "data":"menus.computedIcon",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":true,
                    "notExportable":true,
                    "nullLast":false,
                    "searchable":false,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":false,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Parent",
                "name":"parent",
                "data":"parent_menus.name",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":true,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":true,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Route",
                "name":"route",
                "data":"permissions.name",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":true,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":true,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Has Children",
                "name":"has_children",
                "data":"menus.has_children",
                "meta":{
                    "average":false,
                    "boolean":true,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":false,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":false,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Order",
                "name":"order_index",
                "data":"menus.order_index",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":false,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":false,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":true,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            },
            {
                "label":"Created At",
                "name":"created_at",
                "data":"menus.created_at",
                "meta":{
                    "average":false,
                    "boolean":false,
                    "clickable":false,
                    "cents":false,
                    "customTotal":false,
                    "date":true,
                    "datetime":false,
                    "filterable":false,
                    "icon":false,
                    "notExportable":false,
                    "nullLast":false,
                    "searchable":false,
                    "rawTotal":false,
                    "rogue":false,
                    "slot":false,
                    "sortable":true,
                    "translatable":false,
                    "total":false,
                    "notVisible":false,
                    "visible":true,
                    "hidden":false,
                    "sort":null
                }
            }
        ],
        "model":"menu",
        "table":"menus",
        "dtRowId":"id",
        "lengthMenu":[
            10,
            15,
            20,
            25,
            30
        ],
        "debounce":350,
        "method":"GET",
        "labels":{
            "crtNo":"#",
            "actions":"Actions"
        },
        "comparisonOperator":"LIKE",
        "responsive":true,
        "searchModes":[
            "full",
            "startsWith",
            "endsWith",
            "exactMatch",
            "doesntContain"
        ],
        "dateFormat":"d-m-Y",
        "selectable":false,
        "preview":false,
        "name":"menus",
        "readPath":"\/api\/system\/menus\/tableData",
        "defaultSort":"menus.id",
        "align":[
            "has-text-centered"
        ],
        "style":[
            "is-hoverable",
            "is-striped"
        ],
        "aligns":{
            "center":"has-text-centered",
            "left":"has-text-left",
            "right":"has-text-right"
        },
        "styles":{
            "bordered":"is-bordered",
            "compact":"is-narrow",
            "hover":"is-hoverable",
            "striped":"is-striped"
        },
        "highlight":"has-background-info",
        "controls":[
            "length",
            "columns",
            "style",
            "reload",
            "reset"
        ],
        "actions":true
    },
    "meta":{
        "start":0,
        "search":"",
        "loading":false,
        "forceInfo":false,
        "filterable":false,
        "searchable":true,
        "sort":false,
        "total":false,
        "date":true,
        "datetime":false,
        "translatable":false,
        "enum":false,
        "cents":false,
        "money":false,
        "resource":false,
        "length":10,
        "searchMode":"full",
        "fullInfoRecordLimit":1000000
    },
    "apiVersion":"3.4"
}
```

### Table Data Sample Response

Below is the response given by the backend when searching for something via the search input.

```json
{
   "data":[
      {
         "id":1,
         "name":"core.home.index",
         "description":"App State Builder",
         "type":"Read",
         "created_at":"08-09-2019",
         "is_default":true,
         "isRead":true
      }
   ],
   "count":444,
   "filtered":1,
   "total":[

   ],
   "fullRecordInfo":true,
   "filters":true
}
```

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
