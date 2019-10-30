---
title: "Reward"
weight: 9
---

# Reward

## Reward resource

| Field                   | Type                                     | Description                                                                                                                                                                                                |
| ----------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address_required`      | bool                                     | Backers must specify a shipping address when ordering the reward                                                                                                                                           |
| `available`             | bool                                     | True if reward is available                                                                                                                                                                                |
| `date_delivery`         | string                                   | Date of the reward delivery with the YYYY-MM-DD format. This field must be set by the project owner. It is only an estimation of the expected shipping delivery delay of the reward                        |
| `description`           | [i18n object](#i18n)                     | Description of the reward, can contain HTML tags                                                                                                                                                           |
| `has_shippings`         | bool                                     | True if the reward has shippings                                                                                                                                                                           |
| `id`                    | int                                      | Unique ID of the reward                                                                                                                                                                                    |
| `image`                 | [image resource](#image)                 | Image of the reward                                                                                                                                                                                        |
| `num_products`          | int                                      | Number of products that are counted when the reward is ordered, only valid if project is in presale mode                                                                                                   |
| `phone_number_required` | bool                                     | Backers must specify the phone number in the shipping address when ordering the reward                                                                                                                     |
| `price`                 | int                                      | Price of the reward                                                                                                                                                                                        |
| `project_id`            | int                                      | Unique ID of the related project                                                                                                                                                                           |
| `resource_uri`          | string                                   | URL of the reward resource                                                                                                                                                                                 |
| `shipping_countries`    | array of strings                         | Array of countries, represented by their two-letter ISO code. If this field is non-null, project owners can only define shippings to these countries, and bakers can only create orders to these countries |
| `shipping_int`          | float                                    | International shipping cost, null if no shipping                                                                                                                                                           |
| `shipping_nat`          | float                                    | National shipping cost, null if no shipping                                                                                                                                                                |
| `shippings`             | array of [shipping resources](#shipping) | Per country shippings                                                                                                                                                                                      |
| `stock`                 | int                                      | Maximum number of rewards the project owner can produce. If null there is no limit                                                                                                                         |
| `stock_available`       | int                                      | Count of remaining rewards, null if stock is null, otherwise equal to `stock` - `stock_taken`                                                                                                              |
| `stock_taken`           | int                                      | Count of taken reward items                                                                                                                                                                                |
| `title`                 | [i18n object](#i18n)                     | Title of the reward                                                                                                                                                                                        |
| `variants`              | array of [variant resources](#variant)   | Variants of the reward                                                                                                                                                                                     |

## Retrieve a reward

Retrieves the reward with the given ID. This endpoint is only accessible if the related project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

## Create a project reward

Creates a new reward for the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/rewards{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field          | Type                                                         | Description                                                                                                          |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `description`  | [i18n object](#i18n)                                         | Description -- optional, max 1000 characters                                                                         |
| `dry_run`      | bool                                                         | Validate the payload, but do not actually create the reward                                                          |
| `image_id`     | [reward image payload](#reward-image-payload)                | Image -- optional                                                                                                    |
| `num_products` | int                                                          | Number of products that are counted when the reward is ordered -- optional, only valid if project is in presale mode |
| `price`        | float                                                        | Price -- required, must be between 0 and 1e10, must be an int if project is in project mode                          |
| `stock`        | int                                                          | Stock -- optional                                                                                                    |
| `title`        | [i18n object](#i18n)                                         | Title -- required in project lang, max 200 characters                                                                |
| `variants`     | array of [create-variant payloads](#create-a-reward-variant) | Variants -- optional                                                                                                 |

### Reward image payload

The reward image payload is a JSON object where keys are language codes (see [supported languages](#languages)) and values are ids of [image resources](#image-resource). The image  must be in the same project as the reward, the image type must be `reward` and the image lang must match the lang in the payload.

## Update a reward

Updates the reward with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field          | Type                                          | Description                                                                                                          |
| -------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `description`  | [i18n object](#i18n)                          | Description -- max 1000 characters                                                                                   |
| `dry_run`      | bool                                          | Validate the payload, but do not actually update the reward                                                          |
| `image_id`     | [reward image payload](#reward-image-payload) | Image                                                                                                                |
| `num_products` | int                                           | Number of products that are counted when the reward is ordered -- optional, only valid if project is in presale mode |
| `price`        | float                                         | Price, must be between 0 and 1e10                                                                                    |
| `stock`        | int                                           | Stock                                                                                                                |
| `title`        | [i18n object](#i18n)                          | Title -- max 200 characters                                                                                          |

Also, it's possible to create, update, and delete variants with the following payload fields.

| Field             | Type                                                         | Description                                           |
| ----------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| `create_variants` | array of [create-variant payloads](#create-a-reward-variant) | Create variants                                       |
| `update_variants` | array of [update-variant payloads](#update-a-variant)        | Update variants -- the variant `id` field must be set |
| `delete_variants` | array of ints                                                | Delete variants                                       |

## Delete a reward

Deletes the reward with the given ID. This endpoint is only accessible to the project owner.

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
