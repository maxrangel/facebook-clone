const express = require('express');

const postsController = require('../controllers/posts.controller');
const protect = require('../middlewares/protect.middleware');

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(postsController.getAllPosts)
  .post(postsController.createNewPost);

router.get('/like/:postId/:userId', postsController.likePost);

module.exports = router;
