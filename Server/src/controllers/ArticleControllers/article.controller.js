const Article = require('../../models/articleModel');

const postArticle = async (req, res) => {
  const newArticle = new Article(req.body);
  console.log(newArticle);
  try {
    const result = await newArticle.save();
    res.status(201).json({ success: true, message: 'Todo inserted successfully', result });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getArticles = async (req, res) => {
  const category = req.query?.category;
  const sort = req.query?.sort;
  const queryLimit = req.query?.limit;

  let limit = 0;
  let query = {};
  let sortOption = {};
  if (category) {
    query = { category: { $regex: category, $options: 'i' } };
  }
  if (sort) {
    sortOption = { createdAt: sort === 'dsc' ? -1 : 1 };
  }
  if (queryLimit) {
    limit = parseInt(queryLimit);
  }
  try {
    const articles = await Article.find(query).sort(sortOption).limit(limit);
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const addToBookmark = async (req, res) => {
  const { articleId, userEmail } = req.body;

  try {
    // Check if the user email already exists in the bookmarks array
    const alreadyExists = await Article.findOne({ _id: articleId, bookmarks: { $in: [userEmail] } });
    console.log(alreadyExists);
    if (alreadyExists) {
      await Article.updateOne({ _id: articleId }, { $pull: { bookmarks: userEmail } });
      return res.status(200).json({ message: 'Bookmark removed successfully!' });
    }
    // Update the post with $addToSet to prevent duplicate bookmarks(//$addToSet Adds userEmail to bookmarks if not already present)
    const result = await Article.updateOne({ _id: articleId }, { $addToSet: { bookmarks: userEmail } });
    console.log(result);

    if (result.matchedCount > 0) {
      res.status(200).json({ message: 'Bookmark added successfully!' });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

const getAllBookmarks = async (req, res) => {
  const userEmail = req.query?.userEmail;
  if (!userEmail) {
    return res.status(400).json({ message: 'User Email parameter is required' });
  }
  // get all bookmarks that has the email in bookmarks field which is an array
  try {
    const articles = await Article.find({ bookmarks: { $in: [userEmail] } });
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const AddLike = async (req, res) => {
  const { articleId, userEmail } = req.body;

  try {
    const article = await Article.findOne({ _id: articleId, likes: { $in: [userEmail] } });

    if (article) {
      // If user has already liked the post, remove their like (Unlike)
      const result = await Article.updateOne({ _id: articleId }, { $pull: { likes: userEmail } });

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: 'Like removed successfully!' });
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } else {
      // If user has not liked the post, add their like
      const result = await Article.updateOne({ _id: articleId }, { $addToSet: { likes: userEmail } });

      if (result.matchedCount > 0) {
        res.status(200).json({ message: 'Article liked successfully!' });
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
// Get a single article by ID
const getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  postArticle,
  getArticles,
  addToBookmark,
  AddLike,
  getAllBookmarks,
  getArticleById
};
