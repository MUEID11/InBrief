const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const Article = new mongoose.model('Article', articleSchema);

module.exports = Article;
