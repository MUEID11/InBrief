const Magazine = require("../../models/Magazine/magazineModel");

const getAMagazine = async (req, res) => {
  try {
    const { magazineId } = req.params;

    // Find the magazine by ID and populate necessary fields
    const magazine = await Magazine.findById(magazineId)
      .populate("creator", "name email imageUrl")
      .populate("articles", "image title description source category region likes bookmarks createdAt")
      .populate("collaborators", "name imageUrl");
    // If the magazine is not found, return a 404 error
    if (!magazine) {
      return res.status(404).json({ error: "Magazine not found" });
    }

    // Return the magazine details
    res.status(200).json(magazine);
  } catch (error) {
    res.status(500).json({ message: "Error fetching magazine", error });
  }
};

module.exports = getAMagazine;
