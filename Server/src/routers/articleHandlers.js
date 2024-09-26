const express = require('express');
const { postArticle, getArticles } = require('../controllers/article.controller');
const router = express.Router();
// const Article = require('../models/articleModel');

router.get('/', getArticles);
router.post('/', postArticle);

module.exports = router;
