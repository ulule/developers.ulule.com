---
title: "Channel"
weight: 22
---

# Channel

## Channel resource

| Field          | Type                     | Description                                                      |
| -------------- | ------------------------ | ---------------------------------------------------------------- |
| `absolute_url` | string                   | Link to the channel page on the Ulule website                    |
| `background`   | [image resource](#image) | Background image of the channel                                  |
| `created_at`   | string                   | Date at which the channel has been created, with RFC 3339 format |
| `description`  | [i18n object](#i18n)     | Description of the channel                                       |
| `logo`         | [image resource](#image) | Logo image of the channel                                        |
| `name`         | [i18n object](#i18n)     | Name of the channel                                              |
| `position`     | int                      | Position of the channel                                          |
| `slug`         | string                   | Unique slug of the channel                                       |
| `subtitle`     | [i18n object](#i18n)     | Subtitle of the channel                                          |
| `updated_at`   | string                   | Date at which the channel has been updated, with RFC 3339 format |
| `user`         | [user resource](#user)   | User who created the channel                                     |

## List channels

List all channels.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/channels{{% /http %}}

## Retrieve a channel

Retrieves the channel with the given slug.

{{% http method="get" %}}/v1/channels/:id{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Channel slug |

## List user channels

List channels for the user with the given ID.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/users/:id/channels{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |
