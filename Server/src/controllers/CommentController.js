const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
  const id = req.params?.postId;
  const { comment, username } = req?.body;
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

const addReply = async (req, res) => {
  const id = req.params?.commentId;
  console.log(" rpely id:", id);

  try {
    if (id) {
      const reply = {
        commentId: id,
        username: req.body.username ? req.body.username : 'user' ,
        reply: req.body.reply,
      };
      const newComment = await Comment.findByIdAndUpdate(
        { _id: id },
        {
          $push: { replies: reply },
        },
        {new:true}
      );
      res.status(201).json(newComment);
    } else {
      res.status(404).json({ message: "Comment with this id not  found" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  createComment,
  getAllComments,
  addReply
};
