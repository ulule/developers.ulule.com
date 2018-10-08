---
title: "Versions"
weight: 4
---

# Versions

Ulule API has a versioning system to manage upgrades without breaking backward-compatibility.

The API version controls the API observable behavior, for example the fields present in resources, etc.

When we must introduce a backward-incompatible change, we release a new version named after the current date. To avoid breaking external programs, these versions are always opt-in and must be explicitely requested.

To request a specific version, add the `Ulule-Version` HTTP header to the request.

### Example

```bash
$ curl "https://api.ulule.com/v1/projects/56599" -H Ulule-Version:2017-10-10
```

## Versions changelog

### 2018-10-04

* This version changes the permission of the [projet-detail endpoint](#retrieve-a-project): this endpoint is now accessible to all users before its status is `online`.

### 2018-10-03

* This version changes the validation of the [user-create endpoint](#create-a-user): the `password1` payload field must now have a score of at least 1 with the [zxcvbn password strength estimator](https://lowe.github.io/tryzxcvbn/).

### 2018-09-03

* [partnership resource](#partnership)
    * `presale` field is renamed to `project`

### 2018-05-22

* This version changes the permission of the [order-create endpoint](#create-an-order): the `is_completed` field of the [user resource](#user) is no longer required to be true for a user to [create an order](#create-an-order)

### 2018-04-17

* [reward](#reward) and [variant](#variant) resources
    * `date_delivery` format is YYYY-MM-DD instead of YYY-MM-DDTHH:MM:SSZ

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
