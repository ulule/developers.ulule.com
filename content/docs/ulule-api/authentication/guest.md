---
title: "Guest users"
weight: 5
---

# Guest users

It's possible to authenticate a user with just an email, and without creating a user account. Guest users have limited access to Ulule API, which is defined and documented per endpoint.

## Create a guest user

To create a guest user and retrieve an access token, the workflow is similar to the [OAuth2 method](#OAuth2). Use the `POST https://api.ulule.com/oauth2/token/` endpoint with the `guest_email` grant type.

### Payload

| Field        | Description                         |
| ------------ | ----------------------------------- |
| `email`      | User email                          |
| `grant_type` | Grant type -- must be `guest_email` |
