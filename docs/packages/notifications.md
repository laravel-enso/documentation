# Notifications
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/950c5954bb654bb588061a3f793f4697)](https://www.codacy.com/app/laravel-enso/Notifications?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Notifications&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85684795/shield?branch=master)](https://styleci.io/repos/85684795)
[![License](https://poser.pugx.org/laravel-enso/notifications/license)](https://packagist.org/packages/laravel-enso/notifications)
[![Total Downloads](https://poser.pugx.org/laravel-enso/notifications/downloads)](https://packagist.org/packages/laravel-enso/notifications)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/notifications/version)](https://packagist.org/packages/laravel-enso/notifications)

Notifications functionality dependency for [Laravel Enso](https://github.com/laravel-enso/Enso)

[![Watch the demo](https://laravel-enso.github.io/notifications/screenshots/bulma_033_thumb.png)](https://laravel-enso.github.io/notifications/videos/bulma_demo_01.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

## Features

- uses [Pusher](https://pusher.com/) and [Laravel's notification infrastructure](https://laravel.com/docs/5.5/broadcasting) to bring minimal-setup notification functionality
- users can also be notified via email
- allows the lazy loading of notifications
- read and unread notifications are visually differentiated and can be manually/automatically marked as read, as well as cleared
- polymorphic relationships are used, in order to be able to attach notifications to any entity

## Installation Steps

If not registered already, register on [Pusher](https://pusher.com/) and then set your credentials in your `.env` file:

```bash
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
```

Once set, these credentials are set during the application init phase.

## Notes

The [Laravel Enso](https://github.com/laravel-enso/Enso) package comes with this package included.

Depends on:
 - [Core](https://github.com/laravel-enso/Core) for middleware 
 - [Structure manager](https://github.com/laravel-enso/StructureManager) for the migrations
 - [PusherPhpServer](https://github.com/pusher/pusher-php-server) for the integration with pusher 
