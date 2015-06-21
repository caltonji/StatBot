/**
 * Created by AltonjiC on 6/20/15.
 */
var express = require('express');
var router = express.Router();

var bot = require('../public/javascripts/bot.js');
var process = require('../public/javascripts/processingMessages.js');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(" query: " + req.query);
    res.send(process.some_var);
});


router.post('/', function(req, res, next) {
    if (req.body.sender_type != 'bot') {
        console.log(req);
        process.updateWordCounts(req.body.text);
    }
    res.send(req.body);
});

module.exports = router;
