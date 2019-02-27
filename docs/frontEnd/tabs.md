---
sidebarDepth: 3
---

# Tabs

![npm license](https://img.shields.io/npm/l/@enso-ui/tabs.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/tabs.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/tabs.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/tabs.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/tabs.svg) 

Simply Tabs

## Usage
The component can be used outside of the Enso ecosystem.

### bulma/Tabs.vue
The bulma styled tabs component built on top of its renderless version.

Example:
```vuejs
<tabs>
    <template v-slot:label="{ tab }">
        <span>
            {{ tab }}
        </span>
        <span class="tag is-dark file-counter has-margin-left-medium">
            {{ content(tab).length }}
        </span>
    </template>
    <div class="columns is-reverse-mobile">
        <div class="column is-two-thirds">
            <tab v-for="folder in folders"
                :key="folder"
                :id="folder">
                
                Tab content here
                
            </tab>
        </div>        
    </div>
</tabs>
```

Properties:
- `alignment`, `string`, optional, default `left`, the alignment of the tabs, valid options are: 'left', 'centered', 'right'
- `boxed`, `boolean`, optional, default `false`, if true, applies the 'is-boxed' class for the tab list
- `fullwidth`, `boolean`, optional, default `false`, if true, applies the 'is-fullwidth' class
- `size`, `string`, optional, default `normal`, the size of the tabs, valid options are: 'normal', 'small', 'medium', 'large'
- `toggle`, `boolean`, optional, default `false`, if true, applies the 'is-toggle' class
- `toggleRounded`, `boolean`, optional, default `false`, if true, applies the 'is-toggle-rounded' class

Slots:
- `label`, slot for the tab labels
- `default`, slot for the actual tabs/contents

### bulma/EnsoTabs.vue
This bulma styled tabs component built on top of its renderless version is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev. 

Properties:
- `size`, `string`, optional, default `normal`, the size of the tabs, valid options are: 'normal', 'small', 'medium', 'large'

Slots:
- `label`, slot for the tab labels
- `default`, slot for the actual tabs/contents

### renderless/EnsoTabs.vue
The renderless version tabs component. It can be built upon to implement custom component designs.

Methods:
- `register(tab)`, registers a tab component. If it's the only tab, it also activates that tab.
- `remove(tab)`, removes a tab from the tab list
- `select(tab)`, emits a `selected` event and activates the tab
- `activate(activeTab)`, activates a tab and emits the `activated` event
- `tabIndex(tab)`, returns the index of a tab

### tabs/Tab.vue
A type of tab to be used within the Tabs component.

Props:
- `id`, `string|Object`, required, the id of the tab
- `default`, `boolean`, optional, default `false`, if true, the tab is activated after creation
- `keepAlive`, `boolean`, optional, default `false`, if true, the type of the tab is `Alive` otherwise `Static` is used

Methods:
- `register()`, emits a `register` event, the event payload is `this`
- `activate()`, emits a `activate` event, the event payload is `this`
- `enable()`, marks this tab as enabled
- `disable()`, marks this tab as disabled
- `remove()`, emits a `remove` event, the event payload is `this`

### tabs/Alive.vue
An alive type of tab used within the Tab component.

Props:
- `active`, `boolean`, optional, default `false`, if true, the tab is visible.

In case of the Alive tab (as opposed to the Static tab), the tab is hidden when not visible, but not destroyed. 
For example if the content of the tab is a complex, resources intensive component, 
the component is not destroyed & recreated when the user switches back & forth to this tab.  

### tabs/Static.vue
A static type of tab used within the Tab component.

Props:
- `active`, `boolean`, optional, default `false`, if true, the tab is visible

In case of the Static tab (as opposed to the Alive tab), the tab is hidden when not visible, and also destroyed. 
For example if the content of the tab is a complex, resources intensive component, 
the component is destroyed & recreated when the user switches back & forth to this tab which might take longer to display, 
generate multiple requests, consume extra resources.

One advantage of using a Static tab is that, the data within the tab will be as recent as the last time the tab was 
activated by the user, since that is when it got recreated.

## Documentation

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `animate.css`
- `bulma`
- `vue`

## Exports

`@enso-ui/tabs/bulma`:
- `Tab`
- `Alive`
- `Static`
- `Tabs`
- `EnsoTabs`

`@enso-ui/tabs/renderless`:
- `Tabs`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
