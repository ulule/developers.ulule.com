---
title: "Extra fields"
weight: 5
---

# Extra fields

Extra fields are a way to control which resources are embedded in a response.

Depending on the use case, API clients sometimes don't need embedded resources for a specific endpoint, so adding them is a waste of computing resource and network bandwidth. Other clients may want 2 or 3 levels of resource embedding on the same endpoint, so that they can get the data they need with only one request. The goal of extra fields is to mitigate this issue.

To add an extra field to a response, add the `extra_fields` parameter to the URL.

For example, embed the `stats` resource into the user resource with the following request:

{{% http method="get" %}}/v1/users/:id?extra_fields=stats{{% /http %}}

To add more than one extra field, separate the values with commas.

For example, embed the `analytics`, `partnerships` and `sponsorships` resources into the project resource with the following request:

{{% http method="get" %}}/v1/projects/:id?extra_fields=analytics,partnerships,sponsorships{{% /http %}}

To nest embedded resource, separate levels of embedding with dots.

For example, embed the `orders` resource into the user resource, and the `project` resource into the order resources with the following request:

{{% http method="get" %}}/v1/me?extra_fields=orders,orders.project{{% /http %}}
