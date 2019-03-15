---
sidebarDepth: 3
---

# Notifications
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/950c5954bb654bb588061a3f793f4697)](https://www.codacy.com/app/laravel-enso/Notifications?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Notifications&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85684795/shield?branch=master)](https://styleci.io/repos/85684795)
[![License](https://poser.pugx.org/laravel-enso/notifications/license)](https://packagist.org/packages/laravel-enso/notifications)
[![Total Downloads](https://poser.pugx.org/laravel-enso/notifications/downloads)](https://packagist.org/packages/laravel-enso/notifications)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/notifications/version)](https://packagist.org/packages/laravel-enso/notifications)

Notifications functionality dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

[![Watch the demo](https://laravel-enso.github.io/notifications/screenshots/bulma_033_thumb.png)](https://laravel-enso.github.io/notifications/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Installation

Comes pre-installed in Enso.

## Features

- uses [Pusher](https://pusher.com/) and [Laravel's notification infrastructure](https://laravel.com/docs/5.5/broadcasting) to bring minimal-setup notification functionality
- users can also be notified via email
- allows the lazy loading of notifications
- read and unread notifications are visually differentiated and can be manually/automatically marked as read, as well as cleared
- polymorphic relationships are used, in order to be able to attach notifications to any entity
- supports and uses Desktop Notifications if allowed by the user

## Usage

If not registered already, register on [Pusher](https://pusher.com/) and then set your credentials in your `.env` file:

```bash
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
```

Once set, these credentials are set during the application init phase.

## Desktop Notifications

On the first web application page load, the app will ask the user whether he wants to allow or block Desktop Notifications. 

If enabled, Desktop Notifications are used for any and all notifications that are received when the application is open 
in a tab but the tab is not visible, the web browser is minimized, etc. 
If any notifications are received while the web application tab is active, Desktop Notifications will not be created - regular toaster notifications will be shown instead.  

When clicking on a desktop notification, the browser will switch to the web application's tab.

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
