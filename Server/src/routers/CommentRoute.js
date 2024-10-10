const express = require('express');
const { createComment, getAllComments, addReply, addLikeComment, deleteComment, deleteReply  } = require('../controllers/CommentController');
const router = express.Router();

router.post('/:postId/createComment',createComment );
router.get('/:postId/comments',getAllComments );
router.put('/:commentId/reply',addReply );
router.post('/:commentId/like', addLikeComment);
router.delete("/:commentId", deleteComment);
router.delete("/:commentId/replies/:replyId", deleteReply);


module.exports = router;
