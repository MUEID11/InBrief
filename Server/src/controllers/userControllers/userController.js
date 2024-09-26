const createError = require("http-errors");
const { userModel } = require("../../models/userModel");


const getUser = async(req, res, next) => {
  try {
    const users = await userModel.find()
    console.log(users)
    res.status(200).send({
      message: "users were returned",
      users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser };
