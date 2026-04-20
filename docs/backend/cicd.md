---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# CI/CD

## Description

CI/CD is the infrastructure repository used to build and publish the shared Docker image for Laravel Enso pipelines.

The repository contains a Dockerfile with the PHP, Composer, Yarn, Redis, and system dependencies required by the build environment, plus the GitLab pipeline definition that builds and pushes the image to the container registry.

It is not a Laravel package. It is a deployment and build asset repository used by private Enso infrastructure.

## Installation

There is nothing to install into an application.

To build the image locally:

```bash
docker build -t laravel-enso/cicd .
```

In GitLab CI, the repository is intended to publish the resulting image to the configured registry.

## Features

- Docker image based on `php:7.4-cli`.
- Installs Composer, Yarn, Redis, GD, Intl, Zip, and common build tools.
- Uses Docker layer caching by pulling the previous `latest` image before build.
- Pushes both commit-specific and `latest` tags to the registry.
- Restricts the build job to the `master` branch.

## Usage

Use the repository as the source of truth for the shared CI image, or build the image locally when updating the container definition.

The default GitLab flow:

- logs in to the container registry
- pulls the current `latest` image as cache source
- builds the Docker image
- tags it with `$CI_COMMIT_SHA` and `latest`
- pushes both tags back to the registry

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
- [Yarn](https://classic.yarnpkg.com/) [↗](https://classic.yarnpkg.com/)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/cicd/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 4/20/2026, 10:59:47 AM</div>
</div>
