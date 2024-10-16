// src/routers/commentRouter.js
const express = require("express");
const {
  addForumComment,
  getAllForumComments,
  deleteForumComment,
} = require("../../controllers/ForumControllers/commentControllers");

const router = express.Router();

// Route for adding comments to a specific discussion
router.post("/:discussionId/createComment", addForumComment);
router.get('/:discussionId/comments',getAllForumComments );
router.delete("/:commentId", deleteForumComment);


module.exports = router;
