const ForumComment = require("../../models/ForumModels/Comment");
exports.addComment = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Discussion ID:", req.params.id);

    const { comment, username, userImage } = req.body;

    const newComment = new ForumComment({
      discussionId: req.params.id,
      comment,
      username,
      userImage,
    });

    const savedComment = await newComment.save();
    console.log(savedComment, "savedComment");
    res.status(201).json(savedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
