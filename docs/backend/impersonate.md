---
sidebarDepth: 3
---

# Impersonate

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fdc8f68f71064cd0b811462ef097879d)](https://www.codacy.com/app/laravel-enso/Impersonate?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/Impersonate&utm_campaign=badger)
[![StyleCI](https://styleci.io/repos/94622194/shield?branch=master)](https://styleci.io/repos/94622194)
[![License](https://poser.pugx.org/laravel-enso/impersonate/license)](https://packagist.org/packages/laravel-enso/impersonate)
[![Total Downloads](https://poser.pugx.org/laravel-enso/impersonate/downloads)](https://packagist.org/packages/laravel-enso/impersonate)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/impersonate/version)](https://packagist.org/packages/laravel-enso/impersonate)

User impersonation dependency for [Laravel Enso](https://github.com/laravel-enso/Enso).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/impersonate/screenshots/bulma_014_thumb.png)](https://laravel-enso.github.io/impersonate/videos/bulma_how_to_impersonate.webm)
<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- allows a user to impersonate another user, by using a middleware
- permits testing and debugging from the perspective of another user, without needing his credentials
- comes with its own controller and routes that permit starting and stopping the impersonation process
- depends on [Permission Manager](https://github.com/laravel-enso/PermissionManager) in order to be able to verify permissions
- the access for the impersonation process is determined by the (admin) user's access to the impersonation routes.

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
