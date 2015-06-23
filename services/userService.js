/**
 * Created by Lance Hasson on 6/22/15.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {

    getUserData: function(callback) {
        User.find({}, function(err, data) {
            if (err) {
                return [];
            }
            callback(data);
        })
    }

};
