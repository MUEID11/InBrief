const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
  const id = req.params?.postId;
  const { comment, username, userImage, userEmail } = req?.body;
  try {
    if (id) {
      const createComment = await Comment.create({
        postId: id,
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

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const result = await Comment.findByIdAndDelete(commentId);

    if (!result) {
      return res.status(404).json({ message: "Commentle not found" });
    }

    res.status(200).json({ message: "comment deleted successfully", result });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const addLikeComment = async (req, res) => {
  const { commentId, userEmail } = req.body;

  try {
    const comment = await Comment.findOne({
      _id: commentId,
      likes: { $in: [userEmail] },
    });

    if (comment) {
      // User has already liked the comment, so remove their like (Unlike)
      const result = await Comment.updateOne(
        { _id: commentId },
        { $pull: { likes: userEmail } }
      );

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Like removed successfully!" });
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    } else {
      // User has not liked the comment, so add their like
      const result = await Comment.updateOne(
        { _id: commentId },
        { $addToSet: { likes: userEmail } }
      );

      if (result.matchedCount > 0) {
        res.status(200).json({ message: "Comment liked successfully!" });
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const addReply = async (req, res) => {
  const id = req.params?.commentId;
  const { reply, username, userImage, userEmail } = req?.body;

  try {
    if (id) {
      const reply = {
        commentId: id,
        username: req.body.username ? req.body.username : "user",
        reply: req.body.reply,
        userImage,
        userEmail,
      };
      const newComment = await Comment.findByIdAndUpdate(
        { _id: id },
        {
          $push: { replies: reply },
        },
        { new: true }
      );
      res.status(201).json(newComment);
    } else {
      res.status(404).json({ message: "Comment with this id not  found" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const deleteReply = async (req, res) => {
  try {
    const { commentId, replyId } = req.params;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { $pull: { replies: { _id: replyId } } },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res
      .status(200)
      .json({ message: "Reply deleted successfully", updatedComment });
  } catch (error) {
    console.error("Error deleting reply:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  createComment,
  getAllComments,
  addReply,
  addLikeComment,
  deleteComment,
  deleteReply,
};
