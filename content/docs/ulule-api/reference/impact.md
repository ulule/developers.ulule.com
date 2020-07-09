---
title: "Impact"
weight: 12
---

# Impact

Project owners may set information about the impact of their project. In particular, project owners may set information about how their project addresses Sustainable Development Goals (SDGs) as defined by the United Nations. See https://sustainabledevelopment.un.org/ for more information.

## Impact resource

| Field            | Type                                                    | Description                       |
| ---------------- | ------------------------------------------------------- | --------------------------------- |
| `certifications` | [i18n object](#i18n)                                    | Project labels and certifications |
| `challenges`     | [i18n object](#i18n)                                    | Project challenges and risks      |
| `impact`         | [i18n object](#i18n)                                    | Project impact                    |
| `sdgs`           | array of [project SDG resources](#project-sdg-resource) | Project SDGs                      |

### Project SDG resource

| Field         | Type                          | Description                       |
| ------------- | ----------------------------- | --------------------------------- |
| `description` | [i18n object](#i18n)          | How the project addresses the SDG |
| `id`          | int                           | Unique ID of the project SDG      |
| `sdg`         | [SDG resource](#sdg-resource) | SDG                               |

### SDG resource

| Field         | Type                                                            | Description                                                            |
| ------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `code`        | string                                                          | Code of the SDG                                                        |
| `description` | [i18n object](#i18n)                                            | Description of the SDG                                                 |
| `logo`        | [i18n object](#i18n) where values are [image resources](#image) | Logo image of the SDG                                                  |
| `title`       | [i18n object](#i18n)                                            | Title of the SDG, only shown for top level SDGs                        |
| `targets`     | [array of SDG resources](#sdg-resource)                         | Targets of the SDG, only shown in the [list SDGs endpoint](#list-sdgs) |

## List SDGs

Retrieves all SDGs.

{{% http method="get" %}}/v1/sdgs{{% /http %}}

## Retrieve project impact

Retrieves the impact of the project with the given ID.

{{% http method="get" %}}/v1/projects/:id/impact{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Update project impact

Updates the impact of the project. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/projects/:id/impact{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field            | Type                 | Description                                             |
| ---------------- | -------------------- | ------------------------------------------------------- |
| `certifications` | [i18n object](#i18n) | Project labels and certifications -- max 500 chars      |
| `challenges`     | [i18n object](#i18n) | Project challenges and risks -- required, max 500 chars |
| `impact`         | [i18n object](#i18n) | Project impact -- required, max 500 chars               |

Also, it's possible to create, update, and delete project SDGs with the following payload fields.

| Field         | Type                                                                | Description                                                                            |
| ------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `create_sdgs` | array of [create-project-sdg payloads](#create-project-sdg-payload) | Create project SDG                                                                     |
| `update_sdgs` | array of [update-project-sdg payloads](#update-project-sdg-payload) | Update project SDGs -- the project SDG `id` field must be set                          |
| `delete_sdgs` | array of ints                                                       | Delete project SDGs -- the ints in the array must be existing project SDGs `id` fields |

### Create project SDG payload

| Field         | Type                 | Description                       |
| ------------- | -------------------- | --------------------------------- |
| `description` | [i18n object](#i18n) | How the project addresses the SDG |
| `sdg_code`    | string               | Code of the SDG                   |

### Update project SDG payload

| Field         | Type                 | Description                       |
| ------------- | -------------------- | --------------------------------- |
| `description` | [i18n object](#i18n) | How the project addresses the SDG |
| `id`          | int                  | Unique ID of the project SDG      |
