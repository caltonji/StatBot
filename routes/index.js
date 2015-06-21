var express = require('express');
var router = express.Router();
var wordService = require("../services/wordService.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StatBot',  words: JSON.stringify(wordService.getOrderedArray())});
});


module.exports = router;
