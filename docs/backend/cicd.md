---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# CI/CD

[![License](https://img.shields.io/badge/license-Proprietary-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/blob/master/LICENSE)
[![Image](https://img.shields.io/badge/image-php8.2--bookworm-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/tree/php8.2-bookworm)
[![Issues](https://img.shields.io/badge/issues-0-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/issues)
[![Merge Requests](https://img.shields.io/badge/merge%20requests-3-lightgrey.svg)](https://git.xtelecom.ro/laravel-enso/cicd/-/merge_requests)

## Description

CI/CD is the infrastructure repository used to build and publish the shared Docker image for Laravel Enso pipelines.

The repository contains the Dockerfile with the PHP, Composer, Node, Yarn, Redis, and system dependencies required by the build environment, plus the GitLab pipeline definition that builds and pushes the image to the container registry.

It is not a Laravel package. It is a private infrastructure repository used by Enso delivery pipelines.

## Installation

There is nothing to install into an application.

To build the image locally:

```bash
docker build -t laravel-enso/cicd:php8.2-bookworm .
```

To run an interactive shell inside the built image:

```bash
docker run --rm -it laravel-enso/cicd:php8.2-bookworm bash
```

## Features

- Docker image based on `php:8.2-cli-bookworm`.
- Installs Node.js 16, Yarn, Composer, Redis, FTP, GD, Intl, Zip, Sodium, and common build utilities.
- Sets CI-oriented PHP defaults such as `memory_limit = 2G` and `max_execution_time = 300`.
- Uses Docker layer caching by pulling the previously published `php8.2` image before build.
- Pushes both commit-specific and `php8.2-bookworm` tags to the GitLab container registry.

## Usage

Use the repository as the source of truth for the shared CI image, or build the image locally when updating the container definition.

The default GitLab flow:

- logs in to the container registry
- pulls the current `php8.2` image as cache source
- builds the Docker image
- tags it with `$CI_COMMIT_SHA` and `php8.2-bookworm`
- pushes both tags back to the registry

The build job is currently restricted to the `php8.2-bookworm` branch and runs on the `two-cores` GitLab runner tag.

## API

There is no application API.

Operational surface:

- `Dockerfile`
- `.gitlab-ci.yml`

## Depends On

Required tools and services:

- [Docker](https://www.docker.com/) [↗](https://www.docker.com/)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/) [↗](https://docs.gitlab.com/ee/ci/)
- [Composer](https://getcomposer.org/) [↗](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) [↗](https://nodejs.org/)
- [Yarn Classic](https://classic.yarnpkg.com/) [↗](https://classic.yarnpkg.com/)
docs/backend/cicd.md

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/cicd/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 3:45:58 PM</div>
</div>
