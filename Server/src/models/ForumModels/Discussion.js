// src/models/Discussion.js
const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  username: { type: String, required: true },
  userImage: { type: String },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], // Reference to Comment model
}, { timestamps: true });

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
