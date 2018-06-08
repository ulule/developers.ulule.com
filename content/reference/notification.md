---
title: "Notification"
weight: 4
---

# Notification

By default, users receive notifications when certain events happen.

The list of those notifications can be read via the [list user notifications](#list-user-notifications) endpoint, and updated via the [update user notifications](#update-user-notifications) endpoint.

By default, users also receive notifications when a news is published in one of the projects they are fan of. Those notifications can be read via the [list user projects](#list-user-projects) endpoint, and updated via the [update project notifications](#update-project-notifications) endpoint.

## User notification resource

| Field                         | Type | Description                                             |
| ----------------------------- | ---- | ------------------------------------------------------- |
| `cancelled_support`           | bool | I received a cancellation of a support on my projects   |
| `follow`                      | bool | I'm followed by someone new                             |
| `join`                        | bool | Someone from my connections joined Ulule                |
| `new_badge_following`         | bool | Someone I'm following received a new badge              |
| `new_badge`                   | bool | I received a new badge                                  |
| `new_comment_on_project_news` | bool | I received a new comment on one of my posted news       |
| `new_comment_on_project`      | bool | I received a new comment on my projects                 |
| `new_faq`                     | bool | I received a new question on one of my projects         |
| `new_support`                 | bool | I received a new support on my projects                 |
| `receive_message`             | bool | Someone sent me a private message                       |
| `support`                     | bool | Someone from my connections has supported a new project |

## List user notifications

Retrieves all the notifications for the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="get" %}}/v1/users/:id/notifications{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

## Update user notifications

Updates the notifications for the user with the given ID. This endpoint is only accessible to oneself.

{{% http method="patch" %}}/v1/users/:id/notifications{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

| Field                         | Type |
| ----------------------------- | ---- |
| `cancelled_support`           | bool |
| `follow`                      | bool |
| `join`                        | bool |
| `new_badge_following`         | bool |
| `new_badge`                   | bool |
| `new_comment_on_project_news` | bool |
| `new_comment_on_project`      | bool |
| `new_faq`                     | bool |
| `new_support`                 | bool |
| `receive_message`             | bool |
| `support`                     | bool |

## Update project notifications

Updates the authenticated user notifications for the project with the given ID.

{{% http method="patch" %}}/v1/projects/:id/notifications{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field  | Type |
| ------ | ---- |
| `news` | bool |
