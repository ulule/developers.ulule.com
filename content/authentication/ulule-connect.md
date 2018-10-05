---
title: "Ulule Connect"
---

# Ulule Connect

Ulule connect allows users to connect their Ulule account to partner websites.

The workflow is:

1. User is on partner website
2. Partner needs to access user data
3. User clicks on "Sign In" button on partner website
4. This button redirects to Ulule connect URL
5. If the user does not have an existing Ulule account, the interface offers to create a new one
6. If the user already has an account, he or she can sign in with his or her Ulule credentials
7. At the end of sign in / sign up process, user is redirected to the `redirect_uri`
8. The user access token is returned to the `redirect_uri`


## Authorize user with Ulule Connect

The Ulule Connect URL is https://connect.ulule.com/oauth2/authorize/

The following query parameters are required.

| Field           | Description                                       |
| --------------- | ------------------------------------------------- |
| `client_id`     | Partner client ID                                 |
| `redirect_uri`  | Registered partner redirect URI                   |
| `response_type` | OAuth2 response type -- must be `token` or `code` |

A convenient way is to use this URL in a pop-up.

![form.jpg](/img/form.jpg "Ulule Connect sign in / sign up form")
![authorize.jpg](/img/authorize.jpg "Ulule Connect authorization page")

The [redirect URI], or redirection endpoint, is used to redirect users after sign in or sign up. Only registered redirect URIs are allowed. Only one registered URI can be set in the Ulule Connect request, but you can register as many as you want.

If `response_type` is [token], the access token is accessible at the redirect URI as a URL fragment. You can stop reading.

If `response_type` is [code], an access code is sent to the redirect URI via the `code` URL query parameters and the access token can be obtained from it. Read the next section.

## Retrieve user access token from authorization code

Use the `POST https://connect.ulule.com/oauth2/token/` endpoint as described in the [OAuth2 section](#retrieve-an-access-token).

### Payload

| Field          | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| `code`         | Authorization code retrieved from the `code` URL query parameter at `redirect_uri` |
| `grant_type`   | Grant type -- must be `authorization_code`                                         |
| `redirect_uri` | Redirected URI used to obtain the code                                             |

### Example

Take a look at this Python script:

```python
# access_token_from_code.py
import base64
import os

import requests

# Your partner client ID.
CLIENT_ID = os.getenv('CLIENT_ID')

# Your partner client secret.
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# The grant code.
GRANT_CODE = os.getenv('GRANT_CODE')

# Your registered redirect URI.
REDIRECT_URI = os.getenv('REDIRECT_URI')

# We need to encode in base64 the client_id and client_secret before
# passing it as a header.
def get_basic_auth_header(user, password):
    user_pass = '{0}:{1}'.format(user, password)
    auth_string = base64.b64encode(user_pass.encode('utf-8'))
    auth_headers = {'AUTHORIZATION': 'Basic ' + auth_string.decode("utf-8")}
    return auth_headers

# Execute the POST request with: grant_type, code and redirect_uri as
# POST parameters. Do not forget to add HTTP Basic header.
response = requests.post(
    'https://connect.ulule.com/oauth2/token/',
    data={
        'grant_type': 'authorization_code',
        'code': GRANT_CODE,
        'redirect_uri': REDIRECT_URI,
    },
    headers=get_basic_auth_header(CLIENT_ID, CLIENT_SECRET))

# Our response.
data = response.json()

# Expect a 200 status code.
assert response.status_code == 200

print('Access-Token: %s' % data.get('access_token'))
print('Refresh-Token: %s' % data.get('refresh_token'))
```

You can run this script by installing the `requests` package and passing variables as environment variables:

```bash
$ pip install requests
$ CLIENT_ID=your-client-id CLIENT_SECRET=your-client-secret GRANT_CODE=your-grant-code REDIRECT_URI=your-redirect-uri python access_token_from_code.py
Access-Token: user-access-token
Refresh-Token: user-refresh-token
```

[redirect URI]: https://tools.ietf.org/html/rfc6749#section-3.1.2
[token]: https://tools.ietf.org/html/rfc6749#section-1.3.2
[code]: https://tools.ietf.org/html/rfc6749#section-1.3.1
