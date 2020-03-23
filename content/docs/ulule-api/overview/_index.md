---
title: "Overview"
weight: 1
---

# Overview

Where possible, Ulule API strives to stick to the REST convention: we use HTTP verbs such as <code class="http-verb--get">GET</code>, <code class="http-verb--post">POST</code>, <code class="http-verb--patch">PATCH</code> and <code class="http-verb--delete">DELETE</code> and return appropriate HTTP response codes (`2xx` for success, `4xx` for client errors and `5xx` for server errors).

We use JSON to encode all resources and decode all payloads, except file uploads that must be encoded with `multipart/form-data`.
