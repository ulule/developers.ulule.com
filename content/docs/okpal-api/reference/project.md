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
| `attachments`                      | array of [media payload](#media-payload)                                     | Attachments of the project                     |
| `comments_enabled`                 | bool                                                                         | Enable the comments                            |
| `contributions_tier_configuration` | [contribution tier configuration payload](#contributions-tier-configuration) |                                                |
| `country`                          | string                                                                       | Country of the project                         |
| `custom_fee`                       | int64                                                                        | Project custom fee                             |
| `description`                      | string                                                                       | The description of the project                 |
| `donation_max`                     | integer                                                                      | Maximum accepted amount for a donation         |
| `donation_min`                     | integer                                                                      | Minimum accepted amount for a donation         |
| `end_date`                         | string                                                                       | Time the project end, with RFC 3339 format     |
| `goal_display_type`                | string                                                                       | Type of the project goal                       |
| `goal`                             | integer                                                                      | Goal of the project                            |
| `is_permanent`                     | bool                                                                         | True if the project has no end date            |
| `is_private`                       | bool                                                                         | True if the project is private                 |
| `main_media`                       | [media payload](#media-payload)                                              | Main media of the project                      |
| `partner`                          | string                                                                       | Slug of the project partner                    |
| `requires_address`                 | bool                                                                         | Address are required                           |
| `slug`                             | string                                                                       | Slug of the project                            |
| `status`                           | string                                                                       | Status of the project                          |
| `tags`                             | array of string                                                              | Tags of the project                            |
| `thankful_message`                 | string                                                                       | Thankful Message of the project                |
| `theme`                            | string                                                                       | The theme of the project -- max 64 characters  |
| `timezone`                         | string                                                                       | Timezone of the project                        |
| `title`                            | string                                                                       | The title of the project -- max 255 characters |

Project owner can insert and delete key/value analytics:

| Field                              | Type                      | Description                                    |
| ---------------------------------- | ------------------------- | ---------------------------------------------- |
| `upsert_analytics`                 | array of analytic payload | Project owner analytics                        |
| `delete_analytics`                 | array of int              | Array of project owner analytics IDs to delete |

with analytic payload:

| Field   | Type   | Description                                                                      |
| ------- | ------ | -------------------------------------------------------------------------------- |
| `type`  | string | Project owner analytic type -- required, can be `twitter`, `facebook`, `google`  |
| `value` | string | Project owner analytic value -- required, max 255 characters                     |

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


### Contribution tier configuration

| Field                 | Type         | Description                                                            |
| --------------------- | ------------ | ---------------------------------------------------------------------- |
| `contribution_levels` | array of int | Levels of contribution for the project -- must have 4 different values |
| `subscription_levels` | array of int | Levels of subscription for the project -- must have 4 different values |


### Media Payload

| Field           | Type   | Description                   |
| --------------- | ------ | ----------------------------- |
| `id`            | string | Unique ID of the media        |
| `name`          | string | Name of the media             |
| `role`          | string | Role of the media             |
| `thumbnail_url` | string | Thumbnail URL of the media    |
| `type`          | string | Type of the media -- required |
| `url`           | string | URL of the media -- required  |
