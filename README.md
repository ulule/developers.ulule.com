# developers.ulule.com

Ulule API changelog to follow changes.

## Legend

* **[FEAT]** is a new feature
* **[FIX]** is a bugfix
* **[DOCS]** is a change to the documentation
* **[REF]** is a refactoring

## Changelog

### 27-03-2018

* **[DISCUSSIONS/FIX]** double character `>>` was still escaped
* **[ULULE/FEAT]** integrate `proposal.created` webhook
* **[ULULE/FEAT]** we only create the discussion from proposal with the proposal user and the manager

### 26-03-2018

* **[ULULE/FEAT]** webhook `proposal.validated`
* **[ULULE/FEAT]** webhook `proposal.refused`
* **[DISCUSSIONS/FIX]** character `>` is not escaped anymore in the sanitizer

### 22-03-2018

* **[ULULE/FEAT]** A staff member can change the `unread` flag on the Project
* **[ULULE/FEAT]** If a user is reachable by another, this user can view the user detail endpoint (`/users/:id`)
* **[ULULE/FIX]** Preload avatar for project manager
* **[DISCUSSIONS/FIX]** Retrieve user from last message when it's not a recipient
* **[DISCUSSIONS/FEAT]** Automatically mark a discussion as `read` when its messages are retrieved
* **[ULULE/FEAT]** Add `DELETE /comments/:id`
* **[ULULE/FEAT]** Add `PATCH /comments/:id`
