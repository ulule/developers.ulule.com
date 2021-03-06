---
title: "Address"
weight: 20
---

# Address

Backers may be required to create addresses to be used with orders.

## Address resource

| Field          | Type   | Description                                                     |
| -------------- | ------ | --------------------------------------------------------------- |
| `address1`     | string | First line of the address                                       |
| `address2`     | string | Second line of the address                                      |
| `city`         | string | City name                                                       |
| `country`      | string | Two-letter ISO code of the country                              |
| `entity_name`  | string | Entity name                                                     |
| `first_name`   | string | First name of the address owner                                 |
| `id`           | int    | Unique ID of the address                                        |
| `last_name`    | string | Last name of the address owner                                  |
| `phone_number` | string | Phone number                                                    |
| `postal_code`  | string | Postal Code                                                     |
| `state`        | string | State                                                           |
| `type`         | string | Legal entity type, can be `personal`, `business`, `association` |
| `user_id`      | int    | Unique ID of the address owner                                  |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field           | Type | Description                                                           |
| --------------- | ---- | --------------------------------------------------------------------- |
| `has_shippings` | bool | Whether the address is the shipping address of an order with shipping |

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

| Field          | Type   | Description                                                                        |
| -------------- | ------ | ---------------------------------------------------------------------------------- |
| `address1`     | string | First line of the address -- required, max 255 characters                          |
| `address2`     | string | Second line of the address -- optional, max 255 characters                         |
| `city`         | string | City -- required, max 140 characters                                               |
| `country`      | string | Country -- required, two-letter ISO code                                           |
| `entity_name`  | string | Entity name -- required if type is `business` or `association`, max 250 characters |
| `first_name`   | string | First name -- required if type is `personal`, max 30 characters                    |
| `last_name`    | string | Last name -- required if type is `personal`, max 30 characters                     |
| `phone_number` | string | Phone number -- optional, max 20 characters                                        |
| `postal_code`  | string | Postal code -- required, max 140 characters                                        |
| `state`        | string | State -- optional, max 255 characters                                              |
| `type`         | string | Type -- required, must be `personal`, `business` or `association`                  |

## Update an address

Updates the address with the given ID. This endpoint is only accessible to the address owner.

{{% http method="patch" %}}/v1/addresses/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Address ID  |

### Payload

| Field          | Type   | Description                                                                  |
| -------------- | ------ | ---------------------------------------------------------------------------- |
| `address1`     | string | First line of the address -- max 255 characters                              |
| `address2`     | string | Second line of the address -- max 255 characters                             |
| `city`         | string | City -- max 140 characters                                                   |
| `country`      | string | Country -- two-letter ISO code, must not be updated if address has shippings |
| `entity_name`  | string | Entity name -- max 250 characters                                            |
| `first_name`   | string | First name -- max 30 characters                                              |
| `last_name`    | string | Last name -- max 30 characters                                               |
| `phone_number` | string | Phone number -- max 20 characters                                            |
| `postal_code`  | string | Postal code -- max 140 characters                                            |
| `state`        | string | State -- max 255 characters                                                  |
| `type`         | string | Type -- `personal`, `business` or `association`                              |

## Delete an address

Deletes the address with the given ID. This endpoint is only accessible to the address owner.

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

### Query parameters

The list can be filtered with the following query parameters:

| Parameter | Description         |
| --------- | ------------------- |
| `country` | The address country |
