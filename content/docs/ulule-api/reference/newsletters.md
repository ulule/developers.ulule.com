---
title: "Newsletter"
weight: 5
---

# Newsletter

# Newsletter resource

| Field           | Type                 | Description                                                    |
| --------------- | -------------------- | -------------------------------------------------------------- |
| `is_subscribed` | bool                 | Whether the authenticated user is subscribed to the newsletter |
| `name`          | [i18n object](#i18n) | Name of the tag                                                |
| `slug`          | string               | Unique slug of the newsletter                                  |

## List newsletters

{{% http method="get" %}}/v1/newsletters{{% /http %}}
