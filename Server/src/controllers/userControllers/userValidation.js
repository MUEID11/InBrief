const userModel = require("../../models/userModel");

const userValidation = async (req, res) => {
  const { id } = req.user;
  console.log(id);
  try {
    const user = await userModel.findById(id).select('-password');
    console.log(user);
    res.send(user);
  
  } catch (error) {
    console.log(error)
    res.send(error)
  }
};

module.exports = userValidation;
