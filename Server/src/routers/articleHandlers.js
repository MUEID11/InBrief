const express = require('express');
const { getArticles, postArticle, addToBookmark, getBusinessArticles, getSportArticles } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();

router.get('/', getArticles)
router.get('/business', getBusinessArticles)
router.get('/sports', getSportArticles)
router.post('/', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/search', searchByCategory);

module.exports = router;
