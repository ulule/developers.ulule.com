# developers.ulule.com

Ulule API changelog to follow changes.

## Legend

* **[FEAT]** is a new feature
* **[FIX]** is a bugfix
* **[DOCS]** is a change to the documentation

## Changelog

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
