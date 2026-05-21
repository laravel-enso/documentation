---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Mails

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/laravel-enso/mails/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/mails/v/stable)](https://packagist.org/packages/laravel-enso/mails)
[![Downloads](https://poser.pugx.org/laravel-enso/mails/downloads)](https://packagist.org/packages/laravel-enso/mails)
[![PHP](https://img.shields.io/badge/php-%5E8.2-8892BF.svg)](https://github.com/laravel-enso/mails/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/mails)](https://github.com/laravel-enso/mails/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/mails)](https://github.com/laravel-enso/mails/pulls)

## Description

Laravel Enso Mails provides the central email design system for Laravel Enso applications. It ships modern Markdown mail layouts, reusable Blade mail components, brand tokens, and a preview catalog so framework packages and applications can migrate email templates incrementally without copying CSS or layout HTML into every mail.

The package uses MJML only at package build time. Consuming Laravel applications send compiled Blade Markdown mail views at runtime and do not need Node.js or MJML installed to send mail.

## Installation

Install the package with Composer:

```bash
composer require laravel-enso/mails
```

The service provider is auto-discovered by Laravel. It registers the package views, configures the Laravel Markdown mail paths, registers the built-in preview catalog, and exposes the preview route and command.

Publish the config when an application needs brand overrides:

```bash
php artisan vendor:publish --tag=mails-config
```

This publishes:

```text
config/enso/mails.php
```

View publishing is available for deliberate overrides only:

```bash
php artisan vendor:publish --tag=mails-views
```

::: warning Note
Do not publish views just to customize brand colors, logo, spacing, or font. Use `config/enso/mails.php` for those values so applications stay on the shared layout and component system.
:::

## Features

- Central Markdown mail layouts for normal and wide email bodies.
- Compatibility aliases for `mail::message`, `mail::message-wide`, `mail::transactional`, `mail::action-required`, and `mail::report`.
- Reusable Blade components for titles, tags, buttons, boxes, alerts, quotes, panels, files, metrics, tables, schedules, dividers, signatures, headers, and footers.
- Brand tokens for logo, name, URL, colors, typography, spacing, radius, footer text, legal text, and footer links.
- MJML source layout compiled into runtime Blade views.
- Runtime mail sending without Node.js or MJML.
- Local preview catalog for browser review.
- Artisan preview command for listing and rendering static HTML previews.
- Built-in generic Enso preview examples, including password reset, password setup, table export, data export, data import, comment tag, reminder, action required, report, metrics, and a full component catalog.

## Usage

After installation, existing Laravel Markdown mail templates can keep using Laravel's standard mail namespace:

```blade
@component('mail::message')
@component('mail::title', ['subtitle' => 'Your account was updated successfully.'])
Account updated
@endcomponent

Hi Jane,

Your profile details were updated. No further action is needed.

@component('mail::button', ['url' => $url])
Open settings
@endcomponent

@component('mail::signature')
@endcomponent
@endcomponent
```

Applications customize the layout through `config/enso/mails.php`:

```php
'brand' => [
    'name' => 'Solarlink',
    'url' => 'https://solarlink.ro',
    'logo' => 'https://solarlink.ro/images/mail-logo.png',
    'label' => 'solarlink.ro',
],

'text' => [
    'font_family' => 'Poppins, Avenir, Helvetica, Arial, sans-serif',
],

'colors' => [
    'primary' => '#4aac2a',
    'accent' => '#eb3a16',
    'link' => '#eb3a16',
    'dark' => '#121933',
],
```

The package supports common Laravel Markdown button aliases:

```blade
@component('mail::button', ['url' => $url, 'color' => 'red'])
Set your new password
@endcomponent
```

The aliases map to configured Enso color variants:

```text
red   -> danger
blue  -> info
green -> success
```

### Preview Catalog

The preview route is enabled outside production by default:

```php
'preview' => [
    'enabled' => env('ENSO_MAILS_PREVIEW', env('APP_ENV') !== 'production'),
],
```

Open the catalog in a browser:

```text
/enso-mails-preview
```

Open a specific preview:

```text
/enso-mails-preview/password-reset
/enso-mails-preview/data-import-done
/enso-mails-preview/components
```

The route is intended for local and staging review. It does not send email; it renders preview views with fake structured data.

### Registering Application Previews

Applications can register their own previews through the registry:

```php
use LaravelEnso\Mails\Preview\PreviewDefinition;
use LaravelEnso\Mails\Preview\PreviewRegistry;

$registry = app(PreviewRegistry::class);

$registry->register(new PreviewDefinition(
    key: 'reset-password',
    name: 'Reset Password',
    view: 'laravel-enso/core::emails.reset',
    data: [
        'name' => 'Jane Doe',
        'url' => url('/password/reset/token'),
    ],
));
```

Preview data should be fake and structured. Framework previews should not hardcode application-specific brand names, colors, logos, or business logic.

### Preview Command

List registered previews:

```bash
php artisan enso:mails:preview --list
```

Render one preview to stdout:

```bash
php artisan enso:mails:preview password-reset
```

Render every registered preview to static HTML files:

```bash
php artisan enso:mails:preview --output=/tmp/mail-previews
```

The command is useful for batch QA, static review, and screenshot workflows. Browser review during development usually happens through `/enso-mails-preview`.

### Package Build Flow

MJML is a package development dependency. Maintainers edit:

```text
resources/mjml/html/message.mjml.blade.php
```

Then compile the runtime Blade views:

```bash
npm run build
```

The compiler writes:

```text
resources/views/vendor/mail/html/message.blade.php
resources/views/vendor/mail/html/message-wide.blade.php
resources/views/vendor/mail/html/transactional.blade.php
resources/views/vendor/mail/html/action-required.blade.php
resources/views/vendor/mail/html/report.blade.php
```

Before releasing, verify the compiled Blade views are current:

```bash
npm run build:check
```

Consuming applications do not run this build step at runtime.

## API

### Config

The config namespace is:

```text
enso.mails
```

Important groups:

- `brand`: name, URL, logo, and label.
- `colors`: primary, accent, link, semantic variants, dark, light, and white tokens.
- `layout`: width, wide width, background, surface, border, radius, card radius, gutter.
- `text`: font family, spacing, body, muted, and heading colors.
- `components`: button, box, file, tag, and table defaults.
- `footer`: footer text, legal text, and links.
- `markdown`: Markdown theme and path behavior.
- `preview`: preview route enablement.

### Components

Reusable Markdown components:

- `mail::title`
- `mail::tag`
- `mail::button`
- `mail::box`
- `mail::alert`
- `mail::quote`
- `mail::panel`
- `mail::file`
- `mail::metric`
- `mail::table`
- `mail::schedule`
- `mail::divider`
- `mail::signature`

Layout and compatibility components:

- `mail::layout`
- `mail::header`
- `mail::footer`
- `mail::subcopy`
- `mail::message`
- `mail::message-wide`
- `mail::transactional`
- `mail::action-required`
- `mail::report`

The `components` preview documents every reusable content component with a short description and a rendered example.

### Preview Registry

`LaravelEnso\Mails\Preview\PreviewRegistry` stores preview definitions.

`LaravelEnso\Mails\Preview\PreviewDefinition` accepts:

- `key`: route and command identifier.
- `name`: human-readable catalog label.
- `view`: Blade view name.
- `data`: fake data passed to the view.

### Commands

```bash
php artisan enso:mails:preview
php artisan enso:mails:preview --list
php artisan enso:mails:preview {preview}
php artisan enso:mails:preview --output=/path/to/output
```

## Depends On

- PHP `^8.2`
- Laravel Framework `^12.0|^13.0`
- `mjml` as a package development dependency for compiling source MJML into runtime Blade views.

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/mails/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/21/2026, 12:46:12 PM</div>
</div>
