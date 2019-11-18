---
sidebarDepth: 3
---

# Themes

![NPM License](https://img.shields.io/npm/l/@enso-ui/themes.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/themes.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/themes.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/themes.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/themes.svg)

Enso UI Themes

This package is meant to be used only in the Enso ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Install the package:
```
yarn add @enso-ui/themes
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

The package has the two default Enso themes, one light and one dark.

## Removing themes

If you remove one of your themes, note that the theme selector will no longer be visible in the right settings side bar.

## Customizing the themes

You may use `patch-package` to make a patch and save the changes you may have made to the themes.

Since our themes are built on top of Bulma, its variables are customized in the `dark` and `light` sub-folders. 

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
