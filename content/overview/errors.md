---
title: "Errors"
weight: 6
---

# Errors

Ulule uses conventional HTTP response codes to indicate the success or failure
of an API request. In general: Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate an error that failed given the information provided
(e.g., a required parameter was omitted, the deserialization of the payload failed, etc.).
Codes in the `5xx range` indicate an error with Ulule's servers.

With the response code, the API returns a serialized json list of Error
with the following fields:

| Field            | Description                          |
| ---------------- | ------------------------------------ |
| `fieldNames`     | List of the concerned fields         |
| `classification` | Type of the error                    |
| `message`        | Short text describing the error      |


