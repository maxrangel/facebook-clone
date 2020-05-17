const Post = require('../models/post.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find().sort({ createdAt: -1 });

  return res.status(200).json({
    status: 'success',
    data: {
      posts
    }
  });
});

exports.createNewPost = catchAsync(async (req, res, next) => {
  const { content, userId } = req.body;

  let newPost = await Post.create({ content, userId });
  newPost = await newPost.populate('userId').execPopulate();

  res.status(201).json({
    status: 'success',
    data: {
      newPost
    }
  });
});

exports.likePost = catchAsync(async (req, res, next) => {
  const { postId, userId } = req.body;

  // Check if the user has already liked this post
  const isPostLiked = await Post.findOne({
    _id: postId,
    likes: { $in: [userId] }
  });

  if (!isPostLiked) {
    // Like post
    await Post.findByIdAndUpdate(postId, { $push: { likes: userId } });
  } else {
    // Dislike post, remove it from the array
    await Post.findByIdAndUpdate(postId, {
      $pull: { likes: { $in: [userId] } }
    });
  }

  res.status(204).json({
    status: 'success'
  });
});
