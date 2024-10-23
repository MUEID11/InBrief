const Magazine = require("../../models/Magazine/magazineModel");

const getAllMagazines = async (req, res) => {
  try {
    // Retrieve all magazines from the database
    const magazines = await Magazine.find().populate("followers", "name").populate("articles", "title").populate("collaborators", "name");

    res.status(200).json(magazines); // Return magazines in the response
  } catch (error) {
    res.status(500).json({ message: "Error fetching magazines", error });
  }
};

module.exports = getAllMagazines;
