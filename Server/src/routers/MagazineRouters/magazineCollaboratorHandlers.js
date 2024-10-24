const express = require("express");
const createNewCollabReq = require("../../controllers/MagazineControllers/CollaboratorControllers/createNewCollabReq");
const acceptOrRejectCollabReq = require("../../controllers/MagazineControllers/CollaboratorControllers/acceptOrRejectCollabReq");
const router = express.Router();

router.post("/", createNewCollabReq);
router.patch("/:collabId", acceptOrRejectCollabReq);

module.exports = router;
