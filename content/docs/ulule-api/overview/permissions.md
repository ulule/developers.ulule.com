---
title: "Permissions"
weight: 6
---

# Permissions

A `permissions` field is present in some resources, it specifies the
access level on specific fields of the resource for the authenticated user.

```json
{
    "permissions": {
        "self": ["update"],
        "news": ["create"]
    }
}
```
