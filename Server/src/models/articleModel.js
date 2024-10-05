const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    source: { type: Object, required: true },
    category: { type: String, required: true },
    region: { type: String },
    postedBy: { type: String, required: true },
    likes: { type: [String], required: true },
    bookmarks: { type: [String], required: true },
  },
  { timestamps: true, versionKey: false }
);

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;
