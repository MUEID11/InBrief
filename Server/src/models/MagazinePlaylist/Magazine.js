import mongoose from "mongoose";

const magazineModel = new mongoose.Schema({
  name: { type: String, required: true },
  topic: { type: String, required: true },
  coverImage: { type: String, required: true },
  articles: { type: mongoose.Schema.Types.ObjectId, ref: "articles" },
  followers: { type: [String], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Magazine = new mongoose.model("magazine", magazineModel);

module.exports = Magazine;
