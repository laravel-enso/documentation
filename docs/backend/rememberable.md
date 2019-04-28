---
sidebarDepth: 3
---

# Rememberable

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2eba208ec82d485786715915ec75f8bf)](https://www.codacy.com/app/laravel-enso/Rememberable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Rememberable&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/90758167/shield?branch=master)](https://styleci.io/repos/90758167)
[![License](https://poser.pugx.org/laravel-enso/rememberable/license)](https://packagist.org/packages/laravel-enso/rememberable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/rememberable/downloads)](https://packagist.org/packages/laravel-enso/rememberable)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/rememberable/version)](https://packagist.org/packages/laravel-enso/rememberable)

Model caching for Laravel

This package can work independently of the [Enso](https://github.com/laravel-enso/Enso) ecosystem.

For live examples and demos, you may visit [laravel-enso.com](https://www.laravel-enso.com)

## Installation

Comes pre-installed in Enso.

To install outside of Enso: `composer require laravel-enso/rememberable`

## Features

- comes with a trait that provides helper methods for quick and easy caching usage (setting and retrieving)
- the cache lifetime may be set per-model or per-project

## Usage

1. Use the `Rememberable` trait in the CachedModel that you want to track

2. You **MUST** set the caching duration (in minutes) by either:
    - adding a `protected $cacheLifetime = 123;` property in your CachedModel
    - setting the `enso.config.cacheLifetime` configuration value as desired

3. Whenever you need to retrieve a cached model instead of getting it directly from the database:

    ```php
    CachedModel::find($id)
    ```

you should get it from cache

    ```php
    CachedModel::cacheGet($id)
    ```

voila!

::: tip

You may use the global `enso.config.cacheLifetime` configuration together with local/per-model 
cache lifetime values. 

If given, the trait favors the per-model cache lifetime value over the global configuration value,
thus you can override the global setting as required.  
::: 

## Contributions

are welcome. Pull requests are great, but issues are good too.

## License

This package is released under the MIT license.
