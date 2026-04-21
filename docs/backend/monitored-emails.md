---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# Monitored Emails

[![License](https://poser.pugx.org/laravel-enso/monitored-emails/license)](https://github.com/laravel-enso/monitored-emails/blob/main/LICENSE)
[![Stable](https://poser.pugx.org/laravel-enso/monitored-emails/version)](https://packagist.org/packages/laravel-enso/monitored-emails)
[![Downloads](https://poser.pugx.org/laravel-enso/monitored-emails/downloads)](https://packagist.org/packages/laravel-enso/monitored-emails)
[![PHP](https://img.shields.io/badge/php-8.2%2B-777bb4.svg)](https://github.com/laravel-enso/monitored-emails/blob/main/composer.json)
[![Issues](https://img.shields.io/github/issues/laravel-enso/monitored-emails.svg)](https://github.com/laravel-enso/monitored-emails/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/laravel-enso/monitored-emails.svg)](https://github.com/laravel-enso/monitored-emails/pulls)

## Description

Monitored Emails connects IMAP or POP inboxes to Laravel Enso and persists unread messages for further application processing.

The package exposes CRUD screens for mailbox configuration, validates remote connectivity from the backoffice, and schedules a recurring fetch cycle that stores unseen messages in the local database.

It is intended for Enso applications that ingest customer or operational inboxes and then continue processing from persisted messages instead of polling mailboxes ad hoc.

## Installation

Install the package:

```bash
composer require laravel-enso/monitored-emails
```

Run the package migrations:

```bash
php artisan migrate
```

## Features

- Mailbox CRUD, table init, table data, and Excel export endpoints.
- Connectivity test endpoint for validating server, folder, and credentials before saving changes.
- Scheduled `enso:monitored-emails:fetch-unread-emails` command registered every fifteen minutes.
- Queue-backed unread message ingestion through the `FetchUnreadEmails` job.
- Protocol enum for `imap`, `secureImap`, `pop3`, and `smtp`, with default ports.
- Encrypted password storage on the monitored mailbox model.

## Usage

Configure one or more monitored inboxes from the administration UI and enable them with the `is_active` flag.

Main route group:

- `administration.monitoredEmails.*`

The package schedules unread-message polling automatically. You can also trigger the fetch manually:

```bash
php artisan enso:monitored-emails:fetch-unread-emails
```

Each configured mailbox resolves an IMAP client through `webklex/php-imap`, reads unseen messages from the selected folder, stores the raw message metadata in `monitored_messages`, and marks the remote message as seen.

## API

### HTTP routes

- `GET api/administration/monitoredEmails/create`
- `POST api/administration/monitoredEmails`
- `GET api/administration/monitoredEmails/{monitoredEmail}/edit`
- `PATCH api/administration/monitoredEmails/{monitoredEmail}`
- `DELETE api/administration/monitoredEmails/{monitoredEmail}`
- `GET api/administration/monitoredEmails/initTable`
- `GET api/administration/monitoredEmails/tableData`
- `GET api/administration/monitoredEmails/exportExcel`
- `POST api/administration/monitoredEmails/{monitoredEmail}/testEmail`

### Artisan commands

- `enso:monitored-emails:fetch-unread-emails`

### Queue job

- `LaravelEnso\\MonitoredEmails\\Jobs\\FetchUnreadEmails`

Behavior:

- loads all active monitored inboxes
- connects to each configured mailbox
- fetches unseen messages from the selected folder
- stores persisted message copies locally
- marks remote messages as seen after import

## Depends On

Required Enso packages:

- [`laravel-enso/core`](https://docs.laravel-enso.com/backend/core.html) [↗](https://github.com/laravel-enso/core)

Required external packages:

- [`webklex/php-imap`](https://github.com/Webklex/php-imap) [↗](https://github.com/Webklex/php-imap)

Companion frontend package:

- [`@enso-ui/monitored-emails`](https://docs.laravel-enso.com/frontend/monitored-emails.html) [↗](https://github.com/enso-ui/monitored-emails)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://github.com/laravel-enso/monitored-emails/edit/main/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 6:08:03 PM</div>
</div>
