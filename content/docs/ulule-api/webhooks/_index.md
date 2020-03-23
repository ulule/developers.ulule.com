---
title: "Webhooks"
weight: 4
---

# Webhooks

Webhooks allow partners to receive notifications about events happening on the Ulule platform.

When an event occurs, for example when a order succeeds, Ulule creates an Event object. This object contains all the relevant information, including the type of event and the URI of the resource associated with that event.

Ulule then sends the Event object in the body of an HTTP POST request to the registered URL of a partner.

## Event object

An event object typically looks like the following:

```json
{
    "created": "2015-09-01T16:40:05.805422",
    "object": "event",
    "resource": {
        "type": "project",
        "uri": "https://api.ulule.com/v1/projects/53423"
    },
    "type": "project.funded",
}
```

## Configuring a server to receive webhooks

Configuring a server to receive webhooks is very close to creating a new page on a website.

With PHP, you might create a new .php file on your server. With a framework like Flask, you would add a new route with the desired URL.

Remember, with webhooks, your server is the server receiving the request.