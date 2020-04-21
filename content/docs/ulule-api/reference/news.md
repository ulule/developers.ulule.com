---
title: "News"
weight: 14
---

# News

Project owners may add news to their project to keep the crowd updated during and after the funding campaign.

## News resource

| Field              | Type                         | Description                                                                                   |
| ------------------ | ---------------------------- | --------------------------------------------------------------------------------------------- |
| `absolute_url`     | string                       | Link to the news on the Ulule website                                                         |
| `author`           | [user resource](#user)       | Author of the news, only present in the [news-detail endpoint](<#retrieve a news>)            |
| `comments_count`   | int                          | Count of news comments                                                                        |
| `content`          | [i18n object](#i18n)         | Content of the news                                                                           |
| `date_publication` | string                       | Date at which the news was published, with RFC 3339 format, null if the news is not published |
| `id`               | int                          | Unique ID of the news                                                                         |
| `project`          | [project resource](#project) | Project the news belongs to, only present in the [news-detail endpoint](#retrieve-a-news)     |
| `reserved`         | bool                         | Whether the content is only visible to supporters                                             |
| `resource_uri`     | string                       | URL of the news resource                                                                      |
| `slug`             | string                       | Slug of the news                                                                              |
| `status`           | string                       | Status of the news, can be `online`or `waiting`                                               |
| `title`            | [i18n object](#i18n)         | Title of the news                                                                             |

## Retrieve a news

Retrieves the news resource with the given ID. This endpoint is only accessible if the news status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/news/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

## Create a project news

Creates a news for the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/news{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field      | Type                 | Description                                                                       |
| ---------- | -------------------- | --------------------------------------------------------------------------------- |
| `content`  | [i18n object](#i18n) | Content of the news -- required                                                   |
| `reserved` | bool                 | Whether the content is only visible to supporters -- optional, default is `false` |
| `title`    | [i18n object](#i18n) | Title of the news -- required, max 255 characters                                 |

## Update a news

Updates the news with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/news/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

### Payload

| Field      | Type                 | Description                                       |
| ---------- | -------------------- | ------------------------------------------------- |
| `content`  | [i18n object](#i18n) | Content of the news                               |
| `reserved` | bool                 | Whether the content is only visible to supporters |
| `title`    | [i18n object](#i18n) | Title of the news -- max 255 characters           |

## Delete a news

Deletes the news with the given ID. This endpoint is only accessible to the project owner. Status must be `waiting`.

{{% http method="delete" %}}/v1/news/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

## List a project news

Retrieves all the news resources that belong to the project with the given ID. This endpoint is only accessible if the project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/projects/:id/news{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID |

## Test a news

Sends an email to the author of the news with the given ID. This endpoint is only accessible to the news author.

The purpose of this endpoint is for the news author to see how the news looks like inside an email.

{{% http method="post" %}}/v1/news/:id/try{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

## Publish a news

Publishes the news with the given ID. This endpoint is only accessible to the project owner.

The news status must be `waiting`.

This endpoint does two things: it sets the news status to `online` and sends the news via email to every supporters of the project.

{{% http method="post" %}}/v1/news/:id/publish{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |

## Unpublish a news

Unpublishes the news with the given ID. This endpoint is only accessible to the project owner.

The news status must be `online`.

{{% http method="post" %}}/v1/news/:id/unpublish{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | News ID     |
