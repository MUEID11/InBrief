const express = require("express");
const { createMagazine } = require("../../controllers/MagazineControllers/createMagazine");
const addArticle = require("../../controllers/MagazineControllers/addArticle");
const { followMagazine, unfollowMagazine } = require("../../controllers/MagazineControllers/followMagazine");
const getAllMagazines = require("../../controllers/MagazineControllers/getAllMagazines");
const getAMagazine = require("../../controllers/MagazineControllers/getAMagazine");
const deleteMagazine = require("../../controllers/MagazineControllers/deleteMagazine");
const router = express.Router();

router.post("/", createMagazine);
router.get("/", getAllMagazines);
router.get("/:magazineId", getAMagazine);
router.delete("/:magazineId", deleteMagazine);
router.post("/addArticle/:magazineId", addArticle);
router.patch("/followMagazine/:magazineId", followMagazine);
router.patch("/unfollowMagazine/:magazineId", unfollowMagazine);

module.exports = router;
