---
title: "User"
weight: 1
---

# User

The user resource represents a user registered on the Ulule website, possibly via a partner website.

## User resource

| Field                | Type                       | Description                                                                                                                                                                                                                                                                  |
| -------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `absolute_url`       | string                     | Link to the profile page of the user on the Ulule website                                                                                                                                                                                                                    |
| `avatar`             | [avatar resource](#avatar) | Avatar of the user                                                                                                                                                                                                                                                           |
| `birthday`           | string                     | Birthday of the user, with format YYYY-MM-DD -- only accessible to oneself                                                                                                                                                                                                   |
| `country`            | string                     | Two-letter ISO code of the country where the user lives.                                                                                                                                                                                                                     |
| `date_joined`        | string                     | Date at which the user created an account, with RFC 3339 format                                                                                                                                                                                                              |
| `description`        | [i18n object](#i18n)       | Short description of the user                                                                                                                                                                                                                                                |
| `email`              | string                     | Email of the user -- only accessible to oneself                                                                                                                                                                                                                              |
| `first_name`         | string                     | First name of the user                                                                                                                                                                                                                                                       |
| `has_avatar`         | bool                       | True if user has an avatar. Otherwise a default avatar is assigned to the user                                                                                                                                                                                               |
| `id`                 | int                        | Unique ID of the user                                                                                                                                                                                                                                                        |
| `is_completed`       | bool                       | Deprecated since the [`2018-05-22` version change](#2018-05-22). Must be true for a user to [create an order](#create-an-order). The following fields must be filled for `is_completed` to be true: `birthday`, `country`, `email`, `nationality`, `first_name`, `last_name` |
| `is_staff`           | bool                       | True if user is staff                                                                                                                                                                                                                                                        |
| `lang`               | string                     | Language of the user                                                                                                                                                                                                                                                         |
| `last_login`         | string                     | Date at which the user last logged in, with RFC 3339 format                                                                                                                                                                                                                  |
| `last_name`          | string                     | Last name of the user                                                                                                                                                                                                                                                        |
| `location`           | string                     | Location of the user                                                                                                                                                                                                                                                         |
| `name`               | string                     | Concatenation of first name and last name if they exist, username otherwise                                                                                                                                                                                                  |
| `nationality`        | string                     | Two-letter ISO code of the nationality of the user -- only accessible to oneself                                                                                                                                                                                             |
| `personal_id_number` | string                     | Personal ID number -- only accessible to oneself                                                                                                                                                                                                                             |
| `presentation`       | [i18n object](#i18n)       | Longer presentation of the user                                                                                                                                                                                                                                              |
| `resource_uri`       | string                     | URL of the user resource                                                                                                                                                                                                                                                     |
| `screenname`         | string                     |                                                                                                                                                                                                                                                                              |
| `timezone`           | string                     | Timezone of the user                                                                                                                                                                                                                                                         |
| `username`           | string                     | Username                                                                                                                                                                                                                                                                     |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field                    | Type                                  | Description                                                                                                                                            |
| ------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contact_lang`           | string                                | Preferred language for contacting the user -- only accessible to staff                                                                                 |
| `latest_project_comment` | [comment resource](#comment-resource) | Latest comment of the user for the project with the given ID -- only accessible on the [project supporter list endpoint](#list-all-project-supporters) |
| `latest_project_order`   | [order resource](#order-resource)     | Latest order of the user for the project with the given ID -- only accessible on the [project supporter list endpoint](#list-all-project-supporters)   |
| `newsletters`            | array of strings                      | Slugs of the newsletters the user is subscribed to                                                                                                     |

## Retrieve authenticated user

Retrieves the authenticated user.

{{% http method="get" %}}/v1/me{{% /http %}}

## Retrieve a user

Retrieves the user with the given ID.

{{% http method="get" %}}/v1/users/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

## Create a user

Creates a new user. The created user is a member of the partner with the given slug. This endpoint is only accessible to partner users.

{{% http method="post" %}}/v1/partners/:slug/users{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Partner slug |

### Payload

| Field        | Type   | Description                                                                                                                                                            |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dry_run`    | bool   | If true, fields are checked but the user is not created -- optional                                                                                                    |
| `email`      | string | Email of the user -- required, max 254 characters                                                                                                                      |
| `ip_address` | string | IP address of the user -- optional                                                                                                                                     |
| `lang`       | string | Language of the user -- optional                                                                                                                                       |
| `password1`  | string | Password of the user -- required, max 128 characters, must have a score of at least 1 with the [zxcvbn password strength estimator](https://lowe.github.io/tryzxcvbn/) |
| `username`   | string | Username -- optional, max 80 characters                                                                                                                                |

## Update a user

Updates the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="patch" %}}/v1/users/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field          | Type                 | Description                                                                                                                  |
| -------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `birthday`     | string               | Birthday of the user -- must have YYYY-MM-DD format and year must be greater than 1901                                       |
| `country`      | string               | Country where the user lives -- must be two-letter ISO code                                                                  |
| `contact_lang` | string               | Preferred language for contacting the user -- must be one of the [supported languages](#languages), only accessible to staff |
| `description`  | [i18n object](#i18n) | Short description of the user                                                                                                |
| `email`        | string               | Email of the user                                                                                                            |
| `first_name`   | string               | First name of the user -- max 30 characters                                                                                  |
| `ip_address`   | string               | IP address of the user -- must be ipv4 or ipv6                                                                               |
| `last_name`    | string               | Last name of the user -- max 30 characters                                                                                   |
| `lang`         | string               | Language of the user -- must be one of the [supported languages](#languages)                                                 |
| `location`     | string               | Location of the user -- max 255 characters                                                                                   |
| `nationality`  | string               | Nationality of the user -- must be two-letter ISO code                                                                       |
| `newsletters`  | array of strings     | Slugs of the newsletters the user is subscribed to                                                                           |
| `presentation` | [i18n object](#i18n) | Longer presentation of the user                                                                                              |
| `screenname`   | string               | Screenname of the user -- max 30 characters                                                                                  |
| `username`     | string               | Username -- max 80 characters                                                                                                |

## Delete a user

Deletes the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="delete" %}}/v1/users/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

## List all partner members

Retrieves all the users that has been registered via the partner with the given slug. This endpoint is only accessible to partner users.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/partners/:slug/users{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:slug`   | Partner slug |

## List all project supporters

Retrieves all the users that are supporters of the project with the given ID. If the project is online, this endpoint doesn't require authentication. Otherwise, it is only accessible to the project owner.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/supporters{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Create a discussion thread with a user

Creates a discussion thread between the authenticated user and the user with the given ID. One of the following condition must be fulfilled for a user to have the permission to reach another one:

* One of the users is staff
* One of the users is a partner member and the other one if a partner moderator
* One of the users is a project supporter and the other one is the project owner
* One of the users is a project supporter and the other one is a project editor

{{% http method="post" %}}/v1/users/:id/threads{{% /http %}}

| Parameter | Description  |
| --------- | ------------ |
| `:id`     | User ID      |

### Payload

| Field     | Type   | Description                                                             |
| --------- | ------ | ----------------------------------------------------------------------- |
| `message` | string | Body of the first message in the thread                                 |
| `subject` | string | Subject of the thread -- required, must be between 3 and 255 characters |

## Ban user

Ban the user with the given id. This endpoint is only accessible to staff.

{{% http method="post" %}}/v1/users/:id/ban{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

## Offboard team member

Offboard the user with the given id. This endpoint is only accessible to staff.

{{% http method="post" %}}/v1/users/:id/offboard{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field     | Type | Description                                                |
| --------- | ---- | ---------------------------------------------------------- |
| `user_id` | int  | User ID used to substitute the offboarded user -- optional |

## List all official users

Retrieves all the official users.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/officialusers{{% /http %}}

### Query parameters

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| `country` | string | Country of the official user |
| `lang`    | string | Lang of the official user    |
