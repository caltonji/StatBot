/**
 * Created by AltonjiC on 6/21/15.
 */
var wordService = require('../../services/wordService.js');

module.exports = {

    updateWordCounts: function (message) {
        message.replace(/[\.,!\?^@\(\);:/\\\*=\$%#"&\+\-<>]/g, "");
        var wordArray = message.split(" ");
        wordArray.forEach(function(word) {
            var saved = wordService.incrementWordCount(word);
            if (saved) {
                console.log("incremented: " + word);
            } else {
                console.log("failed: " + word);
            }
        });
    }
}