const express = require('express');
const { getArticles, postArticle, addToBookmark, AddLike, getAllBookmarks, getArticleById } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();

router.get('/', getArticles);
router.post('/', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/allBookmarks', getAllBookmarks);
router.get('/search', searchByCategory);
router.patch('/addLike', AddLike);

router.get('/:id', getArticleById); // Get a specific article by ID
module.exports = router;
