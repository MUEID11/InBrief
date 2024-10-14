// src/routers/commentRouter.js
const express = require('express');
const { addComment } = require('../../controllers/ForumControllers/commentControllers');

const router = express.Router();

// Route for adding comments to a specific discussion
router.post('/:id/comments', addComment);

module.exports = router;
