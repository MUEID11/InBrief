const mongoose = require("mongoose");

const newsLetterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },

  { timestamps: true }
);

const NewsLetter = new mongoose.model("NewsLetter", newsLetterSchema);

module.exports = NewsLetter;
