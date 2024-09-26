const News = require('../models/newsModel');

const searchByCategory = async (req, res) => {
    try {
        const category = req.query.category;
        
        if (!category) {
            return res.status(400).json({ message: 'Category parameter is required' });
        }

        const newsItems = await News.find({ category: category });

        if (newsItems.length === 0) {
            return res.status(404).json({ message: 'No news found for this category' });
        }

        res.status(200).json(newsItems);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { searchByCategory };