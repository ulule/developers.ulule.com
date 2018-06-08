---
title: "Image"
weight: 7
---

# Image

There are three different types of images:

| Type         | Description                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main`       | The main image of a project. It is the main image displayed on the project page. It is also used to preview the project in a list of projects. A project can have only one `main` image per language |
| `background` | The background image of a project. It is only displayed on the project page. It can consist of a background color and/or an image file. A project can have only one `background` image per language  |
| `secondary`  | Secondary images are image files uploaded to Ulule, which can be embedded into HTML fields such as `project.description`                                                                             |

## Image resource

| Field      | Type   | Description                                                                                                                                                                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`    | string | HTML hex color code. This field is only present for images of type `background` that have a color                                                                                                                                                                           |
| `id`       | int    | Unique ID of the image                                                                                                                                                                                                                                                      |
| `lang`     | string | Language of the image                                                                                                                                                                                                                                                       |
| `name`     | string | Filename. This field is not present for images of type `background` without an image file                                                                                                                                                                                   |
| `type`     | string | Type of the image (`main`, `secondary`, `background`)                                                                                                                                                                                                                       |
| `url`      | string | Publicly available URL of the image. This field is only present for images of type `background`                                                                                                                                                                             |
| `value`    | string | Path to the file. This field is not present for images of type `background` without an image file                                                                                                                                                                           |
| `versions` | object | Object whose keys are strings representing the image dimensions (`small`, `medium`, `large`, and `full` for the image in its original size), and whose values are [image version objects](#image-version-object). This field is not present for images of type `background` |

## Create a project image

Creates an image. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/projects/:id/images{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

## Payload

The Content-Type must be `multipart/form-data`.

| Field   | Type   | Description                                                                                                                   |
| ------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `color` | string | HTML hex color code -- only used for images of type `background`                                                              |
| `image` | file   | Image file -- required for images of type `main` and `secondary`, format must be GIF, JPEG or PNG, size must be less than 5MB |
| `lang`  | string | Image language -- required                                                                                                    |
| `type`  | string | Image type (`main`, `secondary`, `background`) -- required                                                                    |

## Update an image

Updates an image. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/images/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Image ID    |

### Payload

The Content-Type must be `multipart/form-data`.

| Field   | Type   | Description                                                               |
| ------- | ------ | ------------------------------------------------------------------------- |
| `color` | string | HTML hex color code -- only used for images of type `background`          |
| `image` | file   | Image file -- format must be GIF, JPEG or PNG, size must be less than 5MB |
| `lang`  | string | Image language                                                            |
| `type`  | string | Image type (`main`, `secondary`, `background`)                            |


## Delete an image

Deletes an image. This endpoint is only accessible to the project owner.

{{% http method="delete" %}}/v1/images/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Image ID    |

## List project images

Retrieves all images that belong to the project with the given ID.

The response is [paginated](#pagination).

{{% http method="get" %}}/v1/projects/:id/images{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |
