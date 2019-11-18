---
sidebarDepth: 3
---

# Uploader

![npm license](https://img.shields.io/npm/l/@enso-ui/uploader.svg) 
![npm download](https://img.shields.io/npm/dm/@enso-ui/uploader.svg) 
![GitHub top language](https://img.shields.io/github/languages/top/enso-ui/uploader.svg) 
![GitHub issues](https://img.shields.io/github/issues/enso-ui/uploader.svg) 
![npm version](https://img.shields.io/npm/v/@enso-ui/uploader.svg) 

Integrated file uploader

## Usage
Unless where specified otherwise, the components can be used outside of the Enso ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Installation

Install the package:
```
yarn add @enso-ui/uploader
```

(within Enso, remember to `cd` into the `client` folder before installing front-end assets)

Import the desired component(s):
```js
import { Uploader, EnsoUploader } from '@enso-ui/uploader/bulma';
```

Note that this package has a couple of external dependencies. 
Read [here](https://docs.laravel-enso.com/frontend/#other-dependencies) for more info.

### Exports

`@enso-ui/typeahead/bulma`:
- `Uploader`,
- `EnsoUploader`,

`@enso-ui/typeahead/renderless`:
- `CoreUploader`,


### bulma/Uploader.vue

A bulma styled typeahead component built on top of its renderless counterpart.

Example:
```vue
<uploader url="post/on/my/route">
</uploader>
```

Slots:
- `control`, slot for the upload button/controls

Properties:
- `isLarge` - `boolean`, optional, default `false`, if true, applies the 'is-small' class
- `isSmall` - `boolean`, optional, default `false`, if true, applies the 'is-large' class

'Passed-through' properties:
- `fileKey` - `string`, optional, default `file`, the key used for the uploaded file/files
- `fileSizeLimit` - `number`, optional, default `20000000`, an upper file size limit
- `i18n` - `string`, optional, default `v => v`, the translation function
- `multiple` - `boolean`, optional, default `false`, if true allows multi-upload 
- `params` - `Object`, optional, default `null`, extra parameters that can be sent with the request
- `url` - `string`, required, the URL used for the query/search to the back end

### bulma/EnsoUploader.vue

This bulma styled date filtering component, built on top of the generic version of the component is 
designed to be used within the **Enso ecosystem**, requiring less configuration from the dev.

Example:
```vue
<enso-uploader url="post/on/my/route">
</enso-uploader>
```

'Passed-through' properties:
- `isLarge` - `boolean`, optional, default `false`, if true, applies the 'is-small' class
- `isSmall` - `boolean`, optional, default `false`, if true, applies the 'is-large' class

### renderless/CoreUploader.vue
The renderless typeahead component that can be built upon to create custom components.

Properties:
- `fileKey` - `string`, optional, default `file`, the key used for the uploaded file/files
- `fileSizeLimit` - `number`, optional, default `20000000`, an upper file size limit
- `i18n` - `string`, optional, default `v => v`, the translation function
- `multiple` - `boolean`, optional, default `false`, if true allows multi-upload 
- `params` - `Object`, optional, default `null`, extra parameters that can be sent with the request
- `url` - `string`, required, the URL used for the query/search to the back end
- `compact` - `boolean`, optional, default `false`, flag to be used in the actual implementation to show
    a compact version of the uploader

Events:
- `open-file-browser`, when the file browser opens
- `upload-start`, when the upload starts
- `upload-successful`, when the upload completes successfully
- `upload-error`, when the upload fails with errors

Methods:
- `browseFiles()`, opens the file picker
- `reset()`, clears the selected files


## Questions & Issues

For questions and support please use the issues functionality
for this package's github repository.

Please make sure to search for existing issues before creating a new issue,
and when opening a new issue, fill the required information in the issue template.

Issues not conforming to the guidelines may be closed immediately.

## Depends on

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/vue-fontawesome`
- `bulma`
- `vue`

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[ISC](https://opensource.org/licenses/ISC)
