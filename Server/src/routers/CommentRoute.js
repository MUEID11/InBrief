const express = require('express');
const { createComment, getAllComments } = require('../controllers/CommentController');
const router = express.Router();

router.post('/:postId/createComment',createComment );
router.get('/:postId/comments',getAllComments );

module.exports = router;
