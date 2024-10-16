const express = require('express');
const { createDiscussion, getAllDiscussions, getDiscussionById } = require('../../controllers/ForumControllers/discussionControllers');

const router = express.Router();

// Route for creating a discussion
router.post('/', createDiscussion);
// Route for getting all discussions
router.get('/', getAllDiscussions);

router.get('/:id', getDiscussionById);

module.exports = router;
