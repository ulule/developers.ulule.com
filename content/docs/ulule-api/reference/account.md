---
title: "Account"
weight: 13
---

# Account

The account resource is where project owners declare their legal status and bank details in order to get the funds after their project has been successfully funded.

The typical workflow is the following:

1. [Create an account](#create-an-account).
2. [Update the project](#update-a-project) `account_id`.
3. Let the project owner visit the edit account page at `edit_url` and fill all the required fields.

The web page behind `edit_url` can be customized with the `logo_url` and `return_url` url parameters.

## Account resource

| Field          | Type   | Description                                                                                                                                      |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `birthday`     | string | Birthday of the account owner user, with format YYYY-MM-DD                                                                                       |
| `country`      | string | Two-letter ISO code of the account country                                                                                                       |
| `edit_url`     | string | Link to the edit account page                                                                                                                    |
| `email`        | string | Email of the account owner user                                                                                                                  |
| `entity_name`  | string | Entity name of the account owner                                                                                                                 |
| `first_name`   | string | First name of the account owner                                                                                                                  |
| `id`           | int    | Unique ID of the account                                                                                                                         |
| `is_completed` | bool   | Must be true for a project owner to submit a project. This field is set to true when all required field in the edit account page has been filled |
| `last_name`    | string | Last name of the account user                                                                                                                    |
| `nationality`  | string | Two-letter ISO code of the nationality of the account owner                                                                                      |
| `status`       | string | Status of the account, can be `waiting`, `succeeded`, `failed`, `cancelled`, `processing`                                                        |
| `type`         | string | Legal entity type, can be `business`, `association`, `personal`                                                                                  |
| `user_id`      | int    | Unique ID of the account owner                                                                                                                   |

## Retrieve an account

Retrieves the account with the given ID. This endpoint is only accessible to the account user.

{{% http method="get" %}}/v1/accounts/:id{{% /http %}}

| Parameter | Description |
| --------- | ------------|
| `:id`     | Account ID  |

## Create an account

Creates an account.

{{% http method="post" %}}/v1/accounts{{% /http %}}

### Payload

| Field         | Type   | Description                                                                                                     |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| `birthday`    | string | Birthday of the user -- required, with format YYYY-MM-DD                                                        |
| `country`     | string | Country of the account -- required, two-letter ISO 31661-code                                                   |
| `currency`    | string | Currency of the account -- optional, three-letter ISO code of the currency                                      |
| `email`       | string | Email of the user -- required, max 254 characters                                                               |
| `entity_name` | string | Entity name of the account owner -- required if entity type is `business` or `association`,  max 250 characters |
| `first_name`  | string | First name of the user -- required, must be between 1 and 250 characters                                        |
| `last_name`   | string | Last name of the user -- required, must between 1 and 250 characters                                            |
| `nationality` | string | Nationality of the user -- required, two-letter ISO 31661-code                                                  |
| `type`        | string | Legal entity type -- optional, must be one of `business`, `association`, `personal`, default is `personal`      |
| `user_id`     | int    | Unique ID of the user -- optional, default is the ID of the authenticated user                                  |
