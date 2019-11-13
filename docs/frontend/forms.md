---
sidebarDepth: 3
---

# Forms

![NPM License](https://img.shields.io/npm/l/@enso-ui/forms.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/forms.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/forms.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/forms.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/forms.svg)

Vue Form Package

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

Should be used with its backend [sibling](https://github.com/laravel-enso/FormBuilder)

## Installation

Install the package:
```
yarn add @enso-ui/forms
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/forms/bulma`:
- `VueForm`,
- `EnsoForm`,
- `FormField`,
- `Action`,
- `DateField`,
- `InputField`,
- `MoneyField`,
- `SelectField`,
- `SwitchField`,
- `TextareaField`,
- `TimeField`,

`@enso-ui/forms/renderless`:
- `CoreForm`,

## Usage

Import the desired forms(s):
```js
import { EnsoForm, VueForm } from '@enso-ui/forms/bulma';
import CoreForm from '@enso-ui/forms/renderless';
```

### CoreForm

Renderless component.

#### Props 
- `path` - `string`, required - the URI for the form data/template, 
    in which case the `template` parameter is no longer required
- `template` - `object`, required - the form template object, which may be passed directly,
    in which case the `path` parameter is no longer required
- `disableState` - `boolean`, optional, default `false` - if true, then the form state monitoring 
    functionality is disabled (and for example, you won't know when the form is dirty)
- `errorHandler` - `function`, optional - an error handling function for the axios requests
- `i18n` - `Function`, optional - the function that performs translations
- `locale` - `string`, optional, default `en` - used for the date fields
- `params` - `object`, optional - parameters that get sent to the backend when fetching the form data

#### Methods

The components has several methods, of which the following are most useful,
making sense to have them available in the CoreForm's concrete implementations:

- `fetch()`, fetches the form data & template from the back-end
- `customFields()`, returns an array of custom fields
- `customSections()`, returns an array of custom sections
- `tabs()`, returns an array of tabs
- `sectionFields(section)`, returns an array of non hidden fields for the given section
- `sectionCustomFields(section)`, returns an array of non hidden custom fields for the given section
- `sections(tab)`, returns an array of sections for the given tab
- `field(field)`, returns the field with the given name
- `param(field)`, returns the parameter with the given name
- `routeParam(field)`, returns the route parameter with the given name
- `fill(data)`, performs a 'fill' for the field names/values given in the data parameter
- `setOriginal()`, updates the 'original' data store with the current form data state
- `hideTab(tab)`, sets the given tab as hidden
- `showTab(tab)`, sets the given tab as visible

#### Events

The following event are emitted:
- `ready`, on form init and after form fetch. The payload is the entire component
- `loaded`, after fetching the form. The payload is the response data.
- `show`, when clicking the show button. There is no payload.
- `create`, when clicking the create button. There is no payload.
- `submit`, after performing a submit. The payload is the response data.
- `error`, after a submit error. The payload is the response error.
- `destroy`, after performing a destroy. There is no payload.
- `undo`, after performing an undo. There is no payload.

### VueForm

The bulma styled form component built on top of the renderless version of the component.

#### Example:
```vue
<vue-form
    path="/api/system/menus/2/edit"/>
```

#### Methods
The following methods are cascaded from the renderless CoreForm component:

- `fetch()`, fetches the form data & template from the back-end
- `submit()`, submits the form
- `field(field)`, returns the field with the given name
- `param(field)`, returns the parameter with the given name
- `routeParam(field)`, returns the route parameter with the given name
- `fill(data)`, performs a 'fill' for the field names/values given in the data parameter
- `setOriginal()`, updates the 'original' data store with the current form data state
- `hideTab(tab)`, sets the given tab as hidden
- `showTab(tab)`, sets the given tab as visible

#### Slots
- if any fields are marked as custom fields in the form template, then a scoped slot is rendered for each of these
fields. The name of the slot is the field's name. The slot exposes the `props` object 
that has to be bound to the custom field, besides your custom logic.

```vue
<template v-slot:group_id="props">
    <form-field v-bind="props"
        @input="pivotParams.userGroups.id = $event"/>
</template>
```
### EnsoForm.vue

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Methods
The following methods are cascaded from the renderless CoreForm component, 
through the VueForm component and available here:

- `fetch()`, fetches the form data & template from the back-end
- `submit()`, submits the form      
- `field(field)`, returns the field with the given name
- `param(field)`, returns the parameter with the given name
- `routeParam(field)`, returns the route parameter with the given name
- `fill(data)`, performs a 'fill' for the field names/values given in the data parameter
- `setOriginal()`, updates the 'original' data store with the current form data state
- `hideTab(tab)`, sets the given tab as hidden
- `showTab(tab)`, sets the given tab as visible

#### Example

```vue
<enso-form class="box has-background-light raises-on-hover"/>
```

```vue
<enso-form class="box has-background-light raises-on-hover"
    :path="route('system.menus.edit', 1, false)"/>
```

```vue
<enso-form class="box has-background-light raises-on-hover"
    path="/api/system/menus/2/edit"/>
```

#### Example for showing/hiding tabs

##### Vue Template
```vue
<template>
    <enso-form class="box has-background-light raises-on-hover"
        @ready="init"
        ref="form">
        <template v-slot:showtab="props">
            <form-field v-bind="props"
                @input="toggleTab2($event)"/>
        </template>
    </enso-form>
</template>

<script>
    import { EnsoForm, FormField } from '@enso-ui/forms/bulma';
    
    export default {
        name: 'Create',
        components: { EnsoForm, FormField },
        data: () => ({
    		ready: false,
        }),
        methods:{
            init(){
                this.ready = true;
            },
            toggleTab2: function (event) {
                if (this.ready) {
                    if(event){
                        this.$refs.form.showTab('Tab 2');
                    }else{
                        this.$refs.form.hideTab('Tab 2');
                    }
                }
            },
        }
    };
</script>
```

#### Props

All the props from the renderless component can be provided here

#### Components for custom fields

Starting with v1.1.0 you should always use `FormField` when dealing with slots.

If you want further customization the package provides a component for each type of field:

##### DateField
##### InputField
##### MoneyField
##### SelectField
##### SwitchField
##### TextareaField.vue
##### TimeField.vue
##### WysiwygField.vue

Don't forget to add your own label when when using the dedicated component.

#### Example:
```vue
<label class="label">My Field</label>
<date-field v-bind="props"
    v-bind="props"
    @input="doSomethingExtra"/>
```

##### DateField
The component takes the following required properties:
- `errors`, the form's errors object
- `field`, the form's field object, for this date field
- `i18n`, the form's translation function, for this date field
- `locale`, the locale string to be used for the datepicker used under the hood
- `timeOnly`, the boolean flag that indicates that the component should only display time

##### InputField
The component takes the following required properties:
- `errors`, the form's errors object
- `field`, the form's field object, for this input field
- `i18n`, the form's translation function, for this date field

##### MoneyField
The component takes the following required properties:
- `errors`, the form's errors object
- `field`, the form's field object, for this money field
- `i18n`, the form's translation function, for this date field

##### SelectField
The component takes the following required properties:
- `errors`, the form's errors object
- `field`, the form's field object, for this select field
- `i18n`, the form's translation function, for select date field
- `customParams`, the custom params object passed to the VueSelect used under the hood
- `params`, the params object passed to the VueSelect used under the hood
- `pivotParams`, the pivot params object passed to the VueSelect used under the hood

##### SwitchField
The component takes the following required properties:
- `errors`, the form's errors object
- `field`, the form's field object, for this switch field


##### TextareaField
The component takes the following required properties:
- `field`, the form's field object, for this textarea field

##### TimeField
The component takes the properties as the `DateField` component above.

##### WysiwygField
The component takes the following required properties:
- `field`, the form's field object, for this visual editor field

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
