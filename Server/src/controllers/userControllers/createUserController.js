const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");
const hashPass = require("../Validation/hashPass");

const createUser = async (req, res) => {
  const { name, email, age, imageUrl, password, role } = req.body;
  // console.log(req.body);
  let hashedPassword = "";
  if (password?.length > 0 || password) {
    hashedPassword = await hashPass(password);
  }
  // console.log("consoling hashed pass form create",hashedPassword)
  try {
    // check if the user already exists with email
    const existingUser = await userModel.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).send("User already exists");
    // }

    let user = {};
    if (!existingUser) {
      user = await userModel.create({
        name,
        email,
        age,
        imageUrl,
        password: hashedPassword,
        role,
      });
    } else {
      user = existingUser;
      // user.password = hashedPassword;
      // await user.save();
      // console.log("User updated with hashed password");
    }
    const token = generateJwt({ id: user?._id, email: user?.email });
    console.log(user);
    console.log(token);
    res.json(token);
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }
};

module.exports = createUser;
