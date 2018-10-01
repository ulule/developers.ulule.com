---
title: "Webhooks reference"
---

# Webhooks reference

| Event type            | Description                                                                                   | Resource type              |
| --------------------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| `user.created`        | Occurs when a user is created                                                                 | `user`                     |
| `user.updated`        | Occurs when a user is updated                                                                 | `user`                     |
| `avatar.updated`      | Occurs when a user avatar changes                                                             | `user`                     |
| `project.created`     | Occurs when a project is created                                                              | `project`                  |
| `project.updated`     | Occurs when a project is updated                                                              | `project`                  |
| `project.submitted`   | Occurs when a project is submitted to moderation by a project owner                           | `project`                  |
| `project.refused`     | Occurs when the moderation team sets the project status to refused during the validation step | `project`                  |
| `project.published`   | Occurs when a project is put online by the project owner or the moderation team               | `project`                  |
| `project.unpublished` | Occurs when the moderation team puts a project offline                                        | `project`                  |
| `project.funded`      | Occurs when a project is successfully funded                                                  | `project`                  |
| `project.unfunded`    | Occurs when a project ends without being successfully funded                                  | `project`                  |
| `image.created`       | Occurs when a image is created                                                                | `project`                  |
| `image.updated`       | Occurs when a image is updated                                                                | `project`                  |
| `image.deleted`       | Occurs when a image is deleted                                                                | `project`                  |
| `video.created`       | Occurs when a video is created                                                                | `project`                  |
| `video.updated`       | Occurs when a video is updated                                                                | `project`                  |
| `video.deleted`       | Occurs when a video is deleted                                                                | `project`                  |
| `reward.created`      | Occurs when a reward is created                                                               | `reward`                   |
| `reward.updated`      | Occurs when a reward is updated, or a variant of this reward is created, updated or deleted   | `reward`                   |
| `reward.deleted`      | Occurs when a reward is deleted                                                               | `project`                  |
| `shipping.created`    | Occurs when a shipping is created                                                             | `reward`                   |
| `shipping.updated`    | Occurs when a shipping is updated                                                             | `reward`                   |
| `shipping.deleted`    | Occurs when a shipping is deleted                                                             | `reward`                   |
| `news.created`        | Occurs when a news is created                                                                 | `news`                     |
| `news.updated`        | Occurs when a news is updated                                                                 | `news`                     |
| `news.published`      | Occurs when a news is published                                                               | `news`                     |
| `news.deleted`        | Occurs when a news is deleted                                                                 | `news`                     |
| `news.unpublished`    | Occurs when a news is unpublished                                                             | `news`                     |
| `comment.created`     | Occurs when a comment is created                                                              | can be `project` or `news` |
| `order.completed`     | Occurs when an order is completed                                                             | `order`                    |
| `order.cancelled`     | Occurs when an order is cancelled                                                             | `order`                    |
| `order.reimbursed`    | Occurs when an order is reimbursed                                                            | `order`                    |
| `order.paid`          | Occurs when an order is transferred to a project owner                                        | `order`                    |
| `order.updated`       | Occurs when an order is updated                                                               | `order`                    |
| `proposal.created`    | Occurs when a proposal is created                                                             | `proposal`                 |
| `proposal.validated`  | Occurs when a proposal is validated by the moderation team                                    | `proposal`                 |
| `proposal.refused`    | Occurs when a proposal is refused by the moderation team                                      | `proposal`                 |
| `message.sent`        | Occurs when a message is sent in the discussion thread of a project                           | `message`                  |
