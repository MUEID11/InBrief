const express = require('express');
const { getArticles, postArticle, addToBookmark } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();
// const Article = require('../models/articleModel');

router.post('/', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/search', searchByCategory);

module.exports = router;
