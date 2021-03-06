---
title: "Delivery"
weight: 11
---

# Delivery

Deliveries are options related to reward shippings, pick up points, and fields that may be required from backers during the checkout step. Projects have default delivery options, and rewards inherit delivery options from their parent project. Rewards may then override delivery options.

Note that pick up points may not be overriden, they are always defined for every rewards of a project, never for an individual reward.

## Delivery resource

| Field                    | Type                                                      | Description                                                                                              |
| ------------------------ | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `address_required`       | bool                                                      | Whether backers must specify a shipping address when ordering a reward                                   |
| `date_delivery`          | string                                                    | Estimated date of delivery of rewards, with the YYYY-MM format                                           |
| `force_address_required` | bool                                                      | Whether an address is required for orders without rewards, only present in the project delivery resource |
| `has_shippings`          | bool                                                      | Whether there are shipping costs                                                                         |
| `phone_number_required`  | bool                                                      | Whether backers must specify the phone number in the shipping address when ordering a reward             |
| `pickup_points`          | array of [pickup point resources](#pickup-point-resource) | Pick up points, only present in the project delivery resource                                            |
| `shipping_int`           | int                                                       | International shipping cost                                                                              |
| `shipping_nat`           | int                                                       | National shipping cost                                                                                   |
| `shipping_type`          | string                                                    | Shipping type -- can be one of `none`, `national-only`, `national-and-some-countries`, `worldwide`       |
| `shippings`              | array of [shipping resource](#shipping-resource)          | Per country shippings                                                                                    |

### Shipping resource

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

### Pickup point resource

| Field         | Type                                  | Description                   |
| ------------- | ------------------------------------- | ----------------------------- |
| `address`     | [address resource](#address-resource) | Address                       |
| `description` | [i18n object](#i18n)                  | Description                   |
| `id`          | int                                   | Unique ID of the pickup point |
| `name`        | [i18n object](#i18n)                  | Name                          |
| `raw_address` | [i18n object](#i18n)                  | Raw address                   |

## Update project or reward delivery settings

Updates the delivery settings of the project or the reward with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/projects/:id/delivery{{% /http %}}
{{% http method="patch" %}}/v1/rewards/:id/delivery{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field                    | Type   | Description                                                                                                   |
| ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------- |
| `address_required`       | bool   | Whether backers must specify a shipping address when ordering a reward                                        |
| `date_delivery`          | string | Date at which the delivery is expected, with the YYYY-MM format -- required                                   |
| `force_address_required` | bool   | Whether an address is required for orders without rewards, only valid in the project delivery payload         |
| `phone_number_required`  | bool   | Whether backers must specify the phone number in the shipping address when ordering a reward                  |
| `shipping_int`           | int    | International shipping cost                                                                                   |
| `shipping_nat`           | int    | National shipping cost                                                                                        |
| `shipping_type`          | string | Shipping type -- required, must be one of `none`, `national-only`, `national-and-some-countries`, `worldwide` |

Also, it's possible to create, update, and delete shippings with the following payload fields.

| Field              | Type                                                          | Description                                                                      |
| ------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `create_shippings` | array of [create-shipping payloads](#create-shipping-payload) | Create shippings                                                                 |
| `update_shippings` | array of [update-shipping payloads](#update-shipping-payload) | Update shippings -- the shipping `id` field must be set                          |
| `delete_shippings` | array of ints                                                 | Delete shippings -- the ints in the array must be existing shippings `id` fields |

Similarly, project pickup points may be created, updated, and deleted with the following payload fields:

| Field                  | Type                                                                  | Description                                                                             |
| ---------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `create_pickup_points` | array of [create-pickup-point payloads](#create-pickup-point-payload) | Create pickup points                                                                    |
| `update_pickup_points` | array of [update-pickup_point payloads](#update-pickup-point-payload) | Update pickup points -- the pickup point `id` field must be set                         |
| `delete_pickup_points` | array of ints                                                         | Delete pickup points -- the ints in the array must be existing pickup point `id` fields |

### Create shipping payload

| Field       | Type             | Description                                                                                      |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| `amount`    | float            | Shipping cost -- required, must be between 1 and 999.99                                          |
| `countries` | array of strings | Countries, represented by their two-letter ISO code -- one of `countries` and `zone` must be set |
| `zone`      | string           | [Shipping zone](#shipping-zone) -- one of `countries` and `zone` must be set                     |

### Update shipping payload

| Field       | Type             | Description                                         |
| ----------- | ---------------- | --------------------------------------------------- |
| `amount`    | float            | Shipping cost -- can be between 1 and 999.99        |
| `countries` | array of strings | Countries, represented by their two-letter ISO code |
| `zone`      | string           | [Shipping zone](#shipping-zone)                     |

### Create pickup point payload

| Field         | Type                                  | Description                                  |
| ------------- | ------------------------------------- | -------------------------------------------- |
| `address`     | [address payload](#create-an-address) | Address                                      |
| `description` | [i18n object](#i18n)                  | Description -- max 200 characters            |
| `name`        | [i18n object](#i18n)                  | Name -- required, max 100 characters         |
| `position`    | int                                   | Position -- required, must be greater than 0 |
| `raw_address` | [i18n object](#i18n)                  | Raw address -- max 200 characters            |

### Update pickup point payload

| Field         | Type                                  | Description                        |
| ------------- | ------------------------------------- | ---------------------------------- |
| `address`     | [address payload](#update-an-address) | Address                            |
| `description` | [i18n object](#i18n)                  | Description -- max 200 characters  |
| `id`          | int                                   | Unique ID of the pickup point      |
| `name`        | [i18n object](#i18n)                  | Name -- max 100 characters         |
| `position`    | int                                   | Position -- must be greater than 0 |
| `raw_address` | [i18n object](#i18n)                  | Raw address -- max 200 characters  |
