const mongoose = require("mongoose");

const magazineCollaboratorSchema = new mongoose.Schema({
  magazine: { type: mongoose.Schema.Types.ObjectId, ref: "Magazine", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  role: { type: String, enum: ["owner", "collaborator"], default: "collaborator" },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
});

const MagazineCollaborator = mongoose.model("MagazineCollaborator", magazineCollaboratorSchema);
module.exports = MagazineCollaborator;
