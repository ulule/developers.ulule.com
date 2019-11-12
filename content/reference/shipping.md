---
title: "Shipping"
weight: 11
---

# Shipping

## Shipping resource

| Field       | Type             | Description                                                                                                                                          |
| ----------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | float            | Shipping cost                                                                                                                                        |
| `countries` | array of strings | Array of countries, represented by their two-letter ISO code. If `zone` is not empty, `countries` is automatically filled with countries from `zone` |
| `id`        | int              | Unique ID of the shipping                                                                                                                            |
| `zone`      | string           | [Shipping zone](#shipping-zones)                                                                                                                     |

### Shipping zones

The following shipping zones are supported.

| Zone             | Country codes                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `overseas-fr`    | `BL`, `GF`, `GP`, `MF`, `MQ`, `NC`, `PF`, `PM`, `RE`, `WF`, `YT`                                                                                                       |
| `european-union` | `AT`, `BE`, `BG`, `CY`, `CZ`, `DE`, `DK`, `EE`, `ES`, `FI`, `FR`, `GB`, `GR`, `HR`, `HU`, `IE`, `IT`, `LT`, `LU`, `LV`, `MT`, `NL`, `PL`, `PT`, `RO`, `SE`, `SI`, `SK` |
| `europe`         | `european-union` + `AD`, `AL`, `AM`, `BA`, `BY`, `CH`, `IS`, `KZ`, `LI`, `MC`, `MD`, `ME`, `MK`, `NO`, `RS`, `SM`, `UA`, `VA`                                          |

## Create a reward shipping

Creates a new shipping for the reward with the given ID. This endpoint is only accessible to the project owner.

{{% http method="post" %}}/v1/rewards/:id/shippings{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |

### Payload

| Field       | Type             | Description                                                                                      |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| `amount`    | float            | Shipping cost -- required, must be between 1 and 999.99                                          |
| `countries` | array of strings | Countries, represented by their two-letter ISO code -- one of `countries` and `zone` must be set |
| `zone`      | string           | [Shipping zone](#shipping-zone) -- one of `countries` and `zone` must be set                     |

## Update a shipping

Updates the shipping with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/shippings/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Shipping ID |

### Payload

| Field       | Type             | Description                                         |
| ----------- | ---------------- | --------------------------------------------------- |
| `amount`    | float            | Shipping cost -- can be between 1 and 999.99        |
| `countries` | array of strings | Countries, represented by their two-letter ISO code |
| `zone`      | string           | [Shipping zone](#shipping-zone)                     |

## Delete a shipping

Deletes the shipping with the given ID. This endpoint is only accessible to the project owner.

{{% http method="delete" %}}/v1/shippings/:id{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Shipping ID |

## List reward shippings

Retrieves all the shippings that belong to the reward with the given ID. This endpoint is only accessible if the related project status is `online`, or if the authenticated user is the project owner.

{{% http method="get" %}}/v1/rewards/:id/shippings{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Reward ID   |
