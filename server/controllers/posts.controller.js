const mongoose = require('mongoose');
const Post = require('../models/post.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();

  return res.status(200).json({
    status: 'success',
    data: {
      posts
    }
  });
});

exports.createNewPost = catchAsync(async (req, res, next) => {
  const { content, userId } = req.body;

  const validUser = await User.findById(userId);

  if (!validUser) return next(new AppError('This is an invalid user!', 400));

  const newPost = await Post.create({ content, userId });

  res.status(201).json({
    status: 'success',
    data: {
      newPost
    }
  });
});

exports.likePost = catchAsync(async (req, res, next) => {
  const { postId, userId } = req.body;

  const post = await Post.findById(postId);
  // const isPostLikedIndex = post.likes.findIndex(
  //   like =>
  //     mongoose.Types.ObjectId(like.userId) === mongoose.Types.ObjectId(userId)
  // );

  const isPostLiked = await Post.find({
    _id: postId,
    likes: { $elemMatch: { userId: userId } }
  });
  console.log(isPostLiked);

  // console.log(isPostLikedIndex);

  // // New like to post
  // if (isPostLikedIndex < 0) post.likes.push({ userId });
  // // Dislike post
  // else post.likes.splice(isPostLikedIndex, 1);

  // await post.save();

  res.status(201).json({
    status: 'success',
    data: {
      post
    }
  });
});
