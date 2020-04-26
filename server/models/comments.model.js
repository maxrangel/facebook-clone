const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Must enter some content to the post!']
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Comment must have an user'],
      ref: 'User'
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;