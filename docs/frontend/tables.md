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

## Usage

Import the following in a main js file:
```js
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

Then in any given page import:
```js
import { VueTable } from '@enso-ui/tables/bulma';
```

### CoreTable

This is the renderless version of the component that can be built upon to create 
your own custom version.

#### Props:
 `errorHandler` - `function` - function used to handle axios errors
- `filters` - `object` - a filters object that is sent to the back-end to filter the results
- `id` - `string`, required, an id for the table
- `intervals` - `object`, optional - an interval filters object that is sent to the back-end to filter the results
- `i18n`, `function`, optional - the function that handles localisation
- `params` - `object`, optional - a params object that may be used on the back-end to perform additional, custom, operations
- `path` - `string`, required - the URI path used to fetch the table template.

#### Events:
- `ready` - when the component is initialized after fetching its template, BEFORE fetching the actual table data
- `fetching` - just before making the request to fetch the table data
- `fetched` - when the table data has been fetched
- `clicked` - when clicking on a `clickable` column

Various other user events may be emitted depending on the configured template.

### VueTable

This is the main bulma styled component and it is built upon the renderless component `renderless/VueTable.vue`

#### Example:
```vue
<vue-table :path="route('system.menus.initTable')"        
    :error-handler="myErrorHandler"
    :i18n="myI18n"        
    ref="table"/>        
```

#### Props:

All the props from `CoreTable` can be provided here

#### Slots:
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

### EnsoTable

Designed to be used within the Enso ecosystem, requiring less configuration from the dev. 

Example:
```vue
<enso-table class="box is-paddingless raises-on-hover is-rounded"
    :path="route('system.menus.initTable')"
    id="menus"/>
```

#### Props:

All the props from `VueTable` can be provided here

#### Slots:

The custom slots from `VueTable` are available here

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
               "path":"\/api\/system\/menus\/exportExcel?"
            },
            {  
               "icon":"plus",
               "class":null,
               "event":"create",
               "action":"router",
               "label":"Create",
               "route":"system.menus.create"
            }
         ],
         "row":[  
            {  
               "icon":"pencil-alt",
               "class":"is-row-button",
               "event":"edit",
               "action":"router",
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
               "path":"\/api\/system\/menus\/dtRowId"
            }
         ]
      },
      "appends":[  
         "computedIcon"
      ],
      "cache":true,
      "columns":[  
         {  
            "label":"Name",
            "name":"name",
            "data":"menus.name",
            "meta":{  
               "searchable":true,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":false,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":true,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":true,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":true,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":false,
               "sortable":false,
               "translatable":false,
               "boolean":true,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":false,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":false,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
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
               "searchable":false,
               "sortable":true,
               "translatable":false,
               "boolean":false,
               "slot":false,
               "rogue":false,
               "total":false,
               "date":true,
               "icon":false,
               "clickable":false,
               "customTotal":false,
               "notExportable":false,
               "nullLast":false,
               "visible":true,
               "hidden":false,
               "sort":null
            }
         }
      ],
      "readPath":"\/api\/system\/menus\/tableData",
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
      "labels":{  
         "crtNo":"#",
         "actions":"Actions"
      },
      "pathSegment":"menu",
      "actions":true,
      "align":"has-text-centered",
      "style":"is-hoverable is-striped",
      "aligns":{  
         "center":"has-text-centered",
         "left":"has-text-left",
         "right":"has-text-right"
      },
      "styles":{  
         "compact":"is-narrow",
         "hover":"is-hoverable",
         "striped":"is-striped",
         "bordered":"is-bordered"
      },
      "highlight":"has-background-info"
   },
   "meta":{  
      "length":10,
      "comparisonOperator":"LIKE",
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
      "enum":false,
      "money":false
   },
   "apiVersion":"3.0"
}
```

### Table Data Sample Response

Below is the response given by the backend when searching for something via the search input.

```json
{  
   "count":18,
   "filtered":1,
   "total":[
   ],
   "data":[  
      {  
         "dtRowId":1,
         "name":"Dashboard",
         "icon":"tachometer-alt",
         "has_children":false,
         "order_index":100,
         "parent":null,
         "route":"dashboard.index",
         "created_at":"25-02-2019",
         "computedIcon":"tachometer-alt"
      }
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
