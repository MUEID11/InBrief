const ForumComment = require("../../models/ForumModels/Comment");

exports.addForumComment = async (req, res) => {
  const id = req.params?.discussionId;
  const { comment, username, userImage, userEmail } = req?.body;

  try {
    if (id) {
      const createComment = await ForumComment.create({
        discussionId: id,
        comment,
        username: username ? username : "user",
        userImage,
        userEmail,
      });
      res.status(201).json(createComment);
    } else {
      res.status(404).json({ message: "Comment with this id not  found" });
    }
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllForumComments = async (req, res) => {
  const id = req.params?.discussionId;

  try {
    if (id) {
      const comments = await ForumComment.find({ discussionId: id }).sort({
        createdAt: "desc",
      });
      res.status(201).json(comments);
    } else {
      res.status(404).json({ message: "Comment with this id not  found" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports. deleteForumComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const result = await ForumComment.findByIdAndDelete({ _id: commentId});

    if (!result) {
      return res.status(404).json({ message: "Commentle not found" });
    }

    res.status(200).json({ message: "comment deleted successfully", result });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};