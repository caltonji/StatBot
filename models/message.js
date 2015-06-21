/**
 * Created by AltonjiC on 6/20/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    text: String,
    avatar_url: String,
    created_at: Date,
    group_id: String,
    name: String,
    sender_id: String,
    sender_type: String,
    source_guid: String,
    system: Boolean,
    user_id: String
})

module.exports = mongoose.model('Message', MessageSchema);
