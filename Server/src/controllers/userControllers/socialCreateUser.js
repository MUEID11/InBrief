const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");

const socialCreateUser = async (req, res) => {
  const { name, email, age, imageUrl, password, role } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    let user = {};
    if (!existingUser) {
      user = await userModel.create({
        name,
        email,
        age,
        imageUrl,
        password,
        role,
      });
    } else {
      user = existingUser;
    }
    const token = generateJwt({ id: user?._id, email: user?.email });
    console.log(user);
    console.log(token);
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }
};

module.exports = socialCreateUser;
