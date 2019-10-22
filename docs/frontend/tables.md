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

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

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

All columns marked in the template as `'searchable'` will be used for filtering
and the search type is `WHERE ... OR ...`  

By default, there are three search modes available:
- 'startsWith' - starting with the searched text
- 'full' - containing the searched text
- 'endsWith' - ending with the searched text

Also, the default search mode is to look for attributes starting with the searched text
as it's faster than 'containing' and more useful that 'full'.

In the interface, if you want to switch between the search modes, you can
use the button that appears at the end of the search input, once you've typed something.

The button will take the first/first two letters of whatever you've typed and place
and asterisk wildcard (`*`) to indicate the mode you're in. 

::: tip
Both the available modes as well as the the default mode can be customized in the
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
               "path":"\/api\/system\/permissions\/exportExcel?"
            },
            {
               "icon":"plus",
               "class":null,
               "event":"create",
               "action":"router",
               "label":"Create",
               "route":"system.permissions.create"
            }
         ],
         "row":[
            {
               "icon":"pencil-alt",
               "class":"is-row-button",
               "event":"edit",
               "action":"router",
               "route":"system.permissions.edit"
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
               "path":"\/api\/system\/permissions\/dtRowId"
            }
         ]
      },
      "appends":[
         "isRead"
      ],
      "columns":[
         {
            "label":"Name",
            "name":"name",
            "data":"permissions.name",
            "meta":{
               "boolean":false,
               "clickable":false,
               "cents":false,
               "customTotal":false,
               "date":false,
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
               "visible":true,
               "hidden":false,
               "sort":null
            }
         },
         {
            "label":"Description",
            "name":"description",
            "data":"permissions.description",
            "meta":{
               "boolean":false,
               "clickable":false,
               "cents":false,
               "customTotal":false,
               "date":false,
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
               "visible":true,
               "hidden":false,
               "sort":null
            }
         },
         {
            "label":"Type",
            "name":"type",
            "data":"permissions.type",
            "enum":"LaravelEnso\\Permissions\\app\\Enums\\Types",
            "meta":{
               "boolean":false,
               "clickable":false,
               "cents":false,
               "customTotal":false,
               "date":false,
               "icon":false,
               "notExportable":false,
               "nullLast":false,
               "searchable":false,
               "rawTotal":false,
               "rogue":false,
               "slot":true,
               "sortable":true,
               "translatable":false,
               "total":false,
               "visible":true,
               "hidden":false,
               "sort":null
            }
         },
         {
            "label":"Default",
            "name":"is_default",
            "data":"permissions.is_default",
            "meta":{
               "boolean":true,
               "clickable":false,
               "cents":false,
               "customTotal":false,
               "date":false,
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
               "visible":true,
               "hidden":false,
               "sort":null
            }
         },
         {
            "label":"Created At",
            "name":"created_at",
            "data":"permissions.created_at",
            "meta":{
               "boolean":false,
               "clickable":false,
               "cents":false,
               "customTotal":false,
               "date":true,
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
               "visible":true,
               "hidden":false,
               "sort":null
            }
         }
      ],
      "model":"permission",
      "readPath":"\/api\/system\/permissions\/tableData",
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
      "selectable":false,
      "preview":false,
      "comparisonOperator":"LIKE",
      "searchModes":[
         "full",
         "startsWith",
         "endsWith"
      ],
      "responsive":true,
      "name":"permissions",
      "labels":{
         "crtNo":"#",
         "actions":"Actions"
      },
      "actions":true,
      "align":"has-text-centered",
      "style":"is-hoverable is-striped",
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
      ]
   },
   "meta":{
      "length":10,
      "searchMode":"startsWith",
      "fullInfoRecordLimit":1000000,
      "start":0,
      "search":"",
      "loading":false,
      "forceInfo":false,
      "searchable":true,
      "sort":false,
      "total":false,
      "date":true,
      "translatable":false,
      "enum":true,
      "cents":false,
      "money":false
   },
   "apiVersion":"3.2"
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
