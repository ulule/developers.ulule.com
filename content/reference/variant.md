---
title: "Variant"
weight: 10
---

# Variant

## Variant resource

| Field             | Type                                | Description                                                                                   |
| ----------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| `available`       | bool                                | True if reward is available                                                                   |
| `description`     | [i18n object](#i18n)                | Description of the reward, can contain HTML tags                                              |
| `id`              | int                                 | Unique ID of the reward                                                                       |
| `parent`          | [reward resource](#reward-resource) | Parent of the variant                                                                         |
| `resource_uri`    | string                              | URL of the reward resource                                                                    |
| `stock`           | int                                 | Maximum number of rewards the project owner can produce. If null there is no limit            |
| `stock_available` | int                                 | Count of remaining rewards, null if stock is null, otherwise equal to `stock` - `stock_taken` |
| `stock_taken`     | int                                 | Count of taken reward items                                                                   |

## Create a reward variant

Creates a new variant for the reward with the given ID. This endpoint has the same limitations as the [create-reward](#create-a-project-reward) endpoint.

{{% http method="post" %}}/v1/rewards/:id/variants{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field         | Type                 | Description             |
| ------------- | -------------------- | ----------------------- |
| `description` | [i18n object](#i18n) | Description -- required |
| `stock`       | int                  | Stock -- optional       |

## Update a variant

Updates the variant with the given ID. This endpoint has the same limitations as the [update-reward](#update-a-reward) endpoint.

{{% http method="patch" %}}/v1/variants/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Variant ID  |

### Payload

| Field         | Type                 | Description |
| ------------- | -------------------- | ----------- |
| `description` | [i18n object](#i18n) | Description |
| `stock`       | int                  | Stock       |

## Delete a variant

Deletes the variant with the given ID. This endpoint has the same limitations as the [delete-reward](#delete-a-reward) endpoint.

{{% http method="delete" %}}/v1/variants/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Variant ID  |

## List reward variants

Retrieves all the variants that belong to the reward with the given ID. This endpoint is only accessible if the related project status is `online`, or if the authenticated user is the project owner.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/rewards/:id/variants{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |
