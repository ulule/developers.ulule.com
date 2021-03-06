---
title: "Sponsorship"
weight: 24
---

# Sponsorship

Projects can have up to 4 sponsorships.

## Sponsorship resource

| Field         | Type                                  | Description                                 |
| ------------- | ------------------------------------- | ------------------------------------------- |
| `amount`      | int                                   | Amount of the sponsorship                   |
| `coefficient` | int                                   | Coefficient of the sponsorship              |
| `description` | [i18n object](#i18n)                  | Main description of the sponsorship         |
| `id`          | int                                   | Unique ID of the sponsorship                |
| `is_full`     | bool                                  | True if the total amount is reached         |
| `main_color`  | string                                | Main color of the sponsorship -- HEX format |
| `priority`    | int                                   | Priority of the sponsorship                 |
| `project_id`  | int                                   | Unique ID of the project                    |
| `sponsor`     | [sponsor resource](#sponsor-resource) | Sponsor                                     |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field     | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| `channel` | [channel resource](#channel-resource) | Channel     |

## Sponsor resource

| Field      | Type                     | Description                                 |
| ---------- | ------------------------ | ------------------------------------------- |
| `id`       | int                      | Unique ID of the sponsor                    |
| `image`    | [image resource](#image) | Image of the sponsor                        |
| `link`     | string                   | Link to the sponsor website                 |
| `name`     | string                   | Name of the sponsor                         |
| `position` | int                      |                                             |
| `type`     | string                   | Type of the sponsor (`normal` or `premium`) |
| `user`     | [user resource](#user)   | User of the sponsor                         |


## List project sponsorships

Retrieves all the sponsorships of a project.

{{% http method="get" %}}/v1/projects/:id/sponsorships{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
