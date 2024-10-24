const mongoose = require("mongoose");

const magazineCollaboratorSchema = new mongoose.Schema({
  magazineId: { type: mongoose.Schema.Types.ObjectId, ref: "Magazine", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  role: { type: String, enum: ["owner", "collaborator"], default: "collaborator" },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
});

const MagazineCollaborator = mongoose.model("MagazineCollaborator", magazineCollaboratorSchema);
module.exports = MagazineCollaborator;
