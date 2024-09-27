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
  age:{
    type: Number,
    required: [true, "Please provide your age"],
  },
  password: {
    type: String,
    required: [true, "Password must be provided"],
    minLength: 6,
  },
  imageUrl: {
    type: String,
    required: [true, "Image must be provided"],
  },
});

userSchema.plugin(mongooseUniqueValidator, {
  message: "{PATH} must be unique",
});

const userModel = model("users", userSchema);
module.exports = userModel;
