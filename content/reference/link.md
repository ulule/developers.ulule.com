---
title: "Link"
weight: 3
---

# Link

Users may add social websites links to their profile. Links may also be attached to [proposals](#create-a-proposal).

## Link resource

| Field             | Type   | Description               |
| ----------------- | ------ | ------------------------- |
| `crawlable`       | bool   | Whether link is crawlable |
| `followers_count` | int    | Number of followers       |
| `id`              | int    | Unique ID of the link     |
| `url`             | string | URL of the link           |
| `views_count`     | int    | Number of views           |

## Create a link

Creates a new link. This endpoint is anonymously accessible.

{{% http method="post" %}}/v1/links{{% /http %}}

### Payload

| Field | Type   | Description                                     |
| ----- | ------ | ----------------------------------------------- |
| `url` | string | URL of the link -- required, max 200 characters |

## Create a user link

Creates a new link for the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="post" %}}/v1/users/:id/links{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field | Type   | Description                                     |
| ----- | ------ | ----------------------------------------------- |
| `url` | string | URL of the link -- required, max 200 characters |

## Update a link

Updates the link with the given ID. This endpoint is only accessible to the user the link belongs to.

{{% http method="patch" %}}/v1/links/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Link ID     |

### Payload

| Field | Type   | Description                 |
| ----- | ------ | --------------------------- |
| `url` | string | URL of the link -- required |

## Delete a link

Deletes the link with the given ID. This endpoint is only accessible to the user the link belongs to.

{{% http method="delete" %}}/v1/links/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Link ID     |

## List user links

Retrieves all the links that belongs to the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="get" %}}/v1/users/:id/links{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |
