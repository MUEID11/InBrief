const express = require('express');
const { createComment, getAllComments, addReply } = require('../controllers/CommentController');
const router = express.Router();

router.post('/:postId/createComment',createComment );
router.get('/:postId/comments',getAllComments );
router.put('/:commentId/reply',addReply );

module.exports = router;
