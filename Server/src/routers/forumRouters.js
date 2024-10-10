const express = require('express');
const { createDiscussion, getDiscussions } = require('../controllers/forumControllers');
const router = express.Router();

// new
router.post('/', createDiscussion);

// all
router.get('/', getDiscussions);

module.exports = router;
