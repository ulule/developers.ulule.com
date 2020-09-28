---
title: "Event"
weight: 16
---

# Event

Various events related to the same project can be fetched together.

## Event types

| Type             | Description                                    |
| ---------------- | ---------------------------------------------- |
| `first_order`    | The first order of a project has been created. |
| `news`           | A news has been published.                     |
| `percent_raised` | A project has reached X00% of its goal.        |
| `project_end`    | A project has ended.                           |
| `project_start`  | A project has started.                         |
| `sponsorship`    | A sponsorship has been created.                |

## Event resource

| Field  | Type            | Description                                                                 |
| ------ | --------------- | --------------------------------------------------------------------------- |
| `data` | depends on type | Event data                                                                  |
| `time` | string          | Date at which the event occurred, with RFC 3339 format                      |
| `type` | string          | Type of the event, must be one of the [available event types](#event-types) |

## List project events

Retrieves all the events of a project.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/events{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
