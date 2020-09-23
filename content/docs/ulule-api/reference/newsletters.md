---
title: "Newsletter"
weight: 5
---

# Newsletter

# Newsletter resource

| Field           | Type                 | Description                                                    |
| --------------- | -------------------- | -------------------------------------------------------------- |
| `is_subscribed` | bool                 | Whether the authenticated user is subscribed to the newsletter |
| `name`          | [i18n object](#i18n) | Name of the newsletter                                         |
| `slug`          | string               | Unique slug of the newsletter                                  |

## List newsletters

{{% http method="get" %}}/v1/newsletters{{% /http %}}

## Subscribe contact to newsletter

Subscribe an email to a given newsletter.
The email must not belong to an existing user.

{{% http method="post" %}}/v1/newsletters/:slug{{% /http %}}

| Parameter | Description     |
| --------- | --------------- |
| `:slug`   | Newsletter Slug |

### Payload

| Field   | Type   | Description |
| ------- | ------ | ----------- |
| `email` | string | Email       |
