const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    discussionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    username: { type: String, required: true },
    userImage: { type: String, required: true },
    userEmail: { type: String, required: true },
    comment: { type: String, required: true },
    replies: [
      {
        username: {
          type: String,
          required: true,
        },
        userImage: {
          type: String,
          required: true,
        },
        userEmail: {
          type: String,
          required: true,
        },
        commentId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        reply: { type: String, required: true },
        createdAt: {
          type: Date,
          default: new Date().getTime(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForumComment", commentSchema);
