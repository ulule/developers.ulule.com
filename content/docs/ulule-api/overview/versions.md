---
title: "Versions"
weight: 4
---

# Versions

Ulule API has a versioning system to manage upgrades without breaking backward-compatibility.

We consider the following changes to be backward-incompatible:

* Removing a resource field, or changing the type of a resource field.
* Changing the validation of a parameter, or the permission required to call an endpoint.

When we must introduce a backward-incompatible change, we release a new version named after the current date. To avoid breaking external programs, these versions are always opt-in and must be explicitly requested.

To request a specific version, add the `Ulule-Version` HTTP header to the request.

### Example

```bash
$ curl "https://api.ulule.com/v1/projects/56599" -H Ulule-Version:2017-10-10
```

## Versions changelog

### 2020-11-10

* This version changes the `video` field of the [project resource](#project resource) to an [i18n object](#i18n).

### 2020-10-07

* This version disallows invalid credentials during authentication for endpoints that can be used anonymously. Before this version, if the credentials are invalid and the endpoint can be used anonymously, the request proceeds without being authenticated. With this version, a 401 Unauthorized error is returned.

### 2020-08-13

* This version turns the `fields_needed` field from the [project](#project) resource into an [extra field](#extra-fields). It must be explicitly specified.

### 2020-04-08

* This version changes the `main_image` fields of the [project resource](#project resource) and the [search-project resource](#search-project-resource) to [i18n objects](#i18n).

### 2020-03-11

* This version removes the `country` field from the [projects.orders_create payload](#create-an-order) and adds validation regarding the order shipping.

### 2020-01-27

* This version changes the format of the date_delivery field from the [delivery](#delivery-resource) from YYYY-MM-DD to YYYY-MM.

### 2019-11-13

* This version removes the following fields from the [project resource](#project-resource), the fields are always present in the `delivery` embedded resource:
    * `address_required`
    * `phone_number_required`
* This version removes the following fields from the [reward resource](#reward-resource), the fields are always present in the `delivery` embedded resource:
    * `address_required`
    * `date_delivery`
    * `has_shippings`
    * `phone_number_required`
    * `shipping_int`
    * `shipping_nat`
    * `shippings`
* This version turns the `delivery` field from the [project](#project) resource into an [extra field](#extra-fields). It must be explicitly specified.

### 2019-11-07

* This version removes values that do not exist from [i18n objects](#i18n). Before that version, non existing values were always filled with empty strings.

### 2019-10-28

* This version removes the following fields from the [variant resource](#variant-resource), the fields are always present in the `parent` embedded resource:
    * `address_required`
    * `date_delivery`
    * `num_products`
    * `phone_number_required`
    * `price`
    * `project_id`

### 2019-09-05

* This version adds unknown search qualifiers to search terms, whereas they were ignored before that version.

### 2019-07-24

* This version disallows forbidden fields in the [projects.update](#update-a-project) and [users.update](#update-a-user) JSON payloads. If a user doesn't have the permission to set a field, a [PermissionError](#errors) is returned.

### 2019-07-05

* This version disallows unknown fields in JSON payloads. If an unknown field is present, a [UnknownFieldError](#errors) is returned.

### 2019-07-03

* This version makes the `username` field from the [users.create payload](#create-a-user) optional. If absent, the username is deduced from the local part of the email.

### 2019-04-11

* This version turns the `account`, `manager`, `notes`, `owner.stats`, `rewards` and `user_role` fields from the [project](#project) resource into [extra_fields](#extra-fields). They must be explicitly specified.

### 2019-03-07

* This version adds validation to extra fields: if the request contains an extra field that doesn't exist, then an error is returned, instead of silently accepting the request without the extra field.

### 2019-03-06

* This version turns the `main_image`, `main_tag`, `owner` and `user_role` fields from the [search.projects](#search-projects) endpoint into [extra_fields](#extra-fields). They must be explicitly specified.

### 2019-02-07

* This version removes the `full_name`, `name`, and `region` fields from the [location resource](#location-resource).

### 2018-12-12

* This version changes the permission of the [users.projects_list endpoint](#list-user-projects): this endpoint is now accessible to all users.

### 2018-11-26

* This version changes the permission of the [users.detail endpoint](#retrieve-a-user): this endpoint is now accessible to all users.

### 2018-10-04

* This version changes the permission of the [projects.detail endpoint](#retrieve-a-project): this endpoint is now accessible to all users before its status is `online`.

### 2018-10-03

* This version changes the validation of the [users.create endpoint](#create-a-user): the `password1` payload field must now have a score of at least 1 with the [zxcvbn password strength estimator](https://lowe.github.io/tryzxcvbn/).

### 2018-09-03

* [partnership resource](#partnership)
    * `presale` field is renamed to `project`

### 2018-05-22

* This version changes the permission of the [projects.orders_create endpoint](#create-an-order): the `is_completed` field of the [user resource](#user) is no longer required to be true for a user to [create an order](#create-an-order)

### 2018-04-17

* [reward](#reward) and [variant](#variant) resources
    * `date_delivery` format is YYYY-MM-DD instead of YYYY-MM-DDTHH:MM:SSZ

### 2018-04-14

* [proposal resource](#proposal)
    * `status_display` and `type_display` are removed
    * `status` and `type` are strings

### 2018-04-11

* [partnership resource](#partnership)
    * `status` is removed

### 2017-12-12

* [avatar resource](#avatar)
    * `20` is removed
    * `30` is removed
    * `40` is removed
    * `55` is removed
    * `75` is removed
    * `90` is removed
    * `128` is removed
    * `180` is removed
    * `230` is removed
    * `290` is removed
    * `full` is removed
* [project.main_image](#project)
    * `230x160` is removed
    * `258x145` is removed
    * `260x360` is removed
    * `full` is removed


### 2017-10-10

* [sponsorship resource](#) `description` and `title` are [i18n objects](#i18n)
* [user resource](#user) `description` and `presentation` are [i18n objects](#i18n)
* [category resource](#category-and-tag) `name` is a [i18n object](#i18n)

### 2017-09-19

* [order resource](#order) `status` is a string
* [project resource](#project)
    * `type` is a string
    * `currency_display` is removed
    * `time_left` is removed
    * `time_left_short` is removed
    * `image` is removed

### 2017-09-15

* [news resource](#news) `content` and `title` are [i18n objects](#i18n)
* [project resource](#project) `name`, `subtitle`, `description`, `description_funding` and `description_yourself` are [i18n objects](#i18n)
* [reward resource](#reward) `description` is a [i18n object](#i18n)
* [variant resource](#variant) `description` is a [i18n object](#i18n)
* [project main_tag resource](#project) `name` is a [i18n object](#i18n)
