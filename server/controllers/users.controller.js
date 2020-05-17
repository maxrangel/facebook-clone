const User = require('../models/user.model');
const Post = require('../models/post.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getUserProfile = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) return next(new AppError('No user was found...', 404));

  const userPosts = await Post.find({ userId: id });

  res.status(200).json({
    status: 'success',
    data: {
      user,
      userPosts
    }
  });
});
