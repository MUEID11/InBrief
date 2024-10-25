const Magazine = require("../../models/Magazine/magazineModel");

const deleteMagazine = async (req, res) => {
  try {
    const magazine = await Magazine.findByIdAndDelete(req.params.magazineId);
    if (!magazine) {
      return res.status(404).json({ message: "Magazine not found" });
    }
    res.json({ message: "Magazine deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!Please try again", error });
  }
};

module.exports = deleteMagazine;
