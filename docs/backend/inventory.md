---
sidebarDepth: 3
editLink: false
lastUpdated: false
---

<!-- AUTO-GENERATED: do not edit by hand -->

# inventory

###  Inventory

Inventory is a package for the Laravel Enso environment, designed for the management of product inventory.

**Note:** *This is a commercially licensed package and may not be used without written permission*

**Note:** *This package cannot be used outside of the Enso environment and is not included by default 
in the [Laravel Enso Core](https://github.com/laravel-enso/Core) package.*

### Features
* structures for holding inventory entries (ins and outs), 
reservations as well as the current stock, warehouse positions and more
* API interface for inserting and removing from stock
* UI interface for viewing various information about the stock, moving products within the stock positions
* includes generator mechanisms for client invoices & payments
* various Enums, Exceptions and utility classes
* configuration for the generated invoices
* tests

### Installation

Note that this package uses commercially available FontAwesome icons. 
These dependencies should be installed and available in your project:
```
"@fortawesome/pro-regular-svg-icons": "^5.10.1",
"@fortawesome/pro-solid-svg-icons": "^5.10.1",
``` 

* add the package repository to your `composer.json` config 
* install the package using composer: `composer require laravel-enso/inventory`
* install the front-end ui package using yarn: `yarn add @enso-ui/inventory`
* adds the following alias in `webackpack.mix.js`
```
.webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                 //other aliases
                '@inventory': `${__dirname}/node_modules/@enso-ui/inventory/src/bulma`,
            },
        },
    })
```
* in `resources/js/router.js` file, verify that `RouteMerger` is imported, or import it

`import RouteMerger from '@core-modules/importers/RouteMerger';`

* make sure `routeImporter` is also imported

`import routeImporter from '@core-modules/importers/routeImporter';`

* then use `RouteMerger` to import front-end assets using the alias defined in `webpack.mix.js`

```
(new RouteMerger(routes))
    //other routes
    .add(routeImporter(require.context('@inventory/routes', false, /.*\.js$/)))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)));
```

* in `resources/js/app.js` import the package's icons

`import '@inventory/icons';`

* make sure `hot module replacement` is **not** active, and run `yarn dev` or `npm run dev`

* run `php artisan migrate` to create tables, add menus, permissions etc.

* run `php artisan vendor:publish --tag=inventory-factories` to publish the included factories


### Using the Positions Import

```php
'positions' => [
    'label' => 'Inventory Positions',
    'template' => 'vendor/laravel-enso/inventory/src/Imports/Templates/positions.json',
],
```


Default:
- add the Positions Import configuration to the `config/enso/imports.php` configuration
- ensure the warehouse we're importing the positions for is given as parameter to the import
- run the import

Custom:
- publish the import files using the `inventory-import-template` tag
- customize the import, update namespaces, add validations, etc
- add the import to your local `config/enso/imports.php` configuration

### Using the Inventory class functionality
The provided public methods are meant to be used when integrating with other backend / front-end 
 project modules when working with the inventory.

#### The Inventoriable interface
The interface must be implemented by the models that work with the inventory, 
such as Purchase Order entries and Sale Order entries.

#### The HasInventory Trait
The trait provides a default implementation for the `Inventoriable` interface, so you may simply use these trait inside
your models instead of defining each method.

#### Inventory::insert(Inventoriable $line, Position $position)
- creates a new inventory line (InventoryIn)
- updates the inventory stock for that product
- updates/creates reservations for other orderables that are not fully reserved
- supplements any outstanding reservations for the product added to the inventory
        
#### Inventory::move(InventoryIn $inventoryIn, Position $position, $quantity)
- moves a given product quantity from a position to a new position
- `$inventoryIn` is the line from where we're moving the product
- `$position` is the new position of the product
- `$quantity` is the moved quantity, as you can move it partially or totally
- existing reservations for that inventory line are preserved
- when doing moves/splits, the created_at attribute is kept as if the product would have been placed on the position from
the start

#### Inventory::remove(Inventoriable $orderable)
- removes the product from stock, due to a sale or a product return
- creates stock removals (InventoryOut) based on product reservations
- requires reservations to exist beforehand
- adjust the inventory entries' remaining quantity
- updates the inventory stock for that product

Note, if a remove operation is attempted and no reservations exist, an `InventoryException` is thrown.

#### Inventory::reserve(Inventoriable $orderable)
- attempts to create reservations for that orderable, using the available inventory entries
- may fully or partially reserve the quantity
- if unable to do a partial reservation, a blank reservation is created
            
#### Inventory::cancelReservations(Inventoriable $orderable)
- cancels the all the reservations for an $orderable
- updates/creates reservations for other orderables that are not fully reserved
- attempts to supplement any outstanding reservations for this line's product, due to the newly available quantity



### Depends on
- `jsbarcode` for the barcode generation 

## License

[CC-BY-NC-ND-4.0](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html)

<div class="package-page-meta-row">
  <a class="package-page-edit" href="https://git.xtelecom.ro/laravel-enso/inventory/-/edit/master/README.md" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a>
  <div class="package-page-last-updated"><span class="label">Last Updated:</span> 7/10/2020, 6:17:14 PM</div>
</div>
