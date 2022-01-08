const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articles');

router.get('/', articleController.getArticles);

module.exports = router;
