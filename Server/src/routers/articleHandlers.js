const express = require('express');
const { getArticles, postArticle, addToBookmark, AddLike, getAllBookmarks } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();

router.get('/', getArticles);
router.post('/', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/allBookmarks', getAllBookmarks);
router.get('/search', searchByCategory);
router.patch('/addLike', AddLike);

module.exports = router;
