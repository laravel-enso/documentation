---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Cache Chain

[![License](https://poser.pugx.org/laravel-enso/cache-chain/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/cache-chain/version)](https://packagist.org/packages/laravel-enso/cache-chain)
[![Downloads](https://poser.pugx.org/laravel-enso/cache-chain/downloads)](https://packagist.org/packages/laravel-enso/cache-chain)
[![PHP](https://img.shields.io/badge/php-8.0%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/cache-chain.svg)](https://github.com/laravel-enso/cache-chain/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/cache-chain.svg)](https://github.com/laravel-enso/cache-chain/pulls)

## Description

Cache Chain is a layered Laravel cache store that lets multiple cache providers behave like a single repository.

It reads values from the first configured cache store that contains the key, then backfills the missing lower layers so subsequent reads can be served faster. Write operations are propagated to every configured provider, which makes the chain useful when combining fast local caches with slower persistent ones.

The package works independently of the Enso ecosystem and integrates through Laravel's native `Cache::store()` extension mechanism.

## Installation

Install the package:

```bash
composer require laravel-enso/cache-chain
```

The service provider is auto-registered and adds a `chain` cache driver to Laravel.

Configure a cache store that uses the driver:

```php
'stores' => [
    'chain' => [
        'driver' => 'chain',
        'providers' => ['array', 'redis', 'file'],
        'defaultTTL' => 300,
    ],
],
```

`providers` must contain the cache stores that will participate in the chain, ordered from the fastest or most local layer to the slowest or most persistent one.

`defaultTTL` controls how values discovered in deeper layers are written back into missing upper layers. When it is omitted or set to `0`, backfilled values are cached forever.

## Features

- Registers a custom Laravel cache driver named `chain`.
- Supports combining multiple cache stores into one layered repository.
- Reads from the first provider that contains the requested key.
- Backfills missing lower layers when a value is found in a superior layer.
- Propagates `put`, `forever`, `forget`, `flush`, and `touch` operations to every configured provider.
- Keeps `increment()` and `decrement()` values in sync across all layers.
- Delegates cache locks to the last configured provider that supports Laravel locks.

## Usage

Use the configured store like any other Laravel cache repository:

```php
use Illuminate\Support\Facades\Cache;

$cache = Cache::store('chain');

$cache->put('settings.theme', 'dark', 300);

$theme = $cache->get('settings.theme');
```

Layered reads are automatic. If the first provider misses and a deeper provider contains the value, the package returns that value and repopulates the missing upper layers.

Increment and decrement operations keep all configured stores aligned:

```php
$cache = Cache::store('chain');

$cache->put('visits', 10, 300);

$cache->increment('visits', 5);
```

::: warning Note
`providers` cannot be empty.

If you want to use cache locks through the chain, at least one configured provider must support Laravel's lock API.
:::

## API

### Driver Registration

`LaravelEnso\CacheChain\AppServiceProvider`

The package registers a custom cache driver through `Cache::extend('chain', ...)`.

### Store Configuration

Required configuration keys for a chain store:

- `driver`
- `providers`

Optional configuration keys:

- `defaultTTL`

### Core Class

`LaravelEnso\CacheChain\Extensions\Chain`

Key methods:

- `providers(array $providers)`
- `get($key)`
- `put($key, $value, $seconds)`
- `touch($key, $seconds)`
- `increment($key, $value = 1)`
- `decrement($key, $value = 1)`
- `forever($key, $value)`
- `forget($key)`
- `flush()`
- `lock($name, $seconds = 0, $owner = null)`
- `restoreLock($name, $owner)`

### Exceptions

`LaravelEnso\CacheChain\Exceptions\Chain`

Exception factories:

- `providers()`
- `lockProvider()`

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/cache-chain/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:21:55 PM</div>
</div>
