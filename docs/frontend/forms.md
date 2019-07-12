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

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

## Usage

Import the desired forms(s):
```js
import { EnsoForm, VueForm } from '@enso-ui/forms/bulma';
import CoreForm from '@enso-ui/forms/renderless';
```

### CoreForm

Renderless component.

#### Props 
- `path` - `string`, required - the URI for the form data/template.
- `errorHandler` - `function`, optional - an error handling function for the axios requests
- `params` - `object`, optional - parameters that get sent to the backend when fetching the form data
- `i18n` - `Function`, optional - the function that performs translations
- `locale` - `string`, optional, default `en` - used for the date fields

### VueForm

The bulma styled form component built on top of the renderless version of the component.

#### Example:
```vue
<vue-form
    path="/api/system/menus/2/edit"/>
```

#### Methods
- `fetch()`, fetches the form data & template from the back-end
- `field(field)`, returns the field with the given name
- `param(field)`, returns the parameter with the given name
- `routeParam(field)`, returns the route parameter with the given name
- `hideTab(tab)`, hidden all fields in the given tab and remove from the form 
- `showTab(tab)`, show all fields in the given tab an add it to the form

#### Slots
- if any fields are marked as custom fields in the form template, then a scoped slot is rendered for each of these
fields. The name of the slot is the field's name. The slot exposes the `props` object that has to be binded to the custom field, besides your custom logic

```vue
<template v-slot:group_id="props">
    <form-field v-bind="props"
        @input="pivotParams.userGroups.id = $event"/>
</template>
```
### EnsoForm.vue

Designed to be used within the Enso ecosystem, requiring less configuration from the dev.

#### Example

```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"/>
```

```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"
    :path="route('system.menus.edit', 1, false)"/>
```

```vue
<enso-form class="box has-background-light raises-on-hover animated fadeIn"
    path="/api/system/menus/2/edit"/>
```

#### Example to Show/Hide tabs

##### Vue Tamplate
```vue
<template>
    <enso-form class="box has-background-light raises-on-hover animated fadeIn"
               @ready="init">
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

Don't forget to add your own label when when using the dedicated component.

#### Example:
```vue
<label class="label">My Field</label>
<date-field v-bind="props"
    v-bind="props"
    @input="doSomethingExtra"/>
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
