---
sidebarDepth: 3
---

# Toastr

![npm license](https://img.shields.io/npm/l/@enso-ui/toastr.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/toastr.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/toastr.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/toastr.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/toastr.svg) 

Multi layout renderless Toaster Notification

## Usage
Can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:

```
yarn add @enso-ui/toastr
```

Import the component(s):

```js
import Toastr from '@enso-ui/toastr/bulma';
import Toastr from '@enso-ui/toastr/renderless';
```

Install the plugin:

```js
Vue.use(ToastrPlugin, {
    layout: Toastr,
    options: {
        duration: 3500,
        position: 'right',
    },
});
```

Note that the provided duration and position are the defaults, but they can be overriden on each use.

Use Examples:

```js
this.$toastr.success('You operation was successful')
```

```js
this.$toastr.title('Warning')
    .position('bottom-left')
    .duration(5000)
    .warning('Something is wrong...')
```

```js
this.$toastr.title('HTML').html('<span class="tag is-success'>v2.0.0</span>`)
```

::: tip Tip
You can create your own layouts & transitions by using the renderless component
:::

## Exports

`@enso-ui/toastr/bulma`:
- `Toastr`

`@enso-ui/tabs/renderless`:
- `Toastr`

`@enso-ui/transitions/renderless`:
- `Bounce`

### bulma/Toastr.vue

The bulma styled toaster notification component built on top of its renderless version.

Properties:
- `body` - `string`, optional, default `left`, the alignment of the tabs, valid options are: 'left', 'centered', 'right'
- `duration` - `number`, optional, default `3500`, the duration of the bounce animation, in ms, used when showing the notification
- `html` - `boolean`, optional, default `false`, if true, the contents of the notification is treated as html 
- `position` - `string`, optional, default `top-center`, the position, 
valid options are: 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'
- `title` - `string`, optional, default `null`, if given, that title is set 
- `type` - `string`, required, the type of the notification, 
valid options are: 'message', 'primary', 'info', 'success', 'warning', 'danger'

### renderless/Toastr.vue

The renderless toaster notification component which can be built upon to create custom implementations.

Properties:
- `duration` - `number`, required, the duration of the bounce animation, in ms, used when showing the notification
- `position` - `string`, required, the position, 
valid options are: 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'

Methods:
- `title(string)` - sets on optional title
- `duration(number)` - sets the duration in ms
- `position(string)` - sets the position, available options 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center' 
- `html(html)` - displays html content

The methods below are used to display a themed message:
- `error(message)`
- `info(message)`
- `message(message)`
- `primary(message)`
- `success(message)`
- `warning(message)`

### transitions/Bounce.vue

A reusable bounce transition.

Properties:
- `position` - `string`, required, the position of the animated contents 
valid options are: 'top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center',

Depending on the given position, the transition's enter & leave classes are automatically determined.

Slots:
- `default`, slot for the actual contents

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@enso-ui/progress-bar`
- `@fortawesome/fontawesome-free`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `animate.css`
- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
