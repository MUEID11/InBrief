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
      return res.status(400).json({ message: 'Already exists in bookmarks!' });
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
const AddLike = async (req, res) => {
  const { articleId, userEmail } = req.body;

  try {
    // Check if the user has already liked the article
    const post = await Article.findOne({ _id: articleId, likes: userEmail });

    if (post) {
      // if User has already liked the post, then remove their like
      const result = await Article.updateOne({ _id: articleId }, { $pull: { likes: userEmail } });

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: 'Like removed successfully!' });
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    } else {
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

module.exports = {
  postArticle,
  getArticles,
  addToBookmark,
  AddLike,
};
