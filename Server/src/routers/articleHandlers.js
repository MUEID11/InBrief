const express = require("express");
const {
  getArticles,
  postArticle,
  addToBookmark,
  AddLike,
  getAllBookmarks,
  getArticleById,
  getArticlesByEmail,
  deleteArticle,
  getArticlesByPreferences,
} = require("../controllers/ArticleControllers/article.controller");
const { searchByCategory } = require("../controllers/searchController");
const router = express.Router();

router.get("/", getArticles);
router.post("/", postArticle);
router.get("/getArticleByPreferences/:id", getArticlesByPreferences);
router.patch("/addBookmark", addToBookmark);
router.get("/allBookmarks", getAllBookmarks);
router.get("/search", searchByCategory);
router.patch("/addLike", AddLike);
router.get("/:id", getArticleById); // Get a specific article by ID
router.get("/user/:email", getArticlesByEmail);
router.delete("/:id", deleteArticle);
module.exports = router;
