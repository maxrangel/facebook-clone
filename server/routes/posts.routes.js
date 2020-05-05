const express = require('express');

const postsController = require('../controllers/posts.controller');

const router = express.Router();

router
  .route('/')
  .get(postsController.getAllPosts)
  .post(postsController.createNewPost);

router.post('/like', postsController.likePost);

module.exports = router;
