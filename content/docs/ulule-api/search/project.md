---
title: "Search projects"
weight: 1
---

# Search projects

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/search/projects{{% /http %}}

### Query parameters

| Parameter | Type   | Description                                                                                                                                                                     |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `q`       | string | Search keywords and qualifiers                                                                                                                                                  |
| `lang`    | string | Host language, for example it is the `fr` in `fr.ulule.com`. Results that are translated in that language are sorted first. Can be one of the [supported languages](#languages) |
| `limit`   | int    | Page size, default is 16                                                                                                                                                        |
| `offset`  | int    | Pagination offset, default is 0                                                                                                                                                 |

The `q` query parameter may contain any combination of terms and of the following search qualifiers.

| Qualifier       | Type             | Description                                                                                                                                  |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `channel_ids`   | array of ints    | Filter projects by channel                                                                                                                   |
| `tag_id`        | int              | Filter projects by tag                                                                                                                       |
| `status`        | string           | Filter projects based on the goal status -- must be one of `currently`, `all`, `success` or `ended`, default is `all`                        |
| `country`       | string           | Filter projects by country                                                                                                                   |
| `lang`          | string           | Filter projects by language                                                                                                                  |
| `region_id`     | int              | Filter projects by region                                                                                                                    |
| `city_id`       | int              | Filter projects by city                                                                                                                      |
| `owner_id`      | int              | Filter projects by owner                                                                                                                     |
| `partners`      | array of strings | Filter projects by partner -- the qualifier may be suffixed with `__not`, which reverses the filter                                          |
| `quality_score` | array of strings | Filter projects by quality score -- must be one of `A`, `B`, `C`, `X`, the qualifier may be suffixed with `__not`, which reverses the filter |
| `sort`          | string           | Sort field -- must be one of `popular`, `amount`, `ending-soon`, `position` or `new`, default is `popular`                                   |

### Response

| Field      | Type                                         | Description    |
| ---------- | -------------------------------------------- | -------------- |
| `projects` | [project resource](#search-project-resource) | Search results |

#### Search project resource

| Field              | Type                 | Description                                                                                     |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------- |
| `absolute_url`     | string               | Link to the project page on the Ulule website                                                   |
| `amount_raised`    | int                  | Amount raised in project currency                                                               |
| `country`          | string               | Two-letter ISO code of the country                                                              |
| `currency`         | string               | Three-letter ISO code of the currency                                                           |
| `date_end`         | string               | Date at which the funding campaign ends, with RFC 3339 format                                   |
| `date_start`       | string               | Date at which the funding campaign starts, with RFC 3339 format                                 |
| `finished`         | bool                 | True if the funding campaign is finished                                                        |
| `goal`             | int                  | Goal in the project currency if type is `project`, or number of pre-orders if type is `presale` |
| `id`               | int                  | Unique ID of the project                                                                        |
| `lang`             | string               | Main language of the project                                                                    |
| `name`             | [i18n object](#i18n) | Name of the project                                                                             |
| `nb_products_sold` | int                  | Number of products sold                                                                         |
| `slug`             | string               | Unique slug of the project                                                                      |
| `subtitle`         | [i18n object](#i18n) | Subtitle of the project                                                                         |
| `type`             | string               | Type of the project (`presale` or `project`)                                                    |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field                    | Type                                                            | Description                                                                                                                              |
| ------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregations`           | object                                                          | Object whose fields are different project counts -- only accessible to staff                                                             |
| `aggregations.countries` | object                                                          | Object whose fields are project count per country                                                                                        |
| `answer_code`            | string                                                          | Answer from moderation team -- only accessible to staff                                                                                  |
| `main_image`             | [i18n object](#i18n) where values are [image resources](#image) | Main image of the project                                                                                                                |
| `main_tag`               | [tag resource](#category-and-tag)                               | Main tag of the project                                                                                                                  |
| `manager`                | [user resource](#user-resource)                                 | Manager of the project -- only accessible to staff                                                                                       |
| `moderator`              | [user resource](#user-resource)                                 | User who moderated the project -- only accessible to staff                                                                               |
| `owner`                  | [user resource](#user-resource)                                 | Owner of the project                                                                                                                     |
| `owner.email`            | string                                                          | Email of the project owner -- only accessible to staff                                                                                   |
| `owner.stats`            | [user stats resource](#user-stats-resource)                     | Stats of the project owner -- only accessible to staff                                                                                   |
| `proposal`               | [proposal resource](#proposal-resource)                         | Proposal from which the project was created -- only accessible to staff                                                                  |
| `proposal.links`         | array of [links](#link-resource)                                | Links attached to the proposal -- only accessible to staff                                                                               |
| `proposal.partner`       | [partner resource](#partner-resource)                           | Partner of the proposal -- only accessible to staff                                                                                      |
| `quality_score`          | string                                                          | Quality score of the project -- only accessible to staff                                                                                 |
| `user_role`              | string                                                          | Relation between the project and the authenticated user, can be null, `fan`, `supporter` and `owner` -- the request must be authentified |
