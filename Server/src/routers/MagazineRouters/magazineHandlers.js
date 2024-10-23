const express = require("express");
const { createMagazine } = require("../../controllers/MagazineControllers/createMagazine");
const addArticle = require("../../controllers/MagazineControllers/addArticle");
const { followMagazine, unfollowMagazine } = require("../../controllers/MagazineControllers/followMagazine");
const router = express.Router();

router.post("/", createMagazine);
router.post("/addArticle/:magazineId", addArticle);
router.patch("/followMagazine/:magazineId", followMagazine);
router.patch("/unfollowMagazine/:magazineId", unfollowMagazine);

module.exports = router;
