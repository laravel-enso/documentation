# Discussions

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6aa6c234c4945379d7c6c143733aa43)](https://www.codacy.com/app/laravel-enso/Discussions?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Discussions&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/148976842/shield?branch=master)](https://github.styleci.io/repos/148976842)
[![License](https://poser.pugx.org/laravel-enso/discussions/license)](https://packagist.org/packages/laravel-enso/discussions)
[![Total Downloads](https://poser.pugx.org/laravel-enso/discussions/downloads)](https://packagist.org/packages/laravel-enso/discussions)
[![Total Downloads](https://poser.pugx.org/laravel-enso/discussions/downloads)](https://packagist.org/packages/laravel-enso/discussions)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/discussions/version)](https://packagist.org/packages/laravel-enso/discussions)

Discussions for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/discussions/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/discussions/videos/bulma_discussions.mp4)


<sup>click on the photo to view a short demo in compatible browsers</sup>

### Features

- discussions are grouped around topics
- users can tag other users in their posts
- the tagged users receive notifications
- users can show their appreciation for topics that they like with 'claps'
- powerful what-you-see-is-what-you-get text editor
- within Enso, the Discussions module is integrated with the activity log
- can be attached to any other model, via using a polymorphic relationship
- a `Discussible` trait is available, in order to make it easy to add discussions to a model 
- changes to the discussions and posts are enforced through policies, where changes can be made by the original poster or an administrator
- uses its own suite of specialized bulma styled VueJS components for smooth integration with the rest of the application  

### Publishes

- `php artisan vendor:publish --tag=discussions-config` - configuration files
- `php artisan vendor:publish --tag=discussions-assets` - the required js assets 
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, can be used with the `--force` flag

### Configuration & Usage

Be sure to check out the full documentation for this package available at [docs.laravel-enso.com](https://docs.laravel-enso.com/packages/discussions.html)


### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
