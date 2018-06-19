---
title: "Project"
weight: 5
---

# Project

The project resource represents a project hosted on Ulule.

There are two types of project on Ulule and they have different objectives: projects of type `project` are for collecting a certain amount of money, and projects of type `presale` are for receiving a certain number of pre-orders.

The project `status` can have the following values:

| Status                     | Description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| `new`                      | The project has been created from a validated proposal                          |
| `pending`                  | The project owner has submitted the project to validation                       |
| `pending-owner`            | The moderation team is waiting for a change or an answer from the project owner |
| `pending-final-validation` | The moderation team has sent the project to final validation                    |
| `validated`                | The moderation team has validated the project                                   |
| `online`                   | The project owner has published the project                                     |
| `refused`                  | The moderation team has refused the project                                     |
| `waiting`                  | The moderation team has put the project to a waiting state                      |

## Project resource

| Field                        | Type                                           | Description                                                                                                                          |
| ---------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `absolute_url`               | string                                         | Link to the project page on the Ulule website                                                                                        |
| `account`                    | [account resource](#account)                   |                                                                                                                                      |
| `amount_raised`              | int                                            |                                                                                                                                      |
| `analytics_count`            | int                                            |                                                                                                                                      |
| `background`                 | [image resource](#image)                       | Background image or color of the project                                                                                             |
| `comments_count`             | int                                            |                                                                                                                                      |
| `committed`                  | int                                            |                                                                                                                                      |
| `country`                    | string                                         | Two-letter ISO code of the country                                                                                                   |
| `currency`                   | string                                         | Three-letter ISO code of the currency                                                                                                |
| `currency_display`           | string                                         | Unicode character of the currency                                                                                                    |
| `date_end`                   | string                                         | Date at which the funding campaign ends, with RFC 3339 format                                                                        |
| `date_start`                 | string                                         | Date at which the funding campaign starts, with RFC 3339 format                                                                      |
| `description`                | [i18n object](#i18n)                           | Main description of the project                                                                                                      |
| `description_funding`        | [i18n object](#i18n)                           | Description of what are funds for                                                                                                    |
| `description_yourself`       | [i18n object](#i18n)                           | Description of the owner of the project                                                                                              |
| `discussions_thread_id`      | int                                            |                                                                                                                                      |
| `finished`                   | bool                                           | True if the funding campaign ended                                                                                                   |
| `goal_raised`                | bool                                           | True if the current sum collected is superior to the project goal                                                                    |
| `goal`                       | int                                            | Total sum in the given currency of the funds targeted by the campaign                                                                |
| `id`                         | int                                            | Unique ID of the project                                                                                                             |
| `is_cancelled`               | bool                                           | True if the project is cancelled                                                                                                     |
| `is_online`                  | bool                                           | True if the project is online                                                                                                        |
| `lang`                       | string                                         | Main language of the project                                                                                                         |
| `location`                   | [location resource](#location)                 | Location of the project                                                                                                              |
| `lowest_contribution_amount` | int                                            | Lowest contribution possible in the project currency                                                                                 |
| `main_image`                 | [image resource](#image)                       | Main image of the project                                                                                                            |
| `main_tag`                   | [tag resource](#category-and-tag)              | Main tag of the project                                                                                                              |
| `name`                       | [i18n object](#i18n)                           | Name of the project                                                                                                                  |
| `nb_days`                    | int                                            | Duration of the funding campaign in days                                                                                             |
| `nb_products_sold`           | int                                            | Number of products sold                                                                                                              |
| `news_count`                 | int                                            | Count of news published                                                                                                              |
| `owner`                      | [user resource](#user)                         | Owner of the project                                                                                                                 |
| `partnerships`               | array of [partnership resources](#partnership) | Partnerships of the project, only present in the [project-detail endpoint](#retrieve-a-project)                                      |
| `payments_methods`           | array of strings                               | Payments methods supported by the project (`check`, `creditcard`, `paypal`, `directdebit`, `maestro`, `ideal`, `saving`, `bankwire`) |
| `percent`                    | int                                            | Percentage of the goal raised on the goal targeted                                                                                   |
| `resource_uri`               | string                                         | URL of the project resource                                                                                                          |
| `rewards`                    | array of [reward resources](#reward)           | Rewards of the project                                                                                                               |
| `slug`                       | string                                         | Unique slug of the project                                                                                                           |
| `sponsorships_count`         | int                                            |                                                                                                                                      |
| `status`                     | string                                         | Status of the project (`online`, `new`, `pending`, `pending-owner`, `validated`, `refused`, `waiting`, `pending-final-validation`)   |
| `subtitle`                   | [i18n object](#i18n)                           | Subtitle of the project                                                                                                              |
| `supporters_count`           | int                                            | Number of supporters                                                                                                                 |
| `timezone`                   | string                                         | Timezone of the project                                                                                                              |
| `type`                       | string                                         | Type of the project (`presale` or `project`)                                                                                         |
| `urls`                       | [urls resource](#urls)                         | URLs of the project                                                                                                                  |
| `video`                      | [video resource](#video)                       | Video of the project                                                                                                                 |
| `visible`                    | bool                                           |                                                                                                                                      |


In addition, some fields are present only in certain conditions:

| Field           | Type             | Description                                                                                                                                                                    |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fields_needed` | array of strings | Project fields that must be filled by the project owner before the project can be submitted for validation to the moderation team, only present when the project is not online |
| `notifications` |                  |                                                                                                                                                                                |

## Retrieve a project

Retrieves the project with the given ID. This endpoint is accessible if the project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/projects/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Update a project

Updates the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/projects/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field                  | Type                 | Description                                                                                                             |
| ---------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `description`          | [i18n object](#i18n) | Main description of the project                                                                                         |
| `description_funding`  | [i18n object](#i18n) | Description of what the funds are for                                                                                   |
| `description_yourself` | [i18n object](#i18n) | Description of the owner of the project                                                                                 |
| `name`                 | [i18n object](#i18n) | Name of the project                                                                                                     |
| `slug`                 | string               | Slug of the project, this field must be unique accross the platform and so can't be updated to an already existing slug |
| `subtitle`             | [i18n object](#i18n) | Subtitle of the project                                                                                                 |
| `timezone`             | string               | Timezone of the project                                                                                                 |

In addition, the following fields can't be updated after the project has been validated by the moderation team, they can only be updated when the project status is one of `new`, `pending` and `pending-owner`.

| Field         | Type          | Description                                                   |
| ------------- | ------------- | ------------------------------------------------------------- |
| `account_id`  | int           | ID of the project owner account                               |
| `country`     | string        | Two-letter ISO code of the country                            |
| `currency`    | string        | Three-letter ISO code of the currency                         |
| `date_end`    | string        | Date at which the funding campaign ends, with RFC 3339 format |
| `goal`        | int           | Goal of the project                                           |
| `lang`        | string        | Main language of the project                                  |
| `main_tag_id` | int           | ID of the main tag of the project                             |
| `nb_days`     | string        | Duration of the funding campaign in days                      |
| `tags`        | array of ints | ID of tags related to the project                             |

Finally, the following fields can't be updated by the project owner, they can only be updated by staff users.

| Field                 | Type   | Description                                                                               |
| --------------------- | ------ | ----------------------------------------------------------------------------------------- |
| `comments_enabled`    | string | Enable comments, must be one of `everyone`, `supporters` and `disabled`                   |
| `status`              | string | Project status                                                                            |
| `supporters_disabled` | string | If set to false, the "Supporters" tab is not visible on the project page on Ulule website |
| `type`                | string | Project type -- must be `project` or `presale`                                            |
| `unread`              | bool   |                                                                                           |
| `visible`             | bool   | If set to false, the project is not indexed by search engines                             |

## Submit a project

Submits the project for review to the moderation team. This endpoint is only accessible to the project owner.

The project status must be `new`.

Additionally, the following fields must be set (i18n fields must be set in the project default language):

* `country`
* `currency`
* `description`
* `description_funding`
* `description_yourself`
* `goal` (if `type` is `project`)
* `lang`
* `name`
* `nb_product_min` (if `type` is `presale`)
* `owner.avatar`
* `owner.email`
* `owner.location`
* `rewards`
* `slug`
* `subtitle`
* one of `date_end` anf `nb_days`

Finally, the `account.is_completed` field must be `true`

{{% http method="post" %}}/v1/projects/:id/submit{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Publish a project

Publishes the project and make it publicly visible. This endpoint is only accessible to the project owner.

The project status must be `validated`.

The project owner may update the `date_end` and `timezone` fields. The `date_end` field can’t be updated to a date that is more than 5 days before or after the original `date_end` or current day plus `nb_days`: `old date_end - 5 < new date_end < old date_end + 5` where `old date_end` is the previous `date_end` or `current date + nb_days` if `date_end` is null.

The `date_end` field must be set for a project to go online.

{{% http method="post" %}}/v1/projects/:id/publish{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

|Field|Type|Description|
|---|---|---|
|`date_end`|string|Date at which the funding campaign ends, with RFC 3339 format -- optional|
|`timezone`|string|Timezone of the project -- optional|

## Unpublish a project

Unpublished the project. This endpoint is only accessible to staff.

This endpoint is typically used when the project owner mistakenly published the project too soon.

{{% http method="post" %}}/v1/projects/:id/unpublish{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## List all partner projects

Retrieves all the projects that have a partnership with the partner with the given slug. This endpoint is only accessible to partner users.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/partners/:slug/projects{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Partner slug |

## List user projects

Retrieves all the projects related to the user with the given ID. This endpoint is only accessible to oneself.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/users/:id/projects{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Query parameters

| Parameter | Description                                                                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`   | Allow to filter the type of relationship between the projects and the user. It can be one of `created`, `followed`, `supported`. By default, it returns all |

## Project discussion

Projects have one discussion thread where the project owner and the moderation team can talk to each other. The two following endpoints allow staff users that are not in the recipient list to read and join the project discussion thread.

### Read messages from project discussion thread

`GET /v1/projects/:id/messages` where `:id` is the project ID.

### Join a project discussion thread

`POST /v1/projects/:id/join-thread` where `:id` is the project ID.
