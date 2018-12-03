---
title: "Projects"
weight: 1
---

# Projects

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/search/projects{{% /http %}}

### Query parameters

| Parameter | Type   | Description                                                                                                                                                                     |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `q`       | string | Search keywords and qualifiers                                                                                                                                                  |
| `lang`    | string | Host language, for example it is the `fr` in `fr.ulule.com`. Results that are translated in that language are sorted first. Can be one of the [supported languages](#languages) |
| `limit`   | int    | Page size, default is 16                                                                                                                                                        |
| `offset`  | int    | Pagination offset, default is 0                                                                                                                                                 |

The `q` query parameter may contain any combination of keywords and the following search qualifiers.

| Qualifier   | Type   | Description                                                                                                        |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `tag_id`    | int    | Filter projects by tag                                                                                             |
| `status`    | string | Filter projects based on the goal status, can be one of `currently`, `all`, `success` or `ended`, default is `all` |
| `country`   | string | Filter projects by country                                                                                         |
| `lang`      | string | Filter projects by language                                                                                        |
| `region_id` | int    | Filter projects by region                                                                                          |
| `city_id`   | int    | Filter projects by city                                                                                            |
| `owner_id`  | int    | Filter projects by owner                                                                                           |
| `partner`   | string | Filter projects by partner                                                                                         |
| `sort`      | string | Sort field, can be one of `popular`, `amount`, `ending-soon` or `new`, default is `popular`                        |

### Response

| Field      | Type                                         | Description    |
| ---------- | -------------------------------------------- | -------------- |
| `projects` | [project resource](#search-project-resource) | Search results |

#### Search project resource

| Field              | Type                                   | Description                                                                                          |
| ------------------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `absolute_url`     | string                                 | Link to the project page on the Ulule website                                                        |
| `amount_raised`    | int                                    | Amount raised in project currency                                                                    |
| `country`          | string                                 | Two-letter ISO code of the country                                                                   |
| `currency`         | string                                 | Three-letter ISO code of the currency                                                                |
| `date_end`         | string                                 | Date at which the funding campaign ends, with RFC 3339 format                                        |
| `date_start`       | string                                 | Date at which the funding campaign starts, with RFC 3339 format                                      |
| `finished`         | bool                                   | True if the funding campaign is finished                                                             |
| `goal`             | int                                    | Goal in the project currency if type is `project`, or number of pre-orders if type is `presale`      |
| `id`               | int                                    | Unique ID of the project                                                                             |
| `lang`             | string                                 | Main language of the project                                                                         |
| `main_image`       | [image resource](#image)               | Main image of the project                                                                            |
| `main_tag`         | [tag resource](#category-and-tag)      | Main tag of the project                                                                              |
| `name`             | [i18n object](#i18n)                   | Name of the project                                                                                  |
| `nb_products_sold` | int                                    | Number of products sold                                                                              |
| `owner`            | [user resource](#search-user-resource) | Owner of the project                                                                                 |
| `slug`             | string                                 | Unique slug of the project                                                                           |
| `subtitle`         | [i18n object](#i18n)                   | Subtitle of the project                                                                              |
| `type`             | string                                 | Type of the project (`presale` or `project`)                                                         |
| `user_role`        | string                                 | Relation between the project and the authenticated user, can be null, `fan`, `supporter` and `owner` |

#### Search project user resource

| Field          | Type   | Description                                                                 |
| -------------- | ------ | --------------------------------------------------------------------------- |
| `first_name`   | string | First name of the user                                                      |
| `id`           | int    | Unique ID of the user                                                       |
| `last_name`    | string | Last name of the user                                                       |
| `name`         | string | Concatenation of first name and last name if they exist, username otherwise |
| `screenname`   | string | Screenname                                                                  |
| `username`     | string | Username                                                                    |