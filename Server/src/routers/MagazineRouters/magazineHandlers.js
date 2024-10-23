const express = require("express");
const { createMagazine } = require("../../controllers/MagazineControllers/createMagazine");
const router = express.Router();

router.post("/", createMagazine);

module.exports = router;
