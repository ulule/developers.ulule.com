---
title: "Order"
weight: 17
---

# Order

The order `status` field can have the following values:

| Status                  | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| `processing`            | Order is processing                                                 |
| `awaiting-confirmation` | User is filling payment information                                 |
| `payment-completed`     | Order is completed                                                  |
| `cancelled`             | User has cancelled order during the campaign                        |
| `payment-done`          | Campaign has succeeded, funds have been transfered to project owner |
| `payment-invalid`       | PSP needs more info to transfer payment to project owner            |
| `payment-reimbursed`    | Campaign has failed, the backer has been reimbursed                 |
| `error`                 | An error has occurred                                               |

## Order resource

| Field                  | Type                                                  | Description                                                                                                                                                           |
| ---------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `absolute_url`         | string                                                | Link to the order on the Ulule website                                                                                                                                |
| `billing_address`      | [address resource](#address)                          | Billing address                                                                                                                                                       |
| `created_at`           | string                                                | Date at which the order has been created, with RFC 3339 format=                                                                                                       |
| `id`                   | int                                                   | Unique ID of the order                                                                                                                                                |
| `items`                | array of [order item resources](#order-item-resource) | Order items                                                                                                                                                           |
| `note`                 | string                                                | Free field that the backer can fill to give special information to the project owner about the order                                                                  |
| `order_shipping_total` | int                                                   | Total shipping cost                                                                                                                                                   |
| `order_subtotal`       | int                                                   | Cost of the order, minus the shipping cost                                                                                                                            |
| `order_total`          | int                                                   | Total cost                                                                                                                                                            |
| `payment_method`       | string                                                | Payment method used for the order -- can be one of the available [payment methods](#payment-methods)                                                                  |
| `payment_url`          | string                                                | URL that the backer must visit to fill payment information                                                                                                            |
| `project`              | [project resource](#project)                          | Project related to the order                                                                                                                                          |
| `project_id`           | int                                                   | Unique ID of the related project                                                                                                                                      |
| `refunded`             | bool                                                  | True if the order was refunded                                                                                                                                        |
| `resource_uri`         | string                                                | URL of the order resource                                                                                                                                             |
| `shipping_address`     | [address resource](#address)                          | Shipping address                                                                                                                                                      |
| `status`               | string                                                | Status of the order, can be `processing`, `awaiting-confirmation`, `payment-completed`, `cancelled`, `payment-done`, `payment-invalid`, `payment-reimbursed`, `error` |
| `user`                 | [user resource](#user)                                | Author of the order                                                                                                                                                   |

## Order item resource

| Field                 | Type                       | Description                               |
| --------------------- | -------------------------- | ----------------------------------------- |
| `line_shipping_total` | int                        | Total shipping cost                       |
| `line_subtotal`       | int                        | Cost of the item, minus the shipping cost |
| `line_total`          | int                        | Total cost of the item                    |
| `quantity`            | int                        | Number of reward item                     |
| `reward`              | [reward resource](#reward) | Reward item                               |
| `reward_id`           | int                        | Unique ID of the reward item              |
| `unit_price`          | int                        | Price of a single reward item             |

## Retrieve an order

Retrieves the order with the given ID. This endpoint is only accessible to the order author.

{{% http method="get" %}}/v1/orders/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Order ID    |

## Create an order

Creates an order for the project with the given ID.

{{% http method="post" %}}/v1/projects/:id/orders{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

Backers have two choices:

1. Set the order amount to a value greater than or equal to the project lowest contribution amount.
2. Select project rewards and optionally set the order amount to a value greater than or equal to the sum of each reward price.

| Field                 | Type                                   | Description                                                                                                                                                                      |
| --------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`              | int                                    | Order amount -- optional, must be greater than or equal to the sum of each selected reward price if `rewards` is present, or to the project lowest contribution amount otherwise |
| `billing_address_id`  | string                                 | Billing address ID -- optional                                                                                                                                                   |
| `country`             | string                                 | Country -- required if the selected reward has shippings                                                                                                                         |
| `payment_method`      | string                                 | Payment method -- required, must be a payment method supported by the project                                                                                                    |
| `pickup_point_id`     | string                                 | Pickup point ID -- optional, must be a project pickup point                                                                                                                      |
| `return_url`          | string                                 | URL at which the backer will be redirected after payment -- required                                                                                                             |
| `rewards`             | array of [reward items](#reward-items) | Selected rewards -- optional                                                                                                                                                     |
| `shipping_address_id` | string                                 | Shipping address ID -- optional                                                                                                                                                  |

Shipping address and pickup point must not be set together.

#### Reward items

| Field       | Type | Description                                                                                   |
| ----------- | ---- | --------------------------------------------------------------------------------------------- |
| `reward_id` | int  | Unique ID of the reward -- required, must be a project reward                                 |
| `quantity`  | int  | Reward quantity -- required, must be less than or equal to the reward `stock_available` field |

## Update an order

Updates the order with the given ID. This endpoint is only accessible to the order author.

{{% http method="patch" %}}/v1/orders/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Order ID    |

### Payload

| Field                 | Type   | Description                                                                     |
| --------------------- | ------ | ------------------------------------------------------------------------------- |
| `billing_address_id`  | int    | Billing address ID -- the address must belong to the order author               |
| `hidden`              | bool   | Whether the order project is shown or hidden in the user supported project list |
| `note`                | string | A note from the backer to the project owner about this order                    |
| `shipping_address_id` | int    | Shipping address ID -- the address must belong to the order author              |

## Cancel an order

Cancels the order with the given ID. This endpoint is only accessible to the order author.

The following conditions must be fulfilled to cancel an order:

* The project must not be finished and succeeded
* Only orders with `payment-completed` status can be cancelled

{{% http method="post" %}}/v1/orders/:id/cancel{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Order ID    |

## List user orders

Retrieves all orders belonging to the user with the given ID. This endpoint is only accessible to oneself.

This endpoint accepts the `extra_fields=project` query parameter. If present, the project resource is embedded in the order resource.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/users/:id/orders{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Query parameters

The list can be filtered with the following query parameters:

| Parameter    | Description  |
| ------------ | ------------ |
| `project_id` | Project      |
| `status`     | Order status |


## List project orders

Retrieves all orders belonging to the project the given ID. This endpoint is only accessible to the project ower.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/orders{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Query parameters

The list can be filtered with the following query parameters:

| Parameter        | Description          |
| ---------------- | -------------------- |
| `payment_method` | Order payment method |
| `reward_id`      | Order reward ID      |
| `status`         | Order status         |
