---
sidebarDepth: 3
---

# Progress Circle

![npm license](https://img.shields.io/npm/l/@enso-ui/progress-circle.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/progress-circle.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/progress-circle.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/progress-circle.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/progress-circle.svg) 

Progress Circle

Can be used outside of the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/progress-circle
```

## Usage

Import the desired component(s):
```js
import ProgressCircle from '@enso-ui/progress-circle';
```

### ProgressCircle
The bulma styled progress circle component. 

Example:
```vue
<progress-circle :progress="progress"/>
```

Properties:
- `progress` - `number`, required - the progress percentage (must be between 0 and 100)
- `backgroundStroke` - `string`, optional, default `#f1f1f1` - the background color 
- `progressStroke` - `string`, optional, default `#2ecc71` - the progress stroke color
- `textColor` - `string`, optional, default `#555` - the text color
- `width` - `number`, required - the width of the component

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
