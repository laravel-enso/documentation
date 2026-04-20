---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Stripe

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/stripe/-/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-1.7.1-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/stripe/-/tags)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://git.xtelecom.ro/laravel-enso/stripe/-/blob/master/composer.json)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/stripe/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/stripe/-/merge_requests)

## Description

Stripe integrates Laravel Enso with Stripe customers, payment intents, setup intents, and checkout sessions.

The package registers a webhook endpoint for successful payment intents, stores Stripe customer bindings for users, and provides a service facade around the Stripe PHP SDK for the most common payment objects.

It is intended for applications that keep order logic inside Enso and need Stripe only as the payment gateway layer.

## Installation

Install the package:

```bash
composer require laravel-enso/stripe
```

Run the package migrations:

```bash
php artisan migrate
```

Make sure the host application configures Stripe secret and webhook keys under the `enso.stripe` config namespace.

## Features

- Webhook endpoint for `payment_intent.succeeded`.
- Signature validation through Stripe webhook verification.
- Stripe customer persistence linked to Enso users.
- Service methods for customers, payment intents, setup intents, payment methods, and checkout sessions.
- Dynamic user relation for `stripeCustomer`.

## Usage

Webhook route:

- `stripe.paymentIntent`

Examples:

```php
Stripe::createCustomer($user);
Stripe::createPaymentIntent($payload);
Stripe::createSetupIntent($payload);
Stripe::createCheckoutSession($payload);
```

The webhook controller only accepts valid Stripe signatures and only processes the `payment_intent.succeeded` event type, after which it dispatches the `PaymentSucceded` event.

## API

### HTTP routes

- `POST stripe/paymentIntent`

### Core service

- `LaravelEnso\\Stripe\\Services\\Stripe`

Available operations:

- create and retrieve customers
- create and retrieve payment intents
- retrieve payment methods
- create setup intents
- create and retrieve checkout sessions

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)
- [`laravel-enso/dynamic-methods`](https://docs.laravel-enso.com/backend/dynamic-methods.html) [↗](https://github.com/laravel-enso/dynamic-methods)

Required external packages:

- [`stripe/stripe-php`](https://github.com/stripe/stripe-php) [↗](https://github.com/stripe/stripe-php)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/stripe/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:26:25 PM</div>
</div>
