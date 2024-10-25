const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");
const hashPass = require("../Validation/hashPass");
const verifyPass = require("../Validation/varifyPass");

const signInController = async (req, res) => {
  const { email, password } = req.body;
  console.log("first", { email, password });
  // console.log(req.body);
  try {
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).send({ message: "unauthorized" });
    }

    // if (user) {
    // const isPassValid = await verifyPass(password, user?.password);
    // if (isPassValid) {
    const token = generateJwt({
      id: user?._id,
      email: user?.email,
    });
    res.json({ token, user });
    // } else {

    // }
  } catch (error) {
    res.send(error);
  }
};
module.exports = signInController;
