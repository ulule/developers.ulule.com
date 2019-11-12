---
title: "Delivery"
weight: 23
---

# Delivery

# Delivery resource

| Field                   | Type                                             | Description                                                                                        |
| ----------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `address_required`      | bool                                             | Whether backers must specify a shipping address when ordering a reward                             |
| `date_delivery`         | string                                           | Estimated date of delivery of rewards, with the YYYY-MM-DD format                                  |
| `has_shippings`         | bool                                             | Whether there are shipping costs                                                                   |
| `phone_number_required` | bool                                             | Whether backers must specify the phone number in the shipping address when ordering a reward       |
| `shipping_int`          | int                                              | International shipping cost                                                                        |
| `shipping_nat`          | int                                              | National shipping cost                                                                             |
| `shipping_type`         | string                                           | Shipping type -- can be one of `none`, `national-only`, `national-and-some-countries`, `worldwide` |
| `shippings`             | array of [shipping resource](#shipping-resource) | Per country shippings                                                                              |

## Update project or reward delivery settings

Updates the delivery settings of the project or the reward with the given ID. This endpoint is only accessible to the project owner.

{{% http method="patch" %}}/v1/projects/:id/delivery{{% /http %}}
{{% http method="patch" %}}/v1/rewards/:id/delivery{{% /http %}}

| Parameter | Description |
| --------- | ----------- |
| `:id`     | Project ID  |

### Payload

| Field                   | Type   | Description                                                                                                   |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `address_required`      | bool   | Whether backers must specify a shipping address when ordering a reward                                        |
| `date_delivery`         | string | Date at which the delivery is expected, with the YYYY-MM-DD format -- required                                |
| `phone_number_required` | bool   | Whether backers must specify the phone number in the shipping address when ordering a reward                  |
| `shipping_int`          | int    | International shipping cost                                                                                   |
| `shipping_nat`          | int    | National shipping cost                                                                                        |
| `shipping_type`         | string | Shipping type -- required, must be one of `none`, `national-only`, `national-and-some-countries`, `worldwide` |

Also, it's possible to create, update, and delete shippings with the following payload fields.

| Field              | Type                                                           | Description                                                                      |
| ------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `create_shippings` | array of [create-shipping payloads](#create-a-reward-shipping) | Create shippings                                                                 |
| `update_shippings` | array of [update-shipping payloads](#update-a-shipping)        | Update shippings -- the shipping `id` field must be set                          |
| `delete_shippings` | array of ints                                                  | Delete shippings -- the ints in the array must be existing shippings `id` fields |
