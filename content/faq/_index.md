---
title: "FAQ"
weight: 7
---

# FAQ

## When I visit a project page on the Ulule website, I see the following message: "This project was taken offline at the request of the project owner". What does that mean and is there a corresponding field in the project resource?

Projects owners can decide to cancel their project at any time for any reason. In that case the project is still considered online (`is_online` in the project resource) but the content is not visible and there can be no orders.

The corresponding field in the project resource is `is_cancelled`.

## How can project owners add images to their project description?

 That's what the images of type secondary are for.

 The workflow is the following:

 1. Upload the image via the [create image](#create-a-project-image) endpoint.
 2. Edit the project description via the [update project](#update-a-project) endpoint, add the `full` version of the image.

## Why is the reward.delivery_date field required?

We consider that when a project is launched on Ulule, it is a commitment for the project owner to deliver the rewards, even the symbolic ones.

## What is the distinction between account.is_completed and account.status? Why allowing a project owner to submit a project when is_completed is set to true, but status is not yet succeeded?

`is_completed` is automatically set when the project owner has completed all required fields in the account form. `status` is automatically set when the account validation succeeds or fails.

The account validation process can take some time (~1 working day) and the project owner doesn't have any progress information about it so it doesn't make sense to forbid the project submission.

It is the role of the project manager to check the account form. The manager should wait for the account to be validated before validating the project. In case of an invalid account, the manager can ask the project owner to go back to the account form to edit the information.

It may be possible for a project to be validated and to go online before the account is validated, especially if the project owner wants to launch ASAP. This is up to the appreciation and judgement of the project manager.

## How can a project owner remove the image field of an image of type background, to only have the background color?

Indeed it's not possible to set the image field of a background image to null because the payload format is form-data. The way to go is to delete the image resource before creating a new one.

## What happens if, during the campaign, a project owner wants to switch the account type, for example from individual to business?

It's not possible for the project owner to create a new account if the project status is validated or online. In such a case, the project owner must ask to the project manager.

## Why is the project.nb_products_sold field different from the sum of reward.stock_taken fields ?

For project of type `presale`, the `nb_products_sold` field is the number of orders. A baker can choose to create an order with any quantity of a reward.
