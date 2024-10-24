const express = require("express");
const createNewCollabReq = require("../../controllers/MagazineControllers/CollaboratorControllers/createNewCollabReq");
const router = express.Router();

router.post("/", createNewCollabReq);

module.exports = router;
