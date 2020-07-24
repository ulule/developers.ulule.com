---
title: "Video"
weight: 9
---

# Video

The project owner can add a video to the project. The video will be displayed on the project page. A project can't have more than one video per language.

## Video resource

| Field      | Type   | Description            |
| ---------- | ------ | ---------------------- |
| `id`       | int    | Unique ID of the video |
| `language` | string | Language of the video  |
| `url`      | string | URL of the video       |

The video resource also contains the following [oEmbed](https://oembed.com/) fields.

| Field              | Type   |
| ------------------ | ------ |
| `author_name`      | string |
| `author_url`       | string |
| `height`           | int    |
| `html`             | string |
| `provider_name`    | string |
| `provider_url`     | string |
| `thumbnail_height` | int    |
| `thumbnail_width`  | int    |
| `title`            | string |
| `type`             | string |
| `version`          | string |
| `width`            | int    |

## Create a project video

Creates a video. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/videos{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field      | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| `language` | string | Language of the video -- required |
| `url`      | string | URL of the video -- required      |

## Update a video

Updates a video. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/videos/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Video ID    |

### Payload

| Field | Type   | Description      |
| ----- | ------ | ---------------- |
| `url` | string | URL of the video |

## Delete a video

Deletes a video. This endpoint is only accessible to the project owner.

{{% http method="delete" %}}/v1/videos/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Video ID    |

## List project videos

Retrieves all videos that belong to the project with the given ID.

{{% http method="get" %}}/v1/projects/:id/videos{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
