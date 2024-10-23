const mongoose = require("mongoose");

const magazineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  isPublic: { type: Boolean, default: true },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  createdAt: { type: Date, default: Date.now },
});

const Magazine = mongoose.model("Magazine", magazineSchema);

module.exports = Magazine;
