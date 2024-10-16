const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    discussionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('ForumComment', commentSchema);
