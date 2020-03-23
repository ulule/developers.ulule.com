---
title: "Thread"
weight: 1
---

# Thread

## Thread resource

| Field               | Type                             | Description                                                                            |
| ------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| `created_at`        | string                           | Date of the thread creation, with RFC 3339 format                                      |
| `id`                | int                              | Unique ID of the thread                                                                |
| `latest_message`    | [message resource](#message)     | Latest message of the thread                                                           |
| `messages_count`    | int                              | Total count of the messages in thread                                                  |
| `metadata`          | json object                      | Arbitrary object                                                                    |
| `recipients_count`  | int                              | Total count of the thread recipients                                                   |
| `recipients`        | array of [user resources](#user) | Recipients of the thread                                                               |
| `sender_deleted_at` | string                           | Date of the thread deletion, with RFC 3339 format, null if the thread is not deleted |
| `sender_id`         | int                              | Unique ID of the sender                                                                |
| `status`            | string                           | Status of the thread for the authenticated user, can be `unread`, `read` or `deleted`  |
| `subject`           | string                           | Subject of the thread                                                                  |
| `updated_at`        | string                           | Date of the last update of the thread, with RFC 3339 format                            |

## Retrieve thread list

Retrieves all the threads where the authenticated is a recipient, ordered by `updated_at`.

The response is [paginated](#pagination).

{{% http method="get" %}}/threads{{% /http %}}

### Query parameters

| Field    | Description                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| `status` | Thread status -- can be one of `unread`, `read` or `deleted`, default is the combination of `read` and `unread`) |

## Retrieve a thread

Retrieves the thread with the given ID. This endpoint is only accessible to the thread recipients.

{{% http method="get" %}}/threads/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

## Update a thread

Updates the thread with the given ID. This endpoint is only accessible to the thread owner.

{{% http method="patch" %}}/threads/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

### Payload

| Field      | Type        | Description                                                   |
| ---------- | ----------- | ------------------------------------------------------------- |
| `metadata` | json object | Arbitrary object                                              |
| `subject`  | string      | Subject of the thread -- min 3 characters, max 254 characters |

## Read a thread

Marks the thread with the given ID as read. This endpoint is only accessible to the thread recipients.

{{% http method="post" %}}/threads/:id/read{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

## Unread a thread

Marks the thread with the given ID as unread. This endpoint is only accessible to the thread recipients.

{{% http method="post" %}}/threads/:id/unread{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

## Unwatch a thread

Marks the thread with the given ID as deleted. The user won't receive notifications if new messages are sent. This endpoint is only accessible to the thread recipients.

{{% http method="post" %}}/threads/:id/unwatch{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

## Leave a thread

Leaves the thread with the given ID. The user is removed from the thread recipients. This endpoint is only accessible to the thread recipients. The thread sender can't leave a thread.

{{% http method="post" %}}/threads/:id/leave{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |

## Bulk operation

Runs a bulk operation on a list of threads.

This endpoint allows user to perform the same operation on a bulk of threads.

The operation is atomic, i.e. if the operation fails for one thread in the list, it is a no-op for all threads.

{{% http method="post" %}}/threads/bulk{{% /http %}}

### Payload

| Field        | Type          | Description                                                                              |
| ------------ | ------------- | ---------------------------------------------------------------------------------------- |
| `operation`  | string        | Operation to apply on threads -- required, can be `read`, `unread`, `unwatch` or `leave` |
| `thread_ids` | array of ints | IDs of the threads to run the operation on                                               |
