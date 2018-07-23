# Impersonate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc8f68f71064cd0b811462ef097879d)](https://www.codacy.com/app/laravel-enso/Impersonate?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Impersonate&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/94622194/shield?branch=master)](https://styleci.io/repos/94622194)
[![License](https://poser.pugx.org/laravel-enso/impersonate/license)](https://packagist.org/packages/laravel-enso/impersonate)
[![Total Downloads](https://poser.pugx.org/laravel-enso/impersonate/downloads)](https://packagist.org/packages/laravel-enso/impersonate)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/impersonate/version)](https://packagist.org/packages/laravel-enso/impersonate)

User impersonation dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

[![Watch the demo](https://laravel-enso.github.io/impersonate/screenshots/bulma_014_thumb.png)](https://laravel-enso.github.io/impersonate/videos/bulma_how_to_impersonate.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Details

- allows a user to impersonate another user, by using a middleware
- permits testing and debugging from the perspective of another user, without needing his credentials
- comes with its own controller and routes that permit starting and stopping the impersonation process
- depends on [Permission Manager](https://github.com/laravel-enso/PermissionManager) in order to be able to verify permissions

## Installation Steps

1. Run the migrations `php artisan migrate`

2. Use the `Impersonate` trait inside your user model - as this will allow the middleware to work correctly 

4. Use the `api/core/impersonate/{user}` and `api/core/impersonate/stop` routes to start, respectively stop the impersonation    

## Notes

The access for the impersonation process is determined by the (admin) user's access to the impersonation routes.

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.