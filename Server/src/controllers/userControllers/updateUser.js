const userModel = require('../../models/userModel');

const updateUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  // find by id and update user._id
  const updatedUser = await userModel.findByIdAndUpdate(user._id, user);
  res.send(updatedUser);
};

module.exports = updateUser;
