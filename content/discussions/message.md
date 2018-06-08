---
title: "Message"
weight: 3
---

# Message

The message status field can be either `draft` or `sent`. A draft message is only visible to its sender.

In case a user needs to add attachments to a message, the typical workflow is to first create a draft message, then create the attachments, and eventually send the message.

## Message resource

| Field               | Type                                       | Description                                                                               |
| ------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `attachments`       | [list of attachment resource](#attachment) | Attachments of the message                                                                |
| `body`              | string                                     | Body of the message in raw text and without HTML markup                                   |
| `id`                | int                                        | Unique ID of the message                                                                  |
| `sender_deleted_at` | string                                     | Date of the message deletion, with RFC 3339 format, null if the message is not deleted  |
| `sender`            | [user resource](#user)                     | Sender of the message                                                                     |
| `sent_at`           | string                                     | Date at which the message has been sent, with RFC 3339 format                             |
| `status`            | string                                     | Status of the message, can be `draft` or `sent`                                           |
| `thread_id`         | int                                        | Unique ID of the message thread                                                           |
| `thread`            | [thread resource](#thread)                 | Thread of the message, only present in the [message-detail endpoint](#retrieve-a-message) |

## Create a message

Creates a message for the thread with the given ID. This endpoint is only accessible to the thread recipients.

{{% http method="post" %}}/threads/:id/messages{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

### Payload

| Field    | Type   | Description                                                                    |
| -------- | ------ | ------------------------------------------------------------------------------ |
| `body`   | string | Body of the message -- required                                                |
| `status` | string | Status of the message -- optional, can be `sent` or `draft`, default is `sent` |

## Update a message

Updates the message with the given ID. This endpoint is only accessible to the message sender.

{{% http method="patch" %}}/messages/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Message ID  |

### Payload

| Field  | Type   | Description                     |
| ------ | ------ | ------------------------------- |
| `body` | string | Body of the message -- required |

## Send a message

Sends the message with the given ID. This endpoint is only accessible to the message sender.

The message status must be `draft`.

{{% http method="post" %}}/messages/:id/send{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Message ID  |

## List messages of a thread

Retrieves all the messages of the thread with the given ID, ordered by `sent_at`. This endpoint is only accessible to the thread recipients.

The response is [paginated](#pagination).

{{% http method="get" %}}/threads/:id/messages{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |
