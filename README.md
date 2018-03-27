# developers.ulule.com

Ulule API changelog to follow changes.

## Legend

* **[FEAT]** is a new feature
* **[FIX]** is a bugfix
* **[DOCS]** is a change to the documentation
* **[REF]** is a refactoring

## Changelog

### 26-03-2018

* **[ULULE_API/FIX]** added fallback on `project.video` and `project.main_image` when a resource does not exist for the selected langage
* **[DISCUSSIONS-API/FIX]** double character `>>` was still escaped
* **[ULULE-API/FEAT]** integrate `proposal.created` webhook
* **[ULULE-API/FEAT]** we only create the discussion from proposal with the proposal user and the manager
* **[ULULE-API/FEAT]** add two optional fields to proposal creation endpoint: `legal_entity_type` (must be one of "personal", "business", "association") and `date_start_estimation` (must be one of "as soon as possible", "in the month", "in one to three months", "in more than three months")
* **[ULULE-API/FEAT]** add one optional field to proposal update endpoint: `answer_code` (max 30 characters)
* **[ULULE-API/FEAT]** register ip address when creating a new proposal
* **[ULULE-API/FEAT]** webhook `proposal.validated`
* **[ULULE-API/FEAT]** webhook `proposal.refused`
* **[DISCUSSIONS-API/FIX]** character `>` is not escaped anymore in the sanitizer

### 22-03-2018

* **[ULULE-API/FEAT]** A staff member can change the `unread` flag on the Project
* **[ULULE-API/FEAT]** If a user is reachable by another, this user can view the user detail endpoint (`/users/:id`)
* **[ULULE-API/FIX]** Preload avatar for project manager
* **[DISCUSSIONS-API/FIX]** Retrieve user from last message when it's not a recipient
* **[DISCUSSIONS-API/FEAT]** Automatically mark a discussion as `read` when its messages are retrieved
* **[ULULE-API/FEAT]** Add `DELETE /comments/:id`
* **[ULULE-API/FEAT]** Add `PATCH /comments/:id`
