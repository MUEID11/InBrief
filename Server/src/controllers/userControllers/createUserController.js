const userModel = require("../../models/userModel");
const generateJwt = require("../Validation/generateJwt");
const hashPass = require("../Validation/hashPass");

const createUser = async(req, res) => {
  const {name, email, age, imageUrl, password} = req.body;
  console.log(req.body)
  const hashedPassword = await hashPass(password);
  try {
    const user = await userModel.create({
      name, email, age, imageUrl, password: hashedPassword
    })
    const token = generateJwt({id: user?._id, email: user?.email, age: user?.age})
    console.log(user)
    res.json(token)
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }

}

module.exports = createUser;