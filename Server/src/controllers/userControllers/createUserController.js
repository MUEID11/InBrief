const userModel = require("../../models/userModel");
const hashPass = require("../Validation/hashPass");

const createUser = async(req, res) => {
  const {name, email, age, imageUrl, password} = req.body;
  const hashedPassword = await hashPass(password);
  try {
    // const user = await userModel.create({
    //   name, email, age, imageUrl, password: hashedPassword
    // })
    const user = new userModel({
      name, email, age, imageUrl, password: hashedPassword
    })
    const result = await user.save();
    console.log(result)
    res.json(result)
  } catch (error) {
    res.send(error.message)
  }

}

module.exports = createUser;