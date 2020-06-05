const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user.model');

module.exports = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return next(new AppError('Unauthorized access!', 403));
  }
  // Bearer asdfsidfjoiewrfe  <--- (token)
  const token = authorization.split(' ')[1];

  // Validate token
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_ACCESS_SECRET
  );

  if (!decodedToken) return next(new AppError('Session expired!', 403));

  // Fetch user
  const currentUser = await User.findById(decodedToken.id);

  if (!currentUser) {
    return next(
      new AppError('The user belonging to the token no longer exists.', 401)
    );
  }

  // Grant access to protected route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});
