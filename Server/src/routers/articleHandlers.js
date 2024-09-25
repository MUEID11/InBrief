const express = require('express');
const { postArticle } = require('../controllers/article.controller');
const router = express.Router();
// const Article = require('../models/articleModel');

router.post('/', postArticle);

module.exports = router;
