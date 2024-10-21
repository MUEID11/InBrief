const Article = require("../../models/articleModel");
const userModel = require("../../models/userModel");

// const postArticle = async (req, res) => {
//   const newArticle = new Article(req.body);
//   try {
//     const result = await newArticle.save();
//     res.status(201).json({ success: true, message: 'Todo inserted successfully', result });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
const postArticle = async (req, res) => {
  const newArticle = new Article({
    ...req.body,
    status: "pending", // Set the initial status to 'pending'
  });
  try {
    const result = await newArticle.save();
    res.status(201).json({ success: true, message: "Article submitted for approval", result });
  } catch (error) {
    res.status(500).json(error);
  }
};

//this function for updating the status
const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const article = await Article.findByIdAndUpdate(id, { status }, { new: true });
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ success: true, message: "Article status updated", article });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
// const updateStatus = async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   console.log(`Updating article ${id} with status: ${status}`); // Log the received values

//   try {
//     const article = await Article.findByIdAndUpdate(id, { status: [status] }, { new: true });
//     // ... rest of the code
//   } catch (error) {
//     console.error("Error in updateStatus:", error); // Log the error
//     res.status(500).json({ message: 'Internal Server Error', error });
//   }
// };

const getArticles = async (req, res) => {
  const category = req.query?.category;
  const sort = req.query?.sort;
  const queryLimit = req.query?.limit;

  let limit = 0;
  let query = {};
  let sortOption = {};
  if (category) {
    query = { category: { $regex: category, $options: "i" } };
  }
  if (sort) {
    sortOption = { createdAt: sort === "dsc" ? -1 : 1 };
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

const getArticlesByPreferences = async (req, res) => {
  const id = req.params?.id;
  const sort = req.query?.sort;
  const source = req.query?.source;
  if (!id) {
    return res.status(400).json({ message: "User preferences are required" });
  }
  // get articles by userPreferences array of strings that are matching with category field of article
  try {
    const user = await userModel.findById(id);
    if (!user || !user.preferences || user.preferences.length === 0) {
      const articles = await Article.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: articles.length, data: articles });
    }

    const categories = user.preferences;

    let query = { category: { $in: categories } };
    let options = {};
    if (sort) {
      options = { createdAt: sort === "DSC" ? -1 : 1 };
    } else {
      options = { createdAt: -1 };
    }

    const articles = await Article.find(query).sort(options);
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

const addToBookmark = async (req, res) => {
  try {
    const { articleId, userEmail } = req.body;
    if (!articleId || !userEmail) {
      return res.status(400).json({ message: "Something went wrong!" });
    }
    // Check if the user email already exists in the bookmarks array
    const alreadyExists = await Article.findOne({
      _id: articleId,
      bookmarks: { $in: [userEmail] },
    });
    if (alreadyExists) {
      await Article.updateOne({ _id: articleId }, { $pull: { bookmarks: userEmail } });
      return res.status(200).json({ message: "Bookmark removed successfully!" });
    }
    // Update the post with $addToSet to prevent duplicate bookmarks(//$addToSet Adds userEmail to bookmarks if not already present)
    const result = await Article.updateOne({ _id: articleId }, { $addToSet: { bookmarks: userEmail } });

    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Bookmark added successfully!" });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getAllBookmarks = async (req, res) => {
  const userEmail = req.query?.userEmail;
  if (!userEmail) {
    return res.status(400).json({ message: "User Email parameter is required" });
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
    const article = await Article.findOne({
      _id: articleId,
      likes: { $in: [userEmail] },
    });

    if (article) {
      // If user has already liked the post, remove their like (Unlike)
      const result = await Article.updateOne({ _id: articleId }, { $pull: { likes: userEmail } });

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: "Like removed successfully!" });
      } else {
        res.status(404).json({ message: "Article not found" });
      }
    } else {
      // If user has not liked the post, add their like
      const result = await Article.updateOne({ _id: articleId }, { $addToSet: { likes: userEmail } });

      if (result.matchedCount > 0) {
        res.status(200).json({ message: "Article liked successfully!" });
      } else {
        res.status(404).json({ message: "Article not found" });
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
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const getArticlesByEmail = async (req, res) => {
  const email = req.params.email;

  try {
    const articles = await Article.find({ postedBy: email });

    if (articles.length === 0) {
      return res.status(404).json({ message: "No products found for this email" });
    }

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const articleId = req.params.id;

    const result = await Article.findByIdAndDelete(articleId);

    if (!result) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article deleted successfully", result });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
const getMyVotesArticles = async (req, res) => {
  const userEmail = req.params?.email;
  if (!userEmail) {
    return res.status(400).json({ message: "User Email parameter is required" });
  }

  try {
    const articles = await Article.find({ likes: { $in: [userEmail] } });
    res.status(200).json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

module.exports = {
  postArticle,
  getArticles,
  addToBookmark,
  AddLike,
  getAllBookmarks,
  getArticleById,
  getArticlesByPreferences,
  getArticlesByEmail,
  deleteArticle,
  updateStatus,
  getMyVotesArticles,
};
