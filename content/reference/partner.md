---
title: "Partner"
weight: 20
---

# Partner

## Partner resource

| Field     | Type                     | Description                                                                      |
| --------- | ------------------------ | -------------------------------------------------------------------------------- |
| `id`      | int                      | Unique ID of the partner                                                         |
| `logo`    | [image resource](#image) | Partner logo, only present in the [partner-detail](#retrieve-a-partner) endpoint |
| `name`    | string                   | Partner name                                                                     |
| `ribbon`  | [image resource](#image) | Partner ribbon                                                                   |
| `slug`    | string                   | Unique slug of the partner                                                       |
| `url`     | string                   | Link to the partner website                                                      |
| `user_id` | int                      | Unique ID of the partner user                                                    |

## Retrieve a partner

Retrieves the partner with the given ID.

{{% http method="get" %}}/v1/partners/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Partner ID  |
