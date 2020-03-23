---
title: "Avatar"
weight: 2
---

# Avatar

The avatar resource represents the avatar belonging to a [user](#user). A user can only have one avatar.

## Avatar resource

| Field      | Type   | Description                                                                                                                                                                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`       | int    | Unique ID of the avatar                                                                                                                                                                                                                                                     |
| `name`     | string | Name of the uploaded image file                                                                                                                                                                                                                                             |
| `value`    | string | Path to the file                                                                                                                                                                                                                                                            |
| `versions` | object | Object whose keys are strings representing the image dimensions (`20x20`, `30x30`, `40x40`, `55x55`, `75x75`, `90x90`, `128x128`, `180x180`, `230x230`, `290x290`, and `full` for the image in its original size), and whose values are image version objects defined below |

### Image version object

|Field|Type|Description|
|---|---|---|
|`height`|int|Image height in pixel, null in case it is the original version of the file|
|`url`|string|Image URL|
|`width`|int|Image width in pixel, null in case it is the original version of the file|

## Create a user avatar

Creates a new avatar for the user with the given ID. This endpoint returns an error if the user already has an avatar. This endpoint is only accessible to oneself.

{{% http method="post" %}}/v1/users/:id/avatars{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | User ID     |

### Payload

The Content-Type must be `multipart/form-data`.

| Field   | Type | Description                                                                         |
| ------- | ---- | ----------------------------------------------------------------------------------- |
| `image` | file | Image file -- required, format must be GIF, JPEG or PNG, size must be less than 5MB |

## Update an avatar

Updates the avatar with the given ID. This endpoint is only accessible to the owner of the avatar.

{{% http method="patch" %}}/v1/avatars/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Avatar ID   |

### Payload

The Content-Type must be `multipart/form-data`.

| Field   | Type | Description                                                               |
| ------- | ---- | ------------------------------------------------------------------------- |
| `image` | file | Image file -- format must be GIF, JPEG or PNG, size must be less than 5MB |

## Delete an avatar

Deletes the avatar with the given ID. This endpoint is only accessible to the owner of the avatar.

{{% http method="delete" %}}/v1/avatars/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Avatar ID   |
