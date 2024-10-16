// src/routers/commentRouter.js
const express = require("express");
const {
  addForumComment,
  getAllForumComments,
  deleteForumComment,
  addForumReply,
  deleteForumReply,
} = require("../../controllers/ForumControllers/commentControllers");

const router = express.Router();

// Route for adding comments to a specific discussion
router.post("/addComment/:discussionId", addForumComment);
router.get("/getcomments/:discussionId", getAllForumComments);
router.delete("/:commentId", deleteForumComment);
router.put("/reply/:commentId", addForumReply);
router.delete("/:commentId/:replyId", deleteForumReply);

module.exports = router;
