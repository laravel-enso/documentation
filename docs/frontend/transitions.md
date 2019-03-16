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

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/transitions
```

Import the desired component(s):
```js
import { Fade, FadeDown, ... } from '@enso-ui/transitions';
```

## Usage

### Slots

All the transitions share the same structure and provide a slot default for the transitioned elemnt

### Example:
```vue
<zoom>
    <span class="animated" style="background-color: red" v-if="myCondition">
        Foo
    </span>
</zoom>
```

## Available Transitions

#### Fade
#### FadeDown
#### FadeLeft
#### FadeRight
#### FadeUp
#### SlideDown
#### SlideLeft
#### SlideRight
#### SlideUp
#### Zoom

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
