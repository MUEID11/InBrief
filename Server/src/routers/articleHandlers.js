const express = require('express');
const { getArticles, postArticle } = require('../controllers/ArticleControllers/article.controller');
const router = express.Router();

router.get('/', getArticles);
router.post('/', postArticle);

module.exports = router;
