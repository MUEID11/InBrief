const Article = require('../models/articleModel');

const postArticle = async (req, res) => {
  const newArticle = new Article(req.body);

  try {
    const result = await newArticle.save();
    res.status(201).json({ success: true, message: 'Todo inserted successfully', result });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = { postArticle, getArticles };
