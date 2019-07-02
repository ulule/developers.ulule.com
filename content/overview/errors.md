---
title: "Errors"
weight: 6
---

# Errors

Ulule uses conventional HTTP response codes to indicate the success or failure
of an API request. Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate a client error (bad payload or query string, no permission, resource does not exist, etc.)
(e.g., a required parameter was omitted, the deserialization of the payload failed, etc.).
Codes in the `5xx range` indicate a server error.

With the response code, the API returns a serialized json list of Error
with the following fields:

| Field            | Description                          |
| ---------------- | ------------------------------------ |
| `fieldNames`     | List of the concerned fields         |
| `classification` | Type of the error                    |
| `message`        | Short text describing the error      |


