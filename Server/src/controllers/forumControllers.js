const Discussion = require('../models/Discussion');

// new discussion
const createDiscussion = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newDiscussion = new Discussion(req.body);
    await newDiscussion.save();
    res.status(201).json({ message: 'Discussion created successfully!', discussion: newDiscussion });
  } catch (err) {
    res.status(500).json({ message: 'Error creating discussion', error });
  }
};

//all discussion
const getDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.status(200).json(discussions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching discussions', error });
  }
};

module.exports = {
  createDiscussion,
  getDiscussions,
};
