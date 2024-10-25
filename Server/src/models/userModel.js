const { Schema, model } = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please type your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  age: {
    type: Number,
    required: [false, "Please provide your age"],
  },
  password: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: [true, "Image must be provided"],
  },
  preferences: {
    type: [String],
    required: [true, "pref must be provided"],
    default: [],
  },
  role: { type: String, required: true },
  

});

userSchema.plugin(mongooseUniqueValidator, {
  message: "{PATH} must be unique",
});

const userModel = model("users", userSchema);
module.exports = userModel;
