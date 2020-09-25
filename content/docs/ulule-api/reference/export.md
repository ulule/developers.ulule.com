---
title: "Export"
weight: 18
---

# Export

Project owners can export data about their projects, typically for bookkeeping.

At the time of writing, only exports of type `orders` are available. The export file format can be `csv` or `xlsx`.

The typical workflow is the following:

1. The project owner creates an export.
2. The export is created asynchronously. Its status goes from `waiting` to `processing` to `succeeded`, it can also be `failed` or `cancelled` by the staff.
3. The project owner receives an email with the export file attached.

## Export resource

| Field        | Type                   | Description                                                                                    |
| ------------ | ---------------------- | ---------------------------------------------------------------------------------------------- |
| `created_at` | string                 | Date at which the export has been created, with RFC 3339 format                                |
| `format`     | string                 | File format, can be `csv` or `xlsx`                                                            |
| `id`         | int                    | Unique ID of the export                                                                        |
| `project_id` | int                    | Unique ID of the related project                                                               |
| `status`     | string                 | Status of the export, can be one of `waiting`, `succeeded`, `failed`, `canceled`, `processing` |
| `type`       | string                 | Type of the export                                                                             |
| `url`        | string                 | URL of the file                                                                                |
| `user`       | [user resource](#user) | Recipient of the export                                                                        |

## Retrieve an export

Retrieves the export with the given ID. This endpoint is only accessible to the owner of the related project.

{{% http method="get" %}}/v1/exports/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Export ID   |

## Create an export

Creates an export for the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/exports{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field     | Type                                     | Description                                                                                     |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `format`  | string                                   | Format of the export -- required, must be `csv` or `xlsx`                                       |
| `type`    | string                                   | Type of the export -- required, must be `orders`                                                |
| `columns` | [export columns object](#export-columns) | Columns to be exported, and their header names -- optional, by default all columns are included |


#### Export columns

The export columns object is a JSON object whose keys are the columns to be exported, and whose values are the headers of each column in the export.

For example, if the `columns` payload field has the following value, the export only includes the order ID, the user email and the reward description, with the given header values.

```json
{
    "columns": {
        "order.id" : "ID de la commande",
        "user.email": "Email de l'utilisateur",
        "order.reward.description": "Description de la contrepartie"
    }
}
```

The available columns are the following:

* `order.id`
* `user.username`
* `user.lang`
* `user.full_name`
* `user.email`
* `shipping_address.first_name`
* `shipping_address.last_name`
* `shipping_address.entity_name`
* `shipping_address.address_1`
* `shipping_address.address_2`
* `shipping_address.postal_code`
* `shipping_address.city`
* `shipping_address.state`
* `shipping_address.country`
* `billing_address.first_name`
* `billing_address.last_name`
* `billing_address.entity_name`
* `billing_address.type`
* `billing_address.address_1`
* `billing_address.address_2`
* `billing_address.postal_code`
* `billing_address.city`
* `billing_address.state`
* `billing_address.country`
* `order.reward.id`
* `order.reward.description`
* `order.reward.price`
* `order.reward.quantity`
* `order.reward.total`
* `order.total`
* `order.tracking.source`
* `order.tracking.medium`
* `order.payment_method`
* `order.status`
* `order.created_at`
* `order.note`

## List project exports

Retrieves all the exports related to the project with the given ID. This endpoint is only accessible to the owner of the related project,

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/exports{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
