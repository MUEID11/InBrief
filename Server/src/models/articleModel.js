const mongoose = require('mongoose');

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
    dislikes: { type: [String], required: true },
    bookmarks: { type: [String], required: true },
//       like: [{type: ObjectId, ref:"User"}]
  },
  { timestamps: true, versionKey: false }
);

const Article = new mongoose.model('Article', articleSchema);

module.exports = Article;