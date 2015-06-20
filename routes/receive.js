/**
 * Created by AltonjiC on 6/20/15.
 */
var express = require('express');
var router = express.Router();

var bot = require('../public/javascripts/bot.js');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(" query: " + req.query);
    res.send(process.some_var);
});


router.post('/', function(req, res, next) {
//    if ((req.body.sender_id) == rohanSenderId) {
//        bot.send();
//    }
    bot.send("test message, please ignore.");
    process.some_var = req.body;
    res.send(req.body);
});

module.exports = router;
