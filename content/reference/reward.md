---
title: "Reward"
weight: 9
---

# Reward

## Reward resource

| Field              | Type                                     | Description                                                                                                                                                                         |
| ------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address_required` | bool                                     | The project owner can choose to set this field. If true, contributors must specify a shipping address when ordering the reward                                                      |
| `available`        | bool                                     | True if reward is available                                                                                                                                                         |
| `date_delivery`    | string                                   | Date of the reward delivery with the YYYY-MM-DD format. This field must be set by the project owner. It is only an estimation of the expected shipping delivery delay of the reward |
| `description`      | [i18n object](#i18n)                     | Description of the reward, can contain HTML tags                                                                                                                                    |
| `has_shippings`    | bool                                     | True if the reward has shippings                                                                                                                                                    |
| `id`               | int                                      | Unique ID of the reward                                                                                                                                                             |
| `price`            | int                                      | Price of the reward                                                                                                                                                                 |
| `project_id`       | int                                      | Unique ID of the related project                                                                                                                                                    |
| `resource_uri`     | string                                   | URL of the reward resource                                                                                                                                                          |
| `shipping_int`     | float                                    | International shipping cost, null if no shipping                                                                                                                                  |
| `shipping_nat`     | float                                    | National shipping cost, null if no shipping                                                                                                                                       |
| `shippings`        | array of [shipping resources](#shipping) | Per country shippings                                                                                                                                                               |
| `stock`            | int                                      | Maximum number of rewards the project owner can produce. If null there is no limit                                                                                                |
| `stock_available`  | int                                      | Count of remaining rewards, null if stock is null, otherwise equal to `stock` - `stock_taken`                                                                                   |
| `stock_taken`      | int                                      | Count of taken reward items                                                                                                                                                         |
| `variants`         | array of [variant resources](#variant)   |                                                                                                                                                                                     |

## Retrieve a reward

Retrieves the reward with the given ID. This endpoint is only accessible if the related project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

## Create a project reward

Creates a new reward for the project with the given ID. This endpoint is only accessible to the owner of the related project, but not when the project status is one of `pending-final-validation`, `validated` and `online`. The idea behind that restriction is that it's not possible for a project owner to add more rewards to the project after it has been validated by the moderation team.

{{% http method="post" %}}/v1/projects/:id/rewards{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field              | Type                 | Description                                                                                                  |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| `address_required` | bool                 | If true, contributors must specify a shipping address when ordering the reward -- optional, default is false |
| `date_delivery`    | string               | Date of the reward delivery with the YYYY-MM-DD format -- required                                           |
| `description`      | [i18n object](#i18n) | Description -- required                                                                                      |
| `price`            | float                | Price -- required, must be between 0 and 1e10                                                                |
| `shipping_int`     | float                | International shipping cost -- optional                                                                      |
| `shipping_nat`     | float                | National shipping cost -- optional                                                                           |
| `stock`            | int                  | Stock -- optional                                                                                            |

## Update a reward

Updates the reward with the given ID. This endpoint is only accessible to the owner of the related project and if the project is not finished.

{{% http method="patch" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field              | Type                 | Description                                                                    |
| ------------------ | -------------------- | ------------------------------------------------------------------------------ |
| `address_required` | bool                 | If true, contributors must specify a shipping address when ordering the reward |
| `date_delivery`    | string               | Date of the reward delivery with the YYYY-MM-DD format                         |
| `description`      | [i18n object](#i18n) | Description                                                                    |
| `price`            | float                | Price, must be between 0 and 1e10                                              |
| `shipping_int`     | float                | International Shipping                                                         |
| `shipping_nat`     | float                | National Shipping                                                              |
| `stock`            | int                  | Stock                                                                          |

## Delete a reward

Deletes the reward with the given ID. This endpoint has the same restriction as the [create-reward](#create-a-project-reward) endpoint.

{{% http method="delete" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

## List project rewards

Retrieves all the rewards that belong to the project with the given ID. This endpoint is only accessible if the project status is `online`, or if the authenticated user is the project owner.

The response is [paginated](#pagination).
{{% http method="get" %}}/v1/projects/:id/rewards{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
