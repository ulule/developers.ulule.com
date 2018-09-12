---
title: "Address"
weight: 18
---

# Address

Backers may be required to create addresses resources to be used with orders.

## Address resource

| Field         | Type   | Description                                                     |
| ------------- | ------ | --------------------------------------------------------------- |
| `address1`    | string | First line of the address                                       |
| `address2`    | string | Second line of the address                                      |
| `city`        | string | City name                                                       |
| `country`     | string | Two-letter ISO code of the country                              |
| `entity_name` | string | Entity name                                                     |
| `first_name`  | string | First name of the address owner                                 |
| `id`          | int    | Unique ID of the address                                        |
| `last_name`   | string | Last name of the address owner                                  |
| `postal_code` | string | Postal Code                                                     |
| `state`       | string | State                                                           |
| `type`        | string | Legal entity type, can be `personal`, `business`, `association` |
| `user_id`     | int    | Unique ID of the address owner                                  |

## Retrieve an address

Retrieves the address with the given ID. This endpoint is only accessible to the address owner.

{{% http method="get" %}}/v1/addresses/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Address ID  |

## Create an address

Creates an address for the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="post" %}}/v1/users/:id/addresses{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field         | Type   | Description                                                                               |
| ------------- | ------ | ----------------------------------------------------------------------------------------- |
| `address1`    | string | First line of the address -- optional, max 255 characters                                 |
| `address2`    | string | Second line of the address -- optional, max 255 characters                                |
| `city`        | string | City -- optional, max 140 characters                                                      |
| `country`     | string | Country -- optional, two-letter ISO code                                                  |
| `entity_name` | string | Entity name -- required if type is `business` or `association`, max 250 characters        |
| `first_name`  | string | First name -- required if type is `personal`, max 30 characters                           |
| `last_name`   | string | Last name -- required if type is `personal`, max 30 characters                            |
| `postal_code` | string | Postal code -- optional,  max 140 characters                                              |
| `state`       | string | State -- optional,  max 255 characters                                                    |
| `type`        | string | Type -- optional, must be `personal`, `business` or `association`, defaults to `personal` |

## Update an address

Updates the address with the given ID. This endpoint is only accessible to the address owner.

The country can not be updated if the address is the shipping address of an order with shippings.

{{% http method="patch" %}}/v1/addresses/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Address ID  |

### Payload

| Field         | Type   | Description                                      |
| ------------- | ------ | ------------------------------------------------ |
| `address1`    | string | First line of the address -- max 255 characters  |
| `address2`    | string | Second line of the address -- max 255 characters |
| `city`        | string | City -- max 140 characters                       |
| `country`     | string | Country -- two-letter ISO code                   |
| `entity_name` | string | Entity name -- max 250 characters                |
| `first_name`  | string | First name -- max 30 characters                  |
| `last_name`   | string | Last name -- max 30 characters                   |
| `postal_code` | string | Postal code -- max 140 characters                |
| `state`       | string | State -- max 255 characters                      |
| `type`        | string | Type -- `personal`, `business` or `association`  |

## Delete an address

Deletes the address with the given ID. This endpoint is only accessible to the address owner.

An address cannot be deleted if:

* it is the billing or shipping address of an order with shippings
* it belongs to an account

{{% http method="delete" %}}/v1/addresses/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Address ID  |

## List user addresses

Retrieves all the addresses owned by the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="get" %}}/v1/users/:id/addresses{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Address ID  |
