# Teams

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/182a696508584243a45ece7572959a32)](https://www.codacy.com/app/laravel-enso/Teams?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Teams&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/151522931/shield?branch=master)](https://github.styleci.io/repos/151522931)
[![License](https://poser.pugx.org/laravel-enso/teams/license)](https://packagist.org/packages/laravel-enso/teams)
[![Total Downloads](https://poser.pugx.org/laravel-enso/teams/downloads)](https://packagist.org/packages/laravel-enso/teams)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/teams/version)](https://packagist.org/packages/laravel-enso/teams)

Team management dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/teams/screenshots/bulma_001_thumb.png)](https://laravel-enso.github.io/teams/videos/bulma_demo_01.mp4)

<sup>click on the photo to view a short demo in compatible browsers</sup>

### Features

* simple structure to group users under a team
* the current team structure is basic, and can be further used as needed
* search through teams as required
* the Team model has its activity tracked (integration with [ActivityLog](https://github.com/laravel-enso/ActivityLog))

### Configuration & Usage

Be sure to check out the full documentation for this package available at [docs.laravel-enso.com](https://docs.laravel-enso.com/packages/teams.html)

### Publishes

- `php artisan vendor:publish --tag=teams-assets` - the package JS assets
- `php artisan vendor:publish --tag=enso-assets` - a common alias for when wanting to update the assets,
once a newer version is released, can be used with the `--force` flag

### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.