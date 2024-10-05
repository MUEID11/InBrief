const express = require('express');
const { searchByCategory } = require('../controllers/searchController');
const router = express.Router();

router.get('/search', searchByCategory);

module.exports = router;
