---
title: "Pagination"
weight: 1
---

# Pagination

Most endpoints that return a list of resources use the same pagination system. The pagination is cursor-based and returns objects created before a timestamp in reverse chronological order.

## Parameters

The `limit` and `since` URL query parameters may be used to retrieve different pages.

| Parameter | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| `limit`   | Maximum number of resources per page, default is 20 and maximum value is 20 |
| `since`   | Cursor, must be a timestamp in seconds                                      |

## Meta object

A `meta` object is returned in the response beside the actual resource. This object contains field describing the current page and the next page if it exists.

| Field   | Description                                                    |
| ------- | -------------------------------------------------------------- |
| `limit` | Current limit value                                            |
| `next`  | Query string of the next page, null if there is no more page |

## Example

```bash
$ curl "https://api.ulule.com/v1/projects/56599/comments?limit=10&since=1522245932"
```

```javascript
{
    "comments": [...],
    "meta": {
        "limit": 10,
        "next": "?limit=10&since=1514912554"
    }
}
```
