# developers.ulule.com

## Changelog

### 12-09-2018

* **[ULULE-API/FEAT]** Add the `POST /projects/:id/like` and `POST /projects/:id/unlike` endpoints.

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
