---
sidebarDepth: 3
---

# Transitions

![npm license](https://img.shields.io/npm/l/@enso-ui/transitions.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/transitions.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/transitions.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/transitions.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/transitions.svg) 

A collection of Vue transitions

## Usage
The components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/transitions
```
Import the desired component(s):
```js
import { Fade, FadeDown, ... } from '@enso-ui/transitions';
```

### Exports

`@enso-ui/transitions`:
- `Fade`,
- `FadeLeft`,
- `FadeRight`,
- `FadeUp`,
- `FadeDown`,
- `SlideLeft`,
- `SlideRight`,
- `SlideUp`,
- `SlideDown`,
- `Zoom`,


### bulma/Fade.vue
A reusable fade transition.

Example:
```vue
<zoom>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</zoom>
```

Slots:
- `default`, slot for the actual contents

### transitions/FadeDown.vue
A reusable fade down transition.

Example:
```vue
<fade-down>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</fade-down>
```

Slots:
- `default`, slot for the actual contents

### transitions/FadeLeft.vue
A reusable fade left transition.

Example:
```vue
<fade-left>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</fade-left>
```

Slots:
- `default`, slot for the actual contents

### transitions/FadeRight.vue
A reusable fade right transition.

Example:
```vue
<fade-right>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</fade-right>
```

Slots:
- `default`, slot for the actual contents

### transitions/FadeUp.vue
A reusable fade up transition.

Example:
```vue
<fade-up>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</fade-up>
```

Slots:
- `default`, slot for the actual contents

### transitions/SlideDown.vue
A reusable slide down transition.

Example:
```vue
<slide-down>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</slide-down>
```

Slots:
- `default`, slot for the actual contents

### transitions/SlideLeft.vue
A reusable slide left transition.

Example:
```vue
<slide-left>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</slide-left>
```

Slots:
- `default`, slot for the actual contents

### transitions/SlideRight.vue
A reusable slide right transition.

Example:
```vue
<slide-right>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</slide-right>
```

Slots:
- `default`, slot for the actual contents

### transitions/SlideUp.vue
A reusable slide up transition.

Example:
```vue
<slide-up>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</slide-up>
```

Slots:
- `default`, slot for the actual contents

### transitions/Zoom.vue
A reusable zoom transition.

Example:
```vue
<zoom>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</zoom>
```

Slots:
- `default`, slot for the actual contents

## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `animate.css`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
