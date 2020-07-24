---
title: "Analytics Tag"
weight: 13
---

# Analytics Tag

Project owners may add analytics tags to their project to collect data. At the time of writing, only Google Analytics, Facebook pixel and Twitter are supported.

## Analytics tag resource

| Field  | Type   | Description                                      |
| ------ | ------ | ------------------------------------------------ |
| `id`   | int    | Unique ID of the tag                             |
| `tag`  | string | Tag value                                        |
| `type` | string | Tag type, can be `facebook`, `google`, `twitter` |

## Create an analytics tag

Creates a new analytics tag for the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/analytics{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field  | Type   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ |
| `tag`  | string | Tag value -- required                                        |
| `type` | string | Tag type, can be `facebook`, `google`, `twitter` -- required |

## Update an analytics tag

Updates the analytics tag with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/analytics/:id{{% /http %}}

| Parameter | Description      |
| --------- | ---------------- |
| `:id`     | Analytics tag ID |

### Payload

| Field  | Type   | Description                                      |
| ------ | ------ | ------------------------------------------------ |
| `tag`  | string | Tag value                                        |
| `type` | string | Tag type, can be `facebook`, `google`, `twitter` |

## Delete an analytics tag

Deletes the analytics tag with the given ID. This endpoint is only accessible to the project owner.

{{% http method="delete" %}}/v1/analytics/:id{{% /http %}}

| Parameter | Description      |
| --------- | ---------------- |
| `:id`     | Analytics tag ID |

## List project analytics tag

Retrieves all the analytics tags that belong to the project with the given ID. This endpoint is only accessible if the project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/projects/:id/analytics{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
