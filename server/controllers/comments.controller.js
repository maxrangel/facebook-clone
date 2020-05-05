const Comment = require('../models/comments.model');
const Post = require('../models/post.model');
const catchAsync = require('../utils/catchAsync');

exports.createComment = catchAsync(async (req, res, next) => {
  const { comment, userId, postId } = req.body;

  const newComment = await Comment.create({ comment, userId, postId });

  await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });

  res.status(201).json({
    status: 'success',
    data: {
      newComment
    }
  });
});
