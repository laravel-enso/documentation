---
sidebarDepth: 3
---

# IO

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ff415bb65927479a80d173622d3c11ed)](https://www.codacy.com/app/laravel-enso/io?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/io&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://github.styleci.io/repos/134861936/shield?branch=master)](https://github.styleci.io/repos/134861936)
[![License](https://poser.pugx.org/laravel-enso/io/license)](https://packagist.org/packages/laravel-enso/io)
[![Total Downloads](https://poser.pugx.org/laravel-enso/io/downloads)](https://packagist.org/packages/laravel-enso/io)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/io/version)](https://packagist.org/packages/laravel-enso/io)

IO process monitoring dependency for [Laravel-Enso](https://laravel-enso.com).

This package works exclusively within the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

The front end assets that utilize this api are present in the [ui](https://github.com/enso-ui/ui) package.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

## Features

- provides a series of classes useful when working with long running IO operations
- includes the reusable `IOEvent` broadcastable event class
- is already used in the Data Import and Data Export packages
- comes with Enums for the events, statuses and types
- provides an observer that can be used on models that perform IO operations

## Usage

When wishing to broadcast IO events you need to:
- add the `HasIOStatuses` on the desired model
- the model must implement the `IOOperation` interface
- in `AppServiceProvider`, set the `IOObserver` to observe the model

Whenever the model will be created, or updated, an event will be dispatched.

The Enso front end assets are designed to display the progress information available
in the dispatched events. 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
