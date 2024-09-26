const userModel = require("../../models/userModel");
const hashPass = require("../Validation/hashPass");

 const createUser = async(req, res) => {
  const {name, email, age, image, password} = req.body;

  const hashedPassword = hashPass(password);
  try {
    const user = await userModel.create({
      name, email, age, image, password: hashedPassword
    })
  } catch (error) {
    
  }

}