---
title: "Newsletter"
weight: 5
---

# Newsletter

# Newsletter resource

| Field           | Type                 | Description                                                    |
| --------------- | -------------------- | -------------------------------------------------------------- |
| `slug`          | string               | Unique slug of the newsletter                                  |
| `name`          | [i18n object](#i18n) | Name of the tag                                                |
| `is_subscribed` | bool                 | Whether the authenticated user is subscribed to the newsletter |

## List newsletters

{{% http method="get" %}}/v1/newsletters{{% /http %}}
