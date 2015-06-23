/**
 * Created by AltonjiC on 6/21/15.
 */
var wordService = require('../../services/wordService.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    updateWordCounts: function (message, user_id, name) {



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

                newMessage = new Message();
                newMessage.user_id = user_id;
                newMessage.text = message;
                newMessage.name = name;

                doc.messages.addToSet(newMessage);

                message.replace(/[\.,!\?^@\(\);:/\\\*=\$%#"&\+\-<>]/g, "");
                var wordArray = message.split(" ");
                //Update Words of User
                wordArray.forEach(function(word) {
                    doc.findOne({'doc.words.value': word}, function(err, wordObject) {
                        if (err) {
                            console.log("Error finding word in user.");
                        }
                        if (!wordObject) {
                            wordObject = new Word();
                            wordObject.value = word;
                            wordObject.hits = 1;
                            doc.words.addToSet(wordObject);
                        } else {
                            wordObject.hits = doc.hits + 1;
                        }
                        doc.save(function(err) {
                            if (err) {
                                console.log("Error saving User Word.");
                            }
                            console.log("Saved the User Word.");
                        })
                    });
                });
            } else {
                newMessage = new Message();
                newMessage.user_id = user_id;
                newMessage.text = message;
                newMessage.name = name;

                doc.messages.addToSet(newMessage);

                //Update Words of User
                message.replace(/[\.,!\?^@\(\);:/\\\*=\$%#"&\+\-<>]/g, "");
                var wordArray = message.split(" ");
                //Update Words of User
                wordArray.forEach(function(word) {
                    doc.findOne({'doc.words.value': word}, function(err, wordObject) {
                        if (err) {
                            console.log("Error finding word in user.");
                        }
                        if (!wordObject) {
                            wordObject = new Word();
                            wordObject.value = word;
                            wordObject.hits = 1;
                            doc.words.addToSet(wordObject);
                        } else {
                            wordObject.hits = doc.hits + 1;
                        }
                        doc.save(function(err) {
                            if (err) {
                                console.log("Error saving User Word.");
                            }
                            console.log("Saved the User Word.");
                        })
                    });
                });
            }
            doc.save(function (err) {
                if (err) {
                    console.log("error in saving word");
                    callback(false);
                }
                callback(true)
            });
        });

        // wordArray.forEach(function(word) {
        //     wordService.incrementWordCount(word, function (saved) {
        //         if (saved) {
        //             console.log("incremented: " + word);
        //         } else {
        //             console.log("failed: " + word);
        //         }
        //     });
        // });

    }
}
