---
title: "Category and Tag"
weight: 7
---

# Category and Tag

There are two kinds of tag. The main ones are categories and can be used as a project main tag. The secondary ones are subtags, they always belong to a category and can be used as project tags.

## Tag resource

| Field          | Type                 | Description                                                           |
| -------------- | -------------------- | --------------------------------------------------------------------- |
| `absolute_url` | string               | Link to the category page on the Ulule website                        |
| `category`     | Tag resource         | Parent category, only present in the [list-tags endpoint](#list-tags) |
| `id`           | int                  | Unique ID of the tag                                                  |
| `name`         | [i18n object](#i18n) | Name of the tag                                                       |
| `position`     | int                  | Position of the tag                                                   |
| `slug`         | string               | Unique slug of the tag                                                |

The following fields are [extra_fields](#extra-fields) and must be explicitly specified in the request:

| Field              | Type                                  | Description      |
| ------------------ | ------------------------------------- | ---------------- |
| `featured_project` | [project resource](#project-resource) | Featured project |

## Retrieve a category

Retrieves the category with the given slug.

{{% http method="get" %}}/v1/categories/:slug{{% /http %}}

| Parameter | Description   |
| --------- | ------------- |
| `:slug`   | Category slug |

## List categories

Retrieves all categories.

{{% http method="get" %}}/v1/categories{{% /http %}}

## List tags

Retrieves all tags (categories and subtags).

{{% http method="get" %}}/v1/tags{{% /http %}}

## List category subtags

Retrieves all the subtags that belong to the category with the given ID.

{{% http method="get" %}}/v1/categories/:id/tags{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Category ID  |

## List project tags

Retrieves all the tags of the project with the given ID. This endpoint is only accessible if the project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/projects/:id/tags{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
