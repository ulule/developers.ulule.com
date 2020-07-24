---
title: "Comment"
weight: 16
---

# Comment

Users may post comments on projects and news, and also reply to comments. We currently support only one level of replies: it's possible to reply to a parent comment, but it's not possible to reply to a reply comment.

## Comment resource

| Field                   | Type                                            | Description                                                                   |
| ----------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| `comment`               | string                                          | Body of the comment                                                           |
| `id`                    | int                                             | Unique ID of the tag                                                          |
| `replies_count`         | int                                             | Count of the comment replies, only present if the comment is a parent comment |
| `replies`               | [array of comment resources](#comment-resource) | Replies to the comment, only present if the comment is a parent comment       |
| `submit_date_formatted` | string                                          | Relative date of the comment submission                                       |
| `submit_date`           | string                                          | Date of the comment submission, with RFC 3339 format                          |
| `user`                  | [user resource](#user-resource)                 | Author of the comment                                                         |

## Create a project comment

Creates a comment on the project with the given ID.

{{% http method="post" %}}/v1/projects/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field     | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| `comment` | string | Body of the comment -- required, max 500 characters |

## Create a news comment

Creates a comment on the news with the given ID.

{{% http method="post" %}}/v1/news/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

### Payload

| Field     | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| `comment` | string | Body of the comment -- required, max 500 characters |

## Create an order comment

Creates a comment on the order with the given ID.

{{% http method="post" %}}/v1/orders/:id/comment{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Order ID    |

### Payload

| Field     | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| `comment` | string | Body of the comment -- required, max 500 characters |

## Create a reply to a comment

Creates a reply to the comment with the given ID. The comment must be a parent comment.

{{% http method="post" %}}/v1/comments/:id/replies{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Comment ID  |

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

Deletes the comment with the given ID. This endpoint is only accessible to staff.

{{% http method="delete" %}}/v1/comments/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Comment ID  |

## List project comments

Retrieves all the comments on the project with the given ID.

{{% http method="get" %}}/v1/projects/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## List news comments

Retrieves all the comments on the news resource with the given ID.

{{% http method="get" %}}/v1/news/:id/comments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

## List comment replies

Retrieves all the replies to the comment with the given ID.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/comments/:id/replies{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Comment ID  |
