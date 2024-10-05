const Article = require('../models/articleModel');

const searchByCategory = async (req, res) => {
  try {
    console.log('first');
    const category = req.query.category;

    if (!category) {
      return res.status(400).json({ message: 'Category parameter is required' });
    }

    const newsItems = await Article.find({ category: { $regex: category, $options: 'i' } });

    if (newsItems.length === 0) {
      return res.status(404).json({ message: 'No news found for this category' });
    }

    res.status(200).json(newsItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { searchByCategory };
