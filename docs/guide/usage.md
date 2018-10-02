# Usage

## Setup a new project

1. Follow the install steps
2. Delete the .git folder and run `git init`, then configure repository for your custom project
3. Develop
4. To update run `composer update` / `yarn update` and compile
5. Breaking changes in the dependencies? Update your custom code then update the new versions in `composer.json` and run `composer update`
6. Need another new project ? Start again from the first step

## Updates
When we must make breaking changes to the packages, we increase the minor version. 
Due to how dependencies are defined, composer will not update the dependencies for you in that case, 
that's why you need to look at the changelog, be aware of the changes, update your code and then manually update 
the dependencies' minor version, so that you can continue to receive updates.  

When updating Enso and introducing possibly breaking changes, we might make available various Artisan commands, 
meant to make the update easier.
You can see the list of currently available commands by running `php artisan enso` 
and remember to always consult the changelog.

Note that, if not specified. Just running `compose update` & recompiling (`yarn dev`/`prod`) is all you need to do.

## Localisation
If you want to add a new language, there are a few steps involved, so please check out 
the [relevant section](https://github.com/laravel-enso/Localisation#contributing-a-new-language) of 
the [localisation](https://github.com/laravel-enso/Localisation) package.

## Icons
We want to keep the compiled size down throughout the Enso ecosystem so icons are imported selectively.

What this means for you is that the necessary icons should be imported inside your components/pages. 
If you want to import FA icons globally (not recommended) the place to include them is: 

`resources/assets/js/app.js`

For menus, icons should be imported in:
`assets/js/core/structure/sidebar/icons/app.js`

For languages, flag icons should be imported in:
`resources/assets/sass/app.scss`

(use `flags.scss` as a reference)

## Email templates
By default, Enso comes with a few templates for the email notifications used out of the box.
If you need to create other templates or change the existing ones, a good starting point is to publish
the existing templates, using the `php artisan vendor:publish --tag=enso-mail` artisan command.

The blade templates will be published in the  `resources/views/vendor/laravel-enso` folder.
You'll find the template layout and partials in the `core` folder and sub-folders.   

By default, the Mailtrap [token variable](https://documentation.mailgun.com/en/latest/user_manual.html#tracking-unsubscribes) is used for the unsubscribe link. 
You may customize the footer partial to use the desired token.  

## Vuex store
When developing an application on top of Enso, it makes sense to keep your app state data separate from the core Enso state. 
In order to achieve this, you need to customize just 2 files, one for each layer.

### Back-End
- you need a `StateBuilder` implementation class, 
that should be given as a value for the `enso.config.stateBuilder` configuration parameter 
- by default, the `App\Classes\LocalState` is provided as blank template
- the additional state data is returned to the front end via the same response (`/core/api`) as the core Enso state data

### Front-End
As you may need to initialize or otherwise process the local state data received from the back-end, 
`resources/assets/js/localState.js` holds the entry point method you can customize and add logic to.

Here you'll have access to the Vuex `context` object and your local `state` data, received from the back-end. 
