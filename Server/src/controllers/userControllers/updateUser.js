const userModel = require('../../models/userModel');

const updateUser = async (req, res) => {
  try {
    const { _id, ...updatedFields } = req.body;

    console.log(_id,updatedFields)

    const updatedUser = await userModel.findByIdAndUpdate(
      _id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateUser;
