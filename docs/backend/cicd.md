---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# CI/CD

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/blob/master/LICENSE)
[![Image](https://img.shields.io/badge/image-php8.5--bookworm-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/tree/master)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/merge_requests)

## Description

CI/CD builds the shared Docker image used by Laravel Enso delivery pipelines. The image provides a consistent command-line environment for installing dependencies, compiling frontend assets, running framework tooling, and executing pipeline jobs across Enso applications and packages.

The repository is infrastructure code, not a Laravel package. Its Dockerfile is the source of truth for the published CI image, while the GitLab pipeline builds and pushes that image to the project container registry.

## Installation

There is nothing to install in an application. Applications and packages consume the published image from the GitLab container registry.

To build the image locally:

```bash
docker build -t laravel-enso/cicd:php8.5-bookworm .
```

To open an interactive shell inside the image:

```bash
docker run --rm -it laravel-enso/cicd:php8.5-bookworm bash
```

## Features

- Uses `php:8.5-cli-bookworm` as the base image.
- Installs Composer 2 from the official Composer image.
- Installs Node.js 20 and Yarn Classic for frontend package builds.
- Installs the Oracle MySQL 8.4 LTS client from the official MySQL APT repository.
- Enables the PHP extensions commonly required by Laravel Enso projects: `pdo_mysql`, `mbstring`, `zip`, `exif`, `pcntl`, `bcmath`, `gd`, `intl`, `sodium`, and `ftp`.
- Installs the Redis PHP extension through PECL.
- Provides common build and image tooling such as `git`, `curl`, `zip`, `unzip`, `jpegoptim`, `optipng`, `pngquant`, and `gifsicle`.
- Sets CI-oriented PHP defaults for memory and execution time.
- Prints key runtime versions during the image build so pipeline logs show the effective toolchain.
- Publishes both commit-specific and stable branch image tags through GitLab CI.

## Usage

The default GitLab pipeline runs on `master` and publishes the image with two tags:

```text
$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
$CI_REGISTRY_IMAGE:php8.5-bookworm
```

The build job:

- logs in to the GitLab container registry;
- pulls the current `php8.5-bookworm` image as a cache source when available;
- builds the Docker image from `Dockerfile`;
- pushes the commit-specific image tag;
- pushes the stable `php8.5-bookworm` image tag.

Use the stable image tag in Enso pipelines that need the current shared build environment:

```yaml
image: $CI_REGISTRY_IMAGE:php8.5-bookworm
```

Use the commit-specific image tag when a pipeline must be pinned to an exact image build.

::: warning Note
This image contains the MySQL 8.4 LTS client and PHP MySQL support. It does not run a MySQL server. Test databases should be provided by the consuming pipeline as separate services.
:::

## API

There is no application API.

Operational surface:

- `Dockerfile` defines the published CI image.
- `.gitlab-ci.yml` defines the build and registry publishing workflow.

## Depends On

- [Docker](https://www.docker.com/) [↗](https://www.docker.com/)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) [↗](https://docs.gitlab.com/ee/ci/)
- [PHP official Docker images](https://hub.docker.com/_/php) [↗](https://hub.docker.com/_/php)
- [Composer](https://getcomposer.org/) [↗](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) [↗](https://nodejs.org/)
- [Yarn Classic](https://classic.yarnpkg.com/) [↗](https://classic.yarnpkg.com/)
- [MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/) [↗](https://dev.mysql.com/downloads/repo/apt/)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/cicd/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 5/26/2026, 1:59:30 PM</div>
</div>
