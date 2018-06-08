---
title: "Variant"
weight: 10
---

# Variant

## Variant resource

The variant resource is almost the same as the [reward resource](#reward-resource). It has no `has_shippings`, `shipping_int`, `shipping_nat`, `shippings` fields, as a variant always has the same shipping costs as its parent reward. It also has no `variants` field.

## Create a reward variant

Creates a new variant for the reward with the given ID. This endpoint has the same limitations as the [create-reward](#create-a-project-reward) endpoint.

{{% http method="post" %}}/v1/rewards/:id/variants{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field           | Type                 | Description                                                            |
| --------------- | -------------------- | ---------------------------------------------------------------------- |
| `date_delivery` | string               | Date estimated for the delivery with the YYYY-MM-DD format -- optional |
| `description`   | [i18n object](#i18n) | Description -- required                                                |
| `stock`         | int                  | Stock -- optional                                                      |

## Update a variant

Updates the variant with the given ID. This endpoint has the same limitations as the [update-reward](#update-a-reward) endpoint.

{{% http method="patch" %}}/v1/variants/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Variant ID  |

### Payload

| Field           | Type                 | Description                                                |
| --------------- | -------------------- | ---------------------------------------------------------- |
| `date_delivery` | string               | Date estimated for the delivery with the YYYY-MM-DD format |
| `description`   | [i18n object](#i18n) | Description                                                |
| `stock`         | int                  | Stock                                                      |

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
