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
    incrementWordCount: function (word, callback) {

        var query = {'value': word};

        Word.findOne(query, function(err, doc){
            if (err) {
                console.log("error in finding word");
                callback(false);
            }
            console.log(doc);
            if (!doc) {
                doc = new Word();
                doc.value = word;
                doc.hits = 1;
            } else {
                doc.hits = doc.hits + 1;
            }
            doc.save(function (err) {
                if (err) {
                    console.log("error in saving word");
                    callback(false);
                }
                callback(true)
            });
        });


    },
    getOrderedArray: function(callback) {
        Word.find({}, function(err, words){
            if (err) return [];
            words.sort(function(a, b) {return b.hits - a.hits});
//            console.log(words);
            callback(words);
        });
    }
};