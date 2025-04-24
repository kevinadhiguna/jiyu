const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500, 'Comment can not exceed 500 characters'],
    },
});

const comment = mongoose.model('comment', commentSchema);
module.exports = { comment };
