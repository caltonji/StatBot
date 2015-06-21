/**
 * Created by AltonjiC on 6/20/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
    value: String,
    hits: Number
})

module.exports = mongoose.model('Word', WordSchema);
