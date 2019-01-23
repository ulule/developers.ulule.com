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

For a proposal to go from status `pending` to `new`, the proposal must not be anonymous and the following fields must be completed:

* `name`
* `description`
* `rewards`
* `country`
* `currency`
* `lang`
* `nb_products_min` if the type is `presale`
* `goal` if the type is `project`

## Proposal resource

| Field                   | Type                                   | Description                                                                                                                                                                   |
| ----------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`               | string                                 | Address of the proposal author                                                                                                                                                |
| `answer`                | string                                 | Answer from the moderation team in raw text                                                                                                                                   |
| `answer_html`           | string                                 | Answer from the moderation team in HTML format -- in case `answer_html` is empty, fallback to `answer`                                                                       |
| `category`              | [category resource](#category-and-tag) | Category, null if the proposal has no category                                                                                                                                |
| `category_id`           | int                                    | Unique ID of the category, null if the proposal has no category                                                                                                               |
| `country`               | string                                 | Two-letter ISO code of the country                                                                                                                                            |
| `currency`              | string                                 | Three-letter ISO code of the currency                                                                                                                                         |
| `date_creation`         | string                                 | Date at which the proposal has been created, with RFC 3339 format                                                                                                             |
| `date_start_estimation` | string                                 | Estimation of the date of the beginning of the founding campaign, can be null, `as soon as possible`, `in the month`, `in one to three months` or `in more than three months` |
| `date_update`           | string                                 | Date at which the proposal has been last updated, with RFC 3339 format                                                                                                        |
| `description`           | string                                 | Description of the proposal                                                                                                                                                   |
| `email`                 | string                                 | Email of the proposal user                                                                                                                                                    |
| `first_name`            | string                                 | First name of the proposal user                                                                                                                                               |
| `goal`                  | int                                    | Minimum amount the project must raise to succeed                                                                                                                              |
| `id`                    | int                                    | Unique ID of the proposal                                                                                                                                                     |
| `lang`                  | string                                 | Language of the proposal                                                                                                                                                      |
| `last_name`             | string                                 | Last name of the proposal user                                                                                                                                                |
| `legal_entity_type`     | string                                 | Legal entity of the author, can be null, `personal`, `business` or `association`                                                                                              |
| `manager`               | [user resource](#user)                 | Manager assigned to the proposal, null if the proposal is unassigned                                                                                                          |
| `name`                  | string                                 | Name of the proposal                                                                                                                                                          |
| `nb_products_min`       | int                                    | Minimum number of presales the project must receive to succeed                                                                                                                |
| `partner`               | [partner resource](#partner)           | Partner of the proposal                                                                                                                                                       |
| `phone_number`          | string                                 | Phone of the proposal author                                                                                                                                                  |
| `project`               | [project resource](#project)           | Project created from the proposal, null if the proposal has not been validated                                                                                                |
| `references`            | string                                 | References of the proposal                                                                                                                                                    |
| `resource_uri`          | string                                 | URL of the proposal resource                                                                                                                                                  |
| `rewards`               | string                                 | Description of the rewards of the proposal                                                                                                                                    |
| `status`                | string                                 | Current status of the proposal, can be `pending`, `new`, `valid`, `invalid`, `waiting` or `updated`                                                                           |
| `structure`             | string                                 | Structure of the proposal user                                                                                                                                                |
| `token`                 | string                                 | Automatically generated token that can be used to retrieve an anonymous proposal                                                                                              |
| `type`                  | string                                 | Type of the proposal, can be `presale` or `project`                                                                                                                           |
| `user`                  | [user resource](#user)                 | Author of the proposal, can be null if the proposal is anonymous                                                                                                              |

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

| Field               | Type                             | Description                                                                                                                                                                                               |
| ------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`           | string                           | Address -- optional                                                                                                                                                                                       |
| `birthday`          | string                           | User birthday -- optional, format YYYY-MM-DD                                                                                                                                                              |
| `category_id`       | int                              | Unique ID of the category -- optional                                                                                                                                                                     |
| `city`              | string                           | User city -- optional, max 255 characters                                                                                                                                                                 |
| `country`           | string                           | User country -- required, two-letter ISO code of the country                                                                                                                                              |
| `currency`          | string                           | Currency -- optional, three-letter ISO code of the currency                                                                                                                                               |
| `description`       | string                           | Description -- optional                                                                                                                                                                                   |
| `email`             | string                           | User email -- required for anonymous proposal                                                                                                                                                             |
| `first_name`        | string                           | User first name -- optional, max 30 characters                                                                                                                                                            |
| `goal`              | int                              | Amount the project must raised -- optional                                                                                                                                                                |
| `goal_range`        | [goal range object](#goal-range) | Maximum and/or minimum amount the project owner needs to collect -- optional                                                                                                                              |
| `lang`              | string                           | Language -- optional                                                                                                                                                                                      |
| `last_name`         | string                           | User last name -- optional, max 30 characters                                                                                                                                                             |
| `legal_entity_type` | string                           | User legal entity type -- optional, can be one of `personal`, `business`, `association`                                                                                                                   |
| `links`             | array of strings                 | References -- optional                                                                                                                                                                                    |
| `link_ids`          | array of ints                    | IDs of links related to the project and/or the project owner. The links must have been uploaded via the [create-link](#create-a-link) endpoint and must not be already attached to a proposal -- optional |
| `name`              | string                           | Proposal name -- optional, max 255 characters                                                                                                                                                             |
| `nationality`       | string                           | User nationality -- optional, two-letter ISO code of the nationality                                                                                                                                      |
| `nb_products_min`   | int                              | Minimum number of presales the project must receive  -- optional if type is `presale`                                                                                                                     |
| `phone_number`      | string                           | Phone of the proposal user -- optional, max 15 characters                                                                                                                                                 |
| `rewards`           | string                           | Description of the rewards -- optional                                                                                                                                                                    |
| `rewards_type`      | string                           | Type of rewards -- optional, can be one of `concrete`, `symbolic`, `financial`, `none`, `undefined`                                                                                                       |
| `structure`         | string                           | Structure -- optional, max 150 characters                                                                                                                                                                 |
| `type`              | int                              | Project type -- optional, 1 for `presale`, 2 for `project`                                                                                                                                                |

### Goal range

| Field | Type | Description                                                   |
| ----- | ---- | ------------------------------------------------------------- |
| `min` | int  | Minimum amount the project owner needs to collect -- optional |
| `max` | int  | Maximum amount the project owner needs to collect -- optional |

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

## Staff stuff

The following endpoints are only accessible to staff users.

## List proposals

List all proposals. By default, this endpoint list all proposals with status `new`.

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

Validates the proposal with the given ID. It changes the proposal status to `valid` and creates a new project from the proposal.

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

Refuses the proposal with the given ID. It changes the proposal status to `invalid`.

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

Suspends the proposal with the given ID. It changes the proposal status to `waiting`.

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