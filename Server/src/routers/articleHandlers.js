const express = require('express');
const { getArticles, postArticle, addToBookmark, likeArticle, unlikeArticle } = require('../controllers/ArticleControllers/article.controller');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();

router.get('/', getArticles)
router.post('/', postArticle);
router.patch('/addBookmark', addToBookmark);
router.get('/search', searchByCategory);
router.put('/:articleId/like', likeArticle);
router.put('/:articleId/unlike', unlikeArticle);

module.exports = router;
