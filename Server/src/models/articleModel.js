const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true}
);

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;
