---
home: true
# heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
features:
  - title: Single Page App
    details: Aims to deliver a robust boilerplate for any complex business application, with superiour performance
  - title: Laravel, Vue, Bulma
    details: The beauty of Bulma combined with the flexibility of Vue powered by a Laravel Back End
  - title: Modular, Extensible
    details: Made up of tens of packages and modules. Easily to extend and customize
footer: MIT Licensed | Copyright © 2018-present Laravel Enso
---

### Try it up

``` bash
# clone in a new project folder
git clone https://github.com/laravel-enso/enso.git --depth 1

# install the composer dependencies
composer install

# create the .env file from the example 
cp .env.example .env

# configure the .env file, entering name, DB details, etc

# Generate the key
php artisan key:generate

# run the migrations
php artisan migrate --seed

# cd into the client server
cd client

# create the .env file from the example and customize if needed
cp .env.example .env

# install the npm dependencies
yarn

# build the assets
yarn build

#or, for live reload, you can use
yarn serve
```

::: tip Login
user: admin@laravel-enso.com / password: password
:::

*fully working in less than 5 minutes!*

---

### Thanks

Built with <span style="color:red"> &#10084;&#65039;</span>on Laravel 6.x, Bulma 0.7.x, VueJS 2.6.x.

**Special thanks** to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/) and [Jeremy Thomas](https://bulma.io).
