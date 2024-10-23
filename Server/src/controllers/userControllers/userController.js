const createError = require("http-errors");
const userModel = require("../../models/userModel");

const getUser = async (req, res, next) => {
  try {
    const users = await userModel.find({}).select("-password");
    // console.log(users)
    res.status(200).send({
      message: "users were returned",
      users,
    });
  } catch (error) {
    next(error);
  }
};

// write function for get a user by email from params

const getUserByEmail = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.params.email }).select("-password");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};

module.exports = { getUser, getUserByEmail };
