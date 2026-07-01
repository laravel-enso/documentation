---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Phone Validator

[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](https://git.xtelecom.ro/laravel-enso/phone-validator/-/blob/main/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.0.1-brightgreen.svg)](https://git.xtelecom.ro/laravel-enso/phone-validator/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/phone-validator/-/blob/main/composer.json)

## Description

Phone Validator provides a configurable Laravel validation rule for phone numbers.

The package owns reusable phone validation for Laravel Enso applications, keeping phone-number rules, accepted-format metadata, and validation error text out of consuming projects. It ships with default Romanian phone formats and lets applications override both the validation regex and display masks through configuration.

This is a private Laravel Enso package distributed through GitLab.

## Installation

Configure the private repository in the consuming application's `composer.json`:

```json
{
    "repositories": [
        {
            "type": "git",
            "url": "git@git.xtelecom.ro:laravel-enso/phone-validator.git"
        }
    ]
}
```

Install the package:

```bash
composer require laravel-enso/phone-validator
```

No manual service provider registration is required. Laravel auto-discovers `LaravelEnso\PhoneValidator\AppServiceProvider`.

Publish the configuration when customization is needed:

```bash
php artisan vendor:publish --tag=phone-validator-config
```

The configuration is published to:

```text
config/enso/phoneValidator.php
```

Publish the translations when message customization is needed:

```bash
php artisan vendor:publish --tag=phone-validator-lang
```

The translations are published to:

```text
lang/vendor/phone-validator
```

## Features

- Provides a Laravel validation rule through `LaravelEnso\PhoneValidator\Validators\Phone`.
- Uses Laravel's `ValidationRule` API.
- Validates values through a configurable regular expression.
- Exposes configured display masks for validation messages.
- Ships with default Romanian phone formats.
- Ships with an English validation message.
- Supports application-level configuration and translation publishing.
- Exposes a reusable low-level validator helper through `LaravelEnso\PhoneValidator\Validators\Validator`.

## Usage

Use the rule in a form request or validator instance:

```php
use LaravelEnso\PhoneValidator\Validators\Phone;

public function rules(): array
{
    return [
        'phone' => ['required', new Phone()],
    ];
}
```

The rule is strict. It does not normalize local numbers, spaces, punctuation, or missing country prefixes before validation.

The default configuration accepts values such as:

- `+40792802305`
- `+40211234567`
- `+40311234567`

It rejects local-only values such as `0792802305`.

### Configuration

Default configuration:

```php
return [
    'regex' => '/^\+4(07|02|03)[0-9]{8}$/',
    'masks' => ['+407XXXXXXXX', '+402XXXXXXXX', '+403XXXXXXXX'],
];
```

The regex controls validation. Masks are used only for the validation message.

To customize accepted values, publish the configuration and update `regex`:

```php
return [
    'regex' => '/^00[0-9]{4}$/',
    'masks' => ['00XXXX'],
];
```

### Translations

The package ships with an English validation message:

```php
return [
    'phone' => 'The :attribute must be a valid phone number. Accepted formats: :formats.',
];
```

The `:formats` placeholder is generated from the configured masks.

The rule translates the message through Laravel's validation failure API:

```php
$fail('phone-validator::validation.phone')->translate([
    'formats' => $this->masks(),
]);
```

Publish the translations when the consuming application needs to customize the text without changing the package:

```bash
php artisan vendor:publish --tag=phone-validator-lang
```

### Testing

Run the package tests with:

```bash
vendor/bin/phpunit
```

The test suite covers accepted formats, invalid values, default messages, translation overrides, configuration overrides, default configuration loading, and low-level validator helper behavior.

## API

### Validation Rule

`LaravelEnso\PhoneValidator\Validators\Phone`

Public entry point:

- `validate(string $attribute, mixed $value, Closure $fail): void`

The rule reads `enso.phoneValidator.regex` and fails the field when the provided value is not a string matching the configured regex.

On failure, the rule returns the translated `phone-validator::validation.phone` message with the configured masks formatted as a human-readable list.

### Validator Helper

`LaravelEnso\PhoneValidator\Validators\Validator`

Public methods:

- `__construct(mixed $phone, string $regex)`
- `passes(): bool`
- `fails(mixed $phone, string $regex): bool`

The helper returns `true` only when the provided value is a string and matches the provided regex.

## Depends On

Framework dependencies:

- `php` `^8.2`
- [`laravel/framework`](https://github.com/laravel/framework) `^12.0|^13.0`

Development dependencies:

- [`orchestra/testbench`](https://github.com/orchestral/testbench) `^10.0|^11.0`
- [`phpunit/phpunit`](https://github.com/sebastianbergmann/phpunit) `^11.0|^12.0`

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/phone-validator/-/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 7/1/2026, 10:37:52 AM</div>
</div>
