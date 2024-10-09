const { mongoose, Schema } = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    username: { type: String, required: true },
    comment: { type: String, required: true },
    replies: [
      {
        username: {
          type: String,
          required: true,
        },
        commentId: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        reply: { type: String, required: true },
        
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
