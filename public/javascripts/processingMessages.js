/**
 * Created by AltonjiC on 6/21/15.
 */
var wordService = require('../../services/wordService.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    updateWordCounts: function (message, user_id, name) {

        message.replace(/[\.,!\?^@\(\);:/\\\*=\$%#"&\+\-<>]/g, "");
        var wordArray = message.split(" ");

        var query = {'value': user_id};

        User.findOne(query, function(err, doc) {
            if (err) {
                console.log("Error finding user_id");
                callback(false);
            }
            console.log(doc);
            if (!doc) {
                doc = new User();
                doc.user_id = user_id;
                doc.name = name;
                //Update Words of User
                doc.words = wordArray.forEach(function(word) {
                    wordService.incrementWordCount(word, function (saved) {
                        if (saved) {
                            console.log("incremented: " + word);
                        } else {
                            console.log("failed: " + word);
                        }
                    });
                });
            } else {
                //Update Words of User
            }
            doc.save(function (err) {
                if (err) {
                    console.log("error in saving word");
                    callback(false);
                }
                callback(true)
            });
        });



    }
}
