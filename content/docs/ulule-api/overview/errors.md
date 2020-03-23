---
title: "Errors"
weight: 6
---

# Errors

## Client error resource

| Field            | Type             | Description                  |
| ---------------- | ---------------- | ---------------------------- |
| `classification` | string           | Class of the error           |
| `fieldNames`     | array of strings | List of the concerned fields |
| `message`        | string           | Description of the error     |

The following values are possible for the `classification` field:

| Classification       | Description                                           |
| -------------------- | ----------------------------------------------------- |
| DeserializationError | Payload can't be deserialized because it is malformed |
| PermissionError      | User doesn't have the permission to use this field    |
| RequiredError        | Field is required                                     |
| TypeError            | Field can't be deserialized because of its type       |
| UnknownFieldError    | Field is unknown                                      |
| ValueError           | Bad value, the `message` field explains why           |
