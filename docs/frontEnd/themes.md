---
sidebarDepth: 3
---

# Card

![NPM License](https://img.shields.io/npm/l/@enso-ui/themes.svg)
![npm download](https://img.shields.io/npm/dm/@enso-ui/themes.svg)
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/themes.svg)
![GitHub issues](https://img.shields.io/github/issues/enso-ui/themes.svg)
![npm version](https://img.shields.io/npm/v/@enso-ui/themes.svg)

Enso UI Themes

## Usage

All components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
npm i @enso-ui/themes
```

The package has the two default Enso themes, one light and one dark. 
The themes are then imported in Enso's `webpack.mix.js`.

### Removing themes

If you remove one of your themes, note that the theme selector will no longer be visible in the right 
settings side bar.

### Customizing the themes

You mai copy the theme you want to customize locally, change it as per your requirements,
and then simply import your local theme in the `webpack.mix.js` file.

If you need to customize the aspect of one or more of the components, the customized styles should go into the 
`bulma/components` sub-folder. 

Since our themes are built on top of Bulma, its variables are customized in the `dark` and `light` sub-folders. 

### Exports

`@enso-ui/card/bulma`:
- `Card`,
- `CardHeader`,
- `CardContent`,
- `CardImage`,
- `CardFooter`,
- `CardFooterItem`,
- `CardControl`,
- `CardBadge`,
- `CardCollapse`,
- `CardRefresh`,
- `CardRemove`,

## Depends on

- `bulma`
- `bulma-extensions`
- `flatpickr`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
