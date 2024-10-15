
const express = require('express');
const multer = require('multer');
const { createDiscussion, getAllDiscussions } = require('../../controllers/ForumControllers/discussionControllers');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Image upload folder

// Route for creating a discussion
router.post('/', upload.single('image'), createDiscussion);
// Route for getting all discussions
router.get('/', getAllDiscussions);

module.exports = router;
