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
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

postSchema.index({ _id: 1, userId: 1 });

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'comments',
    select: 'comment'
  });

  this.populate({
    path: 'userId',
    select: 'username'
  });
  next();
});

postSchema.pre('save', function (next) {
  this.populate({
    path: 'comments',
    select: 'comment'
  });

  this.populate('userId').populate({
    path: 'user',
    select: 'username profilePhoto'
  });
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
