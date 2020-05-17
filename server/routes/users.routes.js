const express = require('express');

const userController = require('../controllers/users.controller');

const router = express.Router();

router.get('/profile/:id', userController.getUserProfile);

module.exports = router;
