# Action Logger
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dc3819bf2c654b3d8dcaaed8898b214f)](https://www.codacy.com/app/laravel-enso/ActionLogger?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/ActionLogger&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/85554059/shield?branch=master)](https://styleci.io/repos/85554059)
[![License](https://poser.pugx.org/laravel-enso/actionlogger/license)](https://packagist.org/packages/laravel-enso/actionlogger)
[![Total Downloads](https://poser.pugx.org/laravel-enso/actionlogger/downloads)](https://packagist.org/packages/laravel-enso/actionlogger)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/actionlogger/version)](https://packagist.org/packages/laravel-enso/actionlogger)

User actions logger dependency for [Laravel](https://laravel.com).

## Features

- creates the `action-logger` middleware, the `action_logs` table and the `ActionLog` model
- will log all access routes covered by the `action-logger` middleware
- comes with the `ActionLogs` trait that defines the relationship to the `ActionLog` model, and should be included in your user model
- each entry will record `user_id`, `url`, `route` name, http `method` verb and timestamps

## Usage

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

### Demo

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

### Steps

1. Include the `action-logger` middleware on the routes that you want covered

2. Add the `ActionLogs` trait on your user model, so you may retrieve the user's  actions


::: warning

Since the logged info contains the user_id, this means you cannot use
the middleware on routes where the user information is unavailable 
(e.g. the user is not authenticated).

:::

## Notes

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.

Within Laravel Enso, the list of actions for an user are available in each user's profile page.
