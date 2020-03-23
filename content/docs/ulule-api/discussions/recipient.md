---
title: "Recipient"
weight: 2
---

# Recipient

## Recipient resource

A recipient resource is a [user resource](#user).

## List recipients of a thread

Retrieves recipients of the thread with the given ID. This endpoint is only accessible to the thread recipients.

{{% http method="post" %}}/threads/:id/recipients{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Thread ID   |
