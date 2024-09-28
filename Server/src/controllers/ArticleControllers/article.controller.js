const Article = require("../../models/articleModel");

const postArticle = async (req, res) => {
  const newArticle = new Article(req.body);

  try {
    const result = await newArticle.save();
    res
      .status(201)
      .json({ success: true, message: "Todo inserted successfully", result });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res
      .status(200)
      .json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
const getBusinessArticles = async (req, res) => {
  try {
    const businessArticle = await Article.find({ category: "Business" });
    res
      .status(200)
      .json({
        success: true,
        count: businessArticle.length,
        data: businessArticle,
      });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
const getSportArticles = async (req, res) => {
  try {
    const SportsArticle = await Article.find({ category: "Sports" });
    res
      .status(200)
      .json({
        success: true,
        count: SportsArticle.length,
        data: SportsArticle,
      });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const addToBookmark = async (req, res) => {
  const { articleId, userEmail } = req.body;

  try {
    // Update the post with $addToSet to prevent duplicate bookmarks(//$addToSet Adds userEmail to bookmarks if not already present)
    const result = await Article.updateOne(
      { _id: articleId },
      { $addToSet: { bookmarks: userEmail } }
    );
    console.log(result);
    // Check if the user email already exists in the bookmarks array
    const post = await Article.findOne({
      _id: articleId,
      bookmarks: userEmail,
    });
    if (post) {
      return res.status(400).json({ message: "Already exists in bookmarks" });
    }

    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Bookmark added successfully!" });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  postArticle,
  getArticles,
  addToBookmark,
  getBusinessArticles,
  getSportArticles,
};
