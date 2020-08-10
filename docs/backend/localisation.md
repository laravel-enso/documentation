---
sidebarDepth: 3
---

# Localisation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/235db862227e460792a72a1e65427d1f)](https://www.codacy.com/app/laravel-enso/localisation?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/localisation&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/85617309/shield?branch=master)](https://github.styleci.io/repos/85617309)
[![License](https://poser.pugx.org/laravel-enso/localisation/license)](https://packagist.org/packages/laravel-enso/localisation)
[![Total Downloads](https://poser.pugx.org/laravel-enso/localisation/downloads)](https://packagist.org/packages/laravel-enso/localisation)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/localisation/version)](https://packagist.org/packages/laravel-enso/localisation)

Localisation management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Screenshot](https://laravel-enso.github.io/localisation/screenshots/bulma_010_thumb.png)](https://laravel-enso.github.io/localisation/screenshots/bulma_010.png)

[![Watch the demo](https://laravel-enso.github.io/localisation/screenshots/bulma_011_thumb.png)](https://laravel-enso.github.io/localisation/videos/bulma_demo_01.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- allows an easier management of languages, keys and translations in the context of a multi language application
- uses the newer Laravel `__()` translation method and stores keys and translations inside a JSON file
- permits adding as many languages as you require and the quick creation of translations for the keys you need
- the language selector is easily accessible in the right-hand sidebar

## Usage

Please note that because we want to keep the compiled size down, throughout the enso ecosystem, 
icons are imported selectively.

What this means for the localisation package, is that when adding a new language, you should also make sure you 
import the required flag icon SVG and declare the corresponding class. The proper place to include the new icon is:

`resources/assets/sass/app.scss`

### Under the Hood

- the `languages` table stores the available languages for localisation
   - `name` - the language code, e.g. 'en'
   - `display_name` - the label for the language, visible in the UI, e.g. 'English'
   - `flag` - the icon class used for showing the flag
   - `is_active` - flag for marking a language as active/inactive

- when translating, the new Laravel mechanism is used, respectively the `__()` function 
- the main language is considered to be english
- the keys are, by convention, in english and in a human readable format e.g. 'Date of Birth', and if a key is not found, the value of the key is used instead
- the keys and the values for the project specific keys are kept in `resources/lang/app/*code*.json`  where code is the language code, e.g. 'de' for german, with the exception for the English language, since keys are already in English
- the keys and the values for the core/Enso specific keys are kept in `resources/lang/enso/*code*.json` 
- due to Laravel's implementation, there are 4 translation categories which cannot be implemented using the new mechanism: `auth`, `pagination`, `passwords`, `validation`. For this reason, we keep the respective language files in their proper language sub-folders
- the moment a new language is added from the interface
    - the new language is saved in the database
    - the four php translation files are copied to a newly created language folder
    - a new JSON language file is generated, containing the keys for the existing core/Enso translations, at `resources/lang/enso/`. The keys are collected using as reference the first existing JSON file
    - a new JSON language file is generated, which is empty, and which will hold project specific keys
- when deleting a language
    - the language is removed from the database
    - the language folder and its contents are removed
    - the two JSON language files are removed

- the `set-language` middleware is used to set the locale for the backend, for each request, depending on 
the user's language preference
- the `LanguagePolicy` ensures that when deleting a language, a user cannot delete the default language, or 
the language he has currently set as active in his preferences
- the list of languages and the translations are loaded on app init, so the changes will be available at the next login
or at a page refresh
- the authentication and password reset pages would not normally have available the user's preferences 
(which include the chosen language). To get around this, the app checks the browser's local storage for the preferences,
if they have been previously set, falling back to the default application language otherwise. 

## Contributing
First off, thanks for taking the time to contribute a new language and translations.

For country flags, we're using the [flag-icon-css](http://flag-icon-css.lip.is/) library, 
so make sure to take a look and identify your country's xx
[2 letter iso_3166_2 standard](https://www.iso.org/obp/ui/#search) short name.

### New language
Due to the modular structure of the project, a few steps are necessary:

1. From the UI, navigate to `/system/localisation/create`, add a new language. Under the hood, this creates a few files:
    - a new language file in `src/resources/lang/app/xx.json`, for the project specific translations, 
    - a new language file in `vendor/laravel-enso/localisation/src/resources/lang/enso/xx.json`, for the core Enso translations, 
    - a new folder in `src/resources/lang/xx` which contains
    the required Laravel translation files (`auth.php`, `pagination.php`, `passwords.php` and `validation.php`)

    At this stage, the new language will appear in the list without a flag, 
    and that's ok, since the flag class is not yet imported.    
 
2. Use the interface to translate the existing core keys, by accessing `/system/localisation/editTexts`, 
selecting the new language and flipping the `app/core` switch to core.

Any translations you add will be saved directly in the localisation package.

3. Update the `vendor/laravel-enso/localisation/src/database/migrations/2017_01_01_134500_create_structure_for_localisation.php` 
migration to include the new language

4. Add a new SCSS class for the country flag in `node_modules/@enso-ui/ui/src/bulma/components/settings/flags/flags.scss`, 
using the existing ones as example

5. Add the new language in `node_modules/@enso-ui/datepicker/src/locale/locale.js`, 
using the existing ones as example

6. Add the new language in `node_modules/@enso-ui/ui/src/modules/plugins/date-fns/i18n.js`

At this stage, you've made the necessary changes, and everything should work, after compiling 
the front-end assets with `yarn build` (from within the `client` folder).

Next, we need to commit all updated files to their respective repositories, 
since we've been working on the published resources as well as directly in the node_modules directory.

#### Changes per package
##### The Localisation package
1. already contains the updated migration `2017_01_01_134500_create_structure_for_localisation.php` (ref. step 3, above)
2. copy the new app lang file `xx.json` from `resources/lang/app/` to `vendor/laravel-enso/localisation/src/resources/lang/app/`
3. copy the new folder `xx` from  `resources/lang/` to `vendor/laravel-enso/localisation/src/resources/lang/`

The core translations you have added should already be in the `xx.json` package file.

##### The NPM ui package
1. make a git clone for the package and copy the modified file above:
    - `i18n.js`
    - `flags.scss`
    
##### The NPM datepicker package
1. make a git clone for the package and copy the modified file above:
    - `locale.js`

#### Finally
Make pull requests for these three packages, with the files mentioned above.

### Existing language 

First off, thanks for taking the time to contribute with translations for the project.

From time to time, as the project grows, new text/keys are added and the translations need to be updated. If you notice 
missing translations, and want to add them, please follow the steps below.

#### Adding missing translations
1. Make sure you have the latest version of the translation files (you may manually update/replace the contents of your local`resources/lang/enso/xx.json` from [here](https://github.com/laravel-enso/Localisation/tree/master/src/resources/lang/enso))
2. From the UI, navigate to `/system/localisation/` and click on `Edit Texts`.
3. Choose the desired language, flip the type switch to `Core` and ideally also enable the `Only missing` filter
4. Fill in the missing texts and save your changes by clicking `Update`
5. Copy the content of `vendor/laravel-enso/localisation/src/resources/lang/enso/xx.json` as this is where your changes are saved
6. Navigate [here](https://github.com/laravel-enso/Localisation/tree/master/src/resources/lang/enso) and click on the pencil button to edit the file
7. Paste your translations
8. Create a pull request for the changes

## Publishes

- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the VueJS assets,
once a newer version is released, can be used with the `--force` flag
- `php artisan vendor:publish --tag=localisation-factory` - the factory used for localisation
- `php artisan vendor:publish --tag=enso-factories` - a common alias for when wanting to update the factories 
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=localisations-seeder` - the seeder used for localisation
- `php artisan vendor:publish --tag=enso-seeders` - a common alias for when wanting to update the seeders 
once a newer version is released, usually used with the `--force` flag
- `php artisan vendor:publish --tag=localisations-config` - the configuration
- `php artisan vendor:publish --tag=localisation-lang-files` - the localisation language files

## External dependencies
- [date](https://github.com/jenssegers/date)

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
