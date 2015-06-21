/**
 * Created by AltonjiC on 6/21/15.
 */
var mongoose = require('mongoose');

var Word = mongoose.model('Word');
//var Message = mongoose.model('Message');

module.exports = {
    /*
     params: User user, the User associated with this Node
     function callback(string privateKey)
     */
    incrementWordCount: function (word) {

        var query = {'value': word};

        Word.findOne(query, function(err, doc){
            if (err) {
                console.log("error in finding word");
                return false;
            }
            if (!doc) {
                doc = new Word();
                newWord.value = word;
                newWord.hits = 1;
            } else {
                doc.hits = doc.hits + 1;
            }
            doc.save(function (err) {
                if (err) {
                    console.log("error in saving word");
                    return false;
                }
                return true;
            });
        });


    },
    getOrderedArray: function() {
        var sortedWords = Word.find({}).sort({hits: -1});
        if (sortedWords) {
            return sortedWords;
        } else {
            return [];
        }
    }
};