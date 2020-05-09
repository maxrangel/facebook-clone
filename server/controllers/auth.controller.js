const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
  const { username, email, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    username,
    email,
    password,
    passwordConfirm
  });

  // Remove password from output
  newUser.password = undefined;

  return res.status(201).json({
    status: 'success',
    data: {
      newUser
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  const correctPassword = await user.correctPassword(password, user.password) 

  if (!user || !correctPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Remove password from output
  user.password = undefined;

  return res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});
