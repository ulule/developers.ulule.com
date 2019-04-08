---
title: "Proposal"
weight: 19
---

# Proposal

To launch a project on the Ulule platform, users must first go through the proposal process.

The proposal `status` can have the following values:

| Status    | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `pending` | The proposal is pending for more information from the user                     |
| `new`     | The proposal is ready to be evaluated by the moderation team                   |
| `valid`   | The moderation team has accepted the proposal                                  |
| `invalid` | The moderation team has refused the proposal                                   |
| `waiting` | The moderation team has suspended the proposal, it must be updated by the user |
| `updated` | The user has updated the proposal                                              |

Only proposals with status `new` are inspected by the moderation team. For a proposal status to be `new`, the proposal must not be anonymous and the following fields must be filled:

* `description`
* `rewards` or `rewards_type`
* `country`
* `currency`
* `lang`
* `nb_products_min` if the type is `presale` or `goal` if the type is `project` or `goal_range`

## Proposal resource

| Field                   | Type                                     | Description                                                                                                                                                                    |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `address`               | string                                   | Address of the proposal user                                                                                                                                                   |
| `answer`                | string                                   | Answer from the moderation team in raw text                                                                                                                                    |
| `answer_html`           | string                                   | Answer from the moderation team in HTML format -- if `answer_html` is empty, fallback to `answer`                                                                              |
| `category`              | [category resource](#category-and-tag)   | Category                                                                                                                                                                       |
| `category_id`           | int                                      | Unique ID of the category                                                                                                                                                      |
| `city`                  | string                                   | City                                                                                                                                                                           |
| `country`               | string                                   | Two-letter ISO code of the country                                                                                                                                             |
| `currency`              | string                                   | Three-letter ISO code of the currency                                                                                                                                          |
| `date_creation`         | string                                   | Date at which the proposal has been created, with RFC 3339 format                                                                                                              |
| `date_start_estimation` | string                                   | Estimation of the date of the beginning of the founding campaign -- can be one of `as soon as possible`, `in the month`, `in one to three months`, `in more than three months` |
| `date_update`           | string                                   | Date at which the proposal has been last updated, with RFC 3339 format                                                                                                         |
| `description`           | string                                   | Description of the proposal                                                                                                                                                    |
| `email`                 | string                                   | Email of the proposal user                                                                                                                                                     |
| `first_name`            | string                                   | First name of the proposal user                                                                                                                                                |
| `goal`                  | int                                      | Minimum amount the project must raise to succeed                                                                                                                               |
| `goal_range`            | [goal range resource](#goal-range)       | Maximum and/or minimum amount the project owner needs to collect                                                                                                               |
| `id`                    | int                                      | Unique ID of the proposal                                                                                                                                                      |
| `lang`                  | string                                   | Language of the proposal                                                                                                                                                       |
| `last_name`             | string                                   | Last name of the proposal user                                                                                                                                                 |
| `legal_entity_type`     | string                                   | Legal entity of the proposal user -- can be one of `personal`, `business`, `association`                                                                                       |
| `links`                 | array of [links](#link-resource)         | Links attached to the proposal -- only visible to staff and if the `links` [extra_field](#extra-fields) is present                                                             |
| `manager`               | [user resource](#user)                   | Manager assigned to the proposal -- only visible to staff                                                                                                                      |
| `name`                  | string                                   | Name of the proposal                                                                                                                                                           |
| `nb_products_min`       | int                                      | Minimum number of presales the project must receive to succeed                                                                                                                 |
| `partner`               | [partner resource](#partner)             | Partner of the proposal                                                                                                                                                        |
| `phone_number`          | string                                   | Phone of the proposal user                                                                                                                                                     |
| `project`               | [project resource](#project)             | Project created from the proposal                                                                                                                                              |
| `references`            | string                                   | References of the proposal                                                                                                                                                     |
| `resource_uri`          | string                                   | URL of the proposal resource                                                                                                                                                   |
| `rewards`               | string                                   | Description of the rewards of the proposal                                                                                                                                     |
| `rewards_type`          | string                                   | Rewards type of the proposal -- can be one of `concrete`, `symbolic`, `financial`, `none`, `undefined`                                                                         |
| `score`                 | int                                      | Score of the proposal -- only visible to staff                                                                                                                                 |
| `score_entries`         | [score entries resource](#score-entries) | Score entries of the proposal -- only visible to staff                                                                                                                         |
| `status`                | string                                   | Current status of the proposal -- can be one of `pending`, `new`, `valid`, `invalid`, `waiting`, `updated`                                                                     |
| `structure`             | string                                   | Structure of the proposal user                                                                                                                                                 |
| `token`                 | string                                   | Automatically generated token that can be used to retrieve an anonymous proposal                                                                                               |
| `type`                  | string                                   | Type of the proposal, can be `presale` or `project`                                                                                                                            |
| `user`                  | [user resource](#user)                   | User who created the proposal                                                                                                                                                  |

### Goal range

| Field | Type | Description                                                   |
| ----- | ---- | ------------------------------------------------------------- |
| `min` | int  | Minimum amount the project owner needs to collect -- optional |
| `max` | int  | Maximum amount the project owner needs to collect -- optional |

### Score entries

| Field               | Type | Description                             |
| ------------------- | ---- | --------------------------------------- |
| `description`       | int  | Score of the proposal description       |
| `goal_range`        | int  | Score of the proposal goal range        |
| `legal_entity_type` | int  | Score of the proposal legal entity type |
| `links`             | int  | Score of the proposal links             |
| `rewards_type`      | int  | Score of the proposal rewards type      |
| `user`              | int  | Score of the proposal user              |

## Retrieve a proposal

Retrieves the proposal with the given ID or token. This endpoint is only accessible to the proposal user if the path parameter is the proposal ID, and it is anonymously accessible if the path parameter is the proposal token.

{{% http method="get" %}}/v1/proposals/(:id){{% /http %}}

{{% http method="get" %}}/v1/proposals/(:token){{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Proposal ID    |
| `:token`  | Proposal token |

## Create a proposal

Creates a proposal. The `POST /proposals` endpoint is anonymously accessible. In case a user is authenticated, he or she automatically owns the created proposal. The `POST /users/:id/proposals` is only accessible to the user with the given ID, who automatically owns the created proposal.

{{% http method="post" %}}/v1/proposals{{% /http %}}
{{% http method="post" %}}/v1/users/:id/proposals{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field               | Type                              | Description                                                                                                                                                                                               |
| ------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`           | string                            | Address -- optional                                                                                                                                                                                       |
| `birthday`          | string                            | User birthday -- optional, format YYYY-MM-DD                                                                                                                                                              |
| `category_id`       | int                               | Unique ID of the category -- optional                                                                                                                                                                     |
| `city`              | string                            | City -- optional, max 255 characters                                                                                                                                                                      |
| `country`           | string                            | Country -- required, two-letter ISO code of the country                                                                                                                                                   |
| `currency`          | string                            | Currency -- optional, three-letter ISO code of the currency                                                                                                                                               |
| `description`       | string                            | Description -- optional                                                                                                                                                                                   |
| `email`             | string                            | User email -- required for anonymous proposal                                                                                                                                                             |
| `first_name`        | string                            | User first name -- optional, max 30 characters                                                                                                                                                            |
| `goal`              | int                               | Amount the project must raised -- optional                                                                                                                                                                |
| `goal_range`        | [goal range payload](#goal-range) | Maximum and/or minimum amount the project owner needs to collect -- optional                                                                                                                              |
| `lang`              | string                            | Language -- optional                                                                                                                                                                                      |
| `last_name`         | string                            | User last name -- optional, max 30 characters                                                                                                                                                             |
| `legal_entity_type` | string                            | User legal entity type -- optional, can be one of `personal`, `business`, `association`                                                                                                                   |
| `links`             | array of strings                  | References -- optional                                                                                                                                                                                    |
| `link_ids`          | array of ints                     | IDs of links related to the project and/or the project owner. The links must have been uploaded via the [create-link](#create-a-link) endpoint and must not be already attached to a proposal -- optional |
| `name`              | string                            | Proposal name -- optional, max 255 characters                                                                                                                                                             |
| `nationality`       | string                            | User nationality -- optional, two-letter ISO code of the nationality                                                                                                                                      |
| `nb_products_min`   | int                               | Minimum number of presales the project must receive  -- optional if type is `presale`                                                                                                                     |
| `phone_number`      | string                            | Phone of the proposal user -- optional, max 15 characters                                                                                                                                                 |
| `rewards`           | string                            | Description of the rewards -- optional                                                                                                                                                                    |
| `rewards_type`      | string                            | Type of rewards -- optional, can be one of `concrete`, `symbolic`, `financial`, `none`, `undefined`                                                                                                       |
| `structure`         | string                            | Structure -- optional, max 150 characters                                                                                                                                                                 |
| `type`              | int                               | Project type -- optional, 1 for `presale`, 2 for `project`                                                                                                                                                |

## Update proposal

Updates the proposal with the given ID or token. This endpoint is only accessible to the proposal user if the path parameter is the proposal ID, and it is anonymously accessible if the path parameter is the proposal token.

{{% http method="patch" %}}/proposals/:id{{% /http %}}
{{% http method="patch" %}}/proposals/:token{{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Proposal ID    |
| `:token`  | Proposal token |

### Payload

| Field             | Type             | Description                                                |
| ----------------- | ---------------- | ---------------------------------------------------------- |
| `address`         | string           | Address                                                    |
| `birthday`        | string           | User birthday -- format YYYY-MM-DD                         |
| `category_id`     | int              | Unique ID of the category                                  |
| `country`         | string           | User country -- two-letter ISO code of the country         |
| `currency`        | string           | Currency -- three-letter ISO code of the currency          |
| `description`     | string           | Description                                                |
| `email`           | string           | User email                                                 |
| `first_name`      | string           | User first name -- max 30 characters                       |
| `goal`            | int              | Amount the project must raised                             |
| `lang`            | string           | Language                                                   |
| `last_name`       | string           | User last name -- max 30 characters                        |
| `links`           | array of strings | References                                                 |
| `name`            | string           | Proposal name -- max 255 characters                        |
| `nationality`     | string           | User nationality -- two-letter ISO code of the nationality |
| `nb_products_min` | int              | Minimum number of presales the project must receive        |
| `phone_number`    | string           | Phone of the proposal user                                 |
| `rewards`         | string           | Description of the rewards                                 |
| `structure`       | string           | Structure -- max 150 characters                            |
| `type`            | int              | Project type -- 1 for `presale`, 2 for `project`           |

## List user proposals

List all the proposals of the user with the given ID. This endpoint is only accessible to oneself.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/users/:id/proposals{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Query parameters

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| `status`  | Status, must be one of `new`, `valid` or`invalid` |

## List partner proposals

List all the proposals of the partner with the given slug. This endpoint is only accessible to staff.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/partners/:slug/proposals{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Partner slug |

### Query parameters

| Parameter | Description                                       |
| --------- | ------------------------------------------------- |
| `status`  | Status, must be one of `new`, `valid` or`invalid` |

## List proposal references

List the references of the proposal with the given ID. This endpoint is only accessible to the proposal user.

{{% http method="get" %}}/v1/proposals/:id/links{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Proposal ID |

### Resource

| Field | Type   | Description                |
| ----- | ------ | -------------------------- |
| `id`  | int    | Unique ID of the reference |
| `url` | string | URL of the reference       |

## List proposals

List all proposals. By default, this endpoint list all proposals with status `new`. This endpoint is only accessible to staff.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/proposals{{% /http %}}

### Query parameters

| Parameter    | Description                                                                         |
| ------------ | ----------------------------------------------------------------------------------- |
| `country`    | Country                                                                             |
| `lang`       | Lang                                                                                |
| `status`     | Status, must be one of `new`, `valid`, `invalid`, `pending`, `updated` or `waiting` |
| `partner_id` | Partner ID                                                                          |

## Validate Proposal

Validates the proposal with the given ID. It changes the proposal status to `valid` and creates a new project from the proposal. This endpoint is only accessible to staff.

{{% http method="post" %}}/v1/proposals/:id/validate{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Proposal ID |

### Payload

One of the `answer` and `answer_html` fields must be present in the payload.

| Field         | Type   | Description                                    |
| ------------- | ------ | ---------------------------------------------- |
| `answer`      | string | Answer from the moderation team in raw text    |
| `answer_html` | string | Answer from the moderation team in HTML format |

## Refuse Proposal

Refuses the proposal with the given ID. It changes the proposal status to `invalid`. This endpoint is only accessible to staff.

{{% http method="post" %}}/v1/proposals/:id/refuse{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Proposal ID |

### Payload

One of the `answer` and `answer_html` fields must be present in the payload.

| Field         | Type   | Description                                    |
| ------------- | ------ | ---------------------------------------------- |
| `answer`      | string | Answer from the moderation team in raw text    |
| `answer_html` | string | Answer from the moderation team in HTML format |

## Suspend Proposal

Suspends the proposal with the given ID. It changes the proposal status to `waiting`. This endpoint is only accessible to staff.

{{% http method="post" %}}/v1/proposals/:id/suspend{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Proposal ID |

### Payload

One of the `answer` and `answer_html` fields must be present in the payload.

| Field         | Type   | Description                                    |
| ------------- | ------ | ---------------------------------------------- |
| `answer`      | string | Answer from the moderation team in raw text    |
| `answer_html` | string | Answer from the moderation team in HTML format |
