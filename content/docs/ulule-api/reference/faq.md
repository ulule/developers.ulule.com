---
title: "Project FAQ"
weight: 25
---

# Project FAQ

A list of frequently asked questions (FAQ) can be attached to a project.

# Project FAQ resource

| Field             | Type                   | Description                    |
| ----------------- | ---------------------- | ------------------------------ |
| `answer_author`   | [user resource](#user) | User who answered the question |
| `answer`          | [i18n object](#i18n)   | Answer                         |
| `id`              | int                    | Unique ID of the FAQ           |
| `question_author` | [user resource](#user) | User who asked the question    |
| `question`        | [i18n object](#i18n)   | Question                       |

## List project FAQ

List all frequently asked questions for the project with the given id.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/faq{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Create project FAQ

Creates a new FAQ.

{{% http method="post" %}}/v1/projects/:id/faq{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field      | Type                 | Description                                                                         |
| ---------- | -------------------- | ----------------------------------------------------------------------------------- |
| `question` | [i18n object](#i18n) | Question -- required, must contain only one lang and a text with 500 characters max |
