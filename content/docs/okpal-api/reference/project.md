---
title: "Project"
weight: 1
---

# Project

The project resource represents a project hosted on Okpal.

## Update a project

Updates the project with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/projects/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field                              | Type                                                                         | Description                                    |
| ----------------------             | ---------------------------------------------------------------------------- | ---------------------------------------------- |
| `title`                            | string                                                                       | The title of the project -- max 255 characters |
| `theme`                            | string                                                                       | The theme of the project -- max 64 characters  |
| `description`                      | string                                                                       | The description of the project                 |
| `end_date`                         | string                                                                       | Time the project end, with RFC 3339 format     |
| `timezone`                         | string                                                                       | Timezone of the project                        |
| `is_permanent`                     | bool                                                                         | True if the project has no end date            |
| `is_private`                       | bool                                                                         | True if the project is private                 |
| `tags`                             | array of string                                                              | Tags of the project                            |
| `goal`                             | integer                                                                      | Goal of the project                            |
| `donation_min`                     | integer                                                                      | Minimum accepted amount for a donation         |
| `comments_enabled`                 | bool                                                                         | Enable the comments                            |
| `donation_max`                     | integer                                                                      | Maximum accepted amount for a donation         |
| `main_media`                       | [media payload](#media-payload)                                              | Main media of the project                      |
| `attachments`                      | array of [media payload](#media-payload)                                     | Attachments of the project                     |
| `slug`                             | string                                                                       | Slug of the project                            |
| `status`                           | string                                                                       | Status of the project                          |
| `country`                          | string                                                                       | Country of the project                         |
| `requires_address`                 | bool                                                                         | Address are required                           |
| `partner`                          | string                                                                       | Slug of the project partner                    |
| `goal_display_type`                | string                                                                       | Type of the project goal                       |
| `thankful_message`                 | string                                                                       | Thankful Message of the project                |
| `custom_fee`                       | int64                                                                        | Project custom fee                             |
| `contributions_tier_configuration` | [contribution tier configuration payload](#contributions-tier-configuration) |                                                |

The following configuration can also be updated:

| Field                              | Type  | Description                                |
| ---------------------------------- | ----- | ------------------------------------------ |
| `anonymous_contributions_disabled` | bool  | Disable the anonymous contribution feature |
| `bankwire_contributions_enabled`   | bool  | Enable the bankwire contribution feature   |
| `contributions_tier_enabled`       | bool  | Enable the tier contribution feature       |
| `offline_contributions_enabled`    | bool  | Enable the offline contribution feature    |
| `subscriptions_enabled`            | bool  | Enable the subscriptions feature           |
| `subscriptions_only_enabled`       | bool  | Enable the subscriptions only feature      |
| `tax_deductible_donations_enabled` | bool  | Enable the tax deductible donation feature |
