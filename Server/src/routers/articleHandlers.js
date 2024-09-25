const express = require('express');
const router = express.Router();
const Article = require('../models/articleModel');

router.post('/', async (req, res) => {
  const newArticle = new Article(req.body);

  try {
    const result = await newArticle.save();
    res.status(201).json({ success: true, message: 'Todo inserted successfully', result });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
