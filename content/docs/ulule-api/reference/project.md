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

| Field                        | Type                                                            | Description                                                                                                                                                                    |
| ---------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `absolute_url`               | string                                                          | Link to the project page on the Ulule website                                                                                                                                  |
| `amount_raised`              | int                                                             | Amount raised in project currency                                                                                                                                              |
| `analytics_count`            | int                                                             |                                                                                                                                                                                |
| `background`                 | [image resource](#image)                                        | Background image or color of the project                                                                                                                                       |
| `comments_count`             | int                                                             |                                                                                                                                                                                |
| `committed`                  | int                                                             |                                                                                                                                                                                |
| `country`                    | string                                                          | Two-letter ISO code of the country                                                                                                                                             |
| `currency`                   | string                                                          | Three-letter ISO code of the currency                                                                                                                                          |
| `date_end`                   | string                                                          | Date at which the funding campaign ends, with RFC 3339 format                                                                                                                  |
| `date_start`                 | string                                                          | Date at which the funding campaign starts, with RFC 3339 format                                                                                                                |
| `description`                | [i18n object](#i18n)                                            | Main description of the project                                                                                                                                                |
| `description_funding`        | [i18n object](#i18n)                                            | Description of what are funds for                                                                                                                                              |
| `description_yourself`       | [i18n object](#i18n)                                            | Description of the owner of the project                                                                                                                                        |
| `discussions_thread_id`      | int                                                             |                                                                                                                                                                                |
| `fans_count`                 | int                                                             | Number of fans                                                                                                                                                                 |
| `fields_needed`              | array of strings                                                | Project fields that must be filled by the project owner before the project can be submitted for validation to the moderation team, only present when the project is not online |
| `finished`                   | bool                                                            | True if the funding campaign is finished                                                                                                                                       |
| `goal_raised`                | bool                                                            | True if the current sum collected is superior to the project goal                                                                                                              |
| `goal`                       | int                                                             | Goal in the project currency if type is `project`, or number of pre-orders if type is `presale`                                                                                |
| `id`                         | int                                                             | Unique ID of the project                                                                                                                                                       |
| `is_cancelled`               | bool                                                            | True if the project is cancelled                                                                                                                                               |
| `is_online`                  | bool                                                            | True if the project is online                                                                                                                                                  |
| `lang`                       | string                                                          | Main language of the project                                                                                                                                                   |
| `location`                   | [location resource](#location-resource)                         | Location of the project                                                                                                                                                        |
| `lowest_contribution_amount` | int                                                             | Lowest contribution possible in the project currency                                                                                                                           |
| `main_image`                 | [i18n object](#i18n) where values are [image resources](#image) | Main image of the project                                                                                                                                                      |
| `main_tag`                   | [tag resource](#category-and-tag)                               | Main tag of the project                                                                                                                                                        |
| `name`                       | [i18n object](#i18n)                                            | Name of the project                                                                                                                                                            |
| `nb_days`                    | int                                                             | Duration of the funding campaign in days                                                                                                                                       |
| `nb_products_sold`           | int                                                             | The number of orders for project of type `presale`                                                                                                                             |
| `news_count`                 | int                                                             | Count of news published                                                                                                                                                        |
| `owner`                      | [user resource](#user)                                          | Owner of the project                                                                                                                                                           |
| `payment_methods`            | array of strings                                                | Payment methods supported by the project -- any number of the available [payment methods](#payment-methods)                                                                    |
| `percent`                    | int                                                             | Percentage of the goal raised on the goal targeted                                                                                                                             |
| `resource_uri`               | string                                                          | URL of the project resource                                                                                                                                                    |
| `slug`                       | string                                                          | Unique slug of the project                                                                                                                                                     |
| `sponsorships_count`         | int                                                             |                                                                                                                                                                                |
| `status`                     | string                                                          | Status of the project (`online`, `new`, `pending`, `pending-owner`, `validated`, `refused`, `waiting`, `pending-final-validation`)                                             |
| `subtitle`                   | [i18n object](#i18n)                                            | Subtitle of the project                                                                                                                                                        |
| `supporters_count`           | int                                                             | Number of supporters                                                                                                                                                           |
| `timezone`                   | string                                                          | Timezone of the project                                                                                                                                                        |
| `type`                       | string                                                          | Type of the project (`presale` or `project`)                                                                                                                                   |
| `urls`                       | [urls resource](#urls)                                          | URLs of the project                                                                                                                                                            |
| `video`                      | [video resource](#video)                                        | Video of the project                                                                                                                                                           |
| `visible`                    | bool                                                            |                                                                                                                                                                                |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field                | Type                                               | Description                                                                                                              |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `account`            | [account resource](#account-resource)              | Project account -- only accessible to the project owner                                                                  |
| `analytics`          | array of [analytics tags](#analytics-tag-resource) | Project analytics tags                                                                                                   |
| `default_manager`    | [user resource](#user-resource)                    | A default manager for the project, based on its default partnership -- only accessible to the project owner              |
| `delivery`           | [delivery resource](#delivery-resource)            | Delivery settings for the project                                                                                        |
| `latest_news`        | [news resource](#news)                             | Latest news                                                                                                              |
| `latest_supporter`   | [user resource](#user-resource)                    | Latest supporter                                                                                                         |
| `links`              | array of [links](#link-resource)                   | Links attached to the project, this extra field also adds the `post_campaign_link` [link resource](#link-resource) field |
| `manager`            | [user resource](#user-resource)                    | Project manager -- only accessible to the project owner                                                                  |
| `notes`              | [notes resource](#note-resource)                   | Project notes -- only accessible to staff                                                                                |
| `owner.contact_lang` | string                                             | Preferred language for contacting the project owner -- only accessible to staff                                          |
| `owner.stats`        | [user stats resource](#user-stats-resource)        | Stats of the project owner -- only accessible to staff                                                                   |
| `partnerships`       | array of [partnerships](#partnership-resource)     | Partnerships of the project                                                                                              |
| `proposal`           | [proposal resource](#proposal-resource)            | Proposal from which the project was created -- only accessible to the project owner                                      |
| `proposal.links`     | array of [links](#link-resource)                   | Links attached to the proposal from which the project was created -- only accessible to staff                            |
| `proposal.validator` | [user resource](#user-resource)                    | User who validated the proposal from which the project was created -- only accessible to staff                           |
| `rewards`            | array of [rewards](#reward)                        | Project rewards                                                                                                          |
| `sponsorships`       | array of [sponsorships](#sponsorship-resource)     | Sponsorships of the project                                                                                              |
| `tags`               | array of [tags](#tag-resource)                     | Tags of the project                                                                                                      |
| `user_orders`        | array of [orders](#order-resource)                 | Orders the authenticated user has completed on project                                                                   |
| `user_role`          | string                                             | Relation between the project and the authenticated user, can be null, `fan`, `supporter` and `owner`                     |

The field [`permissions`](#permissions) is present in the
following endpoints:

* [Retrieve a project](#retrieve-a-project)
* [Update a project](#update-a-project)

| Fields | Possible values |
| ------ | --------------- |
| `self` | `update`        |
| `news` | `create`        |

### Payment methods

The following payment methods are supported:

| Payment method |
| -------------- |
| `bankwire`     |
| `check`        |
| `creditcard`   |
| `directdebit`  |
| `ideal`        |
| `maestro`      |
| `paylib`       |
| `paypal`       |
| `saving`       |

### Location resource

| Field     | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| `city`    | string | City                               |
| `country` | string | Two-letter ISO code of the country |

### Note resource

| Field     | Type   | Description           |
| --------- | ------ | --------------------- |
| `billing` | string | Note about billing    |
| `manager` | string | Note about management |

## Retrieve a project

Retrieves the project with the given ID.

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

| Field                  | Type                           | Description                                               |
| ---------------------- | ------------------------------ | --------------------------------------------------------- |
| `description`          | [i18n object](#i18n)           | Main description of the project                           |
| `description_funding`  | [i18n object](#i18n)           | Description of what the funds are for                     |
| `description_yourself` | [i18n object](#i18n)           | Description of the owner of the project                   |
| `name`                 | [i18n object](#i18n)           | Name of the project                                       |
| `post_campaign_link`   | [link payload](#create-a-link) | Post-campaign link                                        |
| `slug`                 | string                         | Slug of the project -- must be unique, max 250 characters |
| `subtitle`             | [i18n object](#i18n)           | Subtitle of the project                                   |
| `tags`                 | array of ints                  | ID of tags related to the project                         |
| `timezone`             | string                         | Timezone of the project                                   |

In addition, the following fields can't be updated after the project has been validated by the moderation team, they can only be updated when the project status is one of `new`, `pending` and `pending-owner`.

| Field         | Type   | Description                                                   |
| ------------- | ------ | ------------------------------------------------------------- |
| `account_id`  | int    | ID of the project owner account                               |
| `country`     | string | Two-letter ISO code of the country                            |
| `currency`    | string | Three-letter ISO code of the currency                         |
| `date_end`    | string | Date at which the funding campaign ends, with RFC 3339 format |
| `goal`        | int    | Goal of the project                                           |
| `lang`        | string | Main language of the project                                  |
| `main_tag_id` | int    | ID of the main tag of the project                             |
| `nb_days`     | string | Duration of the funding campaign in days                      |
| `type`        | string | Project type -- must be `project` or `presale`                |

Finally, the following fields can't be updated by the project owner, they can only be updated by staff users.

| Field                 | Type                             | Description                                                                             |
| --------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| `answer_code`         | string                           | Answer code -- must be one of `accepted`, `need-moderation`, `sent-to-okpal`, `refused` |
| `comments_enabled`    | string                           | Enable comments -- must be one of `everyone`, `supporters`, `disabled`                  |
| `discussion_disabled` | bool                             | Disable discussion                                                                      |
| `manager_id`          | int64                            | Manager ID                                                                              |
| `manager_type`        | string                           | Manager type -- must be one of `specialist`, `success`                                  |
| `notes`               | [notes resource](#note-resource) | Notes                                                                                   |
| `owner_id`            | int64                            | Owner ID                                                                                |
| `quality_score`       | string                           | Quality score -- must be one of `A`, `B`, `C`, `X`                                      |
| `recommendable`       | bool                             | Allow to show this project to other project owners for inspiration                      |
| `status`              | string                           | Project status                                                                          |
| `supporters_disabled` | bool                             | Don't show supporters                                                                   |
| `unread`              | bool                             | Show this project in moderation team pipe                                               |
| `visible`             | bool                             | Index this project in search engines                                                    |

## Submit a project

Submits the project for review to the moderation team. This endpoint is only accessible to the project owner.
The project owner can send a message to the moderation team. This message will be added to the project discussion thread.

The project status must not be `pending`, and the following fields must be set (i18n fields must be set in the project default language):

* `country`
* `currency`
* `description`
* `goal` (if `type` is `project`)
* `main_image`
* `name`
* `nb_product_min` (if `type` is `presale`)
* `owner.avatar`
* `owner.email`
* `owner.location`
* `rewards`
* `slug`
* `subtitle`
* `timezone`
* one of `date_end` anf `nb_days`
* `account.is_completed` must be `true`

{{% http method="post" %}}/v1/projects/:id/submit{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field     | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| `message` | string | Message to the moderation team -- optional |

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

| Field      | Type   | Description                                                               |
| ---------- | ------ | ------------------------------------------------------------------------- |
| `date_end` | string | Date at which the funding campaign ends, with RFC 3339 format -- optional |
| `timezone` | string | Timezone of the project -- optional                                       |

## Unpublish a project

Unpublished the project. This endpoint is only accessible to staff.

This endpoint is typically used when the project owner mistakenly published the project too soon.

{{% http method="post" %}}/v1/projects/:id/unpublish{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Moderate a project

Moderate the project. This endpoint is only accessible to staff.

This endpoint is used for the project moderation.

{{% http method="post" %}}/v1/projects/:id/moderate{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field         | Type   | Description                                                |
| ------------- | ------ | ---------------------------------------------------------- |
| `answer_code` | string | Reference code for the moderation                          |
| `answer_html` | string | Message in HTML used as response in the project discussion |
| `status`      | string | Project status                                             |

## List partner projects

Retrieves all the projects that have a partnership with the partner with the given slug. This endpoint is only accessible to partner users, unless the `status=online` query parameter is present.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/partners/:slug/projects{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Partner slug |

### Query parameters

The list can be filtered with the following query parameters:

| Parameter   | Description                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `is_winner` | Whether the project is a prizewinner. Can be `true` or `false`                                                                           |
| `status`    | Project status. Can be one of `online`, `new`, `pending`, `pending-owner`, `validated`, `refused`, `waiting`, `pending-final-validation` |

## List sponsor projects

Retrieves all the projects sponsored by the sponsor with the given user ID.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/sponsors/:user_id/projects{{% /http %}}

| Parameter  | Description      |
| ---------- | ---------------- |
| `:user_id` | Sponsor user ID  |

## List user projects

Retrieves all the projects related to the user with the given ID.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/users/:id/projects{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Query parameters

| Parameter | Description                                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sort`    | Sort the project list. Can be one of `created_at`, `supported_at`, `followed_at`. Default is `created_at`.                                                   |
| `state`   | Kind of relationship between the user and the projects. Can be one of `online`, `supported`, `followed`, `created`. `created` is only accessible to oneself. |

## Project discussion

Projects have one discussion thread where the project owner and the moderation team can talk to each other. The two following endpoints allow staff users that are not in the recipient list to read and join the project discussion thread.

### Read messages from project discussion thread

`GET /v1/projects/:id/messages` where `:id` is the project ID.

### Join a project discussion thread

`POST /v1/projects/:id/join-thread` where `:id` is the project ID.

## Project likes

Users can like projects to receive notifications. Project owners and backers automatically like a project, and cannot unlike it.

### Like a project

`POST /v1/projects/:id/like` where `:id` is the project ID.

### Unlike a project

`POST /v1/projects/:id/unlike` where `:id` is the project ID.
