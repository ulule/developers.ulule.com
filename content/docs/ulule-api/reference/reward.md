---
title: "Reward"
weight: 9
---

# Reward

## Reward resource

| Field                 | Type                                                        | Description                                                                                              |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `available`           | bool                                                        | Whether the reward is available                                                                          |
| `delivery`            | [delivery resource](#delivery-resource)                     | Delivery settings for the reward, copied from project delivery settings, or custom for the reward        |
| `description`         | [i18n object](#i18n)                                        | Description of the reward, can contain HTML tags                                                         |
| `has_custom_delivery` | bool                                                        | Whether the reward has custom delivery settings                                                          |
| `id`                  | int                                                         | Unique ID of the reward                                                                                  |
| `image`               | [i18n object](#i18n) where values are [image resources](#image) | Image of the reward                                                                                      |
| `num_products`        | int                                                         | Number of products that are counted when the reward is ordered, only valid if project is in presale mode |
| `price`               | int                                                         | Price of the reward                                                                                      |
| `project_id`          | int                                                         | Unique ID of the related project                                                                         |
| `resource_uri`        | string                                                      | URL of the reward resource                                                                               |
| `stock`               | int                                                         | Maximum number of rewards the project owner can produce. If null there is no limit                       |
| `stock_available`     | int                                                         | Count of remaining rewards, null if stock is null, otherwise equal to `stock` - `stock_taken`            |
| `stock_taken`         | int                                                         | Count of taken reward items                                                                              |
| `title`               | [i18n object](#i18n)                                        | Title of the reward                                                                                      |
| `variants`            | array of [variant resources](#variant-resource)             | Variants of the reward                                                                                   |

### Variant resource

| Field             | Type                                | Description                                                                                    |
| ----------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| `available`       | bool                                | Whether the variant is available                                                               |
| `description`     | [i18n object](#i18n)                | Description of the variant, can contain HTML tags                                              |
| `id`              | int                                 | Unique ID of the variant                                                                       |
| `parent`          | [reward resource](#reward-resource) | Parent of the variant                                                                          |
| `stock`           | int                                 | Maximum number of variants the project owner can produce. If null there is no limit            |
| `stock_available` | int                                 | Count of remaining variants, null if stock is null, otherwise equal to `stock` - `stock_taken` |
| `stock_taken`     | int                                 | Count of taken variant items                                                                   |

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

| Field          | Type                                                        | Description                                                                                                          |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `description`  | [i18n object](#i18n)                                        | Description -- optional                                                                                              |
| `dry_run`      | bool                                                        | Validate the payload, but do not actually create the reward                                                          |
| `image_id`     | [reward image payload](#reward-image-payload)               | Image -- optional                                                                                                    |
| `num_products` | int                                                         | Number of products that are counted when the reward is ordered -- optional, only valid if project is in presale mode |
| `price`        | float                                                       | Price -- required, must be between 0 and 1e10, must be an int if project is in project mode                          |
| `stock`        | int                                                         | Stock -- optional                                                                                                    |
| `title`        | [i18n object](#i18n)                                        | Title -- required in project lang, max 200 characters                                                                |
| `variants`     | array of [create-variant payloads](#create-variant-payload) | Variants -- optional                                                                                                 |

### Reward image payload

The reward image payload is a JSON object where keys are language codes (see [supported languages](#languages)) and values are ids of [image resources](#image-resource). The image  must be in the same project as the reward, the image type must be `reward` and the image lang must match the lang in the payload.

### Create variant payload

| Field         | Type                 | Description                                                 |
| ------------- | -------------------- | ----------------------------------------------------------- |
| `description` | [i18n object](#i18n) | Description -- required in project lang, max 200 characters |
| `position`    | int                  | Position -- required, must be greater than 0                |
| `stock`       | int                  | Stock -- optional                                           |

## Update a reward

Updates the reward with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/rewards/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field          | Type                                          | Description                                                                                                          |
| -------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `description`  | [i18n object](#i18n)                          | Description                                                                                                          |
| `dry_run`      | bool                                          | Validate the payload, but do not actually update the reward                                                          |
| `image_id`     | [reward image payload](#reward-image-payload) | Image                                                                                                                |
| `num_products` | int                                           | Number of products that are counted when the reward is ordered -- optional, only valid if project is in presale mode |
| `price`        | float                                         | Price, must be between 0 and 1e10                                                                                    |
| `stock`        | int                                           | Stock                                                                                                                |
| `title`        | [i18n object](#i18n)                          | Title -- max 200 characters                                                                                          |

Also, it's possible to create, update, and delete variants with the following payload fields.

| Field             | Type                                                        | Description                                                                    |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `create_variants` | array of [create-variant payloads](#create-variant-payload) | Create variants                                                                |
| `update_variants` | array of [update-variant payloads](#update-variant-payload) | Update variants -- the variant `id` field must be set                          |
| `delete_variants` | array of ints                                               | Delete variants -- the ints in the array must be existing variants `id` fields |

### Update variant payload

| Field         | Type                 | Description                        |
| ------------- | -------------------- | ---------------------------------- |
| `description` | [i18n object](#i18n) | Description -- max 200 characters  |
| `position`    | int                  | Position -- must be greater than 0 |
| `stock`       | int                  | Stock                              |

It is possible to reset the delivery settings of the reward with the following payload field:

| Field                    | Type | Description                                                                                                                                                               |
| ------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delete_custom_delivery` | bool | If true, delete the reward custom delivery settings. The `has_custom_delivery` field is set to false, and the `delivery` embedded resource is set to the project delivery |

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
