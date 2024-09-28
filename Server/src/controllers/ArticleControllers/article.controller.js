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

const likeArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const userId = req.body.userId; // Get userId from request body

    const article = await Article.findById(articleId);

    if (!article.like.includes(userId)) {
      article.like.push(userId); // Add user ID to like array
      await article.save();
      return res
        .status(200)
        .json({ message: "Article liked", likes: article.like.length });
    } else {
      return res
        .status(400)
        .json({ message: "You have already liked this article" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// Unlike an article
const unlikeArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const userId = req.body.userId; // Get userId from request body

    const article = await Article.findById(articleId);

    if (article.like.includes(userId)) {
      article.like = article.like.filter(
        (id) => id.toString() !== userId.toString()
      ); // Remove user ID from like array
      await article.save();
      return res
        .status(200)
        .json({ message: "Article unliked", likes: article.like.length });
    } else {
      return res
        .status(400)
        .json({ message: "You haven't liked this article yet" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  postArticle,
  getArticles,
  addToBookmark,
  likeArticle,
  unlikeArticle};
