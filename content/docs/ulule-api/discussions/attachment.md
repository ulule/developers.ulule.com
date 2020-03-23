---
title: "Attachment"
weight: 4
---

# Attachment

## Attachment resource

| Field        | Type   | Description                                                         |
| ------------ | ------ | ------------------------------------------------------------------- |
| `created_at` | string | Date at which the attachment has been created, with RFC 3339 format |
| `file`       | string | URL of the attached file                                            |
| `id`         | int    | Unique ID of the attachment                                         |
| `name`       | string | Name of the attached file                                           |

## Create an attachment

Creates an attachment for the message with the given ID. This endpoint is only accessible to the message sender.

{{% http method="post" %}}/messages/:id/attachments{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Message ID  |

### Payload

| Field  | Type | Description                                                                                                                              |
| ------ | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `file` | file | File of the attachment -- required, format must be one of `jpg`, `png`, `gif`, `pdf`, `xlsx`, `xls`, `doc`, `docx`, `zip`, `ppt`, `pptx` |

## Delete an attachment

Deletes the attachment with the given ID. This endpoint is only accessible to the sender of the message associated with the attachment.

{{% http method="delete" %}}/attachments/:id{{% /http %}}

| Parameter | Description    |
| --------- | -------------- |
| `:id`     | Attachement ID |
