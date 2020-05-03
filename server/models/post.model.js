const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Must enter some content to the post!']
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Post must have an user'],
      ref: 'User'
    },
    likes: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: 'User'
        }
      }
    ],
    comments: [
      {
        commentId: {
          type: mongoose.Schema.ObjectId,
          ref: 'Comment'
        }
      }
    ]
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
