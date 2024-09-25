const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
  },
  { timestamps: true, versionKey: false }
);

const Article = new mongoose.model('Article', articleSchema);

module.exports = Article;
