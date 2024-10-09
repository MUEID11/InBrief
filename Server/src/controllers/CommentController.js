const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
  const id = req.params?.postId;
  console.log("Comment id:", id);
  const { comment, username } = req?.body;
  console.log("Comment Body:", req?.body);
  try {
    if (id) {
      const createComment = await Comment.create({
        postId: id,
        comment,
        username: username ? username : "user",
      });
      res.status(201).json(createComment);
    } else {
      res.status(404).json({ message: "Comment with this id not  found" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getAllComments = async (req, res) => {
  const id = req.params?.postId;

  try {
    if (id) {
      const comments = await Comment.find({ postId: id }).sort({
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

module.exports = {
  createComment,
  getAllComments
};
