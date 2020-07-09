---
title: "Newsletters"
weight: 24
---

# Newsletter

# Newsletter resource

| Field         | Type   | Description                                                    |
| ------------- | ------ | -------------------------------------------------------------- |
| `description` | string | Description                                                    |
| `id`          | int    | Unique ID of the FAQ                                           |
| `name`        | string | Name                                                           |
| `subscribed`  | bool   | True if the authenticated user is subscribed to the newsletter |

## List newsletters

{{% http method="get" %}}/v1/newsletters{{% /http %}}

### Query parameters

| Parameter | Description |
| --------- | ----------- |
| `lang`    | Lang        |

## Update user newsletters

Subscribe and unsubscribe user to newsletters.

{{% http method="patch" %}}/v1/users/:id/newsletters{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field            | Type         | Description    |
| ---------------- | ------------ | -------------- |
| `subscribe`      | Array of int | Newsletter IDs |
| `unsubscribe`    | Array of int | Newsletter IDs |

## Subscribe guest to newsletters

{{% http method="post" %}}/v1/newsletters/subscribe{{% /http %}}

| Field            | Type         | Description    |
| ---------------- | ------------ | -------------- |
| `email`          | string       | Email          |
| `newsletter_ids` | Array of int | Newsletter IDs |
