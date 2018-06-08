---
title: "Export"
weight: 16
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

| Field    | Type   | Description                                               |
| -------- | ------ | --------------------------------------------------------- |
| `format` | string | Format of the export -- required, must be `csv` or `xlsx` |
| `type`   | string | Type of the export -- required, must be `orders`          |

## List project exports

Retrieves all the exports related to the project with the given ID. This endpoint is only accessible to the owner of the related project,

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/exports{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
