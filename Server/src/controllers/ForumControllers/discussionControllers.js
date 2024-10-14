
const Discussion = require('../../models/ForumModels/Discussion');

exports.createDiscussion = async (req, res) => {
  try {
    const newDiscussion = new Discussion({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.path : null, // Handle image upload
      username: req.body.username,
      userImage: req.body.userImage,
    });
    await newDiscussion.save();
    res.status(201).json(newDiscussion);
  } catch (error) {
    console.error('Error creating discussion:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error creating discussion', error });
  }
};

exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find().populate('comments');
    res.status(200).json(discussions);
  } catch (error) {
    console.error('Error fetching discussions:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error fetching discussions', error });
  }
};
