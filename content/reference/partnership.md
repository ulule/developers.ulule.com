---
title: "Partnership"
---

# Partnership

## Partnership resource

| Field        | Type                         | Description                                             |
| ------------ | ---------------------------- | ------------------------------------------------------- |
| `id`         | int                          | Unique ID of the partnership                            |
| `is_default` | int                          | If true, the partner is the default one for the project |
| `is_support` | int                          |                                                         |
| `partner`    | [partner resource](#partner) | Partner                                                 |
| `presale`    | [project resource](#project) | Project                                                 |

## Retrieve a partnership

Retrieves the partnership with the given ID. This endpoint is only accessible to partner users.

{{% http method="get" %}}/v1/partnerships/:id{{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Partnership ID |

## Create a project partnership

Creates a new partnership for the project with the given ID. This endpoint is only accessible to partner users.

{{% http method="post" %}}/v1/projects/:id/partnerships{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field        | Type | Description                          |
| ------------ | ---- | ------------------------------------ |
| `partner_id` | int  | Unique ID of the partner -- required |
| `is_default` | bool |                                      |
| `is_support` | bool |                                      |

## Update a partnership

Updates the partnership with the given ID. This endpoint is only accessible to the partner users.

{{% http method="patch" %}}/v1/partnerships/:id{{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Partnership ID |

### Payload

| Field        | Type | Description |
| ------------ | ---- | ----------- |
| `is_default` | bool |             |
| `is_support` | bool |             |

## Delete a partnership

Deletes the partnership with the given ID. This endpoint has the same limitations as the [create-partnership](#create-a-project-partnership) endpoint.

{{% http method="delete" %}}/v1/partnerships/:id{{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Partnership ID |

## List project partnerships

Retrieves all the partnerships of a project. This endpoint is only accessible to the project owner and the partner users.

{{% http method="get" %}}/v1/projects/:id/partnerships{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
