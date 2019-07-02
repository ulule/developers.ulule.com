---
title: "Errors"
weight: 6
---

# Errors

Ulule uses conventional HTTP response codes to indicate the success or failure
of an API request. Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate a client error (bad payload or query string, no permission, resource does not exist, etc.)
Codes in the `5xx range` indicate a server error.

## Client error resource

| Field            | type            | Description                     |
| ---------------- | --------------- | ------------------------------- |
| `classification` | string          | Type of the error               |
| `fieldNames`     | array of strings | List of the concerned fields    |
| `message`        | string          | Short text describing the error |
