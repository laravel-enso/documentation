---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Calendar

[![License](https://poser.pugx.org/laravel-enso/calendar/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/calendar/version)](https://packagist.org/packages/laravel-enso/calendar)
[![Downloads](https://poser.pugx.org/laravel-enso/calendar/downloads)](https://packagist.org/packages/laravel-enso/calendar)
[![PHP](https://img.shields.io/badge/php-8.3%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/calendar.svg)](https://github.com/laravel-enso/calendar/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/calendar.svg)](https://github.com/laravel-enso/calendar/pulls)

## Description

Calendar adds calendar and event management to Laravel Enso.

The package supports persisted calendars and events, recurring event sequences, attendees, reminders, all-day events, and custom readonly calendar sources that can project data from outside the `calendar_events` table.

It also ships with a builtin Birthday calendar, reminder notifications delivered through mail, database, and broadcast channels, plus the backend API and form metadata consumed by the Enso calendar frontend.

## Installation

This package is normally installed as part of the Enso ecosystem.

For standalone installation in an Enso-based application:

```bash
composer require laravel-enso/calendar
```

Optional publishes:

```bash
php artisan vendor:publish --tag=calendar-provider
php artisan vendor:publish --tag=calendar-config
php artisan vendor:publish --tag=calendar-mail
php artisan vendor:publish --tag=calendar-factories
```

Birthday calendar configuration:

```php
return [
    'birthdays' => [
        'roles' => ['*'],
    ],
];
```

The package also registers the reminder command:

```bash
php artisan enso:calendar:send-reminders
```

## Features

- Manages calendars with configurable colors and privacy flags.
- Manages events with title, body, location, attendees, reminders, geocoordinates, and all-day support.
- Supports recurring events with `Once`, `Daily`, `Weekdays`, `Weekly`, `Monthly`, and `Yearly` frequencies.
- Supports recurrence update scopes: `Only This`, `This And Future`, and `All`.
- Generates and reshapes recurring sequences through dedicated create, update, delete, and extraction services.
- Exposes a builtin readonly Birthday calendar sourced from `Person` records.
- Allows registering additional custom calendars that return readonly event projections.
- Sends overdue reminders through queued mail, database, and broadcast notifications.
- Registers form metadata and API resources used by the Enso calendar frontend.

## Usage

Create and manage native calendars and events through the provided API routes, or register custom readonly calendars through the published provider:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Calendars\OrdersCalendar;

class CalendarServiceProvider extends ServiceProvider
{
    protected array $register = [
        OrdersCalendar::class,
    ];
}
```

A custom calendar must implement `LaravelEnso\Calendar\Contracts\CustomCalendar` and return event objects that implement `LaravelEnso\Calendar\Contracts\ProvidesEvent`.

To dispatch due reminders manually:

```bash
php artisan enso:calendar:send-reminders
```

::: tip Tip
Use custom calendars for readonly projections coming from other bounded contexts. If users need to create or edit the events themselves, store them as native `Calendar` and `Event` records instead.
:::

::: warning Note
Reminder notifications depend on Laravel's scheduler. If the scheduler is not running, overdue reminders will remain pending until `enso:calendar:send-reminders` is executed.
:::

## API

### Commands

- `enso:calendar:send-reminders`

### Calendar Routes

All routes are registered under the `core.calendar.` name prefix and `/api/core/calendar` path prefix.

- `GET /api/core/calendar` -> `core.calendar.index`
- `GET /api/core/calendar/create` -> `core.calendar.create`
- `POST /api/core/calendar` -> `core.calendar.store`
- `GET /api/core/calendar/{calendar}/edit` -> `core.calendar.edit`
- `PATCH /api/core/calendar/{calendar}` -> `core.calendar.update`
- `DELETE /api/core/calendar/{calendar}` -> `core.calendar.destroy`
- `GET /api/core/calendar/options` -> `core.calendar.options`

### Event Routes

Event routes are registered under the `core.calendar.events.` name prefix.

- `GET /api/core/calendar/events` -> `core.calendar.events.index`
- `GET /api/core/calendar/events/create` -> `core.calendar.events.create`
- `POST /api/core/calendar/events` -> `core.calendar.events.store`
- `GET /api/core/calendar/events/{event}/edit` -> `core.calendar.events.edit`
- `PATCH /api/core/calendar/events/{event}` -> `core.calendar.events.update`
- `DELETE /api/core/calendar/events/{event}` -> `core.calendar.events.destroy`

### Models

#### Calendar

`LaravelEnso\Calendar\Models\Calendar`

Key relations:

- `events()`

Exposed state:

- `name()`
- `color()`
- `private()`
- `readonly()`

#### Event

`LaravelEnso\Calendar\Models\Event`

Key relations:

- `parent()`
- `events()`
- `attendees()`
- `calendar()`
- `reminders()`

Key methods:

- `store(?int $updateType = null)`
- `remove(?int $updateType)`
- `attendeeList()`
- `updateReminders($reminders)`

Supported frequencies:

- `Once`
- `Daily`
- `Weekdays`
- `Weekly`
- `Monthly`
- `Yearly`

Supported recurrence update scopes:

- `Only This`
- `This And Future`
- `All`

#### Reminder

`LaravelEnso\Calendar\Models\Reminder`

Key methods and scopes:

- `send()`
- `scopeNotSent()`
- `scopeOverdue()`
- `scopeShouldSend()`

### Custom Calendar Contracts

- `LaravelEnso\Calendar\Contracts\Calendar`
- `LaravelEnso\Calendar\Contracts\CustomCalendar`
- `LaravelEnso\Calendar\Contracts\ProvidesEvent`
- `LaravelEnso\Calendar\Contracts\Routable`

The builtin `BirthdayCalendar` is the reference implementation for readonly custom calendars.

### Event Payload

The event resource returned to the frontend includes:

- `id`
- `title`
- `parentId`
- `isLast`
- `body`
- `start`
- `end`
- `location`
- `frequency`
- `recurrenceEnds`
- `allDay`
- `readonly`
- `class`
- `route`
- `deletable`
- `resizable`

### Validation Rules

The event request validates:

- calendar membership
- supported frequency ids
- start and end dates
- start and end times
- attendee ids
- recurrence end dates
- update scope

It also prevents:

- recurring metadata on singular events
- invalid subsequence backdating when updating future events

### Configuration

`config/enso/calendar.php`

Keys:

- `birthdays.roles`

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/forms`](https://docs.laravel-enso.com/backend/forms.html) [↗](https://github.com/laravel-enso/forms)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/migrator`](https://docs.laravel-enso.com/backend/migrator.html) [↗](https://github.com/laravel-enso/migrator)
- [`laravel-enso/people`](https://docs.laravel-enso.com/backend/people.html) [↗](https://github.com/laravel-enso/people)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/select`](https://docs.laravel-enso.com/backend/select.html) [↗](https://github.com/laravel-enso/select)
- [`laravel-enso/track-who`](https://docs.laravel-enso.com/backend/track-who.html) [↗](https://github.com/laravel-enso/track-who)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Companion frontend package:

- [`@enso-ui/calendar`](https://docs.laravel-enso.com/frontend/calendar.html) [↗](https://github.com/enso-ui/calendar)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/calendar/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:57:22 AM</div>
</div>
