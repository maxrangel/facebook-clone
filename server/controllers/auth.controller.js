const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = userId => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createAndSendToken = async (user, statusCode, req, res) => {
  const token = await signToken(user._id);

  return res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

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

  const correctPassword = await user.correctPassword(password, user.password);

  if (!user || !correctPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Remove password from output
  user.password = undefined;

  createAndSendToken(user, 200, req, res);
});
