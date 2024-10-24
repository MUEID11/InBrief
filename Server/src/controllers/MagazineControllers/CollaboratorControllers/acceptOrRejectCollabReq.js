const MagazineCollaborator = require("../../../models/Magazine/magazineCollaboratorsModel");

const acceptOrRejectCollabReq = async (req, res) => {
  try {
    const { collabId } = req.params;
    const { status } = req.body;

    const updatedCollabReq = await MagazineCollaborator.findByIdAndUpdate(collabId, { status }, { new: true });

    // If the request is not found, return a 404 error
    if (!updatedCollabReq) {
      return res.status(404).json({ message: "Collaboration request not found" });
    }

    // Respond with the updated collaborator request
    res.status(200).json({ message: "Collaboration request updated", updatedCollabReq });
  } catch (error) {
    res.status(500).json({ message: "Error updating collaboration request", error });
  }
};

module.exports = acceptOrRejectCollabReq;
