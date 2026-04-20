---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# CNP Validator

[![License](https://poser.pugx.org/laravel-enso/cnp-validator/license)](LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/cnp-validator/version)](https://packagist.org/packages/laravel-enso/cnp-validator)
[![Downloads](https://poser.pugx.org/laravel-enso/cnp-validator/downloads)](https://packagist.org/packages/laravel-enso/cnp-validator)
[![PHP](https://img.shields.io/badge/php-8.1%2B-777bb4.svg)](composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/cnp-validator.svg)](https://github.com/laravel-enso/cnp-validator/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/cnp-validator.svg)](https://github.com/laravel-enso/cnp-validator/pulls)

## Description

CNP Validator provides a dedicated Laravel validation rule for Romanian personal numeric codes.

The package exposes a lightweight invokable validation rule that checks whether a value is numeric, has the expected 13-digit length, contains a valid encoded birth date, and matches the official CNP checksum.

It works independently of the Enso ecosystem and can be used in any Laravel application that relies on Laravel's validator.

## Installation

Install the package:

```bash
composer require laravel-enso/cnp-validator
```

No additional service provider registration is required.

## Features

- Provides an invokable Laravel validation rule through `LaravelEnso\CnpValidator\Validators\Cnp`.
- Validates that the CNP contains only numeric digits.
- Validates the required 13-character length.
- Validates the encoded date portion of the CNP.
- Validates the checksum using the official control hash table.
- Exposes a reusable low-level validator helper through `LaravelEnso\CnpValidator\Validators\Validator`.

## Usage

Use the rule in a form request or validator instance:

```php
use Illuminate\Support\Facades\Validator;
use LaravelEnso\CnpValidator\Validators\Cnp;

$validator = Validator::make(
    ['cnp' => '1800219081826'],
    ['cnp' => ['nullable', new Cnp()]],
);
```

Example in a form request:

```php
use Illuminate\Validation\Rule;
use LaravelEnso\CnpValidator\Validators\Cnp;

public function rules(): array
{
    return [
        'cnp' => [
            'nullable',
            'max:13',
            new Cnp(),
            Rule::unique('users', 'nin'),
        ],
    ];
}
```

::: warning Note
The package reports failed validation with the `Invalid` message.

If you want a localized or more specific validation message, map that message in your validation language files or customize it in the consuming validator layer.
:::

## API

### Validation Rule

`LaravelEnso\CnpValidator\Validators\Cnp`

Public entry point:

- `__invoke($attribute, $value, $fail)`

The rule calls the internal validator and fails the field when the provided CNP is invalid.

### Validator Helper

`LaravelEnso\CnpValidator\Validators\Validator`

Public methods:

- `__construct(?string $cnp = null)`
- `fails(string $cnp): bool`
- `passes(): bool`

Validation flow:

- numeric-only check
- 13-digit length check
- encoded date validation
- checksum validation

## Depends On

Framework dependency:

- [`laravel/framework`](https://github.com/laravel/framework) [↗](https://github.com/laravel/framework)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/cnp-validator/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/19/2026, 10:21:57 PM</div>
</div>
