---
title: "OAuth2"
weight: 3
---

# OAuth2

This authentication method is only accessible if you have a registered OAuth2 application. Contact [api@ulule.com](mailto:api@ulule.com) for more information.

Users use their access token for authentication via the Authorization HTTP header.

```bash
$ curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" "https://api.ulule.com/v1/..."
```

## Retrieve an access token

To retrieve an access token, use the `POST https://api.ulule.com/oauth2/token/` endpoint.

*Please, do not forget the slash at the end, just after "token". This slash is required.*

The request must be authenticated with the `Basic` method with the credentials being your `client_id` and `client_secret`.

### Payload

| Field        | Description                      |
| ------------ | -------------------------------- |
| `grant_type` | Grant type -- must be `password` |
| `password`   | User password                    |
| `username`   | User username                    |

### Example

```bash
$ curl -X POST \
    -d "grant_type=password&username=<username>&password=<password>" \
    -u <client_id> \
    https://api.ulule.com/oauth2/token/
```
```json
{
    "access_token": "PKs6dso48MPRPa4pcKjskjIFwpQMA3",
    "expires_in": 36000,
    "refresh_token": "8Pbypw13OqJDeggvymoUc26djkPZ",
    "scope": "read write",
    "token_type": "Bearer"
}
```

Or use this Python script:

```python
# access_token.py
import base64
import os

import requests

# Your partner client ID.
CLIENT_ID = os.getenv('CLIENT_ID')

# Your partner client secret.
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# The user's Ulule username.
USERNAME = os.getenv('USERNAME')

# The user's Ulule password.
PASSWORD = os.getenv('PASSWORD')

# We need to encode the client ID and client secret in base64 before
# passing it as a header.
def get_basic_auth_header(user, password):
    user_pass = '{0}:{1}'.format(user, password)
    auth_string = base64.b64encode(user_pass.encode('utf-8'))
    auth_headers = {'AUTHORIZATION': 'Basic ' + auth_string.decode("utf-8")}
    return auth_headers

# Execute the POST request with: grant_type, username and password as
# POST parameters. Do not forget to add HTTP Basic header.
response = requests.post(
    'https://api.ulule.com/oauth2/token/',
    data={
        'grant_type': 'password',
        'username': USERNAME,
        'password': PASSWORD,
    },
    headers=get_basic_auth_header(CLIENT_ID, CLIENT_SECRET))

# Our response.
data = response.json()

# Expect a 200 status code.
assert response.status_code == 200

print('Access-Token: %s' % data.get('access_token'))
print('Refresh-Token: %s' % data.get('refresh_token'))
```

This script can be easily rewritten in any programing langage.

You can run this script by installing the ``requests`` package and passing variables as environment variables:

```bash
$ pip install requests
$ CLIENT_ID=your-client-id CLIENT_SECRET=your-client-secret USERNAME=user-username PASSWORD=user-password python access_token.py
Access-Token: user-access-token
Refresh-Token: user-refresh-token
```

You now have an access token to authenticate the user.

## Refresh the access token

Access tokens expire after 10 hours.

Because you don't store user passwords in plain text in your database, you can't generate new access tokens automatically without asking the user credentials again. In terms of user experience, this would be pretty bad.

To address this issue, we also provide a *refresh token* which allows you to generate a new access token:

```python
# refresh_token.py
import base64
import os

import requests

# Your partner client ID.
CLIENT_ID = os.getenv('CLIENT_ID')

# Your partner client secret.
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# The user's refresh token.
REFRESH_TOKEN = os.getenv('REFRESH_TOKEN')

# We need to encode the client ID and client secret in base64 before
# passing it as a header.
def get_basic_auth_header(user, password):
    user_pass = '{0}:{1}'.format(user, password)
    auth_string = base64.b64encode(user_pass.encode('utf-8'))
    auth_headers = {'AUTHORIZATION': 'Basic ' + auth_string.decode("utf-8")}
    return auth_headers

# Execute the POST request with: grant_type and refresh_token
# POST parameters. Do not forget to add HTTP Basic header.
response = requests.post(
    'https://api.ulule.com/oauth2/token/',
    data={
        'grant_type': 'refresh_token',
        'refresh_token': REFRESH_TOKEN,
    },
    headers=get_basic_auth_header(CLIENT_ID, CLIENT_SECRET))

# Our response.
data = response.json()

# Expect a 200 status code.
assert response.status_code == 200

print('Access-Token: %s' % data.get('access_token'))
```

You can run this script by installing the ``requests`` package and passing variables as environment variables:

```bash
$ pip install requests
$ CLIENT_ID=your-client-id CLIENT_SECRET=your-client-secret REFRESH_TOKEN=user-refresh-token python refresh_token.py
Access-Token: user-access-token
```

You now have a new access token to re-authenticate the user.
