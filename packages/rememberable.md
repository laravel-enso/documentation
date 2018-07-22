# Rememberable
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2eba208ec82d485786715915ec75f8bf)](https://www.codacy.com/app/laravel-enso/Rememberable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=laravel-enso/Rememberable&amp;utm_campaign=Badge_Grade)
[![StyleCI](https://styleci.io/repos/90758167/shield?branch=master)](https://styleci.io/repos/90758167)
[![License](https://poser.pugx.org/laravel-enso/rememberable/license)](https://packagist.org/packages/laravel-enso/rememberable)
[![Total Downloads](https://poser.pugx.org/laravel-enso/rememberable/downloads)](https://packagist.org/packages/laravel-enso/rememberable)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/rememberable/version)](https://packagist.org/packages/laravel-enso/rememberable)

Model caching for Laravel

### Details

- comes with 2 traits that provide helper methods for quick and easy caching usage (setting and retrieving)
- the cache lifetime may be set per model, else, if not set, the per-project setting is used, finally falling back to a default of 60 minutes if neither option is available
- uses the Laravel `cache()` helper method so is transparent to the cache mechanism/implementation

### Simple Use Example

1. Use the `Rememberable` trait in the CachedModel that you want to track

2. The default caching duration is 60 minutes. If you need to change it add a `protected property $cacheLifetime = 123;` in your CachedModel

3. In the RemoteModel where you have a `belongsTo` relationship to the CachedModel use the ` CacheReader` trait.

4. Define a method in the RemoteModel as below:

```php
public function getCachedModel()
{
    return $this->getModelFromCache(
        CachedModel::class,
        $this->cached_model_id
    );
}
```

5. You can even call nested relations like this:

```php
$remoteModel->getCachedModel()
    ->getAnotherCachedModel()
    ->chainOtherRelationsOrMethods;
```

### Notes

The `Rememberable` trait takes care of adding to cache the tracked models on creation, refreshing the cache whenever models are updated and clearing the cache on models deletion.

The key used for caching a model is obtained by concatenating the model's fully qualified class name, a colon mark and the id. E.g.: `App\User:1` is the key for a user with the id of 1. You can also do `cache()->get('App\User:1')` if you don't want to use the retrieving helper.

In projects based on Enso you may set the global cache lifetime in the `config/enso/config.php` file directly, or
by adding/setting the `CACHE_LIFETIME` key in you `.env` file (recommended).

The [Laravel Enso Core](https://github.com/laravel-enso/Core) package comes with this package included.