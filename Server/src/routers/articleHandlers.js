const express = require('express');
const { getArticles, postArticle, addToBookmark } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
// const { addArticle, getAllArticles } = require('../controllers/ArticleControllers/article.controller')
// ('../controllers/ArticleControllers');
const router = express.Router();

router.get('/', getArticles);
router.post('/add', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/search', searchByCategory);
// //  Add a new article
// router.post('/', addArticle);

// // es - Get all articles
// router.get('/', getAllArticles);
// module.exports = router;
