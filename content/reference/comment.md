---
title: "Comment"
weight: 15
---

# Comment

Users may post comments on projects and news.

## Comment resource

| Field                   | Type                   | Description                                          |
| ----------------------- | ---------------------- | ---------------------------------------------------- |
| `comment`               | string                 | Body of the comment                                  |
| `id`                    | int                    | Unique ID of the tag                                 |
| `submit_date`           | string                 | Date of the comment submission, with RFC 3339 format |
| `submit_date_formatted` | string                 | Relative date of the comment submission              |
| `user`                  | [user resource](#user) | Author of the comment                                |

## Create a project comment

Creates a comment on the project with the given ID.

{{% http method="post" %}}/v1/projects/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field     | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `comment` | string | Body of the comment -- required |

## Create a news comment

Creates a comment on the news  with the given ID.

{{% http method="post" %}}/v1/news/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

### Payload

| Field     | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `comment` | string | Body of the comment -- required |

## Update a comment

Updates the comment with the given ID. This endpoint is only accessible to the comment author.

{{% http method="patch" %}}/v1/comments/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Comment ID  |

### Payload

| Field     | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `comment` | string | Body of the comment -- required |

## Delete a comment

Deletes the comment with the given ID. This endpoint is only accessible to the comment author.

{{% http method="delete" %}}/v1/comments/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Comment ID  |

## List project comments

Retrieves all the comments that belong to the project with the given ID.

{{% http method="get" %}}/v1/projects/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## List news comments

Retrieves all the comments that belong to the news resource with the given ID.

{{% http method="get" %}}/v1/news/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |