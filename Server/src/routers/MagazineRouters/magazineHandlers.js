const express = require("express");
const { createMagazine } = require("../../controllers/MagazineControllers/createMagazine");
const addArticle = require("../../controllers/MagazineControllers/addArticle");
const router = express.Router();

router.post("/", createMagazine);
router.post("/addArticle/:magazineId", addArticle);

module.exports = router;
