# developers.ulule.com

This repository hosts the source code of the https://developers.ulule.com/ website, and also contains a detailed changelog of new features and bug fixes.

## Changelog

### 10-10-2019
* **[ULULE-API/FEAT]** Add the `is_winner` query parameter to the [partners.projects_list](https://developers.ulule.com/#list-partner-projects) endpoint.

### 05-09-2019
* **[ULULE-API/FEAT]** Add the 2019-09-05 version change, which adds unknown search qualifier to search terms.

### 23-07-2019
* **[ULULE-API/FEAT]** Add the `contact_lang` field to the [users.update payload](https://developers.ulule.com/#update-a-user) and the [user resource](https://developers.ulule.com/#user-resource).

### 05-07-2019
* **[ULULE-API/FEAT]** Add the 2019-07-05 version change, which disallows unknown fields in JSON payloads.

### 03-07-2019
* **[ULULE-API/FEAT]** Add the 2019-07-03 version change, which makes the `username` field from the [users.create payload](https://developers.ulule.com/#create-a-user) optional.

### 01-07-2019
* **[ULULE-API/FEAT]** Add the `dry_run` field to the [users.create payload](https://developers.ulule.com/#create-a-user).

### 26-06-2019
* **[ULULE-API/FEAT]** Remove the `description_funding` and `description_yourself` fields from the list of fields that are required to be set to submit a project.

### 30-04-2019
* **[ULULE-API/FEAT]** Add the `message` field to the [projects.submit endpoint](https://developers.ulule.com/#submit-a-project).

### 11-04-2019
* **[ULULE-API/FEAT]** Add the 2019-04-11 version change, which turns the `account`, `manager`, `notes`, `owner.stats`, `rewards` and `user_role` fields from the project resource into [extra_fields](https://developers.ulule.com/#extra-fields).

### 21-03-2019
* **[ULULE-API/FEAT]** Add length limit to comment payload.

### 07-03-2019
* **[ULULE-API/FEAT]** Add the [orders.cancel endpoint](https://developers.ulule.com/#cancel-an-order)
* **[ULULE-API/FEAT]** Add the 2019-03-07 version change, which adds validation to extra fields: if the request contains an extra field that doesn’t exist, or an extra field that the user doesn’t have permission to read, an error is returned, instead of silently accepting the request without the extra field.

### 06-03-2019
* **[ULULE-API/FEAT]** Add the 2019-03-06 version change, which turns the `main_image`, `main_tag`, `owner` and `user_role` fields from the [search.projects endpoint](https://developers.ulule.com/#search-projects) into [extra_fields](https://developers.ulule.com/#extra-fields).

### 19-02-2019
* **[ULULE-API/FEAT]** Add the 2019-02-19 version change, which removes the `full_name`, `name` and `region` fields from the [location resource](https://developers.ulule.com/#project-resource).
* **[ULULE-API/FEAT]** Add the [partners.detail](https://developers.ulule.com/#partner) endpoint.

### 14-01-2019
* **[ULULE-API/FIX]** Allow anonymous proposals to be owned by staff users.
* **[DISCUSSIONS-API/FIX]** Fix the [threads.list](https://developers.ulule.com/#retrieve-thread-list) endpoint when the `status` filter is set to `deleted`.
* **[DISCUSSIONS-API/FIX]** Allow uppercase extensions in the `file` field of the [messages.attachments_create](https://developers.ulule.com/#create-an-attachment) payload.

### 12-12-2018

* **[ULULE-API/FEAT]** Add comment replies: the [comment resource](https://developers.ulule.com/#comment-resource) has two new fields (`replies_count` and `replies`) and there are two new endpoints: [comments.replies_create](https://developers.ulule.com/#create-a-reply-to-a-comment) and [comments.replies_list](https://developers.ulule.com/#list-comment-replies).
* **[ULULE-API/FEAT]** Add the 2018-12-12 version change. The [users.projects_list](https://developers.ulule.com/#list-user-projects) endpoint is accessible to all users.

### 05-12-2018

* **[ULULE-API/FEAT]** Let the `country` field in the [user resource](https://developers.ulule.com/#user-resource) be always present.

### 03-12-2018

* **[ULULE-API/FEAT]** Add the `fans_count` field to the [project resource](https://developers.ulule.com/#project-resource).

### 26-11-2018

* **[ULULE-API/FEAT]** Add the 2018-11-26 version change. The [user-detail](https://developers.ulule.com/#retrieve-a-user) endpoint is accessible to all users.

### 12-11-2018

* **[ULULE-API/FEAT]** Allow the `status` parameter in the [projects.orders_list](https://developers.ulule.com/#list-project-orders) and [users.orders_list](https://developers.ulule.com/#list-user-orders) endpoints to be a list of comma-separated strings.

### 19-10-2018

* **[ULULE-API/FEAT]** Add the `phone_number` field to the address payloads and resource.
* **[ULULE-API/FIX]** Fix the address payload fields sanitizer. The previous sanitizer introduced escaped HTML characters, for example the `'` character was sanitized into `&#39;`.

### 09-10-2018

* **[ULULE-API/FEAT]** Add the `finished` field to the project resource in the `search-project` endpoint.
* **[ULULE-API/FIX]** Fix the `description` field of the sponsorship resource, and remove the `title` field. Both were always `null`.

### 08-10-2018

* **[ULULE-API/FEAT]** Add the `extra_fields=project` query parameter to the `list-user-orders` endpoint. If present, the project resource is embedded in the order resource.

### 05-10-2018

* **[ULULE-API/FEAT]** Add the 2018-10-04 version change. The `project-detail` endpoint is accessible to all users before its status is `online`.

### 04-10-2018

* **[ULULE-API/FEAT]** Add the 2018-10-03 version change. The `password1` field of the `user-create` payload must have a score of at least 1 with the [zxcvbn password strength estimator](https://lowe.github.io/tryzxcvbn/) .

### 01-10-2018

* **[ULULE-API/FIX]** Replace `partner_id` search parameter with `partner` in the `search-project` endpoint.

### 26-09-2018

* **[ULULE-API/FEAT]** Add the `shipping_countries` field to the reward resource. If this field is defined, project owners can only create shippings to these countries and bakers can only create orders to this countries.
* **[DISCUSSIONS-API/FIX]** Disallow html tables in the `body_html` field of the `create-message` and `update-message` payloads.

### 25-09-2018

* **[ULULE-API/FIX]** Add the `user_role` field to the project resource in the `search-project` endpoint.

### 21-09-2018

* **[ULULE-API/FIX]** Fix the `meta.next` field of the `search-project` endpoint: the offset value was incorrect if the limit parameter was unset.

### 20-09-2018

* **[ULULE-API/FIX]** Fix the `news_count` field of the project resource: before it was not appropriately updated when a news was published or unpublished.

### 17-09-2018

* **[ULULE-API/FEAT]** Add the `paylib` payment method.
* **[ULULE-API/FEAT]** Add the `priority` field to the `sponsorship` resource.

### 12-09-2018

* **[ULULE-API/FEAT]** Add the `POST /projects/:id/like` and `POST /projects/:id/unlike` endpoints.

### 03-09-2018

* **[ULULE-API/FEAT]** Add the 2018-09-03 version change.

### 24-08-2018

* **[ULULE-API/FIX]** Add the `screenname` field to the project owner resource in the search-project endpoint.

### 21-08-2018

* **[ULULE-API/FIX]** Add the `slug` field to the news resource.

### 26-07-2018

* **[ULULE-API/FIX]** Fix `absolute_url` fields subdomain: before it was always `www`, now it is consistent with the `lang` query parameter.

### 03-07-2018

* **[ULULE-API/FIX]** Allow project owners to submit a project if the project status is not `pending`.

### 29-06-2018

* **[ULULE-API/FEAT]** Add the `user_id` field to the partner resource.
* **[ULULE-API/FEAT]** Add the `eula_accepted_at` field to the user resource.
* **[ULULE-API/FEAT]** Add the `POST /users/:id/accepteula` endpoint.

### 26-06-2018

* **[ULULE-API/FEAT]** Allow project supporters and project editors to reach each other.

### 15-06-2018

* **[ULULE-API/FIX]** Fix a bug that shows a wrong `url` for the `project.background` resource in case the background image doesn't have a URL. This field is now omitted.

### 14-06-2018

* **[ULULE-API/FIX]** Allow to set `shipping.amount` to a zero number.
* **[ULULE-API/FIX]** Allow to set `account.first_name` and `account.last_name` to a string between 1 and 250 characters.

### 13-06-2018

* **[ULULE-API/FIX]** Fix a bug that forbids to set the `reward.shipping_nat` and `reward.shipping_int` fields to `null` once they have been set to any value.

### 11-06-2018

* **[DOCS]** Revamp https://developers.ulule.com/

### 30-05-2018

* **[ULULE-API/FIX]** Return an explicit error instead of a 500 when the `limit` query parameter of a paginated endpoint is invalid.
* **[ULULE-API/FEAT]** Fix a bug that forbids a staff user with an avatar to create an avatar for another user.

### 29-05-2018

* **[ULULE-API/FEAT]** Add the `pt` language to i18n resources

### 23-05-2018

* **[ULULE-API/FEAT]** Add the `2018-05-22` version change. This change affects the permissions of the `POST /projects/:id/orders` endpoint. If the version change is activated, that is if Ulule-Version is set to `2018-05-22` or to a later version change, a user may create an order without having to fill the `first_name`, `last_name`, `email`, `country`, `nationality` and `birthday` profile information.
* **[DISCUSSIONS-API/FEAT]** Add the `body_html` field to the create-message and update-message payloads and to the message resource. Only one of `body` and `body_html` can be present in the payload. If `body` is present, `body_html` is set to empty string. If `body_html` is present, `body` is set to a text version of `body_html`.
* **[ULULE-API/FEAT]** Add the `answer_html` field to the validate-proposal and refuse-proposal payloads, and to the proposal resource. The validation rules are the same as with the `message.body_html` above.

### 16-05-2018

* **[ULULE-API/FEAT]** Add `is_guest` to create-user payload. If true, only the `email` field is required. A guest a user is allowed to create an order without having to fill the `first_name`, `last_name`, `email`, `country`, `nationality` and `birthday` profile information.
* **[ULULE-API/FEAT]** Add POST /users/:id/register endpoint to register a guest user so that it becomes a regular user.
* **[ULULE-API/FEAT]** Add `is_public` to comment resource.

### 15-05-2018

* **[ULULE-API/FEAT]** Add `projects_succeeded_count`, `projects_failed_count` and `projects_currently_funding_count` to the user resources in the GET /proposals endpoint

### 07-05-2018

* **[ULULE-API/FIX]** Return a 422 status instead of 500 when `reward.price` is out of the 0-1e10 range and `reward.shipping_int`, `reward.shipping_nat` and `shipping.amount` are out of the 0-1e3 range.

### 04-05-2018

* **[ULULE-API/FIX]** Return a 400 status instead of 500 when a `*_id` payload field is outside the int32 range.

### 03-05-2018

* **[ULULE-API/FIX]** Return a 400 status instead of 500 when the `:id` parameter of a route is outside the int32 range.

### 27-04-2018

* **[ULULE-API/FIX]** Rename `export.name` resource field to `export.format`

### 20-04-2018

* **[DISCUSSIONS-API/FIX]** Ensure POST /messages/:id/send is idempotent. Previously, calling this endpoint multiple times would cause the `message.sent_at` field to be updated

### 17-04-2018

* **[ULULE-API/FEAT]** Add `2018-04-17` version change which changes the format of the `reward.date_delivery` and `variant.date_delivery` fields from YYYY-MM-DDTHH:MM:SSZ to YYYY-MM-DD so that it matches the format of the payload

### 16-04-2018

* **[ULULE-API/FEAT]** Add `2018-04-11` version change which removes `partnership.status`
* **[ULULE-API/FEAT]** Add `2018-04-14` version change which removes `proposal.status_display` and `proposal.type_display`, and changes the type of `proposal.status` and `proposal.type` from numbers to strings
* **[ULULE-API/DOCS]** Add the two version changes above to the doc https://developers.ulule.com/#changelog

### 12-04-2018

* **[ULULE-API/FEAT]** Add `stats.proposals_refused_count` field to the `user` resource
* **[ULULE-API/FEAT]** Add `validator` field to the `proposal` resource
* **[ULULE-API/FEAT]** When validating a proposal, the proposal links are automatically listed to the `description_yourself` field of the project

### 09-04-2018

* **[ULULE-API/FEAT]** Add `partnerships` field to `project` resource in the `project.detail` endpoint

### 06-04-2018

* **[ULULE-API/FIX]** Let the `partner.ribbon` field be `null` in case it doesn't exist
* **[ULULE-API/FEAT]** When a proposal is completed, if the proposal user already owns a project, the project manager is automatically assigned to the proposal

### 05-04-2018

* **[ULULE-API/FIX]** Fix a bug that prevented the `message.sent` webhook to be sent

### 03-04-2018

* **[ULULE-API/FEAT]** Add optional `metadata` field to the user creation payload

### 26-03-2018

* **[ULULE-API/FIX]** Add fallback on `project.video` and `project.main_image` fields when the resource does not exist for the selected langage
* **[ULULE-API/FEAT]** Add `proposal.created`, `proposal.validated` and `proposal.refused` webhooks
* **[ULULE-API/FEAT]** When creating a discussion from a proposal, only add the proposal user and the manager to the discussion
* **[ULULE-API/FEAT]** Add two optional fields to proposal creation and update payloads: `legal_entity_type` (must be one of "personal", "business", "association") and `date_start_estimation` (must be one of "as soon as possible", "in the month", "in one to three months", "in more than three months")
* **[ULULE-API/FEAT]** Add one optional field to proposal validate and refuse payloads: `answer_code` (max 30 characters)
* **[ULULE-API/FEAT]** Save IP address when creating a new proposal
* **[DISCUSSIONS-API/FIX]** Don't escape `>` character in the sanitizer

### 22-03-2018

* **[ULULE-API/FEAT]** A staff member can change the `unread` flag on the Project
* **[ULULE-API/FEAT]** If a user is reachable by another, this user can view the user detail endpoint (`/users/:id`)
* **[ULULE-API/FIX]** Preload avatar for project manager
* **[DISCUSSIONS-API/FIX]** Retrieve user from last message when it's not a recipient
* **[DISCUSSIONS-API/FEAT]** Automatically mark a discussion as `read` when its messages are retrieved
* **[ULULE-API/FEAT]** Add `DELETE /comments/:id` endpoint
* **[ULULE-API/FEAT]** Add `PATCH /comments/:id` endpoint
