const express = require('express');
const { getArticles, postArticle, addToBookmark, getBusinessArticles, getSportArticles, AddLike } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
// const { addArticle, getAllArticles } = require('../controllers/ArticleControllers/article.controller')
// ('../controllers/ArticleControllers');
const router = express.Router();

router.get('/', getArticles);
router.post('/add', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/search', searchByCategory);
router.patch('/addLike', AddLike);

// // es - Get all articles
// router.get('/', getAllArticles);
// module.exports = router;
