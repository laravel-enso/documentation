---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# API

[![License](https://poser.pugx.org/laravel-enso/api/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/api/version)](https://packagist.org/packages/laravel-enso/api)
[![Downloads](https://poser.pugx.org/laravel-enso/api/downloads)](https://packagist.org/packages/laravel-enso/api)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/api.svg)](https://github.com/laravel-enso/api/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/api.svg)](https://github.com/laravel-enso/api/pulls)

## Description

API is Laravel Enso's reusable package for external service integrations and inbound API request logging.

It provides a small action-based client on top of Laravel's HTTP client, plus reusable contracts for authentication, retries, query parameters, file uploads, form payloads, and timeouts. On top of that, it standardizes inbound and outbound API logging, admin notifications for failed calls, and small payload-building helpers used across Enso integrations.

## Installation

This package comes pre-installed in Laravel Enso distributions that integrate external services or expose protected internal API endpoints.

For standalone package installation inside an Enso-based application:

```bash
composer require laravel-enso/api
```

The package auto-registers its service provider, loads its migrations, and registers:

- the `api-action-logger` middleware alias
- the `core-api` middleware group
- the `enso.api` configuration namespace

Run the migrations after installation:

```bash
php artisan migrate
```

If you need to inspect raw request and response traffic during integration work, enable the debug flag in your environment:

```dotenv
API_DEBUG=true
```

## Features

- Wraps outbound integrations in `Action` classes that resolve and execute `Endpoint` definitions.
- Builds requests through Laravel's HTTP client with support for:
  - bearer-token authentication
  - basic authentication
  - custom headers
  - query parameters
  - form submissions
  - file attachments
  - custom timeouts
  - retry policies
- Refreshes an expiring auth token once automatically when an authenticated endpoint receives `401` or `403` on the first try.
- Logs outbound calls in `api_logs`, including URL, route, HTTP method, status, attempt number, payload, type, and duration.
- Logs inbound calls through the `ApiLogger` middleware and reports non-`200` responses to administrators.
- Queues `ApiCallError` notifications to active Enso admins on the `notifications` queue.
- Provides `Resource` and `Filter` base classes for payload shaping and input validation.
- Includes a `Throttle` helper for debouncing repeated external API calls.
- Ships the `api_logs` migration and an `Api\Models\Log` model with Enso caching traits.

::: tip Tip
If an endpoint implements `UsesAuth` and the first response is `401` or `403`, `Api::call()` refreshes the token once through the token provider before continuing with the normal retry flow.
:::

## Usage

### Outbound action

Define a small endpoint class that describes the request:

```php
use LaravelEnso\Api\Contracts\Endpoint;
use LaravelEnso\Api\Enums\Methods;

class FetchOffers implements Endpoint
{
    private array $filters = [];

    public function method(): string
    {
        return Methods::get;
    }

    public function url(): string
    {
        return 'https://posf.ro/api/v1/comparator';
    }

    public function filters(array $filters): self
    {
        $this->filters = $filters;

        return $this;
    }

    public function body(): array
    {
        return $this->filters;
    }
}
```

Wrap it in an `Action` and call `handle()`:

```php
use LaravelEnso\Api\Action;

class FetchOffersAction extends Action
{
    public function __construct(private array $filters)
    {
    }

    protected function endpoint(): Endpoint
    {
        return (new FetchOffers())->filters($this->filters);
    }
}

$response = (new FetchOffersAction([
    'request' => 'comparator-electric',
    'tip_client' => 'casnic',
]))->handle();

$payload = $response->json();
```

### Inbound logging

Use the standalone middleware alias when you only want request logging:

```php
Route::middleware(['auth', 'api-action-logger'])
    ->prefix('internal')
    ->group(function (): void {
        Route::post('sync', SyncController::class)->name('internal.sync');
    });
```

Or use Enso's `core-api` middleware group when the route also needs active-state checks, permission checks, and localisation handling:

```php
Route::middleware(['auth', 'core-api'])
    ->prefix('api')
    ->group(function (): void {
        Route::post('calendar/events', EventController::class)->name('calendar.events.store');
    });
```

### Resource and filter helpers

Use `Resource` when a payload needs nested resource resolution and mandatory attribute validation:

```php
use LaravelEnso\Api\Resource;

class OfferResource extends Resource
{
    public function __construct(private array $offer)
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->offer['id'],
            'supplier' => $this->offer['supplier'],
        ];
    }

    protected function mandatoryAttributes(): array
    {
        return ['id', 'supplier'];
    }
}
```

Use `Filter` when you want to reject unsupported keys before sending them to the remote service:

```php
use LaravelEnso\Api\Filter;

class OfferFilters extends Filter
{
    public function allowed(): array
    {
        return ['request', 'tip_client', 'consum_lunar'];
    }
}

$filters = (new OfferFilters($input))->toArray();
```

## API

### Core classes

- `LaravelEnso\Api\Api`
  Builds and executes the HTTP request, applies optional contracts, tracks attempt count, refreshes bearer tokens once when needed, and retries failed calls when the endpoint allows it.
- `LaravelEnso\Api\Action`
  Orchestrates one outbound call, measures duration, persists the outbound log entry, reports failures, and returns the `Illuminate\Http\Client\Response`.

### Contracts

Required contract:

- `Endpoint`
  Defines `method()`, `url()`, and `body()`.

Optional contracts:

- `UsesAuth`
  Adds bearer token support through a token provider.
- `UsesBasicAuth`
  Adds HTTP basic authentication.
- `CustomHeaders`
  Adds arbitrary request headers.
- `QueryParameters`
  Appends `parameters()` to the request URL.
- `Retry`
  Enables retries through `tries()` and `delay()`.
- `Timeout`
  Sets a custom HTTP timeout.
- `AsForm`
  Sends the payload as form data.
- `AttachesFiles`
  Attaches files to the pending request.
- `Token`
  Defines the token provider contract used by `UsesAuth`.

### Middleware

- `api-action-logger`
  Alias for `LaravelEnso\Api\Http\Middleware\ApiLogger`
- `core-api`
  Middleware group registered by the service provider:
  - `LaravelEnso\Core\Http\Middleware\VerifyActiveState`
  - `LaravelEnso\Api\Http\Middleware\ApiLogger`
  - `LaravelEnso\Permissions\Http\Middleware\VerifyRouteAccess`
  - `LaravelEnso\Localisation\Http\Middleware\SetLanguage`

### Log model and storage

`LaravelEnso\Api\Models\Log`

Stored attributes:

- `user_id`
- `route`
- `url`
- `payload`
- `method`
- `status`
- `try`
- `type`
- `duration`
- `created_at`
- `updated_at`

Relationships and casts:

- `user()`
  Belongs to `LaravelEnso\Users\Models\User`
- `payload`
  Cast to array

Logging types:

- `Calls::Inbound`
- `Calls::Outbound`

### Resource, filter, and throttle helpers

- `Resource::resolve()`
  Resolves nested resources and validates mandatory attributes.
- `Resource::collection()`
  Maps a collection into resolved resource arrays.
- `Resource::toJson()`
  Serializes the resource payload.
- `Filter::toArray()`
  Rejects unsupported keys before returning the filter array.
- `Throttle::__invoke()`
  Debounces repeated calls by sleeping until the configured interval has elapsed.

::: warning Note
Inbound logging reports any non-`200` response through `ApiCallError`, while outbound actions report failed responses and thrown exceptions through the same notification pipeline.

The notification handler targets active Enso admins and queues the email on the `notifications` queue.
:::

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/enums`](https://docs.laravel-enso.com/backend/enums.html) [↗](https://github.com/laravel-enso/enums)
- [`laravel-enso/helpers`](https://docs.laravel-enso.com/backend/helpers.html) [↗](https://github.com/laravel-enso/helpers)
- [`laravel-enso/localisation`](https://docs.laravel-enso.com/backend/localisation.html) [↗](https://github.com/laravel-enso/localisation)
- [`laravel-enso/permissions`](https://docs.laravel-enso.com/backend/permissions.html) [↗](https://github.com/laravel-enso/permissions)
- [`laravel-enso/rememberable`](https://docs.laravel-enso.com/backend/rememberable.html) [↗](https://github.com/laravel-enso/rememberable)
- [`laravel-enso/tables`](https://docs.laravel-enso.com/backend/tables.html) [↗](https://github.com/laravel-enso/tables)
- [`laravel-enso/upgrade`](https://docs.laravel-enso.com/backend/upgrade.html) [↗](https://github.com/laravel-enso/upgrade)
- [`laravel-enso/users`](https://docs.laravel-enso.com/backend/users.html) [↗](https://github.com/laravel-enso/users)

Framework dependency:

- [Laravel framework ↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/api/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 9:03:22 AM</div>
</div>
