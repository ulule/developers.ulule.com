---
title: "Shipping"
weight: 11
---

# Shipping

## Shipping resource

| Field       | Type             | Description                                                  |
| ----------- | ---------------- | ------------------------------------------------------------ |
| `amount`    | float            | Shipping cost                                                |
| `countries` | array of strings | Array of countries, represented by their two-letter ISO code |
| `id`        | int              | Unique ID of the shipping                                    |

## Create a reward shipping

Creates a new shipping for the reward with the given ID. This endpoint has the same limitations as the [create-reward](#create-a-project-reward) endpoint.

{{% http method="post" %}}/v1/rewards/:id/shippings{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field       | Type             | Description                                                                                        |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------------- |
| `amount`    | float            | Shipping cost -- can be between 0 and 999.99, default is 0                                           |
| `countries` | array of strings | Countries, represented by their two-letter ISO code -- required, must contain at least one country |

## Update a shipping

Updates the shipping with the given ID. This endpoint has the same limitations as the [update-reward](#update-a-reward) endpoint.

{{% http method="patch" %}}/v1/shippings/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Shipping ID |

### Payload

| Field       | Type             | Description                                         |
| ----------- | ---------------- | --------------------------------------------------- |
| `amount`    | float            | Shipping cost -- can be between 0 and 999.99        |
| `countries` | array of strings | Countries, represented by their two-letter ISO code |

## Delete a shipping

Deletes the shipping with the given ID. This endpoint has the same limitations as the [delete-reward](#delete-a-reward) endpoint.

{{% http method="delete" %}}/v1/shippings/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Shipping ID |

## List reward shippings

Retrieves all the shippings that belong to the reward with the given ID. This endpoint is only accessible if the related project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/rewards/:id/shippings{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |
