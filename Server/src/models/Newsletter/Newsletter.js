const mongoose = require("mongoose");

const newsLetterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const NewsLetter = new mongoose.model("NewsLetter", newsLetterSchema);

module.exports = NewsLetter;
