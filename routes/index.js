var express = require('express');
var router = express.Router();
var wordService = require("../services/wordService.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  // wordService.getOrderedArray(function(words) {
  //     res.render('index', { title: 'StatBot',  words: words});
  // });
  userService.getUserData(function(user) {
      res.render('index', { title: 'StatBot',  data: data});
  });
});


module.exports = router;
