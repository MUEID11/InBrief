// const MagazineCollaborator = require("../../models/Magazine/magazineCollaboratorsModel");
const MagazineCollaborator = require("../../../models/Magazine/magazineCollaboratorsModel");
const Magazine = require("../../../models/Magazine/magazineModel");

const createNewCollabReq = async (req, res) => {
  try {
    // const {magazineId, userId} = req.params;
    const { magazineId, userId, role, status } = req.body;
    const magazine = await Magazine.findById(magazineId);

    if (!magazine || !magazine.isPublic) {
      return res.status(404).json({ message: "Magazine not found or the magazine is private" });
    }

    const result = new MagazineCollaborator({ magazineId, userId, role, status });
    const collaboratorReq = await result.save();
    res.status(200).json({ message: "Collaboration request sent", collaboratorReq });
  } catch (error) {
    res.status(500).json({ message: "Error requesting collaboration", error });
  }
};

module.exports = createNewCollabReq;
